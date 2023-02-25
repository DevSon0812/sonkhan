import React from "react";
import { TbHeart } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
const Icon = () => {
  return (
    <div>
      <div className="header-action">
        <TbHeart size={24} />
        <HiOutlineShoppingBag size={24} />
      </div>
    </div>
  );
};

export default Icon;
