function button(type)
{
    //enter button according to type
    var output = document.getElementById('output');
    output.textContent+=type;
}
    
function ac()
{
    //clear output
    var output = document.getElementById('output');
    output.textContent='';
}
    
function enter()
{
    var answer = 0;
    var outputArray = [];
    var output = document.getElementById('output');
    for (var i = 0; i < output.textContent.length; i++)
    {
        outputArray.push(output.textContent[i]);
    }

    var currentNum = '';
    var checker = '';
    var solveArray = [];

    //sort between numbers and operations
    for (var i = 0; i < outputArray.length; i++)
    {
        checker = outputArray[i];
        if (checker === '0' ||
        checker === '1' ||
        checker === '2' ||
        checker === '3' ||
        checker === '4' ||
        checker === '5' ||
        checker === '6' ||
        checker === '7' ||
        checker === '8' ||
        checker === '9' ||
        checker === '0')
        {
            currentNum += checker;
        }
        else
        {
            solveArray.push(currentNum);
            currentNum = '';
            solveArray.push(checker);
        }
    }


    //solve for +, -, * and /
    for (var i = 0; i < solveArray.length; i++)
    {
        if (solveArray[i] === "+")
        {
            solveArray[i-1] = Number(solveArray[i-1]) + Number(solveArray[i+1]);
            answer = i-1;
            solveArray.splice(i, 2);
        }
    }
    for (var i = 0; i < solveArray.length; i++)
    {
        if (solveArray[i] === "-")
        {
            solveArray[i-1] = Number(solveArray[i-1]) - Number(solveArray[i+1]);
            answer = i-1;
            solveArray.splice(i, 2);
        }
    }
    for (var i = 0; i < solveArray.length; i++)
    {
        if (solveArray[i] === "×")
        {
            solveArray[i-1] = Number(solveArray[i-1]) * Number(solveArray[i+1]);
            answer = i-1;
            solveArray.splice(i, 2);
        }
    }
    for (var i = 0; i < solveArray.length; i++)
    {
        if (solveArray[i] === "÷")
        {
            solveArray[i-1] = Number(solveArray[i-1]) / Number(solveArray[i+1]);
            answer = i-1;
            solveArray.splice(i, 2);
        }
    }

    output.textContent = solveArray[answer];
    
}
    