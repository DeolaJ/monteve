
function detector(tweets) {
    // Write your code here.
    var strin = tweets;
    var newarray = strin.split("");
    var newarray_len = newarray.length;
    var charac = [newarray[newarray_len-3], newarray[newarray_len-2], newarray[newarray_len-1]];
    var characfinal = charac.join("");
    var final = 0;
    for(i=0; i<newarray_len-3; i++) {
        var test = [],
            testing = [],
            joinedTest = test.join(""),
            joinedTesting = testing.join("");


        for(j=i; j<newarray_len-3; j++) {
            test.push(newarray[j]);
            if((j-i)>2) {
                for(k=j; k<=i; k--) {
                    testing.push(newarray[k]);
                }
                if(joinedTest == joinedTesting) {
                    final = final+joinedTesting.length;
                }
            }
        }

    }
    
    if((final>1)&&(final<11)) {
       return characfinal + " " + "Possible";
    } else if((final>10)&&(final<41)) {
       return characfinal + " " + "Probable";
    } else if((final>40)&&(final<151)) {
       return characfinal + " " + "Escalate";
    } else {
       return characfinal + " " + "Ignore";
    }   
}



detector("xxxayyySPY");

/*first split the string into an array using the split function
then separate the array elements into the last three elements and the others preceding it
the last three elements are joined to form the first three characters of the output

then the second part is iterated to get the number*/