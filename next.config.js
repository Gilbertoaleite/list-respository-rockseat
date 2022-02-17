const path = require('path');

module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		
	},
	compiler: {
    // ssr and displayName are configured by default
   styledComponents: true,
},
};