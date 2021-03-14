import React,{useState} from 'react'
import styles from './compadre.module.css';
import ComHijo from '../ComHijo/ComHijo'


const ComPadre = (props) =>{  



   const [contador, setContador] = useState(0)
        

        const onCli = ()=>{
            props.setName('EZEQUIEL');
            setContador(contador + 1);
        }


    return(
        <div className={styles.divPadre} style={{height:'500px', width:'500px', alignItems:'center', borderColor:'black'}}>
        <h1>COMPONENTE COMPADRE</h1>
       
        <div id='elec'>el ec</div>
            <button onClick={()=>onCli()}> APRETAME </button>


            <h2> NOMBRE: {props.name} {contador} </h2>
            {/* COMPOENTE COM HIJO */}


            <ComHijo props={props}/>
        </div>
)}



export default ComPadre;