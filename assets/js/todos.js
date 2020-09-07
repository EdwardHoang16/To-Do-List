//Check off specific to-dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete to-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding a new To-Do
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		let toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + toDoText + "</li>")
	}
});

//Toggling the input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});