;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="f894b8a82adb0d06a97085828dcff7ce";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["063ultFzXoQr"]={appId:"Ek_0U0d0YWhZ",scope:{}};;CloudflareApps.installs["063ultFzXoQr"].options={};;CloudflareApps.installs["1uSXhO5ANA5G"]={appId:"ftSYTOLuWZbg",scope:{}};;CloudflareApps.installs["1uSXhO5ANA5G"].options={"acceptButton":"OK","opacity":70,"policyText":"By using this website, you agree that we and our partners may set cookies for experience improvement."};;CloudflareApps.installs["1uSXhO5ANA5G"].URLPatterns=["^www.umeh.top/?$"];;CloudflareApps.installs["io5cHhV5ZnlT"]={appId:"yOqKXAyfqbFq",scope:{}};;CloudflareApps.installs["io5cHhV5ZnlT"].options={"advancedOptions":{"autoDisplay":true,"multilanguagePage":true},"advancedOptionsToggle":true,"colors":{"background":"#efefef","foreground":"#fafafa","text":"#444444"},"element":{"method":"append","selector":"#panel_instructors"},"pageLanguage":"zh-TW","position":"left","specificLanguages":{"af":false,"ar":false,"az":false,"be":false,"bg":false,"bn":false,"bs":false,"ca":false,"ceb":false,"cs":false,"cy":false,"da":false,"de":false,"el":false,"en":true,"eo":false,"es":false,"et":false,"eu":false,"fa":false,"fi":false,"fr":false,"ga":false,"gl":false,"gu":false,"ha":false,"hi":false,"hmn":false,"hr":false,"ht":false,"hu":false,"hy":false,"id":false,"ig":false,"is":false,"it":false,"iw":false,"ja":false,"jv":false,"ka":false,"kk":false,"km":false,"kn":false,"ko":false,"la":false,"lo":false,"lt":false,"lv":false,"mg":false,"mi":false,"mk":false,"ml":false,"mn":false,"mr":false,"ms":false,"mt":false,"my":false,"nl":false,"no":false,"ny":false,"pa":false,"pl":false,"pt":false,"ro":false,"ru":false,"si":false,"sk":false,"sl":false,"so":false,"sq":false,"sr":false,"su":false,"sv":false,"sw":false,"ta":false,"te":false,"tg":false,"th":false,"tl":false,"tr":false,"uk":false,"ur":false,"uz":false,"vi":false,"yi":false,"yo":false,"zh_CN":true,"zh_TW":true,"zu":false},"specificLanguagesToggle":true};;CloudflareApps.installs["io5cHhV5ZnlT"].URLPatterns=["^www.umeh.top/reviews/?.*$"];;CloudflareApps.installs["io5cHhV5ZnlT"].selectors={"element.selector":"#panel_instructors"};;CloudflareApps.installs["m0hsYGaaRiv5"]={appId:"0VJ1mCYqPTh4",scope:{}};;CloudflareApps.installs["m0hsYGaaRiv5"].options={"color":{"custom":"#666666","strategy":"automatic"},"position":{"value":"bottom-right"},"shape":{"icon":"fancy","radius":0.16,"showBackground":true}};;if(CloudflareApps.matchPage(CloudflareApps.installs['063ultFzXoQr'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])
return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0);})
([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1);},function(module,exports,__webpack_require__){var cssPath=__webpack_require__(2);var asConstants=__webpack_require__(3);var storageAvailable=__webpack_require__(4);var lStorage=__webpack_require__(5);var getLocationParam=function(){return window.location.pathname;}
var shouldBackup=function(formElement){if(asConstants.excludedTypes.indexOf(formElement.type)!==-1){return false;}
for(var i=0;i<asConstants.regExps.length;i++){if(asConstants.regExps[i].test(formElement.name)){return false;}}
return true;}
var formBackedUp=[];var FormBackup=function(formElement){this.backupObject={};this.formElement=formElement;this.formPath=cssPath(formElement);formBackedUp.push(this.formPath);};FormBackup.prototype.setElemValue=function(elem,value){if(!elem.name){return false;}
this.backupObject[elem.name]=value;this.save();};FormBackup.prototype.save=function(){lStorage.setJSON(getLocationParam()+this.formPath,this.backupObject);}
FormBackup.prototype.restore=function(){var formParams=lStorage.getJSON(getLocationParam()+this.formPath);this.backupObject=formParams;for(var fieldName in formParams){var formValue=formParams[fieldName];var elem=document.getElementsByName(fieldName)[0];if(!elem.value){elem.value=formParams[fieldName];}}}
FormBackup.prototype.attachSubmitListener=function(){var me=this;this.formElement.addEventListener("submit",function(e){lStorage.clear(getLocationParam()+me.formPath);})}
FormBackup.prototype.attachInputListeners=function(){var formFields=document.querySelectorAll(this.formPath+' input,textarea');var formFieldsArr=[].slice.call(formFields);var me=this;formFieldsArr.forEach(function(field){if(!shouldBackup(field)){return;}
field.addEventListener("input",function(e){me.setElemValue(this,e.target.value);});});}
var bootstrap=function(){if(!storageAvailable("localStorage")){return false;}
var timerLength=100;var setFormBackup=function(){setTimeout(function(){for(var i=0;i<document.forms.length;i++){if(formBackedUp.indexOf(cssPath(document.forms[i]))!==-1){return false;};var formBackup=new FormBackup(document.forms[i]);formBackup.restore();formBackup.attachSubmitListener();formBackup.attachInputListeners();};timerLength*=2;setFormBackup();},timerLength);}
setFormBackup();};document.addEventListener("DOMContentLoaded",function(event){bootstrap();});if(document.readyState==="complete"){bootstrap();}},function(module,exports){var UTILS={};UTILS.cssPath=function(node,optimized)
{if(node.nodeType!==Node.ELEMENT_NODE)
return"";var steps=[];var contextNode=node;while(contextNode){var step=UTILS._cssPathStep(contextNode,!!optimized,contextNode===node);if(!step)
break;steps.push(step);if(step.optimized)
break;contextNode=contextNode.parentNode;}
steps.reverse();return steps.join(" > ");}
UTILS._cssPathStep=function(node,optimized,isTargetNode)
{if(node.nodeType!==Node.ELEMENT_NODE)
return null;var id=node.getAttribute("id");if(optimized){if(id)
return new UTILS.DOMNodePathStep(idSelector(id),true);var nodeNameLower=node.nodeName.toLowerCase();if(nodeNameLower==="body"||nodeNameLower==="head"||nodeNameLower==="html")
return new UTILS.DOMNodePathStep(node.nodeName.toLowerCase(),true);}
var nodeName=node.nodeName.toLowerCase();if(id)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase()+idSelector(id),true);var parent=node.parentNode;if(!parent||parent.nodeType===Node.DOCUMENT_NODE)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase(),true);function prefixedElementClassNames(node)
{var classAttribute=node.getAttribute("class");if(!classAttribute)
return[];return classAttribute.split(/\s+/g).filter(Boolean).map(function(name){return"$"+name;});}
function idSelector(id)
{return"#"+escapeIdentifierIfNeeded(id);}
function escapeIdentifierIfNeeded(ident)
{if(isCSSIdentifier(ident))
return ident;var shouldEscapeFirst=/^(?:[0-9]|-[0-9-]?)/.test(ident);var lastIndex=ident.length-1;return ident.replace(/./g,function(c,i){return((shouldEscapeFirst&&i===0)||!isCSSIdentChar(c))?escapeAsciiChar(c,i===lastIndex):c;});}
function escapeAsciiChar(c,isLast)
{return"\\"+toHexByte(c)+(isLast?"":" ");}
function toHexByte(c)
{var hexByte=c.charCodeAt(0).toString(16);if(hexByte.length===1)
hexByte="0"+hexByte;return hexByte;}
function isCSSIdentChar(c)
{if(/[a-zA-Z0-9_-]/.test(c))
return true;return c.charCodeAt(0)>=0xA0;}
function isCSSIdentifier(value)
{return/^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(value);}
var prefixedOwnClassNamesArray=prefixedElementClassNames(node);var needsClassNames=false;var needsNthChild=false;var ownIndex=-1;var siblings=parent.children;for(var i=0;(ownIndex===-1||!needsNthChild)&&i<siblings.length;++i){var sibling=siblings[i];if(sibling===node){ownIndex=i;continue;}
if(needsNthChild)
continue;if(sibling.nodeName.toLowerCase()!==nodeName.toLowerCase())
continue;needsClassNames=true;var ownClassNames=prefixedOwnClassNamesArray;var ownClassNameCount=0;for(var name in ownClassNames)
++ownClassNameCount;if(ownClassNameCount===0){needsNthChild=true;continue;}
var siblingClassNamesArray=prefixedElementClassNames(sibling);for(var j=0;j<siblingClassNamesArray.length;++j){var siblingClass=siblingClassNamesArray[j];if(ownClassNames.indexOf(siblingClass))
continue;delete ownClassNames[siblingClass];if(!--ownClassNameCount){needsNthChild=true;break;}}}
var result=nodeName.toLowerCase();if(isTargetNode&&nodeName.toLowerCase()==="input"&&node.getAttribute("type")&&!node.getAttribute("id")&&!node.getAttribute("class"))
result+="[type=\""+node.getAttribute("type")+"\"]";if(needsNthChild){result+=":nth-child("+(ownIndex+1)+")";}else if(needsClassNames){for(var prefixedName in prefixedOwnClassNamesArray)
result+="."+escapeIdentifierIfNeeded(prefixedOwnClassNamesArray[prefixedName].substr(1));}
return new UTILS.DOMNodePathStep(result,false);}
UTILS.DOMNodePathStep=function(value,optimized)
{this.value=value;this.optimized=optimized||false;}
UTILS.DOMNodePathStep.prototype={toString:function()
{return this.value;}}
module.exports=UTILS.cssPath;},function(module,exports){var CC_NUM=/^((card|cc|acct).?(number|#|no|num)|nummer|credito|numero|número|numéro|カード番号|Номер.*карты|信用卡号|信用卡号码|信用卡卡號|카드)$/;var CC_CVV=/^(verification|card identification|security code|card code|cvn|cvv|cvc|csc|cvd|cid|ccv)$/;var CC_MON=/^(expir|exp.*mo|exp.*date|ccmonth|cardmonth|gueltig|gültig|monat|fecha|date.*exp|scadenza|有効期限|validade|Срок действия карты|月)$/;var CC_YEAR=/^(exp.?year|ablaufdatum|gueltig|gültig|yahr|fecha|scadenza|有効期限|validade|Срок действия карты|年|有效期)$/;var regExps=[CC_NUM,CC_CVV,CC_MON,CC_YEAR];var excludedTypes=["hidden","password","file","submit","reset","button","checkbox","radio"];module.exports={regExps,excludedTypes}},function(module,exports){module.exports=function storageAvailable(type){try{var storage=window[type],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return false;}}},function(module,exports){var lStorage={getJSON:function(key,placeholder){var value=localStorage.getItem(key);if(value){try{return JSON.parse(value);}catch(e){}}
return placeholder||{};},setJSON:function(key,value){localStorage.setItem(key,JSON.stringify(value))},clear:function(key){localStorage.removeItem(key);}}
module.exports=lStorage;}]);};if(CloudflareApps.matchPage(CloudflareApps.installs['io5cHhV5ZnlT'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=1);})
([,(function(module,exports,__webpack_require__){"use strict";(function(){if(!window.addEventListener)return
var ELEMENT_ID='cloudflare-app-google-translate'
var CALLBACK_NAME='CloudflareAppsGoogleTranslateOnload'
var style=document.createElement('style')
document.head.appendChild(style)
var options=CloudflareApps.installs['io5cHhV5ZnlT'].options
var element=void 0
var script=void 0
function updateStylesheet(){var _options=options,_options$colors=_options.colors,background=_options$colors.background,foreground=_options$colors.foreground,text=_options$colors.text
element.setAttribute('data-position',options.position)
style.innerHTML='\n      .goog-te-gadget {\n        background-color: '+background+';\n      }\n\n      #'+ELEMENT_ID+' select {\n        background-color: '+foreground+';\n        color: '+text+';\n      }'}
function unmountNode(node){if(node&&node.parentNode)node.parentNode.removeChild(node)}
window[CALLBACK_NAME]=function updateElement(){var _options2=options,pageLanguage=_options2.pageLanguage
var TranslateElement=window.google.translate.TranslateElement
var spec={layout:TranslateElement.InlineLayout.VERTICAL,pageLanguage:pageLanguage}
element=CloudflareApps.createElement(options.element,element)
element.id=ELEMENT_ID
if(options.specificLanguagesToggle){var _options3=options,specificLanguages=_options3.specificLanguages
spec.includedLanguages=Object.keys(specificLanguages).filter(function(key){return specificLanguages[key]}).map(function(key){return key.replace('_','-')}).join(',')}
if(options.advancedOptionsToggle){var _options4=options,advancedOptions=_options4.advancedOptions
spec.multilanguagePage=advancedOptions.multilanguagePage
spec.autoDisplay=advancedOptions.autoDisplay}
updateStylesheet()
new TranslateElement(spec,ELEMENT_ID)}
function updateScript(){[script,document.querySelector('.skiptranslate')].forEach(unmountNode)
script=document.createElement('script')
script.type='text/javascript'
script.src='//translate.google.com/translate_a/element.js?cb='+CALLBACK_NAME
document.head.appendChild(script)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateScript)}else{updateScript()}
window.CloudflareApps.installs['io5cHhV5ZnlT'].scope={setStylesheet:function setStylesheet(nextOptions){options=nextOptions
updateStylesheet()},setOptions:function setOptions(nextOptions){options=nextOptions
document.cookie=document.cookie.split('; ').filter(function(cookie){return cookie.indexOf('googtrans')===-1}).join('; ')
updateScript()}}})()})]);};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,I2Nsb3VkZmxhcmUtYXBwLWdvb2dsZS10cmFuc2xhdGUgc2VsZWN0IHsKICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7CiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOwogIGFwcGVhcmFuY2U6IG5vbmU7CiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE1IDgnPjxnPjxwb2x5Z29uIGZpbGw9J3JnYmEoMCwwLDAsMC43MzQpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSUyODcuNSwgNC41JTI5IHNjYWxlJTI4MSwgLTElMjkgdHJhbnNsYXRlJTI4LTcuNSwgLTQuNSUyOScgcG9pbnRzPSc3LjUgMSAxNCA4IDEgOCc+PC9wb2x5Z29uPjwvZz48L3N2Zz4iKTsKICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA0NSU7CiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsKICBiYWNrZ3JvdW5kLXNpemU6IDIuNWVtIC42ZW07CiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTsKICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7CiAgY3Vyc29yOiBwb2ludGVyOwogIGRpc3BsYXk6IGJsb2NrOwogIGxpbmUtaGVpZ2h0OiAxLjQ7CiAgbWFyZ2luOiAwIGF1dG8gOHB4OwogIHdpZHRoOiAxMDAlOwogIHBhZGRpbmc6IC42ZW0gMi4yNWVtIC42ZW0gLjhlbTsKICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OwogIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7Cn0KCi5nb29nLXRlLWNvbWJvIHsKICBmb250LWZhbWlseTogaW5oZXJpdCAhaW1wb3J0YW50Owp9CgouZ29vZy1sb2dvLWxpbmsgewogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKfQoKLmdvb2ctbG9nby1saW5rOmJlZm9yZSB7CiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrUEhOMlp5QjRiV3h1Y3pwa1l6MGlhSFIwY0RvdkwzQjFjbXd1YjNKbkwyUmpMMlZzWlcxbGJuUnpMekV1TVM4aUlIaHRiRzV6T21OalBTSm9kSFJ3T2k4dlkzSmxZWFJwZG1WamIyMXRiMjV6TG05eVp5OXVjeU1pSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJZ2VHMXNibk02YzNablBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjJaWEp6YVc5dVBTSXhMakVpSUhkcFpIUm9QU0l4WlRNaUlHaGxhV2RvZEQwaU16STRMalUySWlCcFpEMGljM1puTWlJK0lEeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTTBNamcxWmpRN1ptbHNiQzF2Y0dGamFYUjVPakVpSUdROUltMHlORFl1TVRFZ01URTJMakU0YUMweE1UWXVOVGQyTXpRdU5Ua3hhRGd5TGpZM00yTXROQzR3T0RReUlEUTRMalV3TmkwME5DNDBOQ0EyT1M0eE9USXRPREl1TlRNeklEWTVMakU1TWkwME9DNDNNellnTUMwNU1TNHlOalF0TXpndU16UTJMVGt4TGpJMk5DMDVNaTR3T1RJZ01DMDFNaTR6TlRjZ05EQXVOVFF0T1RJdU5qYzVJRGt4TGpNM01TMDVNaTQyTnprZ016a3VNakUzSURBZ05qSXVNekkySURJMUlEWXlMak15TmlBeU5Xd3lOQzR5TWkweU5TNHdPREZ6TFRNeExqQTROeTB6TkM0Mk1EZ3RPRGN1TnpnMExUTTBMall3T0dNdE56SXVNVGszTFRBdU1EQXhMVEV5T0M0d05TQTJNQzQ1TXpNdE1USTRMakExSURFeU5pNDNOU0F3SURZMExqUTVNeUExTWk0MU16a2dNVEkzTGpNNElERXlPUzQ0T1NBeE1qY3VNemdnTmpndU1ETXhJREFnTVRFM0xqZ3pMVFEyTGpZd05DQXhNVGN1T0RNdE1URTFMalV5SURBdE1UUXVOVE01TFRJdU1URXdPUzB5TWk0NU5ESXRNaTR4TVRBNUxUSXlMamswTW5vaUlHWnBiR3c5SWlNME9EZzFaV1FpSUdsa1BTSndZWFJvTWprNU9DSWdMejRnSUR4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lObFlUUXpNelU3Wm1sc2JDMXZjR0ZqYVhSNU9qRWlJR1E5SW0wek5ERXVOaUE1TVM0eE1qbGpMVFEzTGpnek1pQXdMVGd5TGpFeE1TQXpOeTR6T1RVdE9ESXVNVEV4SURneExqQXdPQ0F3SURRMExqSTFPQ0F6TXk0eU5Ea2dPREl1TXpRNElEZ3lMalkzTXlBNE1pNHpORGdnTkRRdU56UXlJREFnT0RFdU16azNMVE0wTGpFNU55QTRNUzR6T1RjdE9ERXVNemszSURBdE5UUXVNRGs0TFRReUxqWXpPQzA0TVM0NU5Ua3RPREV1T1RVNUxUZ3hMamsxT1hwdE1DNDBOelUyTXlBek1pNHdPRE5qTWpNdU5USXlJREFnTkRVdU9ERXlJREU1TGpBeE55QTBOUzQ0TVRJZ05Ea3VOallnTUNBeU9TNDVPVE10TWpJdU1UazFJRFE1TGpVMU1pMDBOUzQ1TWlBME9TNDFOVEl0TWpZdU1EWTRJREF0TkRZdU5qTXpMVEl3TGpnM09DMDBOaTQyTXpNdE5Ea3VOemtnTUMweU9DNHlPVElnTWpBdU16RXRORGt1TkRJeUlEUTJMamMwTVMwME9TNDBNako2SWlCbWFXeHNQU0lqWkdJek1qTTJJaUJwWkQwaWNHRjBhRE13TURBaUlDOCtJQ0E4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qWm1KaVl6QTFPMlpwYkd3dGIzQmhZMmwwZVRveElpQmtQU0p0TlRJd0xqRTRJRGt4TGpFeU9XTXRORGN1T0RNeUlEQXRPREl1TVRFeElETTNMak01TlMwNE1pNHhNVEVnT0RFdU1EQTRJREFnTkRRdU1qVTRJRE16TGpJME9TQTRNaTR6TkRnZ09ESXVOamN6SURneUxqTTBPQ0EwTkM0M05ESWdNQ0E0TVM0ek9UY3RNelF1TVRrM0lEZ3hMak01TnkwNE1TNHpPVGNnTUMwMU5DNHdPVGd0TkRJdU5qTTRMVGd4TGprMU9TMDRNUzQ1TlRrdE9ERXVPVFU1ZW0wd0xqUTNOVFl5SURNeUxqQTRNMk15TXk0MU1qSWdNQ0EwTlM0NE1USWdNVGt1TURFM0lEUTFMamd4TWlBME9TNDJOaUF3SURJNUxqazVNeTB5TWk0eE9UVWdORGt1TlRVeUxUUTFMamt5SURRNUxqVTFNaTB5Tmk0d05qZ2dNQzAwTmk0Mk16TXRNakF1T0RjNExUUTJMall6TXkwME9TNDNPU0F3TFRJNExqSTVNaUF5TUM0ek1TMDBPUzQwTWpJZ05EWXVOelF4TFRRNUxqUXlNbm9pSUdacGJHdzlJaU5tTkdNeU1HUWlJR2xrUFNKd1lYUm9NekF3TlNJZ0x6NGdJRHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU0wTWpnMVpqUTdabWxzYkMxdmNHRmphWFI1T2pFaUlHUTlJbTAyT1RVdU16UWdPVEV1TWpFMVl5MDBNeTQ1TURRZ01DMDNPQzQwTVRRZ016Z3VORFV6TFRjNExqUXhOQ0E0TVM0Mk1UTWdNQ0EwT1M0eE5qTWdOREF1TURBNUlEZ3hMamMyTlNBM055NDJOVGNnT0RFdU56WTFJREl6TGpJM09TQXdJRE0xTGpZMU55MDVMakkwTURVZ05EUXVOemsyTFRFNUxqZzBOM1l4Tmk0eE1EWmpNQ0F5T0M0eE9DMHhOeTR4TVNBME5TNHdOVFV0TkRJdU9UTTJJRFExTGpBMU5TMHlOQzQ1TkRrZ01DMHpOeTQwTmpNdE1UZ3VOVFV4TFRReExqZ3hNaTB5T1M0d056aHNMVE14TGpNNU1TQXhNeTR4TWpOak1URXVNVE0ySURJekxqVTBOeUF6TXk0MU5UUWdORGd1TVRBeklEY3pMalEyTXlBME9DNHhNRE1nTkRNdU5qVXlJREFnTnpZdU9USXlMVEkzTGpRNU5TQTNOaTQ1TWpJdE9EVXVNVFU1ZGkweE5EWXVOemRvTFRNMExqSTBOWFl4TXk0NE16WmpMVEV3TGpVekxURXhMak0wTnkweU5DNDVNeTB4T0M0M05EVXRORFF1TURRdE1UZ3VOelExZW0wekxqRTNPQ0F6TWk0d01UaGpNakV1TlRJMUlEQWdORE11TmpJNElERTRMak00SURRekxqWXlPQ0EwT1M0M05qZ2dNQ0F6TVM0NU1EUXRNakl1TURVMklEUTVMalE0TnkwME5DNHhNRFFnTkRrdU5EZzNMVEl6TGpRd05pQXdMVFExTGpFNE5TMHhPUzR3TURVdE5EVXVNVGcxTFRRNUxqRTROQ0F3TFRNeExqTTFPQ0F5TWk0Mk1Ua3ROVEF1TURjeElEUTFMalkyTFRVd0xqQTNNWG9pSUdacGJHdzlJaU0wT0RnMVpXUWlJR2xrUFNKd1lYUm9NekF3TnlJZ0x6NGdJRHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5sWVRRek16VTdabWxzYkMxdmNHRmphWFI1T2pFaUlHUTlJbTA1TWpVdU9Ea2dPVEV1TURKakxUUXhMalF4TkNBd0xUYzJMakU0TnlBek1pNDVOUzAzTmk0eE9EY2dPREV1TlRjZ01DQTFNUzQwTkRjZ016Z3VOelU1SURneExqazFPU0E0TUM0eE5qVWdPREV1T1RVNUlETTBMalUxT0NBd0lEVTFMamMyT0MweE9DNDVNRFlnTmpndU5ESTJMVE0xTGpnME5Xd3RNamd1TWpNMUxURTRMamM0TjJNdE55NHpNalk0SURFeExqTTNNUzB4T1M0MU56WWdNakl1TkRnMExUUXdMakF4T0NBeU1pNDBPRFF0TWpJdU9UWXlJREF0TXpNdU5USXRNVEl1TlRjMExUUXdMakEyTVMweU5DNDNOVFJzTVRBNUxqVXlMVFExTGpRME5DMDFMalk0TlRrdE1UTXVNekU0WXkweE1DNDFPQzB5Tmk0d09DMHpOUzR5TmkwME55NDROaTAyTnk0NU1pMDBOeTQ0Tm5wdE1TNDBNalk0SURNeExqUXhNMk14TkM0NU1qTWdNQ0F5TlM0Mk5qTWdOeTQ1TXpReUlETXdMakl5TkNBeE55NDBORGRzTFRjekxqRXpPU0F6TUM0MU4yTXRNeTR4TlRNeUxUSXpMalkyTnlBeE9TNHlOamt0TkRndU1ERTNJRFF5TGpreE5TMDBPQzR3TVRkNklpQm1hV3hzUFNJalpHSXpNak0ySWlCcFpEMGljR0YwYURNd01URWlJQzgrSUNBOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvak16UmhPRFV6TzJacGJHd3RiM0JoWTJsMGVUb3hJaUJrUFNKdE56azNMalE1SURJME9TNDNhRE0xTGprM05YWXRNalF3TGpjMWFDMHpOUzQ1TnpWNklpQm1hV3hzUFNJak0yTmlZVFUwSWlCcFpEMGljR0YwYURNd01UVWlJQzgrUEM5emRtYytDZz09KTsKICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OwogIGJhY2tncm91bmQtc2l6ZTogY292ZXI7CiAgZGlzcGxheTogaW5saW5lLWJsb2NrOwogIGNvbnRlbnQ6ICIiOwogIG1hcmdpbi1yaWdodDogM3B4OwogIGhlaWdodDogMTJweDsKICB3aWR0aDogMzdweDsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9CgouZ29vZy1sb2dvLWxpbmsgaW1nIHsKICBkaXNwbGF5OiBub25lOwp9CgouZ29vZy10ZS1nYWRnZXQgewogIGJvcmRlci1yYWRpdXM6IDVweDsKICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDsKICBib3gtc2l6aW5nOiBib3JkZXItYm94OwogIGZvbnQtZmFtaWx5OiBpbmhlcml0ICFpbXBvcnRhbnQ7CiAgbWFyZ2luLWJvdHRvbTogMS4xZW07CiAgbWFyZ2luLXRvcDogMS4xZW07CiAgbWF4LXdpZHRoOiAxMDAlOwogIHBhZGRpbmc6IDE1cHggMTVweCAxMXB4OwogIHRleHQtYWxpZ246IGNlbnRlcjsKICB3aWR0aDogMjBlbTsKfQoKI2Nsb3VkZmxhcmUtYXBwLWdvb2dsZS10cmFuc2xhdGVbZGF0YS1wb3NpdGlvbj0ibGVmdCJdIC5nb29nLXRlLWdhZGdldCB7CiAgbWFyZ2luLWxlZnQ6IDEuMWVtOwogIG1hcmdpbi1yaWdodDogYXV0bzsKfQoKI2Nsb3VkZmxhcmUtYXBwLWdvb2dsZS10cmFuc2xhdGVbZGF0YS1wb3NpdGlvbj0iY2VudGVyIl0gLmdvb2ctdGUtZ2FkZ2V0IHsKICBtYXJnaW4tbGVmdDogYXV0bzsKICBtYXJnaW4tcmlnaHQ6IGF1dG87Cn0KCiNjbG91ZGZsYXJlLWFwcC1nb29nbGUtdHJhbnNsYXRlW2RhdGEtcG9zaXRpb249InJpZ2h0Il0gLmdvb2ctdGUtZ2FkZ2V0IHsKICBtYXJnaW4tbGVmdDogYXV0bzsKICBtYXJnaW4tcmlnaHQ6IDEuMWVtOwp9Cg==';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/N6V05FoQDgG30m98KHhxcoueMa0.js';document.head.appendChild(script);})();