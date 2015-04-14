/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//slider voor leeftijd
$(function(){
    $("#slider-age").slider({
        min: 18,
        max: 99,
        values: [35, 45],
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

//geboortedatum datepicker
$(function(){
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1915:@maxDate"
    });
});

//inladen menu, footer en header
$(function(){
    $("#IncludedHeader").load("header.html");
    $("#IncludedFooter").load("footer.html");
    $("#IncludedMenu").load("menu.html");
});

//shuffle vraag volgorde
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

//corners
$(footer).corner("bevelfold");
$(footer).corner("bottom");
$(content).corner("bevelfold");
$(content).corner("top");

//foto upload
$(document).ready(function(){
    var thumb = $('#thumb');
    
    new AjaxUpload('imageUpload', {
        action: $('#selectfoto').attr('action'),
        name: 'image',
        onSubmit: function(file, extension) {
            $('#preview').addClass('loading');
        },
        onComplete: function(file, response) {
            thumb.load(function(){
                $('#preview').removeClass('loading');
                thumb.unbind();
            });
            thumb.attr('src', response);
        }
    });
});