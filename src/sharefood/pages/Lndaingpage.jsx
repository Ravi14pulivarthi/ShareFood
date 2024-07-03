import React from 'react'
import TopBar from '../components/TopBar'
import Itemsdisplay from '../components/Itemsdisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import Productdisplay from '../components/Productdisplay'

function Lndaingpage() {
  return (
    <div>
        <TopBar/>
        <div className="landingsection">
        <Itemsdisplay/>
       <Chains/>
       <FirmCollections/>
 
        </div>
        
    </div>
  )
}

export default Lndaingpage