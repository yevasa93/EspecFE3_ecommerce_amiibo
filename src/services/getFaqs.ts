export const getFaqs = async () => {
    try {
         // cambiar ruta antes de hacer push para la construcción de vercel:
		                                            //http://localhost:3000/api/faqs
        const response = await fetch('https://ecommerce-amiibo.vercel.app/api/faqs');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en el fetch de getFaqs:', error);
        throw new Error('Ocurrió un error al obtener los FAQs');
    }
};

