async function getOrders() {
	await fetch(`http://127.0.0.1:8000/getcart/${localStorage.getItem('bno')}/`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
		.then((response) => response.json())
		.then((data) => (userdata = data));
}
