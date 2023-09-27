"use client";

import Filter from "./Filter";
import ListCompany from "./ListCompany";
import Search from "./Search";

const Explore = () => {
  return (
    <div className="container mx-auto my-20 z-20">
      <Search />
      <div className="mt-5 mb-10">
        <Filter />
      </div>
      <ListCompany />
    </div>
  );
};

export default Explore;
