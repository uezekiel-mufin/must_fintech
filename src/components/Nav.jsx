import { useState } from 'react';
import { navData } from '../Library/navData';

const Nav = () => {
	const [selected, setSelected] = useState(navData[0].title);
	return (
		<div className='space-y-[12px]'>
			<div>
				<input type='text' placeholder='Member details' required className='border-b w-full border-[#D7D8DA] focus:outline-none py-[17px] placeholder:text-[#0B101A] font-bold text-[24px] leading-[29px]' />
			</div>
			<ul className='flex bg-[#EBEEF3] order-6 flex-grow-0 flex-none gap-[10px] items-center '>
				{navData.map((item) => {
					return (
						<li key={item.id} className={`text-[15px] text-center  px-[12px] capitalize py-[10px] text-[#B1B4BB] leading-[19px] ${selected === item.title ? 'bg-[#2A3958] text-white' : ''}`} onClick={() => setSelected(item.title)}>
							{item.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Nav;
