
$( function() {
	
	var currentMousePos = { x: -1, y: -1 };
	  $(document).mousemove(function(event) {
			currentMousePos.x = event.pageX;
			currentMousePos.y = event.pageY;
	  });
	
	$( '.inlineItem' ).each( function() {
		var i = this;
		var popup = $( '#' + i.name.replace( /_link$/, '' ) );
		popup.css({
			marginTop: '0px',
			marginLeft: '0px',
			display: 'block',
			position: 'absolute',
			left: '-9999px',
			top: '-9999px'
		});
		
		i.onmouseover = function() {
			var x = $(i);
			
			var left = currentMousePos.x;
			var popupWidth = popup.width();
			var docWidth = $(document).width();
			
			console.log( left + " , " + popupWidth );
			console.log ( (left + popupWidth )+" > "+docWidth )
			if ( left + popupWidth > docWidth )
			{
				left = docWidth - popupWidth;
			}
			
			popup.css({
				  top: ( currentMousePos.y + 20 ) + "px",
				  left: left + "px",
			 });
		};
		
		i.onmouseout = function() {
			popup.css({
				left: '-9999px',
				top: '-9999px'
			});
		};
		
	} );
	
} );

function saveWatchStatus( bugid, inp )
{
	$.ajax( 'ajax/set_tracker_subscribe', {
		data: { Target: bugid, 'State': inp.checked ? 1 : 0 },
		onSuccess: function( ro ) {
			$( '#'+bugid+'_watched' ).innerHTML = ro.responseText;
		}
	} );
}
