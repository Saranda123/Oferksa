function Questionario({ tipo = "simple" }) {
    if (tipo === "simple") {
        return (
            <section className="questionario">
                <div className="questionario-info">
                    <h2>Encuentra tu hogar ideal</h2>
                    <form className="buscador">
                        <div className="buscador-campos">
                            <select className="buscador-ubicacion">
                                <option disabled selected>Ubicacion</option>
                                <option>Fontibon</option>
                                <option>Kennedy</option>
                                <option>Bosa</option>
                                <option>Ciudad Bolivar</option>
                                <option>Puente Aranda</option>
                                <option>Usme</option>
                                <option>Soacha</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="boton buscar">Buscar</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }

    if (tipo === "completo") {
        return (
            <section className="questionario">
                <div className="questionario-info">
                    <h2>Busqueda Avanzada</h2>
                    <form className="buscador">
                        <div className="buscador-campos">
                            <select className="buscador-ubicacion">
                                <option disabled selected>Ubicacion</option>
                                <option>Fontibon</option>
                                <option>Kennedy</option>
                                <option>Bosa</option>
                                <option>Ciudad Bolivar</option>
                                <option>Puente Aranda</option>
                                <option>Usme</option>
                                <option>Soacha</option>
                            </select>
                            <input type="number" placeholder="Precio mínimo" className="buscador-precio-min" />
                            <input type="number" placeholder="Precio máximo" className="buscador-precio-max" />
                            <select className="buscador-tipo">
                                <option disabled selected>Tipo de inmueble</option>
                                <option>Apartamento</option>
                                <option>Casa</option>
                                <option>Terreno</option>
                                <option>Oficina</option>
                            </select>
                            <input type="number" placeholder="Habitaciones" className="buscador-habitaciones" />
                        </div>
                        <div>
                            <button type="submit" className="boton buscar">Buscar</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Questionario;
