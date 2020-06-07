
function insertion_sort(UnSort) 
{   
    let len = UnSort.length;
    // Take the temporary element using this first iteration 
    // Unsorted sub-list will compare with all sorted list 
	for (var n = 1; n < len; n++) {
        // Take a temporary variable as a temp
		var tmp = UnSort[n]; 
		// This loop will be used to compare with sorted sub-list.
        for (var m = n - 1; m >= 0 && (UnSort[m] > tmp); m--) 
        {
			UnSort[m + 1] = UnSort[m];
		}
		UnSort[m + 1] = tmp;
    }
}
var a = [ 5,4,10,6,1,2];
// call insertion sort function defined above
insertion_sort(a);
console.log(a);
