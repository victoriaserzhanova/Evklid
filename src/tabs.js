"use strict";

(function (){
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(tabsLink) {
      tabsLink.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tabs__section').forEach(function(tabSection) {
          tabSection.classList.remove('tabs__section--active')
        });
        document.querySelector(`[data-target='${path}']`).classList.add('tabs__section--active');
      })
    })
  })
})()




