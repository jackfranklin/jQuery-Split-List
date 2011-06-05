This is a simple plugin to split a list into two at the half way point. 

To use, just call it on the list you wish to split into two, eg:
$("#myBigList").splitList();

If you want you can pass a string into the splitList() function which will be the name of the class applied to both the new lists created like so:
$("#myBigList").splitList("smallerList");
This is an optional feature.

It will insert two unordered lists after #myBigList, the first list containing the first half of the items in the original list, the second list containing the second half. The initial list is then removed from the DOM.

Any questions or feature requests, ask @Jack_Franklin on Twitter.
