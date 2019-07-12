
//Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete a Todo
$("ul").on("click", "span", function(event) {
	//target the whole li, not just the span
	$(this).parent().fadeOut(300, function() {
		//remove the whole thing
		$(this).remove();
	});
	//stop it click event from bubbling up to parent elements
	event.stopPropagation();
});

//
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(500);
});
