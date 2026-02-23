import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Navegacion from "./Components/navegacion";
import Footer from "./Components/footer";
import Index from "./Pages/index";
import Nosotros from "./Pages/nosotros";

function App() {
    return (
        <Router>
            <Header />
            <Navegacion />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/en-venta" element={<Index />} />
            </Routes>
            <Footer />
             <div>
                <script src="JS/script.js"></script>
            </div>
        </Router>
       
        
    );
}

export default App;