var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/BookLibraryInStrumica');

//CREATE

var book = mongoose.model(
	'book',
	{
		naslov: String,
		avtor: String,
		godina: Date,
		vid: String,
		fizickiOpis: {
			brNaStr: Number,
			golemina: String,
			tiraz: Number
		}
	}
);

// //Instances of book

var vs = new book(
	{
		naslov: 'Volsebnoto Samarce',
		avtor: 'Vanco Nikoleski',
		godina: new Date('1978-01-05T12:00:00Z'),
		vid: 'Roman',
		fizickiOpis: {
			brNaStr: 98,
			golemina: '20 cm',
			tiraz: 50
		}
	}
)

vs.save((err) => {
	if(err){
		console.log(err);
	}else{
		console.log('Book added to the library')
	}
});

var bajki = new book(
	{
		naslov: 'Bajki',
		avtor: 'Hans Kristijan Andersen',
		godina: new Date('1970-08-25T12:00:00Z'),
		vid: 'Raskazi',
		fizickiOpis: {
			brNaStr: 31,
			golemina: '21 cm',
			tiraz: 35
		}
	}
)

bajki.save((err) => {
	if(err){
		console.log(err);
	}else{
		console.log('Book added to the library')
	}
});

var bak = new book(
	{
		naslov: 'Povik na divinata',
		avtor: 'Jack London',
		godina: new Date('1968-02-15T12:00:00Z'),
		vid: 'Roman',
		fizickiOpis: {
			brNaStr: 106,
			golemina: '27 cm',
			tiraz: 30
		}
	}
)

bak.save((err) => {
	if(err){
		console.log(err);
	}else{
		console.log('Book added to the library')
	}
});

var belCig = new book(
	{
		naslov: 'Beloto Ciganche',
		avtor: 'Vidoe Podgorec',
		godina: new Date('1975-06-12T12:00:00Z'),
		vid: 'Roman',
		fizickiOpis: {
			brNaStr: 121,
			golemina: '21 cm',
			tiraz: 100
		}
	}
)

belCig.save((err) => {
	if(err){
		console.log(err);
	}else{
		console.log('Book added to the library')
	}
});

var zokPok = new book(
	{
		naslov: 'Zoki Poki',
		avtor: 'Olivera Nikolova',
		godina: new Date('1970-03-21T12:00:00Z'),
		vid: 'Raskazi',
		fizickiOpis: {
			brNaStr: 47,
			golemina: '21 cm',
			tiraz: 80
		}
	}
)

zokPok.save((err) => {
	if(err){
		console.log(err);
	}else{
		console.log('Book added to the library')
	}
});

//READ


// book.find({}, function(err, res){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		// console.log(res);
// 		for(var i in res){
// 		console.log(res[i].naslov);
// 		console.log(res[i].avtor);
// 		console.log(res[i].vid);
// 		console.log(res[i].fizickiOpis);
// 		console.log('\n')
// 	}};
// }); 

// book.find({"fizickiOpis.brNaStr" : {$gt : 100}}, function(err, res){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(res);
// 	}
// }); 

// book.findOne({"fizickiOpis.tiraz" :  80 }, function(err, res){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(res + '\n');
// 	}
// });

//UPDATE

// book.update({					
// 	naslov: "Zoki Poki"
// 	},
// 	{
// 		vid:"Najnovi i najpresni Raskazi",
// 		godina: new Date('2017-08-24T12:00:00Z')	
// 	},
// 	(err) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('Book informations Updated!');
// 	}
// });	

//DELETE

// book.remove(
// 	{
// 		 avtor: 'Jack London'
// 	},
// 	function(err){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log('The Book was DELETED!!!');
// 		}
// 	}
// )
