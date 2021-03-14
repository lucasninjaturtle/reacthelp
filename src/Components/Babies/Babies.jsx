import  React from 'react'

//NO SE OLVIDEN DE PASAR PROPS

const Babies = (props)=>{

    return(

        <div>

        <button onClick={()=>console.log(props)}> BUTTON BABIES</button>
            <div>

               <h3>name: {props.props.name}</h3>
               <h3>lastname: {props.props.lastname}</h3>
               
            </div>
        </div>

    )
}

export default Babies;