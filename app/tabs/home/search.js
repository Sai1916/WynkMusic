import { FlatList, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Feather } from "@expo/vector-icons"; 

const search = () => {

  const moodData = [
    {
      id: 1,
      mood: 'Happy',
      image: 'https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    },
    {
      id: 2,
      mood: 'Sad',
      image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      mood: 'Romantic',
      image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      mood: 'Party',
      image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 5,
      mood: 'Workout',
      image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 6,
      mood: 'Chill',
      image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 7,
      mood: 'Focus',
      image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    }
  ]

  const Item = ({item}) => (
      <ImageBackground source={item?.image} style={styles.bgImage}>
        <Text style={styles.moodText}>{item.mood}</Text>
      </ImageBackground>
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
      />
    </View>
  )
}

export default search

const styles = StyleSheet.create({
  container:{
    marginVertical: 10,
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
  },
  bgImage:{
    width: 300,
    height:300,
    resizeMode: 'contain',
    zIndex: -1,
  }
})