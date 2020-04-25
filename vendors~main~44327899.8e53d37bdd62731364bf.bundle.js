(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(module,exports,__webpack_require__){"use strict";var events;Object.defineProperty(exports,"__esModule",{value:!0}),exports.NAVIGATE_URL=exports.DOCS_RENDERED=exports.STORY_THREW_EXCEPTION=exports.STORIES_EXPAND_ALL=exports.STORIES_COLLAPSE_ALL=exports.STORY_CHANGED=exports.STORY_ERRORED=exports.STORY_MISSING=exports.STORY_RENDERED=exports.STORY_RENDER=exports.STORY_ADDED=exports.STORY_INIT=exports.REGISTER_SUBSCRIPTION=exports.FORCE_RE_RENDER=exports.PREVIEW_KEYDOWN=exports.SELECT_STORY=exports.STORIES_CONFIGURED=exports.SET_STORIES=exports.GET_STORIES=exports.SET_CURRENT_STORY=exports.GET_CURRENT_STORY=exports.CHANNEL_CREATED=exports.default=void 0,function(events){events.CHANNEL_CREATED="channelCreated",events.GET_CURRENT_STORY="getCurrentStory",events.SET_CURRENT_STORY="setCurrentStory",events.GET_STORIES="getStories",events.SET_STORIES="setStories",events.STORIES_CONFIGURED="storiesConfigured",events.SELECT_STORY="selectStory",events.PREVIEW_KEYDOWN="previewKeydown",events.STORY_ADDED="storyAdded",events.STORY_CHANGED="storyChanged",events.STORY_UNCHANGED="storyUnchanged",events.FORCE_RE_RENDER="forceReRender",events.REGISTER_SUBSCRIPTION="registerSubscription",events.STORY_INIT="storyInit",events.STORY_RENDER="storyRender",events.STORY_RENDERED="storyRendered",events.STORY_MISSING="storyMissing",events.STORY_ERRORED="storyErrored",events.STORY_THREW_EXCEPTION="storyThrewException",events.STORIES_COLLAPSE_ALL="storiesCollapseAll",events.STORIES_EXPAND_ALL="storiesExpandAll",events.DOCS_RENDERED="docsRendered",events.NAVIGATE_URL="navigateUrl"}(events||(events={}));var _default=events;exports.default=_default;var CHANNEL_CREATED=events.CHANNEL_CREATED,GET_CURRENT_STORY=events.GET_CURRENT_STORY,SET_CURRENT_STORY=events.SET_CURRENT_STORY,GET_STORIES=events.GET_STORIES,SET_STORIES=events.SET_STORIES,STORIES_CONFIGURED=events.STORIES_CONFIGURED,SELECT_STORY=events.SELECT_STORY,PREVIEW_KEYDOWN=events.PREVIEW_KEYDOWN,FORCE_RE_RENDER=events.FORCE_RE_RENDER,REGISTER_SUBSCRIPTION=events.REGISTER_SUBSCRIPTION,STORY_INIT=events.STORY_INIT,STORY_ADDED=events.STORY_ADDED,STORY_RENDER=events.STORY_RENDER,STORY_RENDERED=events.STORY_RENDERED,STORY_MISSING=events.STORY_MISSING,STORY_ERRORED=events.STORY_ERRORED,STORY_CHANGED=events.STORY_CHANGED,STORIES_COLLAPSE_ALL=events.STORIES_COLLAPSE_ALL,STORIES_EXPAND_ALL=events.STORIES_EXPAND_ALL,STORY_THREW_EXCEPTION=events.STORY_THREW_EXCEPTION,DOCS_RENDERED=events.DOCS_RENDERED,NAVIGATE_URL=events.NAVIGATE_URL;exports.NAVIGATE_URL=NAVIGATE_URL,exports.DOCS_RENDERED=DOCS_RENDERED,exports.STORY_THREW_EXCEPTION=STORY_THREW_EXCEPTION,exports.STORIES_EXPAND_ALL=STORIES_EXPAND_ALL,exports.STORIES_COLLAPSE_ALL=STORIES_COLLAPSE_ALL,exports.STORY_CHANGED=STORY_CHANGED,exports.STORY_ERRORED=STORY_ERRORED,exports.STORY_MISSING=STORY_MISSING,exports.STORY_RENDERED=STORY_RENDERED,exports.STORY_RENDER=STORY_RENDER,exports.STORY_ADDED=STORY_ADDED,exports.STORY_INIT=STORY_INIT,exports.REGISTER_SUBSCRIPTION=REGISTER_SUBSCRIPTION,exports.FORCE_RE_RENDER=FORCE_RE_RENDER,exports.PREVIEW_KEYDOWN=PREVIEW_KEYDOWN,exports.SELECT_STORY=SELECT_STORY,exports.STORIES_CONFIGURED=STORIES_CONFIGURED,exports.SET_STORIES=SET_STORIES,exports.GET_STORIES=GET_STORIES,exports.SET_CURRENT_STORY=SET_CURRENT_STORY,exports.GET_CURRENT_STORY=GET_CURRENT_STORY,exports.CHANNEL_CREATED=CHANNEL_CREATED},101:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isExportStory=function isExportStory(key,_ref){var includeStories=_ref.includeStories,excludeStories=_ref.excludeStories;return"__esModule"!==key&&(!includeStories||matches(key,includeStories))&&(!excludeStories||!matches(key,excludeStories))},exports.parseKind=exports.storyNameFromExport=exports.toId=exports.sanitize=void 0;var _startCase=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(631));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr))&&"[object Arguments]"!==Object.prototype.toString.call(arr))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var sanitize=function sanitize(string){return string.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};exports.sanitize=sanitize;var sanitizeSafe=function sanitizeSafe(string,part){var sanitized=sanitize(string);if(""===sanitized)throw new Error("Invalid ".concat(part," '").concat(string,"', must include alphanumeric characters"));return sanitized};exports.toId=function toId(kind,name){return"".concat(sanitizeSafe(kind,"kind"),"--").concat(sanitizeSafe(name,"name"))};function matches(storyKey,arrayOrRegex){return Array.isArray(arrayOrRegex)?arrayOrRegex.includes(storyKey):storyKey.match(arrayOrRegex)}exports.storyNameFromExport=function storyNameFromExport(key){return(0,_startCase.default)(key)};exports.parseKind=function parseKind(kind,_ref2){var rootSeparator=_ref2.rootSeparator,groupSeparator=_ref2.groupSeparator,_kind$split2=_slicedToArray(kind.split(rootSeparator,2),2),root=_kind$split2[0],remainder=_kind$split2[1];return{root:remainder?root:null,groups:(remainder||kind).split(groupSeparator).filter((function(i){return!!i}))}}},1263:function(module,exports,__webpack_require__){module.exports=__webpack_require__(1264).default},1264:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1265)).default;exports.default=_default},1265:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _clientApi=__webpack_require__(114),_csf=__webpack_require__(101);var _default={start:function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1266)).default,toId:_csf.toId,ClientApi:_clientApi.ClientApi,ConfigApi:_clientApi.ConfigApi,StoryStore:_clientApi.StoryStore};exports.default=_default},1266:function(module,exports,__webpack_require__){"use strict";__webpack_require__(1),__webpack_require__(9),__webpack_require__(21),__webpack_require__(20),__webpack_require__(240),__webpack_require__(45),__webpack_require__(32),__webpack_require__(75),__webpack_require__(13),__webpack_require__(27),__webpack_require__(14),__webpack_require__(10),__webpack_require__(33),__webpack_require__(15),__webpack_require__(119),__webpack_require__(2),__webpack_require__(5),__webpack_require__(11),__webpack_require__(140),__webpack_require__(42),__webpack_require__(16),__webpack_require__(37),__webpack_require__(17),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function start(render){var _ref3=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},decorateStory=_ref3.decorateStory,context=getContext(decorateStory),clientApi=context.clientApi,channel=context.channel,configApi=context.configApi,storyStore=context.storyStore,previousKind="",previousStory="",previousRevision=-1,previousViewMode="",previousId=null,renderMain=function renderMain(forceRender){var revision=storyStore.getRevision(),loadError=storyStore.getError(),_storyStore$getSelect=storyStore.getSelection(),storyId=_storyStore$getSelect.storyId,urlViewMode=_storyStore$getSelect.viewMode,data=storyStore.fromId(storyId),_ref4=data||{},kind=_ref4.kind,name=_ref4.name,getDecorated=_ref4.getDecorated,id=_ref4.id,parameters=_ref4.parameters,error=_ref4.error,viewMode=parameters&&parameters.docsOnly?"docs":urlViewMode,renderContext=Object.assign({},context,{},data,{selectedKind:kind,selectedStory:name,parameters:parameters,forceRender:forceRender});if(loadError||error)showErrorDisplay(loadError||error);else if(forceRender||revision!==previousRevision||viewMode!==previousViewMode||kind!==previousKind||name!==previousStory){switch(!forceRender&&previousKind&&previousStory&&_addons.default.getChannel().emit(_coreEvents.default.STORY_CHANGED,id),previousViewMode){case"docs":null==previousKind||kind===previousKind&&viewMode===previousViewMode||(storyStore.cleanHooksForKind(previousKind),_reactDom.default.unmountComponentAtNode(_global.document.getElementById("docs-root")));break;case"story":default:null==previousId||id===previousId&&viewMode===previousViewMode||(storyStore.cleanHooks(previousId),_reactDom.default.unmountComponentAtNode(_global.document.getElementById("root")))}if(viewMode!==previousViewMode)switch(viewMode){case"docs":showMain(),_global.document.getElementById("root").setAttribute("hidden",!0),_global.document.getElementById("docs-root").removeAttribute("hidden");break;case"story":default:"docs"===previousViewMode&&(_global.document.getElementById("docs-root").setAttribute("hidden",!0),_global.document.getElementById("root").removeAttribute("hidden"))}switch(viewMode){case"docs":var docs=parameters&&parameters.docs||{},DocsContainer=docs.container||function(_ref5){var children=_ref5.children;return _react.default.createElement(_react.default.Fragment,null,children)},Page=docs.page||_NoDocs.NoDocs;_reactDom.default.render(_react.default.createElement(DocsContainer,{context:renderContext},_react.default.createElement(Page,null)),_global.document.getElementById("docs-root"),(function(){return _addons.default.getChannel().emit(_coreEvents.default.DOCS_RENDERED,kind)}));break;case"story":default:getDecorated?_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,render(renderContext);case 3:_addons.default.getChannel().emit(_coreEvents.default.STORY_RENDERED,id),_context.next=9;break;case 6:_context.prev=6,_context.t0=_context.catch(0),showException(_context.t0);case 9:case"end":return _context.stop()}}),_callee,null,[[0,6]])})))():(showNopreview(),_addons.default.getChannel().emit(_coreEvents.default.STORY_MISSING,id))}previousRevision=revision,previousKind=kind,previousStory=name,previousViewMode=viewMode,previousId=id,forceRender||"docs"===viewMode||(_global.document.documentElement.scrollTop=0,_global.document.documentElement.scrollLeft=0)}else _addons.default.getChannel().emit(_coreEvents.default.STORY_UNCHANGED,{id:id,revision:revision,kind:kind,name:name,viewMode:viewMode})},renderUI=function renderUI(forceRender){if(isBrowser)try{renderMain(forceRender)}catch(ex){showException(ex)}},forceReRender=function forceReRender(){return renderUI(!0)};if(isBrowser){var deprecatedToId=(0,_utilDeprecate.default)(_csf.toId,"Passing name+kind to the SET_CURRENT_STORY event is deprecated, use a storyId instead");channel.on(_coreEvents.default.FORCE_RE_RENDER,forceReRender),channel.on(_coreEvents.default.SET_CURRENT_STORY,(function(_ref7){var inputStoryId=_ref7.storyId,name=_ref7.name,kind=_ref7.kind,viewMode=_ref7.viewMode,storyId=inputStoryId;if(!storyId){if(!name||!kind)throw new Error("You should pass `storyId` into SET_CURRENT_STORY");storyId=deprecatedToId(kind,name)}storyStore.setSelection({storyId:storyId,viewMode:viewMode}),(0,_url.setPath)({storyId:storyId,viewMode:viewMode})})),_global.window.onkeydown=function(event){if(!focusInInput(event)){var altKey=event.altKey,ctrlKey=event.ctrlKey,metaKey=event.metaKey,shiftKey=event.shiftKey,key=event.key,code=event.code,keyCode=event.keyCode;channel.emit(_coreEvents.default.PREVIEW_KEYDOWN,{event:{altKey:altKey,ctrlKey:ctrlKey,metaKey:metaKey,shiftKey:shiftKey,key:key,code:code,keyCode:keyCode}})}}}storyStore.on(_coreEvents.default.STORY_INIT,(function(){var _initializePath=(0,_url.initializePath)(storyStore),storyId=_initializePath.storyId,viewMode=_initializePath.viewMode;storyStore.setSelection({storyId:storyId,viewMode:viewMode})})),storyStore.on(_coreEvents.default.STORY_RENDER,renderUI),void 0!==_global.window&&(_global.window.__STORYBOOK_CLIENT_API__=clientApi,_global.window.__STORYBOOK_STORY_STORE__=storyStore,_global.window.__STORYBOOK_ADDONS_CHANNEL__=channel);var previousExports=new Map,loadStories=function loadStories(loadable,framework){return function(){var reqs=null;Array.isArray(loadable)?reqs=loadable:loadable.keys&&(reqs=[loadable]);var currentExports=new Map;if(reqs)reqs.forEach((function(req){req.keys().forEach((function(filename){var fileExports=req(filename);currentExports.set(fileExports,"function"==typeof req.resolve?req.resolve(filename):null)}))}));else{var exported=loadable();Array.isArray(exported)&&exported.every((function(obj){return null!=obj.default}))?currentExports=new Map(exported.map((function(fileExports){return[fileExports,null]}))):exported&&_clientLogger.logger.warn("Loader function passed to 'configure' should return void or an array of module exports that all contain a 'default' export. Received: ".concat(JSON.stringify(exported)))}var removed=_toConsumableArray(previousExports.keys()).filter((function(exp){return!currentExports.has(exp)}));removed.forEach((function(exp){exp.default&&storyStore.removeStoryKind(exp.default.title)})),removed.length>0&&storyStore.incrementRevision(),_toConsumableArray(currentExports.keys()).filter((function(exp){return!previousExports.has(exp)})).forEach((function(fileExports){if(fileExports.default){if(!fileExports.default.title)throw new Error("Unexpected default export without title: ".concat(JSON.stringify(fileExports.default)));var meta=fileExports.default,__namedExportsOrder=fileExports.__namedExportsOrder,namedExports=_objectWithoutProperties(fileExports,["default","__namedExportsOrder"]),exports=namedExports;Array.isArray(__namedExportsOrder)&&(exports={},__namedExportsOrder.forEach((function(name){namedExports[name]&&(exports[name]=namedExports[name])})));var kindName=meta.title,componentId=meta.id,params=meta.parameters,decos=meta.decorators,component=meta.component,subcomponents=meta.subcomponents,kind=clientApi.storiesOf(kindName,!0);kind.addParameters(Object.assign({framework:framework,component:component,subcomponents:subcomponents,fileName:currentExports.get(fileExports)},params)),(decos||[]).forEach((function(decorator){kind.addDecorator(decorator)})),Object.keys(exports).forEach((function(key){if((0,_csf.isExportStory)(key,meta)){var storyFn=exports[key],_ref8=storyFn.story||{},name=_ref8.name,parameters=_ref8.parameters,decorators=_ref8.decorators;parameters&&parameters.decorators&&(0,_utilDeprecate.default)((function(){}),"".concat(kindName," => ").concat(name||key,": story.parameters.decorators is deprecated; use story.decorators instead."))();var decoratorParams=decorators?{decorators:decorators}:null,exportName=(0,_csf.storyNameFromExport)(key),idParams={__id:(0,_csf.toId)(componentId||kindName,exportName)};kind.add(name||exportName,storyFn,Object.assign({},parameters,{},decoratorParams,{},idParams))}}))}})),previousExports=currentExports}},loaded=!1,configure=function configure(loadable,m,framework){if("string"==typeof m)throw new Error("Invalid module '".concat(m,"'. Did you forget to pass `module` as the second argument to `configure`\"?"));if(m&&m.hot&&m.hot.dispose){var _ref9$previousExports=(m.hot.data||{}).previousExports;previousExports=void 0===_ref9$previousExports?new Map:_ref9$previousExports,m.hot.dispose((function(data){loaded=!1,data.previousExports=previousExports}))}loaded&&_clientLogger.logger.warn("Unexpected loaded state. Did you call `load` twice?"),loaded=!0,configApi.configure(loadStories(loadable,framework),m)};return{configure:configure,context:context,clientApi:clientApi,configApi:configApi,forceReRender:forceReRender}},exports.getContext=void 0,__webpack_require__(156);var _global=__webpack_require__(36),_react=_interopRequireDefault(__webpack_require__(0)),_reactDom=_interopRequireDefault(__webpack_require__(194)),_utilDeprecate=_interopRequireDefault(__webpack_require__(116)),_ansiToHtml=_interopRequireDefault(__webpack_require__(1267)),_addons=_interopRequireDefault(__webpack_require__(67)),_channelPostmessage=_interopRequireDefault(__webpack_require__(1274)),_clientApi2=__webpack_require__(114),_csf=__webpack_require__(101),_clientLogger=__webpack_require__(54),_coreEvents=_interopRequireDefault(__webpack_require__(100)),_url=__webpack_require__(1280),_NoDocs=__webpack_require__(1281);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var ansiConverter=new _ansiToHtml.default({escapeXML:!0}),classes_MAIN="sb-show-main",classes_NOPREVIEW="sb-show-nopreview",classes_ERROR="sb-show-errordisplay";function showMain(){_global.document.body.classList.remove(classes_NOPREVIEW),_global.document.body.classList.remove(classes_ERROR),_global.document.body.classList.add(classes_MAIN)}function showNopreview(){_global.document.body.classList.remove(classes_MAIN),_global.document.body.classList.remove(classes_ERROR),_global.document.body.classList.add(classes_NOPREVIEW)}function showErrorDisplay(_ref){var _ref$message=_ref.message,message=void 0===_ref$message?"":_ref$message,_ref$stack=_ref.stack,stack=void 0===_ref$stack?"":_ref$stack;_global.document.getElementById("error-message").innerHTML=ansiConverter.toHtml(message),_global.document.getElementById("error-stack").innerHTML=ansiConverter.toHtml(stack),_global.document.body.classList.remove(classes_MAIN),_global.document.body.classList.remove(classes_NOPREVIEW),_global.document.body.classList.add(classes_ERROR)}function showError(_ref2){var title=_ref2.title,description=_ref2.description;_addons.default.getChannel().emit(_coreEvents.default.STORY_ERRORED,{title:title,description:description}),showErrorDisplay({message:title,stack:description})}function showException(exception){_addons.default.getChannel().emit(_coreEvents.default.STORY_THREW_EXCEPTION,exception),showErrorDisplay(exception),_clientLogger.logger.error(exception)}var isBrowser=_global.navigator&&_global.navigator.userAgent&&"storyshots"!==_global.navigator.userAgent&&!(_global.navigator.userAgent.indexOf("Node.js")>-1)&&!(_global.navigator.userAgent.indexOf("jsdom")>-1),getContext=function(decorateStory){var storyStore,clientApi,channel=null;if(isBrowser)try{channel=_addons.default.getChannel()}catch(e){channel=(0,_channelPostmessage.default)({page:"preview"}),_addons.default.setChannel(channel)}void 0!==_global.window&&_global.window.__STORYBOOK_CLIENT_API__?storyStore=(clientApi=_global.window.__STORYBOOK_CLIENT_API__)._storyStore:(storyStore=new _clientApi2.StoryStore({channel:channel}),clientApi=new _clientApi2.ClientApi({storyStore:storyStore,decorateStory:decorateStory}));var clearDecorators=clientApi.clearDecorators;return{configApi:new _clientApi2.ConfigApi({clearDecorators:clearDecorators,storyStore:storyStore,channel:channel,clientApi:clientApi}),storyStore:storyStore,channel:channel,clientApi:clientApi,showMain:showMain,showError:showError,showException:showException}};function focusInInput(event){return/input|textarea/i.test(event.target.tagName)||null!==event.target.getAttribute("contenteditable")}exports.getContext=getContext},1280:function(module,exports,__webpack_require__){"use strict";__webpack_require__(1),__webpack_require__(20),__webpack_require__(13),__webpack_require__(2),__webpack_require__(5),__webpack_require__(23),__webpack_require__(115),__webpack_require__(378),Object.defineProperty(exports,"__esModule",{value:!0}),exports.pathToId=pathToId,exports.initializePath=exports.parseQueryParameters=exports.getIdFromLegacyQuery=exports.setPath=void 0;var _global=__webpack_require__(36),_qs=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(379)),_csf=__webpack_require__(101);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function pathToId(path){var match=(path||"").match(/^\/story\/(.+)/);if(!match)throw new Error("Invalid path '".concat(path,"',  must start with '/story/'"));return match[1]}var setPath=function setPath(_ref){var storyId=_ref.storyId,viewMode=_ref.viewMode,_qs$parse=_qs.default.parse(_global.document.location.search,{ignoreQueryPrefix:!0}),rest=(_qs$parse.path,_qs$parse.selectedKind,_qs$parse.selectedStory,_objectWithoutProperties(_qs$parse,["path","selectedKind","selectedStory"])),newPath="".concat(_global.document.location.pathname,"?").concat(_qs.default.stringify(Object.assign({},rest,{id:storyId,viewMode:viewMode})));_global.history.replaceState({},"",newPath)};exports.setPath=setPath;var getIdFromLegacyQuery=function getIdFromLegacyQuery(_ref2,storyStore){var path=_ref2.path,selectedKind=_ref2.selectedKind,selectedStory=_ref2.selectedStory;if(path)return pathToId(path);if(selectedKind&&selectedStory){var story=storyStore.getRawStory(selectedKind,selectedStory);return story?story.id:(0,_csf.toId)(selectedKind,selectedStory)}};exports.getIdFromLegacyQuery=getIdFromLegacyQuery;exports.parseQueryParameters=function parseQueryParameters(search){return _qs.default.parse(search,{ignoreQueryPrefix:!0}).id};exports.initializePath=function initializePath(storyStore){var query=_qs.default.parse(_global.document.location.search,{ignoreQueryPrefix:!0}),storyId=query.id,viewMode=query.viewMode;return storyId||(storyId=getIdFromLegacyQuery(query,storyStore))&&setPath({storyId:storyId,viewMode:viewMode}),{storyId:storyId,viewMode:viewMode}}},1281:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NoDocs=void 0;var _react=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(0));var _ref=_react.default.createElement("div",{style:{fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},className:"sb-nodocs sb-wrapper"},_react.default.createElement("div",{style:{margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"}},_react.default.createElement("h1",{style:{textAlign:"center"}},"No Docs"),_react.default.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",_react.default.createElement("code",null,"docs")," parameter. If you think this is an error:"),_react.default.createElement("ul",null,_react.default.createElement("li",null,"Please check the story definition."),_react.default.createElement("li",null,"Please check the Storybook config."),_react.default.createElement("li",null,"Try reloading the page.")),_react.default.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from."))),NoDocs=function NoDocs(){return _ref};exports.NoDocs=NoDocs,NoDocs.displayName="NoDocs"},468:function(module,exports,__webpack_require__){"use strict";__webpack_require__(156),__webpack_require__(469),__webpack_require__(587)},610:function(module,exports,__webpack_require__){"use strict";__webpack_require__(36).window.STORYBOOK_REACT_CLASSES={}}}]);
//# sourceMappingURL=vendors~main~44327899.8e53d37bdd62731364bf.bundle.js.map