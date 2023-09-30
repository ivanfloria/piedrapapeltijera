
// Importo los hooks useState y useEffect
import useChoices from './hooks/useChoices'
import options from './data/Options';
import OptionButton from './components/OptionButton';
import ShowResult from './components/ShowResult';

import styles from './styles/app.module.css'

function App() {
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices()

  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
          <h1 className={styles.tit}>Cuestión de suerte</h1>
          <div className={styles.buttons}>
            {options.map((option) => (
              <OptionButton
                key={option.id}
                disabled={disabled}
                option={option}
                handlePlay={handlePlay}
              />
            ))}
          </div>
          <div className={styles.infos}>
            <div className={styles.message}>
              {userChoice !== null ? <p>{userMessage}</p> : '' }
            </div>
            <div className={styles.message}>
              {computerChoice !== null ? <p>{computerMessage}</p> : '' }
            </div>
            <div className={styles.message}>
            {result !== null ? 
                <ShowResult
                  result={result}
                  reset={reset}
                  computerChoice={computerChoice}
                  userChoice={userChoice}
                />
                : ''
              }
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
