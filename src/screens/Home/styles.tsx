import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import theme from '../../styles/theme'
import { EquipmentDTO } from '../../dtos/EquipmentDTO'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`
export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`
export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TotalEquipments = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`
export const EquipmentList = styled(
  FlatList as new (props: FlatListProps<EquipmentDTO>) => FlatList<
    EquipmentDTO
  >,
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`
