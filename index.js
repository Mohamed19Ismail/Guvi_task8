function createElementDiv(ele){
   return document.createElement(`${ele}`)
}

const div1 = document.createElement("div")
document.body.appendChild(div1)

const div2 = document.createElement("div")
div2.className = "container mt-5"
div1.appendChild(div2)

const row1 = document.createElement("div")
div2.appendChild(row1)

const col2 = createElementDiv("div")
col2.className="col-lg-12"
row1.appendChild(col2)

const row2 = createElementDiv("div")
row2.className = "row"
col2.appendChild(row2)

const para = createElementDiv("p")
para.className = "col"
para.textContent = "This is calculator"
para.id="description"
row2.appendChild(para)

// const heading = createElementDiv("h1");
// heading.className = "col";
// heading.id = "title";
// heading.textContent = "H1"; 
// div2.appendChild(heading);

// var title = document.getElementById('title');

const row3 = createElementDiv("div")
row3.className = "row"
col2.appendChild(row3)

const col5 = createElementDiv("div")
col5.className = "col mt-3"
const textarea = document.createElement("input")
row3.appendChild(col5)
textarea.className = "form-control InputField"
textarea.id = "result"
col5.appendChild(textarea)

//first row buttons

const div3 = createElementDiv("div")
div3.className = "rowbtn1"
div2.appendChild(div3)

const colbtn1 = createElementDiv("div")
colbtn1.className = "col-xs-3"
div3.appendChild(colbtn1)

const btn1 = createElementDiv("button")
btn1.className ="btn btn-light btn-block"
btn1.id="clear"
btn1.textContent = "C"
btn1.style.color="red"
btn1.onclick = function(){
    cleardata()
}
colbtn1.appendChild(btn1)

const colbtn2 = createElementDiv("div")
colbtn2.className = "col-xs-3"
div3.appendChild(colbtn2)

const btn2 = createElementDiv("button")
btn2.className ="btn btn-light btn-block"
btn2.id="backspace"
btn2.textContent = "<-"
btn2.onclick = function(){
    backspace()
}
colbtn2.appendChild(btn2)

const colbtn3 = createElementDiv("div")
colbtn3.className = "col-xs-3"
div3.appendChild(colbtn3)

const btn3 = createElementDiv("button")
btn3.className ="btn btn-light btn-block"
btn3.id="dot"
btn3.textContent = "."
btn3.onclick = function () {
    userClickBtn('.');
  };
colbtn3.appendChild(btn3)

const colbtn4 = createElementDiv("div")
colbtn4.className = "col-xs-3"
div3.appendChild(colbtn4)

const btn4 = createElementDiv("button")
btn4.className ="btn btn-light btn-block"
btn4.id="Mul"
btn4.textContent = "*"
btn4.style.color="blue"
btn4.onclick = function () {
    userClickBtn('*');
  };
colbtn4.appendChild(btn4)

// second row buttons

const div4 = createElementDiv("div")
div4.className = "rowbtn2"
div2.appendChild(div4)

const colbtn5 = createElementDiv("div")
colbtn5.className = "col-xs-3"
div4.appendChild(colbtn5)

const btn5 = createElementDiv("button")
btn5.className ="btn btn-light btn-block"
btn5.id="seven"
btn5.textContent = "7"
btn5.onclick = function () {
    userClickBtn(7);
  };
colbtn5.appendChild(btn5)

const colbtn6 = createElementDiv("div")
colbtn6.className = "col-xs-3"
div4.appendChild(colbtn6)

const btn6 = createElementDiv("button")
btn6.className ="btn btn-light btn-block"
btn6.id="eight"
btn6.textContent = "8"
btn6.onclick = function () {
    userClickBtn(8);
  };
colbtn6.appendChild(btn6)

const colbtn7 = createElementDiv("div")
colbtn7.className = "col-xs-3"
div4.appendChild(colbtn7)

const btn7 = createElementDiv("button")
btn7.className ="btn btn-light btn-block"
btn7.id="nine"
btn7.textContent = "9"
btn7.onclick = function () {
    userClickBtn(9);
  };
colbtn7.appendChild(btn7)

const colbtn8 = createElementDiv("div")
colbtn8.className = "col-xs-3"
div4.appendChild(colbtn8)

const btn8 = createElementDiv("button")
btn8.className ="btn btn-light btn-block"
btn8.id="divide"
btn8.textContent = "/"
btn8.style.color="blue"
btn8.onclick = function () {
    userClickBtn('/');
  };
colbtn8.appendChild(btn8)

//Third Row Buttons

const div5 = createElementDiv("div")
div5.className = "rowbtn3"
div2.appendChild(div5)

const colbtn9 = createElementDiv("div")
colbtn9.className = "col-xs-3"
div5.appendChild(colbtn9)

const btn9 = createElementDiv("button")
btn9.className ="btn btn-light btn-block"
btn9.id="Four"
btn9.textContent = "4"
btn9.onclick = function () {
    userClickBtn(4);
  };
colbtn9.appendChild(btn9)

const colbtn10 = createElementDiv("div")
colbtn10.className = "col-xs-3"
div5.appendChild(colbtn10)

const btn10 = createElementDiv("button")
btn10.className ="btn btn-light btn-block"
btn10.id="Five"
btn10.textContent = "5"
btn10.onclick = function () {
    userClickBtn(5);
  };
colbtn10.appendChild(btn10)

const colbtn11 = createElementDiv("div")
colbtn11.className = "col-xs-3"
div5.appendChild(colbtn11)

const btn11 = createElementDiv("button")
btn11.className ="btn btn-light btn-block"
btn11.id="Six"
btn11.textContent = "6"
btn11.onclick = function () {
    userClickBtn(6);
  };
colbtn11.appendChild(btn11)

const colbtn12 = createElementDiv("div")
colbtn12.className = "col-xs-3"
div5.appendChild(colbtn12)

const btn12 = createElementDiv("button")
btn12.className ="btn btn-light btn-block"
btn12.id="subtract"
btn12.textContent = "-"
btn12.style.color="blue"
btn12.onclick = function () {
    userClickBtn('-');
  };
colbtn12.appendChild(btn12)

//Fourth row buttons

const div6 = createElementDiv("div")
div6.className = "rowbtn4"
div2.appendChild(div6)

const colbtn13 = createElementDiv("div")
colbtn13.className = "col-xs-3"
div6.appendChild(colbtn13)

const btn13 = createElementDiv("button")
btn13.className ="btn btn-light btn-block"
btn13.style.backgroundColor = "rgb(185,185,185)"
btn13.style.fontSize = "20px"
btn13.id="1"
btn13.textContent = "1"
btn13.onclick = function () {
    userClickBtn(1);
  };
colbtn13.appendChild(btn13)

const colbtn14 = createElementDiv("div")
colbtn14.className = "col-xs-3"
div6.appendChild(colbtn14)

const btn14 = createElementDiv("button")
btn14.className ="btn btn-light btn-block"
btn14.style.backgroundColor = "rgb(185,185,185)"
btn14.style.fontSize = "20px"
btn14.id="2"
btn14.textContent = "2"
btn14.onclick = function () {
    userClickBtn(2);
  };
colbtn14.appendChild(btn14)

const colbtn15 = createElementDiv("div")
colbtn15.className = "col-xs-3"
div6.appendChild(colbtn15)

const btn15 = createElementDiv("button")
btn15.className ="btn btn-light btn-block"
btn15.style.backgroundColor = "rgb(185,185,185)"
btn15.style.fontSize = "20px"
btn15.id="3"
btn15.textContent = "3"
btn15.onclick = function () {
    userClickBtn(3);
  };
colbtn15.appendChild(btn15)

const colbtn16 = createElementDiv("div")
colbtn16.className = "col-xs-3"
div6.appendChild(colbtn16)

const btn16 = createElementDiv("button")
btn16.className ="btn btn-light btn-block"
btn16.id="add"
btn16.textContent = "+"
btn16.style.color="blue"
btn16.onclick = function () {
    userClickBtn('+');
  };
colbtn16.appendChild(btn16)

//Fifth row buttons

const div7 = createElementDiv("div")
div7.className = "rowbtn5"
div2.appendChild(div7)

const colbtn17 = createElementDiv("div")
colbtn17.className = "col-xs-3"
div7.appendChild(colbtn17)

const btn17 = createElementDiv("button")
btn17.className ="btn btn-light btn-block"
btn17.id="Zero"
btn17.textContent = "0"
btn17.onclick = function () {
    userClickBtn(0);
  };
colbtn17.appendChild(btn17)

const div8 = createElementDiv("div")
div8.className = "rowbtn5"
div2.appendChild(div8)

const colbtn18 = createElementDiv("div")
colbtn18.className = "col-xs-3"
div7.appendChild(colbtn18)

const btn18 = createElementDiv("button")
btn18.className ="btn btn-light btn-block"
btn18.id="doubleZero"
btn18.textContent = "00"
btn18.onclick = function () {
    userClickBtn('00');
  };
colbtn18.appendChild(btn18)

const div9 = createElementDiv("div")
div9.className = "rowbtn5"
div2.appendChild(div9)

const colbtn19 = createElementDiv("div")
colbtn19.className = "col-xs-3"
div7.appendChild(colbtn19)

const btn19 = createElementDiv("button")
btn19.className ="btn btn-primary btn-block"
btn19.id="equal"
btn19.textContent = "="
btn19.onclick = function(){
    calculatevalue()
}
btn19.style.width = "200%"
colbtn19.appendChild(btn19)



// Code for accessing the elements

var textbox = document.getElementById("result")

function userClickBtn(input) {
    var oldinput = textbox.value;
    var newinput = oldinput + "" + input;
    textbox.value =newinput;
}

function backspace(){
    textbox.value = textbox.value.slice(0, -1);
}

function calculatevalue(){
    var input = textbox.value;
    input = input.replace('"',"").replace("'","");
    var result = eval(input)
    textbox.value = result;
}

function cleardata(){
    textbox.value="";
}

document.addEventListener("keypress", function(event){
    if(event.key.match(/[0-9]/)){

    }else{
        alert("Only numbers are allowed.");
    }
    event.preventDefault();
})




