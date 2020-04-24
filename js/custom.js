if ($('.add-task').length > 0) {
	$('.add-task').on('click', function(){
		$(this).parent().children('ul').addClass("ul-selector");
	    $('#taskTitle, #taskDetail').val('');
	});
}

if($('#saveTask').length > 0){
	$('#saveTask').on('click', function(){
		if ($('#taskTitle').val() != ''){
	    	var html = '<li class="list-group-item px-1 py-2"> <a data-toggle="modal" data-target="#viewTaskModal">' + $('#taskTitle').val() + '</a> </li>'
	    	$('.ul-selector').append(html);
	    }
		$('.ul-selector').removeClass('ul-selector');
	});
}