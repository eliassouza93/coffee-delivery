import styled from "styled-components";


export const Container = styled.div`
    height: 104px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    justify-content: center;
    align-items: center;
  
`
export const Box = styled.div`
    background-color: aliceblue;
    width: 43%;
    
    img{
        width: 95px;
        height: 40px;
        cursor: pointer;
    }
`
export const DivCarrinho = styled.div`
        border-radius: 5px;
        height:38px;
        width:150px ;
        font-size: 14px;
        color: ${(props => props.theme.colors.purple)};
        font-weight: 400;
        background-color: ${(props => props.theme.colors["purple-light"])};
        display: flex;
        align-items: center;
        justify-content: center;
`
export const ContainerCarrinho = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  div {
    background-color: ${(props) => props.theme.colors["yellow-light"]};
    height: 38px;
    width: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 0 12px;
    cursor: pointer;
    position: relative;
  }

  img {
    width: 22px;
    height: 22px;
  }

  span {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  padding: 12px;
  }
`

