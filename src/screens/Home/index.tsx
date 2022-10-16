import React from 'react'
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
        renderItem={({ item }) => <Equipment data={equipmentData} />}
      />
    </Container>
  )
}
