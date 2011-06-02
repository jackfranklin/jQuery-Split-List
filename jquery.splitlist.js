/**
  * Written by Jack Franklin
**/

(function($) {
	$.fn.splitList = function() {
		var list = this, topNewList = $("<ul></ul>"), bttmNewList = $("<ul></ul"),
			listItems = list.children("li"),
		 	listLength = listItems.size(), 
			splitPoint = Math.ceil(listLength/2);
		
		listItems.each(function(i, item) {
			(i < splitPoint) ? topNewList.append(item) : bttmNewList.append(item);			
		});
		
		list.after(bttmNewList).after(topNewList).remove();
	}
	
})(jQuery);