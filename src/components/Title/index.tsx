import { TitleStyle } from './styles'
export type Props = {
  children: string
  fontSize?: number
  titleColor: string
}
const Title = ({ children, titleColor, fontSize }: Props) => (
  <TitleStyle fontSize={fontSize} titleColor={titleColor}>
    {children}
  </TitleStyle>
)

export default Title
