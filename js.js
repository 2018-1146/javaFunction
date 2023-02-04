
function add()
        {
          let numOne, numTwo, sum;
          numOne = parseInt(document.getElementById("first").value);
          numTwo = parseInt(document.getElementById("second").value);
          sum = numOne + numTwo;
          document.getElementById("answer").value = sum;
          
          if(sum % 2 == 0) {
            
            document.getElementById("answer1").innerHTML = "Number is Even";

          }
  
          // if the number is odd
          else{
           
            document.getElementById("answer1").innerHTML = "Number is odd";
      
          }

        }