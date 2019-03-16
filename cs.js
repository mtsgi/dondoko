$("body").append("<div id='don-msg'>有効です:dondoko<br><a href='http://sp.pf.mbga.jp/12008305'>モバマスへ</a><a href='http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fgame_center%2Fdrum_master_title%3Fl_frm%3DGame_center_index_1%26rnd%3D841241778'>どんどこへ</a><a id='don-ms'>選曲画面</a></div>");
$("body").append("<div id='don-pu'>Music Select<hr>・楽曲<a id='don-pu-0'>お願い！シンデレラ</a><a id='don-pu-1'>Star!!</a><a id='don-pu-2'>Take me☆Take you</a>・難易度<a id='don-pu-easy'>かんたん</a><a id='don-pu-normal'>ふつう</a><a id='don-pu-hard'>むずかしい</a><a id='don-pu-start'>演奏開始</a></div>");
var music = 0;
$("#don-ms").on("click", ()=> $("#don-pu").toggle() );
$("#don-pu-0").on("click", ()=>{ $(".js_music_select")[0].click(); music=0 });
$("#don-pu-1").on("click", ()=>{ $(".js_music_select")[1].click(); music=1 });
$("#don-pu-2").on("click", ()=>{ $(".js_music_select")[2].click(); music=2 });
$("#don-pu-easy").on("click", ()=> $(".easy")[music].click() );
$("#don-pu-normal").on("click", ()=> $(".normal")[music].click() );
$("#don-pu-hard").on("click", ()=> $(".hard")[music].click() );
$(".js_music_select")[0].on("click", ()=>{
    $("#don-msg").text( $(this).attr("data-id") );
});
$("#don-pu-start").on("click", ()=> $(".btn_play_music")[0].click() );
$(document).on("click", function(){
    var evt = $.Event('keyup');
    evt.keyCode = 68;
    $(document).trigger(evt);
});