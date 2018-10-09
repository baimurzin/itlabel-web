$(document).ready(function(){
    function testAnim(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
    };
    $('#modal').on('show.bs.modal', function (e) {
        var anim = $('#modal-animated').attr('class');
        testAnim(anim);
    })
    $('#modal').on('hide.bs.modal', function (e) {
        var anim = $('#modal-animated').attr('class');
        testAnim(anim);
    })
    $(function() {
        $('select').selectric();
    });
    $(".nav-link, .footer-menu-link").on("click", function() {
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 600);
    });
    $('input[name="phone"]').inputmask({"mask": "+7(999) 999-9999"});
})
