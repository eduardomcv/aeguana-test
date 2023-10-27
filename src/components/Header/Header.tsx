import { Link } from "react-router-dom";
import { AeguanaLogo } from "../AeguanaLogo";
import "./Header.scss";

export function Header() {
  return (
    <header>
      <Link to="/">
        <AeguanaLogo />
      </Link>
    </header>
  );
}
