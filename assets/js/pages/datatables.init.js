$(document).ready(function() {

    var theTable
    theTable = $("#datatable").DataTable(), $("#datatable-buttons").DataTable({
        lengthChange: !1,
        buttons: ["copy", "excel", "pdf", "colvis"]
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $(".dataTables_length select").addClass("form-select form-select-sm");

    var emailTable;
    emailTable = $("#emailDataTable").DataTable(), $("#emailDataTable-btns").DataTable({
        lengthMenu: [
            [15, 30, 50, -1],
            ["15 Rows", "30 Rows", "50 Rows", "Everything"],

        ],

        language: {
            searchPlaceholder: "Search through Records ...",
            search: "",
            lengthMenu: ` <select name='length_change' class="form-control selectpicker table-rows-selector show-tick" data-style="btn-primary" id='length_change' title="Select A range">
                            <option value='5'>10 Rows</option>
                            <option value='50' selected="true">50 Rows</option>
                            <option value='100'>100 Rows</option>
                            <option value='150'>150 Rows</option>
                            <option value='200'>200 Rows</option>
                            <option value='-1'>All Rows</option>
                        </select>`

        },
        "pageLength": 50,
        lengthChange: 50,
        sDom: 'f<"dataTables__top"lfB>rt<"dataTables__bottom"ip><"clear">',
        buttons: ["copy", "print", "excel", "csv", "pdf", "colvis"],




    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $('.dataTables_length > label').addClass(''), $('.dataTables_length select btn-sm').addClass('form-control selectpicker show-tick table-rows-selector d-flex'), $('.dataTables_filter').eq(1).addClass('d-none d-xl-flex'), $('.dataTables_filter').eq(0).addClass('d-xl-none'), $('.dataTables_length select').attr("data-style", "btn-primary"), $('.dataTables__top').addClass('pr-15px pl-15px d-flex align-items-center w-100'), $('.dataTables_filter input').addClass('emailSearch'), $('#emailDataTable-btns_filter').addClass('mb-3 d-xl-none'), $('.buttons-copy').prepend('<span class="bx bx-copy font-size-16 align-middle me-2"></span>').children('span').eq(1).addClass('d-none d-xxl-inline'), $('.buttons-pdf').addClass('d-none'), $('.buttons-csv').addClass('d-none'), $('.buttons-excel').addClass('d-none'), $('.buttons-print').prepend('<span class="bx bx-printer font-size-16 align-middle me-2"></span>'), $('#emailDataTable-btns_wrapper .dt-buttons').prepend(`<div class="dropdown m-0 d-flex">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <a href="#" class="btn btn-secondary dropdown-toggle boarder-right-0 d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <i class="bx bxs-download font-size-16 align-middle me-2"></i> <span class="d-none d-xxl-inline">Download</span><i class="mdi mdi-chevron-down"></i>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </a>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div class="dropdown-menu" style="">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <a class="dropdown-item" data-table-action="pdf" href="#">Download as PDF</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <a class="dropdown-item buttons-html5" data-table-action="excel" aria-controls="emailDataTable-btns" tabindex="0"  href="#">Download as Excel File</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <a class="dropdown-item" data-table-action="csv" href="#">Download as CSV file</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>`), $('.buttons-print').children('span').eq(1).addClass('d-none d-xxl-inline'), $('.buttons-colvis').prepend('<span class="mdi mdi-eye-check-outline font-size-16 align-middle me-2"></span>').children('span').eq(1).addClass('d-none d-xxl-inline');

    $("body").on("click", "[data-table-action]", function(a) {
        // alert("clicked")
        a.preventDefault();
        var b = $(this).data("table-action");
        if ("excel" === b && $(this).closest(".dataTables_wrapper").find(".buttons-excel").trigger("click"), "csv" === b && $(this).closest(".dataTables_wrapper").find(".buttons-csv").trigger("click"), "pdf" === b && $(this).closest(".dataTables_wrapper").find(".buttons-pdf ").trigger("click"), "print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreenData" === b) {
            var c = $(this).parent().parent().parent().parent().parent().parent().parent()
            c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
        }
    })
    $('#inputSearch').keyup(function() {
        emailTable.search($(this).val()).draw();
    });

    $('#length_change').change(function() {
        emailTable.page.len($(this).val()).draw();
    });

    $('body').on('keyup', '#inputSearch', function() {
        var theNewVal = $(this).val()
        $('#emailDataTable-btns_filter input').val(theNewVal)
    });
    $('body').on('keyup', '#emailDataTable-btns_filter input', function() {
        var theNewVal = $(this).val()
        $('#inputSearch').val(theNewVal)
    })


    // // Name of the filename when exported (except for extension)
    // var export_filename = 'Filename-' + tools.date('%d-%M-%Y');

    // // Configure Export Buttons
    // new $.fn.dataTable.Buttons(emailTable, {
    //     buttons: [{
    //         text: '<i class="fa fa-lg fa-clipboard"></i>',
    //         extend: 'copy',
    //         className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-copy ttip'
    //     }, {
    //         text: '<i class="fa fa-lg fa-file-text-o"></i>',
    //         extend: 'csv',
    //         className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-csv ttip',
    //         title: export_filename,
    //         extension: '.csv'
    //     }, {
    //         text: '<i class="fa fa-lg fa-file-excel-o"></i>',
    //         extend: 'excel',
    //         className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-xls ttip',
    //         title: export_filename,
    //         extension: '.xls'
    //     }, {
    //         text: '<i class="fa fa-lg fa-file-pdf-o"></i>',
    //         extend: 'pdf',
    //         className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-pdf ttip',
    //         title: export_filename,
    //         extension: '.pdf'
    //     }]
    // });

    // // Add the Export buttons to the toolbox
    // emailTable.buttons(0, null).container().appendTo('#export-assets');


    // // Configure Print Button
    // new $.fn.dataTable.Buttons(emailTable, {
    //     buttons: [{
    //         text: '<i class="fa fa-lg fa-print"></i> Print Assets',
    //         extend: 'print',
    //         className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn export-print'
    //     }]
    // });

    // // Add the Print button to the toolbox
    // emailTable.buttons(1, null).container().appendTo('#print-assets');


    // // Select Buttons
    // new $.fn.dataTable.Buttons(emailTable, {
    //     buttons: [{
    //         extend: 'selectAll',
    //         className: 'btn btn-xs btn-primary p-5 m-0 width-70 assets-select-btn'
    //     }, {
    //         extend: 'selectNone',
    //         className: 'btn btn-xs btn-primary p-5 m-0 width-70 assets-select-btn'
    //     }]
    // });

    // // Add the Select buttons to the toolbox
    // emailTable.buttons(2, null).container().appendTo('#select-assets');


    // // Configure Selected Assets Buttons (delete, timeline, etc)
    // new $.fn.dataTable.Buttons(emailTable, {
    //     buttons: [{
    //         text: 'Delete Selected',
    //         action: function() {
    //             assets.delete_from_list(emailTable, assets.selected_ids(emailTable));
    //         },
    //         className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn toolbox-delete-selected'
    //     }, {
    //         text: 'View Timeline',
    //         action: function() {
    //             console.log(assets.selected_ids(emailTable));
    //         },
    //         className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn'
    //     }]
    // });

    // // Add the selected assets buttons to the toolbox
    // emailTable.buttons(3, null).container().appendTo('#selected-assets-btn-group');


    // // Configure Select Columns
    // new $.fn.dataTable.Buttons(emailTable, {
    //     buttons: [{
    //         extend: 'collection',
    //         text: 'Select Columns',
    //         buttons: [{
    //             extend: 'columnsToggle',
    //             columns: ':not([data-visible="false"])'
    //         }],
    //         className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn'
    //     }],
    //     fade: true
    // });

    // // Add the select columns button to the toolbox
    // emailTable.buttons(4, null).container().appendTo('#toolbox-column-visibility');



});