function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
    document.getElementById("output-value").innerText=getFormatedNumber(num);
    }
}

function getFormatedNumber(num){
    if(num=="-"){
		return "";
	}
    var n = Number(num)
    var value = n.toLocaleString("en")
    return value
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}


var operator = document.getElementsByClassName("operator");
for(var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="reset"){
            printOutput(" ");
        }
        if(this.id=="del"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output = reverseNumberFormat(getOutput());
            if(output==""){
				if(isNaN(output[output.length-1])){
					output= ouput.substr(0,history.length-1);
				}
			}
            if(output!=""){
                output=reverseNumberFormat(output());
            }
            if(this.id=="="){
                var result = eval(output);
                printOutput(result);
            }
            else{
                output=output+this.id;
			    printOutput(output);

            }
        }
    });
}


var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}