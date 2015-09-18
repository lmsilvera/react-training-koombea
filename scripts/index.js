import React, {createClass, PropTypes} from 'react';
var people = require("./lista.json").people;

var App = require("./components/app");

module.exports = React.render(<App trabajadores={people} />, document.getElementById('container'));
