import styled from 'styled-components'
import { TitleStyle } from '../Title/styles'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  div {
    position: relative;
    color: #eee;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.primaryColor};
    content: '';
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`
export const HeroTitle = styled(TitleStyle)`
  font-family: Gloock, serif;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`
