import { useState } from 'react'
import './App.css'

function App()
{
  const validate = (numero) =>
  {
    const error = {}
    if (numero.fila < 8) {
      error.fila = "el numero debe ser mayor a 8"
    }
    if (!numero.fila) {
      error.fila = "el campo no puede ser vacio"
    }
    if (numero.fila % 2 !== 0) {
      error.fila = "El numero ingresado debe ser par"
    }
    if (numero.fila > 100) {
      error.fila = "ingrese un numero menor a 100"
    }
    return error
  }
  const [numero, setNumero] = useState({
    fila: ""
  })
  const [form, setForm] = useState(8)
  const [errors, setErrors] = useState({})



  const handleChange = (event) =>
  {

    setNumero({
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...numero,
      [event.target.name]: event.target.value
    }))
  }
  const handleSubmit = (event) =>
  {
    event.preventDefault();
    if (!errors.fila) {
      setForm(numero.fila);


    }
    setNumero({
      fila: ""
    })
  }
  let tablero = [];
  function PintarTablero(numFilas)
  {

    let mitadLength = numFilas / 2
    let mitadLength2 = numFilas / 2
    let numFilas2 = numFilas

    for (let i = 0; i < numFilas2; i++) {
      /* Dada la mitad de la longitud total indicada por el usuario
      a cada elemento del array (tablero) le asigno un array de la longitud indicada
       con un valor de "red", luego suplanto por "blue en forma decreciente*/

      if (i < mitadLength) {
        tablero.push(Array.from({ length: numFilas }, (v = "red") => v))

        tablero[i].fill("blue", tablero[i].length - (i + 1), tablero[i].length)

      } else {

        tablero.push(Array.from({ length: numFilas }, (v = "blue") => v));
        mitadLength2--

        tablero[i].fill("red", 0, mitadLength2 + 1)
      }

    }


    return tablero
  }


  let tableroPintado = PintarTablero(form)

  return (
    <div className="App">
      <div className='containeTotal'>
        {
          tableroPintado?.map((e, i) => (
            <div className="container" key={i}>
              {
                e.map((ele, i) => (
                  <div className={ele} key={ele + i}></div>
                ))
              }
            </div>
          ))

        }
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="number"
          name="fila"
          id="fila"
          value={numero.fila}
          className="inputNum"
          onChange={e => handleChange(e)} />
        {errors.fila && (<p >{errors.fila}</p>)}
        <button className='btn' type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
