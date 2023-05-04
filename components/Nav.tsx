import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
      <nav className={styles.nav}>
          <ul className={styles.list}>
              <li className={styles.item}>
                  <Link href={'/'}>
                      <a>Home</a>
                  </Link>
                  <Link href={'/add-post'}>
                      <a>Add Post</a>
                  </Link>
              </li>
          </ul>
      </nav>
  )
}

export default Nav

