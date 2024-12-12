import React, {useState} from "react";
import Child from './Child2';

function Parent2(){
    const[user,setUser] = useState({name:'', age:0});

    //Funzione di callback per ricevere un oggetto dal child
    const handleUserChange = (userInfo) =>{
        setUser(userInfo);
    };

    return(
        <div>
            <h1>Nome: {user.name}, Età: {user.age}</h1>
            {/*Passa la funzione handleUserChange come prop*/}
            <Child onUserChange={handleUserChange}/>
        </div>
    );
};

export default Parent2;