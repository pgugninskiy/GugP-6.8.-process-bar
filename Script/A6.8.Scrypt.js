let progress = 1;

$("#one").click(function(){
		progress+=1;
		$("#prg").css('width', progress + '%' );
	    });

$("#two").click(function(){ 
		progress+=3;
		$("#prg").css('width', progress + '%' );
	    });

$("#three").click(function(){
		progress+=7;
		$("#prg").css('width', progress + '%' );
	    });

