"use client";

import { useCallback, useState } from "react";
import Filter from "./Filter";
import ListCompany from "./ListCompany";
import Search from "./Search";
import Sort from "./Sort";

const Explore = () => {
  const [showSort, setShowSort] = useState(false);
  const [renderSort, setRenderSort] = useState(false);

  const handleClose = useCallback(() => {
    setShowSort(false);
    setTimeout(() => {
      setRenderSort(false);
    }, 300);
  }, []);

  const handleOpen = useCallback(() => {
    setRenderSort(true);
    setTimeout(() => {
      setShowSort(true);
    }, 100);
  }, []);
  return (
    <div className="container mx-auto my-20 z-20">
      <Search />
      <div className="mt-5 mb-10">
        <Filter
          toogleClose={handleClose}
          toogleOpen={handleOpen}
          showSort={showSort}
        />
        <div
          className={`${showSort ? "scale-y-100" : "scale-y-0"} ${
            renderSort ? "block" : "hidden"
          } transition duration-300 origin-top`}
        >
          <Sort isShow />
        </div>
      </div>
      <ListCompany />
    </div>
  );
};

export default Explore;
