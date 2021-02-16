// ==UserScript==
// @name         Krasnal - Patryk
// @version      1.0
// @description  Dodatek dla poszukiwaczy
// @author       Krasnal
// @match        http://*.margonem.pl/*
// @exclude      https://commons.margonem.*/*
// @connect      margonem.pl
// @connect      margonem.com
// @run-at       document-start
// ==/UserScript==

(function() {
  const script = document.createElement('script');
  script.src = 'file:///home/ubuntu/Wideo/poszukiwacz.js';
  document.head.appendChild(script);
})();