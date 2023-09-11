import { useContext } from "react"
import { MenuIcon, SearchIcon, UserIcon, XIcon } from "@heroicons/react/outline";
import { Flex, Icon, Metric, Subtitle, TextInput } from "@tremor/react";
import { OpenNavContext } from "../App";

function Header() {

  const {openNav, setOpenNav} = useContext(OpenNavContext)

  return (
    <Flex justifyContent="between" alignItems="start" className=" mb-5">
      <div>
        <Subtitle>DashBoard</Subtitle>
        <Metric>Overview</Metric>
      </div>
      <Flex justifyContent="end">
        <TextInput
          icon={SearchIcon}
          placeholder="Search..."
          className="hidden w-60 h-10 mr-5 md:flex"
        />
        <Icon icon={SearchIcon} className=" cursor-pointer md:hidden" color="gray" />
        <Icon icon={openNav ? XIcon : MenuIcon} onClick={() => setOpenNav(!openNav)} color="gray" className=" md:hidden cursor-pointer" />
        <Icon
          icon={UserIcon}
          className=" p-3 rounded-full bg-white border border-gray-300"
        />
      </Flex>
    </Flex>
  );
}

export default Header;
