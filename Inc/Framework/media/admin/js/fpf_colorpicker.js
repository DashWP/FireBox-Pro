var FPF_Colorpicker=function(){function e(){this.colorPickerClass=".fpf-field-control.color:not(.no-render)",this.init()}var r=e.prototype;return r.init=function(){this.colorPickersExist()&&this.initColorPickers()},r.initColorPickers=function(){var c=this,l=this;document.querySelectorAll(this.colorPickerClass).forEach(function(e){e.classList.add("no-render");var t=e.querySelector(".fpf-colorpicker-item"),o=e.querySelector(".color-preview"),i=e.querySelector(".color-preview-value");jQuery(t).wpColorPicker({change:function(e,r){var t=r.color.toCSS();l.updateValue(t,o,i)}}),t.value&&c.updateValue(t.value,o,i);var n,r=e.querySelector(".wp-picker-container").querySelector(".wp-color-result");e.querySelector(".fpf-colorpicker-opener").addEventListener("click",function(e){r.click(),e.preventDefault(),e.stopPropagation()});i.addEventListener("input",function(e){clearTimeout(n);var r=e.target.value;this.updateValue(r,o,t),n=setTimeout(function(){jQuery(t).trigger("change")},300)}.bind(c))})},r.updateValue=function(e,r,t){e=e.replace(/;+$/,""),r.removeAttribute("style"),r.style.background=e,t.value=e,t.dispatchEvent(new Event("input",{bubbles:!0}))},r.colorPickersExist=function(){return!!document.querySelectorAll(this.colorPickerClass).length},e}();document.addEventListener("DOMContentLoaded",function(e){new FPF_Colorpicker});
