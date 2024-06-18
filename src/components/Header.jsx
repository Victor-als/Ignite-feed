import styles from "./header.module.css";
import IgniteLogo from "../assets/igniteLogo.svg";

export function Header () {
  return (
    <header className={styles.header}>
      <div>
        <img src={IgniteLogo} alt="Logo ignite" />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  )
}