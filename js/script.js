var ans = '0';
var brackets = [];
var shiftMode = false;
var alphaMode = false;
var bracketPairs = 0;

var calcMode = "MATH";
var modeTwo = 'D';
var modePressedAmount = 0;
var statTypes = false;

var calc = [];

function button(type)
{
    var input = document.getElementById('numInput');

    if (modePressedAmount != 0)
    {
        if (type === "1")
        {
            switch (modePressedAmount) {
                case 1:
                    calcMode = 'MATH';
                    modePressedAmount = 0;
                    var output = document.getElementById('modeOutput');
                    output.textContent = '';
                    screenMove();
                    return;
                    break;
                case 2:
                    modeTwo = 'D';
                    modePressedAmount = 0;
                    var output = document.getElementById('modeOutput');
                    output.textContent = '';
                    screenMove();
                    return;
                    break;
            
                default:
                    break;
            }
        }
        else if (type === "2")
        {
            switch (modePressedAmount) {
                case 1:
                    //calcMode = 'STAT';
                    modePressedAmount = 0;
                    statTypes = true;
                    var output = document.getElementById('modeOutput');
                    output.style.fontSize = "15px";
                    output.textContent = '1:1-VAR 2:a+bX 3:_+cX2 4:In X 5:e^x 6:a•b^x 7:a•X•b 8:1/x';
                    return;
                    break;
                case 2:
                    modeTwo = 'R';
                    modePressedAmount = 0;
                    var output = document.getElementById('modeOutput');
                    output.textContent = '';
                    screenMove();
                    return;
                    break;
            
                default:
                    break;
            }
        }
    }

    if (statTypes)
    {
        if (type === "1")
        {
            calcMode = 'STAT';
            statTypes = false;
            var output = document.getElementById('modeOutput');
            output.textContent = '';
            screenMove();
            return;
        }
    }

    if (shiftMode)
    {
        switch (type) {
            case '^-1':
                input.value += '!';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'c':
                input.value += 'p';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'Pol(':
                input.value += 'Rec(';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case '^3':
                input.value += '3√';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case '^':
                input.value += '√';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'log':
                input.value += '×10^';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'In':
                input.value += 'e^';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'Sin':
                input.value += 'Sin-1';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'Cos':
                input.value += 'Cos-1';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'Tan':
                input.value += 'Tan-1';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'M+':
                input.value += 'M-';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'EXP':
                input.value += 'π';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
        
            default:
                break;
        }
    }

    if (alphaMode)
    {
        switch (type) {
            case '-':
                input.value += 'A';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case '°':
                input.value += 'B';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'Sin':
                input.value += 'D';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'Cos':
                input.value += 'E';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'Tan':
                input.value += 'F';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case ')':
                input.value += 'X';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case ',':
                input.value += 'Y';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
            case 'M+':
                input.value += 'M';
                shiftMode = false;
                alphaMode = false;
                mode();
                return;
                break;
        
            default:
                break;
        }
    }

    shiftMode = false;
    alphaMode = false;
    mode();
    input.value += type;
}

//#region deletes

function acButton()
{
    var input = document.getElementById('numInput');
    var output = document.getElementById('numOutput');
    calc = [];
    input.value = '';
    output.textContent = '';
    output.style.fontSize = '40px';
    modePressedAmount = 0;
}

function delButton()
{
    if (shiftMode)
    {
        acButton();
        return;
    }
    var input = document.getElementById('numInput');
    var num = input.value
    var newNum = num.substring(0, num.length - 1);
    input.value = newNum;
}

//#endregion deletes

//#region operations

function equalsButton()
{
    if (shiftMode)
    {
        var input = document.getElementById('numInput');
        input.value += '%';
        shiftMode = false;
        alphaMode = false;
        mode();
        return;
    }
    var input = document.getElementById('numInput');
    var output = document.getElementById('numOutput');
    output.style.fontSize = '40px';
    var currentNum = '';
    var numChecker;
    var result;

    var inputArray = [];
    console.log(inputArray);
    var s = input.value.toString();
    for (var i = 0; i < s.length; i++) 
    {
        inputArray.push(s.charAt(i));
    }
    //BIDMAS
    for (var i = 0; i < inputArray.length; i++)
    {
        numChecker = inputArray[i];
        if (
            numChecker === '.' ||
            numChecker === '0' ||
            numChecker === '1' ||
            numChecker === '2' ||
            numChecker === '3' ||
            numChecker === '4' ||
            numChecker === '5' ||
            numChecker === '6' ||
            numChecker === '7' ||
            numChecker === '8' ||
            numChecker === '9'
        )
        {
            currentNum += numChecker;
        }
        else if (numChecker === 'π')
        {
            currentNum += Number(Math.PI);
        }
        else if (currentNum === '' && numChecker === '-' && calc[calc.length -1][0] != 'brac')
        {
            if (calc[calc.length - 1] === null || [calc.length - 1][0] != 'brac')
                currentNum += numChecker;
        }
        else if (currentNum === '' && numChecker === '-' && i === 0)
        {
           currentNum += numChecker;
        }
        else if (numChecker === 'A' && inputArray[i + 1] === 'n' && inputArray[i + 2] === 's')
        {
            console.log('Ans is ' + ans);
            inputArray.splice(i+1, 2);

            currentNum += ans;
        }
        else if (numChecker === 'S' && inputArray[i + 1] === 'i' && inputArray[i + 2] === 'n' && inputArray[i + 3] === '-' && inputArray[i + 4] === '1')
        {
            inputArray.splice(i+1, 4);

            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("op");
            subCalc.push("asin");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === 'S' && inputArray[i + 1] === 'i' && inputArray[i + 2] === 'n')
        {
            inputArray.splice(i+1, 2);

            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("op");
            subCalc.push("sin");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === 'C' && inputArray[i + 1] === 'o' && inputArray[i + 2] === 's' && inputArray[i + 3] === '-' && inputArray[i + 4] === '1')
        {
            inputArray.splice(i+1, 4);

            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("op");
            subCalc.push("acos");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === 'C' && inputArray[i + 1] === 'o' && inputArray[i + 2] === 's')
        {
            inputArray.splice(i+1, 2);

            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("op");
            subCalc.push("cos");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === 'T' && inputArray[i + 1] === 'a' && inputArray[i + 2] === 'n' && inputArray[i + 3] === '-' && inputArray[i + 4] === '1')
        {
            inputArray.splice(i+1, 4);

            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("op");
            subCalc.push("atan");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === 'T' && inputArray[i + 1] === 'a' && inputArray[i + 2] === 'n')
        {
            inputArray.splice(i+1, 2);

            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("op");
            subCalc.push("tan");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === 'P' && inputArray[i + 1] === 'o' && inputArray[i + 2] === 'l' && inputArray[i + 3] === '(')
        {
            inputArray.splice(i+1, 3);

            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("op");
            subCalc.push("Pol(");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === ',')
        {
            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("op");
            subCalc.push(",");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === '(')
        {
            bracketPairs++;

            if (currentNum != '')
            {
                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(currentNum));
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            if (calc.length > 0 && calc[calc.length-1][0] === "num")
            {
                var subCalc = [];
                subCalc.push("op");
                subCalc.push("×");
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            if (calc.length > 0 && calc[calc.length-1][1] === ")")
            {
                var subCalc = [];
                subCalc.push("op");
                subCalc.push("×");
                subCalc.push(calc.length);
                calc.push(subCalc);
            }

            var subCalc = [];
            subCalc.push("brac");
            subCalc.push("(");
            subCalc.push(calc.length);
            subCalc.push(bracketPairs);
            calc.push(subCalc);

            currentNum = '';
        }
        else if (numChecker === 'A' ||
            numChecker === 'B' ||
            numChecker === 'C' ||
            numChecker === 'D' ||
            numChecker === 'E' ||
            numChecker === 'F' ||
            numChecker === 'X' ||
            numChecker === 'Y' ||
            numChecker === 'M'
        )
        {
            currentNum += '1';
        }
        else if (numChecker === ')')
        {
            if (bracketPairs != 0)
            {
                if (calc.length > 4 && calc[calc.length - 4][1] === "Pol(")
                {

                }
                else
                {
                    if (currentNum != '')
                    {
                        var subCalc = [];
                        subCalc.push("num");
                        subCalc.push(Number(currentNum));
                        subCalc.push(calc.length);
                        calc.push(subCalc);
                    }

                    var subCalc = [];
                    subCalc.push("brac");
                    subCalc.push(")");
                    subCalc.push(calc.length);
                    subCalc.push(bracketPairs);
                    calc.push(subCalc);

                    bracketPairs--;
                    currentNum = '';
                }
            }
        }
        else
        {
            var subCalc = [];
            subCalc.push("num");
            subCalc.push(Number(currentNum));
            subCalc.push(calc.length);
            calc.push(subCalc);

            var subCalc = [];
            subCalc.push("op");
            subCalc.push(numChecker);
            subCalc.push(calc.length);
            calc.push(subCalc);
            currentNum = '';
        }
    }
    if (currentNum != '')
    {
        var subCalc = [];
        subCalc.push("num");
        subCalc.push(Number(currentNum));
        subCalc.push(calc.length);
        calc.push(subCalc);
    }

    currentNum = 0;


    for (var i = 0; i < calc.length; i++)
    {
        if (calc[i].includes('('))
        {
            var pairFound = false;
            //Check for bracket pair and add position numbers to brackets = []
            for (var j = i+1; j < calc.length; j++)
            {
                var bracPair = [];
                if (calc[i][3] === calc[j][3] && !pairFound)
                {
                    bracPair.push(calc[i][2]);
                    bracPair.push(calc[j][2]);
                    bracPair.push(calc[i][3]);
                    brackets.push(bracPair);
                    pairFound = true;
                }
            }
        }

    }
    brackets.sort(function(a, b) {return b[2]-a[2]});

    for (var i = 0; i < brackets.length; i++)
    {
        var bracCalc = [];
        for (var j = (brackets[i][0] + 1); j < (brackets[i][1]); j++)
        {
            bracCalc.push(calc[j]);
        }
        var bracLength = brackets[i][1] - brackets[i][0];
        var bracResult = solve(bracCalc);
        calc.splice(brackets[i][0], bracLength);

        var subCalc = [];
        subCalc.push("num");
        subCalc.push(Number(bracResult));
        subCalc.push(brackets[i][2]);

        calc[brackets[i][0]] = subCalc;
        calc.splice((brackets[i][0] + 1), 1);
        for (var j = i+1; j < brackets.length; j++)
        {
            brackets[j][0] -= (bracLength+1);
            brackets[j][1] -= (bracLength+1);
            console.log(brackets[j]);
            console.log(calc);
        }
    }

    var result = solve(calc);

    calc = [];
    brackets = [];

    console.log('Final result is: ' + result);
    output.textContent = result.toString();
    ans = result;
}

function solve(calcArray)
{
    while (calcArray.length > 1)
    {
        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('!'))
            {
                var factorialAns = 1;
                var factorialNum = calcArray[i-1][1];
                for (var j = 0; j < calcArray[i-1][1]; j++)
                {
                    factorialAns = factorialAns * factorialNum;
                    factorialNum--;
                }

                var resultNum = factorialAns;
                console.log(calcArray[i-1][1] + ' factorial equals ' + resultNum);
                calcArray.splice(i, 1);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {

            if (calcArray[i].includes('^'))
            {
                var resultNum = Math.pow(calcArray[i-1][1], calcArray[i+1][1]);
                console.log(calcArray[i-1][1] + ' to the power of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {

            if (calcArray[i].includes('p'))
            {
                var n = calcArray[i-1][1];
                var r = calcArray[i+1][1];
                console.log(n + ' ' + r);

                var numerator = fact(n);
                console.log(fact(n));
                
                var denominator = fact(n-r);
                console.log(fact(n-r));

                var resultNum = numerator / denominator;
                console.log(calcArray[i-1][1] + ' to the power of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {

            if (calcArray[i].includes('c'))
            {
                var n = calcArray[i-1][1];
                var r = calcArray[i+1][1];
                console.log(n + ' ' + r);

                var numerator = fact(n);
                console.log(fact(n));

                var denominatorOne = fact(r);
                console.log(fact(r));
                
                var denominatorTwo = fact(n-r);
                console.log(fact(n-r));

                var denominator = denominatorOne * denominatorTwo;

                var resultNum = numerator / denominator;
                console.log(calcArray[i-1][1] + ' to the power of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('acos'))
            {
                var resultNum;
                if (modeTwo === "D")
                {
                    resultNum = inverseSetToDegrees(Math.acos(calcArray[i+1][1]));
                }
                else
                {
                    resultNum  = Math.acos(calcArray[i+1][1]);
                }

                console.log('acos of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i+1, 1);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i][2]);
                calcArray[i] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('cos'))
            {
                var resultNum;
                if (modeTwo === "D")
                {
                    resultNum = Math.cos(setToDegrees(calcArray[i+1][1]))
                }
                else
                {
                    resultNum  = Math.cos(calcArray[i+1][1]);
                }

                console.log('cos of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i+1, 1);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i][2]);
                calcArray[i] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('asin'))
            {
                var resultNum;
                if (modeTwo === "D")
                {
                    resultNum = inverseSetToDegrees(Math.asin(calcArray[i+1][1])); 
                }
                else
                {
                    resultNum  = Math.asin(calcArray[i+1][1]);
                }
                console.log('asin of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i+1, 1);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i][2]);
                calcArray[i] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('sin'))
            {
                var resultNum;
                if (modeTwo === "D")
                {
                    resultNum = Math.sin(setToDegrees(calcArray[i+1][1]))
                }
                else
                {
                    resultNum  = Math.sin(calcArray[i+1][1]);
                }
                console.log('sin of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i+1, 1);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i][2]);
                calcArray[i] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('atan'))
            {
                var resultNum;
                if (modeTwo === "D")
                {
                    resultNum = inverseSetToDegrees(Math.atan(calcArray[i+1][1]));
                }
                else
                {
                    resultNum  = Math.atan(calcArray[i+1][1]);
                }

                console.log('atan of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i+1, 1);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i][2]);
                calcArray[i] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('tan'))
            {
                var resultNum;
                if (modeTwo === "D")
                {
                    resultNum = Math.tan(setToDegrees(calcArray[i+1][1]))
                }
                else
                {
                    resultNum  = Math.tan(calcArray[i+1][1]);
                }



                console.log('tan of ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i+1, 1);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i][2]);
                calcArray[i] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('Pol('))
            {
                var x = calcArray[i+1][1];
                var y = calcArray[i+3][1];

                var a = Math.pow(x, 2);
                var b = Math.pow(y, 2);

                var c = Math.pow(a+b, 1/2);

                var r = c;

                var theta;
                if (modeTwo === "D")
                    theta = inverseSetToDegrees(Math.atan(x/y));
                if (modeTwo === "R")
                    theta = Math.atan(x/y);

                var answer = "r=" + r + " θ=" + theta;
                if (modeTwo === "D")
                    answer += '°';
                console.log('pol of ' + calcArray[i+1][1] + ' and ' + calcArray[i+3][1] + ' is ' + answer);

                var output = document.getElementById('numOutput');
                output.style.fontSize = '20px';

                result = answer;
                return result;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('√'))
            {
                var resultNum = Math.pow(calcArray[i+1][1], 1 / calcArray[i-1][1]);
                console.log(calcArray[i-1][1] + ' root ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('%'))
            {
                var resultNum = calcArray[i-1][1] / 100;
                console.log(calcArray[i-1][1] + ' % ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('×'))
            {
                var resultNum = calcArray[i-1][1] * calcArray[i+1][1];
                console.log(calcArray[i-1][1] + ' multiplied by ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('÷') || calcArray[i].includes('/'))
            {
                var resultNum = calcArray[i-1][1] / calcArray[i+1][1];
                console.log(calcArray[i-1][1] + ' divided by ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }
        
        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('+'))
            {
                var resultNum = calcArray[i-1][1] + calcArray[i+1][1];
                console.log(calcArray[i-1][1] + ' added to ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }

        for (var i = 0; i < calcArray.length; i++)
        {
            if (calcArray[i].includes('-'))
            {
                var resultNum = calcArray[i-1][1] - calcArray[i+1][1];
                console.log(calcArray[i-1][1] + ' subtracted from ' + calcArray[i+1][1] + ' equals ' + resultNum);
                calcArray.splice(i, 2);

                var subCalc = [];
                subCalc.push("num");
                subCalc.push(Number(resultNum));
                subCalc.push(calcArray[i-1][2]);
                calcArray[i-1] = subCalc;

                result = resultNum;
            }
        }
    }
    if (calcArray.length === 1 && calcArray[0][0] === "num")
    {
        result = calcArray[0][1];
    }

    calcArray = [];

    return result;
}

//#endregion operations


//#region special
function shiftButton()
{
    if (shiftMode)
    {
        shiftMode = false;
    }
    else
    {
        shiftMode = true;
        alphaMode = false;
    }
    mode();
}

function alphaButton()
{
    if (alphaMode)
    {
        alphaMode = false;
    }
    else
    {
        alphaMode  = true;
        shiftMode = false;
    }
    mode();
}

function modeButton()
{
    if (shiftMode)
    {
        acButton();
        return;
    }
    
    var comp = document.getElementById('compInput');
    var stat = document.getElementById('statInput');
    var modeSelector = document.getElementById('modeSelector');
    var output = document.getElementById('modeOutput');
    output.style.fontSize = '20px';

    modeSelector.style.marginLeft = "0px";
    comp.style.marginLeft = "450px";
    stat.style.marginLeft = "900px";
    modePressedAmount++;

    if (modePressedAmount === 1)
    {
        output.textContent = "1:COMP 2:STAT 3:VERIF";
    }
    else if (modePressedAmount === 2)
    {
        output.textContent = "1:Deg 2:Rad";
    }
    else
    {
        /*if (calcMode === "MATH")
        {
            comp.style.marginLeft = "0px";
            stat.style.marginLeft = "900px";
        }
        else if (calcMode === "STAT")
        {
            stat.style.marginLeft = "0px";
            comp.style.marginLeft = "450px";
        }
        modeSelector.style.marginLeft = "450px";*/
        output.textContent = '';
        modePressedAmount = 0;
    }
}

function screenMove()
{
    /*if (calcMode === "MATH")
    {
        comp.style.marginLeft = "0px";
        stat.style.marginLeft = "900px";
    }
    else if (calcMode === "STAT")
    {
        stat.style.marginLeft = "0px";
        comp.style.marginLeft = "450px";
    }
    modeSelector.style.marginLeft = "450px";
    output.textContent = '';
    modePressedAmount = 0;*/
}

function hypButton()
{
    if (alphaMode)
    {
        var input = document.getElementById('numInput');
        input.value += 'C';
        return;
    }
}
//#endregion special


function mode()
{
    var modeNode = document.getElementById('modes');
    if (shiftMode)
    {
        modeNode.textContent = 'SHIFT';
    }
    else if (alphaMode)
    {
        modeNode.textContent = 'ALPHA';
    }
    else if (!alphaMode && !shiftMode)
    {
        modeNode.textContent = '';
    }
}

function fact(num)
{
    var factorialAns = 1;
    var factorialNum = num;
    for (var j = 0; j < num; j++)
    {
        factorialAns = factorialAns * factorialNum;
        factorialNum--;
    }
    return factorialAns;
}

var update = setInterval(() => {
    var modeTwoOutput = document.getElementById('modesTwo');
    var modeThreeOutput = document.getElementById('modesThree');

    var statInput = document.getElementById('statInput');
    var compInput = document.getElementById('compInput');
    var modeSelector = document.getElementById('modeSelector');

    modeTwoOutput.textContent = modeTwo;
    modeThreeOutput.textContent = calcMode;

    if (modePressedAmount === 0 && !statTypes)
    {
        if (calcMode === "STAT")
        {
            statInput.style.marginLeft = "0px";
            modeSelector.style.marginLeft = "450px";
            compInput.style.marginLeft = "950px";
        }
        else if (calcMode === "MATH")
        {
            statInput.style.marginLeft = "950px";
            modeSelector.style.marginLeft = "450px";
            compInput.style.marginLeft = "0px";
        }
    }
}, 10);

function setToDegrees(degrees)
{
    return degrees * Math.PI / 180;
}

function inverseSetToDegrees(degrees)
{
    return degrees * 180 / Math.PI;
}

if (32 % 1 === 0)
{
    console.log('yes');
}