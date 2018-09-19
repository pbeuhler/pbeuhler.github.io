function func() {
    document.getElementById("demo").innerHTML = "Abrakadabra"
    document.getElementById("otherDiv").innerHTML = "Presto Change-O"
    document.getElementById("hiddenPane").style.display = "block"
}

$(document).ready(function() {
    document.getElementById("hiddenPane").style.display = "none"
});