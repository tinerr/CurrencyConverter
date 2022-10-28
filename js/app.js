







function peso() {
    let dollar = document.getElementById("CurrentInput").value;
    const peso = 58;
    const ans = dollar * peso;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML  =
    "Peso";

}
function yuan() {
    let dollar = document.getElementById("CurrentInput").value;
    const yuan = 7;
    const ans = dollar * yuan;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML  =
    "Yuan";
}
function yen() {
    let dollar = document.getElementById("CurrentInput").value;
    const yen = 146;
    const ans = dollar * yen;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML  =
    "Yen";
}
   

    