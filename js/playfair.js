$(function(){
    $('.info-list li').click(function(){
    $(this).addClass('selected').siblings('li').removeClass('selected');
    $('.about,.history').hide();
    $('.'+$(this).data('class')).fadeIn();
    });});
function check(char){
    var keyy=document.getElementById("key").value;
    var flag=false;
    var i=0;
     for(i=0;i<keyy.length;i++){
         if(keyy[i]===char){
             flag=true;
         }}
         return flag;   
}
function chec(char){
    var keyy=document.getElementById("ke").value;
    var flag=false;
    var i=0;
     for(i=0;i<keyy.length;i++){
         if(keyy[i]===char){
             flag=true;
         }}
         return flag;   
}
var matrix=new Array(5);
for(var i=0; i<5;i++){
    matrix[i]=Array(matrix.length);
}
function searchelement1row(f){
    var f1;
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
          if(matrix[i][j]==f){
              f1=i;
          }}}
          return f1;
}
function searchelement1col(f){
    var f2;
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
          if(matrix[i][j]==f){
              f2=j;
          }}}
          return f2;
}
function searchelement2row(f){
    var f1;
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
          if(matrix[i][j]==f){
              f1=i;
          }}}
          return f1;
}
function searchelement2col(f){
    var f2;
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
          if(matrix[i][j]==f){
              f2=j;
          }}}
          return f2;
}

var Encryp=document.getElementById("Encrypt");
Encryp.onclick=function(){
    var letters=['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var plain=document.getElementById("plain-text").value;
    var keyy=document.getElementById("key").value; 
    var text="";
   
    var rst=keyy.charAt(0);
    for(var i=1;i<keyy.length;i++){
         var isexit=rst.search(keyy.charAt(i));
         if(isexit<0){
           rst+=keyy.charAt(i);
         }
    }
    for(var y=0;y<26;y++){
        if(!check(letters[y])){
            text+=letters[y];
    }}
    var x=0,t=0;
    for(var i=0;i<5;i++){
      for(var j=0;j<5;j++){
        if(x<=rst.length-1){
             matrix[i][j]=rst[x++]; 
        }else{
            matrix[i][j]=text[t++];
        }}
    }
    var plaintext="";
    for(var i=0;i<plain.length;i++){
        if(plain[i]!=plain[i+1]){
            plaintext+=plain[i];
        }else{
            plaintext+=plain[i+1];
            plaintext+='x';
        }
    }
    var p=plaintext.length;
     if(p%2!=0){
      plaintext+='x';
     }
     var p=0,cipher="";
     for(var k=0;k<plaintext.length;k+=2){
         var p1=plaintext[k];
         var p2=plaintext[k+1];
          var rowele1=searchelement1row(p1);
          var colele1=searchelement1col(p1);
          var rowele2=searchelement2row(p2);
          var colele2=searchelement2col(p2);
        if((rowele1!=rowele2)&&(colele1!=colele2)){
            cipher+=matrix[rowele1][colele2]+matrix[rowele2][colele1];
        }else if((rowele1==rowele2)&&(colele1==4)){
            cipher+=matrix[rowele1][0]+matrix[rowele2][colele2+1];
        }else if((rowele1==rowele2)&&(colele2==4)){
            cipher+=matrix[rowele1][colele1+1]+matrix[rowele2][0]; 
        }else if((rowele1==rowele2)&&(colele1!=4)&&(colele2!=4)){
            cipher+=matrix[rowele1][colele1+1]+matrix[rowele2][colele2+1];
        }else if((colele1==colele2)&&(rowele1!=4)&&(rowele2!=4)){
            cipher+=matrix[rowele1+1][colele1]+matrix[rowele2+1][colele2];
        }else if((colele1==colele2)&&(rowele1==4)){
            cipher+=matrix[0][colele1]+matrix[rowele2+1][colele2];
        }else if((colele1==colele2)&&(rowele2==4)){
            cipher+=matrix[rowele1+1][colele1]+matrix[0][colele2];
        }
}
document.getElementById("Encrypt-result").innerHTML=cipher;
}
var decrypt=document.getElementById("Decrypt");
decrypt.onclick=function(){
    var letters=['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var plain=document.getElementById("cipher-text").value;
    var keyy=document.getElementById("ke").value; 
    var text="";
    var rst=keyy.charAt(0);
    for(var i=1;i<keyy.length;i++){
         var isexit=rst.search(keyy.charAt(i));
         if(isexit<0){
           rst+=keyy.charAt(i);
         }
    }
    for(var y=0;y<26;y++){
        if(!chec(letters[y])){
            text+=letters[y];
    }}
    var x=0,t=0;
    for(var i=0;i<5;i++){
      for(var j=0;j<5;j++){
        if(x<=rst.length-1){
             matrix[i][j]=rst[x++]; 
        }else{
            matrix[i][j]=text[t++];
        }}
    }
    var plaintext="";
    for(var i=0;i<plain.length;i++){
        if(plain[i]!=plain[i+1]){
            plaintext+=plain[i];
        }else{
            plaintext+=plain[i+1];
            plaintext+='x';
        }
    }
    var p=plaintext.length;
     if(p%2!=0){
      plaintext+='x';
     }
     var p=0,plai="";
     for(var k=0;k<plaintext.length;k+=2){
         var p1=plaintext[k];
         var p2=plaintext[k+1];
          var rowele1=searchelement1row(p1);
          var colele1=searchelement1col(p1);
          var rowele2=searchelement2row(p2);
          var colele2=searchelement2col(p2);
        if((rowele1!=rowele2)&&(colele1!=colele2)){
            plai+=matrix[rowele1][colele2]+matrix[rowele2][colele1];
        }else if((rowele1==rowele2)&&(colele1==0)){
            plai+=matrix[rowele1][4]+matrix[rowele2][colele2-1];
        }else if((rowele1==rowele2)&&(colele2==0)){
            plai+=matrix[rowele1][colele1-1]+matrix[rowele2][4]; 
        }else if((rowele1==rowele2)&&(colele1!=0)&&(colele2!=0)){
            plai+=matrix[rowele1][colele1-1]+matrix[rowele2][colele2-1];
        }else if((colele1==colele2)&&(rowele1!=0)&&(rowele2!=0)){
            plai+=matrix[rowele1-1][colele1]+matrix[rowele2-1][colele2];
        }else if((colele1==colele2)&&(rowele1==0)){
            plai+=matrix[4][colele1]+matrix[rowele2-1][colele2];
        }else if((colele1==colele2)&&(rowele2==0)){
            plai+=matrix[rowele1-1][colele1]+matrix[4][colele2];
        }
}
document.getElementById("Decrypt-result").innerHTML=plai;
}