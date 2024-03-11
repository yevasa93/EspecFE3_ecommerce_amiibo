export const getCharacter = async(id: string) => {
    try {
        const response = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${id}`)
        const data = await response.json()
        const characterApi =  data.amiibo[0]
        return characterApi;
    } catch(error){
        console.error('Error en el fetch de getCharacter:', error);
        throw new Error('Ocurrió un error al obtener el personaje de amiibo por ID');
    }
};