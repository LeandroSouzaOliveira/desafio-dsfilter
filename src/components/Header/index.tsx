import ListingCount from "../ListingCount";
import "./styles.css";

export default function Header() {
  return (
    <header id="header-general">
      <div className="container content">
        <h1 className="content-title">DSFilter</h1>
        <ListingCount />
      </div>
    </header>
  );
}
