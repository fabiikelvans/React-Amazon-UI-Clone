import { BiotechOutlined, BlenderOutlined, CameraAltOutlined, ChairOutlined, ElectricBikeOutlined, HeadphonesOutlined, LaptopChromebookOutlined, PhoneIphoneOutlined, SportsEsportsOutlined, WatchOutlined } from '@mui/icons-material'
import React from 'react'

function MainCats() {
  return (
    <div className='main__cats'>
        <div className="main__cats-icon">
            <LaptopChromebookOutlined/>
        </div>
        <div className="main__cats-icon">
            <ChairOutlined/>
        </div>
        <div className="main__cats-icon">
            <PhoneIphoneOutlined/>
        </div>
        <div className="main__cats-icon">
            <CameraAltOutlined/>
        </div>
        <div className="main__cats-icon">
            <BlenderOutlined/>
        </div>
        <div className="main__cats-icon">
            <ElectricBikeOutlined/>
        </div>
        <div className="main__cats-icon">
            <HeadphonesOutlined/>
        </div>
        <div className="main__cats-icon">
            <SportsEsportsOutlined/>
        </div>
        <div className="main__cats-icon">
            <WatchOutlined/>
        </div>
        <div className="main__cats-icon">
            <BiotechOutlined/>
        </div>
    </div>
  )
}

export default MainCats