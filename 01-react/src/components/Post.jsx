import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/Edv-Fendi.png" />
          <div className={styles.authorInfo}>
            <strong>Edvaldo Fendi</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="26 de Outubro às 10:51h" dateTime='2022-10-26 10:51:38'>Publicado há 1hr</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias perspiciatis officia aliquam dignissimos, quaerat architecto temporibus repudiandae magnam saepe assumenda nisi fugiat laboriosam minima aperiam, nihil doloremque ea voluptates? 🚀</p>
        <p> 👉{'   '} <a href="">fendi.edv/doctorcare </a> </p>
        <p>
          <a href=""> #novoprojeto </a>{'   '}
          <a href="">  #nlw </a> {'   '}
          <a href=""> #rocketseat</a>
        </p>
      </div>
    </article >
  )
}