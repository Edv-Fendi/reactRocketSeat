import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/Edv-Fendi.png" />  

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Edvaldo Fendi</strong>
                        <time title="26 de Outubro às 10:51h" dateTime='2022-10-26 10:51:38'>Cerca de 1hr atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={20}/>
                    </button>
                </header>


                <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>


                <footer>
                    <button>
                        <ThumbsUp />
                        aplaudir <span>20</span>
                    </button>
                </footer>
            </div>       
        </div> 
    )
}