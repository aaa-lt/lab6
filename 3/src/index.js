const change = () => {
    const elements = document.getElementsByClassName( "toChange" );
    for ( const element of elements ) {
        element.innerHTML = "Изменился и стал <b>жирный</b>!";
    }
};