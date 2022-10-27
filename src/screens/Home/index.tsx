import React, { useEffect, useState } from 'react'

import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native'
//import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { EquipmentDTO } from '../../dtos/EquipmentDTO'

import { api } from '../../services/api'

import Logo from '../../assets/logo.svg'

import { Equipment } from '../../components/Equipment'

import { Load } from '../../components/Load'

import {
  Container,
  Header,
  HeaderContent,
  TotalEquipments,
  EquipmentList,
} from './styles'

export function Home() {
  const [equipments, setEquipments] = useState<EquipmentDTO[]>([])
  const [loading, SetLoading] = useState(true)

  //  const navigation = useNavigation()
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  //função navegar até EquipmentDetails
  function handleEquipmentDetails(equipment: EquipmentDTO) {
    navigation.navigate('EquipmentDetails', { equipment })
  }

  //busca as informações cadastrada na api
  useEffect(() => {
    async function fetchEquipments() {
      try {
        const response = await api.get('/equipments')
        setEquipments(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        SetLoading(false)
      }
    }
    fetchEquipments()
  }, [])

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
      {loading ? (
        <Load />
      ) : (
        <EquipmentList
          data={equipments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Equipment
              data={item}
              onPress={() => handleEquipmentDetails(item)}
            />
          )}
        />
      )}
    </Container>
  )
}
