import { createContext } from "react";

export type ContextListingCountType = {
  contextListingCount: number;
  setContextListingCount: (contextListingCount: number) => void;
};

export const ContextListingCount = createContext<ContextListingCountType>({
  contextListingCount: 0,
  setContextListingCount: () => {},
});
