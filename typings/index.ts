/// <reference path="typings/index.d.ts" />
import * as express from "express";  
import * as bodyParser from "body-parser";  
import * as Quote from "./entities/quote";  
import * as mongoose from "mongoose";

// node-restul doesn't have typings, so we'll have to use plain js require to get it :-(
var restful = require('node-restful'); 

// ===============
// COMMON VARIABLES
// ===============
let appPort: number =  (process.env.PORT || 8080);  
let connectionString: string = process.env.MONGODB_URI;  

// ===============
// Express App
// ===============
var app = express();  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: true
}));

app.set("port", appPort);  