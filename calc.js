let outputScreen = document.getElementById("output-screen");

    function display(num){
        outputScreen.value += num;
    }
    function Calculate(){
        try{
            outputScreen.value += eval(outputScreen.value);
        }
        catch(err)
        {
            alert("Invalid Expression")
        }
    }
    function del(){
        outputScreen.value = "";
    }


    // function Clear(){
    //     outputScreen.value = "";
    // }

    // function del(){
    //     outputScreen.value = outputScreen.value.slice(0, -2);
    // }