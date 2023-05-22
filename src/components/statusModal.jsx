/* eslint-disable react/prop-types */

const StatusMoal = ({ selectedMembers }) => {
	return (
		<main className=' items-start h-screen flex justify-center  fixed top-6 left-0 right-0 bg-[rgba(0,0,0,0.2)]'>
			<section className=' p-6 w-[350px] bg-white flex flex-col gap-8'>
				<span>X</span>
				<h3>Would you like to change the approval status of the selected {selectedMembers.length} items?</h3>
				<div className='flex justify-between items-center gap-6'>
					<button className='flex items-center justify-center py-2 px-4 text-white bg-[#2a3958] rounded-[10px] w-full border-solid border'>Confirm</button>
					<button className='flex items-center justify-center py-2 px-4 bg-white rounded-[10px] w-full border-solid border'>Cancel</button>
				</div>
			</section>
		</main>
	);
};

export default StatusMoal;
