var FPF_Review_Handler=function(){function e(){if(this.noticeElement=document.querySelector(".fpf-review-reminder"),!this.noticeElement)return!1;this.initEvents()}var t=e.prototype;return t.initEvents=function(){document.addEventListener("click",function(e){this.handleRemindMeLaterBtn(e),this.handleIAlreadyDid(e)}.bind(this))},t.handleRemindMeLaterBtn=function(e){var t=e.target.closest(".fpf-ask-later");if(t){var n=this,r=t.getAttribute("data-plugin-slug"),a=new FormData;a.append("_ajax_nonce",fpf_js_object.nonce),a.append("action","fpf_update_rate_reminder"),a.append("update","fpf_"+r+"_ask_later"),fetch(fpf_js_object.ajax_url,{method:"POST",body:a}).then(function(e){return e.json()}).then(function(e){e.error?console.log("Could not delete rate reminder. Error : "+e.error_type):n.noticeElement.remove()}),e.preventDefault()}},t.handleIAlreadyDid=function(e){var t=e.target.closest(".fpf-delete-rate-reminder");if(t){var n=this,r=t.getAttribute("data-plugin-slug"),a=new FormData;a.append("_ajax_nonce",fpf_js_object.nonce),a.append("action","fpf_update_rate_reminder"),a.append("update","fpf_"+r+"_delete_rate_reminder"),fetch(fpf_js_object.ajax_url,{method:"POST",body:a}).then(function(e){return e.json()}).then(function(e){e.error?console.log("Could not delete rate reminder."):n.noticeElement.remove()}),e.preventDefault()}},e}();document.addEventListener("DOMContentLoaded",function(e){new FPF_Review_Handler});
