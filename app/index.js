// import { Image, Pressable, StyleSheet, Text, View } from "react-native";
// import React, { useEffect, useLayoutEffect, useState } from "react";
// import { Link, useRouter } from "expo-router";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons, Feather } from "@expo/vector-icons"; 
// import axios from 'axios';

// const Home = () => {
//   const router = useRouter();

//   const navigation = useNavigation();

//   const [result,setResult] = useState({});

//   function LogoTitle() {
//     return (
//       <View style={styles.headerContainer}>
//         <Image style={styles.logo} source={require("../assets/logo.png")} />
//         <View style={styles.rightHeaderContainer}> 
//           <Link href="/home/index">
//             <Feather name="search" size={26} color="white" />
//           </Link>
//           <Ionicons name="notifications-outline" size={26} color="white" />
//         </View>
//       </View>
//     );
//   }

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: "",
//       headerTitle: (props) => <LogoTitle {...props} />,
//     });
//   }, []);


//   useEffect(() => {

//     const options = {
//       method: 'GET',
//       url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
//       params: {q: 'ram charan'},
//       headers: {
//         'X-RapidAPI-Key': '075b9537d2msh3f7b121730688b6p18f318jsnd162b5f4ccd0',
//         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//       }
//     };
    
//     // axios.request(options).then(function (response) {
//     //   console.log(response.data);
//     //   setResult(response.data);
//     // }).catch(function (error) {
//     //   console.error(error);
//     // });


//     //console.log(result.ads.audio.default)

//   },[])



//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Featured Today</Text>
//         <View>
          
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
//   container: {
//     flex: 1,
//     //alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     alignItems: "flex-start"
//   },
//   title: {
//     fontSize:24,
//     fontWeight: "bold",
//     color: "#55bec3",
//   },
//   logo: {
//     width: 180,
//     height: 60,
//     resizeMode: "contain",
//   },
//   headerContainer:{
//     width:'100%',
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginHorizontal: 10,
//     // paddingVertical: 40,
//   },
//   rightHeaderContainer:{
//     flex:0.5,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginRight:10

//   }
// });


import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    <Redirect href={'/tabs/music'} /> 
  )
}

export default index