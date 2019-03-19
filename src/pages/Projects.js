export default function(){
    return `
<body>

    <div id="navigation">
        <ul class="container">
            <li>
                <a href="../">Home</a>
            </li>
            <li>
                <a href="../blog/">Blog</a>
            </li>
            <li>
                <a href="../contact/">Contact</a>
            </li>
            <li>
                <a href="#">Projects</a>
                <ul>
                    <li><a href=""></a>First</li>
                    <li><a href=""></a>Second</li>
                    <li><a href=""></a>Third</li>
                </ul>
            </li>
        </ul>
    </div>
    <div id="header">
        <h1>{Nathaniels Projects}</h1>
        <h2>Come on down!</h2>
    </div>
    <content id="div"></content>
    <footer></footer>

</body>
`;
}