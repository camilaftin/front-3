import './style.scss'
import { useState, useEffect } from "react"

export function DecimaTerceiraAula(){

    const [contador, setContador]  = useState(0)
    const [userName, setUserName]  = useState('')
    const [userNameError, setUserNameError]  = useState(false)

    function addContador(){
        setContador(contador+1)
    }

    useEffect(() => {
        //console.log("teste")

        if(userName.length > 10){
            setUserNameError(true)
        } else{
            setUserNameError(false)
        }
    }, [userName])



    return (
        <>
        <input type="text" value={userName} onChange={event => setUserName(event.target.value)}></input>
        {userNameError ? (<small>O campo nome contem mais do que dez caracteres</small>) : null}
        <p>Valor do contador {contador}</p>
        <button onClick={()=>addContador()}> Atualizar contador</button>

        </>
    )
}