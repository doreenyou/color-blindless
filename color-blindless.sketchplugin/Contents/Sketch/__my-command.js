var globalThis=this,global=this;function __skpm_run(key,context){globalThis.context=context;try{var exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports={JS_BRIDGE:"__skpm_sketchBridge",JS_BRIDGE_RESULT_SUCCESS:"__skpm_sketchBridge_success",JS_BRIDGE_RESULT_ERROR:"__skpm_sketchBridge_error",START_MOVING_WINDOW:"__skpm_startMovingWindow",EXECUTE_JAVASCRIPT:"__skpm_executeJS",EXECUTE_JAVASCRIPT_SUCCESS:"__skpm_executeJS_success_",EXECUTE_JAVASCRIPT_ERROR:"__skpm_executeJS_error_"}},function(e,t,n){var i=n(2),o=n(8),r=n(9),a=n(10),s=n(11),l=n(12),u=n(13),c=n(3),d=n(14);function f(e){var t=(e=e||{}).identifier||String(NSUUID.UUID().UUIDString()),n=NSThread.mainThread().threadDictionary(),p=f.fromId(t);if(p)return p;var h=new i;if(h.id=t,e.modal&&!e.parent)throw new Error("A modal needs to have a parent.");var m=coscript.createFiber(),w=e.width||800,S=e.height||600,v=NSScreen.screens().firstObject().frame(),g=NSMakeRect(void 0!==e.x?e.x:Math.round((NSWidth(v)-w)/2),void 0!==e.y?NSHeight(v)-e.y:Math.round((NSHeight(v)-S)/2),w,S);e.titleBarStyle&&"default"!==e.titleBarStyle&&(e.frame=!1);var b="textured"!==e.windowType,y=NSTitledWindowMask;!1!==e.minimizable&&(y|=NSMiniaturizableWindowMask),!1!==e.closable&&(y|=NSClosableWindowMask),!1!==e.resizable&&(y|=NSResizableWindowMask),b&&!e.transparent&&!1!==e.frame||(y|=NSTexturedBackgroundWindowMask);var _=NSPanel.alloc().initWithContentRect_styleMask_backing_defer(g,y,NSBackingStoreBuffered,!0),N=WKWebViewConfiguration.alloc().init(),C=WKWebView.alloc().initWithFrame_configuration(CGRectMake(0,0,e.width||800,e.height||600),N);if(l(C),C.setAutoresizingMask(NSViewWidthSizable|NSViewHeightSizable),o(h,_,C),r(h,_,C),d(h,_,C,e),"desktop"===e.windowType&&(_.setLevel(kCGDesktopWindowLevel-1),_.setCollectionBehavior(NSWindowCollectionBehaviorCanJoinAllSpaces|NSWindowCollectionBehaviorStationary|NSWindowCollectionBehaviorIgnoresCycle)),void 0===e.minWidth&&void 0===e.minHeight||h.setMinimumSize(e.minWidth||0,e.minHeight||0),void 0===e.maxWidth&&void 0===e.maxHeight||h.setMaximumSize(e.maxWidth||1e4,e.maxHeight||1e4),e.transparent||!1===e.frame){_.titlebarAppearsTransparent=!0,_.titleVisibility=NSWindowTitleHidden,_.setOpaque(0),_.isMovableByWindowBackground=!0;var M=NSToolbar.alloc().initWithIdentifier("titlebarStylingToolbar");M.setShowsBaselineSeparator(!1),_.setToolbar(M)}if("hiddenInset"===e.titleBarStyle){var W=NSToolbar.alloc().initWithIdentifier("titlebarStylingToolbar");W.setShowsBaselineSeparator(!1),_.setToolbar(W)}!1!==e.frame&&e.useContentSize||h.setSize(w,S),e.center&&h.center(),e.alwaysOnTop&&h.setAlwaysOnTop(!0),e.fullscreen&&h.setFullScreen(!0),h.setFullScreenable(!!e.fullscreenable);let R=e.title;!1===e.frame?R=void 0:void 0===R&&"undefined"!=typeof __command&&__command.pluginBundle()&&(R=__command.pluginBundle().name()),R&&h.setTitle(R);var E=e.backgroundColor;e.transparent&&(E=NSColor.clearColor()),!E&&!1===e.frame&&e.vibrancy&&(E=NSColor.clearColor()),h._setBackgroundColor(E||NSColor.windowBackgroundColor()),!1===e.hasShadow&&h.setHasShadow(!1),void 0!==e.opacity&&h.setOpacity(e.opacity),e.webPreferences=e.webPreferences||{},C.configuration().preferences().setValue_forKey(!1!==e.webPreferences.devTools,"developerExtrasEnabled"),C.configuration().preferences().setValue_forKey(!1!==e.webPreferences.javascript,"javaScriptEnabled"),C.configuration().preferences().setValue_forKey(!!e.webPreferences.plugins,"plugInsEnabled"),C.configuration().preferences().setValue_forKey(e.webPreferences.minimumFontSize||0,"minimumFontSize"),e.webPreferences.zoomFactor&&C.setMagnification(e.webPreferences.zoomFactor);var k=_.contentView();return!1!==e.frame?(C.setFrame(k.bounds()),k.addSubview(C)):(k.setAutoresizingMask(NSViewWidthSizable|NSViewHeightSizable),a(k,k.superview()),C.setFrame(k.bounds()),k.addSubview(C),_.standardWindowButton(NSWindowFullScreenButton)&&_.standardWindowButton(NSWindowFullScreenButton).setHidden(!0),e.titleBarStyle&&"default"!==e.titleBarStyle||(_.standardWindowButton(NSWindowZoomButton).setHidden(!0),_.standardWindowButton(NSWindowMiniaturizeButton).setHidden(!0),_.standardWindowButton(NSWindowCloseButton).setHidden(!0),_.standardWindowButton(NSWindowZoomButton).setEnabled(!1))),e.vibrancy&&h.setVibrancy(e.vibrancy),h.setMaximizable(!1!==e.maximizable),_.setHidesOnDeactivate(!1!==e.hidesOnDeactivate),e.remembersWindowFrame&&(_.setFrameAutosaveName(t),_.setFrameUsingName_force(_.frameAutosaveName(),!1)),e.acceptsFirstMouse&&h.on("focus",(function(e){e.type()===NSEventTypeLeftMouseDown&&h.webContents.executeJavaScript(s(C,e)).catch(()=>{})})),c.injectScript(C),u.injectScript(C),u.setupHandler(h),!1!==e.show&&h.show(),h.on("closed",(function(){h._destroyed=!0,n.removeObjectForKey(t);var e=n[t+".themeObserver"];e&&(NSApplication.sharedApplication().removeObserver_forKeyPath(e,"effectiveAppearance"),n.removeObjectForKey(t+".themeObserver")),m.cleanup()})),n[t]=_,m.onCleanup((function(){h._destroyed||h.destroy()})),h}f.fromId=function(e){var t=NSThread.mainThread().threadDictionary();if(t[e])return f.fromPanel(t[e],e)},f.fromPanel=function(e,t){var n=new i;if(n.id=t,!e||!e.contentView)throw new Error("needs to pass an NSPanel");for(var a=null,s=e.contentView().subviews(),l=0;l<s.length;l+=1)a||s[l].isKindOfClass(WKInspectorWKWebView)||!s[l].isKindOfClass(WKWebView)||(a=s[l]);if(!a)throw new Error("The panel needs to have a webview");return o(n,e,a),r(n,e,a),n},e.exports=f},function(e,t){e.exports=require("events")},function(e,t,n){(function(t){var i=n(0);e.exports=function(n,o){return function r(a,s,l){"function"==typeof s&&(l=s,s=!1);var u=coscript.createFiber();return n.navigationDelegate().state&&0==n.navigationDelegate().state.wasReady?new t((function(e,t){o.once("ready-to-show",(function(){r(a,s,l).then(e).catch(t),u.cleanup()}))})):new t((function(t,r){var s=Math.random();o.webContents.on(i.EXECUTE_JAVASCRIPT_SUCCESS+s,(function(e){try{l&&l(null,e),t(e)}catch(n){r(n)}u.cleanup()})),o.webContents.on(i.EXECUTE_JAVASCRIPT_ERROR+s,(function(e){try{l?(l(e),t()):r(e)}catch(n){r(n)}u.cleanup()})),n.evaluateJavaScript_completionHandler(e.exports.wrapScript(a,s),null)}))}},e.exports.wrapScript=function(e,t){return"window."+i.EXECUTE_JAVASCRIPT+"("+t+", "+JSON.stringify(e)+")"},e.exports.injectScript=function(e){var t="window."+i.EXECUTE_JAVASCRIPT+' = function(id, script) {  try {    var res = eval(script);    if (res && typeof res.then === "function" && typeof res.catch === "function") {      res.then(function (res2) {        window.postMessage("'+i.EXECUTE_JAVASCRIPT_SUCCESS+'" + id, res2);      })      .catch(function (err) {        window.postMessage("'+i.EXECUTE_JAVASCRIPT_ERROR+'" + id, err);      })    } else {      window.postMessage("'+i.EXECUTE_JAVASCRIPT_SUCCESS+'" + id, res);    }  } catch (err) {    window.postMessage("'+i.EXECUTE_JAVASCRIPT_ERROR+'" + id, err);  }}',n=WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(t,0,!0);e.configuration().userContentController().addUserScript(n)}}).call(this,n(4))},function(e,t){function n(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function o(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(o){return void a(t.promise,o)}r(t.promise,i)}else(1===e._state?r:a)(t.promise,e._value)}))):e._deferreds.push(t)}function r(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void s(e);if("function"==typeof n)return void u(n.bind(t),e)}e._state=1,e._value=t,s(e)}catch(o){a(e,o)}}function a(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value,e)}));for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function u(e,t){var n=!1;try{e((function(e){n?i._multipleResolvesFn("resolve",t,e):(n=!0,r(t,e))}),(function(e){n?i._multipleResolvesFn("reject",t,e):(n=!0,a(t,e))}))}catch(o){if(n)return void i._multipleResolvesFn("reject",t,o);n=!0,a(t,o)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var i=new this.constructor(n);return o(this,new l(e,t,i)),i},i.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},i.all=function(e){return new i((function(t,n){if(!Array.isArray(e))return n(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);var o=i.length;function r(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){r(e,t)}),n)}i[e]=a,0==--o&&t(i)}catch(l){n(l)}}for(var a=0;a<i.length;a++)r(a,i[a])}))},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){if(!Array.isArray(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,r=e.length;o<r;o++)i.resolve(e[o]).then(t,n)}))},i._immediateFn=setImmediate,i._unhandledRejectionFn=function(e,t){"undefined"!=typeof process&&process.listenerCount&&(process.listenerCount("unhandledRejection")||process.listenerCount("uncaughtException"))?(process.emit("unhandledRejection",e,t),process.emit("uncaughtException",e,"unhandledRejection")):"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._multipleResolvesFn=function(e,t,n){"undefined"!=typeof process&&process.emit&&process.emit("multipleResolves",e,t,n)},e.exports=i},function(e,t,n){var i=NSThread.mainThread().threadDictionary();e.exports.getWebview=function(e){return n(1).fromId(e)},e.exports.isWebviewPresent=function(e){return!!i[e]},e.exports.sendToWebview=function(t,n){if(e.exports.isWebviewPresent(t)){for(var o=null,r=i[t].contentView().subviews(),a=0;a<r.length;a+=1)o||r[a].isKindOfClass(WKInspectorWKWebView)||!r[a].isKindOfClass(WKWebView)||(o=r[a]);if(!o||!o.evaluateJavaScript_completionHandler)throw new Error("Webview "+t+" not found");o.evaluateJavaScript_completionHandler(n,null)}}},function(e,t){e.exports=require("sketch/ui")},function(e,t,n){"use strict";n.r(t),n.d(t,"onShutdown",(function(){return u}));var i=n(1),o=n.n(i),r=n(5),a=n(6),s=n.n(a),l=n(17);function u(){var e=Object(r.getWebview)("template-webview.webview");e&&e.close()}t.default=function(){var e={identifier:"template-webview.webview",width:1350,height:520,show:!1},t=new o.a(e);t.loadURL(n(18)),t.once("ready-to-show",(function(){t.show()})),t.webContents.on("colorBlindness",(function(e){var n=l.getSelectedDocument(),i=null;if(e)i=n.getLayerWithID(e);else{var o=n.selectedLayers;o&&o.layers&&1===o.layers.length&&(i=o.layers[0])}if(i){var r=l.export(i,{formats:"png",output:!1});t.webContents.executeJavaScript("getPreviewImage('".concat("data:image/png;base64,".concat(r.toString("base64")),"', '",i.id,"')"))}})),t.webContents.on("queryPreviewImage",(function(e){console.log("queryPreviewImage"),s.a.message("queryPreviewImage")}))}},function(e,t){e.exports=function(e,t,n){function i(n){e.isVisible()&&(n?(NSApplication.sharedApplication().activateIgnoringOtherApps(!0),t.makeKeyAndOrderFront(null)):(t.orderBack(null),NSApp.mainWindow().makeKeyAndOrderFront(null)))}e._panel=t,e._webview=n,e._destroyed=!1,e.destroy=function(){return t.close()},e.close=function(){if(t.delegate().utils&&t.delegate().utils.parentWindow){var n=!0;return e.emit("close",{get defaultPrevented(){return!n},preventDefault:function(){n=!1}}),void(n&&t.delegate().utils.parentWindow.endSheet(t))}e.isClosable()&&t.performClose(null)},e.focus=i.bind(this,!0),e.blur=i.bind(this,!1),e.isFocused=function(){return t.isKeyWindow()},e.isDestroyed=function(){return e._destroyed},e.show=function(){return NSApp.activateIgnoringOtherApps(!0),t.delegate().utils&&t.delegate().utils.parentWindow?t.delegate().utils.parentWindow.beginSheet_completionHandler(t,__mocha__.createBlock_function("v16@?0q8",(function(){e.emit("closed")}))):t.makeKeyAndOrderFront(null)},e.showInactive=function(){return t.orderFrontRegardless()},e.hide=function(){return t.orderOut(null)},e.isVisible=function(){return t.isVisible()},e.isModal=function(){return!1},e.maximize=function(){e.isMaximized()||t.zoom(null)},e.unmaximize=function(){e.isMaximized()&&t.zoom(null)},e.isMaximized=function(){if(0!=(t.styleMask()&NSResizableWindowMask))return t.isZoomed();var e=NSScreen.mainScreen().visibleFrame(),n=t.frame();return e.origin.x==n.origin.x&&e.origin.y==n.origin.y&&e.size.width==n.size.width&&e.size.height==n.size.height},e.minimize=function(){return t.miniaturize(null)},e.restore=function(){return t.deminiaturize(null)},e.isMinimized=function(){return t.isMiniaturized()},e.setFullScreen=function(n){n!==e.isFullscreen()&&t.toggleFullScreen(null)},e.isFullscreen=function(){return t.styleMask()&NSFullScreenWindowMask},e.setAspectRatio=function(e){e>0?t.setAspectRatio(NSMakeSize(e,1)):t.setResizeIncrements(NSMakeSize(1,1))},e.setBounds=function(n,i){if(!n)return;if(e.isFullscreen())return;const o=Object.assign(e.getBounds(),n);var r=NSMakeRect(o.x,0,o.width,o.height),a=NSScreen.screens().firstObject();r.origin.y=NSHeight(a.frame())-o.y,t.setFrame_display_animate(r,!0,i)},e.getBounds=function(){const e=t.frame();var n=NSScreen.screens().firstObject().frame();return{x:e.origin.x,y:Math.round(NSHeight(n)-e.origin.y),width:e.size.width,height:e.size.height}},e.setContentBounds=function(t,n){e.setBounds(t,n)},e.getContentBounds=function(){return e.getBounds()},e.setSize=function(t,n,i){return e.setBounds({width:t,height:n},i)},e.getSize=function(){var t=e.getBounds();return[t.width,t.height]},e.setContentSize=function(t,n,i){return e.setContentBounds({width:t,height:n},i)},e.getContentSize=function(){var t=e.getContentBounds();return[t.width,t.height]},e.setMinimumSize=function(e,n){const i=CGSizeMake(e,n);t.setContentMinSize(i)},e.getMinimumSize=function(){const e=t.contentMinSize();return[e.width,e.height]},e.setMaximumSize=function(e,n){const i=CGSizeMake(e,n);t.setContentMaxSize(i)},e.getMaximumSize=function(){const e=t.contentMaxSize();return[e.width,e.height]},e.setResizable=function(t){return e._setStyleMask(t,NSResizableWindowMask)},e.isResizable=function(){return t.styleMask()&NSResizableWindowMask},e.setMovable=function(e){return t.setMovable(e)},e.isMovable=function(){return t.isMovable()},e.setMinimizable=function(t){return e._setStyleMask(t,NSMiniaturizableWindowMask)},e.isMinimizable=function(){return t.styleMask()&NSMiniaturizableWindowMask},e.setMaximizable=function(e){t.standardWindowButton(NSWindowZoomButton)&&t.standardWindowButton(NSWindowZoomButton).setEnabled(e)},e.isMaximizable=function(){return t.standardWindowButton(NSWindowZoomButton)&&t.standardWindowButton(NSWindowZoomButton).isEnabled()},e.setFullScreenable=function(t){e._setCollectionBehavior(t,NSWindowCollectionBehaviorFullScreenPrimary),e._setCollectionBehavior(!t,NSWindowCollectionBehaviorFullScreenAuxiliary)},e.isFullScreenable=function(){return t.collectionBehavior()&NSWindowCollectionBehaviorFullScreenPrimary},e.setClosable=function(t){e._setStyleMask(t,NSClosableWindowMask)},e.isClosable=function(){return t.styleMask()&NSClosableWindowMask},e.setAlwaysOnTop=function(e,n,i){var o=NSNormalWindowLevel,r=CGWindowLevelForKey(kCGMaximumWindowLevelKey),a=CGWindowLevelForKey(kCGMinimumWindowLevelKey);e&&(o="normal"===n?NSNormalWindowLevel:"torn-off-menu"===n?NSTornOffMenuWindowLevel:"modal-panel"===n?NSModalPanelWindowLevel:"main-menu"===n?NSMainMenuWindowLevel:"status"===n?NSStatusWindowLevel:"pop-up-menu"===n?NSPopUpMenuWindowLevel:"screen-saver"===n?NSScreenSaverWindowLevel:"dock"===n?NSDockWindowLevel:NSFloatingWindowLevel);var s=o+(i||0);if(!(s>=a&&s<=r))throw new Error("relativeLevel must be between "+a+" and "+r);t.setLevel(s)},e.isAlwaysOnTop=function(){return t.level()!==NSNormalWindowLevel},e.moveTop=function(){return t.orderFrontRegardless()},e.center=function(){t.center()},e.setPosition=function(t,n,i){return e.setBounds({x:t,y:n},i)},e.getPosition=function(){var t=e.getBounds();return[t.x,t.y]},e.setTitle=function(e){t.setTitle(e)},e.getTitle=function(){return String(t.title())};var o=0;e.flashFrame=function(e){e?o=NSApp.requestUserAttention(NSInformationalRequest):(NSApp.cancelUserAttentionRequest(o),o=0)},e.getNativeWindowHandle=function(){return t},e.getNativeWebViewHandle=function(){return n},e.loadURL=function(e){if(/^(?!https?|file).*\.html?$/.test(e)&&"undefined"!=typeof __command&&__command.pluginBundle()&&(e="file://"+__command.pluginBundle().urlForResourceNamed(e).path()),/^file:\/\/.*\.html?$/.test(e))return e=(e=NSString.alloc().initWithString(e)).stringByAddingPercentEncodingWithAllowedCharacters(NSCharacterSet.URLQueryAllowedCharacterSet()),void n.loadFileURL_allowingReadAccessToURL(NSURL.URLWithString(e),NSURL.URLWithString("file:///"));const t=NSURL.URLWithString(e),i=NSURLRequest.requestWithURL(t);n.loadRequest(i)},e.reload=function(){n.reload()},e.setHasShadow=function(e){return t.setHasShadow(e)},e.hasShadow=function(){return t.hasShadow()},e.setOpacity=function(e){return t.setAlphaValue(e)},e.getOpacity=function(){return t.alphaValue()},e.setVisibleOnAllWorkspaces=function(t){return e._setCollectionBehavior(t,NSWindowCollectionBehaviorCanJoinAllSpaces)},e.isVisibleOnAllWorkspaces=function(){return t.collectionBehavior()&NSWindowCollectionBehaviorCanJoinAllSpaces},e.setIgnoreMouseEvents=function(e){return t.setIgnoresMouseEvents(e)},e.setContentProtection=function(e){t.setSharingType(e?NSWindowSharingNone:NSWindowSharingReadOnly)},e.setAutoHideCursor=function(e){t.setDisableAutoHideCursor(e)},e.setVibrancy=function(n){var i=e._vibrantView;if(!n){if(null==i)return;return i.removeFromSuperview(),void t.setVibrantView(null)}if(null==i){var o=t.contentView();i=NSVisualEffectView.alloc().initWithFrame(o.bounds()),e._vibrantView=i,i.setAutoresizingMask(NSViewWidthSizable|NSViewHeightSizable),i.setBlendingMode(NSVisualEffectBlendingModeBehindWindow),i.setState(NSVisualEffectStateActive),i.setFrame(o.bounds()),o.addSubview_positioned_relativeTo(i,NSWindowBelow,null)}var r=NSVisualEffectMaterialLight;"appearance-based"===n?r=NSVisualEffectMaterialAppearanceBased:"light"===n?r=NSVisualEffectMaterialLight:"dark"===n?r=NSVisualEffectMaterialDark:"titlebar"===n?r=NSVisualEffectMaterialTitlebar:"selection"===n?r=NSVisualEffectMaterialSelection:"menu"===n?r=NSVisualEffectMaterialMenu:"popover"===n?r=NSVisualEffectMaterialPopover:"sidebar"===n?r=NSVisualEffectMaterialSidebar:"medium-light"===n?r=NSVisualEffectMaterialMediumLight:"ultra-dark"===n&&(r=NSVisualEffectMaterialUltraDark),i.setMaterial(r)},e._setBackgroundColor=function(e){var i=function(e){if(!e||"#"!==e[0]){if(e&&"function"==typeof e.isKindOfClass&&e.isKindOfClass(NSColor))return e;throw new Error("Incorrect color formating. It should be an hex color: #RRGGBBAA")}var t,n=e.substr(1);if(3===n.length?n+="F":6===n.length&&(n+="FF"),4===n.length)for(var i=0;i<4;i+=1)t+=n[i],t+=n[i];else{if(8!==n.length)return NSColor.whiteColor();t=n}var o=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,a=parseInt(t.slice(4,6),16)/255,s=parseInt(t.slice(6,8),16)/255;return NSColor.colorWithSRGBRed_green_blue_alpha(o,r,a,s)}(e);n.setValue_forKey(!1,"drawsBackground"),t.backgroundColor=i},e._invalidate=function(){t.flushWindow(),t.contentView().setNeedsDisplay(!0)},e._setStyleMask=function(n,i){var o=e.isMaximizable();n?t.setStyleMask(t.styleMask()|i):t.setStyleMask(t.styleMask()&~i),e.setMaximizable(o)},e._setCollectionBehavior=function(n,i){var o=e.isMaximizable();n?t.setCollectionBehavior(t.collectionBehavior()|i):t.setCollectionBehavior(t.collectionBehavior()&~i),e.setMaximizable(o)},e._showWindowButton=function(e){var n=t.standardWindowButton(e);n.superview().addSubview_positioned_relative(n,NSWindowAbove,null)}}},function(e,t,n){var i=n(2),o=n(3);e.exports=function(e,t,n){var r=new i;r.loadURL=e.loadURL,r.loadFile=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.downloadURL=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.getURL=function(){return String(n.URL())},r.getTitle=function(){return String(n.title())},r.isDestroyed=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.focus=e.focus,r.isFocused=e.isFocused,r.isLoading=function(){return!!n.loading()},r.isLoadingMainFrame=function(){return!!n.loading()},r.isWaitingForResponse=function(){return!n.loading()},r.stop=function(){n.stopLoading()},r.reload=function(){n.reload()},r.reloadIgnoringCache=function(){n.reloadFromOrigin()},r.canGoBack=function(){return!!n.canGoBack()},r.canGoForward=function(){return!!n.canGoForward()},r.canGoToOffset=function(e){return!!n.backForwardList().itemAtIndex(e)},r.clearHistory=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.goBack=function(){n.goBack()},r.goForward=function(){n.goForward()},r.goToIndex=function(e){var t=n.backForwardList(),i=t.backList(),o=i.count();if(o>e)n.loadRequest(NSURLRequest.requestWithURL(i[e]));else{var r=t.forwardList();if(!(r.count()>e-o))throw new Error("Cannot go to index "+e);n.loadRequest(NSURLRequest.requestWithURL(r[e-o]))}},r.goToOffset=function(e){if(!r.canGoToOffset(e))throw new Error("Cannot go to offset "+e);n.loadRequest(NSURLRequest.requestWithURL(n.backForwardList().itemAtIndex(e)))},r.isCrashed=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.setUserAgent=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.getUserAgent=function(){const e=n.customUserAgent();return e?String(e):void 0},r.insertCSS=function(e){var t="var style = document.createElement('style'); style.innerHTML = "+e.replace(/"/,'\\"')+"; document.head.appendChild(style);",i=WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(t,0,!0);n.configuration().userContentController().addUserScript(i)},r.insertJS=function(e){var t=WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(e,0,!0);n.configuration().userContentController().addUserScript(t)},r.executeJavaScript=o(n,e),r.setIgnoreMenuShortcuts=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.setAudioMuted=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.isAudioMuted=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.setZoomFactor=function(e){n.setMagnification_centeredAtPoint(e,CGPointMake(0,0))},r.getZoomFactor=function(e){e(Number(n.magnification()))},r.setZoomLevel=function(e){r.setZoomFactor(Math.pow(1.2,e))},r.getZoomLevel=function(e){e(Math.log(Number(n.magnification()))/Math.log(1.2))},r.setVisualZoomLevelLimits=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.setLayoutZoomLevelLimits=function(){console.warn("Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)")},r.send=function(){const e="window.postMessage({isSketchMessage: true,origin: '"+String(__command.identifier())+"',args: "+JSON.stringify([].slice.call(arguments))+'}, "*")';n.evaluateJavaScript_completionHandler(e,null)},r.getNativeWebview=function(){return n},e.webContents=r}},function(e,t){function n(e,t,n,i){n.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(t,e,NSLayoutRelationEqual,n,e,1,i))}e.exports=function(e,t,i){i=i||[],e.setTranslatesAutoresizingMaskIntoConstraints(!1),n(NSLayoutAttributeLeft,e,t,i[0]||0),n(NSLayoutAttributeTop,e,t,i[1]||0),n(NSLayoutAttributeRight,e,t,i[2]||0),n(NSLayoutAttributeBottom,e,t,i[3]||0)}},function(e,t){e.exports=function(e,t){var n=e.convertPoint_fromView(t.locationInWindow(),null);return"var el = document.elementFromPoint("+n.x+", "+n.y+'); if (el && el.tagName === "SELECT") {  var event = document.createEvent("MouseEvents");  event.initMouseEvent("mousedown", true, true, window);  el.dispatchEvent(event);} else if (el && ["text", "textarea", "date", "datetime-local", "email", "number", "month", "password", "search", "tel", "time", "url", "week" ].indexOf(el.type) >= 0 && el.focus) {el.focus();} else if (el) {el.dispatchEvent(new Event("click", {bubbles: true}))}'}},function(e,t,n){var i=n(0);e.exports=function(e){var t='window.originalPostMessage = window.postMessage;window.postMessage = function(actionName) {  if (!actionName) {    throw new Error(\'missing action name\')  }  var id = String(Math.random()).replace(".", "");    var args = [].slice.call(arguments);    args.unshift(id);  return new Promise(function (resolve, reject) {    window["'+i.JS_BRIDGE_RESULT_SUCCESS+'" + id] = resolve;    window["'+i.JS_BRIDGE_RESULT_ERROR+'" + id] = reject;    window.webkit.messageHandlers.'+i.JS_BRIDGE+".postMessage(JSON.stringify(args));  });}",n=WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(t,0,!0);e.configuration().userContentController().addUserScript(n)}},function(e,t,n){var i=n(0);e.exports.injectScript=function(e){var t='(function () {document.addEventListener(\'mousedown\', onMouseDown);function shouldDrag(target) {  if (!target || (target.dataset || {}).appRegion === "no-drag") { return false }  if ((target.dataset || {}).appRegion === "drag") { return true }  return shouldDrag(target.parentElement)};function onMouseDown(e) {  if (e.button !== 0 || !shouldDrag(e.target)) { return }  window.postMessage("'+i.START_MOVING_WINDOW+'");};})()',n=WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(t,0,!0);e.configuration().userContentController().addUserScript(n)},e.exports.setupHandler=function(e){var t=null,n=null,o=null;function r(){if(!n||1!==NSEvent.pressedMouseButtons())return clearInterval(o),t=null,void(n=null);var i=NSEvent.mouseLocation();e.setPosition(n.x+(i.x-t.x),n.y+(t.y-i.y),!1)}e.webContents.on(i.START_MOVING_WINDOW,(function(){t=NSEvent.mouseLocation();var i=e.getPosition();n={x:i[0],y:i[1]},o=setInterval(r,1e3/60)}))}},function(e,t,n){(function(t){var i,o,r,a,s=n(15),l=n(16),u=n(0);e.exports=function(e,n,c,d){a||(a=new s({utils:null,"observeValueForKeyPath:ofObject:change:context:":function(e,t,n){const i=n[NSKeyValueChangeNewKey],o="NSAppearanceNameDarkAqua"===String(i.bestMatchFromAppearancesWithNames(["NSAppearanceNameAqua","NSAppearanceNameDarkAqua"]));this.utils.executeJavaScript("document.body.classList.remove('__skpm-"+(o?"light":"dark")+"'); document.body.classList.add('__skpm-"+(o?"dark":"light")+"')")}})),i||(i=new s({utils:null,panel:null,"windowDidResize:":function(){this.utils.emit("resize")},"windowDidMiniaturize:":function(){this.utils.emit("minimize")},"windowDidDeminiaturize:":function(){this.utils.emit("restore")},"windowDidEnterFullScreen:":function(){this.utils.emit("enter-full-screen")},"windowDidExitFullScreen:":function(){this.utils.emit("leave-full-screen")},"windowDidMove:":function(){this.utils.emit("move"),this.utils.emit("moved")},"windowShouldClose:":function(){var e=1;return this.utils.emit("close",{get defaultPrevented(){return!e},preventDefault:function(){e=0}}),e},"windowWillClose:":function(){this.utils.emit("closed")},"windowDidBecomeKey:":function(){this.utils.emit("focus",this.panel.currentEvent())},"windowDidResignKey:":function(){this.utils.emit("blur")}})),o||(o=new s({state:{wasReady:0},utils:null,"webView:didCommitNavigation:":function(e){this.utils.emit("will-navigate",{},String(String(e.URL())))},"webView:didStartProvisionalNavigation:":function(){this.utils.emit("did-start-navigation"),this.utils.emit("did-start-loading")},"webView:didReceiveServerRedirectForProvisionalNavigation:":function(){this.utils.emit("did-get-redirect-request")},"webView:didFailProvisionalNavigation:withError:":function(e,t,n){this.utils.emit("did-fail-load",n)},"webView:didFinishNavigation:":function(){0==this.state.wasReady&&(this.state.wasReady=1,this.utils.emitBrowserEvent("ready-to-show")),this.utils.emit("did-navigate"),this.utils.emit("did-frame-navigate"),this.utils.emit("did-stop-loading"),this.utils.emit("did-finish-load"),this.utils.emit("did-frame-finish-load")},"webViewWebContentProcessDidTerminate:":function(){this.utils.emit("dom-ready")}})),r||(r=new s({utils:null,"userContentController:didReceiveScriptMessage:":function(e,t){var n=this.utils.parseWebArguments(String(t.body()));n&&n[0]&&"string"==typeof n[0]&&(n[0]=String(n[0]),this.utils.emit.apply(this,n))}}));var f=a.new({utils:{executeJavaScript(e){c.evaluateJavaScript_completionHandler(e,null)}}}),p=WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly("document.addEventListener('DOMContentLoaded', function() { document.body.classList.add('__skpm-"+("undefined"!=typeof MSTheme&&MSTheme.sharedTheme().isDark()?"dark":"light")+"') }, false)",0,!0);c.configuration().userContentController().addUserScript(p),NSApplication.sharedApplication().addObserver_forKeyPath_options_context(f,"effectiveAppearance",NSKeyValueObservingOptionNew,null),NSThread.mainThread().threadDictionary()[e.id+".themeObserver"]=f;var h=o.new({utils:{setTitle:e.setTitle.bind(e),emitBrowserEvent(){try{e.emit.apply(e,arguments)}catch(t){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw console.error(t),t;process.emit("uncaughtException",t,"uncaughtException")}},emit(){try{e.webContents.emit.apply(e.webContents,arguments)}catch(t){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw console.error(t),t;process.emit("uncaughtException",t,"uncaughtException")}}},state:{wasReady:0}});c.setNavigationDelegate(h);var m=r.new({utils:{emit(n,i){if(i){for(var o=[],r=2;r<arguments.length;r+=1)o.push(arguments[r]);var a=e.webContents.listeners(i);t.all(a.map((function(e){return t.resolve().then((function(){return e.apply(e,o)}))}))).then((function(e){c.evaluateJavaScript_completionHandler(u.JS_BRIDGE_RESULT_SUCCESS+n+"("+JSON.stringify(e)+")",null)})).catch((function(e){c.evaluateJavaScript_completionHandler(u.JS_BRIDGE_RESULT_ERROR+n+"("+JSON.stringify(e)+")",null)}))}else c.evaluateJavaScript_completionHandler(u.JS_BRIDGE_RESULT_SUCCESS+n+"()",null)},parseWebArguments:l}});c.configuration().userContentController().addScriptMessageHandler_name(m,u.JS_BRIDGE);var w,S={emit(){try{e.emit.apply(e,arguments)}catch(t){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw console.error(t),t;process.emit("uncaughtException",t,"uncaughtException")}}};d.modal&&((w="Document"===d.parent.type?d.parent.sketchObject:d.parent)&&"MSDocumentData"===String(w.class())&&(w=w.delegate()),S.parentWindow=w.windowForSheet());var v=i.new({utils:S,panel:n});n.setDelegate(v)}}).call(this,n(4))},function(module,exports){module.exports=function MochaDelegate(definition,superclass){var uniqueClassName="MochaJSDelegate_DynamicClass_"+NSUUID.UUID().UUIDString(),delegateClassDesc=MOClassDescription.allocateDescriptionForClassWithName_superclass_(uniqueClassName,superclass||NSObject),handlers={},ivars={};function setHandlerForSelector(selectorString,func){var handlerHasBeenSet=selectorString in handlers,selector=NSSelectorFromString(selectorString);if(handlers[selectorString]=func,!handlerHasBeenSet){for(var args=[],regex=/:/g;regex.exec(selectorString);)args.push("arg"+args.length);var dynamicFunction=eval("(function ("+args.join(", ")+") { return handlers[selectorString].apply(this, arguments); })");delegateClassDesc.addInstanceMethodWithSelector_function(selector,dynamicFunction)}}function setIvar(e,t){var n=e in handlers;if(ivars[e]=t,!n){delegateClassDesc.addInstanceVariableWithName_typeEncoding(e,"@");var i=MOPropertyDescription.new();i.name=e,i.typeEncoding="@",i.weak=!0,i.ivarName=e,delegateClassDesc.addProperty(i)}}this.getClass=function(){return NSClassFromString(uniqueClassName)},this.getClassInstance=function(e){var t=NSClassFromString(uniqueClassName).new();return Object.keys(ivars).forEach((function(e){t[e]=ivars[e]})),Object.keys(e||{}).forEach((function(n){t[n]=e[n]})),t},this.new=this.getClassInstance,"object"==typeof definition&&Object.keys(definition).forEach((function(e){"function"==typeof definition[e]?setHandlerForSelector(e,definition[e]):setIvar(e,definition[e])})),delegateClassDesc.registerClass()}},function(e,t){e.exports=function(e){var t=null;try{t=JSON.parse(e)}catch(n){}return t&&t.constructor&&t.constructor===Array&&0!=t.length?t:null}},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports="file://"+String(context.scriptPath).split(".sketchplugin/Contents/Sketch")[0]+".sketchplugin/Contents/Resources/_webpack_resources/d61bf5fd90bff2b5823a452c005015db.html"}]);if("default"===key&&"function"==typeof exports)exports(context);else{if("function"!=typeof exports[key])throw new Error('Missing export named "'+key+'". Your command should contain something like `export function " + key +"() {}`.');exports[key](context)}}catch(err){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw err;process.emit("uncaughtException",err,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default"),globalThis.onShutdown=__skpm_run.bind(this,"onShutdown");