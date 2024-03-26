
import './App.css'
import Banner from './components/banner/Banner'
import Categories from './components/categories/Categories'
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'
import KnowUs from './components/knowUs/KnowUs'

function App() {

  return (
    <div >

      <header>
        <Navbar />
      </header>

      <main className='container'>
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
        <Footer />
      </footer>

    </div>
  )
}

export default App
