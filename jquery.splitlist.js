/**
  * Written by Jack Franklin
**/

(function($) {
	$.fn.splitList = function(newListClass) {
		var newListClass = newListClass || "",
			list = this, 
			topNewList = $("<ul></ul>", {"class": newListClass}),
			bttmNewList = $("<ul></ul>", {"class": newListClass}),
			listItems = list.children("li"),
		 	listLength = listItems.size(), 
			splitPoint = Math.ceil(listLength/2);
		
		listItems.each(function(i, item) {
			(i < splitPoint) ? topNewList.append(item) : bttmNewList.append(item);			
		});
		
		list.after(bttmNewList).after(topNewList).remove();
	}
	
})(jQuery);