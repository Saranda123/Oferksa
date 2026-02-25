function Navegacion_inmuebles() {
    return (
        <div className="Busc_Inmuebles">
            <nav className="buscador_principal contenedor">
                <div>
                    <select className="ubicacion">
                                <option disabled selected>Ubicacion</option>
                                <option>Fontibon</option>
                                <option>Kennedy</option>
                                <option>Bosa</option>
                                <option>Ciudad Bolivar</option>
                                <option>Puente Aranda</option>
                                <option>Usme</option>
                                <option>Soacha</option>
                </select>
                <select className="habitaciones">
                    <option disabled selected>Habitaciones</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>+4</option>
                </select>
                <select className="Baños">
                    <option disabled selected>Baños</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>+4</option>
                </select>
                <select className="Parqueaderos">
                    <option disabled selected>Parqueaderos</option>
                    <option>0</option>
                    <option>1</option>
                    <option>+2</option>
                </select>
                <select className="precio">
                    <option disabled selected>Precio</option>
                    <option>0</option>
                    <option>1</option>
                    <option>+2</option>
                </select>
                </div>
                
                <div>
                    <button type="submit" className="boton buscar">Buscar</button>
                </div>
            </nav>
            
        </div>
    );
}

export default Navegacion_inmuebles;