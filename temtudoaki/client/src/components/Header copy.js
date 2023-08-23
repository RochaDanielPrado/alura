import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { generalSettings } from "../util/Colors";

// https://github.com/RochaDanielPrado.png

export default function Header() {
    return (

        <View style={styles.header}>
            <Image
                source={{
                    uri:
                        'https://github.com/RochaDanielPrado.png',
                }}
            style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
            resizeMode="contain"
                />
            <Image
                source={{
                    uri:
                        'https://developerplus.com.br/wp-content/uploads/2021/10/user.png',
                }}
                style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
                resizeMode="contain"
            />

        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: generalSettings.primaryColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingRight: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: generalSettings.buttonColor,
        // height:60,
    }
})