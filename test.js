const goodPassword = '123';
document.forms.pwd.addEventListener('submit', function(e) {
  if (e.target.elements[0].value !== goodPassword) {
    e.target.elements[0].value = '';
    e.preventDefault();
  }
})


$(document).ready(function()
{
        
	$("#submit").click(function()  // If submit button is click.
	{
	      if ($("input#pwd").val() == "password") // Input button with id="pwd" 
              {                                       // Choose password and replace it.
	        $(".disabled").attr('controls',true); //  You disabled the controls.
	        $(".error").text("nice!");
	          
	      }else    
	      $(".error").text("wrong password, ask the admin or try again.");
	});

 });