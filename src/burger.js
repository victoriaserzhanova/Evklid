"use strict";

console.log('burger');

(function () {
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.add('menu--visible');
    });
    document.querySelector('#btnClose').addEventListener('click', function() {
      document.querySelector('#menu').classList.remove('menu--visible');
    });
  })
})()
