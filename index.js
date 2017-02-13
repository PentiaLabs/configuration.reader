'use strict';

const fs = require('fs');
const readConfig = filePath => {
	return new Promise( ( resolve, reject ) => {
		fs.readFile( filePath , ( err, buffer ) => {
			if ( err ) {
				reject( err );
			}else{
				resolve( JSON.parse( buffer.toString() ) );
			}
		});
	});
};

module.exports = filePath => {
	return readConfig( filePath );
};