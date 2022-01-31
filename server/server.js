import express from 'express'
const app = express()
import fs from 'fs'
import path from 'path'
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from '../src/App.js';


app.use('^/$',(req,res,next)=>{
    // WE READ OUR BUILDS INDEX.HTML FILE
    fs.readFile(path.resolve('./build/index.html'), 'utf-8',(err,data)=>{
        // IF WE GET SOME ERROR WHILE READING INDEX.HTML
        if(err){
            console.log(err)
            return res.status(500).send("some error happend !")
        }
        // IF WE SUCCESSFULLY READ THE DATA OF INDEX HTML
        console.log(ReactDOMServer.renderToString(<App />))
        return res.send(
            data.replace( 
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )

    })

})

// SERVE ALL STATIC FILES FROM BUILD FOLDER
app.use(express.static(path.resolve(__dirname,'..','build')))


const PORT = 5001
app.listen(PORT,()=>{
    console.log("App Launched at port 5001")
})