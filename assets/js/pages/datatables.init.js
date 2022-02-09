$(document).ready(function() {

    var theTable
    theTable = $("#datatable").DataTable(), $("#datatable-buttons").DataTable({
        lengthChange: !1,
        buttons: ["copy", "excel", "pdf", "colvis"]
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $(".dataTables_length select").addClass("form-select form-select-sm");


    var emailTable;
    emailTable = $("#emailDataTable").DataTable(), $("#emailDataTable-btns").DataTable({
        lengthChange: !1,
        buttons: ["copy", "excel", "pdf", "colvis"],
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $(".dataTables_lengthselect").addClass("form-select form-select-sm");

    $('#inputSearch').keyup(function() {
        emailTable.search($(this).val()).draw();
    });

    $('#length_change').change(function() {
        emailTable.page.len($(this).val()).draw();
    });


    // Name of the filename when exported (except for extension)
    var export_filename = 'Filename-' + tools.date('%d-%M-%Y');

    // Configure Export Buttons
    new $.fn.dataTable.Buttons(emailTable, {
        buttons: [{
            text: '<i class="fa fa-lg fa-clipboard"></i>',
            extend: 'copy',
            className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-copy ttip'
        }, {
            text: '<i class="fa fa-lg fa-file-text-o"></i>',
            extend: 'csv',
            className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-csv ttip',
            title: export_filename,
            extension: '.csv'
        }, {
            text: '<i class="fa fa-lg fa-file-excel-o"></i>',
            extend: 'excel',
            className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-xls ttip',
            title: export_filename,
            extension: '.xls'
        }, {
            text: '<i class="fa fa-lg fa-file-pdf-o"></i>',
            extend: 'pdf',
            className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-pdf ttip',
            title: export_filename,
            extension: '.pdf'
        }]
    });

    // Add the Export buttons to the toolbox
    emailTable.buttons(0, null).container().appendTo('#export-assets');


    // Configure Print Button
    new $.fn.dataTable.Buttons(emailTable, {
        buttons: [{
            text: '<i class="fa fa-lg fa-print"></i> Print Assets',
            extend: 'print',
            className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn export-print'
        }]
    });

    // Add the Print button to the toolbox
    emailTable.buttons(1, null).container().appendTo('#print-assets');


    // Select Buttons
    new $.fn.dataTable.Buttons(emailTable, {
        buttons: [{
            extend: 'selectAll',
            className: 'btn btn-xs btn-primary p-5 m-0 width-70 assets-select-btn'
        }, {
            extend: 'selectNone',
            className: 'btn btn-xs btn-primary p-5 m-0 width-70 assets-select-btn'
        }]
    });

    // Add the Select buttons to the toolbox
    emailTable.buttons(2, null).container().appendTo('#select-assets');


    // Configure Selected Assets Buttons (delete, timeline, etc)
    new $.fn.dataTable.Buttons(emailTable, {
        buttons: [{
            text: 'Delete Selected',
            action: function() {
                assets.delete_from_list(emailTable, assets.selected_ids(emailTable));
            },
            className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn toolbox-delete-selected'
        }, {
            text: 'View Timeline',
            action: function() {
                console.log(assets.selected_ids(emailTable));
            },
            className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn'
        }]
    });

    // Add the selected assets buttons to the toolbox
    emailTable.buttons(3, null).container().appendTo('#selected-assets-btn-group');


    // Configure Select Columns
    new $.fn.dataTable.Buttons(emailTable, {
        buttons: [{
            extend: 'collection',
            text: 'Select Columns',
            buttons: [{
                extend: 'columnsToggle',
                columns: ':not([data-visible="false"])'
            }],
            className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn'
        }],
        fade: true
    });

    // Add the select columns button to the toolbox
    emailTable.buttons(4, null).container().appendTo('#toolbox-column-visibility');



});