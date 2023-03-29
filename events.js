function change() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        var r = Math.floor(Math.random() * 16);
        color = color + letters[r];
    }
    document.body.style.background = color;
}
var s = document.getElementById("spl");

s.onfocus=change;
s.onblur=change;