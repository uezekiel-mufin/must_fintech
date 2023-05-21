/* eslint-disable no-unused-vars */
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { membersData } from '../Library/membersData';
import { useState } from 'react';
import Pagination from './Pagination';

const Table = () => {
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [startCount, setStartCount]=useState(0);
	const [endCount, setEndCount] = useState(itemsPerPage-1)
	const [pageItems,setPageItems]= useState(membersData.slice(startCount,endCount))
	const numOfPages = Math.ceil(membersData/itemsPerPage)

	const [pending, setPending] = useState(1);
	const [selectedMembers, setSelectedMembers] = useState(membersData.filter((item) => item.selected === true));
	return (
		<>
			<TableHeader membersData={membersData} pending={pending} selectedMembers={selectedMembers} />
			<TableBody membersData={membersData} setSelectedMembers={setSelectedMembers} />
			<Pagination 	setPageItems={setPageItems}
				startCount={startCount}
				endCount={endCount}
				setStartCount={setStartCount}
				setEndCount={setEndCount}
				itemsPerPage={itemsPerPage}
				pageItems={pageItems}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				numOfPages={numOfPages}/>
		</>
	);
};

export default Table;
