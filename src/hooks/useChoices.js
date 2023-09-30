import { useEffect, useState } from "react";
import options from "../data/Options";
import getResult from "../components/GetResult";

const useChoices = () => {
    // Estado donde figura la elección del usuario
    const [userChoice, setUserChoice] = useState(null)
    // Estado donde figura la elección del PC
    const [computerChoice, setComputerChoice] = useState(null)
    // Estado para definir resultado de la batalla
    const [result, setResult] = useState(null)
    // Estado de habilitado o no
    const [disabled, setDisabled] = useState(false)
    // Estados de mensajes
    const [userMessage, setUserMessage] = useState(null)
    const [computerMessage, setComputerMessage] = useState(null)
  
    // Mantengo a la escucha el estado de userChoice
    useEffect(() => {
      if(userChoice !== null){
        setUserMessage(`1. Has elegido ${options[userChoice]?.emoji} (${options[userChoice]?.name})`)
      }
    }, [userChoice])
  
    // 
    useEffect(() => {
      if(computerChoice !== null){
        setComputerMessage(`2. El ordenador ha elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`)
      }
    }, [computerChoice])
  
  
    const handlePlay = (choice) => {
      // Seteo el estado de la opción elegida 
      setUserChoice(choice)
      // Establecemos como deshabilitado para desactivar el botón
      setDisabled(true)
      // Creamos una función de elección aleatoria de elemento
      const randomChoice = Math.floor(Math.random() * 5)
  
      // Voy a crear un timeout de 1s para que la respuesta no sea instantánea
      setTimeout(() => {
        setComputerChoice(randomChoice)
      }, 1000)
  
      // Creo otro timeout para dar la respuesta
      setTimeout(() => {
        setResult(getResult(choice, randomChoice))
      }, 2000)
  
      // Limpio los timeout
      clearTimeout()
    }
  
    const reset = () => {
      setComputerChoice(null)
      setUserMessage(null)
      setComputerMessage(null)
      setResult(null)
      setDisabled(false)
    }
  
    return{
      userChoice,
      computerChoice,
      userMessage,
      computerMessage,
      result,
      disabled,
      handlePlay,
      reset,
    }
  }
  
  export default useChoices