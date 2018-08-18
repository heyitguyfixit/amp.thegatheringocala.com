var drop = document.getElementsByClassName("menuDropdown");
var i;

for (i = 0; i < drop.length; i++) {
    drop[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var sub = this.nextElementSibling;
        if (sub.style.maxHeight === "200px") {
            sub.style.maxHeight = "0px";
        } else {
            sub.style.maxHeight = "200px";
        }
    });
}
function onload() {
    document.getElementsByTagName("body")[0].setAttribute('style', 'position:static !important');
    document.getElementById("menu").setAttribute('style', 'height:'+document.documentElement.clientHeight+'px !important');
}
