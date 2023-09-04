import './styles.css';
import Filter from "../Filter";
import Listing from "../Listing";

export default function ListingBody() {
  return (
    <>
      <section>
        <Filter />
      </section>
      <section id="listing-section" className="container">
        <div className="listing-products mb20 mt20">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
      </section>
    </>
  );
}
