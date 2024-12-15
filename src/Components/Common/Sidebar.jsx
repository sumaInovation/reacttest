import { Home, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, UserPlus,Search } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
const SIDEBAR_ITEMS = [
    {
        name: "Overview",
        icon: Home,
        color: "#6366f1",
        href: "/",
    },
    { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
    { name: "Sing In", icon: UserPlus, color: "#EC4899", href: "/users" },
    { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
    { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
    { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
    { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];
const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"
                }`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
                >
                    <Menu size={24} />
                </motion.button>

                <nav className='mt-8 flex-grow'>
                    <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>

                        <AnimatePresence>
                        <Search  size={20} style={{ color:'blueviolet', minWidth: "20px" }}/>
                           {isSidebarOpen && ( <motion.span
                                className='ml-4 whitespace-nowrap'
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.1, delay: 0.2 }}
                            >
                                <input type="text" className="w-full px-4 py-2 pl-10  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                 placeholder="Search..."
                                />

    
                                
                               
                            </motion.span>
                           )
                            }
                        </AnimatePresence>
                    </motion.div>

                    {SIDEBAR_ITEMS.map((item) => (
                        <Link key={item.href} to={item.href}>
                            <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className='ml-4 whitespace-nowrap'
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.1, delay: 0.2 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div>
    );
};
export default Sidebar;


