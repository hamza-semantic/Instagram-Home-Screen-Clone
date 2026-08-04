# Authentication Flow — Documentation

## Overview

This document explains the API integration and authentication architecture implemented for the Instagram Clone React Native application. The system handles user registration, login, secure token storage, automatic token attachment, token refresh, protected API requests, and logout.

**API Used:** [Platzi Fake Store API](https://fakeapi.platzi.com/) (EscuelaJS)
**Base URL:** `https://api.escuelajs.co/api/v1`

---

## Folder Structure

```
src/
  api/
    apiClient.js        → Axios instance, base URL, request/response interceptors
    refreshToken.js      → Handles calling the refresh-token endpoint
  services/
    authService.js       → Register, login, logout, and profile-fetching functions
  utils/
    tokenStorage.js       → Secure save/get/remove functions for access & refresh tokens
  navigation/
    AuthNavigator.js      → Stack navigator for Login/Register screens
    AppNavigator.js        → Root navigator, switches between Auth stack and main app
  screens/
    LoginScreen.js
    RegisterScreen.js
    ProfileScreen.js
```

---

## Architecture Summary

### 1. API Client (`api/apiClient.js`)

A single reusable Axios instance is created with:
- A shared `baseURL`, so individual requests only need to specify the endpoint path (e.g. `/auth/login`).
- A default `Content-Type: application/json` header.
- A 10-second request timeout.

All API calls in the app go through this one instance, keeping configuration centralized (reusable API service layer).

### 2. Secure Token Storage (`utils/tokenStorage.js`)

Tokens are stored using **`react-native-encrypted-storage`**, which uses the device's native secure storage (iOS Keychain / Android Keystore) rather than plain-text storage. Four functions are exposed:

- `saveTokens(accessToken, refreshToken)`
- `getAccessToken()`
- `getRefreshToken()`
- `removeTokens()`

### 3. Automatic Token Attachment (Request Interceptor)

A request interceptor is registered on the Axios instance. Before every outgoing request, it retrieves the access token from Encrypted Storage and attaches it to the `Authorization` header as a Bearer token — automatically, without needing to repeat this logic in every API call.

### 4. Unauthorized (401) Handling & Token Refresh (Response Interceptor)

A response interceptor inspects every response:

- If the response is successful, it passes through unchanged.
- If the response status is `401` (token expired/invalid) and the request hasn't already been retried:
  1. The refresh token is retrieved from storage.
  2. If no refresh token exists, tokens are cleared and the error is returned (user will be routed to Login via Redux state).
  3. Otherwise, a request is made to `/auth/refresh-token` (via `api/refreshToken.js`, using a plain Axios call to avoid re-triggering the interceptors) to obtain a new access/refresh token pair.
  4. New tokens are saved, the original failed request is updated with the new access token, and automatically retried.
  5. If the refresh call itself fails (refresh token also invalid), tokens are cleared and the user is effectively logged out.

A `_retry` flag on the request config prevents infinite retry loops.

### 5. Authentication Service Layer (`services/authService.js`)

Exposes the following functions, each using the shared `apiClient`:

| Function | Endpoint | Method |
|---|---|---|
| `registerUser(name, email, password)` | `/users/` | POST |
| `loginUser(email, password)` | `/auth/login` | POST |
| `getUserProfile()` | `/auth/profile` | GET (protected) |
| `logoutUser()` | — (clears local tokens) | — |

### 6. Navigation & Session State

- `AppNavigator.js` reads `isLoggedIn` from Redux (`state.auth.isLoggedIn`).
- If not logged in, it renders `AuthNavigator` (a stack containing Login and Register screens, allowing navigation between them).
- If logged in, it renders the main app (Drawer/Tab navigation).
- Logging in dispatches a Redux action to set `isLoggedIn: true`; logging out clears both the Redux state and the Encrypted Storage tokens, and the app automatically routes back to the Login screen.

### 7. Error Handling & Loading States

Each screen (Login, Register, Profile) tracks loading and error state locally (via `useState` or React Query's built-in `isPending` / `isLoading` / `isError`). Errors are distinguished by type:

- **Network errors** (no `error.response` — request never reached the server): shown as "Network error. Please check your internet connection."
- **Credential errors** (`401` from server): shown as "Invalid email or password."
- **Other server errors**: shown as a generic "Something went wrong" message.

---

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install axios react-native-encrypted-storage
   ```

2. Ensure the following folders exist under `src/`: `api/`, `services/`, `utils/`.

3. Confirm `AppNavigator.js` wraps everything in a single `NavigationContainer`, conditionally rendering `AuthNavigator` (logged out) or the main app navigator (logged in) — this is required for `navigation.navigate()` to work correctly across Login/Register.

4. Run the app:
   ```bash
   npx react-native run-android
   ```

---

## Flow Summary

```
App start
  → Check Redux isLoggedIn (backed by tokens saved during login)
  → If false → AuthNavigator → Login screen
  → If true  → Main app

Login/Register
  → authService calls apiClient → API
  → On success, tokens saved via tokenStorage (Encrypted Storage)
  → Redux isLoggedIn set to true

Any protected request
  → Request Interceptor attaches access token automatically
  → If 401 → Response Interceptor refreshes token and retries automatically
  → If refresh fails → tokens cleared, user effectively logged out

Logout
  → tokenStorage.removeTokens() clears Encrypted Storage
  → Redux isLoggedIn set to false
  → App automatically routes back to Login screen
```