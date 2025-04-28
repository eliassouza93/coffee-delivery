import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes"
import { GlobalStyle } from "./styles/global"
import { CartProvider } from "./contexts/CartProvider"
import { RouterProject } from "./routes"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartProvider> {/* Aplicando o CartProvider apenas aqui */}
        <RouterProject />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
