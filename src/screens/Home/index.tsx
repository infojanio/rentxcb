import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native'
//import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'

import { Equipment } from '../../components/Equipment'

import {
  Container,
  Header,
  HeaderContent,
  TotalEquipments,
  EquipmentList,
} from './styles'

export function Home() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  //  const navigation = useNavigation()

  const equipmentData = {
    brand: 'Menegotti',
    name: 'Betoneira',
    rent: {
      period: 'Ao Dia ',
      price: 120,
    },

    thumbnail:
      'https://brasmetal.com/wp-content/uploads/2019/02/Imagens-recortadas_2.png',
  }

  //função navegar até EquipmentDetails
  function handleEquipmentDetails() {
    //navigation.navigate('EquipamentDetails')
    console.log('fui')
    navigation.navigate('EquipmentDetails')
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalEquipments>Total de 12 equipamentos </TotalEquipments>
        </HeaderContent>
      </Header>

      <EquipmentList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Equipment data={equipmentData} onPress={handleEquipmentDetails} />
        )}
      />
    </Container>
  )
}
