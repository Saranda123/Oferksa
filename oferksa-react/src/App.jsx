import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Navegacion from "./Components/navegacion";
import Footer from "./Components/footer";
import Index from "./Pages/index";
import Nosotros from "./Pages/nosotros";
import Venta from "./Pages/en-venta";
import Enter from "./Pages/ingresar";
import useScrollAnimation from "./JS/scroll";

function App() {
    useScrollAnimation();

    return (
        <Router>
            <Header />
            <Navegacion />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/en-venta" element={<Venta />} />
                <Route path="/ingresar" element={<Enter />} />
            </Routes>
            <Footer />
        </Router>
       
        
    );
}

export default App;