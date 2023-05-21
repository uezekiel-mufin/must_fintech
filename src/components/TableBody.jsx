/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const TableBody = ({ membersData, setSelectedMembers }) => {
	const [members, setMembers] = useState(membersData);
	const [checked, setChecked] = useState(false);

	const handleSelect = (id) => {
		const newData = members.map((item) => {
			if (item.id === id) {
				return {
					...item,
					selected: !item.selected,
				};
			}
			return item;
		});
		setMembers(newData);
		setSelectedMembers(newData.filter((item) => item.selected === true));
	};

	const handleSelectAll = (checked) => {
		setChecked(!checked);
		const newData = members.map((item) => {
			return {
				...item,
				selected: checked ? false : true,
			};
		});
		setMembers(newData);
		setSelectedMembers(newData.filter((item) => item.selected === true));
	};

	return (
		<div className='border-t mt-2'>
			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-200'>
					<thead>
						<tr className='bg-[#EEF0F4] divide-x-2 divide-gray-50'>
							<th className='px-6 py-3 text-left text-xs text-[#222222] font-semibold uppercase tracking-wider'>
								<input type='checkbox' checked={checked} onChange={() => handleSelectAll(checked)} className='focus:ring-[#dde0e5] checked:bg-[#dde0e5] focus:ring-4' />
							</th>
							<th className='px-6 py-3 text-left text-xs text-[#222222] font-semibold uppercase tracking-wider'>No </th>
							<th className='px-6 py-3 text-left text-xs font-medium text-[#222222] uppercase tracking-wider'>Existing Type 3</th>
							<th className='px-6 py-3 text-left text-xs text-[#222222] font-semibold uppercase tracking-wider'>Application Type</th>
							<th className='px-6 py-3 text-left text-xs text-[#222222] font-semibold uppercase tracking-wider'>Submitted Doc</th>
							<th className='px-6 py-3 text-left text-xs text-[#222222] font-semibold uppercase tracking-wider'>Application Date</th>
							<th className='px-6 py-3 text-left text-xs text-[#222222] font-semibold uppercase tracking-wider'>Application Status</th>
							<th className='px-6 py-3 text-center text-xs text-[#222222] font-semibold uppercase tracking-wider'>Reasons for rejection</th>
							<th className='px-6 py-3 text-left text-xs text-[#222222] font-semibold uppercase tracking-wider'>Approval Date</th>
						</tr>
					</thead>
					<tbody className='bg-white divide-y divide-gray-200'>
						{members.map((member, index) => (
							<tr key={member.id} className={`${member.selected === true ? 'bg-[#F9F9FB]' : ''}`}>
								<td className='px-6 py-1  whitespace-nowrap'>
									<input type='checkbox' className='form-checkbox checked:bg-[#dde0e5]' checked={member.selected} onChange={() => handleSelect(member.id)} />
								</td>
								<td className='px-6 py-4 align-middle whitespace-nowrap'>
									<div className='text-sm text-[#222222] font-medium leading-[18px]'>{index + 1}</div>
								</td>
								<td className='px-6 py-4 align-middle whitespace-nowrap'>
									<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.existingType}</div>
								</td>
								<td className='px-6 py-4 align-middle capitalize whitespace-nowrap'>
									<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.applicationType}</div>
								</td>
								<td className='px-6 py-4 align-middle whitespace-nowrap'>
									<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.submittedDoc}</div>
								</td>
								<td className='px-6 py-4 align-middle whitespace-nowrap'>
									<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.applicationDate}</div>
								</td>
								<td className='px-6 py-4 align-middle whitespace-nowrap'>
									<div className={`text-sm leading-4 capitalize font-medium ${member.approvalStatus === 'approved' && 'text-[#166534]'} ${member.approvalStatus === 'rejected' && 'text-[#991B1B]'} ${member.approvalStatus === 'pending' && 'text-[#9A3412]'}`}>{member.approvalStatus}</div>
								</td>
								<td className='px-6 py-4 align-middle whitespace-nowrap'>
									<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.reasons}</div>
								</td>
								<td className='px-6 py-4 align-middle whitespace-nowrap'>
									<div className='text-sm text-[#222222] font-medium leading-[18px]'>{member.approvalDate}</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableBody;
