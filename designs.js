$("input[type='submit']").on("click", function(event){
    event.preventDefault();
    makeGrid();
});
function makeGrid() {
    var row = $("#input_height").val();
    var column = $("#input_width").val();
    var table = $("table");
    //išvalo lentele, jei ji butu užpildyta
    table.children().remove();

    for (let i = 0; i < row; i++){
        table.append( "<tr></tr>" );
        for (let j = 0; j < column;j++){
            $("tr").last().append("<td></td>");
        }
    }
    clickevent();
};

function clickevent() {
    $('td').click(function(){
        var color = $("input[type='color']").val();
        $(this).css( "background-color", color );
    })
}