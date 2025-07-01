import React from 'react'

const HomeCard = ({ children, bg = 'bg-cyan-100' }) => {
  return (
    <div className={` ${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>

  //     TODO: Complete creating children cards
  )
}

export default HomeCard