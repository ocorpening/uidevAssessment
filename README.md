uidevAssessment
===============

MEANJS stack implementation of assessment:

The web page should display a list of People from a dbo.Person table in the DeveloperTest database. The list should display the user’s FirstName and LastName.

The user can select a person from the list described above. When the user selects a person, the web page should display the details about that person. The person fields to be displayed in the detail are FirstName, MiddleName, LastName, BirthDate, EmailAddress, and Age. FirstName, MiddleName, LastName, BirthDate, EmailAddress should come from the database. Age should be calculated based on the person’s birthdate. The calculation should be done on the server without doing an entire page postback. Therefor you must make an asynchronous request to the web server to get the calculated value. This is overkill for this calculation. However, this is a chance to show your understanding of using JavaScript to make an asynchronous html call and take the result from that call and manipulate the DOM with it.

The web page should allow the user to add a new person. The user should be able to enter data for the FirstName, MiddleName, LastName, BirthDate, and EmailAddress fields. It should validate that the e-mail address entered is a valid e-mail address. LastName and BirthDate are both required fields. BirthDate must also be a valid date.

What I did:

1) I used yeoman to create the boilerplate to start from for a new MEANJS application:

$ yo meanjs

2) I used the MEANJS yeoman sub-generator to create a CRUD module for "person", it automatically creates menu items to list and create new people.

$ yo meanjs:crud-module person

3) The supplied menu-items were nice, give the ability to seed the db before we add our own UI per the assessment design.
	- add listbox bound to the person table.
	- bind click event to show details of currently selected person beside tables.
	- create "Add" button to allow addition of another user - this will show a form with a submit button, after which
		the list will be updated to show the newly added person.