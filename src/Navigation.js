

function linkBuilder(linksArry){
    var i = 0;
    var linksHTML = '';
    
    while(i < linksArry.length){
        linksHTML += `<li>
        <a href="./${linksArry[i]}">${linksArry[i]}<a/>
        </li>`;

        i++;
    }
    
    return linksHTML;
}

export default function Navigation(state){
    return `<div id="navigation">
        <ul class="container">
    ${linkBuilder(state.links)}
    </div>
    `;
}
