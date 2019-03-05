import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
// import nameChecker from './src/Greet';
import Footer from './src/Footer';
import * as State from './state';
import { startCase } from 'lodash';
import Navigo from 'navigo';

var router = new Navigo(location.origin);

var root = document.querySelector('#root');

    
function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;
    router.updatePageLinks();
}
    
function handleNavigation(params){
    var destination = startCase(params.page);

    render(State[destination]); // eslint-disable-line
}

router
    .on('/:page', () => handleNavigation('Blog'))
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();
