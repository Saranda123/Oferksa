import Experiencia from "../Components/sobre";
import Mision from "../Components/mision";
import Vision from "../Components/vision";

function Nosotros() {
    return (
        <>
            <Experiencia />
            <div className="mision_vision">
                <Mision /><Vision />
            </div>
            
        </>
    )
}

export default Nosotros;