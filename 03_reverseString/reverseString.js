const reverseString = function(text) {
    let reverseText = "";
    for(let i=0; i<= text.length ; i++ ){
     reverseText += text.charAt(text.length-i);
    }
    return reverseText;   
};

// Do not edit below this line
module.exports = reverseString;
