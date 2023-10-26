function func() {
    const elements = document.querySelectorAll( ".pr" );
    let i = 1;
    for ( const element of elements ) {
        element.innerText = i;
        i++;
    }
}