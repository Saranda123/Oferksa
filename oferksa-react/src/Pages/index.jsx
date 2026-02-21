import Questionario from "../Components/questionario";
import Servicios from "../Components/servicios";
import Contact from "../Components/contact";

function Index() {
    return(
        <>
            <Questionario tipo="simple" />
            <Servicios />
            <Contact />
        </>
    )
}

export default Index;