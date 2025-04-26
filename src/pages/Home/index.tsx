import { Container, HeroImage, HeroImageContainer, HeroSection, HeroSubtitle, HeroTextContainer, HeroTitle, InfoIcon1,InfoIcon2,InfoIcon3,InfoIcon4, InfoItem, InfoItems, InfoText } from "./styles";
import cofffe from '../../../images/coffeeGG.png'
import carrinho from '../../../images//imgHome/carrinhoCompra.png'
import relogio from '../../../images//imgHome/relogio.png'
import embalagem from '../../../images//imgHome/embalagem.png'
import cafe from '../../../images//imgHome/cafe.png'

export function Home() {
    return (
        <Container>
            <HeroSection>
                <HeroTextContainer>
                    <HeroTitle>Encontre o café perfeito para qualquer hora do dia</HeroTitle>
                    <HeroSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</HeroSubtitle>

                    <InfoItems>
                        <InfoItem>
                            <InfoIcon1>
                                <img src={carrinho} alt="Compra simples e segura" />
                            </InfoIcon1>
                            <InfoText>Compra simples e segura</InfoText>
                        </InfoItem>

                        <InfoItem>
                            <InfoIcon2>
                                <img src={embalagem} alt="Embalagem mantém o café intacto" />
                            </InfoIcon2>
                            <InfoText>Embalagem mantém o café intacto</InfoText>
                        </InfoItem>

                        <InfoItem>
                            <InfoIcon3>
                                <img src={relogio} alt="Entrega rápida e rastreada" />
                            </InfoIcon3>
                            <InfoText>Entrega rápida e rastreada</InfoText>
                        </InfoItem>

                        <InfoItem>
                            <InfoIcon4>
                                <img src={cafe} alt="O café chega fresquinho até você" />
                            </InfoIcon4>
                            <InfoText>O café chega fresquinho até você</InfoText>
                        </InfoItem>
                    </InfoItems>
                </HeroTextContainer>

                <HeroImageContainer>
                    <HeroImage src={cofffe} alt="Coffee" />
                </HeroImageContainer>
            </HeroSection>
        </Container>
    )
}
