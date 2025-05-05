import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
`

export const Section = styled.section`
  flex: 1;
  background: #f3f2f2;
  padding: 2rem;
  border-radius: 6px;
  max-width: 640px;
  margin-left: 285px;
`

export const Summary = styled(Section)`
  flex: 0.8;
  background: #f3f2f2;
  margin-left: 70px;
  max-width: 448px;
  height: 498px;
`

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`
export const DivContainer = styled.div`
  margin-bottom: 2rem;

  p {
    margin-bottom: 0.5rem;
    font-size: 16px;
  }
  small {
    margin-left: 25px;
    font-size: 14px;
  }
  img {
    width: 22px;
    height: 22px;
    margin-top: 10px;
  }
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 200px 348px;
  gap: 1rem 0.75rem;

  & > input:nth-child(1) {
    grid-column: 1 / -1;
  }

  & > input:nth-child(2) {
    grid-column: 1 / -1;
  }

  & > input:nth-child(3) {
    grid-column: 1;
  }

  & > input:nth-child(4) {
    grid-column: 2;
  }

  & > input:nth-child(5) {
    grid-column: 1;
  }

  & > input:nth-child(6) {
    grid-column: 2;
  }

  & > input:nth-child(7) {
    grid-column: 3;
  }
`
export const InputCep = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #e6e5e5;
  background: #eeeded;
  width: 200px;
  height: 42px;
`;

export const InputRua = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #e6e5e5;
  background: #eeeded;
  width: 100%;
  height: 42px;
`;

export const NumeroComplementoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const InputNumero = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #e6e5e5;
  background: #eeeded;
  width: 200px;
  height: 42px;
`;

export const InputComplemento = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #e6e5e5;
  background: #eeeded;
  width: 348px;
  height: 42px;
`;

export const BairroCidadeUfContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const InputBairro = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #e6e5e5;
  background: #eeeded;
  width: 200px;
  height: 42px;
`;

export const InputCidade = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #e6e5e5;
  background: #eeeded;
  width: 276px;
  height: 42px;
  margin-right: -10px;
`;

export const InputUf = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #e6e5e5;
  background: #eeeded;
  width: 60px;
  height: 42px;
  margin-left: -70px;
`

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;

  img {
    width: 16px;
    height: 16px;
    margin-bottom: -3px;
  }

  button {
    flex: 1;
    background: #e6e5e5;
    border: none;
    padding: 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-transform: uppercase;
    transition: background 0.2s;
    background: #e6e5e5;
    border: 1px solid #8047f8;

    &:hover {
      background: #d7d5d5;
    }

    &.selected {
      background: ${(props) => props.theme.colors['purple-dark']};
      
    }
  }
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e6e5e5;
  padding-bottom: 1rem;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .info {
    flex: 1;
    margin-left: 1rem;
  }

  .price {
    font-weight: bold;
  }
`

export const PriceSummary = styled.div`
  margin-top: 1.5rem;
  font-size: 0.875rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .total {
    font-size: 1.25rem;
    font-weight: bold;
  }
`

export const ConfirmButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  background-color: #dbac2c;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #c47f17;
  }
`
export const Digitou = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`