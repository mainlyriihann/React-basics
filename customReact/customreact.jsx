const reactElement = {
    type : 'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}
// how react views my elements after compiling? ->
// makes trees and views.

/*
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target );
    container.appendChild(domElement);
} */
// bad approach -> seedha for loop lagake attributes set krne the.


// anotehr element: 
const anotherElement = (
    <a href ="https://google.com" target = '_blank'>Visit google </a>
)
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);


