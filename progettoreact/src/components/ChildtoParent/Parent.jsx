import React, {useState} from "react";
import Child from "./Child";

function Parent(){
    const[message,setMessage] = useState('');

    //funzione di callback che il child invoca per mandare un messaggio al parent
    const handleMessage = (childMessage) =>{
        setMessage(childMessage);
    };

    return(
        <div>
            <h1>Messaggio dal Child: {message}</h1>
            {/*Passa la funzione handleMessage come prop al child */}
            <Child onMessage={handleMessage}/>
        </div>
    );
};

export default Parent;