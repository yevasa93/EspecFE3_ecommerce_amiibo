export const getCharacters = async () => {
    try {
        const response = await fetch('https://amiiboapi.com/api/amiibo/');
        const data = await response.json();
        return data.amiibo.slice(0, 20);
    } catch (error) {
        console.error('Error en el fetch de getCharacters:', error);
        throw new Error('Ocurrió un error al obtener los personajes de amiibo');
    }
};