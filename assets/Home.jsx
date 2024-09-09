import { useState } from "react";
import Countries from "./Countries";
import Search from "./Search";



export const Home = () => {
    const[query, setQuery] = useState('')
  return (
    <>
    
    <Search setQuery={setQuery}/>
    <Countries query={query} />
    </>
  )
}
