/************************************************************************************
 
jQuery Horizontal and Vertical Tabs

Author: http://www.theninjaofweb.com/tools/

Free for personal use! 

For commercial use you need to purchase this script! For example if you sell it as a
part of a package or website, implement it for a client’s website, etc.

************************************************************************************/


$.fn.Tabs = function() {	
	var args = arguments[0] || {};    
	direction = args.direction; //horizontal or vertical tab
	startindex = args.startindex; //horizontal or vertical tab
	
	if(!direction){
		direction = 'horizontal';
	}
	
	if(!startindex){
		startindex = '0';
	}
	
	//horizontal tab
	if(direction == 'horizontal'){
			
		var this_id = $(this).attr('id');	
			
		//get datas
		$tabtexts = new Array();
		$tabtitles = new Array();
		
		
		$('li',this).each(function(){
			$tabtitles.push( $('label',this).html() );
			$('label',this).remove();
			$tabtexts.push( $(this).html() );
			
		})
		
		eval('$'+this_id+'_tabtexts = $tabtexts');
		eval('$'+this_id+'_tabtitles = $tabtitles');
		
		
		//create tab ui
			
		
		//add tab holder
		$(this).addClass('jq_h_tab');
		$(this).html('');
		
		//add elements from array
		for(i=0;i<$tabtitles.length;i++) {
			if(i == startindex){
				$(this).append('<li class="active" id="'+$(this).attr('id')+'-tab-'+i+'"><a href="#">'+$tabtitles[i]+'</a></li>');
			}else{
				$(this).append('<li class="inactive" id="'+$(this).attr('id')+'-tab-'+i+'"><a href="#">'+$tabtitles[i]+'</a></li>');
			}
		}
		
		
		
		
		//add content bg
		$(this).after('<div id="'+this_id+'-content" class="jq_h_tab_content"></div>');
		//add content
		$('#'+this_id+'-content').append($tabtexts[startindex]);
		
		
		//display content in tab on click
		$(this).find('li').click(
			function(){				
				$('#'+this_id+' li').attr('class','inactive');
				$(this).attr('class','active');				
				
				var currind = $(this).attr('id');
				currind = Number(currind.replace(this_id+'-tab-',''));
				
				
				var currtabid = $(this).parent().attr('id');
				eval('currtxtarray = $'+currtabid+'_tabtexts');
				$('#'+currtabid+'-content').html(currtxtarray[currind]);
				
				return false;
			}
		);
		
			
	}else{
		var this_id = $(this).attr('id');	
			
		//get datas
		$tabtexts = new Array();
		$tabtitles = new Array();
		
		
		$('li',this).each(function(){
			$tabtitles.push( $('label',this).html() );
			$('label',this).remove();
			$tabtexts.push( $(this).html() );
			
		})
	
		eval('$'+this_id+'_tabtexts = $tabtexts');
		eval('$'+this_id+'_tabtitles = $tabtitles');
		
		
		//create tab ui
			
		
		//add tab holder
		$(this).addClass('jq_v_tab');
		$(this).html('');
	
	
		//add elements from array
		for(i=0;i<$tabtitles.length;i++) {
			if(i == startindex){
				$(this).append('<li class="active" id="'+$(this).attr('id')+'-tab-'+i+'"><a href="#">'+$tabtitles[i]+'</a></li>');
			}else{
				$(this).append('<li class="inactive" id="'+$(this).attr('id')+'-tab-'+i+'"><a href="#">'+$tabtitles[i]+'</a></li>');
			}
		}
		
		
		//add content bg
		$(this).after('<div id="'+this_id+'-content" class="jq_v_tab_content"></div>');
		//add content
		$('#'+this_id+'-content').append($tabtexts[startindex]);
		
		
		//display content in tab on click
		$(this).find('li').click(
			function(){				
				$('#'+this_id+' li').attr('class','inactive');
				$(this).attr('class','active');				
				
				var currind = $(this).attr('id');
				currind = Number(currind.replace(this_id+'-tab-',''));
				
				
				var currtabid = $(this).parent().attr('id');
				eval('currtxtarray = $'+currtabid+'_tabtexts');
				$('#'+currtabid+'-content').html(currtxtarray[currind]);
				
				return false;
			}
		);
	}
}



