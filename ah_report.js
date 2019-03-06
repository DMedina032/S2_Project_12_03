"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Dajah Medina
   Date:   3.1.19

   Filename: ah_report.js

   Functions:

   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable

   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000

   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order

   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor

*/
// I declared the donationTotal by putting a var attribute and set the value to 0 as the starting point. I set the anys of donors and did a foreach that belongs to donors by putting the ".".
var donationTotal = 0;
donors.forEach(calcSum);
// By using the var attribute, i was then able the declare the varible summaryTable and gave it the value of the text string for the table concatanating it for the donors.length along with conatinating it to the table data and table head string for the donors.
var summaryTable = "<table><tr><th>Donors</th><td>" + donors.length + "</td></tr><tr><th>TotalDonations</th><td>$" + donationTotal.toLocaleString() + "</td></th></table>";
// By using the document.getElementbyId js was then able to get the id of "donation summary" form the index.html and used the innerHTML and gave that the value of the varible summary table.
document.getElementById("donationSummary").innerHTML = summaryTable;
// I declared the majorDonors varible by using the var attribute and gave it the value donors.filter along with perameters.
var majorDonors = donors.filter(findMajorDonors);
majorDonors.sort(donorSortDescending);
// By using the var attribute I was then able to declare the varible of donor table and set the value to a string for the table.
var donorTable = "<table><caption>Major Donors</caption><tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Address</th><th>Phone</th><th>E-mail</th></tr>";

majorDonors.forEach(writeDonorRow);
donorTable += "</table>";
document.getElementById("donorTable").innerHTML = donorTable;









function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}