import './App.css'
import { Footer } from './components/common/Footer';
import { InfoSection } from './components/common/InfoSection';
import { About } from './components/main-screen/About';
import { ContactSection } from './components/main-screen/ContactSection';
import { Header } from './components/main-screen/Header';
import { MainProduct } from './components/main-screen/MainProduct';
import { Price } from './components/main-screen/Price';
import { Products } from './components/main-screen/Products';
import { Slider } from './components/main-screen/Slider';

function App() {

  return (
    <> 
      <Header />
      <Slider />
      <Products />
      <About />
      {/* <Price /> */}
      <MainProduct />
      {/* <ContactSection /> */}
      <InfoSection />
      <Footer />
    </>
  )
}

export default App
