import { Flex, Icon, Text } from "@tremor/react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"
import {
  BellIcon,
  ChartPieIcon,
  PresentationChartBarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { IsFoldContext } from "../layout/SideBar";

function NavList() {

  const navigations = [
    { label: "Dashboard", icon: PresentationChartBarIcon, href: "/" },
    { label: "Shop", icon: ShoppingCartIcon, href: "/Shop" },
    { label: "Notifications", icon: BellIcon, href: "/Notifications" },
    { label: "Analytics", icon: ChartPieIcon, href: "/Analytics" },
  ];

  const [active, setActive] = useState("Dashboard");

  return (
    <div>
      {navigations.map((nav) => {
        return (
          <Nav
            key={nav.label}
            label={nav.label}
            icon={nav.icon}
            href={nav.href}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
}

interface TNavProps {
  icon: React.ElementType;
  label: string;
  href: string
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

function Nav({ icon, label, href, active, setActive }: TNavProps) {
  const isFold = useContext(IsFoldContext);
  
  return (
    <NavLink to={href}>
      <Flex
        alignItems="center"
        justifyContent="start"
        onClick={() => setActive(label)}
        className={` group/${label} relative border border-transparent rounded-lg px-1.5 py-1 cursor-pointer mb-1.5 active:scale-95 transition-all ease-out duration-150 ${
          active === label && "bg-violet-50 border border-violet-300"
        } hover:bg-violet-50`}
      >
        <Icon
          icon={icon}
          size="md"
          className={` text-gray-400 ${active === label && "text-violet-700"}`}
        />
        <Text className={` invisible absolute left-16 px-2 rounded z-10 bg-white ${isFold && `group-hover/${label}:visible`}`}>{label}</Text>
        <span
          className={` ml-1 text-gray-400 ${
            active === label && "text-violet-700 font-medium"
          } ${isFold && "opacity-0"} transition-opacity duration-300`}
        >
          {label}
        </span>
      </Flex>
    </NavLink>
  );
}

export default NavList;
