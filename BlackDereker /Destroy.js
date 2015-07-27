function destroyer(arr) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    var newArr = [];
    for (var j = 0; j < arr.length; j++) {
        var Lock = false;
        var value = arr[j];
        for (var x = 0; x < args.length; x++) {
            var argValue = args[x];
            if (value == argValue) {
                Lock = true;
            }
        }
        if (!Lock) {
            newArr.push(value);
        }
    }
    return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);