import $ from 'jquery';
import selectize from 'selectize'

$('#instrument').selectize(
	{
		create: true,
		sortField: 'text',
		onChange: function(value) {
			if (value != '') {
				let instrument_param = '<input type="hidden" name="instrument" value="'+value+'">';
				$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="instrument_update">' + instrument_param + '</form>').appendTo($(document.body)).submit();
			}
		}
	});
