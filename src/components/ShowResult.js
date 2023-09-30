
import options from "../data/Options"
import styles from '../styles/showresult.module.css'


const ShowResult = ({result,reset,userChoice,computerChoice}) => {
    return(
      <div>
        {result === 0 && <p>🤷🏽‍♀️ Empate</p>}
        {result === 1 && (
          <p>
            ✅ Has ganado con {options[userChoice]?.name} contra{" "}
            {options[computerChoice]?.name}
          </p>
        )}
        {result === 2 && (
          <p>
            ❌ Has perdido con {options[userChoice]?.name} contra{" "}
            {options[computerChoice]?.name}
          </p>
        )}
        <div className={styles.buttons}>
          <button onClick={reset} className={styles.button}>Volver a jugar</button>
        </div>
      </div>
    )
  }

  
  export default ShowResult