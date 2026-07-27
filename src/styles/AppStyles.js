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



















});

export default styles;





    