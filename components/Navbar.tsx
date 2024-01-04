import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Pricing", href: "/pricing" },
];

export const Navbar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      {menuItems.map((menuItem) => (
        <ActiveLink
          key={menuItem.href}
          href={menuItem.href}
          text={menuItem.text}
        />
      ))}
    </nav>
  );
};
