import { Container } from '../../styles'
import { Form, HeroTitle } from './styles'

const Hero = () => (
  <Form>
    <Container>
      <HeroTitle titleColor="white" fontSize={48}>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </Form>
)

export default Hero
