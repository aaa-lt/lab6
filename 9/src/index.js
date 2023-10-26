window.onload = () => {
    const carouselStart = () => {
        let startNum = 1;
        setInterval( () => {
            startNum = carouselLogic( startNum );
        }, 500 )
    }
    const carouselLogic = (startNum) => {
        const CarouselElements = document.getElementsByClassName( 'carousel-items' );
        for ( const CarouselElement of CarouselElements ) {
            const carouselItems = CarouselElement.querySelectorAll( '*' );
            let i;
            if ( startNum > 2 ) {
                startNum = 0;
                i = startNum;
            } else {
                i = startNum
            }
            for ( const carouselItem of carouselItems ) {
                if ( i > 2 ) {
                    i = 0
                }
                carouselItem.style.order = i;
                i++;
            }
            startNum++;
        }
        return startNum;
    }


    document.getElementById( 'start' ).addEventListener( 'click', carouselStart, false )
}