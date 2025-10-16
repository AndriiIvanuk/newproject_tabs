import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function about() {
  return (
    <View style={styles.main}>
      <Text>About Page</Text>
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