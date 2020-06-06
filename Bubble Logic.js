// First loop gives iteration (0, 1, 2 ,...)
    for (let i = 0; i < len; i++) {
 
        // Second Loop gives Subiteration
        // The limit of following for loop is set by the --> len-i-1
        for (let j = 0; j < len-i-1; j++) {
            // check if the current element is greater than its next element
            // if yes then swap the element
            if (inputArr[j] > inputArr[j + 1]) {
                // Following block of code does the operation of swapping
                let tmp = inputArr[j];  // put the current element in a temporary variable
                inputArr[j] = inputArr[j + 1]; // put the next element at the place of current variable
                inputArr[j + 1] = tmp; // put the element inside temporary variable in place of current variable 
            }
        }
    }

