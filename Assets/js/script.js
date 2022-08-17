function start(begin, digits) {
	//List all of the variables
	var UPLETTERS = "abcdefghijklmnopqrstuvwxyz";
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
	var numeric = '0123456789';
	var result = ''
	var go = 4

	//Setting up the Prompts
	var digits = prompt("How Many Digits (Between: 8 - 128)")
	if (go = 4) {
		if (digits >= 8) {
			console.log(go)
			if (digits <= 128) {
				document.getElementById("#").textContent = "Length: " + digits;
				//Ask if they want to allow Uppercase letters
				if (confirm("Allow Upprcase Letters?(Must accept one of the following four options)") == false) {
					var UPLETTERS = ''
					go -= 1
					document.getElementById("A").textContent = ""
					console.log("No Uppercase Letters")
				}
				//Ask if they want to allow lowercase letters
				if (confirm("Allow Lowercase Letters?") == false) {
					var letters = ''
					go -= 1
					document.getElementById("a").textContent = ""
					console.log("No Lowercase Letters")
				}
				//Ask if they want to allow Numbers
				if (confirm("Allow Numbers?") == false) {
					var numeric = ''
					go -= 1
					document.getElementById("1").textContent = ""
					console.log("No Numbers")
				}
				//Ask if they want to allow Symbols
				if (confirm("Allow Symbols?") == false) {
					var punctuation = ''
					go -= 1
					document.getElementById("!").textContent = ""
					console.log("No Symbols")
				}
				//This part makes sure they selected one of the paramaters, if not. its reloaded.
				if (go === 0) {
					window.location.reload();
					console.log("fuck")
				}
				//This code combines all the end var
				var characters = UPLETTERS + letters + punctuation + numeric
				console.log('characters')
				length = digits
				for (let i = 0; i < length; i++) {
					result += characters.charAt(Math.floor(Math.random() * digits));
				} console.log(go)
				//Finally display the content
				let display = document.getElementById('password').textContent = result
				return result;
			}//refresh page if proper length is not given
			else { window.location.reload(); } console.log(go)
		}
		console.log(go)
		return (start)
	}
}

function refresh() {
	window.location.reload();
}

