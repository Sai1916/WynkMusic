import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const hellotunes = () => {
  return (
    <View>
      <Text style={styles.text}>hellotunes</Text>
    </View>
  )
}

export default hellotunes

const styles = StyleSheet.create({
  text:{
    color: 'white'
  }
})