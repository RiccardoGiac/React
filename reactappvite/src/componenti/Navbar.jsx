import './Navbar.css'
import Link from './Link'

const x = 300000; //crea costante utilizzabile come scritto sotto 
//(operatore ternario ma anche operazioni o componente/funzione 
//che esca un risultato)

//PER IMMAGINI O COSì:
//const img = "/vite.svg";
//poi nel codice sotto la funzione <img src={img}></img>

//O COSì
const img = "vite"; //leva l'estensione dalla costante e la mette
//nel codice sotto
//<img src={`/${img}.svg`}></img>

// nel codice sotto le {} introducono il fatto che stai immettendo
// del codice javascript mentre le {} interne stai mettendo un
// oggetto

const imgStyle={         //crea una costante per stili delle immagini
    height: "300px",
    borderRadius: "30px"
}

//Può essere dinamico
/* const imgStyle={
    height: x < 10 ? "800px" : "500px",    ->operatore ternario
    borderRadius: "30px"
}
*/

//<img style={imgStyle} parte interessata, il resto è per selez l'immagine
//<img style={imgStyle}src={`/${img}.svg`}></img>
//Può essere anche:
//<img className="bordoArrotondato" src={`/${img}.svg`}></img>
//invece di mettere la const si mette la classe di un .css
//in questo caso NavBar.css

//con i div puoi creare nel css un qualcosa tipo #box e implementargli le
//classi
//<div id='box'className='rounded rotated textcenter sbinna'>Bella Zi</div>

function Navbar() {
    return(
    <> 
        <div id='box'className='rounded rotated textcenter sbinna'>Bella Zi</div>
        <br></br>
        <nav>{x > 100000? "sono in alto" : "sono in basso"}</nav>
        <img src={`/${img}.svg`}></img>
        <img style={imgStyle}src={`/${img}.svg`}></img>
        <img className="bordoArrotondato" src={`/${img}.svg`}></img>
        <ul>
            <li><Link></Link></li>
            <li><a href="#"> Ciao </a></li>
            <li><a href="#"> Ciao </a></li>
            <li><Link></Link></li>
            <li><a href="#"> Ciao </a></li>
        </ul>
   </> 
   )

}

export default Navbar