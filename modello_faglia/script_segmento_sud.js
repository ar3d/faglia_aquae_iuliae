$(document).ready(function() {

	$(".popup-me_3").click(function(){

		pop_init_3( "La faglia corre alla base delle montagne lungo la linea che separa le rocce carbonatico-dolomitiche dal ghiaione del piano alluvionale e, in alcuni punti, si presenta con una scarpata alta 3 m.  Verso sudest la faglia si divide in più linee di frattura." );

	});

});

function pop_init_3( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}