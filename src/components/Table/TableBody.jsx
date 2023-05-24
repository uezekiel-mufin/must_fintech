/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
// eslint-disable-next-line react/prop-types
const TableBody = ({ setIsChecked, isChecked, data, setData, pageItems, setPageItems, setSelectedMembers, membersData, startCount, endCount }) => {
	const handleSelect = (id) => {
		const newData = data.map((item) => {
			if (item.id === id) {
				return {
					...item,
					selected: !item.selected ? true : false,
				};
			}
			return item;
		});
		setData(newData);
		setSelectedMembers(newData.filter((item) => item.selected === true));
	};

	const handleSelectAll = (isChecked) => {
		const newData = membersData.map((item) => {
			return {
				...item,
				selected: !isChecked ? true : false,
			};
		});

		if (!isChecked) {
			setSelectedMembers(newData);
		} else {
			setSelectedMembers([]);
		}
		setData(newData);
		setIsChecked(!isChecked);
		setPageItems(newData.slice(startCount, endCount));
	};

	return (
		<div className='border-t mt-2'>
			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y font-pretendard divide-gray-200'>
					<thead>
						<tr className='bg-[#EEF0F4] divide-x-2 divide-gray-50'>
							<th className='px-6 py-3 text-left text-base text-[#222222] font-semibold uppercase tracking-[0.04em]'>
								<label className='flex items-center space-x-2 cursor-pointer'>
									<input type='checkbox' checked={isChecked} onChange={() => handleSelectAll(isChecked)} className='appearance-none h-4 w-4 rounded-[4px] border bg-white border-[#D7D8DA] checked:bg-[#DDE0E6] checked:border-[#D7D8DA] focus:outline-none shadow-sm hover:shadow-none' />
								</label>
							</th>
							<th className='px-6 py-3 text-left text-base text-[#222222] font-semibold uppercase tracking-[0.04em]'>No </th>
							<th className='px-6 py-3 text-left text-base font-semibold text-[#222222] uppercase tracking-[0.04em] font-pretendard'>Existing Type</th>
							<th className='px-6 py-3 text-left text-base text-[#222222] font-semibold uppercase tracking-[0.04em] font-pretendard'>Application Type</th>
							<th className='px-6 py-3 text-left text-base text-[#222222] font-semibold uppercase tracking-[0.04em] font-pretendard'>Submitted Document</th>
							<th className='px-6 py-3 text-left text-base text-[#222222] font-semibold uppercase tracking-[0.04em] font-pretendard'>Application Date</th>
							<th className='px-6 py-3 text-left text-base text-[#222222] font-semibold uppercase tracking-[0.04em] font-pretendard'>Application Status</th>
							<th className='px-6 py-3 text-center text-base text-[#222222] font-semibold uppercase tracking-[0.04em] font-pretendard'>Reasons for rejection</th>
							<th className='px-6 py-3 text-left text-base text-[#222222] font-semibold uppercase tracking-[0.04em] font-pretendard'>Approval Date</th>
						</tr>
					</thead>
					<tbody className='bg-white divide-y relative divide-gray-200 transition-all ease-linear duration-300'>
						{pageItems.length < 1 ? (
							<tr className='flex mb-80 justify-center items-center'>
								<td className='text-center ' colSpan={9}>
									<div className='flex justify-center absolute w-full h-[300px] top-0 left-0  font-pretendard items-center '>No search results found</div>
								</td>
							</tr>
						) : (
							pageItems.map((member) => (
								<tr key={member.id} className={`${member.selected === true ? 'bg-[#F9F9FB]' : ''}`}>
									<td className='px-6 py-1  whitespace-nowrap'>
										<label className='flex items-center space-x-2 cursor-pointer'>
											<input type='checkbox' checked={member.selected} onChange={() => handleSelect(member.id)} className='appearance-none bg-white h-4 w-4 rounded-[4px] border border-[#D7D8DA] checked:bg-[#DDE0E6] checked:border-[#D7D8DA] focus:outline-none shadow-sm hover:shadow-none' />
										</label>
									</td>

									<td className='px-6 font-pretendard py-4 align-middle whitespace-nowrap'>
										<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.id}</div>
									</td>
									<td className='px-6 font-pretendard py-4 align-middle whitespace-nowrap'>
										<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.existingType}</div>
									</td>
									<td className='px-6 font-pretendard py-4 align-middle capitalize whitespace-nowrap'>
										<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.applicationType}</div>
									</td>
									<td className='px-6 font-pretendard py-4 align-middle whitespace-nowrap'>
										<div className='text-sm text-[#222222] font-medium leading-[18px] border bg-[#EBEEF3] rounded-lg justify-center px-[17px] flex items-center py-[6px]'>{member.submittedDoc}</div>
									</td>
									<td className='px-6 font-pretendard py-4 align-middle whitespace-nowrap'>
										<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.applicationDate}</div>
									</td>
									<td className='px-6 font-pretendard py-4 align-middle whitespace-nowrap'>
										<div className={`text-sm rounded-[10px] flex justify-center items-center py-[2px] px-[10px] gap-[6px] leading-4 capitalize font-medium ${member.approvalStatus === 'approved' && 'text-[#166534] bg-[#DCFCE7]'} ${member.approvalStatus === 'rejected' && 'text-[#991B1B] bg-[#FEE2E2]'} ${member.approvalStatus === 'pending' && 'text-[#9A3412] bg-[#FFEDD5]'}`}>{member.approvalStatus}</div>
									</td>
									<td className='px-6 font-pretendard py-4 align-middle whitespace-nowrap'>
										<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.reasons}</div>
									</td>
									<td className='px-6 font-pretendard py-4 align-middle whitespace-nowrap'>
										<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.approvalDate}</div>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableBody;
