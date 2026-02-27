export const login = async (usuario, password) => {
    const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, password }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || 'Error al iniciar sesión');
    }

    return data;
};
// Función para realizar la solicitud de inicio de sesión al backend
