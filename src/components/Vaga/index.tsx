import { ListItem, VacancyLink, VacancyTitle } from './style'

type Props = {
  children: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <ListItem>
    <VacancyTitle titleColor="primary" fontSize={20}>
      {props.children}
    </VacancyTitle>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VacancyLink href="#">Ver detalhes e candidatar-se</VacancyLink>
  </ListItem>
)

export default Vaga
