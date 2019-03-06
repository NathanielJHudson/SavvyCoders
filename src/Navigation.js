import { lowerCase } from 'lodash';

function linkBuilder(linksArr){
    var linksHTML = '';
    var destination = '';
    
    linksArr.forEach((link) => {
        if(link !== 'Home'){
            destination = lowerCase(link);
        }
        linksHTML += `
        <li>
            <a data-navigo href="./${destination}">
                ${link}
            </a>
        </li>
        `;
    });

    
    return linksHTML;
}

export default function Navigation(state){
    return `<div id="navigation">
        <ul class="container">
    ${linkBuilder(state.links)}
    </div>
    `;
}