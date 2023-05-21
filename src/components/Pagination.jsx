/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const Pagination = ({ setPageItems, membersData, startCount, endCount, setStartCount, setEndCount, itemsPerPage, pageItems, currentPage, setCurrentPage, numOfPages }) => {
	const handleJump = (page) => {
		setStartCount((prevStartCount) => page * itemsPerPage - itemsPerPage);
		setEndCount((prevEndCount) => page * itemsPerPage);
		setPageItems((prevMembersData) => membersData.slice(startCount, endCount));
		setCurrentPage(page);
	};

	return (
		<div className='bg-[#F1F3F5] flex justify-center'>
			<section className='flex'>
				<span className='flex items-center'>
					<MdKeyboardDoubleArrowLeft className='text-xl text-[#9599A1]  cursor-pointer' />
					<MdKeyboardArrowLeft className='text-xl text-[#9599A1]  cursor-pointer' />
				</span>
				<div className='flex items-center mx-4 gap-1 p-[12px]'>
					{
						//convert the number of pages to an array
						[...Array(numOfPages)].map((item, ind) => (
							<button onClick={() => handleJump(ind + 1)} key={ind} className={`font-bold transition-all ease-linear duration-300 text-[16px] cursor-pointer h-8 w-8 flex items-center text-base gap-4 justify-center ${currentPage === ind + 1 ? 'rounded-[4px] bg-[#2A3958] text-white' : 'text-[#A1A1A1]'}`}>
								{ind + 1}
							</button>
						))
					}
				</div>
				<span className='flex items-center'>
					<MdKeyboardArrowRight className='text-xl text-[#9599A1]  cursor-pointer' />
					<MdKeyboardDoubleArrowRight className='text-xl text-[#9599A1] cursor-pointer ' />
				</span>
			</section>
		</div>
	);
};

export default Pagination;
