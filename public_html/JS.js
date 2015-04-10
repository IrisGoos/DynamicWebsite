/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//slider voor leeftijd
$(function(){
    $("#slider-age").slider({
        min: 35,
        max: 45,
        values: [18, 99],
        slide: function(event, ui){
            $("#age").val(ui.value[0] + " - " + ui.values[1]);
        }
    });
    $("age").val($("#slider-age").slider("values", 0) + "-" + $("#slider-age").slider("values", 1));
});

//merken
$(function(){
    $("#brands").buttonset();
});

//geboortedatum
$(function(){
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1915:@maxDate"
    });
});

//oude code
$(function(){
    $("#IncludedHeader").load("header.html");
    $("#IncludedFooter").load("footer.html");
});

//vragen van volgorde veranderen
var list = document.getElementById("test"),
        button = document.getElementById("shuffle");
function shuffle(items)
{
    var cached = items.slice(0), temp, i = cached.length,rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}

function shuffleNodes()
{
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while(i<nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
}
button.onclick = shuffleNodes;