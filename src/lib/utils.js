export const baseUrl = `${import.meta.env.VITE_PUBLIC_API_BASE_URL}`;

export const getData = async (url) => {
	const response = await fetch(`${baseUrl}${url}`, { credentials: 'include' });
	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
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

export const getQueryVariable = (querystring, variable) => {
	let vars = querystring.split('&');
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return undefined;
};

export const urlBase64ToUint8Array = (base64String) => {
	const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
	const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
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
