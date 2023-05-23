/* eslint-disable react/prop-types */
import { MdErrorOutline, MdClose } from 'react-icons/md';

const StatusMoal = ({ selectedMembers, handleModalResponse }) => {
	return (
		<main className='items-start h-screen flex justify-center  fixed top-0 p-8 backdrop-blur-sm z-10  left-0 right-0 bg-[rgba(0,0,0,0.2)]'>
			<section className=' p-6 w-[350px] bg-white flex flex-col gap-8 rounded-[12px]'>
				<span className='flex justify-between items-center'>
					<span className='bg-[#FEF0C7] border-[#FFFAEB] border-4 p-2 rounded-full'>
						<MdErrorOutline className='text-[#D46B08] border-none' />
					</span>
					<span>
						<MdClose className='text-[#667085] text-xl cursor-pointer' onClick={() => handleModalResponse('close')} />
					</span>
				</span>
				<h3>Would you like to change the approval status of the selected {selectedMembers.length} items?</h3>
				<div className='flex justify-between items-center gap-4'>
					<button onClick={(e) => handleModalResponse(e.target.textContent)} className='flex items-center justify-center py-2 px-4 text-white bg-[#2a3958] rounded-[10px] w-full border-solid border'>
						Confirm
					</button>
					<button onClick={(e) => handleModalResponse(e.target.textContent)} className='flex items-center justify-center py-2 px-4 bg-white rounded-[10px] w-full border-solid border'>
						Cancel
					</button>
				</div>
			</section>
		</main>
	);
};

export default StatusMoal;