var FBox_Button_Above_Classic_Editor=function(){function e(){this.init()}var t=e.prototype;return t.init=function(){if(!this.canRun())return!1;this.initEvents()},t.canRun=function(){return!document.body.classList.contains("block-editor-page")},t.initEvents=function(){document.querySelector("#fpf-add-firebox-classic-editor-modal .fb-insert-firebox-shortcode-to-editor").addEventListener("click",function(e){this.appendShortcode(e)}.bind(this))},t.appendShortcode=function(e){var t=e.target.closest(".modal"),o=t.querySelector(".fb_box_ce_modal_box_selector"),n=t.querySelector(".fb_box_ce_modal_box_action"),a=null;o&&void 0!==o.options&&(a=o.options[o.selectedIndex].value);var r={box_id:a,box_cmd:n.options[n.selectedIndex].value,button_label:t.querySelector(".fb_box_ce_modal_box_button_label").value,button_classes:t.querySelector(".fb_box_ce_modal_box_button_classes").value,box_prevent:t.querySelector(".fb_box_ce_modal_box_prevent_default").checked},i=this.getBoxButton(r);i.error?alert(i.message):wp.media.editor.insert(i.message),e.preventDefault()},t.getBoxButton=function(e){return e.box_id&&e.box_cmd&&e.button_label?{message:'<a href="#" '+(e.box_id?' data-fbox="'+e.box_id+'"':"")+(e.box_cmd?' data-fbox-cmd="'+e.box_cmd+'"':"")+(' data-fbox-prevent="'+(e.box_prevent?"1":"0")+'"')+(e.button_classes?' class="'+e.button_classes+'"':"")+">"+e.button_label+"</a>",error:!1}:{message:wp.i18n.__("Please select a box ID, Action and set a Link Label","firebox"),error:!0}},e}();document.addEventListener("DOMContentLoaded",function(e){new FBox_Button_Above_Classic_Editor});
