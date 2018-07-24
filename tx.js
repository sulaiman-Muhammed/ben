
function sum()
{
var n1=parseInt(document.getElementById("s1").value);
var n2=parseInt(document.getElementById("s2").value);
document.getElementById("h").innerHTML = n1+n2;
}
function ss()
{
document.getElementById("m").src="a3.jpeg";
}
function cj()
{
var r=document.getElementById("pic").value;
if(r==="remas")
{
document.getElementById("m").src="a4.jpg";
}

else
document.getElementById("m").src="a4.jpg"
}

function Con(na, ag) {
    this.ag = ag;
    this.na = na;
    this.neag = rateag;
}
function rateag() {
    if (this.ag === 25) {
        var ss = this.ag - 5;
        return (ss);
    }
    else { return (this.ag) }
}
var co = new Con("hhh", 444);
var co1 = new Con("www", 25);
console.log(co.neag());
console.log(co1.neag());