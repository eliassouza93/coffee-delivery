import styled from 'styled-components'
import { mixins } from '../../styles/mix'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem 1rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors['background']} 0%,
    ${({ theme }) => theme.colors['background']} 100%
  );
`

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
 
 
`

export const HeroTextContainer = styled.div`
  flex: 1;
`

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors['base-title']};
  line-height: 1.3;
  ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']};
  

`

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};
  ${mixins.fonts.textL}
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const InfoItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;
  margin-top: 4rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 170%;
  

`

export const InfoIcon1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: ${(props => props.theme.colors['yellow-dark'])};


  img{
    width: 1rem;
    height: 1rem;
  }
  
`
export const InfoIcon2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #2e2e2e ;
  margin-left: 50px;


  img{
    width: 1rem;
    height: 1rem;
    
  }
  
`
export const InfoIcon3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: ${(props => props.theme.colors['yellow'])};
 
  

  img{
    width: 1rem;
    height: 1rem;
  }
  
`
export const InfoIcon4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: ${(props => props.theme.colors['purple'])};
  margin-left: 50px;

  img{
    width: 1rem;
    height: 1rem;
  }
  
`

export const InfoText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors['base-text']};
`

export const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const HeroImage = styled.img`
  width: 476px;
  height: auto;
  margin-right: -160px;
  @media(max-width: 758px){
    display: none;
  }
  
`
//container body
export const ContainerBody = styled.div`
  padding: 2rem;
  width: 58%;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2rem;
`

export const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    margin-top: -40px;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-label']};
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};
  font-size: 0.625rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;  
  justify-content: space-between;  
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors['base-text']};
  white-space: nowrap;  
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  background-color: ${({ theme }) => theme.colors['purple']};  
  border-radius: 6px;
  padding: 0.5rem;
 
 

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};  
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    color: black;

    &:hover {
      background-color: ${({ theme }) => theme.colors['purple']};  
    }

    &:disabled {
      color: ${({ theme }) => theme.colors['base-label']};
      cursor: not-allowed;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};  
    padding: 0 0.5rem;
    min-width: 1.5rem;
    text-align: center;
    color: black;
  }
`;

export const AddToCartButton = styled.button`
 
  height: 38px;
  background: ${({ theme }) => theme.colors['purple-dark']};
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: block;
  margin-left: 0.5rem;  
  width: 42px;
 
  img {
    width: 1.225rem;
    height: 1.225rem;
    margin-bottom: -3px;
  }
`;