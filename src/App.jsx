
import './App.css'
import Banner from './components/banner/Banner'
import Categories from './components/categories/Categories'
import Navbar from './components/header/Navbar'

function App() {

  return (
    <div className='container'>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Banner />
          <div className='banner-curveBg'></div>
        </section>
        <section>
          <Categories />
        </section>
      </main>

    </div>
  )
}

export default App
