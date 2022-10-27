import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import GasolineSvg from '../../assets/gasoline.svg'

import { EquipmentDTO } from '../../dtos/EquipmentDTO'

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  EquipmentImage,
} from './styles'

interface Props extends RectButtonProps {
  data: EquipmentDTO
}

export function Equipment({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`} </Price>
          </Rent>
          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <EquipmentImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  )
}
