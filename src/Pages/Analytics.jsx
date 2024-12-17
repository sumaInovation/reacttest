import React from 'react'
import Header from '../Components/Common/Header'
import Targetproduction from '../Components/Analytics/Targetproduction'
import Barchart from '../Components/Analytics/Barchart'

const Analytics = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <Targetproduction/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <Barchart/>
        </div>
      </main>
      </div>
  )
}

export default Analytics
