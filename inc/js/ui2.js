// JavaScript Document

$(document).ready(function() {
	
	/*//SLIDESHOWS
	$("a[rel^='lightbox']").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'inside',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-inside">' + title + '</span>';
		}
	});
	
	//POPUP VIDEO WINDOWS
	$(".vid_link").fancybox({
				'width'				: '75%',
				'height'			: '75%',
				'autoScale'			: false,
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'type'				: 'iframe'
			});
	*/
		
	$("#footnotes_slider").hide("fast");	
	
	function initFootnotes()
	{
		var footnotesText = [];
		$("#footnotes P").each(function() { footnotesText.push($(this).html()) });
		
		$("span.footnote").click(function () {
			var whichNote = parseInt($(this).html())-1;
			
			if ($("#footnotes_slider").is(":hidden")) 
			{
				$("#footnotes_text").html(footnotesText[whichNote]);
				$("#footnotes_slider").show("fast");
			} 
			else 
			{
			  $("#footnotes_slider").hide("fast");
			  if ($("#footnotes_text").html() != footnotesText[whichNote])
			  {
				  $("#footnotes_text").html(footnotesText[whichNote]);
				  $("#footnotes_slider").show("fast");
			  }
			}
			
		});
	}
	$("#footnote_closer").click(function () 
	{
		$("#footnotes_slider").hide("fast");
	});	
	
	function initMainNav() 
	{
		var mytimer = null;
		$('#mainnav A').mouseleave(function() {
		  	mytimer = setTimeout(function() { hideSubNav(null); }, 2000);
		});
		$('#mainnav A').click(function() {
			clearTimeout(mytimer);
			currentDiv = $(this);
			hideSubNav(currentDiv);
			if ( $(this).attr('subnav') !== undefined) 
			{
				//$("#" + $(this).attr('subnav')).css('display', 'block');
				$("#" + $(this).attr('subnav')).toggle("fast");
			}
		});
		$('#subnav_holder DIV').mouseleave(function() {
		  	hideSubNav(null);
		});
		$('#subnav_holder DIV').mouseenter(function() {
			clearTimeout(mytimer);
		});
	}
	
	function hideSubNav(currentDiv) {
		var arr = (currentDiv != null)? $('#subnav_holder DIV').not($("#" + currentDiv.attr('subnav'))) : $('#subnav_holder DIV');
		jQuery.each(arr, function() {
		  $(this).css('display', 'none');
	   });
	}
	
	initMainNav();
	initFootnotes();
});
