var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");function r(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}function l({position:e,delay:t}){i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{position:"center-top"})}function u({position:e,delay:t}){i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{position:"center-top"})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let{delay:t,step:o,amount:n}=e.target.elements,a=Number(t.value);const s=Number(o.value),d=Number(n.value);if(a<0||s<0||d<0)return void i.Notify.failure("❌ Negative number!",{position:"center-top"});for(let e=1;e<=d;e+=1)r(e,a).then(l).catch(u),a+=s}));
//# sourceMappingURL=03-promises.b33cf4f5.js.map