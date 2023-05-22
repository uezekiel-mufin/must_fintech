/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const TableBody = ({ pageItems, setPageItems, setSelectedMembers, membersData }) => {
	const [checked, setChecked] = useState(false);

	const handleSelect = (id) => {
		const newData = pageItems.map((item) => {
			if (item.id === id) {
				return {
					...item,
					selected: !item.selected,
				};
			}
			return item;
		});
		setPageItems(newData);
		setSelectedMembers(newData.filter((item) => item.selected === true));
	};

	const handleSelectAll = (checked) => {
		setChecked(!checked);
		const newData = membersData.map((item) => {
			return {
				...item,
				selected: checked ? false : true,
			};
		});
		setPageItems(newData);
		setSelectedMembers(newData.filter((item) => item.selected === true));
	};

	return (
		<div className='border-t mt-2'>
			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y font-pretendard divide-gray-200'>
					<thead>
						<tr className='bg-[#EEF0F4] divide-x-2 divide-gray-50'>
							<th className='px-6 py-3 text-left text-base text-[#222222] font-semibold uppercase tracking-[0.04em]'>
								<input type='checkbox' checked={checked} onChange={() => handleSelectAll(checked)} className='focus:ring-[#dde0e5] checked:bg-[#dde0e5] focus:ring-4' />
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
					<tbody className='bg-white divide-y relative divide-gray-200'>
						{pageItems.length < 1 ? (
							<tr className='flex justify-center items-center'>
								<td className='text-center ' colSpan={9}>
									<div className='flex justify-center font-pretendard items-center w-full h-[300px]'>No search results found</div>
								</td>
							</tr>
						) : (
							pageItems.map((member) => (
								<tr key={member.id} className={`${member.selected === true ? 'bg-[#F9F9FB]' : ''}`}>
									<td className='px-6 py-1  whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox checked:bg-[#dde0e5]' checked={member.selected} onChange={() => handleSelect(member.id)} />
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
