import styled from 'styled-components'
import { TitleStyle } from '../Title/styles'

export const VacancyTitle = styled(TitleStyle)`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VacancyLink = styled.a`
    border-color: ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
`

export const ListItem = styled.li`
  border: 1px solid ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    ${VacancyTitle} {
      color: ${(props) => props.theme.secondaryColor};
    }
    ${VacancyLink} {
      border-color: ${(props) => props.theme.primaryColor};
      background-color: ${(props) => props.theme.secondaryColor};
      color: ${(props) => props.theme.primaryColor};
    }
  }
`
