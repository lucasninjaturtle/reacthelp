import React,{useState} from 'react'
import Babies from '../Babies/Babies'



const ComHijo = (props) =>{


   
    // props.props.setQuienSoy(...quienSoy, 
    //     {
    //         nombre:'lucas',
    //         edad:edad+1,
    //         vivo: 'CABA'
    //     }
    //     )
        

    return(

        <div style={{height:'350px', width:'350px', alignItems:'center', backgroundColor:'red'}}>
        <h2>COMPONENTE HIJO re picante</h2>
        
        <div id='elec'>el ec</div>
            <button onClick={()=>props.props.setQuienSoy(    {
    nombre:'lucas',
    edad:props.props.quienSoy.edad + 1,
    vivo: 'CAMBIE'
})}> Apretame que cuento

</button>
        <ul>
        <li>{props.props.quienSoy.nombre}</li>

        <li>edad {props.props.quienSoy.edad}</li>
        </ul>

        {/* ACA VOY A HACER MI LISTA DE AMIGOTES (OBJETOS QUE ESTAN DENTRO DE UN ARRAY) */}

        <div>
            <button onClick={()=>console.log(props.props.amigotes)}> HACE CONSOLE LOG </button>
            
        </div>
        {props.props.amigotes.map( porCadaAmigote => (
            <Babies props={porCadaAmigote} />
            ))}
        
        </div>
)}

// const [quienSoy, setQuienSoy] = useState(


//     {
//     nombre:'lucas',
//     edad:30,
//     vivo: 'CABA'
// }


// )



export default ComHijo;