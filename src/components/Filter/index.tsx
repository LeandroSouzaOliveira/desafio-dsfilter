import "./styles.css";
import { ContextListingCount } from "../../utils/context-listing";
import { useContext, useState } from "react";
import * as productService from "../../services/product-service";

type FormData = {
  minValue?: number;
  maxValue?: number;
};

type Props = {
  onFilter?: (nro1: number, nro2: number) => void;
};

export default function Filter({ onFilter }: Props) {
  const { setContextListingCount } = useContext(ContextListingCount);
  const [formData, setFormData] = useState<FormData>({
    minValue: undefined,
    maxValue: undefined,
  });

  function handleFilterValue(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    if (/^\d+$/.test(value)) {
      setFormData({ ...formData, [name]: `${value}.00` });
    }
  }

  function handleFilterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleClickFilter() {
    if (onFilter) {
      const firstParams = formData.minValue || 0;
      const secondParams = formData.maxValue || Number.MAX_VALUE;
      onFilter(firstParams, secondParams);
      setContextListingCount(
        productService.countListting(firstParams, secondParams)
      );
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
            onBlur={handleBlur}
          />
          <input
            name="maxValue"
            value={formData.maxValue || ""}
            type="text"
            placeholder="Preço máximo"
            onChange={handleFilterValue}
            onBlur={handleBlur}
          />
        </form>
        <button className="filter-card-btn" onClick={handleClickFilter}>
          Filtrar
        </button>
      </div>
    </div>
  );
}
