
const getLogin = async (user: { email: string; password: string }): Promise<boolean> => {
    try {
            // cambiar ruta antes de hacer push para la construcción de vercel:
		                                            //http://localhost:3000/api/login
        const response = await fetch('https://ecommerce-amiibo.vercel.app/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return response.ok;
    } catch (error) {
        console.error('Error en el fetch de getLogin:', error);
        throw new Error('Ocurrió un error al realizar la solicitud de inicio de sesión');
    }
};

export default getLogin;