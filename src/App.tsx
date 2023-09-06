import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextListingCount } from "./utils/context-listing";

export default function App() {
  const [contextListingCount, setContextListingCount] = useState<number>(0);

  return (
    <ContextListingCount.Provider
      value={{ contextListingCount, setContextListingCount }}
    >
      <body>
        <Header />
        <main>
          <ListingBody />
        </main>
      </body>
    </ContextListingCount.Provider>
  );
}
