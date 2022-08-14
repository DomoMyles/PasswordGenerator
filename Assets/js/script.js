var numm = false;
var symb = false;

function start(begin, play) {
	var play = prompt("How Many Digits")
	if (play >= 8) {
		/* Ask if you want numbers*/
		if (play <= 128) {
			if (confirm("Allow Numbers?") == true) {
				var numm = true;
				
			} else {
				var numm = false;
			}

			/*Ask for symbols */
			if (confirm("Allow Symbols?") == true) {
				var symb = true;
			} else {
				var symb = false;
			}

		} else { 
		return start(0, play)
		} 
	} else {
		return start(0, play)
	}

const length = play;

if (play >= 8){
	if (numm == true) {
		if (symb == true) {
			function password_generator(len) {
				var string = "abcdefghijklmnopqrstuvwxyz";
				var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
				var numeric = '0123456789';
				var password = "";
				var character = "";

				var crunch = true;
				while (password.length < length) {
					entity1 = Math.ceil(string.length * Math.random() * Math.random());
					entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
					entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
					hold = string.charAt(entity1);
					hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
					character += hold;
					character += numeric.charAt(entity2);
					character += punctuation.charAt(entity3);
					password = character;
				}
				password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
				return password.substr(0, len);

			}
			console.log(password_generator());

		}
	}


	if (numm == true) {
		if (symb == false) {
			function password_generator(len) {


				var string = "abcdefghijklmnopqrstuvwxyz";
				var numeric = '0123456789';
				var password = "";
				var character = "";

				var crunch = true;
				while (password.length < length) {
					entity1 = Math.ceil(string.length * Math.random() * Math.random());
					entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
					hold = string.charAt(entity1);
					hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
					character += hold;
					character += numeric.charAt(entity2);
					password = character;
				}
				password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
				return password.substr(0, len);
			}

			console.log(password_generator());
		}
	}

	if (numm == false) {
		if (symb == true) {
			function password_generator(len) {


				var string = "abcdefghijklmnopqrstuvwxyz";
				var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
				var password = "";
				var character = "";

				var crunch = true;
				while (password.length < length) {
					entity1 = Math.ceil(string.length * Math.random() * Math.random());
					entity2 = Math.ceil(punctuation.length * Math.random() * Math.random());
					hold = string.charAt(entity1);
					hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
					character += hold;
					character += punctuation.charAt(entity2);
					password = character;
				}
				password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
				return password.substr(0, len);
			}

			console.log(password_generator());
		}
	}

} if (numm == false) {
	if (symb == false) {
		function password_generator(len) {

			var string = "abcdefghijklmnopqrstuvwxyz";
			var password = "";
			var character = "";

			var crunch = true;
			while (password.length < length) {
				entity1 = Math.ceil(string.length * Math.random() * Math.random());
				hold = string.charAt(entity1);
				hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
				character += hold;
				password = character;
			}
			password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
			return password.substr(0, len);
		}
		console.log(password_generator());
	}
}
let display = document.getElementById('password').textContent = password_generator()
}