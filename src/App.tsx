import { Flex } from "@tremor/react"
import Content from "./layout/Content"
import SideBar from "./layout/SideBar"
import { createContext, useState } from "react"

type TContext = {
  openNav: boolean
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const OpenNavContext = createContext({} as TContext) 

function App() {

  const [ openNav, setOpenNav ] = useState(false)

  return (
    <Flex alignItems="stretch" justifyContent="center" className="h-screen overscroll-contain overflow-hidden md:p-2 font-primary bg-tremor-background-subtle">
      <SideBar openNav={openNav}/>
      <OpenNavContext.Provider value={{openNav, setOpenNav}}>
        <Content/>
      </OpenNavContext.Provider>
    </Flex>
  )
}

export default App