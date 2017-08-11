var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require('create-react-class');

var PersonList = require("./components/PersonList.jsx");
ReactDOM.render(
    <PersonList />
    , document.getElementById('root')
);