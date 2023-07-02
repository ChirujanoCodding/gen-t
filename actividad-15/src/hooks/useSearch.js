import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
export function useSearch() {
	const [query, updateQuery] = useState('');
	const isFirstInput = useRef(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = query === '';
			return;
		}

		if (query === '') {
			setError("Query can't be an empty string");
			return;
		}

		if (query.match(/^\d+$/)) {
			setError("Query can't start with numbers");
			return;
		}

		if (query.length < 3) {
			setError('Query must have 3 chars as mininum.');
			return;
		}

		setError(null);
	}, [query]);

	return { query: query.trim(), updateQuery, error };
}
