import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="26 de Outubro às 10:51h" dateTime='2022-10-26 10:51:38'>{publishedAt.toString()}</time>
      </header>

      <div className={styles.content}>
        
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentario'/>


        <footer>
          <button type='submit'>Publicar</button>
        </footer>
        
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />

      </div>

    </article >
  )
}