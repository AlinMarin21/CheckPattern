////
////

const patternInput = document.querySelector('.pattern-input');
const stringInput = document.querySelector('.string-input');

const responseBox = document.querySelector('.response-box');

const checkButton = document.querySelector('.check-button');
const resetButton = document.querySelector('.reset-button');

const warningMessageNotification = document.querySelector('.warning-message-notification');

//// Event Listener /////

checkButton.addEventListener("click", function() {

    const patternText = patternInput.value;
    const stringText = stringInput.value;
 
    checkPattern(stringText, patternText);

});

resetButton.addEventListener("click", function() {

    responseBox.innerHTML = '';

    patternInput.value = '';
    stringInput.value = '';
});

////
////

function checkPattern(stringText, patternText)
{
    const string = stringText;
    const pattern = patternText;

    responseBox.innerHTML = '';

    let regexPattern;

    try
    {
        if(pattern === '' || string === '')
        {
            throw "Fields are not filled";
        }
    }
    catch(err)
    {
        console.error(err);
        warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
                
        setTimeout(function() {
            warningMessageNotification.style.display = "none";
        }, 3000);

        warningMessageNotification.style.display = "block";
        return null;
    }

    try 
    {
        regexPattern = new RegExp(pattern);
    }
    catch(err)
    {
        console.error(err);
        warningMessageNotification.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + '   ' + err;
                
        setTimeout(function() {
            warningMessageNotification.style.display = "none";
        }, 3000);

        warningMessageNotification.style.display = "block";
        return null;
    }

    const isFound = regexPattern.test(string);

    console.log(isFound);
    
    let response = document.createElement("p");
    let responseContent;

    if(isFound == true)
    {
        console.log("There is a match");
        responseContent = document.createTextNode("There is a match.");
    }
    else
    {
        console.log("No match");
        responseContent = document.createTextNode("No match.");
    }

    response.appendChild(responseContent);
        
    responseBox.appendChild(response);
}

