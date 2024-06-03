import React from "react";
import { FaBehance } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";

function SkillCard({ name, size = 24, color = "black" }) {
  const IconComponent = Icons[name];
  return (
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[120px] h-[138.46px] bg-custom relative gap-[9.230775833129883px] bg-cover bg-no-repeat bg-center cursor-pointer">
      <IconComponent size={size} color={color}></IconComponent>
    </div>
  );
}

export default SkillCard;
