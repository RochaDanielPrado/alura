import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { Button as PaperButton, Provider, Dialog, Paragraph, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDialog from '../components/CustomDialog';
import usuarioService from '../services/UsuarioService';
import styles from '../style/MainStyle';
import HeaderLogin from '../components/HeaderLogin';
import { generalSettings } from '../util/Colors';
import { Regex } from '../util/Regex';

const schema = yup.object({
  name: yup.string().required("Informe seu nome"),
  lastname: yup.string().required("Informe seu sobrenome"),
  email: yup.string().email("Email Inválido!").required("Informe seu email"),
  password: yup.string().matches(Regex.password, {
    message: 'A senha deve conter mínimo de 6 carcteres, sendo uma maúscula, minúsculas, um caracter especial e numeros',
    name: 'password',
    excludeEmptyString: false,
  }),

  pwConfirmation: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais!').required('Preenchimento obrigatório'),

});


export default function NewUser({ navigation }) {

  const [isLoading, setLoading] = useState(false)
  const [isLoadingToken, setLoadingToken] = useState(true)

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      email: "",
      password: "",
      pwConfirmation: "",
      phone: '',
    },
    resolver: yupResolver(schema)
  });

  const onError = (errors) => console.error(errors);

  const onSubmit = (data) => {

    function phoneformat(data) {
      let n = data.phone.replace('(', '');
      n = n.replace(')', '');
      n = n.replace(' ', '');
      n = n.replace('-', '');

      return n
    };

    let dataregister = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      phone: phoneformat(data),
      password: data.password
    }

    usuarioService.newUser(dataregister)
      .then((response) => {
        setLoading(false)
        const titulo = (response.data.status) ? "Sucesso" : "Erro"
        //showDialog(titulo, response.data.mensagem, "SUCESSO")
        Alert.alert(titulo, response.data.mensagem)
      })
      .then((response) => {
        setLoading(false);
        navigation.popToTop(); //retorna para SignIn Screen
        //navigation.navigate({name: "SignIn"});
      })
      .catch((error) => {
        setLoading(false)
        //("Erro", "Houve um erro inesperado", "ERRO")
        Alert.alert("Erro", "Houve um erro inesperado")
      })

  }

  return (

    <>
      <View style={{ height: "12%", }}>
        <HeaderLogin />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[styles.container, localStyle.localContainer]}
        keyboardVerticalOffset={80}>
        <ScrollView style={{ width: "100%" }}>

          <View style={localStyle.miniContainer}>

            <Text h3 style={localStyle.h3} >Registre-se</Text>
          </View>

          <View>
            <Controller
              control={control}
              name='name'
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder=" Nome"
                  value={value}
                  //leftIcon={{ type: 'font-awesome', name: 'user', color: generalSettings.fontColor }}
                  onChangeText={onChange}
                  color={generalSettings.primaryColor}
                  style={styles.input}
                />
              )
              }
            />
            {errors.name && <Text style={localStyle.labelError} >{errors.name?.message}</Text>}

            <Controller
              control={control}
              name='lastname'
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder=" Sobrenome"
                  value={value}
                 // leftIcon={{ type: 'font-awesome', name: 'user', color: generalSettings.fontColor }}
                  onChangeText={onChange}
                  color={generalSettings.primaryColor}
                  style={styles.input}
                />
              )
              }
            />
            {errors.lastname && <Text style={localStyle.labelError} >{errors.lastname?.message}</Text>}

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
            {errors.email && <Text style={localStyle.labelError} >{errors.email?.message}</Text>}

            <View style={styles.containerMask}>
              {/* <Icon name='mobile' iconStyle={localStyle.icon} size={30} color={generalSettings.fontColor} /> */}
              
              <Controller
                control={control}
                name='phone'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInputMask
                    placeholder="  Celular"
                    placeholderTextColor={'#A9A9A9'}
                    type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) '
                    }}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="phone-pad"
                    returnKeyType="done"
                    style={styles.maskedInput}
                    ref={(ref) => telefoneField = ref}
                  />
                )
                }
              />

            </View>

            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder=" Senha"
                  value={value}

                 // leftIcon={{ type: 'font-awesome', name: 'lock', color: generalSettings.fontColor }}
                  onChangeText={onChange}
                  secureTextEntry={true}
                  color={generalSettings.primaryColor}
                  style={styles.input}
                />
              )
              }
            />
            {errors.password && <Text style={localStyle.labelError} >{errors.password?.message}</Text>}

            <Controller
              control={control}
              name='pwConfirmation'

              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder=" Confirme sua Senha"
                  value={value}
                 // leftIcon={{ type: 'font-awesome', name: 'lock', color: generalSettings.fontColor }}
                  onChangeText={onChange}
                  secureTextEntry={true}
                  color={generalSettings.primaryColor}
                  style={styles.input}
                />
              )
              }
            />
            {errors.pwConfirmation && <Text style={localStyle.labelError} >{errors.pwConfirmation?.message}</Text>}


            {isLoading &&
              <Text>Carregando...</Text>
            }

            {!isLoading &&
              <Button
                icon={
                  <Icon
                    name="check"
                    size={15}
                    color="white"
                  />
                }
                title="Salvar"
                buttonStyle={localStyle.button}
                onPress={handleSubmit(onSubmit)}
              />
            }

            {/* { visibleDialog && 
      <CustomDialog titulo={titulo} mensagem={mensagem} tipo={tipo} visible={visibleDialog} onClose={hideDialog}></CustomDialog>
    } */}

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const localStyle = StyleSheet.create({
  localContainer: {
    backgroundColor: generalSettings.primaryColor,
    paddingTop: '25%',
    paddingLeft: '10%',
    paddingRight: '10%',
    alignItems: 'left',
    justifyContent: 'center',
  },

  miniContainer: {
    alignItems: 'left',
    justifyContent: 'center',
    marginBottom: 30,

  },

  h3: {
    color: generalSettings.fontColor,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 10,

  },
  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
    paddingLeft: 45,

  },

  icon: {
  
   paddingTop: 10,
  }
})