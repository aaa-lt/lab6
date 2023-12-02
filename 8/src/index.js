window.onload = () => {
    document.getElementById( "button" ).addEventListener( "click", function () {
        const progressBar = document.getElementById( "progressBar" );
        const step = 5;
        if ( progressBar.value < 100 - step ) {
            for ( let label of progressBar.labels ) {
                label.innerText = Number( progressBar.value + step ) + "%";
            }
            progressBar.value = Number( progressBar.value + step );
        } else {
            for ( const label of progressBar.labels ) {
                label.innerText = "100%. максимум";
            }
            progressBar.value = 100;
            document.getElementById( "button" ).hidden = true;
        }
    } );
};