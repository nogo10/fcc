function mutation(arr) {

    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();

    for (var i = 0; i < secondWord.length; i++) {

        var letter = secondWord[i];

        var Lock = false;

        for (var j = 0; j < firstWord.length; j++) {

            var letter1 = firstWord[j];
            
            if (letter == letter1) {

                Lock = true;

            }

        }

        if (!Lock) {

            return false;
        }


    }

    return true;
}

mutation(['hello', 'hey']);