/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";
import pictureProfile from "../assets/Perfil.jpg";


export function Comment ({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment () {
    onDeleteComment(content);
    console.log('apagou')
}

  function handleLikeComment () {
  
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src={pictureProfile} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Alves</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  )
}