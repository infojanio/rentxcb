import React from 'react'
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'

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
  Acessories,
  Footer,
} from './styles'

export function EquipmentDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  //confirmar o aluguel
  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <EquipmentImages>
        <ImageSlider
          imagesUrl={[
            'https://brasmetal.com/wp-content/uploads/2019/02/Imagens-recortadas_2.png',
          ]}
        />
      </EquipmentImages>

      <Content>
        <Details>
          <Description>
            <Brand>Menegotti</Brand>
            <Name>Betoneira</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$120</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name="2CV" icon={SpeedSvg} />
          <Accessory name="Monofásica" icon={AccelerationSvg} />
          <Accessory name="400L" icon={ForceSvg} />
          <Accessory name="Energia" icon={GasolineSvg} />
          <Accessory name="Renta" icon={ExchangeSvg} />
          <Accessory name="Menegotti" icon={PeopleSvg} />
        </Acessories>

        <About>
          Betoneira 400L, Monofásica 2CV, Chapa de Aço de 2,66mm, 220V, Renta -
          MENEGOTTI
        </About>
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
