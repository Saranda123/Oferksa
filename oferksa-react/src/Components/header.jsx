import logo from "../assets/img/OFERKSA.png";

function Header() {
    return(
        <>
            <header>
                <a href="/">
                    <img src={logo} alt="Logo OFERKSA" width="80" height="80"/>
                </a>
                {/*Logo de la página*/}
                <h1>OFERKSA <span>Inmobiliaria</span></h1>
                {/* Título principal de la página */}
                <a href="/ingresar">ingresar</a>
            </header>
        </>
    )
}

export default Header;