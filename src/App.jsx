import Navbar from "./componentes/layout/navbar/Navbar";
import About from "./componentes/pages/About";
import Footer from "./componentes/layout/footer/Footer";
import Home from "./componentes/pages/home";
import Shop from "./componentes/pages/Shop";
import { Contact } from "./componentes/pages/Contact";
import ItemListContainer from "./componentes/common/productList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Home />
      <About />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
