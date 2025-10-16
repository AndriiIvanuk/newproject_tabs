import {StyleSheet, Text, View} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {Tabs} from "expo-router";

export default function TabsLayout() {
    return (
        <View style={{flex: 1}}>
            <Tabs>
                <Tabs.Screen name="Home"/>
                <Tabs.Screen name="About"/>
                <Tabs.Screen name="Settings"/>
                <Tabs.Screen name="Tab"/>
            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({});