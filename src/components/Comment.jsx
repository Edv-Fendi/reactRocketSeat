import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Edv-Fendi.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Edvaldo Fendi</strong>
                            <time title="26 de Outubro às 10:51h" dateTime='2022-10-26 10:51:38'>Cerca de 1hr atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>


                    <p>{content}</p>
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