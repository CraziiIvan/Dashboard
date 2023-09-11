import { Icon } from "@tremor/react";
import NavList from "../components/Nav";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { createContext, useState } from "react";

export const IsFoldContext = createContext(false)

type TSideBarProps = {
  openNav: boolean
}

function SideBar({openNav}: TSideBarProps) {

  const [ isFold, setIsFold ] = useState(false)

  return (
    <div className={`absolute z-10 top-24 md:top-0 md:relative opacity-0 md:opacity-100 ${openNav ? " scale-y-100 opacity-100" : "scale-y-90"} origin-top bg-white  rounded-2xl shadow-lg md:shadow-sm  group py-4 ${isFold ? "w-[72px] px-3" : "w-60 px-5"} transition-all duration-300 ease-in-out`}>
      <div className={` absolute top-12 -right-4 bg-violet-500 rounded-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out ${isFold && "rotate-180"}`}>
        <Icon icon={ChevronLeftIcon} onClick={() => setIsFold(!isFold)} className=" hidden md:block text-white"/>
      </div>
      <div className=" flex justify-center mb-10 md:mb-16">
        <div className=" w-8 h-8 border-4 outline-2 border-violet-700 rounded-xl mr-1"></div>
        <h1 className={` font-bold text-2xl text-violet-700 ${isFold && "hidden"}`}>Logo</h1>
      </div>
      <div>
        <IsFoldContext.Provider value={isFold}>
          <NavList/>
        </IsFoldContext.Provider>
      </div>

    </div>
  );
}

export default SideBar;
