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