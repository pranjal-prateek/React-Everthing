import { useEffect, useState } from "react";

const Pagination = ()=>{

  const [data,setData] =useState([]);
  const [totalPages,setTotalPages] = useState(0);
  const [currentPage,setCurrentPage] =useState(1);
  useEffect(()=>{
    async function fetchData(){
      const result =await fetch('https://dummyjson.com/products')
      const resData =await result.json()
      setData(resData.products)
    }
    fetchData()
  },[])
  
  useEffect(()=>{
    setTotalPages(data.length/10);
  },[data])

  console.log(data,totalPages);
  return (
    <div>
      {data.slice(currentPage*10-10,currentPage*10)?.map((item)=>{
        return(
        <div key={item.id}>
          {item.title}
        </div>
        )
      })}
       {data?.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => setCurrentPage(currentPage - 1)}
            className={currentPage > 1 ? "" : "page-disable"}
          >
            ⬅️
          </span>
          {[...Array(data.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "page-active" : ""}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => setCurrentPage(currentPage + 1)}
            className={currentPage < data.length / 10 ? "" : "page-disable"}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  )
}

export default Pagination;