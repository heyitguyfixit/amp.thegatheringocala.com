var drop = document.getElementsByClassName("menuDropdown");
var i;

for (i = 0; i < drop.length; i++) {
    drop[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var sub = this.nextElementSibling;
        if (sub.style.display === "block") {
            sub.style.display = "none";
        } else {
            sub.style.display = "block";
        }
    });
}
