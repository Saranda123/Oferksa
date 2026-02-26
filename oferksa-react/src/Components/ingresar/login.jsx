function Login(){
    return(
        <section className="login">
            <form action="" className="Log-in">
                <div className="log-in_name">
                    <h3>Ingresar</h3>
                </div>
                
                <div className="log-in_questions">
                    <div className="input-contenedor">
                        <input type="text" placeholder="Usuario" id="user" required />
                        <label htmlFor="user"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg></label>
                    </div>
                    <div className="input-contenedor">
                        <input type="password" placeholder="contraseña" required id="password" />
                        <label htmlFor="password"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg></label>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Recordar contraseña
                        </label>
                        <a href="#" className="boton"> Olvide mi contraseña</a>
                    </div>
                    <button type="submit" className="boton w-100"> ingresar </button>
                </div>
            </form>
        </section>
    );
}

export default Login;