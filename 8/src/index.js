window.onload = () => {
    document.getElementById( "button" ).addEventListener( "click", function () {
        const progressBar = document.getElementById( "progressBar" );

        if ( progressBar.value < progressBar.max ) {
            if ( progressBar.value !== 95 ) {
                for ( let label of progressBar.labels ) {
                    label.innerText = Number( progressBar.value + 5 ) + "%";
                }
                progressBar.value = Number( progressBar.value + 5 );
            } else {
                for ( let label of progressBar.labels ) {
                    label.innerText = "100%. максимум";
                }
                progressBar.value = Number( progressBar.value + 5 );
                document.getElementById( "button" ).hidden = true;
            }

        }
    } );
};