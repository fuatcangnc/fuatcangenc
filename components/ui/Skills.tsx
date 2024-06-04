import React from "react";
import { FaBehance } from "react-icons/fa6";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="flex flex-col justify-start items-start w-[400px] gap-6 px-5 py-6 rounded-xl bg-[#171b27] border border-[#e8eef3]/10">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 space-y-[-35px]">
        <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0">
          <SkillCard color="white" size={24} name='FaTwitter'></SkillCard>
          <SkillCard color="white" size={24} name='FaFacebook'></SkillCard>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0">
          <SkillCard color="white" size={24} name='FaInstagram'></SkillCard>

          </div>
          <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0">
          <SkillCard color="white" size={24} name='FaFigma'></SkillCard>

          </div>
          <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0">
          <SkillCard color="white" size={24} name='FaTwitter'></SkillCard>

          </div>
        </div>
        <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0">
        <SkillCard color="white" size={24} name='FaTwitter'></SkillCard>
        <SkillCard color="white" size={24} name='FaTwitter'></SkillCard>

        </div>
      </div>
    </div>
  );
}

export default Skills;
