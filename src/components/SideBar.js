import React from 'react'
import { CheckBox4, CheckBox6, CheckBox8 } from './CheckBox'
import crosscircle from '../Assets/Icons/x-circle.svg'

function SideBar({showSidebar, sideBarToggleCopy}) {
  
  const toggleSidebarCopy = () => {
    sideBarToggleCopy(!showSidebar);
   
  }

  return (
    <aside className={`${showSidebar ? ' sideBar sideBarToggle' : 'sideBar sideBar-active'}`}>
      
      <p className='firstHead'>Clothing / Women’s / Outerwear</p> 
      <div className='filterHead borderBottom'><p className='py sideHeading'>Filters</p><img src={crosscircle} onClick={toggleSidebarCopy} className='crossHide' alt='cross icon'/></div>
      <p className='sideHeading'>Attribute</p>
      <CheckBox4 />
      <p className='py borderBottom sideHeading'>Attribute</p>
      <CheckBox6 />
      
      <p className='py borderBottom sideHeading'>Color</p>
      <div className='colorGroup'>
        <div className='square bg-charcoal'></div>
        <div className='square bg-white border1'></div>
        <div className='square bg-green'></div>
        <div className='square bg-golden'></div>
      </div>
      <div className='colorGroup'>
      <div className='square bg-light-blue'></div>
        <div className='square bg-light-red '></div>
        <div className='square bg-purple'></div>
        <div className='square bg-pink'></div>
        
      </div>
      <div className='colorGroup'>
        <div className='square bg-orange'></div>
        <div className='square otherColorClass'></div>
        
      </div>
      <p className='py borderBottom sideHeading'>Attribute</p>
      <CheckBox8 />
    </aside>
  )
}

export default SideBar