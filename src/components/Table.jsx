/* eslint-disable no-unused-vars */
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { membersData } from '../Library/membersData';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Table = () => {
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [startCount, setStartCount] = useState(0);
	const [endCount, setEndCount] = useState(itemsPerPage);
	const [pageItems, setPageItems] = useState([]);
	const numOfPages = Math.ceil(membersData.length / itemsPerPage);
	const [pending, setPending] = useState(membersData.filter((item) => item.approvalStatus === 'pending').length);
	const [selectedMembers, setSelectedMembers] = useState(membersData.filter((item) => item.selected === true));

	useEffect(() => {
		setEndCount(itemsPerPage);
	}, [itemsPerPage]);

	useEffect(() => {
		setPageItems(membersData.slice(startCount, endCount));
	}, [startCount, endCount]);

	return (
		<main className='mb-8'>
			<TableHeader setItemsPerPage={setItemsPerPage} setPageItems={setPageItems} membersData={membersData} pending={pending} selectedMembers={selectedMembers} />
			<TableBody pageItems={pageItems} setPageItems={setPageItems} setSelectedMembers={setSelectedMembers} />
			<Pagination membersData={membersData} setPageItems={setPageItems} startCount={startCount} endCount={endCount} setStartCount={setStartCount} setEndCount={setEndCount} itemsPerPage={itemsPerPage} pageItems={pageItems} currentPage={currentPage} setCurrentPage={setCurrentPage} numOfPages={numOfPages} />
		</main>
	);
};

export default Table;
