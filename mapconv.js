const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')

let jsonArray = []

csv()
    .fromFile(path.join(__dirname, 'customer-data.csv'))
    .on('json', (jsonObj) => {
	// console.log(jsonObj)
	jsonArray.push(jsonObj)
    })
    .on('done', (error) => {
	// console.log(jsonArray)
	fs.writeFile('customer-data.json', JSON.stringify(jsonArray), function (error) {
	    if(error)
		return console.error(error)
	    console.log('Writing is done.')
	})
    })
