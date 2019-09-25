
		function validateform1(){
			alert("do you want to validate this form");

			var q1 =  document.forms["from1"]["q1"];
			        console.log(q1.value);
					console.log(q1)

			var error1 = document.getElementById("error1");
			error1.innerHTML="Enter somethng aout yourself";
			


			error1.style.display="none";
			console.log(error1.innerHTML);

			if(q1.value == ""){
               error1.style.display="block";
			   console.log(error1)
			};
					return false;
		}
