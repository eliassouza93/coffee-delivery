import { Container, ContainerCarrinho, Box, DivCarrinho } from "./styles";
import logo from '../../../images/imgHome/Logo (1).png'
import licalization from '../../../images/imgHome/licalization.png'
import carrinho from '../../../images/imgHome/carrinho.png'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartProvider";

console

export function Header() {
    const cart = useCart()
    const navigate = useNavigate()

    function handleNavigate() {
        navigate('/finalizado')
    }
    function handleHome() {
        navigate('/')
    }
    function quantityCount() {
        return cart.cart.reduce((acc, item) => acc + item.quantity, 0)
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
                <div onClick={handleNavigate} style={{ position: 'relative' }}>
                    {quantityCount() > 0 && (
                        <span>
                            {quantityCount()}
                        </span>
                    )}
                    <img src={carrinho} />
                </div>
            </ContainerCarrinho>

        </Container>
    )
}