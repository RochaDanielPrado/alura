import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { Header } from '@rneui/themed';
import { generalSettings } from "../util/Colors";

// https://github.com/RochaDanielPrado.png

export default function HeaderLogin() {
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
        paddingTop: 60,
        paddingRight: 40,
        paddingLeft: 40,
        borderBottomWidth: 0,
        borderBottomColor: generalSettings.buttonColor,
    }
})