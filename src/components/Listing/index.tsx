import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  product: ProductDTO;
};

export default function Listing({ product }: Props) {
  return (
    <div className="listing-card">
      <div className="listing-card-content">
        <p>{product.name}</p>
        <h3>{product.price.toFixed(2)}</h3>
      </div>
    </div>
  );
}
