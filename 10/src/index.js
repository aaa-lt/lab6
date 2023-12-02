window.onload = () => {
    const button = document.getElementById( "button" );
    button.addEventListener( "click", () => {
        button.innerText = "Поехали!";
        button.classList.add( "buttonEnable" );
        setTimeout( () => {
            document.getElementById( "tower" ).classList.add( "towerEnable" );
            setTimeout( () => {
                const boat = document.getElementById( "boat" );
                boat.classList.add( "boatEnable" );
                setTimeout( () => {
                    boat.hidden = true;
                }, 1500 );
            }, 2000 );
        }, 500 );
    }, false );
};