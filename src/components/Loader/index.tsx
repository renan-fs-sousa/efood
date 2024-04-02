import { FadeLoader } from 'react-spinners'
import { color } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <FadeLoader color={color.orange} />
  </Container>
)

export default Loader
