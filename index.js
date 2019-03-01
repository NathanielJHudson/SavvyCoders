import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
// import nameChecker from './src/Greet';
import Footer from './src/Footer';


var State = {
    'Home': {
        'links': [ 'Blog','Contact','Projects' ],
        'title': 'Welcome to Nathaniel\'s Savvy coder website'
    },
    'Blog': {
        'links': [ 'Home','Contact','Projects' ],
        'title': 'Welcome to Nathaniel\'s Savvy coder website'
    },
    'Contact': {
        'links': [ 'Home','Blog','Projects' ] ,
        'title': 'Contact Nathaniel'
    },
    'Projects': {
        'links': [ 'Blog','Contact','Contact' ],
        'title': 'Look at these cool things!'
    }
};
    
var root = document.querySelector('#root');


function render(state){
    var links;
    var iterator = 0;

    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;
    links = document.querySelectorAll('#navigation>ul>li>a');

    while(iterator < links.length){
        links[iterator].addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                render(State[event.target.textContent]);
            }
        );
        iterator++;
    }
}
render(State.Home);