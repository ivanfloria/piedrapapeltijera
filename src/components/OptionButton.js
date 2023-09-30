
import styles from '../styles/optionbutton.module.css'

const OptionButton = ({option, handlePlay, disabled}) => {
    return(
      <button
        className={styles.button}
        key={option.id}
        disabled={disabled}
        onClick={() => handlePlay(option.id)}
        title={option.name}
      >
        {option.emoji}
      </button>
    )
  }

export default OptionButton