import { USERS } from '@/data/users';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const {email, password} = req.body;

    if (req.method !== "POST") {
        res.status(405) .json({message: "Método no permitido, la información a la intentas acceder no es pública"})
    }

    //si fuese el caso a continuación iría la conexión a la base de datos
    //en este caso no se realiza, porque estamos usando una data hardcodeada, para el ejemplo de uso de la api

    const user = USERS.find((user) => user.email === email && user.password === password);

    if (!user) {
        res.status(401).json({message: 'Usuario no existe'})
    }

    res.setHeader('set-cookie', 'path=/; access= true; HttpOnly; SameSite=lax');

    res.status(200).json({message: 'Usuario logeado con éxito'});
}