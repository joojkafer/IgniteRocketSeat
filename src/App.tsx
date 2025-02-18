import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/83981942?v=4',
      name: 'Juao Kafer',
      role: 'Viado @ Join Ads'
    },
    content: 'Conteúdo',
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/83623617?v=4',
      name: 'Jooj Kafer',
      role: 'Gay @ Groone Ads'
    },
    content: 'Conteúdo muito mais legal',
    publishedAt: new Date('2024-06-10 16:00:00')
  }
]

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
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}