import React, {useState} from 'react'
import './App.css';
import ComPadre from './Components/ComPadre/ComPadre'
import ComHijo from './Components/ComHijo/ComHijo'

function App() {

//   const amigos = {
//     amigosespeciales:[
//       {name: 'lucas', lastname: 'ninjaturtle', gustos:['pizza', 'tolueno', 'helado vegano']},
//       {name: 'emma', lastname: 'emma apellido', gustos:['anana', 'futbol', 'cafe']},
//       {name: 'ec', lastname: 'ezequiel', gustos:['tolueno', 'JS', 'musica']},
//     ],
//     edadesPorIndex:[],
//     quienSoy:{
//         nombre:'lucas',
//         edad:30,
//         vivo: 'CABA'
//     }
// }

const [amigotes, setAmigotes] = useState(
  [
    {name: 'lucas', lastname: 'ninjaturtle', gustos:['pizza', 'tolueno', 'helado vegano']},
    {name: 'emma', lastname: 'emma apellido', gustos:['anana', 'futbol', 'cafe']},
    {name: 'ec', lastname: 'ezequiel', gustos:['tolueno', 'JS', 'musica']},
  ]
)

    const [name, setName] = useState('')
    const [quienSoy, setQuienSoy] = useState(
      {
        nombre:'lucas',
        edad:30,
        vivo: 'CABA'
    })
    const [amigosEspeciales, setAmigosEspeciales] = useState([])




  return (
    <div className="App">
      <h1>Hello World!</h1>

      <h2>COMPONENTE PADRE PERO H2 en APP</h2>
      <ComPadre amigotes={amigotes} setName={setName} setQuienSoy={setQuienSoy} name={name} quienSoy={quienSoy} pepe={amigosEspeciales}/>
      
    </div>
  );
}

export default App;
