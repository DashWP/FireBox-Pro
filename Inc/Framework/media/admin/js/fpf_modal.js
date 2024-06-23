var FPF_Modal=function(){function r(){this.initEvents()}var e=r.prototype;return e.initEvents=function(){document.addEventListener("click",function(e){this.handleOpen(e),this.handleClose(e),this.handleSave(e)}.bind(this)),document.addEventListener("keydown",function(e){this.handleEscapeClose(e)}.bind(this))},e.handleOpen=function(e){var t=e.target.closest(".fpf-modal-opener");if(!t||e.target.classList.contains("fpf-modal-prevent"))return!1;var a=t.getAttribute("data-fpf-modal");if(!a)return!1;var n=document.querySelector(".fpf-modal > .modal"+a);n&&(n.closest(".fpf-modal").modal=this,r.open(n,t),"false"!==t.dataset.fpfModalPrevent&&e.preventDefault())},r.open=function(e,t){void 0===t&&(t=null);var a={modal_name:e.id,initiator:t},n=new CustomEvent("fpf_modal_open",{detail:a,cancelable:!0});e.dispatchEvent(n),document.body.classList.add("fpf-modal-open","fpf-modal-"+e.id+"-open");var o=e.parentElement;o.classList.add("is-visible"),r.tabindex||(r.tabindex=0),o.tabindex=r.tabindex,r.tabindex++,o.focus()},e.handleClose=function(e){(e.target.closest(".fpf-modal-close")||this.canCloseOnOverlay(e.target))&&(r.closeModal(e.target.closest(".fpf-modal")),e.preventDefault())},e.handleSave=function(e){var t=e.target.closest(".fpf-modal-save");if(t){var a=e.target.closest(".fpf-modal"),n={modal_name:a.querySelector(".modal").id},o=new CustomEvent("fpf_modal_save",{detail:n,cancelable:!0});a.querySelector(".modal").dispatchEvent(o),t.classList.contains("close")&&r.closeModal(a),e.preventDefault()}},r.closeModal=function(e){var t=e.querySelector(":scope > .modal");document.body.classList.remove("fpf-modal-open","fpf-modal-"+t.id+"-open"),e.classList.remove("is-visible");var a={modal_name:t.id},n=new CustomEvent("fpf_modal_close",{detail:a,cancelable:!0});t.dispatchEvent(n)},e.handleEscapeClose=function(e){if(27==(e=e||window.event).keyCode&&!document.querySelector(".fpf-modal.upgrade-pro.is-visible")&&!document.querySelector(".fpf-modal.skip-esc-close.is-visible")){var t=document.querySelectorAll(".fpf-modal.is-visible");if(t){var a=null,n=-1,o=t,l=Array.isArray(o),s=0;for(o=l?o:o[Symbol.iterator]();;){var i;if(l){if(s>=o.length)break;i=o[s++]}else{if((s=o.next()).done)break;i=s.value}var d=i;d.classList.contains("upgrade-pro")||d.classList.contains("skip-esc-close")||void 0!==d.tabindex&&d.tabindex>n&&(n=d.tabindex,a=d)}a&&r.closeModal(a)}}},e.canCloseOnOverlay=function(e){var t=e.classList.contains("overlay");if(!t)return!1;var a=e.closest(".overlay").getAttribute("data-on-overlay-click");return!(!t||!a)},r}();document.addEventListener("DOMContentLoaded",function(e){new FPF_Modal});
