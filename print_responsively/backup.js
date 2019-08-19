/**
 * Print payslip depending on size.
 */
function responsivePrint(height, width) {
    var header = $('.payslip-header:first-of-type').outerHeight(),
        off_height = parseInt(height.replace('px', '')) - 50 - header,
        off_width = parseInt(width.replace('px', '')) - 50;
    
    $('#bulkPayslipCon').outerHeight(height).outerWidth(width);

    $('.payslip').each(function () {
        var ps_header = $(this).find('.payslip-header:first-of-type').prop('outerHTML'),
            table_children = $(this).children('.col-md-12:not(".payslip-header"):not(".ps-btn")'),
            init_height = 0, blob_count = 0;

        table_children.each(function () {
            var pre_init_height = init_height;
            var table_child = $(this);

            init_height += table_child.outerHeight();

            if (init_height > off_height) {
                if ((off_height - pre_init_height) > 90) {
                    table_child.after(ps_header + '<div class="col-md-12" id="blob-' + blob_count + '">' + table_child.html() + '</div>');
                 
                    var divs = table_child.find('div');

                    for (var i = 0; i < divs.length; i++) {
                        var table_rows = divs.eq(i).find('table tbody tr');
                        var post_init_height = pre_init_height + divs.eq(i).find('table thead').outerHeight();

                        for (var j = 0; j < table_rows.length; j++) {
                            post_init_height += table_rows.eq(j).outerHeight();

                            if (post_init_height > off_height) {
                                table_rows.eq(j).remove();
                                var blob_div = $('#blob-' + blob_count).find('div').eq(i);
                                blob_table_row = blob_div.find('table tbody tr').eq(j).addClass('display-this-blob');
                            }
                        }
                    }

                    $('#blob-' + blob_count).find('table tbody tr:not(.display-this-blob)').remove();
                    init_height = $('#blob-' + blob_count).outerHeight();
                } else {
                    table_child.before(ps_header);
                    init_height = table_child.outerHeight();
                }
            }
        });

        var total_page = $(this).find('.payslip-header').length;

        $(this).find('.payslip-header').each(function (page_number) {
            var classname = page_number == 0 ? '' : 'force-break page header-margin';
            $(this).addClass(classname).find('.payslip-pager').html((page_number + 1) + '/' + total_page);
        });
    });
}
