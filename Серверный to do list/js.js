

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(inputValue,state) {
  var li = document.createElement("li");
  li.onclick = function() {
    var mas = JSON.parse(localStorage.getItem('currentList'));
    for (var i=0; i<mas.length; i++) {
      if (mas[i].text == inputValue) {
        if (mas[i].checked == 'true')
          mas[i].checked = 'false';
        else
          mas[i].checked = 'true';

        break;
      }
    }
    localStorage.setItem('currentList',JSON.stringify(mas));
  }
  //var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Checking for clicked state
  if (state == 'true') {
    li.classList.add('checked');
  }

  // Make 'onclick' action to new button
  var buttons_close = document.getElementsByClassName("close");

  
    buttons_close[buttons_close.length-1].onclick = function() {
      var tmp = [];
    var mas = JSON.parse(localStorage.getItem('currentList'));
    for (var i = 0; i < mas.length; i++) {
      if (mas[i].text == inputValue)
        continue;
      tmp.push(mas[i]);
    }
    localStorage.setItem('currentList',JSON.stringify(tmp));

    var parent = this.parentElement;
    parent.style.display = 'none';
    }
  

  var obj = {
    text: inputValue,
    checked: state
  };

  var mas = JSON.parse(localStorage.getItem('currentList'));
  if (mas == null) {
    mas = [];
  }

  mas.push(obj);
  localStorage.setItem('currentList', JSON.stringify(mas));

}


var http = new XMLHttpRequest();
init();


function updateBase(){
 
 var string = localStorage.getItem('currentList');
 var nocache = 0;
 nocache = Math.random();

 http.open('GET', '/site/updateUser.php?data='+string+'&nocache = '+nocache, true);
 http.send(null);
}

function init(){
  var mas = JSON.parse(localStorage.getItem('currentList'));
  localStorage.removeItem('currentList');
  if (mas != null) {
    for (var i = 0; i < mas.length; i++) {
      newElement(mas[i].text,mas[i].checked)
    }
  } else {
    var nocache = 0;
    nocache = Math.random();

    http.open('GET', '/site/loadUserData.php?nocache = '+nocache, true);
    http.onreadystatechange = initReply;
    http.send(null);
  }
}
function initReply() {
if(http.readyState == 4 && http.status == 200) { 
    var response = http.responseText;
    if(response == '0') {
      alert('Load data error. Please, reloging!');
    } else if (response != '') {
      var mas = JSON.parse(response);
      for (var i = 0; i < mas.length; i++) {
        newElement(mas[i].text,mas[i].checked);
      }
    }
  }
}