$(function(){
	var students = [
	 ' Chris Arnesen',
	 ' Ashley Steele',
	 ' John Crimmings',
	 ' Charlotte Kroening',
	 ' Connor Klausing',
	 ' Adia Alderson',
	 ' Amanda Bausch',
	 ' Andrew Dourgarian',
	 ' Andrew Harasymiw',
	 ' Ben Margis',
	 ' Brandi Brown',
	 ' Clayton Hottinger',
	 ' Derek Roche',
	 ' Gwen Paul',
	 ' Keisha Josephs',
	 ' Kyra Crowston',
	 ' Moni Francesca',
	 ' Nicholas Gill',
	 ' Wallace Wylie',
	 ' James Kirwin',
	 ' Manuel Zumarraga',
	 ' Sam Richard'
	];

	var namesOfTeams = [
		'Coyote',
		'Road Runner',
		'Wabbit',
		'Tweety Bird',
		'Putty Tat',
		'Martian',
		'Fudd',
		'Acme',
		'Bugg',
		'Daffy'
	];

	/*Shuffles the student array for a random order*/
	function shuffle(array) {
 		var currentIndex = array.length, temporaryValue, randomIndex ;

 		// While there remain elements to shuffle...
 		while (0 !== currentIndex) {

   			// Pick a remaining element...
   			randomIndex = Math.floor(Math.random() * currentIndex);
	   		currentIndex -= 1;

	   		// And swap it with the current element.
	   		temporaryValue = array[currentIndex];
	   		array[currentIndex] = array[randomIndex];
	   		array[randomIndex] = temporaryValue;
	 	}
		 return array;
		};
	/*slices out a portion of an array to create team*/
	function makeTeam (array, start, stop) {
	 	return array.slice(start, stop);

	 };
	 function assign (teamMem, team) {
	 	$('#'+team).append('<p>'+ teamMem + '</p>');
	 }

	 /*When generate button is click this creats random teams*/
	$('form').on('submit', function(event) {
		try {
			$('div').children().remove()//resets page: removes appended info

			var data = $(this).serializeArray();//data from form
			var numTeams = data[0].value;//number of teams selected

			var teamSize = Math.round(students.length / numTeams)

			var startPoint = 0;//start the slice
			var endPoint = teamSize//end the slice

			var shuffledStudents = shuffle(students);//randomized array of students

			// for (var j = 1; j<=numTeams; j++) {
			// 	$('#team' + j).append('<h3 class="team">' + namesOfTeams[j-1] + '</h3>');
			// 	$('.team').animate({margin: 0}, 3000);
			// };
			// for (var k =1; k<=numTeams; k++) {
			// 	for (var m = 0; m<students.length; m++) {
			// 		var tempMem =students[m];
			// 		var team = "team"+k;
			// 		assign(tempMem, team);
			// 	}

			/*Loops through the shuffled array of students to add them into individual teams*/
			for (var i=1; i<=numTeams; i++) {
				var teamName = namesOfTeams[i-1]
			 	var tempTeam = makeTeam(shuffledStudents, startPoint, endPoint);
				
			 	startPoint += teamSize;
			 	endPoint += teamSize;
			 	var teamRegister = '<h3 class="team">Team ' + teamName + ':</h3><p> ' + 
			 	tempTeam + '</p>'
				
			 	$('#team' + i).append(teamRegister);
			 	$('.team').animate({margin: 0}, 3000)
			}

		} catch (ex) {
			console.log('Exception:', ex);
		} finally {
			event.preventDefault();
		}
	})
});