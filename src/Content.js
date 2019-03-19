import * as Pages from './pages';

export default function content(state){
    return `
    <div id="content">
<div class="container">
    ${Pages[state.body]()}
</div>
</div>
`;
}