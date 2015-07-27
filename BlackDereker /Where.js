function where(collection, source) {
    var arr = [];

    var name = source.last;



    for (var i = 0; i < collection.length; i++) {

        var object = collection[i];

        var first = object.first;
        var last = object.last;

        if (last == name) {
            arr.push(object);
        }

    }

    return arr;
}

where([{
    first: 'Romeo',
    last: 'Montague'
}, {
    first: 'Mercutio',
    last: null
}, {
    first: 'Tybalt',
    last: 'Capulet'
}], {
    last: 'Capulet'
});
