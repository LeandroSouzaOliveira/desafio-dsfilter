import "./styles.css";
import { useState } from "react";

type FormData = {
  minValue?: number;
  maxValue?: number;
};

type Props = {
  onFilter?: (nro1: number, nro2: number) => void;
};

export default function Filter({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({
    minValue: undefined,
    maxValue: undefined,
  });

  function handleFilterValue(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFilterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleClickFilter() {
    if (onFilter) {
      onFilter(formData.minValue || 0, formData.maxValue || Number.MAX_VALUE);
    }
  }

  return (
    <div className="container">
      <div className="filter-card">
        <form onSubmit={handleFilterSubmit} className="filter-card-form">
          <input
            name="minValue"
            value={formData.minValue || ""}
            className="mb20"
            type="text"
            placeholder="Preço mínimo"
            onChange={handleFilterValue}
          />
          <input
            name="maxValue"
            value={formData.maxValue || ""}
            type="text"
            placeholder="Preço máximo"
            onChange={handleFilterValue}
          />
        </form>
        <button className="filter-card-btn" onClick={handleClickFilter}>
          Filtrar
        </button>
      </div>
    </div>
  );
}
