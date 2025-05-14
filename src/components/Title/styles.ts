import styled from 'styled-components'
import { Props } from '.'
export const TitleStyle = styled.h1<Props>`
  color: ${(props) =>
    props.titleColor === 'primary'
      ? props.theme.primaryColor
      : props.titleColor === 'secondary'
      ? props.theme.secondaryColor
      : props.titleColor};
  font-size: ${({ fontSize }) => fontSize || 32}px;
  font-weight: bold;
`
