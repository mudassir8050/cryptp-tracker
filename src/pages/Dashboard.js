import React, {useState, useEffect } from 'react'
import TabsComponent from '../Components/Dashboard/Tabs'
import Search from '../Components/Dashboard/Search'
import PaginationComponent from '../Components/Dashboard/Pagination'
import Loader from '../Components/Common/Loader'
import Header from '../Components//Common//Header'
import BackToTop from '../Components/Common/BackToTop'
import { get100Coins } from '../functions/get100Coins'

const DashboardPage = () => {
    const [coins,setCoins]=useState([])
    const [paginatedCoins,setPaginatedCoins]=useState([])
    const [search,setSearch]=useState('')
    const [page,setPage]=useState(1)
    const [isLoading,setIsLoading]=useState(true)

    const handlePageChange = (event, value) => {
      setPage(value);
      let prevInd=(value-1)*10;
      console.log(prevInd)
      setPaginatedCoins(coins.slice(prevInd,prevInd+10))
    };
    const onSearchChange=(e)=>{
      setSearch(e.target.value)
    }
    let filteredCoins=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) ||item.symbol.toLowerCase().includes(search.toLowerCase() ))

    useEffect(()=>{
      getData()
    
  },[])
  const getData=async()=>{
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins)
      setPaginatedCoins(myCoins.slice(0,10));
      setIsLoading(false)
    }
  }
  return (
    <><Header/>
    <BackToTop/>{isLoading?<Loader/>:
    <div>
      <Search search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={search?filteredCoins:paginatedCoins}/>
      {
        !search && <PaginationComponent page={page} handlePageChange={handlePageChange}/>
      }
      
    </div>}
    </>
  )
}

export default DashboardPage