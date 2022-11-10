import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Edv-Fendi.png",
      name: "Edvaldo Fendi",
      role: "Digital DOC"
    },

    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias perspiciatis officia aliquam dignissimos, quaerat architecto temporibus repudiandae magnam saepe assumenda nisi fugiat laboriosam minima aperiam, nihil doloremque ea voluptates? 🚀" },
      { type: 'link', content: 'fendi.edv/doctorcare' },
    ],
    publishedAt: new Date('2022-11-08 10:03:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/dumaciel.png",
      name: "Eduardo Maciel",
      role: "Convicti "
    },

    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias perspiciatis officia aliquam dignissimos, quaerat architecto temporibus repudiandae magnam saepe assumenda nisi fugiat laboriosam minima aperiam, nihil doloremque ea voluptates? 🚀" },
      { type: 'link', content: 'fendi.edv/doctorcare' },
    ],
    publishedAt: new Date('2022-11-08 20:03:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}

