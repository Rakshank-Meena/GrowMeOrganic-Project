
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Tables from './pages/Tables'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/project" element={<Tables/>}/>
        </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
