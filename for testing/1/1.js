window.onload = function() {

function $(selector) {
  let elem;
  if( selector instanceof HTMLDivElement) {
    elem = [selector];
  } else {
    elem = document.querySelectorAll(selector);
  }
  return new JQuery(elem);
}

function JQuery(elem) {
  this.elem = elem;
  this.on = function(event, callback) {
    for(let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(event, callback);
    }
     return this;
  }
  this.html = function(text) {
    for(let i = 0; i < elem.length; i++) {
      elem[i].innerText = text;
    }
    return this;
  }
}

let u = $('.el').html(111111).on('click', function() {
console.log($(this));
  $(this).html('jljlj');
});



}

