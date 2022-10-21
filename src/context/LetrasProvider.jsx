import axios from "axios";
import { createContext, useState } from "react";

 const LetrasContext = createContext()

 const LetrasProvider = ({children}) => {
    const [alerta, setAlerta] = useState('')
    const [letra, setLetra] = useState('')
    const [cargando, setCargando] = useState(false)

    const consultarAPI = async (termino) =>{
        setCargando(true)
        try {
            const {artista, cancion} = termino
            const URL = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const {data} = await axios(URL)
            setLetra(data.lyrics)
            setAlerta('')
        } catch (error) {
            setAlerta('Canción no encontrada')
            console.log(error)
        }
        setCargando(false)
    }


    return(
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                consultarAPI,
                letra,
                cargando
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
 }
 export {
    LetrasProvider
 }
 export default LetrasContext