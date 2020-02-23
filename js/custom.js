$(function(){
    $('.info-list li').click(function(){
    $(this).addClass('selected').siblings('li').removeClass('selected');
    $('.about,.history').hide();
    $('.'+$(this).data('class')).fadeIn();
    });
});
var Encryp=document.getElementById("Encrypt");
Encryp.onclick=function(){
    var plaintext=document.getElementById("plain-text").value;
    var key=document.getElementById("key").value;
    var text=plaintext.split(""); 
    var text1=[];
    var text2=[];
    for(i=0;i<text.length;i++){
        var c=text[i];
        if(c.match(/[a-z]/)&&(c.charCodeAt()+Number(key)<122)){
            text1.push(c.charCodeAt()+Number(key));
        } else if(c.charCodeAt()+Number(key) >= 122){
            text1.push(c.charCodeAt()+Number(key)-26);
        }
    }
    for(j=0;j<text1.length;j++){
        var cc=text1[j];
        text2.push(String.fromCharCode(cc));
    }
    var t=text2.join("");
    document.getElementById("Encrypt-result").innerHTML=t;
}
var Decrypt=document.getElementById("Decrypt");
Decrypt.onclick=function(){
    var ciphertext=document.getElementById("cipher-text").value;
    var key=document.getElementById("ke").value;
    var k=key.charCodeAt()-97;
    var tex=ciphertext.split("");
    var text3=[];
    var text4=[];
    for(i=0;i<tex.length;i++){
        var cc=tex[i];
        if(cc.match(/[a-z]/)){
            if(cc.charCodeAt()-Number(k) >= 97){
                text3.push(cc.charCodeAt()-Number(k));
            }else if(cc.charCodeAt()-Number(k) < 97){
                    text3.push(cc.charCodeAt()-Number(k)+26);
            }
        }
    }
    for(j=0;j<text3.length;j++){
        var ccc=text3[j];
        text4.push(String.fromCharCode(ccc));
    }
    var tt=text4.join("");
    document.getElementById("Decrypt-result").innerHTML=tt;   
}