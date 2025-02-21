import React from 'react'; // Asegúrate de importar React
import { Avatar, AvatarGroup } from "@chakra-ui/react";
//ESTILOS: 
import './App.css';
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';

//AÑADO LOS COMPONENTES CREADOS A LA APP PARA RETORNAR ESA APP AL INDEX. 
export function App () {
    return (
        //Si quiero devolver mas de 1 elemento envolverlo con "ReactFragment" (Si no quiero crear un div o un section directamente, uno "vacio"):
        //El className para envolver esas card en un contenedor y aplicar estilos solo a ese contenedo, para que la card se pueda reutilizar en otro lugar y no apliquen cieros estilos: 
        <div className='container-TwitterCard'>
            <TwitterFollowCard isFollowing userName="anna" name="Anna Pons"></TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="anna" name="Anna Pons"></TwitterFollowCard>
        </div>
    );
};
