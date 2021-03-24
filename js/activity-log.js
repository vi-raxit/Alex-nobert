/* Activity Javascript */
//Filter
var $table = $('#b-table');
    $(function () {
        
        $('#toolbar').find('select').change(function () {
            $table.bootstrapTable('filterBy', {
                // prenom: $(this).val()
            })
        });
})
