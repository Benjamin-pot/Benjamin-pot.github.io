//重置初值
function set() {

  document.getElementById("result").innerHTML="";
  document.getElementById("ans").innerHTML="";
  var random;
  var a=[0,1,2,3,4,5,6,7,8,9];
  for(var i=0;i<n;i++){
    random=Math.floor(Math.random()*a.length);
    ans[i]=a[random];
    a.splice(random,1);
  }
}

//判斷答案
function f(){
  var A=0,B=0;
  for(var i=0;i<ans.length;i++){
    for(var j=0;j<ans.length;j++){
      if(ans[i]==guess.value[j]){
        if(i==j){
          A++;
        }else{
          B++;
        }
      }
    }
  }
  var nodeLi =document.createElement("li");

  if(A==ans.length){
    var f_result = document.createTextNode(guess.value+" "+"Bingo!");
    nodeLi.appendChild(f_result);
    nodeLi.style="color:green";
  }else{
    var f_result = document.createTextNode(guess.value+" "+A+"A"+B+"B");
    nodeLi.appendChild(f_result);
    nodeLi.style="color:red";



  }

  document.getElementById("result").appendChild(nodeLi);

  guess.value="";
}

//檢查答案
function guess_rule(){
  if (guess.value.length==n){
    for(var i=0;i<guess.value.length;i++){
      if(guess.value[i]<='9'&& guess.value[i]>='0'){
        for(var j=i+1;j<guess.value.length;j++){
          if(guess.value[i]==guess.value[j]){
            alert("請勿輸入相同數字");
            guess.value="";
            return 0;
          }
        }
      }else{
        alert("請勿輸入數字以外的文字符號");
        guess.value="";
        return 0;
      }
    }
    f();
  }else{
    alert("請輸入"+n+"位數字");
    guess.value="";
  }
}

function print_ans(){
  document.getElementById("ans").innerHTML="答案是："+ ans.join('');
}

function display(how){
  document.getElementById("main").style.display=how;
}