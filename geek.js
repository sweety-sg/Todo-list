const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");

const el = document.getElementsByTagName('li');
const clear = document.querySelector("#clear");



btn.onclick = function(){
    
    var txt = input.value;
    if(txt ==''){
        alert('You must write something');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
};


list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
         
    }
};

