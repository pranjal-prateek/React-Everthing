import { useEffect, useState } from "react";




const Pagination=({data=[],dataPerPage=10})=>{

  const [totalPages,setTotalPages] =useState(0)
  const [currentPage,setCurrentPages] =useState(1)

  useEffect(()=>{
    setTotalPages(data.length/dataPerPage);
  },[data,dataPerPage])

 const selectPageHandler =()=>{
  if (
    selectedPage >= 1 &&
    selectedPage <= products.length / 10 &&
    selectedPage != page
  )
    setPage(selectedPage);
 }
  return (
    <div></div>
  )
}