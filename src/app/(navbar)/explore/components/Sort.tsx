"use client";

import RadioButton from "@/components/RadioButton";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";

const Sort = ({ isShow }: { isShow: boolean }) => {
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
    setMaxPrice(values[1]);
  };
  return (
    <div className="w-full mx-auto mt-1 glass rounded-xl p-5 flex justify-between gap-10">
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-xl font-semibold">Valuation</p>
        <div className="flex gap-10 items-center">
          <div className="w-1/4 flex border-white justify-between border-[1px] py-2 px-3 rounded-lg items-center">
            <p className="font-montserrat">Rp. {formatPrice(minPrice)}</p>
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
          />
          <div className="w-1/4 flex border-white justify-between border-[1px] py-2 px-3 rounded-lg items-center">
            <p className="text-sm opacity-60">max</p>
            <p className="font-montserrat">Rp. {formatPrice(maxPrice)}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold">Sort</p>
        <div className="flex gap-5 items-center justify-between flex-1">
          <RadioButton
            name="Highest"
            checked={sort === "HIGHEST"}
            onChange={() => setSort("HIGHEST")}
          />
          <RadioButton
            name="Lowest"
            checked={sort === "LOWEST"}
            onChange={() => setSort("LOWEST")}
          />
        </div>
      </div>
    </div>
  );
};

export default Sort;
