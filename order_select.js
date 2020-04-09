(function($) {

    $.fn.orderSelect = function(options) {
    
        return this.each(function(index, el) {
            var select = $(el),
                val = select.val(),
                opt = select.find('option').sort(function (a,b) { 
                    return a.text.toUpperCase().localeCompare(b.text.toUpperCase()) 
                });
            select.append(opt).addClass('js-ordered');
            select.val(val).trigger('change');
        });
    };
    
})(jQuery);