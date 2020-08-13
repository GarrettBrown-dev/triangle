$(document).ready(function() {
  $("form#Triangle").submit(function(event) {
    const side1 = parseInt($("input#sideone").val());
    const side2 = parseInt($("input#sidetwo").val());
    const side3 = parseInt($("input#sidethree").val());
   
    if(side1 === side2 && side2 === side3 && side1 === side3) {
      alert("Equilateral Triangle!");
    } 
    else if (side1 === side2 || side1 === side3 || side2 === side3) {
      alert("Isosceles Triangle!");
    } 
    else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
      alert("Not a Triangle!");
    } else {
      alert("Scalene Triangle!");
    }
      event.preventDefault();
  });
});




