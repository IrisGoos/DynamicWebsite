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

// types
function IEberekenen(x) {
    x = 50 + 10 * $('.E:checked').Length - 10 * $('.I:checked').Length;
};

function NSberekenen(y) {
    y = 50 + 12,5 * $('.N:checked').Length - 12,5 * $('.S:checked').Length;
};

function TFberekenen(z) {
    z = 50 + 12,5 * $('.T:checked').Length - 12,5 * $('.F:checked').Length;
};

function JPberekenen(v) {
    v = 50 + 8,33333 * $('.J:checked').Length - 8,33333 * $('.P:checked').Length;
};

//type bepalen
function Type () {
    function EI (E, I, x) {
        if (x <= 50) {
            return E, x;
        }
        else {
            x = 100 - x;
            return I, x;
        }
    };
    function NS (N, S, y) {
        if (y <= 50) {
            return N, y;
        }
        else {
            y = 100 - y;
            return S, y;
        }
    };
    function TF (T, F, z) {
        if (z <= 50) {
            return T, z;
        }
        else {
            z = 100 - z;
            return F, z;
        }
    };
    function JP (J, P, v) {
        if (v <= 50) {
            return J, v;
        }
        else {
            v = 100 - v;
            return P, v;
        }
    };
};

function Yourtype (){
    Type ();
    }


function OppositeType (){

function typeIE (I, E, xx, x){
    xx = 100 - x;
    if (xx <= 50) {
        E = xx;
    }
    else {
        I = 100 - xx;
    }
};

function typeNS (N, S, yy, y){
    yy = 100 - y;
    if (yy <= 50) {
        N = yy;
    }
    else {
        S = 100 - yy;
    }
};

function typeJP (J, P, vv, v){
    vv = 100 - v;
    if (vv <= 50) {
        J = vv;
    }
    else {
        P = 100 - yy;
    }
};

function typeTF (T, F, zz, z){
    zz = 100 - z;
    if (zz <= 50) {
        T = zz;
    }
    else {
        F = 100 - zz;
    }
};

};