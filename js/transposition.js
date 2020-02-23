$(function(){
    $('.info-list li').click(function(){
    $(this).addClass('selected').siblings('li').removeClass('selected');
    $('.about,.history').hide();
    $('.'+$(this).data('class')).fadeIn();
    });
});
var Encryp=document.getElementById("Encrypt");
Encryp.onclick=function(){
    var letters=['a','b','c','d','e','f','j','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var plain=document.getElementById("plain-text").value;
    var keyy=document.getElementById("key").value;
    
    var plain2="";
    for(var i=0;i<plain.length;i++){
        if(plain[i] !=" "){
            plain2 += plain[i];
        }
    }
    var matrix2=new Array(keyy.length);
    for(var i=0;i<keyy.length;i++){
        matrix2[i]=keyy[i];
    }
    matrix2.sort();
    var matrix=new Array(keyy.length);
    for(var i=0; i< (plain2.length % keyy.length+1);i++){
        matrix[i]=Array(matrix.length);
    }
    for(var i=0; i< (plain2.length % keyy.length+1);i++){
        for(var j=0;j<keyy.length;j++){
         if(i==0){
             matrix[i][j]=keyy[j];
    }}}
         var cou=0;
    for(var i=0; i< (plain2.length % keyy.length+1);i++){
        for(var j=0;j<keyy.length;j++){   
             if(i!=0){
                 matrix[i][j]=plain2[cou];
                 cou++;
    }}}
        var count=0 ,cipher="";
   for(var i=0; i< (plain2.length % keyy.length+1);i++){
        for(var j=0;j<keyy.length;j++){
             if(matrix[i][j]==null){
            matrix[i][j]=letters[count];
                     ++count;
    }}}
    for(var i=0; i<matrix2.length;i++){
        for(var j=0;j<keyy.length;j++){
             if(matrix2[i]==matrix[0][j]){
                for(var x=1; x<= (plain2.length % keyy.length );x++){
                    cipher += matrix[x][j];           
    }}}}   
document.getElementById("Encrypt-result").innerHTML=cipher; 
}

var Decrypt=document.getElementById("Decrypt");
Decrypt.onclick=function(){
    var ciphertext=document.getElementById("cipher-text").value;
    var ke=document.getElementById("ke").value;
    var blocksnum=ciphertext.length / ke.length;
    var keymatrix=new Array(ke.length);
    for(var i=0;i<ke.length;i++){
        keymatrix[i]=ke[i];
    }
    keymatrix.sort();
    var ciphermatrix=new Array(ke.length);
    for(var i=0; i< (blocksnum+1);i++){
        ciphermatrix[i]=Array(ciphermatrix.length);
    }
    for(var i=0; i< (blocksnum+1);i++){
        for(var j=0;j<ke.length;j++){
         if(i==0){
            ciphermatrix[i][j]=ke[j];
    }}}
    var m=0;
    for(var i=0; i<keymatrix.length;i++){
        for(var j=0;j<ke.length;j++){
             if(keymatrix[i]==ciphermatrix[0][j]){
        for(var x=1; x<=blocksnum;x++){
            ciphermatrix[x][j]=ciphertext[m];
              ++m;
}}}}
    for(var i=0; i< (blocksnum+1);i++){
        for(var j=0;j<ke.length;j++){
        console.log(ciphermatrix[i][j]);
        }}
var plaintext="";
for(var i=1; i< (blocksnum+1);i++){
    for(var j=0;j<ke.length;j++){
        plaintext+=ciphermatrix[i][j];
    }}
    document.getElementById("Decrypt-result").innerHTML=plaintext; 
}