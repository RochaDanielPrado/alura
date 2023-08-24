import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input, Text } from 'react-native-elements';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import usuarioService from '../services/UsuarioService';
import styles from '../style/MainStyle';
import { generalSettings } from '../util/Colors';


export default function Login({ navigation }) {

  const [email, setEmail] = useState('rocha_daniel@me.com') // null
  const [password, setPassword] = useState('Madon@123')
  const [isLoading, setLoading] = useState(false)
  const [isLoadingToken, setLoadingToken] = useState(true)

  const entrar = () => {

    let data = {
      email: email,
      password: password
    }

    usuarioService.login(data)
      .then((response) => {
        setLoading(false)
        navigation.reset({
          index: 0,
          routes: [{ name: "Principal" }]
        })
      })
      .catch((error) => {
        setLoading(false)
        Alert.alert("Usuário não existe")
      })
  }

  const logarComToken = (token) => {

    setLoadingToken(true)
    let data = {
      token: token
    }

    usuarioService.loginComToken(data)
      .then((response) => {
        setLoadingToken(false)
        navigation.reset({
          index: 0,
          routes: [{ name: "Principal" }]
        })
      })
      .catch((error) => {
        setLoadingToken(false)
      })
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  useEffect(() => {
    AsyncStorage.getItem("TOKEN").then((token) => {
      logarComToken(token)
    })
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container]}
      keyboardVerticalOffset={80}>
      <ScrollView style={{ width: "100%" }}>
        <View style={[styles.container, specificStyle.specificContainer]}>

          {isLoadingToken &&
            <Text>Só um minutinho...</Text>
          }

          {!isLoadingToken &&
            <>
              <Text h3 style={specificStyle.h3} >SignIn</Text>
              <Input
                placeholder=" E-mail"
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: generalSettings.fontColor }}
                onChangeText={value => setEmail(value.toLowerCase())}
                keyboardType="email-address"
                autoCapitalize='none'
                color={generalSettings.fontColor}
              />
              <Input
                placeholder="Password"
                leftIcon={{ type: 'font-awesome', name: 'lock', color: generalSettings.fontColor }}
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
                color={generalSettings.fontColor}
              />

              {isLoading &&
                <ActivityIndicator />
              }

              {!isLoading &&
                <Button
                  icon={
                    <Icon
                      name="check"
                      size={15}
                      color={generalSettings.fontColor}
                    />
                  }
                  title=" Enter"
                  buttonStyle={specificStyle.button}
                  onPress={() => entrar()}
                  color={generalSettings.fontColor}

                />
              }

              <Button
                icon={
                  <Icon
                    name="user"
                    size={15}
                    color={generalSettings.fontColor}
                  />
                }
                title=" New User"
                buttonStyle={specificStyle.button}
                onPress={() => cadastrar()}


              />
            </>
          }

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: generalSettings.primaryColor,
    paddingTop: '35%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  button: {
    width: "100%",
    marginTop: 10
  },

  h3: {
    color: generalSettings.fontColor,
  }
})