import {
  Dimensions,
  StyleSheet
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const leftWidth = width/2 - 50;

export default StyleSheet.create({
  mainView:{
    paddingBottom:0.05*height,
    flex:1,
    backgroundColor:"#fff"
  },
  priceView:{
    height:0.8*height,
    paddingTop:0.03*height,
    paddingBottom:0.05*height,
    paddingLeft:0.02*width,
    paddingRight:0.02*width,
  },
  tripView:{
    paddingBottom:0.05*height,
    paddingLeft:0.02*width,
    paddingRight:0.02*width,
    paddingTop:0.05*height,
    backgroundColor:"#2196f3",
    shadowColor:"#000",
    shadowOffset:{width:0,height:1},
    shadowOpacity:0.5,
    shadowRadius:10
  },
  heading:{
    fontWeight:'bold',
    marginBottom:0.01*height,
    color:"#607D8B",
    fontSize:20
  },
  pricingView:{
    padding:0,
    borderWidth:1,
    borderColor:"rgba(255,255,255,0)",
    borderRadius:6,
    borderRightWidth:0,
    shadowOffset:{width:5,height:5},
    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowRadius:5,
    margin:10,
    marginLeft:0,
    backgroundColor:'#fff'
  },
  priceScroll:{
    paddingTop:0,
    paddingBottom:5
  },
  rideTypeUber:{
    backgroundColor:"#000",
    paddingTop:10,
    paddingBottom:10,
    width:150,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    borderWidth:1,
    borderColor:"#000",

    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
  },
  rideTypeLyft:{
    backgroundColor:"#FC1FBE",
    paddingTop:10,
    paddingBottom:10,
    width:150,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    borderWidth:1,
    borderColor:"#FC1FBE",

    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
    },
   rideTypeTaxi:{
      backgroundColor:"#EFB13D",
      paddingTop:10,
      paddingBottom:10,
      width:150,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:6,
      borderBottomRightRadius:0,
      borderBottomLeftRadius:0,
      borderWidth:1,
      borderColor:"#EFB13D"
    },
  price:{
    fontSize:17,
    textAlign:'center',
    color:"#000",
    paddingTop:10,
    paddingBottom:10,
    fontWeight:'400',
    backgroundColor:"#fafafa"
  },
  locHolder:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  locOrigin:{
    padding:6,
    borderWidth:0,
    backgroundColor: "#6ec6ff",
    borderColor:"#D80027",
    borderRadius:4,
    margin:3,
    width:0.8*width,
    height:40,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  locDestination:{
    padding:6,
    borderWidth:0,
    backgroundColor: "#6ec6ff",
    borderColor:"#D80027",
    borderRadius:4,
    margin:3,
    width:0.8*width,
    height:40,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  locText:{
    color:"#fff",
    fontWeight:"500",
    fontSize:19,
    textAlign:"left"
  },
  to:{
    margin:3,
    color:"#fff",
    fontWeight:"bold",
    fontSize:13,
    width:0.8*width,
    textAlign:"left"
  },
  rideTypeText:{
    color:"#fff",
    fontSize:17,
    fontWeight:"400",
    textAlign:'center',
  },
  logo:{
    height:40,
    width:100,
  },
  pricesContainer:{
    borderWidth:1,
    borderRadius:6,
    borderColor:"#dae1e9",
    backgroundColor:"#fff",
    padding:20
  },
  tripIcon:{
    height:20,
    width:20,
    marginRight:10
  },
  tripHeader:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    height:40
  },
  tripLogoView:{
    width:0.6*width,
    height:300
  },
  appLogo:{
    height:50,
    width:30,
    padding:10,
    marginLeft: leftWidth
  }
})
