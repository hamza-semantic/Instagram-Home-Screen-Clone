import Post1 from "../assets/king.jpg";
import Post2 from "../assets/shaheen.jpg";
import Post3 from "../assets/sahibzada.jpg";
import Post4 from "../assets/naseem.jpg";
import BabarProfile from "../assets/babar-profile.jpg";
import ShaheenProfile from "../assets/shaheen-profile.jpg";
import SahibzadaProfile from "../assets/sahibzada-profile.jpg";
import NaseemProfile from "../assets/naseem-profile.jpg";
import AliProfile from "../assets/ali.png";
import AhmedProfile from "../assets/ahmed.png";
import ArsalProfile from "../assets/arsal.jpg";
import ArslanProfile from "../assets/arslan.jpg";
import AliyanProfile from "../assets/aliyan.jpg";


export const storiesData = [
  { id: '1', username: 'Ali' ,profilePic : AliProfile },
  { id: '2', username: 'Ahmed' , profilePic : AhmedProfile},
  { id: '3', username: 'Arsal' , profilePic : ArsalProfile},
  { id: '4', username: 'Arslan' , profilePic : ArslanProfile},
  { id: '5', username: 'Aliyan' , profilePic : AliyanProfile},
  { id: '6', username: 'Babar' },
  { id: '7', username: 'Hamza' },
  { id: '8', username: 'Umer' },
  { id: '9', username: 'Yasir' },
  { id: '10', username: 'Faheem' },
];

export const postData = [
  { id: 1, username: "Babar Azam", likes: 100, caption: "10 minutes ago", postImage: Post1 ,profilePic : BabarProfile },
  { id: 2, username: "Shaheen Afridi", likes: 85, caption: "1 hour ago", postImage: Post2 , profilePic : ShaheenProfile },
  { id: 3, username: "Sahibzada Farhan", likes: 70, caption: "two hours ago", postImage: Post3 , profilePic : SahibzadaProfile},
  { id: 4, username: "Naseem Shah", likes: 50, caption: "1 day ago", postImage: Post4 , profilePic : NaseemProfile},
];