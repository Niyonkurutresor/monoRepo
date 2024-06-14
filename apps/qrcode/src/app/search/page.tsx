"use client";

import algoliasearch from "algoliasearch/lite";
import { useState } from "react";

import {
  InstantSearch,
  SearchBox,
  Hits,
  useInstantSearch,
} from "react-instantsearch";
const searchClient = algoliasearch(
  "LJ3CQMGBOK",
  "20228d03cad49ebd3c335a3d29cf795f"
);
const Search = () => {
  const [value, setValue] = useState<string>("");
  return (
    <InstantSearch searchClient={searchClient} indexName="LeaningIndex">
      <SearchBox placeholder="Search" searchAsYouType={true} />
    </InstantSearch>
  );
};

export default Search;
