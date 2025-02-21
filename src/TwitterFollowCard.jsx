import React from 'react'; // Asegúrate de importar React
import { Avatar, AvatarGroup } from "@chakra-ui/react";
//ESTILOS: 
import './App.css';

//CREO  MI COMPONENTE PARA SER REUTILIZABLE: PASARLE LOS PARÁMETROS:
//La desestructuración es una manera de "sacar" directamente los valores de un objeto {}: 
export function TwitterFollowCard({ userName, name, isFollowing }) {
    console.log(isFollowing);
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <AvatarGroup>
                    <Avatar name="Anna Pons" src="https://via.placeholder.com/150" />
                </AvatarGroup>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    );
};
