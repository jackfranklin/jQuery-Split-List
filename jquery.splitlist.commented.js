/**
  * Written by Jack Franklin
  * You should never use this version on sites. This is just a commented version to help those learning
**/

//we wrap it in a self-invoking function and create a closure, passing the jQuery object in and assigning a new variable "$" to jQuery.
(function($) {
	$.fn.splitList = function(newListClass) { //add splitList as a new function with one parameter
		var newListClass = newListClass || "", //assign newListClass to be the passed in string or nothing
			list = this, //using this lots is costly
			//create two new lists
			topNewList = $("<ul></ul>", {"class": newListClass}),
			bttmNewList = $("<ul></ul>", {"class": newListClass}),
			listItems = list.children("li"), //get the items that we need to split up
		 	listLength = listItems.size(), //get the number of items to split
			splitPoint = Math.ceil(listLength/2); //the split point is total/2 rounded up. EG 9 items / 2 = 4.5 rounded = 5 in first list, 4 in second
		
		//loop through each item in the list
		listItems.each(function(i, item) { 
			//we use a ternary operator here to make this short & sweet. Essentially it's a big if statement that does the following:
			//1: if i < splitPoint, add the item to the first of the two new lists we created called topNewList
			//2: else, add the item to the second of the new lists, called bttmNewList
			//jQuery's append() method puts the item in as the last child of the element we invoke it on
			(i < splitPoint) ? topNewList.append(item) : bttmNewList.append(item);			
		});
		//add the two new lists and then remove the old one
		list.after(bttmNewList).after(topNewList).remove();
	}
	
})(jQuery);