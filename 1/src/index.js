const table = document.getElementById( "table" );

for ( let i = 0; i < table.rows.length; i++ ) {
    const td = table.rows[i].cells[i];
    td.style.backgroundColor = "yellow";
}
