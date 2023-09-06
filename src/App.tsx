import About from './about/About'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Experience from './experience/Experience'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'

function App() {
  return (
    <div className='text-white'>
      <Nav />
      <Routes>
        <Route path='/'>
          <Route index element={<About />} />
          <Route path='experience' element={<Experience />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
