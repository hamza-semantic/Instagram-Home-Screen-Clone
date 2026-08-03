import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  header: {
    width : "100%",
    flexDirection : "row",
    justifyContent : "space-between",
    backgroundColor : "white",
  },

logo : {
  flexDirection : "row",
  alignItems : "center",
  
}
,
logoIcon : {
  width : 25,
  height :25,
  margin : 6,
  paddingLeft : 20,
  
}

,
textLogo : {
  marginBottom : 10,
  fontSize : 23,
  fontWeight : "bold",
  paddingTop : 10,
  


},

iconsContainer : {
  marginTop : 15,
  flexDirection : "row",
  marginRight : 10,
  gap : 16,
  paddingRight : 5,
},

storyImage: {

  width: 60,
  height: 60,
  borderRadius: 30,  
  borderWidth: 3,
  borderColor: '#C23A59',
},

storyContainer : {
  alignItems : "center",
  marginRight : 7,
  marginLeft : 5,
  height : 100,
  marginBottom : 10,
},


postContainer: {
  marginBottom: 20,
},

postHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
},


postProfilePic: {
  width: 32,
  height: 32,
  borderRadius: 16,
  marginRight: 8,
},

postUsername: {
  fontWeight: 'bold',
},


postImage: {
  width: '100%',
  height: 400,
},


actionsRow: {
  flexDirection: 'row',
  paddingHorizontal: 10,
  paddingVertical: 8,
},


actionIcon: {
  width: 25,
  height: 26,
  marginRight: 15,
},


likesText: {
  fontWeight: 'bold',
  paddingHorizontal: 10,
},


captionText: {
  paddingHorizontal: 10,
  paddingBottom: 10,
},

loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },

  loginText: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
    color : "#9b0f0f"
  },

  formContainer: {
    width: "100%",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 30,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#fafafa",
    fontSize: 14,
  },

  loginButtonContainer: {
    marginTop: 10,
    backgroundColor: "#9b0f0f",
    width: "100%",
    borderRadius: 30,
  },

  loginButtonText: {
    color: "white",
    padding: 12,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },

  forgotPassword: {
    color: "#9b0f0f",
    textAlign: "center",
    marginTop: 15,
    fontSize: 13,
  },

  signupContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  signupText: {
    color: "#9b0f0f",
    fontWeight: "600",
  },
});

export default styles;





    