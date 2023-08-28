import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import axios from 'axios';
import StackRoutes from './src/routes/stack.routes';
import Config from './src/util/Config';



function defineInterceptor() {
  axios.interceptors.response.use(response => {
    return response
  }, err => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config
      if (err.response.status == 401 && err.config && !err.config._retry) {
        originalReq._retry = true
        AsyncStorage.getItem("TOKEN").then((token) => {
          let res = axios.put(`${Config.API_URL}token/refresh`, { oldToken: token })
            .then((res) => {
              AsyncStorage.setItem("TOKEN", res.data.access_token)
              originalReq.headers["Authorization"] = `Bearer ${res.data.access_token}`
              return axios(originalReq)
            })
          resolve(res)
        })
      } else {
        reject(err)
      }
    })
  })
}

export default function App() {

  defineInterceptor()

  return (

    <NavigationContainer>
        
        <StackRoutes />
       
    </NavigationContainer>

  );
}