		function CustomPrompt () {
			this.render = function (dialog, func)(
				var winW = window.innerWidth;
				var winH = window.innerHeight;
				var dialogoverlay = document.getElementById ('dialogoverlay');
				var dialogbox = document.getElementById ('dialogbox');
				dialogoverlay.style.display = "block";
				dialogoverlay.style.height = winH + "px";
				dialogbox.style.left = (winW/2) - (550 * .5) + "px";
				dialogbox.style.top = "100px";
				dialogbox.style.display = "block";
				document.getElementById ('dialogboxhead').innerHTML = "A value is required";
				document.getElementById ('dialogboxbody').innerHTML = dialog;
				document.getElementById ('dialogboxbody').innerHTML += '<br><input id = "prompt_value1">'; 
				document.getElementById ('dialogboxfoot').innerHTML = '<button onclick="Prompt.ok"(\''+func+'\')">OK</button><button onclick = "Prompt.cancel()">Cancel</button>';
			)
			this.cancel = function () {
				document.getElementById ('dialogbox').style.display = "none";
				document.getElementById ('dialogoverlay').style.display = "none";
		}
			this.ok = function(func) (
				var prompt_value1 = document.getElementById ('prompt_value1').value;
				document.getElementById ('dialogbox').style.display = "none";
				document.getElementById ('dialogoverlay').style.display = "none";
			)
		)
		var Prompt = new CustomPrompt (); 