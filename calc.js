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
    function Clear(){
        outputScreen.value = "";
    }
    function del(){
        outputScreen.value = outputScreen.value.slice(4, 0);
    }
// let buttons = Array.from(document.getElementsByTagName('button'));
// console.log(buttons);

// buttons.map( buttons =>{
//     buttons.addEventListener('click', (e) =>{
//         switch(e.target.innerText){
//             case 'del':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 display.innerText = eval(display.innerText);
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 }
//                 catch{
//                     display.innerText = 'err';
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     })
// } )