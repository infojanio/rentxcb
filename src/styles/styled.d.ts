import 'styled-components'
import theme from './theme'

//possibilita a sugestão da tipagem, ex: theme.  colors ou fonts
declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}
