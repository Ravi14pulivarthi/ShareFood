import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import { FaArrowCircleRight } from "react-icons/fa";

import { FaArrowCircleLeft } from "react-icons/fa";

import { MagnifyingGlass } from 'react-loader-spinner'




function Chains() {
  const [vendordata, setvendordata] = useState([]);
  const[scrollPosition,setscrollPosition]=useState(0)
  const[loding,setloding]=useState(true)


  const vendorfirmhidler = async () => {

    try {
      const responce = await fetch(`${API_URL}/vendor/all-vendors`);
      const newdata = await responce.json();
      setvendordata(newdata);
      console.log("this api data", newdata);
      setloding(false)
    } catch (error) {
      alert("falid to fetch")
       console.error("faild to fetch")
       setloding(true)
     
    }
  };
  useEffect(() => {
    vendorfirmhidler();
  }, []);
  


   const hendelscroll=(direction)=>{
  const  gallery=document.getElementById("chaingallery")
 const  scrollamount= 500;
  if( direction=== "left"){
    gallery.scrollTo({
      left:gallery.scrollLeft-scrollamount,
      behavior:"smooth"
    })
    }
     else if( direction === "right"){
      gallery.scrollTo({
        left:gallery.scrollLeft+scrollamount,
        behavior:"smooth"
      })
     }

   }
  return( 
  <div className="mediachainsection">
  {/* lodersection */}
  <div className="lodersection">
  {loding && <><div className="loader">
     Your  🍝  is Loding...
  </div>
  <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"/>
  </> }
  </div>

  <div className="buttonsection">
  <button onClick={()=>hendelscroll("left")}><FaArrowCircleLeft className="btnicons"/></button>
  <button  onClick={()=>hendelscroll("right")}><FaArrowCircleRight className="btnicons"/></button>
  </div>
   
<h3>Top restaurant chains in  Gudivada</h3>
<section className="chainsection" id="chaingallery" onScroll={(e)=>setscrollPosition(e.target.scrollLeft)}>
  
  {vendordata.vendors && vendordata.vendors.map((vendor)=>{
      return(
        <>{ 
        <div className="vendorbox">
          {vendor.firm.map((item)=>{
             return(
             <> 
             {/* { <div> {item.firmName}</div> } */}
       
             <div className="firmImage"> 
              {/* <h1>{item.image}</h1> */}
            <img  src={item.image} />
             </div>
             
             </>
             )
          })}
      </div>}</>
      )

})}
</section>
  </div>
    )
}

export default Chains;
