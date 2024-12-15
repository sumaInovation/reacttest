import React from 'react'
import { BarChart2, ShoppingBag,Fuel, Target } from "lucide-react";
import { motion } from "framer-motion";
import Header from '../Components/Common/Header'
import StatCard from '../Components/Common/StatCard'

const Overviwepage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='PPT Cable Production' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
           {/* STATS */}
           <motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Machine State' icon={Fuel} value='Stop' color='#6366F1' />
					<StatCard name='Today Production' icon={Target} value='1,234M' color='#8B5CF6' />
					<StatCard name='This Month Production' icon={ShoppingBag} value='5672M' color='#EC4899' />
					<StatCard name='Efficency of Machine' icon={BarChart2} value='62.2%' color='#10B981' />
				</motion.div>

      </main>
      </div>
  )
}

export default Overviwepage
