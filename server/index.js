// WE NEED TO ADD BABEL FOR SERVER SIDE JSX COMPILE
// COMMAND FOR BABEL INSTALL => npm i @babel/preset-env @babel/preset-react @babel/register ignore-styles
require('ignore-styles') 
require('@babel/register')({
    ignore: [/(node_module)/],
    presets : ['@babel/preset-env','@babel/preset-react']
})

require('./server')