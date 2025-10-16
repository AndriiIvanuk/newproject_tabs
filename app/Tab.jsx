import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function tab() {
  return (
    <View style={styles.main}>
      <Text>Bonus Tab</Text>
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