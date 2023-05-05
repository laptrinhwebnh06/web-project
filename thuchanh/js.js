var i=0;
var x=0;
function main(){
  var n3;
  var  c = Math.floor(Math.random()*5+1);
  var n1 = Math.floor(Math.random()*9+1);
  var n2 = Math.floor(Math.random()*9+1);
  var a = Math.floor(Math.random()*9+1);
  document.getElementById('scor').style=
      'display:none';
  document.getElementById('img1').style=
      '';
     document.getElementById('img2').style=
      '';
   document.getElementById('b1').style=''
   document.getElementById('b2').style=''
   document.getElementById('lose').style = ''
  document.getElementById('whenlose').style=''
  document.getElementById('p1').innerHTML =
    ''
    document.getElementById('p2').innerHTML =
    ''
  document.getElementById('num1').innerHTML = n1+' +'+'&nbsp;' 
document.getElementById('num2').innerHTML = '   '+n2+' ='+'&nbsp;'
  document.getElementById('m').style=''
  if(c===1  || c===2 || c===3){
     n3 = n1 + n2 ;
  }else{
     n3 = a;
  }
  if(n3>9){
    n3 = a ;
  }

 document.getElementById('num3').innerHTML =  +n3 ;
   var s = document.getElementById('time');
  s.className = ''
     function art(){
       
      var s = document.getElementById('time');
  s.className = 'anim'
     
  s.addEventListener('animationend',function(){
    sound();
  document.getElementById('m').style='animation:game 0.35s ease-in-out 1;'
       document.getElementById('lose').style = 'background:#1DABB8;color:#fff'
   document.getElementById('whenlose').style = 'background:#E7E7E7'
  document.getElementById('num1').innerHTML = ''
   document.getElementById('num2').innerHTML = ''
   document.getElementById('num3').innerHTML = ''
    document.getElementById('b1').style='background:transparent; color:#25373D'
       document.getElementById('b2').style='background:transparent; color:#25373D'
    t.style = '';
    document.getElementById('img1').style=
      'display:none';
     document.getElementById('img2').style=
      'display:none';
    document.getElementById('p1').innerHTML =
    'score :'+'&nbsp'+ i
    document.getElementById('p2').innerHTML =
    'best  :'+'&nbsp' + x
    document.getElementById('scor').style=
      '';
   
    })}
   this.f = function(){
if(n2 + n1 === n3){
  sound();
  document.getElementById('m').style='animation:game 0.35s ease-in-out 1;'
  document.getElementById('lose').style = 'background:#1DABB8;color:#fff'
   document.getElementById('whenlose').style = 'background:#E7E7E7'
  document.getElementById('num1').innerHTML = ''
   document.getElementById('num2').innerHTML = ''
   document.getElementById('num3').innerHTML = ''
    document.getElementById('b1').style='background:transparent; color:#25373D'
       document.getElementById('b2').style='background:transparent; color:#25373D'
    t.style = '';
    document.getElementById('img1').style=
      'display:none';
     document.getElementById('img2').style=
      'display:none';
    document.getElementById('p1').innerHTML =
    'score :'+'&nbsp'+ i
    document.getElementById('p2').innerHTML =
    'best  :'+'&nbsp' + x
      document.getElementById('scor').style=
      '';
      }
    else{
      main();
      score();
      h();
      
    }
  } 
 this.t = function(){
if(n2 + n1 === n3){
  
      main();
      score();
      h();
      
    }else{
      sound();
  document.getElementById('m').style='animation:game 0.35s ease-in-out 1;'
        document.getElementById('lose').style = 'background:#1DABB8;color:#fff'
   document.getElementById('whenlose').style = 'background:#E7E7E7'
  document.getElementById('num1').innerHTML = ''
   document.getElementById('num2').innerHTML = ''
   document.getElementById('num3').innerHTML = ''
    document.getElementById('b1').style='background:transparent; color:#25373D'
       document.getElementById('b2').style='background:transparent; color:#25373D'
    t.style = '';
    document.getElementById('img1').style=
      'display:none';
     document.getElementById('img2').style=
      'display:none';
    document.getElementById('p1').innerHTML =
    'score :'+'&nbsp'+ i
    document.getElementById('p2').innerHTML =
    'best  :'+'&nbsp' + x
     document.getElementById('scor').style=
      '';
    }
  } 
 this.h = function(){
    var s = document.getElementById('time');
  s.className = '';
   setTimeout(function(){
     art();
   },100);
 }
  this.score = function(){
    i++;
    if(i<x){
       return x;
       }else{
         x = i;
       }
 }
  this.reset = function(){
    i=0;
  }
  this.sound = function(){
    var d = document.getElementById('audio')
    d.play();
  }
}

/*#00B16A #2CC990 #00B5B5*/
