import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function settings() {
  return (
    <View style={styles.main}>
      <Text>Settings</Text>
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