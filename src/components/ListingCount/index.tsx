import "./styles.css";
import { useContext, useEffect, useState } from "react";
import * as productService from "../../services/product-service";
import { ContextListingCount } from "../../utils/context-listing";

export default function ListingCount() {
  const [productCount, setproductCount] = useState(
    productService.countListting(0, Number.MAX_VALUE)
  );
  const { contextListingCount } = useContext(ContextListingCount);

  useEffect(() => {
    setproductCount(contextListingCount);
  }, [contextListingCount])

  return <div className="content-quantity">{productCount} produto(s)</div>;
}
