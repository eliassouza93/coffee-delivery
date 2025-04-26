import { Container, ContainerCarrinho, Box, DivCarrinho } from "./styles";
import logo from '../../../images/imgHome/Logo (1).png'
import licalization from '../../../images/imgHome/licalization.png'
import carrinho from '../../../images/imgHome/carrinho.png'



export function Header() {
    return (
        <Container>
            <Box>
                <img src={logo} alt="cofffee delivery" />
            </Box>
            <DivCarrinho>
                <img src={licalization} />
                <span>Florianópolis,SC</span>
            </DivCarrinho>
            <ContainerCarrinho>
                <div>
                    <img src={carrinho} />
                </div>
            </ContainerCarrinho>

        </Container>
    )
}