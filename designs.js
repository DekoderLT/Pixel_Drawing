const table = $("table");

//Neperkrauna svetainės paspaudus Submit
$("input[type='submit']").on("click", function(event){
    event.preventDefault();
});

function makeGrid() {
    let row = $("#input_height").val();
    let column = $("#input_width").val();
//Išvalo lentele, jei būtų prieš tai užpildyta
    table.children().remove();
//Ciklas kuriantis grida
    for (let i = 0; i < row; i++){
        table.append( "<tr></tr>" );
        for (let j = 0; j < column;j++){
            table.children().last().append("<td></td>");
        }
    }  
};

table.on("click","td",function(){
    let color = $("input[type='color']");
    $(this).css( "background-color", color.val());
});
