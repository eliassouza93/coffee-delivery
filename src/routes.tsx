import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Finalizado } from './pages/Finalizado'
import { Header } from './components/Header'



export function RouterProject() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/finalizado' element={<Finalizado />} />
            </Routes>
        </Router>
    )
}