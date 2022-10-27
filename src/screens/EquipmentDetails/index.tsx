import React from 'react'
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'
import { EquipmentDTO } from '../../dtos/EquipmentDTO'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  Container,
  Header,
  EquipmentImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles'

interface Params {
  equipment: EquipmentDTO
}

export function EquipmentDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const route = useRoute()
  const { equipment } = route.params as Params

  //confirmar o aluguel
  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }

  //Ação do botão voltar
  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <EquipmentImages>
        <ImageSlider imagesUrl={equipment.photos} />
      </EquipmentImages>

      <Content>
        <Details>
          <Description>
            <Brand>{equipment.brand}</Brand>
            <Name>{equipment.name}</Name>
          </Description>

          <Rent>
            <Period>{equipment.rent.period}</Period>
            <Price>R$ {equipment.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {equipment.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={SpeedSvg}
            />
          ))}
        </Accessories>

        <About>{equipment.about} </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  )
}
