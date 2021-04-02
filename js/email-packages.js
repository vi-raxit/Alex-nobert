/* Email Packages Javascript */
var $table = $('#b-table');
    $(function () {
        
        $('#toolbar').find('select').change(function () {
            console.log("selected22",$(this).val())
            // $table.bootstrapTable('refreshOptions', {
            //     filterOptions: {
            //         filterAlgorithm: $(this).val()
            //       },
            //     exportDataType: $(this).val()
            // });
            $table.bootstrapTable('filterBy', {
                prenom: $(this).val()
            })
        });
    })

    // $table.bootstrapTable('filterBy', {
    //     prenom: '$1'
    //   })

		var trBoldBlue = $("b-table");

	$(trBoldBlue).on("click", "tr", function (){
			$(this).toggleClass("bold-blue");
});


$('#expiration-date').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
});
$('#delivery-date').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
});
$('#expiry-date').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
});
