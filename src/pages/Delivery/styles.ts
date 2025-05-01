import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.5rem 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 83px;
`
export const Box = styled.div`
    display: flex;
`

export const Title = styled.div`

  h3 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-top: 0.25rem;
    margin-top: 1rem;
  }
`

export const InfoBox = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 32rem;

`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;


  span {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  strong {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const ImageWrapper = styled.div`
  img {
    max-width: 100%;
    margin-top:90px;
    margin-left: 150px;
     
  }
`
