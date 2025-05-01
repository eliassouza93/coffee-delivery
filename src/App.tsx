import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes"
import { GlobalStyle } from "./styles/global"
import { AddressProvider, CartProvider } from "./contexts/CartProvider"
import { RouterProject } from "./routes"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartProvider>
        <AddressProvider>  
          <RouterProject />
        </AddressProvider>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
