import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";

function FirmCollections() {
  const [firmdata, setfrimdata] = useState([]);
  const [selectregion, setselectregion] = useState("All");
   const[activeCategory,setactiveCategory]=useState('all')
  
  
  
   const firmdatahandler = async () => {
    try {
      const responce = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmdata = await responce.json();
      setfrimdata(newFirmdata.vendors);
    } catch (error) {
      alert("falid to fetch");
      console.error("faild to fetch", error);
    }
  };

  useEffect(() => {
    firmdatahandler();
  }, []);

  const filterhandler = (region,category) => {
    setselectregion(region);
    setactiveCategory(category)
  };

  return (
    <>
      <h3>Restaurants with online food delivery in Gudivada</h3>
      <div className="filterbutton">
        <button onClick={() => filterhandler("All",'all')} className={activeCategory ==='all' ? 'actvivebutton':" "}>All</button>
        <button onClick={() => filterhandler("South-Indian",'south-indian')}className={activeCategory ==='south-indian' ? 'actvivebutton':" "} >South-Indian</button>
        <button onClick={() => filterhandler("North-Indian",'north-indian')}className={activeCategory ==='north-indian' ? 'actvivebutton':" "}>
          North-Indian
        </button>
        <button onClick={() => filterhandler("Chinese",'chinese')} className={activeCategory ==='chinese' ? 'actvivebutton':" "}>Chinese</button>
        <button onClick={() => filterhandler("Bakery",'bakery')} className={activeCategory === 'bakery' ? 'actvivebutton':" "}>Bakery</button>
      </div>

      <section className="firmsection">
        {firmdata.map((apple) => {
          return apple.firm.map((item) => {
            if (
              selectregion === "All" ||
              item.region.includes(selectregion.toLocaleLowerCase())
            ) {

                  return (
                    <Link
                      to={`/products/${item._id}/${item.firmName}`}
                      className="link"
                    >
                      <div className="firmGroupbox">
                        <div className="firmgroup">
                          <img src={item.image} />
                          <div className="firmoffer"> {item.offer}</div>
                        </div>

                        <div className="firmdetails">
                          <strong>{item.firmName}</strong>
                          <div className="firmarea">
                            {item.region.join(",")}
                          </div>
                          <div className="firmarea"> {item.area}</div>
                        </div>
                      </div>
                    </Link>
                  );
              
            }
          });
          return null;
        })}
      </section>
    </>
  );
}

export default FirmCollections;
