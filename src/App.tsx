import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"
import { RouterProject } from "./routes"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Outlet />
      <RouterProject />
    </ThemeProvider>
  )
}
export default App
