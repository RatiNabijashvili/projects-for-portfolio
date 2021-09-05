import Styles from './App.module.css'
import Nav from '../nav/nav'
import Header from '../header/header'
import Abilities from '../abilities/abilities'
import Work from '../howFyloWorks/howFyloWorks'
import Review from '../review/review'
import Form from '../form/form'
import Footer from '../footer/footer'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Abilities />
      <Work />
      <Review />
      <Footer />
      <Form />
    </div>
  )
}

export default App
