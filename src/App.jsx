
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/header/Navbar'

function App() {

  return (
    <div className='container'>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
      </main>

    </div>
  )
}

export default App
