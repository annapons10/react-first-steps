import React from 'react'; // Asegúrate de importar React
import { Avatar, AvatarGroup } from "@chakra-ui/react";
//ESTILOS: 
import './App.css';
//CREO  LOS COMPONENTES
export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <AvatarGroup>
                    <Avatar name="Anna Pons" src="https://via.placeholder.com/150" />
                </AvatarGroup>
                <div className='tw-followCard-info'>
                    <strong>Anna Pons</strong>
                    <span className='tw-followCard-infoUserName'>@anna</span>
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
