import Questionario from "../Components/home/questionario";
import Servicios from "../Components/home/servicios";
import Contact from "../Components/home/contact";

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