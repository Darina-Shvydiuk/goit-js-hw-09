!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.61422fd1.js.map
