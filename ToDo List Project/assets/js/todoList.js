
//Check off specific todos by clicking
$("li").click(function() {
	$(this).toggleClass("completed");
});

//Click on X to delete a Todo
$("span").click(function(event) {
	//target the whole li, not just the span
	$(this).parent().fadeOut(300, function() {
		//remove the whole thing
		$(this).remove();
	});
	//stop it click event from bubbling up to parent elements
	event.stopPropagation();
});

