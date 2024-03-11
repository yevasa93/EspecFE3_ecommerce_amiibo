export const getSeries = async () => {
    try {
        const response = await fetch('http://amiiboapi.com/api/amiiboseries/');
        const { amiibo } = await response.json();
        return amiibo;
    } catch (error) {
        console.error('Error en el fetch de getSeries:', error);
        throw new Error('Ocurrió un error al obtener las series de amiibo');
    }
};