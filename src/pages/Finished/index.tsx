import { useAddress, useCart } from '../../contexts/CartProvider'
import {
  Container,
  Section,
  Summary,
  Title,
  InputGroup,
  PaymentOptions,
  CartItem,
  PriceSummary,
  ConfirmButton,
  DivContainer,
  InputRua,
  InputCep,
  InputNumero,
  InputComplemento,
  InputBairro,
  InputCidade,
  InputUf
} from './styles'
import localization from '../../../images/finalizado/localisa.png'
import credito from '../../../images/finalizado/credito.png'
import debito from '../../../images/finalizado/debito.png'
import dinheiro from '../../../images/finalizado/dinheiro.png'
import pagament from '../../../images/finalizado/pagament.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Finished() {
  const { cart } = useCart()

  const navigate = useNavigate()

  const totalItems = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const entrega = 3.5
  const total = totalItems + entrega

  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')

  const { setAddress } = useAddress()
  const NavigateDelivery = () => {
    if (
      !cep || !rua || !numero || !bairro || !cidade || !uf
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }
  
    setAddress({
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
    })

    navigate('/delivery')
  }

  return (
    <Container>
      <Section>
        <Title>Complete seu pedido</Title>

        <DivContainer>
          <p> <img src={localization} /> Endereço de Entrega</p>
          <small> Informe o endereço onde deseja receber seu pedido</small>
          <InputGroup style={{ marginTop: '1rem' }}>

            <InputCep placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
            <InputRua placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
            <InputNumero placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <InputComplemento placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
            <InputBairro placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
            <InputCidade placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
            <InputUf placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />

          </InputGroup>
        </DivContainer>
        <div>
          <p><img src={pagament} /> Pagamento</p>
          <small>O pagamento é feito na entrega. Escolha a forma que deseja pagar</small>
          <PaymentOptions>
            <button><img src={credito} /> CARTÃO CRÉDITO</button>
            <button><img src={debito} /> CARTÃO DÉBITO</button>
            <button><img src={dinheiro} /> DINHEIRO</button>
          </PaymentOptions>
        </div>

      </Section>

      <Summary>
        <Title>Cafés selecionados</Title>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            {cart.map(item => (
              <CartItem key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="info">
                  <p>{item.title}</p>
                  <small>{item.quantity}x</small>
                </div>
                <div className="price">R$ {(item.price * item.quantity).toFixed(2)}</div>
              </CartItem>
            ))}

            <PriceSummary>
              <div>
                <span>Total de itens</span>
                <span>R$ {totalItems.toFixed(2)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ {entrega.toFixed(2)}</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </PriceSummary>
            <ConfirmButton onClick={NavigateDelivery}>CONFIRMAR PEDIDO</ConfirmButton>
          </>
        )}
      </Summary>
    </Container>


  )
}
