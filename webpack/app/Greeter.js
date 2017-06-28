/*
var config = require('./config.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};*/
//es6
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>//添加类名
            {config.greetText}
    </div>
    );
    }
}

export default Greeter
