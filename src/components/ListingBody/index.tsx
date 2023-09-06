import "./styles.css";
import Filter from "../Filter";
import Listing from "../Listing";
import * as productService from "../../services/product-service";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import { ContextListingCount } from "../../utils/context-listing";

export default function ListingBody() {
  const [productMinValue, setProductMinValue] = useState<number>(0);
  const [productMaxValue, setProductMaxValue] = useState<number>(
    Number.MAX_VALUE
  );
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const { setContextListingCount } = useContext(ContextListingCount);

  useEffect(() => {
    setProducts(productService.findByPrice(productMinValue, productMaxValue));
    setContextListingCount(productService.countListting(productMinValue, productMaxValue));
  }, [productMinValue, productMaxValue, setContextListingCount]);

  function handleSearchValue(searchMinValue: number, searchMaxValue: number) {
    setProductMinValue(searchMinValue);
    setProductMaxValue(searchMaxValue);
  }

  return (
    <>
      <section>
        <Filter onFilter={handleSearchValue} />
      </section>
      <section id="listing-section" className="container">
        <div className="listing-products mb20 mt20">
          {products.map((product) => (
            <Listing key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
