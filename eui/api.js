async function basket(name, price) {
	const bno = localStorage.getItem('bno');
	bno !== null ? null : localStorage.setItem('bno', new Date());
	let cart = {
		email: bno,
		book_name: name,
		price: price,
	};

	await fetch('http://127.0.0.1:8000/addcart/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(cart),
	}).then((res) => {
		if (res.status === 'Data Not Valid') {
			alert('Please Try Again!');
			window.location.reload();
		} else {
			alert('Item Added To Cart!');
		}
	});
}

async function getCart() {
	var userdata;
	await fetch(`http://127.0.0.1:8000/getcart/${localStorage.getItem('bno')}/`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
		.then((response) => response.json())
		.then((data) => (userdata = data));
	return userdata;
}

async function deleteitem(id) {
	if (window.confirm('Are you sure want to delete this?')) {
		await fetch(`http://127.0.0.1:8000/deletecartitem/${id}/`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		}).then((response) => {
			alert('Deleted Successfully');
			window.location.reload();
		});
	}
}

async function confrimOrder() {
	const cartid = localStorage.getItem('bno');
	let data = {
		name: document.querySelector('#name').value,
		email: document.querySelector('#email').value,
		card_id: cartid,
		total: document.querySelector('#total').innerHTML,
		address: document.querySelector('#address').value,
		contact: document.querySelector('#contact').value,
		status: 'request',
	};
	await fetch('http://127.0.0.1:8000/placeorder/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	}).then((res) => {
		alert('Order Place Successfully! Thanks For Choosing Us');
		localStorage.setItem('bno', new Date());
		window.location.reload();
	});
}

async function cart() {
	document.querySelector('#bookslist').innerHTML === ``
		? window.location.reload()
		: (document.querySelector('#bookslist').innerHTML = ``);
	document.querySelector('#cats').innerHTML === ``
		? window.location.reload()
		: (document.querySelector('#cats').innerHTML = ``);
	document.querySelector('#cart').style.display = 'block';
	document.querySelector('#cart').className +=
		'd-flex flex-column gap-3 align-items-center';
	const datas = await getCart();
	let tot = 0;
	for (let x = 0; x < datas.length; x++) {
		tot += parseInt(datas[x].price);
	}
	datas.map(
		(data) =>
			(document.querySelector('#cart').innerHTML += `
			<div
    class="d-flex flex-row align-items-center justify-content-between gap-3 p-3 border border-dark shadow-sm bg-white w-75">
		<p class="h5 text-dark">${data.book_name}</p>
		<div class="d-flex flex-row gap-4">
			<p class="h6 text-danger">${data.price}</p>
			<button class="btn btn-outline-danger" onclick="deleteitem(${data.id})">X</button>
		</div>
	</div>
    `),
	);
	document.querySelector('#cart').innerHTML += `
		<div class='d-flex flex-column gap-3 justify-content-between'>
			<div class="d-flex flex-row">
				<p class="h4 text-danger">Total: </p>
				<p class="h4 text-danger" id="total">${tot}</p>
			</div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
			Place Order
			</button>
		</div>
	`;
}
