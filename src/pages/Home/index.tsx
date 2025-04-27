import { Actions, Container, ContainerBody, HeroImage, HeroImageContainer, HeroSection, HeroSubtitle, HeroTextContainer, HeroTitle, InfoIcon1, InfoIcon2, InfoIcon3, InfoIcon4, InfoItem, InfoItems, InfoText, Price, ProductCard, ProductsGrid, QuantityControl, Tag,AddToCartButton } from "./styles";
import cofffe from '../../../images/coffeeGG.png';
import carrinho from '../../../images//imgHome/carrinhoCompra.png';
import relogio from '../../../images//imgHome/relogio.png';
import embalagem from '../../../images//imgHome/embalagem.png';
import cafe from '../../../images//imgHome/cafe.png';
import data from '../../../data.json';
import { CartItem, CoffeeType } from "../../coffeeTyle";
import { useState } from "react";

const Produtos: CoffeeType[] = data.coffees;

export function Home() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const AddQuantity = (id: string) => {
        setCart(prevCart => {
            const itemNoCarrinho = prevCart.find(item => item.id === id);
            if (itemNoCarrinho) {
                return prevCart.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                const produtoToAdd = Produtos.find(p => p.id === id);
                return produtoToAdd ? [...prevCart, { ...produtoToAdd, quantity: 1 }] : prevCart;
            }
        });
    }

    const DecreaseQuantity = (id: string) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        })
    }

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

            <ContainerBody>
                <h1>Nossos cafés</h1>
                <ProductsGrid>
                    {Produtos.map((produto: CoffeeType) => (
                        <ProductCard key={produto.id}>
                            <img src={produto.image} alt={produto.title} />

                            <div>
                                {produto.tags.map((tag) => (
                                    <Tag key={tag}>{tag.toUpperCase()}</Tag>
                                ))}
                            </div>

                            <h2>{produto.title}</h2>
                            <p>{produto.description}</p>

                            <Actions>
                                <Price>R$ {produto.price.toFixed(2)}</Price>
                                <QuantityControl>
                                    <button onClick={() => DecreaseQuantity(produto.id)}>-</button>
                                    <span>{cart.find(item => item.id === produto.id)?.quantity || 0}</span>
                                    <button onClick={() => AddQuantity(produto.id)}>+</button>
                                </QuantityControl>
                                <AddToCartButton>
                                    <img src={carrinho}/>
                                </AddToCartButton>
                            </Actions>
                        </ProductCard>
                    ))}
                </ProductsGrid>
            </ContainerBody>
        </Container>
    );
}