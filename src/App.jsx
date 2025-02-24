import React from 'react'; // Asegúrate de importar React
import { Avatar, AvatarGroup } from "@chakra-ui/react";
//ESTILOS: 
import './App.css';
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';
//Cojo los datos de los usuarios de una API con fetch.
const users = [
    {userName: 'midudev',
    name: 'Miguel Ángel',
    isFollowing: true
    },
    {
        userName: 'Anna',
        name: 'Anna Pons', 
        isFollowing: false
    }
]; 

//AÑADO LOS COMPONENTES CREADOS A LA APP PARA RETORNAR ESA APP AL INDEX. 
export function App () {
    //CREO UNA FUNCIÓN FLECHA PARA MANDAR A MI COMPONENTE Y QUE LA PUEDA USAR:
    const formatUserName = (userName) => `@${userName}`;
    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                        key={userName} 
                        userName={userName} 
                        name={name} 
                        initialIsFollowing={isFollowing} 
                        formatUserName={formatUserName}>
                        </TwitterFollowCard>
                    )
                })
            }
       </section>
    )
};
