// Declaring variables.
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var country = document.getElementById("country");
var table = document.getElementsByTagName("table")[0];
var rIndex,table = document.getElementsByTagName("table")[0];

// Function to add a new row with necessary table cells where input field values will be displayed in the table cells upon button click.
function addRow(){
	var mail = document.getElementById("email").value;
	var atPos = mail.indexOf("@");
	var dotPos = mail.lastIndexOf(".");
	
	// Since the form button has an input type of "button" instead of "submit" (Since it will reload the page and reset any data),
	// I have created my own basic validation.
	if(firstName.value.length == 0) {
		alert("Please fill in first name.");
	} else if(lastName.value.length == 0) {
		alert("Please fill in last name.");
	} else if(email.value.length == 0 || atPos < 1 || dotPos < atPos + 2 || dotPos + 2 > mail.length) {
		alert("Please fill in a valid email address.");
	} else if(country.value == 0) {
		alert("Please choose a country.");
	} else {
		var newRow = table.insertRow(1);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);
		var cell4 = newRow.insertCell(3);

		cell1.innerHTML = firstName.value;
		cell2.innerHTML = lastName.value;
		cell3.innerHTML = email.value;
		cell4.innerHTML = country.value;

		selectedRow();
	}
}

//function to select a row when clicked and display the value of each table cell in the corresponding input fields.
function selectedRow() {
	for(var i = 1; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			rIndex = this.rowIndex;
			document.getElementById("firstName").value = this.cells[0].innerHTML;
			document.getElementById("lastName").value = this.cells[1].innerHTML;
			document.getElementById("email").value = this.cells[2].innerHTML;
			document.getElementById("country").value = this.cells[3].innerHTML;
		}
	}
}

// Function to edit a row where values of the input fields will replace existing table cell data.
function editValue() {
	var mail = document.getElementById("email").value;
	var atPos = mail.indexOf("@");
	var dotPos = mail.lastIndexOf(".");
	
	// Validation for editing existing entries.
	if(firstName.value.length == 0) {
		alert("Please fill in first name.");
	} else if(lastName.value.length == 0) {
		alert("Please fill in last name.");
	} else if(email.value.length == 0 || atPos < 1 || dotPos < atPos + 2 || dotPos + 2 > mail.length) {
		alert("Please fill in a valid email address.");
	} else if(country.value == 0) {
		alert("Please choose a country.");
	} else {
		table.rows[rIndex].cells[0].innerHTML = document.getElementById("firstName").value;
		table.rows[rIndex].cells[1].innerHTML = document.getElementById("lastName").value;
		table.rows[rIndex].cells[2].innerHTML = document.getElementById("email").value;
		table.rows[rIndex].cells[3].innerHTML = document.getElementById("country").value;
	}
}

// Function to remove clicked row.
function removeRow() {
	table.deleteRow(rIndex);
	firstName.value = ""; //Remove any text in input fields.
	lastName.value = "";
	email.value = "";
	country.value = "";
}
