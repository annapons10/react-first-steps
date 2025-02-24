import React from 'react'; // Asegúrate de importar React
import { Avatar, AvatarGroup } from "@chakra-ui/react";
//ESTILOS: 
import './App.css';
//HOOKS. USESTATE PARA CREAR UN ESTADO:
import { useState} from 'react';

//CREO  MI COMPONENTE PARA SER REUTILIZABLE: PASARLE LOS PARÁMETROS:
//La desestructuración es una manera de "sacar" directamente los valores de un objeto {}: 
export function TwitterFollowCard({ userName , name, initialIsFollowing, formatUserName}) {
    //Creo el estado con un estado por defecto, que me devuelve un array de dos posiciones. 
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); 
    //Para mostrar en el botón: 
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    //Cambiar los colores del botón con las clases correspondientes.
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' :'tw-followCard-button';
    //Creo la función para el click del botón seguir y cambie de estado. 
    const handleClick = () => {
        //Cambio el estado. 
        setIsFollowing(!isFollowing);
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <AvatarGroup>
                    <Avatar src="https://img.freepik.com/psd-premium/pequena-imagen-vectorial-dragon-verde_925906-149.jpg" />
                </AvatarGroup>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text} {/* El hijo de ese elemento. Lo que envuelve. */}
                </button>
            </aside>
        </article>
    );
};
