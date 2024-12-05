
function Card(props) {
    // eslint-disable-next-line react/prop-types
    const titolo = props.titolo
    // eslint-disable-next-line react/prop-types
    const img = props.img
    // eslint-disable-next-line react/prop-types
    const descrizione = props.descrizione
    const isLetsgoski = props.isLetsgoski //funziona anche se sottolineato
    
    //oppure function Card({titolo,img,descrizione}) ->senza i const
   
    //sotto isLetsgoski è gestito con operatore ternario

    /*
    && --> non è un AND ma significa che se è TRUE la roba a sinistra
    di && allora mostra la roba a destra se no non mostrare nulla 
    */
    
    return( 

    <div>
        <img src={img} alt=""></img>

        <div>
            <h2>{titolo}</h2>
            <p>{descrizione}</p>
            {isLetsgoski ? <span><b>Letsgoski</b></span> : <span>Not Letsgoski</span>}
    
        </div>

    </div>


        
    )

}

export default Card