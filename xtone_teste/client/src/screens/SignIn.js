import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Alert, StyleSheet, View, KeyboardAvoidingView, SafeAreaView, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Image, Input, Text } from 'react-native-elements';
import { CheckBox } from '@rneui/themed';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import usuarioService from '../services/UsuarioService';
import styles from '../style/MainStyle';

import { generalSettings } from '../util/Colors';
import { Regex } from '../util/Regex';
import HeaderLogin from '../components/HeaderLogin';

const schema = yup.object({
  // username: yup.string().required("Informe seu username"),
  email: yup.string().email("Email Inválido!").required("Informe seu email"),
  password: yup.string().matches(Regex.password, {
    message: 'A senha deve conter mínimo de 6 carcteres, sendo uma maúscula, minúsculas, um caracter especial e numeros',
    name: 'password',
    excludeEmptyString: false,

  })
})


export default function SignIn({ navigation }) {

  const [isLoading, setLoading] = useState(false)
  const [isLoadingToken, setLoadingToken] = useState(true)
  const [check1, setCheck1] = useState(false);

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: "rocha_daniel@me.com",
      password: "Madon@123",
    },
    resolver: yupResolver(schema)
  });


  //const onError = (errors) => console.error(errors);

  const onSubmit = (data) => {
    //console.log(data)

    let datasignin = {

      // email: "rocha_daniel@me.com", //data.email,
      // password: "Madon@123" // data.password

      email: data.email,
      password: data.password
    }

    usuarioService.login(datasignin)
      .then((response) => {
        setLoading(false)
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }]
        })
      })
      .catch((error) => {
        setLoading(false)
        Alert.alert("Usuário não existe")
      })
  }


  const logarComToken = (token) => {

    setLoadingToken(true)
    let datasignin = {
      token: token
    }

    usuarioService.loginComToken(datasignin)
      .then((response) => {
        setLoadingToken(false)
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }]
        })
      })
      .catch((error) => {
        setLoadingToken(false)
      })
  }

  const cadastrar = () => {
    navigation.navigate("NewUser")
  }

  useEffect(() => {
    AsyncStorage.getItem("TOKEN").then((token) => {
      logarComToken(token)
    })
  }, [])

  return (
    <>
      <View style={{ height: "12%", }}>
        <HeaderLogin />
      </View>

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
                <View style={specificStyle.miniContainer}>

                  <Text h3 style={specificStyle.h3} >Bem Vindo(a)</Text>

                  <View style={specificStyle.register}>
                    <Text style={specificStyle.textRegister}>ou</Text>

                    <Button
                      type="clear"
                      title=" Registre-se"
                      buttonStyle={specificStyle.buttonNewUser}
                      onPress={() => cadastrar()}

                    />

                  </View>

                </View>

                <Controller
                  control={control}
                  name='email'
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder=" E-mail"
                      value={value}
                      //leftIcon={{ type: 'font-awesome', name: 'envelope', color: generalSettings.fontColor }}
                      onChangeText={onChange}
                      keyboardType="email-address"
                      autoCapitalize='none'
                      color={generalSettings.primaryColor}
                      style={styles.input}
                    />
                  )
                  }
                />
                {errors.email && <Text style={specificStyle.labelError} >{errors.email?.message}</Text>}

                <Controller
                  control={control}
                  name='password'
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Password"
                      value={value}
                      //leftIcon={{ type: 'font-awesome', name: 'lock', color: generalSettings.fontColor }}
                      onChangeText={onChange}
                      secureTextEntry={true}
                      color={generalSettings.primaryColor}
                      style={styles.input}
                    />
                  )
                  }
                />
                {errors.password && <Text style={specificStyle.labelError} >{errors.password?.message}</Text>}

                <View style={specificStyle.register}>

                  {/* <View >
                    <CheckBox
                      center
                      title="Click Here"
                      checked={check1}
                      onPress={() => {setCheck1(!check1);
                      console.log(!check1)}}
                    />
                    <Text >Do you like React Native?</Text>
                  </View> */}

                  <Button
                    type="clear"
                    title="Esqueceu a senha?"
                    buttonStyle={specificStyle.buttonNewUser}
                    onPress={() => cadastrar()}

                  />

                </View>

                {isLoading &&
                  <ActivityIndicator />
                }

                {!isLoading &&

                  <Button
                    // icon={
                    //   <Icon
                    //     name="check"
                    //     size={15}
                    //     color={generalSettings.fontColor}
                    //   />
                    // }
                    title=" Acessar"
                    buttonStyle={styles.button}
                    onPress={handleSubmit(onSubmit)}
                    color={generalSettings.fontColor}

                  />
                }



              </>
            }

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>

  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: generalSettings.primaryColor,
    paddingTop: '35%',
    paddingLeft: '10%',
    paddingRight: '10%',
    alignItems: 'left',
    justifyContent: 'center',
  },

  miniContainer: {
    alignItems: 'left',
    justifyContent: 'center'

  },

  register: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 20
  },

  textRegister: {
    color: generalSettings.fontColor,
    fontSize: 18,
  },

  h3: {
    color: generalSettings.fontColor,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 10,

  },

  buttonNewUser: {
    width: 'auto',
    padding: 0,
    margin: 0,

  },

  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
    paddingLeft: 45,

  },


})