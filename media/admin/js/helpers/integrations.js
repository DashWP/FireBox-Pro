(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.wp.i18n;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){var i;return i=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t);if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t,"string"),(t="symbol"==n(i)?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return'<a href="https://www.fireplugins.com/docs/firebox/how-to-connect-firebox-with-'.concat(e,'#find_my_api_key" target="_blank">').concat((0,t.__)("Where can I find my API Key?"),"</a>")};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){var r;return r=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t,"string"),(t="symbol"==a(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=wp.compose.createHigherOrderComponent,p=wp.element,m=p.Fragment,b=p.useState,g=wp.blockEditor.InspectorControls,d=wp.components.PanelBody;wp.hooks.addFilter("blocks.registerBlockType","firebox/integrations-extend",(function(e,t){return"firebox/form"!==t||(e.attributes.integrations.default.push({label:__("AcyMailing","firebox"),value:"AcyMailing"}),e.attributes.acymailingListID={type:"string",default:""},e.attributes.acymailingDoubleOptin={type:"boolean",default:!1}),e}));var v=y((function(e){return function(n){var r,a,c,y,p,v,O,w,h,j,S,_,P,E,k,A,D,x=n.attributes,I=n.setAttributes,M=x.actions,R=x.acymailingListID,T=x.acymailingDoubleOptin,C=(A=b(!1),D=2,function(e){if(Array.isArray(e))return e}(A)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,l,a=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}(A,D)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(A,D)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),L=C[0],F=C[1];return React.createElement(m,null,React.createElement(e,n),React.createElement(g,null,(null==M?void 0:M.AcyMailing)&&React.createElement(d,{title:__("AcyMailing Integration","firebox"),initialOpen:!1,onToggle:function(e){return n=e,c=(r="AcyMailing").toLowerCase(),F((function(e){return u(u({},e),{},s({},c,u(u({},e[c]),{},{panelOpen:!0})))})),void(!n||null!=L&&null!==(a=L[c])&&void 0!==a&&a.lists||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"skip",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,a=n.toLowerCase();if(r((function(e){return i(i({},e),{},o({},a,i(i({},e[a]),{},{lists:!1,message:{type:"",message:""}})))})),""!==(null==e?void 0:e.trim())||"skip"===e){var c=new FormData;c.append("nonce",fpf_js_object.nonce),null!==e&&c.append("api_key",e),c.append("integration",n),c.append("action","fb_get_integration_lists"),fetch(fpf_js_object.ajax_url,{method:"POST",body:c}).then((function(e){return e.json()})).then((function(e){var t=!1,n="",l=!1;if(e.error){var c=e.message;e.help&&(c+=" <div>"+e.help+"</div>"),n="error",l=c}else t=e.message.lists;r((function(e){return i(i({},e),{},o({},a,i(i({},e[a]),{},{lists:t,message:{type:n,message:l}})))}))}))}else r((function(e){return i(i({},e),{},o({},a,i(i({},e[a]),{},{lists:!1,message:{type:"info",message:(0,t.__)("Please enter an API Key.","firebox")+"<div>"+l(a)+"</div>"}})))}))}("skip",r,F));var n,r,a,c}},""===(null==L||null===(r=L.acymailing)||void 0===r||null===(a=r.message)||void 0===a?void 0:a.type)&&!(null!=L&&null!==(c=L.acymailing)&&void 0!==c&&c.lists)&&React.createElement("div",null,__("Loading AcyMailing lists...","firebox")),"info"===(null==L||null===(y=L.acymailing)||void 0===y||null===(p=y.message)||void 0===p?void 0:p.type)&&React.createElement("div",{dangerouslySetInnerHTML:{__html:null==L||null===(v=L.acymailing)||void 0===v||null===(O=v.message)||void 0===O?void 0:O.message}}),"error"===(null==L||null===(w=L.acymailing)||void 0===w||null===(h=w.message)||void 0===h?void 0:h.type)&&React.createElement("div",{className:"fpframework-color-red",dangerouslySetInnerHTML:{__html:__("AcyMailing error:","firebox")+" "+(null==L||null===(j=L.acymailing)||void 0===j||null===(S=j.message)||void 0===S?void 0:S.message)}}),""===(null==L||null===(_=L.acymailing)||void 0===_||null===(P=_.message)||void 0===P?void 0:P.type)&&(null==L||null===(E=L.acymailing)||void 0===E?void 0:E.lists)&&React.createElement(React.Fragment,null,React.createElement(SelectControl,{label:__("List","firebox"),value:R,options:null==L||null===(k=L.acymailing)||void 0===k?void 0:k.lists,onChange:function(e){return I({acymailingListID:e})}}),React.createElement(ToggleControl,{label:__("Double Optin","firebox"),default:!1,checked:T,onChange:function(e){return I({acymailingDoubleOptin:e})}})))))}}),"acymailingPanel");wp.hooks.addFilter("editor.BlockEdit","firebox/integrations/acymailing/panel",v),(window.wp=window.wp||{})["integrations.js"]=e})();