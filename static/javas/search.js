
//const form = document.querySelector('form');


function myFunction() {
   
    var input = document.getElementById("genre").value;
    //alert(input);
    


// myform.addEventListener ('Submit' , function(e){
// e.preventDefault () ;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
		'X-RapidAPI-Key': '9e3e9d71dfmsh88af14c6ccfd6c2p17bbbcjsn1227d2748075'
	}
};
//var url = new URL('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&')

let params = {

    "genre": input,
    "page": "1",
    "output_language": "en",
    "language": "en"
  };
  
  let query = Object.keys(params)
               .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
               .join('&');
  
  let url = 'https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&' + query;
fetch(url,options)

//fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&page=1&output_language=en&language=en', options)


//fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)

	
    .then(response => response.json())
     .then(data => {
        const list = data.results;
        list.map((items) =>{
           const namem =items.title
           const no=items.year;
           const desc=items.overview;
           const poster=items.posterURLs[154];
           const rating=items.imdbRating;
           const movie = `<ul><h2>${namem}</h2><img src="${poster}"> <p>Year: ${no}</p><p>IMDB Rating: ${rating} </p> <p>Overview: ${desc} </p> </ul>`
           document.querySelector ( '.search' ).innerHTML += movie ;
        })
    })
   
	.catch(err => console.error(err));
//  });
}