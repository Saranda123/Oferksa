function Contact() {
    return (
        <div className="contact">
            <section className="formulario">
                {/* Sección de contacto de la página */}
                <h2>Contáctanos</h2>

                <form>
                    <fieldset>
                        <legend>Contactanos Llenando Todos Los Campos Del Formulario</legend>
                        <div className="contenedor_campos">
                            <div className="campos">
                                <label htmlFor="name">Nombre</label>
                                <input className="input-text" type="text" placeholder="Nombre" id="name"/>
                            </div>
                            <div className="campos">
                                <label htmlFor="cellphone">Telefono</label>
                                <input className="input-text" type="tel" placeholder="Telefono" id="cellphone"/>
                            </div>

                            <div className="campos">
                                <label htmlFor="email">Correo</label>
                                <input className="input-text" type="email" placeholder="Correo" id="email"/>
                            </div>
                            
                            <div className="campos">
                                <label htmlFor="asunt">Asunto</label>
                                <textarea className="input-text asunto" id="asunt"></textarea>
                            </div>
                            
                            <div className="campos">
                                <label htmlFor="message">Mensaje</label>
                                <textarea className="input-text mensaje" id="message"></textarea>
                            </div>
                        </div>
                        <div className="alinear-derecha flex">
                            <input type="submit" value="Enviar" className="boton w-100"/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default Contact;