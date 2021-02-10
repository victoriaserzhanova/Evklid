"use strict";

console.log('burger');

(function () {
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burgerOpen').addEventListener('click', function() {
      document.querySelector('#menu').classList.add('menu--visible');
    });
    document.querySelector('#burgerClose').addEventListener('click', function() {
      document.querySelector('#menu').classList.remove('menu--visible');
    });
  })
})()
