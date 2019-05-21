!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Sweetalert2=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e,n){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&a(i,n.prototype),i}).apply(null,arguments)}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function c(t){return Object.keys(t).map(function(e){return t[e]})}function l(t){return Array.prototype.slice.call(t)}function d(t){console.error("".concat(h," ").concat(t))}function p(t,e){!function(t){-1===b.indexOf(t)&&(b.push(t),v(t))}('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))}function f(t){return t&&Promise.resolve(t)===t}function m(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function g(t,e,n){l(t.classList).forEach(function(e){-1===c(C).indexOf(e)&&-1===c(k).indexOf(e)&&t.classList.remove(e)}),e&&e[n]&&et(t,e[n])}var h="SweetAlert2:",v=function(t){console.warn("".concat(h," ").concat(t))},b=[],y=function(t){return"function"==typeof t?t():t},w=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),C=m(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),k=m(["success","warning","info","question","error"]),B={previousBodyPadding:null},x=function(t,e){return t.classList.contains(e)};function S(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return ot(t,C[e]);case"checkbox":return t.querySelector(".".concat(C.checkbox," input"));case"radio":return t.querySelector(".".concat(C.radio," input:checked"))||t.querySelector(".".concat(C.radio," input:first-child"));case"range":return t.querySelector(".".concat(C.range," input"));default:return ot(t,C.input)}}function P(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}}function A(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function L(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?n+"px":n:t.style.removeProperty(e)}function E(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex";t.style.opacity="",t.style.display=e}function O(t){t.style.opacity="",t.style.display="none"}function T(t,e,n){e?E(t,n):O(t)}function M(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))}function V(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function j(){return document.body.querySelector("."+C.container)}function q(t){var e=j();return e?e.querySelector(t):null}function H(t){return q("."+t)}function I(){return l(it().querySelectorAll("."+C.icon))}function R(){var t=I().filter(function(t){return M(t)});return t.length?t[0]:null}function D(){return H(C.title)}function N(){return H(C.content)}function U(){return H(C.image)}function _(){return H(C["progress-steps"])}function z(){return H(C["validation-message"])}function W(){return q("."+C.actions+" ."+C.confirm)}function K(){return q("."+C.actions+" ."+C.cancel)}function F(){return H(C.actions)}function Z(){return H(C.header)}function Q(){return H(C.footer)}function Y(){return H(C.close)}function $(){var t=l(it().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=l(it().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return M(t)})}function J(){return"undefined"==typeof window||"undefined"==typeof document}function X(t){te.isVisible()&&tt!==t.target.value&&te.resetValidationMessage(),tt=t.target.value}function G(e,n){e instanceof HTMLElement?n.appendChild(e):"object"===t(e)?ut(n,e):e&&(n.innerHTML=e)}var tt,et=function(t,e){A(t,e,!0)},nt=function(t,e){A(t,e,!1)},ot=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(x(t.childNodes[n],e))return t.childNodes[n]},it=function(){return H(C.popup)},rt=function(){return!at()&&!document.body.classList.contains(C["no-backdrop"])},at=function(){return document.body.classList.contains(C["toast-shown"])},st='\n <div aria-labelledby="'.concat(C.title,'" aria-describedby="').concat(C.content,'" class="').concat(C.popup,'" tabindex="-1">\n   <div class="').concat(C.header,'">\n     <ul class="').concat(C["progress-steps"],'"></ul>\n     <div class="').concat(C.icon," ").concat(k.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(C.icon," ").concat(k.question,'"></div>\n     <div class="').concat(C.icon," ").concat(k.warning,'"></div>\n     <div class="').concat(C.icon," ").concat(k.info,'"></div>\n     <div class="').concat(C.icon," ").concat(k.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(C.image,'" />\n     <h2 class="').concat(C.title,'" id="').concat(C.title,'"></h2>\n     <button type="button" class="').concat(C.close,'">&times;</button>\n   </div>\n   <div class="').concat(C.content,'">\n     <div id="').concat(C.content,'"></div>\n     <input class="').concat(C.input,'" />\n     <input type="file" class="').concat(C.file,'" />\n     <div class="').concat(C.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(C.select,'"></select>\n     <div class="').concat(C.radio,'"></div>\n     <label for="').concat(C.checkbox,'" class="').concat(C.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(C.label,'"></span>\n     </label>\n     <textarea class="').concat(C.textarea,'"></textarea>\n     <div class="').concat(C["validation-message"],'" id="').concat(C["validation-message"],'"></div>\n   </div>\n   <div class="').concat(C.actions,'">\n     <button type="button" class="').concat(C.confirm,'">OK</button>\n     <button type="button" class="').concat(C.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(C.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ut=function(t,e){if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ct=function(){if(J())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t.style[n])return e[n];return!1}();function lt(t,e,n){T(t,n["showC"+e.substring(1)+"Button"],"inline-block"),t.innerHTML=n[e+"ButtonText"],t.setAttribute("aria-label",n[e+"ButtonAriaLabel"]),t.className=C[e],g(t,n.customClass,e+"Button"),et(t,n[e+"ButtonClass"])}function dt(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var pt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},ft=function(t,e){var n=S(N(),t);if(n)for(var o in function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},mt=function(t,e,n){t.className=e,n.inputClass&&et(t,n.inputClass),n.customClass&&et(t,n.customClass.input)},gt={};function ht(t,e){var n=_();if(!e.progressSteps||0===e.progressSteps.length)return O(n);E(n),n.innerHTML="";var o=parseInt(null===e.currentProgressStep?te.getQueueStep():e.currentProgressStep);o>=e.progressSteps.length&&v("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(function(t,i){var r=function(t){var e=document.createElement("li");return et(e,C["progress-step"]),e.innerHTML=t,e}(t);if(n.appendChild(r),i===o&&et(r,C["active-progress-step"]),i!==e.progressSteps.length-1){var a=function(t){var e=document.createElement("li");return et(e,C["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e}(t);n.appendChild(a)}})}function vt(t,e){!function(t,e){var n=it();L(n,"width",e.width),L(n,"padding",e.padding),e.background&&(n.style.background=e.background),n.className=C.popup,e.toast?(et([document.documentElement,document.body],C["toast-shown"]),et(n,C.toast)):et(n,C.modal),g(n,e.customClass,"popup"),"string"==typeof e.customClass&&et(n,e.customClass),A(n,C.noanimation,!e.animation)}(0,e),function(t,e){var n=j();n&&(function(t,e){"string"==typeof e?n.style.background=e:e||et([document.documentElement,document.body],C["no-backdrop"])}(0,e.backdrop),!e.backdrop&&e.allowOutsideClick&&v('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),function(t,e){e in C?et(t,C[e]):(v('The "position" parameter is not valid, defaulting to "center"'),et(t,C.center))}(n,e.position),function(t,e){if(e&&"string"==typeof e){var n="grow-"+e;n in C&&et(t,C[n])}}(n,e.grow),g(n,e.customClass,"container"),e.customContainerClass&&et(n,e.customContainerClass))}(0,e),function(t,e){g(Z(),e.customClass,"header"),ht(0,e),function(t,e){var n=pt.innerParams.get(t);if(n&&e.type===n.type&&R())g(R(),e.customClass,"icon");else if(bt(),e.type)if(yt(),-1!==Object.keys(k).indexOf(e.type)){var o=q(".".concat(C.icon,".").concat(k[e.type]));E(o),g(o,e.customClass,"icon"),A(o,"swal2-animate-".concat(e.type,"-icon"),e.animation)}else d('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))}(t,e),function(t,e){var n=U();if(!e.imageUrl)return O(n);E(n),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),L(n,"width",e.imageWidth),L(n,"height",e.imageHeight),n.className=C.image,g(n,e.customClass,"image"),e.imageClass&&et(n,e.imageClass)}(0,e),function(t,e){var n=D();T(n,e.title||e.titleText),e.title&&G(e.title,n),e.titleText&&(n.innerText=e.titleText),g(n,e.customClass,"title")}(0,e),function(t,e){var n=Y();g(n,e.customClass,"closeButton"),T(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)}(0,e)}(t,e),function(t,e){var n=N().querySelector("#"+C.content);e.html?(G(e.html,n),E(n,"block")):e.text?(n.textContent=e.text,E(n,"block")):O(n),function(t,e){for(var n=pt.innerParams.get(t),o=!n||e.input!==n.input,i=N(),r=["input","file","range","select","radio","checkbox","textarea"],a=0;a<r.length;a++){var s=C[r[a]],u=ot(i,s);ft(r[a],e.inputAttributes),mt(u,s,e),o&&O(u)}if(e.input){if(!gt[e.input])return d('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));o&&E(gt[e.input](e))}}(t,e),g(N(),e.customClass,"content")}(t,e),function(t,e){var n=F(),o=W(),i=K();e.showConfirmButton||e.showCancelButton?E(n):O(n),g(n,e.customClass,"actions"),lt(o,"confirm",e),lt(i,"cancel",e),e.buttonsStyling?function(t,e,n){et([t,e],C.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor),n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);var o=window.getComputedStyle(t).getPropertyValue("background-color");t.style.borderLeftColor=o,t.style.borderRightColor=o}(o,i,e):(nt([o,i],C.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor="")}(0,e),function(t,e){var n=Q();T(n,e.footer),e.footer&&G(e.footer,n),g(n,e.customClass,"footer")}(0,e)}gt.text=gt.email=gt.password=gt.number=gt.tel=gt.url=function(e){var n=ot(N(),C.input);return"string"==typeof e.inputValue||"number"==typeof e.inputValue?n.value=e.inputValue:f(e.inputValue)||v('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(t(e.inputValue),'"')),dt(n,e),n.type=e.input,n},gt.file=function(t){var e=ot(N(),C.file);return dt(e,t),e.type=t.input,e},gt.range=function(t){var e=ot(N(),C.range),n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,e},gt.select=function(t){var e=ot(N(),C.select);if(e.innerHTML="",t.inputPlaceholder){var n=document.createElement("option");n.innerHTML=t.inputPlaceholder,n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return e},gt.radio=function(){var t=ot(N(),C.radio);return t.innerHTML="",t},gt.checkbox=function(t){var e=ot(N(),C.checkbox),n=S(N(),"checkbox");return n.type="checkbox",n.value=1,n.id=C.checkbox,n.checked=Boolean(t.inputValue),e.querySelector("span").innerHTML=t.inputPlaceholder,e},gt.textarea=function(t){var e=ot(N(),C.textarea);return e.value=t.inputValue,dt(e,t),e};var bt=function(){for(var t=I(),e=0;e<t.length;e++)O(t[e])},yt=function(){for(var t=it(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e};function wt(){var t=it();t||te.fire(""),t=it();var e=F(),n=W(),o=K();E(e),E(n),et([t,e],C.loading),n.disabled=!0,o.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Ct(t){return Pt.hasOwnProperty(t)}function kt(t){return Lt[t]}var Bt=[],xt={},St=function(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;xt.restoreFocusTimeout=setTimeout(function(){xt.previousActiveElement&&xt.previousActiveElement.focus?(xt.previousActiveElement.focus(),xt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})},Pt={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,scrollbarPadding:!0},At=["title","titleText","text","html","type","customClass","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","confirmButtonClass","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","cancelButtonClass","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeigth","imageAlt","imageClass","progressSteps","currentProgressStep"],Lt={customContainerClass:"customClass",confirmButtonClass:"customClass",cancelButtonClass:"customClass",imageClass:"customClass",inputClass:"customClass"},Et=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],Ot=Object.freeze({isValidParameter:Ct,isUpdatableParameter:function(t){return-1!==At.indexOf(t)},isDeprecatedParameter:kt,argsToParams:function(e){var n={};switch(t(e[0])){case"object":i(n,e[0]);break;default:["title","html","type"].forEach(function(o,i){switch(t(e[i])){case"string":n[o]=e[i];break;case"undefined":break;default:d("Unexpected type of ".concat(o,'! Expected "string", got ').concat(t(e[i])))}})}return n},isVisible:function(){return M(it())},clickConfirm:function(){return W()&&W().click()},clickCancel:function(){return K()&&K().click()},getContainer:j,getPopup:it,getTitle:D,getContent:N,getImage:U,getIcon:R,getIcons:I,getCloseButton:Y,getActions:F,getConfirmButton:W,getCancelButton:K,getHeader:Z,getFooter:Q,getFocusableElements:$,getValidationMessage:z,isLoading:function(){return it().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return s(this,e)},mixin:function(t){return function(n){function s(){return e(this,s),function(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,r(s).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(s,n),o(s,[{key:"_main",value:function(e){return u(r(s.prototype),"_main",this).call(this,i({},t,e))}}]),s}(this)},queue:function(t){var e=this;function n(t,e){Bt=[],document.body.removeAttribute("data-swal2-queue-step"),t(e)}Bt=t;var o=[];return new Promise(function(t){!function i(r,a){r<Bt.length?(document.body.setAttribute("data-swal2-queue-step",r),e.fire(Bt[r]).then(function(e){void 0!==e.value?(o.push(e.value),i(r+1,a)):n(t,{dismiss:e.dismiss})})):n(t,{value:o})}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(t,e){return e&&e<Bt.length?Bt.splice(e,0,t):Bt.push(t)},deleteQueueStep:function(t){void 0!==Bt[t]&&Bt.splice(t,1)},showLoading:wt,enableLoading:wt,getTimerLeft:function(){return xt.timeout&&xt.timeout.getTimerLeft()},stopTimer:function(){return xt.timeout&&xt.timeout.stop()},resumeTimer:function(){return xt.timeout&&xt.timeout.start()},toggleTimer:function(){var t=xt.timeout;return t&&(t.running?t.stop():t.start())},increaseTimer:function(t){return xt.timeout&&xt.timeout.increase(t)},isTimerRunning:function(){return xt.timeout&&xt.timeout.isRunning()}});function Tt(){var t=pt.innerParams.get(this),e=pt.domCache.get(this);t.showConfirmButton||(O(e.confirmButton),t.showCancelButton||O(e.actions)),nt([e.popup,e.actions],C.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}function Mt(){return!!window.MSInputMethodContext&&!!document.documentMode}function Vt(){var t=j(),e=it();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var jt=function(){null!==B.previousBodyPadding&&(document.body.style.paddingRight=B.previousBodyPadding+"px",B.previousBodyPadding=null)},qt=function(){if(x(document.body,C.iosfix)){var t=parseInt(document.body.style.top,10);nt(document.body,C.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}},Ht=function(){"undefined"!=typeof window&&Mt()&&window.removeEventListener("resize",Vt)},It=function(){l(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Rt={swalPromiseResolve:new WeakMap};function Dt(t,e,n){e?zt(n):(St().then(function(){return zt(n)}),xt.keydownTarget.removeEventListener("keydown",xt.keydownHandler,{capture:xt.keydownListenerCapture}),xt.keydownHandlerAdded=!1),delete xt.keydownHandler,delete xt.keydownTarget,t.parentNode&&t.parentNode.removeChild(t),nt([document.documentElement,document.body],[C.shown,C["height-auto"],C["no-backdrop"],C["toast-shown"],C["toast-column"]]),rt()&&(jt(),qt(),Ht(),It())}function Nt(t,e,n,o){t.removeEventListener(ct,Nt),x(t,C.hide)&&Dt(e,n,o),_t(pt),_t(Rt)}function Ut(t){var e=j(),n=it(),o=pt.innerParams.get(this),i=Rt.swalPromiseResolve.get(this),r=o.onClose,a=o.onAfterClose;n&&!x(n,C.hide)&&(nt(n,C.show),et(n,C.hide),ct&&V(n)?n.addEventListener(ct,Nt.bind(null,n,e,at(),a)):Dt(e,at(),a),null!==r&&"function"==typeof r&&r(n),i(t||{}),delete this.params)}var _t=function(t){for(var e in t)t[e]=new WeakMap},zt=function(t){null!==t&&"function"==typeof t&&setTimeout(function(){t()})};function Wt(t,e,n){var o=pt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function Kt(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var Ft=function(){function t(n,o){e(this,t),this.callback=n,this.remaining=o,this.running=!1,this.start()}return o(t,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),t}(),Zt={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&\/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function Qt(t,e){t.removeEventListener(ct,Qt),e.style.overflowY="auto"}var Yt,$t={select:function(t,e,n){var o=ot(t,C.select);e.forEach(function(t){var e=t[0],i=t[1],r=document.createElement("option");r.value=e,r.innerHTML=i,n.inputValue.toString()===e.toString()&&(r.selected=!0),o.appendChild(r)}),o.focus()},radio:function(t,e,n){var o=ot(t,C.radio);e.forEach(function(t){var e=t[0],i=t[1],r=document.createElement("input"),a=document.createElement("label");r.type="radio",r.name=C.radio,r.value=e,n.inputValue.toString()===e.toString()&&(r.checked=!0);var s=document.createElement("span");s.innerHTML=i,s.className=C.label,a.appendChild(r),a.appendChild(s),o.appendChild(a)});var i=o.querySelectorAll("input");i.length&&i[0].focus()}},Jt=function(t){var e=[];return"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(t,n){e.push([n,t])}):Object.keys(t).forEach(function(n){e.push([n,t[n]])}),e},Xt=Object.freeze({hideLoading:Tt,disableLoading:Tt,getInput:function(t){var e=pt.innerParams.get(t||this);return S(pt.domCache.get(t||this).content,e.input)},close:Ut,closePopup:Ut,closeModal:Ut,closeToast:Ut,enableButtons:function(){Wt(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){Wt(this,["confirmButton","cancelButton"],!0)},enableConfirmButton:function(){p("Swal.disableConfirmButton()","Swal.getConfirmButton().removeAttribute('disabled')"),Wt(this,["confirmButton"],!1)},disableConfirmButton:function(){p("Swal.enableConfirmButton()","Swal.getConfirmButton().setAttribute('disabled', '')"),Wt(this,["confirmButton"],!0)},enableInput:function(){return Kt(this.getInput(),!1)},disableInput:function(){return Kt(this.getInput(),!0)},showValidationMessage:function(t){var e=pt.domCache.get(this);e.validationMessage.innerHTML=t;var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),E(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",C["validation-message"]),P(o),et(o,C.inputerror))},resetValidationMessage:function(){var t=pt.domCache.get(this);t.validationMessage&&O(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),nt(e,C.inputerror))},getProgressSteps:function(){return p("Swal.getProgressSteps()","const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"),pt.innerParams.get(this).progressSteps},setProgressSteps:function(t){p("Swal.setProgressSteps()","Swal.update()");var e=i({},pt.innerParams.get(this),{progressSteps:t});ht(0,e),pt.innerParams.set(this,e)},showProgressSteps:function(){E(pt.domCache.get(this).progressSteps)},hideProgressSteps:function(){O(pt.domCache.get(this).progressSteps)},_main:function(e){var n=this;!function(t){for(var e in t)Ct(i=e)||v('Unknown parameter "'.concat(i,'"')),t.toast&&-1!==Et.indexOf(o=e)&&v('The parameter "'.concat(o,'" is incompatible with toasts')),kt(n=void 0)&&p(n,kt(n));var n,o,i}(e);var o=i({},Pt,e);!function(t){t.inputValidator||Object.keys(Zt).forEach(function(e){t.input===e&&(t.inputValidator=Zt[e])}),t.showLoaderOnConfirm&&!t.preConfirm&&v("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=y(t.animation),t.target&&("string"!=typeof t.target||document.querySelector(t.target))&&("string"==typeof t.target||t.target.appendChild)||(v('Target parameter is not valid, defaulting to "body"'),t.target="body"),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />"));var e=it(),n="string"==typeof t.target?document.querySelector(t.target):t.target;(!e||e&&n&&e.parentNode!==n.parentNode)&&function(t){if(function(){var t=j();t&&(t.parentNode.removeChild(t),nt([document.documentElement,document.body],[C["no-backdrop"],C["toast-shown"],C["has-column"]]))}(),J())d("SweetAlert2 requires document to initialize");else{var e=document.createElement("div");e.className=C.container,e.innerHTML=st;var n=function(t){return"string"==typeof t?document.querySelector(t):t}(t.target);n.appendChild(e),function(t){var e=it();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),"rtl"===window.getComputedStyle(n).direction&&et(j(),C.rtl),function(){var t=N(),e=ot(t,C.input),n=ot(t,C.file),o=t.querySelector(".".concat(C.range," input")),i=t.querySelector(".".concat(C.range," output")),r=ot(t,C.select),a=t.querySelector(".".concat(C.checkbox," input")),s=ot(t,C.textarea);e.oninput=X,n.onchange=X,r.onchange=X,a.onchange=X,s.oninput=X,o.oninput=function(t){X(t),i.value=o.value},o.onchange=function(t){X(t),o.nextSibling.value=o.value}}()}}(t)}(o),Object.freeze(o),xt.timeout&&(xt.timeout.stop(),delete xt.timeout),clearTimeout(xt.restoreFocusTimeout);var r={popup:it(),container:j(),content:N(),actions:F(),confirmButton:W(),cancelButton:K(),closeButton:Y(),validationMessage:z(),progressSteps:_()};pt.domCache.set(this,r),vt(this,o),pt.innerParams.set(this,o);var a=this.constructor;return new Promise(function(e){function i(t){n.closePopup({value:t})}function s(t){n.closePopup({dismiss:t})}Rt.swalPromiseResolve.set(n,e),o.timer&&(xt.timeout=new Ft(function(){s("timer"),delete xt.timeout},o.timer)),o.input&&setTimeout(function(){var t=n.getInput();t&&P(t)},0);for(var u=function(t){o.showLoaderOnConfirm&&a.showLoading(),o.preConfirm?(n.resetValidationMessage(),Promise.resolve().then(function(){return o.preConfirm(t,o.validationMessage)}).then(function(e){M(r.validationMessage)||!1===e?n.hideLoading():i(void 0===e?t:e)})):i(t)},c=function(t){var e=t.target,i=r.confirmButton,c=r.cancelButton,l=i&&(i===e||i.contains(e)),d=c&&(c===e||c.contains(e));switch(t.type){case"click":if(l)if(n.disableButtons(),o.input){var p=function(){var t=n.getInput();if(!t)return null;switch(o.input){case"checkbox":return t.checked?1:0;case"radio":return t.checked?t.value:null;case"file":return t.files.length?t.files[0]:null;default:return o.inputAutoTrim?t.value.trim():t.value}}();o.inputValidator?(n.disableInput(),Promise.resolve().then(function(){return o.inputValidator(p,o.validationMessage)}).then(function(t){n.enableButtons(),n.enableInput(),t?n.showValidationMessage(t):u(p)})):n.getInput().checkValidity()?u(p):(n.enableButtons(),n.showValidationMessage(o.validationMessage))}else u(!0);else d&&(n.disableButtons(),s(a.DismissReason.cancel))}},p=r.popup.querySelectorAll("button"),m=0;m<p.length;m++)p[m].onclick=c,p[m].onmouseover=c,p[m].onmouseout=c,p[m].onmousedown=c;if(r.closeButton.onclick=function(){s(a.DismissReason.close)},o.toast)r.popup.onclick=function(){o.showConfirmButton||o.showCancelButton||o.showCloseButton||o.input||s(a.DismissReason.close)};else{var g=!1;r.popup.onmousedown=function(){r.container.onmouseup=function(t){r.container.onmouseup=void 0,t.target===r.container&&(g=!0)}},r.container.onmousedown=function(){r.popup.onmouseup=function(t){r.popup.onmouseup=void 0,t.target!==r.popup&&!r.popup.contains(t.target)||(g=!0)}},r.container.onclick=function(t){g?g=!1:t.target===r.container&&y(o.allowOutsideClick)&&s(a.DismissReason.backdrop)}}function h(t,e){for(var n=$(),o=0;o<n.length;o++)return(t+=e)===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus();r.popup.focus()}o.reverseButtons?r.confirmButton.parentNode.insertBefore(r.cancelButton,r.confirmButton):r.confirmButton.parentNode.insertBefore(r.confirmButton,r.cancelButton),xt.keydownTarget&&xt.keydownHandlerAdded&&(xt.keydownTarget.removeEventListener("keydown",xt.keydownHandler,{capture:xt.keydownListenerCapture}),xt.keydownHandlerAdded=!1),o.toast||(xt.keydownHandler=function(t){return function(t,e){if(e.stopKeydownPropagation&&t.stopPropagation(),"Enter"!==t.key||t.isComposing)if("Tab"===t.key){for(var o=t.target,i=$(),u=-1,c=0;c<i.length;c++)if(o===i[c]){u=c;break}h(u,t.shiftKey?-1:1),t.stopPropagation(),t.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(t.key)?document.activeElement===r.confirmButton&&M(r.cancelButton)?r.cancelButton.focus():document.activeElement===r.cancelButton&&M(r.confirmButton)&&r.confirmButton.focus():"Escape"!==t.key&&"Esc"!==t.key||!0!==y(e.allowEscapeKey)||(t.preventDefault(),s(a.DismissReason.esc));else if(t.target&&n.getInput()&&t.target.outerHTML===n.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(e.input))return;a.clickConfirm(),t.preventDefault()}}(t,o)},xt.keydownTarget=o.keydownListenerCapture?window:r.popup,xt.keydownListenerCapture=o.keydownListenerCapture,xt.keydownTarget.addEventListener("keydown",xt.keydownHandler,{capture:xt.keydownListenerCapture}),xt.keydownHandlerAdded=!0),n.enableButtons(),n.hideLoading(),n.resetValidationMessage(),o.toast&&(o.input||o.footer||o.showCloseButton)?et(document.body,C["toast-column"]):nt(document.body,C["toast-column"]),"select"===o.input||"radio"===o.input?function(e,n){function o(t){return $t[n.input](i,Jt(t),n)}var i=N();f(n.inputOptions)?(wt(),n.inputOptions.then(function(t){e.hideLoading(),o(t)})):"object"===t(n.inputOptions)?o(n.inputOptions):d("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(t(n.inputOptions)))}(n,o):-1!==["text","email","number","tel","textarea"].indexOf(o.input)&&f(o.inputValue)&&function(t,e){var n=t.getInput();O(n),e.inputValue.then(function(o){n.value="number"===e.input?parseFloat(o)||0:o+"",E(n),n.focus(),t.hideLoading()}).catch(function(t){d("Error in inputValue promise: "+t),n.value="",E(n),n.focus(),(void 0).hideLoading()})}(n,o),function(t){var e=j(),n=it();null!==t.onBeforeOpen&&"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n),t.animation&&(et(n,C.show),et(e,C.fade)),E(n),ct&&V(n)?(e.style.overflowY="hidden",n.addEventListener(ct,Qt.bind(null,n,e))):e.style.overflowY="auto",et([document.documentElement,document.body,e],C.shown),t.heightAuto&&t.backdrop&&!t.toast&&et([document.documentElement,document.body],C["height-auto"]),rt()&&(t.scrollbarPadding&&null===B.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(B.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=B.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}()+"px"),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!x(document.body,C.iosfix)){var t=document.body.scrollTop;document.body.style.top=-1*t+"px",et(document.body,C.iosfix)}}(),"undefined"!=typeof window&&Mt()&&(Vt(),window.addEventListener("resize",Vt)),l(document.body.children).forEach(function(t){t===j()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,j())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}),setTimeout(function(){e.scrollTop=0})),at()||xt.previousActiveElement||(xt.previousActiveElement=document.activeElement),null!==t.onOpen&&"function"==typeof t.onOpen&&setTimeout(function(){t.onOpen(n)})}(o),o.toast||(y(o.allowEnterKey)?o.focusCancel&&M(r.cancelButton)?r.cancelButton.focus():o.focusConfirm&&M(r.confirmButton)?r.confirmButton.focus():h(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),r.container.scrollTop=0})},update:function(t){var e={};Object.keys(t).forEach(function(n){te.isUpdatableParameter(n)?e[n]=t[n]:v('Invalid parameter to update: "'.concat(n,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var n=i({},pt.innerParams.get(this),e);vt(this,n),pt.innerParams.set(this,n),Object.defineProperties(this,{params:{value:i({},this.params,t),writable:!1,enumerable:!0}})}});function Gt(){if("undefined"!=typeof window){"undefined"==typeof Promise&&d("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Yt=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);pt.promise.set(this,i)}}Gt.prototype.then=function(t){return pt.promise.get(this).then(t)},Gt.prototype.finally=function(t){return pt.promise.get(this).finally(t)},i(Gt.prototype,Xt),i(Gt,Ot),Object.keys(Xt).forEach(function(t){Gt[t]=function(){var e;if(Yt)return(e=Yt)[t].apply(e,arguments)}}),Gt.DismissReason=w,Gt.version="8.10.7";var te=Gt;return te.default=te}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);