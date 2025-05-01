import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

import { Header } from './components/Header'
import { Finished } from './pages/Finished'
import { Delivery } from './pages/Delivery'

export function RouterProject() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/finalizado' element={<Finished/>} />
                <Route path='/delivery' element={<Delivery/>} />
            </Routes>
        </Router>
    )
}
