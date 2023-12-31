"use client";

import RadioButton from "@/components/RadioButton";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";

interface SortProps {
  isShow: boolean;
  setMinPriceExplore: (query: number) => void;
  setMaxPriceExplore: (query: number) => void;
  setSortExplore: (query: "HIGHEST" | "LOWEST") => void;
}

const Sort = ({
  isShow,
  setMinPriceExplore,
  setMaxPriceExplore,
  setSortExplore,
}: SortProps) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000000000);
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState("" as "HIGHEST" | "LOWEST");

  useEffect(() => {
    setShowModal(isShow);
  }, [isShow]);

  const formatPrice = (price: number) => {
    // Remove any non-numeric characters except decimal point
    if (price === 5000000000) {
      return (price / 1000000000).toFixed(1) + "b+";
    } else if (price >= 1000000000) {
      return (price / 1000000000).toFixed(1) + "b";
    } else if (price >= 1000000) {
      return (price / 1000000).toFixed(1) + "m";
    } else {
      return price.toString();
    }
  };

  const handlePriceChange = (values: number | number[]) => {
    if (typeof values === "number") return;
    setMinPrice(values[0]);
    setMinPriceExplore(values[0]);
    setMaxPrice(values[1]);
    setMaxPriceExplore(values[1]);
  };
  return (
    <div className="w-full mx-auto mt-5 lg:mt-1 glass rounded-2xl p-5 flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 overflow-hidden">
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-lg md:text-xl font-semibold">Valuation</p>
        <div className="flex gap-3 lg:gap-10 items-center flex-wrap lg:flex-nowrap">
          <div className="flex-1 lg:flex-initial lg:w-1/4 flex border-white justify-between border-[1px] py-2 px-3 rounded-lg items-center order-1">
            <p className="font-montserrat">Rp {formatPrice(minPrice)}</p>
            <p className="text-sm opacity-60">min</p>
          </div>
          <Slider
            min={0}
            max={5000000000}
            step={1000}
            range
            defaultValue={[minPrice, maxPrice]}
            onChange={handlePriceChange}
            railStyle={{ backgroundColor: "lightgray" }}
            trackStyle={[{ backgroundColor: "#90FF9B" }]}
            handleStyle={[
              { borderColor: "#90FF9B" },
              { borderColor: "#90FF9B" },
            ]}
            pushable={100}
            allowCross={false}
            included
            draggableTrack
            className="order-3 lg:order-2"
          />
          <div className="flex-1 lg:flex-initial lg:w-1/4 flex border-white justify-between border-[1px] py-2 px-3 rounded-lg items-center order-2 lg:order-3">
            <p className="text-sm opacity-60">max</p>
            <p className="font-montserrat">Rp {formatPrice(maxPrice)}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg md:text-xl font-semibold">Sort</p>
        <div className="flex gap-5 items-center justify-start flex-1">
          <RadioButton
            name="Highest"
            checked={sort === "HIGHEST"}
            onChange={() => {
              setSort("HIGHEST");
              setSortExplore("HIGHEST");
            }}
          />
          <RadioButton
            name="Lowest"
            checked={sort === "LOWEST"}
            onChange={() => {
              setSort("LOWEST");
              setSortExplore("LOWEST");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sort;
