import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const Pagination = () => {
	return (
		<div className='bg-[#F1F3F5]'>
			<section className='flex'>
				<span className='flex items-center'>
					<MdKeyboardDoubleArrowLeft />
					<MdKeyboardArrowLeft />
				</span>
				<span className='flex items-center'>
					<MdKeyboardArrowRight />
					<MdKeyboardDoubleArrowRight />
				</span>
			</section>
		</div>
	);
};

export default Pagination;
