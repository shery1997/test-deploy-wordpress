!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=337)}({1:function(e,t){e.exports=jQuery},337:function(e,t,n){(function(e){!function(e,t){"use strict";t(".edd-extension-manager__actions").on("click",".edd-extension-manager__action",(function(e){e.preventDefault();var n=t(this),a=n.attr("data-action"),i=n.attr("data-plugin"),d=n.attr("data-type"),r="",s="",o="",l=n.hasClass("edd-button__toggle");if(!n.attr("disabled")){switch(a){case"activate":r="edd_activate_extension",s="edd-plugin__inactive",o="edd-plugin__active",l||n.text(EDDExtensionManager.activating);break;case"install":r="edd_install_extension",o="edd-plugin__active",n.text(EDDExtensionManager.installing);break;case"deactivate":r="edd_deactivate_extension",s="edd-plugin__active",o="edd-plugin__inactive",l||n.text(EDDExtensionManager.deactivating);break;default:return}n.attr("disabled",!0).addClass("edd-updating"),n.hasClass("button-primary")&&n.removeClass("button-primary").addClass("updating-message");var c={action:r,nonce:EDDExtensionManager.extension_manager_nonce,plugin:i,type:d,pass:n.attr("data-pass"),id:n.attr("data-id"),product:n.attr("data-product")};t.post(ajaxurl,c).done((function(e){EDDExtensionManager.debug&&console.log(e);var t=n.closest(".edd-extension-manager__step");if(e.success)if(t.length){var a=t.next();a.length&&(t.fadeOut(),a.prepend('<div class="notice inline-notice notice-success"><p>'+e.data.message+"</p></div>"),a.fadeIn())}else n.attr("disabled",!1).removeClass("edd-updating"),n.closest(".edd-extension-manager__card").removeClass(s).addClass(o),e.data.button.length&&n.closest(".edd-extension-manager__control").empty().append(e.data.button);else{var i=e.data.message;i||(i="plugin"!==d?EDDExtensionManager.extension_install_failed:EDDExtensionManager.plugin_install_failed),t.length?(t.fadeOut(),t.after('<div class="notice inline-notice notice-warning"><p>'+i+"</p></div>")):n.closest(".edd-extension-manager__actions").empty().append('<div class="notice inline-notice notice-warning"><p>'+i+"</p></div>")}}))}}));var n,a=t("#edd-extension-manager__bar-search");function i(){clearTimeout(n),n=setTimeout(d,342)}function d(){var e=a.val().toLowerCase(),n=0;if(e.length)t(".edd-extension-manager__card").each((function(){var a=t(this).text().toLowerCase().includes(e),i=t(this).data("filter")&&t(this).data("filter").toLowerCase().includes(e);a||i?(n++,t(this).removeClass("edd-hidden")):t(this).addClass("edd-hidden")}));else{var i=t(".edd-extension-manager__card");i.removeClass("edd-hidden"),n=i.length}t(".edd-extension-manager__card:not(.edd-hidden)").hide().show(0),t(".edd-extension-manager__results").remove(),t("#edd-extension-manager__bar-search").after('<div role="status" class="edd-extension-manager__results screen-reader-text">'+n+" "+EDDExtensionManager.results+"</div>")}a&&(EDDExtensionManager.filter&&(a.val(EDDExtensionManager.filter),i()),a.on("keyup",(function(e){i()})),a.on("search",(function(e){i()})))}(document,e)}).call(this,n(1))}});