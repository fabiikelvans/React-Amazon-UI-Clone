import React from 'react'

function SidebarLinks({Icon, title, active}) {
  return (
    <div className={`sidebar__link ${active && 'active'}`}>
           {Icon && <Icon className='sidebar__link-icon' />}
        {/* If am passing an Icon only then should I render the <Icon/> component */}
        <h3 className='sidebar__link-title'>{title}</h3>
    </div>
  )
}

export default SidebarLinks