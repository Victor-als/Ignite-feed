import { Avatar } from "./Avatar";
import styles from "./sidebar.module.css";
import { PencilLine } from "phosphor-react"
import pictureProfile from "../assets/Perfil.jpg";

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
       src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=500&=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       alt="" />

       <div className={styles.profile}>
         <Avatar hasBorder src={pictureProfile} />

         <strong>Victor Alves</strong>
         <span>Web Developer</span>
       </div>

       <footer>
         <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
         </a>
       </footer>
    </aside>
  )
}