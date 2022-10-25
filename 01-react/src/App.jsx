import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Edvaldo Fendi"
        content="lorem ipsum dolor sit amet, consectetur adip"
      />
      <Post
        author="Joao Brasil"
        content="Vai neymar!!!"
      />

    </div>
  )
}

