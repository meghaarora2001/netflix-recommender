const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'netflix-weekly-top-10.p.rapidapi.com',
		'X-RapidAPI-Key': '9e3e9d71dfmsh88af14c6ccfd6c2p17bbbcjsn1227d2748075'
	}
};

fetch('https://netflix-weekly-top-10.p.rapidapi.com/api/tv', options)
	.then(response => response.json())
	.then(data => {
        const list1 = data;
        list1.map((item) =>{
           const namem =item.name;
           const no=item.list;
           const movie = `<ul><h2>${no}.   ${namem}</h2></ul>`
           document.querySelector ( '.tvshows' ).innerHTML += movie ;
        })
    })
	.catch(err => console.error(err));