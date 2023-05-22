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
	const [data, setData] = useState([]);
	const numOfPages = Math.ceil(membersData.length / itemsPerPage);
	const [pending, setPending] = useState(membersData.filter((item) => item.approvalStatus === 'pending').length);
	const [selectedMembers, setSelectedMembers] = useState(membersData.filter((item) => item.selected === true));

	useEffect(() => {
		setEndCount(itemsPerPage);
	}, [itemsPerPage]);

	useEffect(() => {
		setPageItems(membersData.slice(startCount, endCount));
	}, [startCount, endCount]);

	useEffect(() => {
		setData(membersData);
	}, []);

	useEffect(() => {
		setPageItems(data.slice(startCount, endCount));
	}, [data, startCount, endCount, itemsPerPage]);

	return (
		<main className='mb-8'>
			<TableHeader setEndCount={setEndCount} startCount={startCount} pageItems={pageItems} data={data} setData={setData} setPending={setPending} setSelectedMembers={setSelectedMembers} setItemsPerPage={setItemsPerPage} itemsPerPage={itemsPerPage} setPageItems={setPageItems} membersData={membersData} pending={pending} selectedMembers={selectedMembers} />
			<TableBody setData={setData} startCount={startCount} endCount={endCount} pageItems={pageItems} membersData={membersData} setPageItems={setPageItems} setSelectedMembers={setSelectedMembers} />
			{numOfPages > 1 && <Pagination data={data} membersData={membersData} setPageItems={setPageItems} startCount={startCount} endCount={endCount} setStartCount={setStartCount} setEndCount={setEndCount} itemsPerPage={itemsPerPage} pageItems={pageItems} currentPage={currentPage} setCurrentPage={setCurrentPage} numOfPages={numOfPages} />}
		</main>
	);
};

export default Table;
