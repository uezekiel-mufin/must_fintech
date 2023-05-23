/* eslint-disable react/prop-types */
import { MdClose, MdOutlineCheckCircle } from 'react-icons/md';

const AlertModal = ({ setSuccessModal }) => {
	return (
		<main className='items-start h-screen flex justify-center  fixed top-0 p-8 backdrop-blur-sm z-10  left-0 right-0 bg-[rgba(0,0,0,0.2)]'>
			<section className=' p-6 w-[350px] bg-white flex flex-col gap-8 rounded-[12px]'>
				<span className='flex justify-between items-center'>
					<span className={`bg-[#ECFDF3] border-[#D1FADF] border-1 p-1 rounded-full`}>
						<MdOutlineCheckCircle className='text-[#039855] border-none' />
					</span>
					<span>
						<MdClose className='text-[#667085] text-xl cursor-pointer' onClick={() => setSuccessModal(false)} />
					</span>
				</span>
				<h3 className='font-semibold text-lg text-[#0B101A] font-pretendard leading-[28px]'>Success</h3>
				<div className='flex justify-center items-center gap-4'>
					<button onClick={() => setSuccessModal(false)} className='flex items-center justify-center py-2 px-4 text-white bg-[#2a3958] rounded-[10px] w-[170px] border-solid border'>
						Ok
					</button>
				</div>
			</section>
		</main>
	);
};

export default AlertModal;
