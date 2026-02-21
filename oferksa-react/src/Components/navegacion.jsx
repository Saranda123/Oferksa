function Navegacion() {
    return(
        <div className="nav-bg navegacion">
            <nav className="navegacion-principal contenedor">
                {/* Navegación principal de la página */}
                <a href="/" className="inicio">Inicio</a>
                <a href="/nosotros" className="sobre-nosotros">Sobre Nosotros</a>
                <a href="/en-venta" className="en-venta">En Venta</a>
            </nav>
        </div>
    )
}

export default Navegacion;