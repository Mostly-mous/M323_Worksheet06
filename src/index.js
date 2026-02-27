//import hh from "hyperscript-helpers";
//import { h, diff, patch } from "virtual-dom";
//import createElement from "virtual-dom/create-element";

const view = require("./view");
const update = require("./update");
const app = require("./app");


const { initModel } = require("./model");


// The root node of the app (the div with id="app" in index.html)
const rootNode = document.getElementById("app");

// Start the app
app(initModel, update, view, rootNode);
