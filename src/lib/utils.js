export const baseUrl = `${import.meta.env.VITE_PUBLIC_API_BASE_URL}`;

export const getData = async (url) => {
	const response = await fetch(`${baseUrl}${url}`, { credentials: 'include' });
	if (!response.ok) {
		if (response.status === 401) {
			window.location.href = '/login';
		} else {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}
	}
	if (response.status === 204) {
		return null;
	}
	return await response.json();
};

export const postData = async (url, body) => {
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	const requestOptions = {
		method: 'POST',
		headers,
		body: JSON.stringify(body),
		credentials: 'include'
	};

	const response = await fetch(`${baseUrl}${url}`, requestOptions);
	if (!response.ok) {
		let result = await response.json();
		throw new Error(result.code);
	}
	if (response.headers.get('Content-Type')) return await response.json();
	else await response.text();
};

export const putData = async (url, body) => {
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	const requestOptions = {
		method: 'PUT',
		headers,
		body: JSON.stringify(body),
		credentials: 'include'
	};

	const response = await fetch(`${baseUrl}${url}`, requestOptions);
	if (!response.ok) {
		let result = await response.json();
		throw new Error(result.code);
	}
	if (response.headers.get('Content-Type')) return await response.json();
	else await response.text();
};

export const isRequestSuccesfull = async (url) => {
	const response = await fetch(`${baseUrl}${url}`, { credentials: 'include' });
	return response.ok;
};

export const preCandidates = [
	{ name: 'unnamed', isOut: 0 },
	{ name: 'unnamed', isOut: 0 },
	{ name: 'unnamed', isOut: 0 },
	{ name: 'unnamed', isOut: 0 },
	{ name: 'unnamed', isOut: 0 },
	{ name: 'unnamed', isOut: 0 },
	{ name: 'unnamed', isOut: 0 },
	{ name: 'unnamed', isOut: 0 }
];
