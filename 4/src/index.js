const sum = () => {
    num = Number( document.getElementById( "numberA" ).value ) + Number( document.getElementById( "numberB" ).value );
    document.getElementById( "numberC" ).innerText = num;
};