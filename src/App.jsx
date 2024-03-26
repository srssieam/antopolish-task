
import './App.css'
import Banner from './components/banner/Banner'
import Categories from './components/categories/Categories'
import Navbar from './components/header/Navbar'
import KnowUs from './components/knowUs/KnowUs'

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
        <section>
          <KnowUs />
        </section>
      </main>

      <footer>
        
      </footer>

    </div>
  )
}

export default App
