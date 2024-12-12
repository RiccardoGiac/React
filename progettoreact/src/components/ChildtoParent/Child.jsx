import React from 'react';

function Child({onMessage}){
    const sendMessageToParent = () =>{
        //Invia il messaggio al parent tramite la funzione onMessage
        onMessage('Ciao dal componente Child');
    };

    return(
        <div>
            <button onClick={sendMessageToParent}>Invia messaggio al parent</button>
        </div>
    
    );
};

export default Child;