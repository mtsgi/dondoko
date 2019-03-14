$(document).on("click", function(){
    var evt = $.Event('keyup');
    evt.keyCode = 68;
    $(document).trigger(evt);
});