import { useState } from 'react';

export function usePage() {
	const [page, setPage] = useState(1);

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	return { page, setPage: handlePageChange };
}
