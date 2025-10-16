import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function titleScreen() {
  return (
    <View style={styles.main}>
      <Text>Title Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
		alignItems: "center",
		justifyContent: "center",
  }
})