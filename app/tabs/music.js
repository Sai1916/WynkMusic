import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import songsData from "../../assets/songs";

const music = () => {
  const itemTabs = [
    {
      id: 1,
      title: "Downloads",
      subTitle: "115 songs",
      icon: <AntDesign name="clouddownloado" size={24} color="#53e9ed" />,
    },
    {
      id: 2,
      title: "Local Music",
      icon: <AntDesign name="clouddownloado" size={24} color="#53e9ed" />,
    },
    {
      id: 3,
      title: "Liked music",
      subTitle: "121 songs",
      icon: <AntDesign name="heart" size={24} color="#bf4362" />,
    },
    {
      id: 4,
      title: "Playlists",
      subTitle: "6 playlists",
      icon: (
        <MaterialCommunityIcons
          name="playlist-music"
          size={26}
          color="#53e9ed"
        />
      ),
    },
    {
      id: 5,
      title: "Artists",
      subTitle: "0 artists",
      icon: (
        <MaterialCommunityIcons
          name="account-music-outline"
          size={24}
          color="#53e9ed"
        />
      ),
    },
  ];

  const ItemContainer = ({ item }) => {
    return (
      <View style={styles.itemBox}>
        {item.icon}
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.subText}>{item?.subTitle}</Text>
      </View>
    );
  };

  const SongItem = ({ item }) => {
    return (
      <View style={styles.songContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: item.image }}
            style={{ height: 50, width: 50, borderRadius: 4 }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.movieName}>{item.movie}</Text>
          </View>
        </View>
        <Entypo name="dots-three-vertical" size={18} color="#0f777b" />
      </View>
    );
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <View style={styles.headerRightUserName}>
            <Text style={styles.userName}>SS</Text>
          </View>
          <Text style={styles.headerTitle}>My Music</Text>
        </View>
        <AntDesign name="search1" size={24} color="white" />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        showsVerticalScrollIndicator={false}
        style={{width: '100%',height: '100%'}}
        // contentContainerStyle={{ backgroundColor: '#151a27' }}
        contentContainerStyle={{ backgroundColor: "#151926", }}
      >
        <Header />
        <FlatList
          data={itemTabs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemContainer item={item} />}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={{
            padding: 10,
            width: "100%",
            gap: 18,
            alignItems: "flex-start",
            marginVertical: 20,
          }}
        />
        <View style={styles.container}>
          <Text style={styles.containerTitle}>Recently Played</Text>
          <Text style={styles.containerSubTitle}>See all</Text>
        </View>
        <FlatList
          data={songsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SongItem item={item} />}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default music;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#151926",
    height: 90,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  userName: {
    // color: "#53e9ed",
    fontSize: 18,
    color: "#53e9ed",
  },
  headerTitle: {
    fontSize: 30,
    paddingHorizontal: 18,
    color: "white",
    fontWeight: "bold",
  },
  headerRightUserName: {
    padding: 5,
    width: 34,
    height: 34,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#53e9ed",
    backgroundColor: "#478fcd",
  },
  headerRight: {
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
  },
  itemBox: {
    height: 100,
    width: 150,
    borderRadius: 8,
    backgroundColor: "#23293d",
    marginHorizontal: 10,
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingVertical: 14,
  },
  text: {
    color: "#53e9ed",
    fontSize: 17,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    color: "#3bc3c8",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 14,
  },
  containerTitle: {
    fontSize: 18,
    color: "#53e9ed",
    fontWeight: "bold",
  },
  containerSubTitle: {
    fontSize: 14,
    color: "#25aaaa",
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  name: {
    fontSize: 14,
    color: "#53e9ed",
    // fontWeight: '500',
  },
  movieName: {
    fontSize: 12,
    color: "#0f777b",
  },
  leftContainer: {
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
 
});
