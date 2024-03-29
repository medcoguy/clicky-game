
.header {
    background: red;
    width: 100%;
    min-height: 80px;
    color: ivory;
    position: fixed;
    top: 0;
    margin: 0 auto;
    box-shadow: 0 5px 5px darkslategrey;
    z-index: 1000;
}

.header ul {
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    text-align: center;
}

.header li {
    display: inline-block;
    width: 33%;
    padding-top: 20px;
    font-family: 'Chakra Petch', sans-serif;
}

.title {
    font-family: 'Lobster', cursive;
}

#score {
    font-size: 1.2em;
}


@media (max-width: 700px) {

    .header li {
        display: block;
        text-align: center;
        width: 100%;
        padding-top: 0;
    } 
}