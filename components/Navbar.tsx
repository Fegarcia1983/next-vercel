import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <ActiveLink href="/" text="Home" />
      <ActiveLink href="/about" text="About" />
      <ActiveLink href="/contact" text="Contact" />
    </nav>
  );
};
