import "./styles.css";

export default function Filter() {
  return (
    <div className="container">
      <div className="filter-card">
        <form className="filter-card-form">
          <input className="mb20" type="text" placeholder="Preço mínimo" />
          <input type="text" placeholder="Preço máximo" />
        </form>
        <button type="submit" className="filter-card-btn">
          Filtrar
        </button>
      </div>
    </div>
  );
}
