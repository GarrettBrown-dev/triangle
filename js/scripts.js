$(document).ready(function() {
  $("form#Triangle").submit(function(event) {
    const side1 = parseInt($("input#sideone").val());
    const side2 = parseInt($("input#sidetwo").val());
    const side3 = parseInt($("input#sidethree").val());
   
    if(side1 === side2 && side2 === side3 && side1 === side3) {
    $("#Equilateral").show();
    } 
    else if (side1 === side2 || side1 === side3 || side2 === side3) {
    $("#Isosceles").show();
    } 
    else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
    $("#Not").show();
    } else { $("#Scalene").show();
    }
      event.preventDefault();
  });
});




