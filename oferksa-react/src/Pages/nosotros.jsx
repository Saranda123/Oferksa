import Experiencia from "../Components/nosotros/sobre";
import Mision from "../Components/nosotros/mision";
import Vision from "../Components/nosotros/vision";

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