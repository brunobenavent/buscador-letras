import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {

    const [busqueda, setbusqueda]= useState({
        artista: "",
        cancion: ""
    })

    const {setAlerta, consultarAPI} = useLetras()

    const handleChangeCampo = e =>{
        setbusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        if(Object.values(busqueda).includes('')){
            setAlerta('Coloca el nombre del artista y canción')
            return
        }
        consultarAPI(busqueda)
    
    }

    return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca por artista y canción</legend>
        <div className="form-grid">
            <div>
                <label htmlFor="artista">Artista</label>
                <input
                    type="text"
                    name="artista"
                    placeholder="Nombre de artista"
                    value={busqueda.artista}
                    onChange={handleChangeCampo}
                />
            </div>
            <div>
                <label htmlFor="cancion">Canción</label>
                <input
                    type="text"
                    name="cancion"
                    placeholder="Nombre de la canción"
                    value={busqueda.cancion}
                    onChange={handleChangeCampo}
                />
            </div>
            <input type="submit" value="Buscar letra" />
        </div>
    </form>
  )
}

export default Formulario
