import styles from './Sidebar.module.css'
import { Pencil } from "phosphor-react";
import { Avatar } from './Avatar.tsx'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}> 
            <img 
                className={styles.cover}
                src='https://images.unsplash.com/photo-1738316849619-747a83d4e979?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
        
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/83981942?v=4" />
                <strong> Juao Kafer </strong>
                <span> Viado </span>
            </div>

            <footer>
                <a href="#">
                    <Pencil size={20}/>
                    Editar Perfil 
                </a>
            </footer>
        </aside>
    )
}