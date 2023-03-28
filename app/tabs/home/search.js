import { FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Feather } from "@expo/vector-icons"; 

const search = () => {

  const moodData = [
    {
      id: 1,
      mood: 'Happy',
      image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 2,
      mood: 'Sad',
      image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      mood: 'Romantic',
      image: 'https://images.unsplash.com/photo-1531448143467-9d228363342d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvbWFudGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      mood: 'Party',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 5,
      mood: 'Workout',
      image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 6,
      mood: 'Chill',
      image: 'https://images.unsplash.com/photo-1529066516367-36973222c957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 7,
      mood: 'Focus',
      image: 'https://images.unsplash.com/photo-1517956050595-8932d6d6b740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvY3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    }
  ]

  const Item = ({item}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <ImageBackground source={{uri: item.image}} style={styles.bgImage}>
        <Text style={styles.moodText}>{item.mood}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Feather name="search" size={20} color="#4fc0c6" />
        <TextInput placeholder='Artist,songs,podcast or hellotune' placeholderTextColor='#4fc0c6' style={styles.input} />
        <FontAwesome5 name="microphone" size={22} color="#4fc0c6" />
      </View>
      <FlatList 
        data={moodData}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default search

const styles = StyleSheet.create({
  container:{
    marginVertical: 10,
    marginBottom: 50
  },
  inputView:{
    flexDirection: 'row',
    backgroundColor: '#0b5457',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  input:{
    fontSize: 16,
    color: '#4fc0c6',
    flex:1,
    paddingLeft: 6
  },
  moodText:{
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  bgImage:{
    width: 160,
    height:160,
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemContainer:{
    // backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
})