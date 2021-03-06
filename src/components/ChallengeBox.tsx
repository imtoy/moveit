import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountdown} = useContext(CountdownContext);

  function handChallengeSucceeded(){
    completedChallenge();
    resetCountdown();

  }
  function handChallengeFailed(){
    resetChallenge();
    resetCountdown();

  }
    return(
        <div className={styles.ChallengeBoxContainer}>
            {activeChallenge ? (
              <div  className={styles.ChallengeActive}> 
              <header>Ganhe {activeChallenge.amount}xp</header>
              
              <main>
                <img src={`icons/${activeChallenge.type}.svg`} />
                <strong>Novo desafio</strong>
                <p>{activeChallenge.description}</p>
              </main>
              <footer>
                <button type="button"
                className={styles.ChallengeFailedButton}
                onClick={handChallengeFailed}
                >
                  Falhei
                </button>
                <button type="button"
                className={styles.ChallengeSucceededButton}
                onClick={handChallengeSucceeded}
                >
                  Completei
                </button>
              </footer>
              </div>
            ) : (
               <div className={styles.ChallengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP" />
                    Avance de level completando desafios!
                </p>
            </div> 
            ) }
        </div>
    )
}