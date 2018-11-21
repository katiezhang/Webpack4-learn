// hello.js
// module.exports = function () {
//     let hello = document.createElement('div');
//     hello.innerHTML = "Long time no see! hahahahhahah";
//     return hello;
// };

// hello.js  --- react
import React, {Component} from 'react'; // 这两个模块必须引入

let name = Alan;

export default class Hello extends Component{
    render() {
        return (
            <div>
                {name}
            </div>
        );
    }
}