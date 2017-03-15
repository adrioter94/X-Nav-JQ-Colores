// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
	$("#orderedlist").addClass("red");
	$("#orderedlist li").addClass("yellow");
	$("#orderedlist li:last").hover(function(){
		$(this).addClass("blue");
	},function(){
		$(this).removeClass("blue");
	});
});