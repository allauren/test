const spawnSync = require("child_process").spawnSync;
const fs = require('fs');
let algo ='0'
let words = ''
class letter {
		constructor(name, value, docx) {
		this.name = name;
		this.value = value;
		this.docx = docx;
	}
}

function sorter (a,b) {
	if (parseInt(a.value) < parseInt(b.value))
		return 1;
	if (parseInt(a.value) > parseInt(b.value))
		return -1;
	return 0;
}

let filearray = []

module.exports = (app) =>{
		app.get('/', (req, res) => {
		res.render('landing');
	});
	
	app.get('/image', (req, res) => {
		res.render('image');
	});
	
	app.get('/pick', (req, res) => {
		let filearray = []
		let public_path = __dirname + '/../public/img/'
		fs.readdir(public_path + 'letter_images/', (err, files) => {
			if (err)
				return res.redirect('/')
			for (let i = 0; i < files.length; i++)
			{
			console.log('I am the words' + words)
				let name = 'img/letter_images/' + files[i];
				let docx = files[i].replace(/.jpg/gi, '')
				docx = docx[0].toUpperCase() + docx.slice(1)
				let process = spawnSync('python3',["./Lexical-analysis/find_in_doc.py",
									(public_path + 'letter_docx/' + files[i].replace(/jpg/gi, 'docx')),
									words])
				let value = String(process.stdout);
				console.log(value)
				filearray.push(new letter(name, value, docx))
			}
			filearray.sort(sorter)
			res.render('picker', { first: filearray});
		})
	})
	
	app.get('/compared', (req, res) => {
		res.render('compared');
	});

	app.post('/selected', (req, res) => {
	console.log('la')
	algo = req.body.values
	console.log(algo)
	let process = spawnSync('python3',["./Lexical-analysis/word2vec.py",
                            algo,
                            ])
	let savedOutput = process.stdout;
	words = String(savedOutput);
	words = words.substr(0, words.length - 1)
	console.log(words)
	res.sendStatus(200)
	});

	app.post('/compare', (req, res) => {
		console.log(req.body)
		let public_path = __dirname + '/../public/img/'
		console.log((public_path + 'letter_docx/' + req.body.url + '.docx'))
		var process = spawnSync('python3',["./Lexical-analysis/create_doc.py",
							words,
							(public_path + 'letter_docx/' + req.body.url + '.docx')])
		var process = spawnSync('python3',["./Lexical-analysis/create_doc.py",
							words,
							(public_path + 'letter_docx/' + req.body.url + '.docx')])
		res.sendStatus(200)
	});
}
