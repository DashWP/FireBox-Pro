!function(){var e={743:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){var n,i,a,c;n=r,i=t,a=o[t],c=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==e(c)?c:String(c))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}var n="SET_BREAKPOINT",o={breakpoint:"desktop"};wp.data.select("fpframework-breakpoints")||wp.data.registerStore("fpframework-breakpoints",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;return t.type===n?r(r({},e),{},{breakpoint:t.breakpoint}):e},actions:{onBreakpointSet:function(e){return{type:n,breakpoint:e}}},selectors:{getBreakpoint:function(e){return e.breakpoint}}})},92:function(e,t,r){var n;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)i.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):"object"===o(r.amdO)&&r.amdO?void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n):window.classNames=a}()},106:function(e,t,r){"use strict";var n=r(772);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},413:function(e,t,r){e.exports=r(106)()},772:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},57:function(e,t,r){var n;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var l in r)i.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):"object"===o(r.amdO)&&r.amdO?void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n):window.classNames=a}()},333:function(e,t,r){"use strict";var n=r(114);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},311:function(e,t,r){e.exports=r(333)()},114:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.amdO={},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){"use strict";r.r(n);var e,t=window.wp.i18n,o=window.wp.blocks,i=r(413),a=r.n(i),c=window.wp.compose,l=r(92),u=r.n(l),s=window.wp.blockEditor,p=window.wp.data,f=function(e){return"block-".concat(e)},b=window.wp.element,m=function(e){return!!e&&Object.values(e).some((function(e){return null!=e&&""!==e}))};function d(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function w(e,t,r){var n;return n=function(e,t){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==h(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k="desktop",O="tablet",S="mobile",E=(w(e={},k,""),w(e,O,991),w(e,S,575),e),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return[];var t=e.reduce((function(e,t){var r=function(e){if(!e)return"";var t=e.match(/[^{\}]+(?=})/gi)[0];return{selector:e.replace(t,"").replace("{","").replace("}","").trim(),style:t.trim()}}(t),n=e.find((function(e){return e.selector===r.selector}));return n?(n.styles.push(r.style),e):(e.push({selector:r.selector,styles:[r.style]}),e)}),[]);return t.map((function(e){return"".concat(e.selector," { ").concat(e.styles.join(" ")," }")}))},j=function(e){return g(g({},e),{},{rules:x(e.rules)})},R=function(e){var r=e.id,n=e.value,o=e.rule,i=e.unit,a=void 0===i?"":i,c=e.edgeCase,l=e.breakpoint,u=void 0===l?"desktop":l,s=e.oneline,p=void 0!==s&&s;if(null==n||""===n)return null;var f,b,d=o.includes("[BLOCK_ID]")?o.replace("[BLOCK_ID]",r):"".concat(o);if(function(e){return["box-shadow"].some((function(t){return e.includes(t)}))}(o))return["inset","outset"].includes(n.type)&&""!==n.color?(0,t.sprintf)(d,"".concat(n.left,"px ").concat(n.top,"px ").concat(n.width,"px ").concat(n.spread,"px ").concat("outset"===n.type?"":n.type," ").concat(n.color)):null;if(function(e){return["text-shadow"].some((function(t){return e.includes(t)}))}(o))return""!==n.hpos&&""!==n.vpos&&""!==n.blur&&""!==n.color?(0,t.sprintf)(d,"".concat(n.hpos,"px ").concat(n.vpos,"px ").concat(n.blur,"px ").concat(n.color)):null;if(function(e){return["padding","border-radius","margin","position-items"].some((function(t){return e.includes(t)}))&&!["padding-","margin-"].some((function(t){return e.includes(t)}))}(o)){var v=o.match(/margin|border-radius|padding|position-items/gi)[0];if("position-items"===v){var y=["top","right","bottom","left"].map((function(e){if(null!=n[e]&&""!==n[e]){var t="auto"===n[e]?"auto":"".concat(n[e]).concat(a);return"".concat(e,": ").concat(t,";")}})).join(" ");return y.trim()?(f=d,b=" ".concat(y," "),f.replace(/[^{\}]+(?=})/gi,b)):null}var g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!e)return!1;if(m(e)||m(e[t])){var o=e[t]||e;if(["margin","padding"].includes(r)){if(4===Object.values(o).length&&1===new Set(Object.values(o)).size)return"".concat(o.top,"px");if(Object.values(o).every((function(e){return""!==e}))){if(o.top===o.bottom&&o.left===o.right)return"".concat(o.top||0,"px ").concat(o.left||0,"px");Object.values(o).map((function(e){return"".concat(e||0,"px")})).join(" ")}var i=[],a=["top","right","bottom","left"];return n?(a.forEach((function(e){i.push("".concat(o[e]||0,"px"))})),i.join(" ")):(a.forEach((function(e){""!==o[e]&&i.push(r+"-"+e+":"+o[e]+"px;")})),i)}if("border-radius"===r){if(4===Object.values(o).length&&1===new Set(Object.values(o)).size)return"".concat(o.top_left,"px");if(Object.values(o).every((function(e){return""!==e}))){if(o.top_left===o.bottom_right&&o.bottom_left===o.top_right)return"".concat(o.top_left||0,"px ").concat(o.bottom_left||0,"px");Object.values(o).map((function(e){return"".concat(e||0,"px")})).join(" ")}var c=[],l=["top_left","top_right","bottom_right","bottom_left"];return n?(l.forEach((function(e){c.push("".concat(o[e]||0,"px"))})),c.join(" ")):(l.forEach((function(e){""!==o[e]&&c.push("border-"+e.replace("_","-")+"-radius:"+o[e]+"px;")})),c)}}return!1}(n,null,v,p);if(!g)return null;if(g&&"string"==typeof g)return(0,t.sprintf)(d,g)||null;if(g&&"object"===h(g))return d=(d=(d=(d=d.replace("margin: ","")).replace("padding: ","")).replace("border-radius: ","")).replace("%s;","%s"),(0,t.sprintf)(d,g.join(""))||null}if(function(e){return!!e&&"object"===h(e)&&"url"in e&&"attachment"in e&&"repeat"in e}(n)){if(!n.url)return;var w="none"!==n.url?"url(".concat(n.url,")"):"none",k=["background-image: ".concat(w,";"),"background-repeat: ".concat(n.repeat,";"),"background-size: ".concat(n.size,";"),"background-position: ".concat(n.position,";"),"background-attachment: ".concat(n.attachment,";")].join(" ");return(0,t.sprintf)(d,k)}if(c){var O=c.find((function(e){return e.edge===n}));if(O)return""===O.value||O.skipInBreakpoints&&O.skipInBreakpoints.includes(u)?null:(a=O.unit||"",(0,t.sprintf)(d,"".concat(O.value).concat(a)))}return(0,t.sprintf)(d,"".concat(n).concat(a))},_=function e(t){return b.Children.toArray(t).map((function(t){return Array.isArray(t.props.children)?e(t.props.children):t})).reduce((function(e,t){return Array.isArray(t)?[].concat(d(e),d(t)):[].concat(d(e),[t])}),[]).filter((function(e){return e.type&&"Rule"===e.type.displayName}))},P=function(e){var t=e.id,r=e.children,n=e.getCSSRule,o=e.mapper,i=void 0===o?function(e){return e}:o,a=[{name:"desktop",media:"max",width:E.desktop,rules:[]},{name:"tablet",media:"max",width:E.tablet,rules:[]},{name:"mobile",media:"max",width:E.mobile,rules:[]},{name:"desktop-only",media:"min",width:E.tablet+1,rules:[]},{name:"tablet-only",media:"min",width:E.mobile+1,rules:[]}];return _(r).reduce((function(e,r){var o=r.props,i=o.value,a=o.rule,c=o.unit,l=o.edgeCase,u=o.breakpointLimit,s=o.oneline;if(null==i)return e;if("object"!==h(i)||!("desktop"in i)){var p=e.find((function(e){return"desktop"===e.name})),f=n({id:t,value:i,rule:a,unit:c,edgeCase:l,breakpoint:"desktop",oneline:s});return null!=f&&p.rules.push(f),e}return Object.keys(i).forEach((function(r){var o=e.find((function(e){var t=e.name;return u&&"mobile"!==r?"".concat(r,"-only")===t:t===r})),p=n({id:t,value:i[r],rule:a,unit:c,edgeCase:l,breakpoint:r,oneline:s});null!=p&&o&&o.rules.push(p)})),e}),a).map(i)},C=r(311),B=r.n(C),I={value:B().oneOfType([B().string,B().number,B().object]).isRequired,rule:B().string.isRequired,unit:B().oneOf(["","px","%","em","rem","vh","vw","pt","cm","mm"]),edgeCase:B().arrayOf(B().shape({edge:B().any.isRequired,value:B().oneOfType([B().string,B().number]).isRequired,skipInBreakpoints:B().array})),breakpointLimit:B().bool,oneline:B().bool},D=function(){return null};D.displayName="Rule",D.propTypes=I;var T=D,N=window.wp.components;function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){var n;return n=function(e,t){if("object"!=q(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==q(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var U=function(e){var r,n=e.setAttributes,o=e.attributeKey,i=e.attributes,a=e.label,c=e.breakpoint,l=e.positionsLabels,u=void 0===l?[]:l,s=e.positions,p=void 0===s?["top","right","bottom","left"]:s,f=i[o],b=p[0],m=p[1],d=p[2],v=p[3],y=null===(r=i[o])||void 0===r?void 0:r.linked;return React.createElement("div",{className:"wp-block-fpframework-control-spacing components-base-control"},React.createElement("p",{className:"wp-block-fpframework-control-spacing-label"},a),React.createElement("div",{className:"wp-block-fpframework-control-spacing-controls-wrap"},React.createElement("div",{className:"wp-block-fpframework-control-spacing-controls"},p.map((function(e,t){var r;return React.createElement("div",{key:t,className:"wp-block-fpframework-spacing-controls-item"},React.createElement(N.TextControl,{value:c?f[c][e]:f[e],type:"number",min:-200,max:200,step:1,onChange:function(t){return function(e,t){var r,i;if(c)return y?void n(z({},o,L(L({},f),{},z({},c,L(L({},f[c]),{},(r={},z(r,b,e),z(r,m,e),z(r,d,e),z(r,v,e),r)))))):void n(z({},o,L(L({},f),{},z({},c,L(L({},f[c]),{},z({},t,e))))));n(z({},o,L(L({},f),{},y?(z(i={},b,e),z(i,m,e),z(i,d,e),z(i,v,e),i):z({},t,e))))}(t,e)}}),React.createElement("p",{className:"label",dangerouslySetInnerHTML:{__html:null!==(r=u[e])&&void 0!==r?r:e}}))}))),React.createElement(N.Button,{isSecondary:!y,isPrimary:y,className:"components-toolbar__control",label:(0,t.__)("Link Values","fpf-framework"),icon:"admin-links",onClick:function(){n(z({},o,L(L({},f),{},{linked:!y})))}})))};function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var W=function(e){var r=e.label,n=e.disableAlpha,o=void 0!==n&&n,i=e.wrapperClass,a=void 0===i?"":i,c=e.value,l=e.help,u=void 0===l?"":l,s=e.defaultValue,f=void 0===s?"":s,m=e.onChange,d=K((0,b.useState)(!1),2),v=d[0],y=d[1],g=K((0,b.useState)(!1),2),h=g[0],w=g[1],k=(0,p.useSelect)((function(e){return e("core/block-editor").getSettings().colors}));return React.createElement("div",{className:"components-base-control"},React.createElement("div",{className:"wp-block-fpframework-color-selector-settings-container ".concat(a)},React.createElement("div",{className:"inner"},r&&React.createElement("span",{className:"wp-block-fpframework-color-selector-label"},r),React.createElement("div",{className:"actions"},c&&c!==f&&React.createElement(N.Tooltip,{text:(0,t.__)("Reset","fpf-framework")},React.createElement(N.Button,{className:"components-color-palette__clear",type:"button",onClick:function(){m(f)},isSmall:!0},React.createElement(N.Dashicon,{icon:"redo"}))),React.createElement("div",{className:"wp-block-fpframework-color-selector-color-click"},v&&React.createElement(b.Fragment,null,React.createElement(N.Popover,{position:"top left",className:"wp-block-fpframework-popover-color",onClose:function(){return y(!1)}},React.createElement(N.ColorPicker,{key:h,color:c,onChangeComplete:function(e){if(e.rgb&&1===e.rgb.a||o)m(e.hex);else{var t=e.rgb,r=t.r,n=t.g,i=t.b,a=t.a;m("rgba(".concat(r,", ").concat(n,", ").concat(i,", ").concat(a,")"))}},disableAlpha:!1}),k.length>0&&React.createElement("div",{className:"components-color-palette"},k.map((function(e){return React.createElement("div",{key:e.slug,className:"components-color-palette__item-wrapper"},React.createElement(N.Button,{type:"button",className:"components-color-palette__item ".concat(c===e.color?"is-active":""),onClick:function(){m(e.color),w((function(e){return!e}))},style:{backgroundColor:e.color,color:e.color},"aria-label":e.name?
// translators: %s: The name of the color i.e.: "blue".
// translators: %s: The name of the color i.e.: "blue".
(0,t.sprintf)((0,t.__)("Color: %s"),name):
// translators: %s: color hex code i.e.: "#ffffff".
// translators: %s: color hex code i.e.: "#ffffff".
(0,t.sprintf)((0,t.__)("Color hex code: %s"),e),"aria-pressed":e.color===c}),e.color===c&&React.createElement(N.Dashicon,{icon:"saved"}))}))),React.createElement("div",{className:"wp-block-fpframework-color-selector-popover-footer"},React.createElement(N.Button,{isSecondary:!0,isSmall:!0,disabled:!c,onClick:function(){return m(f)}},(0,t.__)("Clear","fpf-framework"))))),React.createElement(N.Tooltip,{text:(0,t.__)("Select Color","fpf-framework")},React.createElement(N.Button,{className:"wp-block-fpframework-color-selector-icon-indicator",onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},onClick:function(){y((function(e){return!e}))}},React.createElement(N.ColorIndicator,{className:"wp-block-fpframework-color-selector-indicator"+(""===c?" is-empty":""),colorValue:c})))))),u&&React.createElement("div",{className:"wp-block-fpframework-color-selector-help"},u)))},H=r(57),M=r.n(H),F=(r(743),function(e){var t=e.children,r=e.childrenClass,n=void 0===r?"":r,o=e.wrapperClass,i=void 0===o?"":o,a=(0,p.useSelect)((function(e){return e("fpframework-breakpoints").getBreakpoint()})),c=(0,p.useDispatch)("fpframework-breakpoints").onBreakpointSet;return React.createElement("div",{className:"components-base-control wp-block-fpframework-responsive-control-wrap ".concat(i)},React.createElement("div",{className:"wp-block-fpframework-responsive-control-wrap-buttons"},[{value:"desktop",icon:"desktop"},{value:"tablet",icon:"tablet"},{value:"mobile",icon:"smartphone"}].map((function(e,t){return React.createElement("button",{key:t,onClick:function(){return c(e.value)},className:M()({"wp-block-fpframework-responsive-control-wrap-button":!0,active:e.value===a})},React.createElement("span",{className:"dashicons dashicons-".concat(e.icon)}))}))),React.createElement("div",{className:n},t(a)))}),G=window.wp.element,Y=window.wp.primitives,$=(0,G.createElement)(Y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,G.createElement)(Y.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),J=(0,G.createElement)(Y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,G.createElement)(Y.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),Q=(0,G.createElement)(Y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,G.createElement)(Y.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"}));function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){var n;return n=function(e,t){if("object"!=X(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=X(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==X(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var re=[{icon:$,title:(0,t.__)("Hide on desktop","fpf-framework"),breakpoint:k,value:"fpframework-hidden-desktop"},{icon:J,title:(0,t.__)("Hide on tablet","fpf-framework"),breakpoint:O,value:"fpframework-hidden-tablet"},{icon:Q,title:(0,t.__)("Hide on mobile","fpf-framework"),breakpoint:S,value:"fpframework-hidden-mobile"}],ne={values:B().shape({desktop:B().bool,tablet:B().bool,mobile:B().bool}),onChange:B().func.isRequired,label:B().string,isCollapsed:B().bool},oe=function(e){var t=e.values,r=void 0===t?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.desktop,r=void 0===t?"":t,n=e.tablet,o=void 0===n?"":n,i=e.mobile;return{desktop:r,tablet:o,mobile:void 0===i?"":i}}():t,n=e.onChange,o=e.label,i=void 0===o?"":o;return React.createElement(N.BaseControl,null,""!==i&&React.createElement("div",{className:"fpframework-gutenberg-m-b-10"},i),re.map((function(e){var t=!!r[e.breakpoint];return React.createElement(N.ToggleControl,{key:e.breakpoint,label:e.title,checked:t,onChange:function(){return n(ee(ee({},r),{},te({},e.breakpoint,!t)))}})})))};oe.propTypes=ne;var ie=oe,ae={value:B().string.isRequired,label:B().string,className:B().string,onUpdate:B().func.isRequired},ce=function(e){var r=e.value,n=e.className,o=void 0===n?"":n,i=e.label,a=void 0===i?(0,t.__)("Orientation","fpf-framework"):i,c=e.onUpdate,l=function(e){c(e.target.closest(".wp-fpframework-flex-control-item").dataset.orientation)};return React.createElement("div",{className:"wp-fpframework-flex-control-wrapper".concat(o?" "+o:"")},React.createElement("div",{className:"control-title fpframework-gutenberg-m-b-5"},a),React.createElement("div",{className:"wp-fpframework-flex-control"},React.createElement(N.Button,{className:"wp-fpframework-flex-control-item".concat("row"===r?" active":""),"data-orientation":"row",onClick:l},React.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},React.createElement("path",{fill:"currentColor",d:"M14.3 6.7l-1.1 1.1 4 4H4v1.5h13.3l-4.1 4.4 1.1 1.1 5.8-6.3z"}))),React.createElement(N.Button,{className:"wp-fpframework-flex-control-item".concat("column"===r?" active":""),"data-orientation":"column",onClick:l},React.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},React.createElement("path",{fill:"currentColor",d:"M16.2 13.2l-4 4V4h-1.5v13.3l-4.5-4.1-1 1.1 6.2 5.8 5.8-5.8-1-1.1z"})))))};ce.propTypes=ae;var le=ce;function ue(e){return ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(e)}function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){fe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function fe(e,t,r){var n;return n=function(e,t){if("object"!=ue(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=ue(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==ue(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var be={attributes:a().object.isRequired,setAttributes:a().func.isRequired},me=function(e){var r=e.attributes,n=e.setAttributes,o=r.backgroundColor,i=r.fullWidth,a=r.equalSizes,c=r.buttonsDirection,l=r.align,u=r.visibility,p=r.gap,f=r.inForm,m=r.formFieldWidth;return React.createElement(b.Fragment,null,React.createElement(s.InspectorControls,null,React.createElement(N.PanelBody,{title:(0,t.__)("Buttons","firebox"),initialOpen:!0},React.createElement(F,null,(function(e){return React.createElement(s.AlignmentToolbar,{isCollapsed:!1,value:l[e],onChange:function(t){return n({align:pe(pe({},l),{},fe({},e,null!=t?t:""))})}})})),f&&React.createElement(SelectControl,{label:(0,t.__)("Form Field Width","firebox"),options:[{label:"0%",value:"0%"},{label:"5%",value:"5%"},{label:"10%",value:"10%"},{label:"20%",value:"20%"},{label:"25%",value:"25%"},{label:"30%",value:"30%"},{label:"33%",value:"33%"},{label:"40%",value:"40%"},{label:"50%",value:"50%"},{label:"60%",value:"60%"},{label:"66%",value:"66%"},{label:"70%",value:"70%"},{label:"75%",value:"75%"},{label:"80%",value:"80%"},{label:"90%",value:"90%"},{label:"95%",value:"95%"},{label:"100%",value:"100%"}],value:m,onChange:function(e){return n({formFieldWidth:e})}}),React.createElement(F,null,(function(e){return React.createElement(b.Fragment,null,React.createElement(N.RangeControl,{label:(0,t.__)("Buttons Gap (px)","firebox"),min:0,max:100,value:p[e],allowReset:!0,onChange:function(t){n({gap:pe(pe({},p),{},fe({},e,null!=t?t:8))})}}))})),React.createElement(le,{label:(0,t.__)("Buttons Direction","firebox"),className:"components-base-control",value:c,onUpdate:function(e){return n({buttonsDirection:e})}}),React.createElement(ToggleControl,{label:(0,t.__)("Buttons Size","firebox"),checked:!!i,onChange:function(){return n({fullWidth:!i})},help:i?(0,t.__)("Fill container","firebox"):(0,t.__)("Hug contents","firebox")}),"row"===c&&i&&React.createElement(ToggleControl,{label:(0,t.__)("Equal button sizes","firebox"),checked:!!a,onChange:function(){return n({equalSizes:!a})},help:a?(0,t.__)("Buttons have equal sizes","firebox"):(0,t.__)("Buttons have unequal sizes","firebox")}),React.createElement(F,null,(function(e){return React.createElement(U,{label:(0,t.__)("Margin (px)","firebox"),attributeKey:"margin",attributes:r,setAttributes:n,breakpoint:e})})),React.createElement(F,null,(function(e){return React.createElement(U,{label:(0,t.__)("Padding (px)","firebox"),attributeKey:"padding",attributes:r,setAttributes:n,breakpoint:e})}))),React.createElement(N.PanelBody,{title:(0,t.__)("Colors","firebox"),initialOpen:!1},React.createElement(W,{label:(0,t.__)("Background Color","firebox"),value:o||"",onChange:function(e){return n({backgroundColor:e})}})),React.createElement(N.PanelBody,{title:(0,t.__)("Visibility Settings","firebox"),initialOpen:!1},React.createElement(ie,{values:u,onChange:function(e){return n({visibility:e})}}))))};me.propTypes=be;var de=me,ve={children:B().oneOfType([B().node,B().array]),id:B().string},ye=function(e){var t,r=e.id,n=void 0===r?"":r,o=e.children,i=P({id:n,children:o,getCSSRule:R,mapper:j});return function(e){return e.every((function(e){return 0===e.rules.length}))}(i)?null:React.createElement("style",{dangerouslySetInnerHTML:{__html:(t=i,t.reduce((function(e,t){if(!t.rules.length)return e;var r=t.rules.map((function(e){return e.trim()})).join("\n");return t.width?"tablet-only"===t.name?"".concat(e,"\n\n\t\t\t\t@media (min-width: ").concat(E.mobile+1,"px) and (max-width: ").concat(E.tablet,"px) {\n\t\t\t\t\t").concat(r,"\n\t\t\t\t}\n\t\t\t\t"):"".concat(e,"\n\n\t\t\t@media (").concat(t.media,"-width: ").concat(t.width,"px) {\n\t\t\t\t").concat(r,"\n\t\t\t}\n\t\t\t"):"".concat(e).concat(r,"\n")}),"").trim())}})};ye.propTypes=ve;var ge=ye,he={attributes:a().object.isRequired,children:a().node},we=function(e){var t=e.attributes,r=e.children,n=t.uniqueId,o=t.padding,i=t.margin,a=t.backgroundColor,c=t.fullWidth,l=t.buttonsDirection,u=t.align,s=t.gap,p=t.inForm,b=t.formFieldWidth,m=f(n),d="column"==l&&c?100:"",v={desktop:"left"==u.desktop?"flex-start":"right"==u.desktop?"flex-end":"center"==u.desktop?"center":"",tablet:"left"==u.tablet?"flex-start":"right"==u.tablet?"flex-end":"center"==u.tablet?"center":"",mobile:"left"==u.mobile?"flex-start":"right"==u.mobile?"flex-end":"center"==u.mobile?"center":""};return React.createElement(ge,{id:m},React.createElement(T,{value:s,rule:".wp-block-firebox-buttons.[BLOCK_ID] { gap: %s; }",unit:"px"}),p&&React.createElement(T,{value:b,rule:".wp-block-firebox-buttons.[BLOCK_ID] { --field-width: %s; }"}),React.createElement(T,{value:a||"",rule:".wp-block-firebox-buttons.[BLOCK_ID] { background-color: %s; }"}),React.createElement(T,{value:i,rule:".wp-block-firebox-buttons.[BLOCK_ID] { margin: %s; }",unit:"px"}),React.createElement(T,{value:o,rule:".wp-block-firebox-buttons.[BLOCK_ID] { padding: %s; }",unit:"px"}),"row"==l&&React.createElement(T,{value:u,rule:".wp-block-firebox-buttons.[BLOCK_ID] { justify-content: %s; }",unit:""}),"column"==l&&React.createElement(T,{value:v,rule:".wp-block-firebox-buttons.[BLOCK_ID] { align-items: %s; }",unit:""}),React.createElement(T,{value:l,rule:".wp-block-firebox-buttons.[BLOCK_ID] { flex-direction: %s; }",unit:""}),React.createElement(T,{value:d,rule:".wp-block-firebox-buttons.[BLOCK_ID] { width: %s; }",unit:"%"}),React.createElement(T,{value:d,rule:".wp-block-firebox-buttons.[BLOCK_ID] .wp-block-firebox-button { width: %s; }",unit:"%"}),React.createElement(T,{value:d,rule:".wp-block-firebox-buttons.[BLOCK_ID] .wp-block-firebox-button a { width: %s; }",unit:"%"}),r)};we.propTypes=he;var ke=we,Oe=window.lodash;function Se(e){return Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Se(e)}function Ee(e,t,r){var n;return n=function(e,t){if("object"!=Se(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=Se(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==Se(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var xe={className:a().string,attributes:a().object.isRequired,setAttributes:a().func.isRequired,clientId:a().string.isRequired,hasInnerBlocks:a().bool.isRequired},je=function(e){var t,r=e.attributes,n=e.setAttributes,o=e.clientId,i=e.className,a=e.hasInnerBlocks,c=r.uniqueId,l=r.align,b=r.fullWidth,m=r.equalSizes,d=r.buttonsDirection,v=r.gap,y=r.inForm,g=r.formFieldWidth,h=(0,p.useDispatch)("firebox/data").addUniqueID,w=(0,p.useSelect)((function(e){var t,r;return{isUniqueID:function(t){return e("firebox/data").isUniqueID(t)},isUniqueBlock:function(t,r){return e("firebox/data").isUniqueBlock(t,r)},parentData:{rootBlock:e("core/block-editor").getBlock(e("core/block-editor").getBlockHierarchyRootClientId(o)),postId:null!==(t=e("core/editor"))&&void 0!==t&&t.getCurrentPostId()?null===(r=e("core/editor"))||void 0===r?void 0:r.getCurrentPostId():"",reusableParent:e("core/block-editor").getBlockAttributes(e("core/block-editor").getBlockParentsByBlockName(o,"core/block").slice(-1)[0]),editedPostId:!!e("core/edit-site")&&e("core/edit-site").getEditedPostId()}}}),[o]),O=w.isUniqueID,S=w.isUniqueBlock,E=w.parentData;useEffect((function(){var e,t,i,a,l,u=(t=(e=E).postId,i=e.reusableParent,a=e.editedPostId,l=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"block-unknown";return(0,Oe.has)(t,"ref")?t.ref:e||r}(t,i,0),0===l&&a?function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}(a)%1e6:l),s=function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=e&&2===e.split("_").length,c=(o?o+"_":"")+t.substr(2,9);return!e||a&&e.split("_")[0]!==o.toString()?r(c)?c:(0,Oe.uniqueId)(c):r(e)||n(e,t)?e:i?(0,Oe.uniqueId)(c):c}(c,o,O,S,u);s!==c?(r.uniqueId=s,n({uniqueId:s}),h(s,o)):(n({uniqueId:c}),h(c,o))}),[]);var x=l[k],j=f(c),R=(0,s.useBlockProps)({id:o,className:u()((t={"wp-block":!0,"wp-block-firebox":!0},Ee(t,x,!0),Ee(t,"is-fullwidth",b),Ee(t,"buttons-direction-"+d,!0),t))}),_=(0,s.useInnerBlocksProps)({id:j,className:u()(i,j,{"wp-block-firebox-buttons":!0,"fpf-buttons-equal-sizes":m})},{allowedBlocks:["firebox/button"],templateLock:!1,template:[["firebox/button"]],__experimentalUIParts:{hasSelectedUI:!1},__experimentalMoverDirection:"horizontal",directInsert:!0,__experimentalLayout:{},templateInsertUpdatesSelection:!0,renderAppender:a?void 0:function(){return React.createElement(s.InnerBlocks.ButtonBlockAppender,null)}});return React.createElement("div",R,React.createElement(ke,{attributes:r},React.createElement(T,{value:v,rule:".wp-block-firebox-buttons.[BLOCK_ID] > .block-editor-inner-blocks > .block-editor-block-list__layout { gap: %s; }",unit:"px"}),y&&React.createElement(T,{value:g,rule:".wp-block-firebox-buttons#block-".concat(o," { --field-width: %s; }")})),React.createElement("div",_),React.createElement(de,{attributes:r,setAttributes:n}))};je.propTypes=xe;var Re=(0,p.withSelect)((function(e,t){var r=t.clientId,n=(0,e("core/block-editor").getBlock)(r);return{hasInnerBlocks:!(!n||!n.innerBlocks.length)}})),_e=(0,c.compose)(Re)(je),Pe=function(e){if(e)return Object.keys(e).reduce((function(t,r){return e[r]?(t.push("fpframework-hidden-".concat(r)),t):t}),[]).join(" ")};function Ce(e){return Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(e)}(0,o.registerBlockType)("firebox/buttons",{icon:function(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",viewBox:"0 0 48 48",className:"firebox-gutenberg-block-list-item"},React.createElement("rect",{fill:"transparent",x:"2",y:"18",width:"18",height:"12",rx:"1",stroke:"#2438E9",strokeWidth:"3"}),React.createElement("rect",{x:"28",y:"18",width:"18",height:"12",rx:"1",fill:"#2438E9",stroke:"#2438E9",strokeWidth:"3"}))},edit:_e,save:function(e){var t,r,n,o,i=e.attributes,a=e.className,c=i.uniqueId,l=i.fullWidth,p=i.equalSizes,b=i.buttonsDirection,m=i.visibility,d=f(c);return React.createElement("div",s.useBlockProps.save({id:d,className:u()(a,d,Pe(m),(t={"wp-block-firebox":!0,"is-fullwidth":l,"fpf-buttons-equal-sizes":p},r="buttons-direction-"+b,n=!0,o=function(e,t){if("object"!=Ce(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=Ce(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==Ce(o)?o:String(o))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t))}),React.createElement(ke,{attributes:i}),React.createElement(s.InnerBlocks.Content,null))}})}(),(window.wp=window.wp||{})["buttons/index"]=n}();