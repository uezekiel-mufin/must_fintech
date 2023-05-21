import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { membersData } from '../Library/membersData';
import { useState } from 'react';

const Table = () => {
	const [pending, setPending] = useState(1);
	const [selectedMembers, setSelectedMembers] = useState(membersData.filter((item) => item.selected === true));
	return (
		<>
			<TableHeader membersData={membersData} pending={pending} selectedMembers={selectedMembers} />
			<TableBody membersData={membersData} />
		</>
	);
};

export default Table;
