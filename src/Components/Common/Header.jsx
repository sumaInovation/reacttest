import { Menu } from "lucide-react";
import { useState } from "react";

const Header = ({ sendDataToParent }) => {
	const [inputValue, setInputValue] = useState(false);
	return (
		<header className='relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl font-semibold text-gray-100 '>PPT Inovation</h1>
				<Menu 
				onClick={()=>{ 
					setInputValue(!inputValue)
					sendDataToParent(inputValue)}}
				className="  absolute top-5 right-5 lg:hidden"/>
			</div>
		</header>
	);
};
export default Header;