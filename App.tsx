import React from 'react'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'

import { Home } from './src/screens/Home'
import { EquipmentDetails } from './src/screens/EquipmentDetails'
import { Sheduling } from './src/screens/Sheduling'

import theme from './src/styles/theme'

export default function App() {
  //carrega as fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  })

  //enquanto não carrega fica na tela de splash
  if (!fontsLoaded) {
    return <AppLoading />
  }

  //após carregar as fontes entra na Home
  return (
    <ThemeProvider theme={theme}>
      <Sheduling />
    </ThemeProvider>
  )
}
