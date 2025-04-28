import { Container, ContainerCarrinho, Box, DivCarrinho } from "./styles";
import logo from '../../../images/imgHome/Logo (1).png'
import licalization from '../../../images/imgHome/licalization.png'
import carrinho from '../../../images/imgHome/carrinho.png'
import { useNavigate } from "react-router-dom";



export function Header() {

    const navigate = useNavigate()
    
    function handleNavigate(){
        navigate('/finalizado')
    }
    function handleHome (){
        navigate('/')
    }
    
    return (
        <Container>
            <Box onClick={handleHome}>
                <img src={logo} alt="cofffee delivery" />
            </Box>
            <DivCarrinho>
                <img src={licalization} />
                <span>Florianópolis,SC</span>
            </DivCarrinho>
            <ContainerCarrinho>
                <div onClick={handleNavigate}>
                    <img src={carrinho} />
                </div>
            </ContainerCarrinho>

        </Container>
    )
}