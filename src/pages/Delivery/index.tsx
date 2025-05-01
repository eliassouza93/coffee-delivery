import illustration from '../../../images/delivery/Illustration.png'
import hors from '../../../images/delivery/hors.png'
import local from '../../../images/delivery/local.png'
import money from '../../../images/delivery/money.png'
import { useAddress } from '../../contexts/CartProvider'

import {
    Container,
    Title,
    InfoBox,
    InfoItem,
    Icon,
    TextGroup,
    ImageWrapper,
    Box
} from './styles'

export function Delivery() {
    const {address} = useAddress()

    return (
        <Container>
            <Box>
                <div>
                    <Title>
                        <h3>Uhu! Pedido confirmado</h3>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </Title>

                    <InfoBox>
                        <InfoItem>
                            <Icon src={local} alt="Local" />
                            <TextGroup>
                                <span>
                                    Entrega em <strong> {address.rua} {address.numero} </strong>
                                </span>
                                <span>{address.bairro} - {address.cidade}, {address.uf} </span>
                            </TextGroup>
                        </InfoItem>

                        <InfoItem>
                            <Icon src={hors} alt="Relógio" />
                            <TextGroup>
                                <span>Previsão de entrega</span>
                                <strong>20 min - 30 min</strong>
                            </TextGroup>
                        </InfoItem>

                        <InfoItem>
                            <Icon src={money} alt="Pagamento" />
                            <TextGroup>
                                <span>Pagamento na entrega</span>
                                <strong>Cartão de Crédito</strong>
                            </TextGroup>
                        </InfoItem>
                    </InfoBox>
                </div>

                <ImageWrapper>
                    <img src={illustration} alt="Entregador" />
                </ImageWrapper>

            </Box>
        </Container>
    )
}
