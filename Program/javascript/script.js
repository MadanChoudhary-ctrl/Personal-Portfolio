function Validation()
{
	var name=document.getElementById("Name").value;
	var email=document.getElementById("email").value;
	var message=document.getElementById("message").value;

	if(name=="" || email=="" || message=="" ){
		alert("Please fill all the details.");
	}
	else
	{
		alert("Thank you for your message.");
	}
}      