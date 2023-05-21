/* eslint-disable react/prop-types */
const TableHeader = ({ membersData, pending, selectedMembers }) => {
	const approvalStatus = [
		{
			id: 1,
			title: 'approved',
		},
		{
			id: 2,
			title: 'rejected',
		},
	];
	return (
		<>
			<section>
				<form className='flex justify-between pt-[45px] pb-[12px] items-center box-border border-b border-[#D7D8DA] border-solid'>
					<p className='text-[#0B101A] text-[20px] leading-[24px] font-semibold'>
						Application List <span className='text-[#5A616A]'> ({`${membersData.length} Members | ${pending} pending approval`})</span>
					</p>
					<div className=' flex items-center gap-1 '>
						<select name='Approval Status' id='apprval_status'>
							{approvalStatus.map((item) => {
								return (
									<option key={item.id} value={item.title}>
										{item.title}
									</option>
								);
							})}
						</select>
						<select name='Approval Status' id='apprval_status'>
							{approvalStatus.map((item) => {
								return (
									<option key={item.id} value={item.title}>
										{item.title}
									</option>
								);
							})}
						</select>
						<select name='Approval Status' id='apprval_status'>
							{approvalStatus.map((item) => {
								return (
									<option key={item.id} value={item.title}>
										{item.title}
									</option>
								);
							})}
						</select>
					</div>
				</form>
			</section>
			<section className='flex justify-between items-center mt-[12.37px]'>
				<h3 className='border py-1 text-white px-[16px] bg-[#2A3958] rounded-[10px]'>Registration</h3>
				<div className='flex justify-between items-center gap-1'>
					<p className='mr-3 text-[14px]'>{selectedMembers.length} Selected Member</p>
					<select name='Approval Status' id='apprval_status' className='focus:outline-none'>
						{approvalStatus.map((item) => {
							return (
								<option key={item.id} value={item.title}>
									{item.title}
								</option>
							);
						})}
					</select>
					<button className='border py-1 text-white px-[16px] bg-[#2A3958] rounded-[10px]'>Save</button>
				</div>
			</section>
		</>
	);
};

export default TableHeader;
