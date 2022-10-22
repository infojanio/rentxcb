import React from 'react'
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles'

export function SchedulingDetails() {
  const theme = useTheme()

  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete')
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/10/2022</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/10/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 120 x 3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 360</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  )
}
