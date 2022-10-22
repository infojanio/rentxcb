import React from 'react'
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native'

import { StatusBar, useWindowDimensions } from 'react-native' //usado dentro da função, caso sejá fora, usa-se Dimensions

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import { Container, Content, Title, Message, Footer } from './styles'
import { ConfirmButton } from '../../components/ConfirmButton'

export function SchedulingComplete() {
  const { width } = useWindowDimensions()

  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleConfirm() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Equipamento alugado!</Title>

        <Message>
          Agora só precisa ir {'\n'}
          até a nossa loja de Locações {'\n'}
          pegar o seu equipamento.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  )
}
