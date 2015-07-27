function where(arr, num) {

    var next = nextNum(arr, num);

    var place = next.getPlaceInArray(arr);



    return place;
}



function nextNum(arr, num) {

    var next = 0;

    for (var i = 0; i < arr.length; i++) {

        next = arr[i];

        if (next >= num) {
            break;
        }

    }

    return next;

}

Number.prototype.getPlaceInArray = function(arr) {

    for (var i = 0; i < arr.length; i++) {

        var num = arr[i];

        if (num == this) {
            return i;
        }


    }

};


where([40, 60], 50);