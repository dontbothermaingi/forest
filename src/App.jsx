import { Route, Routes } from 'react-router'
import './App.css'
import DControl from './components/Desktop/DControl'
import ForestsInvestment from './components/Desktop/DAboutOverview'
import ScrollToTop from './components/ScrollTop'

function App() {

  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path={"/"} element={<DControl/>}/>
        <Route path='/about-us' element={<ForestsInvestment/>}/>
      </Routes>
    </div>
  )
}

export default App
