import styled from 'styled-components'
import { mixins } from '../../styles/mix'


export const Container = styled.div`
  display: flex;
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
  max-width: 1400px;
  width: 100%;
  gap: 3.5rem;
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
`
