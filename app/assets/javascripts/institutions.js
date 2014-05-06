// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
	$('#dialog_form').hide();
	$('#add_authorization_view').click(function() {
		$('#dialog_form').dialog( {
			width: 800,
			height: 200,
			modal: true,
			closeOnEscape: true,
			draggable: true,
			resizable: false,
			title: "Grant New Role",
			show: {
				effect: "blind",
				duration: 1000
			},
			hide: {
				effect: "toggle",
				duration: 1000
			},
			open: function()
			{
				$("#dialog_form").dialog("open");
			},
      close: function() {
        $('#dialog-form').dialog("close");
        $(this).find('form')[0].reset();
      }
		}).prev ().find (".ui-dialog-titlebar-close").show();
		return false
	});
});


$(function() {
	$("#cancel_action").bind("click",function() {
		$("#flash_notice").remove();
	});
});


$(function() {
	$(".tip").tooltip();
});


// //automatically checks Institutional reviewer role when Institutional Administrator role gets checked
$(function() {
	$('#5').change(function(){
		if ($('#5').is(':checked')) { 
			$('#4').prop('checked', true);
		}
	});
});

// alert message if Institutional Admin remove his own Inst admin role
$(function() {
	$('#current_admin_with_alert').click(function(){
		if (!$('#5').is(':checked')) { 

			if (confirm( "If you remove yourself from the Institutional Administrator role you will lose all administrative permissions.")){
				return true;
			}
			else {
				return false;
			};
		};
	});
});



