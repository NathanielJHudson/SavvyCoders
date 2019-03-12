import { lowerCase } from 'lodash';

function linkBuilder(linksArr){
    var linksHTML = linksArr.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = lowerCase(link);
        }
        
        return `<li>
            <a data-navigo href="./${destination}">
                ${link}
            </a>
        </li>
        `;
    }).join(' ');
    
    return linksHTML;
}

export default function Navigation(state){
    return `<div id="navigation">
        <ul class="container">
    ${linkBuilder(state.links)}
    </div>
    `;
}