import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { defaultTheme } from "./styles/themes"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header/>
      <Outlet/>
      <Home />
    </ThemeProvider>
  )
}
export default App
