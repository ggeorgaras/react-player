var ReactPlayer=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(10);var c=n(1),p=r(c),f=n(4),y=n(8),d=r(y),h=function(e){function t(){var e,n,r,u;i(this,t);for(var l=arguments.length,c=Array(l),f=0;l>f;f++)c[f]=arguments[f];return n=r=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.seekTo=function(e){var t=r.refs.player;t&&t.seekTo(e)},r.progress=function(){if(r.props.url&&r.refs.player){var e={},t=r.refs.player.getFractionLoaded(),n=r.refs.player.getFractionPlayed();null!==t&&t!==r.prevLoaded&&(e.loaded=r.prevLoaded=t),null!==n&&n!==r.prevPlayed&&r.props.playing&&(e.played=r.prevPlayed=n),(e.loaded||e.played)&&r.props.onProgress(e)}r.progressTimeout=setTimeout(r.progress,r.props.progressFrequency)},r.renderPlayer=function(e){var t=e.canPlay(r.props.url),n=r.props,i=n.youtubeConfig,a=n.soundcloudConfig,u=n.vimeoConfig,l=n.fileConfig,c=o(n,["youtubeConfig","soundcloudConfig","vimeoConfig","fileConfig"]),f=t?s({},c,{ref:"player"}):{};return p["default"].createElement(e,s({key:e.displayName,youtubeConfig:i,soundcloudConfig:a,vimeoConfig:u,fileConfig:l},f))},u=n,a(r,u)}return u(t,e),l(t,[{key:"componentDidMount",value:function(){this.progress()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout)}},{key:"shouldComponentUpdate",value:function(e){return this.props.url!==e.url||this.props.playing!==e.playing||this.props.volume!==e.volume}},{key:"render",value:function(){var e={width:this.props.width,height:this.props.height};return p["default"].createElement("div",{style:e,className:this.props.className},d["default"].map(this.renderPlayer))}}],[{key:"canPlay",value:function(e){return d["default"].some(function(t){return t.canPlay(e)})}}]),t}(c.Component);h.displayName="ReactPlayer",h.propTypes=f.propTypes,h.defaultProps=f.defaultProps,t["default"]=h,e.exports=t["default"]},function(e,t){e.exports=React},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=n(4),l=5e3,c=function(e){function t(){var e,n,i,a;r(this,t);for(var u=arguments.length,s=Array(u),l=0;u>l;l++)s[l]=arguments[l];return n=i=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.isReady=!1,i.startOnPlay=!0,i.durationOnPlay=!1,i.seekOnPlay=null,i.onPlay=function(){i.startOnPlay&&(i.props.onStart(),i.startOnPlay=!1),i.props.onPlay(),i.setVolume(i.props.volume),i.seekOnPlay&&(i.seekTo(i.seekOnPlay),i.seekOnPlay=null),i.durationOnPlay&&(i.props.onDuration(i.getDuration()),i.durationOnPlay=!1)},i.onReady=function(){i.isReady=!0,(i.props.playing||i.preloading)&&(i.preloading=!1,i.loadOnReady?(i.load(i.loadOnReady),i.loadOnReady=null):i.play());var e=i.getDuration();e?i.props.onDuration(e):i.durationOnPlay=!0},i.onEnded=function(){i.props.loop&&i.seekTo(0),i.props.onEnded()},a=n,o(i,a)}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.url&&this.load(this.props.url)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillReceiveProps",value:function(e){this.props.url!==e.url&&e.url?(this.seekOnPlay=null,this.startOnPlay=!0,this.load(e.url)):this.props.url&&!e.url?(this.stop(),clearTimeout(this.updateTimeout)):!this.props.playing&&e.playing?this.play():this.props.playing&&!e.playing?this.pause():this.props.volume!==e.volume&&this.setVolume(e.volume)}},{key:"shouldComponentUpdate",value:function(e){return this.props.url!==e.url}},{key:"seekTo",value:function(e){var t=this;this.isReady||0===e||(this.seekOnPlay=e,setTimeout(function(){t.seekOnPlay=null},l))}}]),t}(u.Component);c.propTypes=s.propTypes,c.defaultProps=s.defaultProps,t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function g(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:g(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(1),p=r(c),f=n(2),y=r(f),d=/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i,h=/\.(mp3|wav|m4a)($|\?)/i,v=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;this.player=this.refs.player,this.player.oncanplay=this.onReady,this.player.onplay=this.onPlay,this.player.onpause=function(){return e.props.onPause()},this.player.onended=function(){return e.onEnded()},this.player.onerror=function(t){return e.props.onError(t)},this.player.setAttribute("webkit-playsinline",""),l(Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this)}},{key:"load",value:function(e){this.player.src=e}},{key:"play",value:function(){this.player.play()}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.pause(),this.player.removeAttribute("src")}},{key:"seekTo",value:function(e){l(Object.getPrototypeOf(t.prototype),"seekTo",this).call(this,e),this.player.currentTime=this.getDuration()*e}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"getDuration",value:function(){return this.isReady?this.player.duration:null}},{key:"getFractionPlayed",value:function(){return this.isReady?this.player.currentTime/this.getDuration():null}},{key:"getFractionLoaded",value:function(){return this.isReady&&0!==this.player.buffered.length?this.player.buffered.end(0)/this.getDuration():null}},{key:"render",value:function(){var e=this.props,t=e.controls,n=e.fileConfig,r=h.test(this.props.url)?"audio":"video",o={width:"100%",height:"100%",display:this.props.url?"block":"none"};return p["default"].createElement(r,u({ref:"player",style:o,preload:"auto",controls:t},n.attributes))}}],[{key:"canPlay",value:function(e){return d.test(e)||h.test(e)}}]),t}(y["default"]);v.displayName="FilePlayer",t["default"]=v,e.exports=t["default"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultProps=t.propTypes=void 0;var r=n(1);t.propTypes={url:r.PropTypes.string,playing:r.PropTypes.bool,loop:r.PropTypes.bool,controls:r.PropTypes.bool,volume:r.PropTypes.number,width:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.number]),height:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.number]),className:r.PropTypes.string,progressFrequency:r.PropTypes.number,soundcloudConfig:r.PropTypes.shape({clientId:r.PropTypes.string}),youtubeConfig:r.PropTypes.shape({playerVars:r.PropTypes.object,preload:r.PropTypes.bool}),vimeoConfig:r.PropTypes.shape({iframeParams:r.PropTypes.object,preload:r.PropTypes.bool}),fileConfig:r.PropTypes.shape({attributes:r.PropTypes.object}),onStart:r.PropTypes.func,onPlay:r.PropTypes.func,onPause:r.PropTypes.func,onBuffer:r.PropTypes.func,onEnded:r.PropTypes.func,onError:r.PropTypes.func,onDuration:r.PropTypes.func,onProgress:r.PropTypes.func},t.defaultProps={playing:!1,loop:!1,controls:!1,volume:.8,width:640,height:360,progressFrequency:1e3,soundcloudConfig:{clientId:"e8b6f84fbcad14c301ca1355cae1dea2"},youtubeConfig:{playerVars:{},preload:!1},vimeoConfig:{iframeParams:{},preload:!1},fileConfig:{attributes:{}},onStart:function(){},onPlay:function(){},onPause:function(){},onBuffer:function(){},onEnded:function(){},onError:function(){},onDuration:function(){},onProgress:function(){}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function b(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:b(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},l=n(1),c=r(l),p=n(11),f=r(p),y=n(3),d=r(y),h="//api.soundcloud.com/resolve.json",v=/^https?:\/\/(soundcloud.com|snd.sc)\/([a-z0-9-_]+\/[a-z0-9-_]+)$/,g={},m=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),l=0;u>l;l++)s[l]=arguments[l];return n=r=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={image:null},a=n,i(r,a)}return a(t,e),u(t,[{key:"shouldComponentUpdate",value:function(e,n){return s(Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e,n)||this.state.image!==n.image}},{key:"getSongData",value:function(e){var t=this;return g[e]?Promise.resolve(g[e]):(0,f["default"])(h+"?url="+e+"&client_id="+this.props.soundcloudConfig.clientId).then(function(n){return n.ok?(g[e]=n.json(),g[e]):void t.props.onError(new Error("SoundCloud track could not be resolved"))})}},{key:"load",value:function(e){var t=this;this.stop(),this.getSongData(e).then(function(n){if(e===t.props.url){if(!n.streamable)return void t.props.onError(new Error("SoundCloud track is not streamable"));var r=n.artwork_url||n.user.avatar_url;r&&t.setState({image:r.replace("-large","-t500x500")}),t.player.src=n.stream_url+"?client_id="+t.props.soundcloudConfig.clientId}},this.props.onError)}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.controls,r={display:t?"block":"none",height:"100%",backgroundImage:this.state.image?"url("+this.state.image+")":null,backgroundSize:"cover",backgroundPosition:"center"};return c["default"].createElement("div",{style:r},c["default"].createElement("audio",{ref:"player",type:"audio/mpeg",preload:"auto",style:{width:"100%",height:"100%"},controls:n}))}}],[{key:"canPlay",value:function(e){return v.test(e)}}]),t}(d["default"]);m.displayName="SoundCloud",t["default"]=m,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function w(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:w(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(1),p=r(c),f=n(14),y=n(2),d=r(y),h="https://player.vimeo.com/video/",v=/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,g=/^https?:\/\/player.vimeo.com/,m="https://vimeo.com/127250231",b={api:1,autoplay:0,badge:0,byline:0,fullscreen:1,portrait:0,title:0},P=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),l=0;u>l;l++)s[l]=arguments[l];return n=r=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.onMessage=function(e){if(g.test(e.origin)){r.origin=r.origin||e.origin;var t=JSON.parse(e.data);"ready"===t.event&&(r.postMessage("getDuration"),r.postMessage("addEventListener","playProgress"),r.postMessage("addEventListener","loadProgress"),r.postMessage("addEventListener","play"),r.postMessage("addEventListener","pause"),r.postMessage("addEventListener","finish")),"playProgress"===t.event&&(r.fractionPlayed=t.data.percent),"loadProgress"===t.event&&(r.fractionLoaded=t.data.percent),"play"===t.event&&r.onPlay(),"pause"===t.event&&r.props.onPause(),"finish"===t.event&&r.onEnded(),"getDuration"===t.method&&(r.duration=t.value,r.onReady())}},r.postMessage=function(e,t){if(r.origin){var n=JSON.stringify({method:e,value:t});return r.iframe.contentWindow&&r.iframe.contentWindow.postMessage(n,r.origin)}},a=n,i(r,a)}return a(t,e),s(t,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.onMessage,!1),this.iframe=this.refs.iframe,!this.props.url&&this.props.vimeoConfig.preload&&(this.preloading=!0,this.load(m)),l(Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this)}},{key:"getIframeParams",value:function(){return u({},b,this.props.vimeoConfig.iframeParams)}},{key:"load",value:function(e){var t=e.match(v)[3];this.iframe.src=h+t+"?"+(0,f.stringify)(this.getIframeParams())}},{key:"play",value:function(){this.postMessage("play")}},{key:"pause",value:function(){this.postMessage("pause")}},{key:"stop",value:function(){this.iframe.src=""}},{key:"seekTo",value:function(e){l(Object.getPrototypeOf(t.prototype),"seekTo",this).call(this,e),this.postMessage("seekTo",this.duration*e)}},{key:"setVolume",value:function(e){this.postMessage("setVolume",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getFractionPlayed",value:function(){return this.fractionPlayed||null}},{key:"getFractionLoaded",value:function(){return this.fractionLoaded||null}},{key:"render",value:function(){var e=this.getIframeParams(),t=e.fullscreen,n={display:this.props.url?"block":"none",width:"100%",height:"100%"};return p["default"].createElement("iframe",{ref:"iframe",frameBorder:"0",style:n,allowFullScreen:t})}}],[{key:"canPlay",value:function(e){return v.test(e)}}]),t}(d["default"]);P.displayName="Vimeo",t["default"]=P,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function T(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:T(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(1),p=r(c),f=n(12),y=r(f),d=n(2),h=r(d),v=n(9),g="https://www.youtube.com/iframe_api",m="YT",b="onYouTubeIframeAPIReady",P=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,w="youtube-player",O="https://www.youtube.com/watch?v=GlCmAC4MHek",_={autoplay:0,playsinline:1,showinfo:0,rel:0,iv_load_policy:3},k=0,j=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),l=0;u>l;l++)s[l]=arguments[l];return n=r=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.playerId=w+"-"+k++,r.onStateChange=function(e){var t=e.data,n=window[m].PlayerState,o=n.PLAYING,i=n.PAUSED,a=n.BUFFERING,u=n.ENDED,s=n.CUED;t===o&&r.onPlay(),t===i&&r.props.onPause(),t===a&&r.props.onBuffer(),t===u&&r.onEnded(),t===s&&r.onReady()},a=n,i(r,a)}return a(t,e),s(t,[{key:"componentDidMount",value:function(){!this.props.url&&this.props.youtubeConfig.preload&&(this.preloading=!0,this.load(O)),l(Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this)}},{key:"getSDK",value:function(){return window[m]?Promise.resolve(window[m]):new Promise(function(e,t){var n=window[b];window[b]=function(){n&&n(),e(window[m])},(0,y["default"])(g,function(e){e&&t(e)})})}},{key:"load",value:function(e){var t=this,n=e&&e.match(P)[1];return this.isReady?void this.player.cueVideoById({videoId:n,startSeconds:(0,v.parseStartTime)(e)}):this.loadingSDK?void(this.loadOnReady=e):(this.loadingSDK=!0,void this.getSDK().then(function(r){t.player=new r.Player(t.playerId,{width:"100%",height:"100%",videoId:n,playerVars:u({},_,{controls:t.props.controls?1:0},t.props.youtubeConfig.playerVars,{start:(0,v.parseStartTime)(e),origin:window.location.origin}),events:{onReady:function(){t.loadingSDK=!1,t.onReady()},onStateChange:t.onStateChange,onError:function(e){return t.props.onError(e.data)}}})},this.props.onError))}},{key:"play",value:function(){this.isReady&&this.player.playVideo&&this.player.playVideo()}},{key:"pause",value:function(){this.isReady&&this.player.pauseVideo&&this.player.pauseVideo()}},{key:"stop",value:function(){this.isReady&&this.player.stopVideo&&this.player.stopVideo()}},{key:"seekTo",value:function(e){l(Object.getPrototypeOf(t.prototype),"seekTo",this).call(this,e),this.isReady&&this.player.seekTo&&this.player.seekTo(this.getDuration()*e)}},{key:"setVolume",value:function(e){this.isReady&&this.player.setVolume&&this.player.setVolume(100*e)}},{key:"getDuration",value:function(){return this.isReady&&this.player.getDuration?this.player.getDuration():null}},{key:"getFractionPlayed",value:function(){return this.isReady&&this.getDuration()?this.player.getCurrentTime()/this.getDuration():null}},{key:"getFractionLoaded",value:function(){return this.isReady&&this.player.getVideoLoadedFraction?this.player.getVideoLoadedFraction():null}},{key:"render",value:function(){var e={height:"100%",display:this.props.url?"block":"none"};return p["default"].createElement("div",{style:e},p["default"].createElement("div",{id:this.playerId}))}}],[{key:"canPlay",value:function(e){return P.test(e)}}]),t}(h["default"]);j.displayName="YouTube",t["default"]=j,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),i=r(o),a=n(5),u=r(a),s=n(6),l=r(s),c=n(3),p=r(c);t["default"]=[i["default"],u["default"],l["default"],p["default"]],e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=e.match(i);if(t){var n=t[1];if(n.match(a))return r(n);if(u.test(n))return parseInt(n,10)}return 0}function r(e){for(var t=0,n=a.exec(e);null!==n;){var r=n,i=o(r,3),u=i[1],s=i[2];"h"===s&&(t+=60*parseInt(u,10)*60),"m"===s&&(t+=60*parseInt(u,10)),"s"===s&&(t+=parseInt(u,10)),n=a.exec(e)}return t}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&u["return"]&&u["return"]()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.parseStartTime=n;var i=/[\?&#](?:start|t)=([0-9hms]+)/,a=/(\d+)(h|m|s)/g,u=/^\d+$/},function(e,t,n){var r;(function(e,o,i){(function(){"use strict";function a(e){return"function"==typeof e||"object"==typeof e&&null!==e}function u(e){return"function"==typeof e}function s(e){H=e}function l(e){ee=e}function c(){return function(){e.nextTick(h)}}function p(){return function(){J(h)}}function f(){var e=0,t=new re(h),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function y(){var e=new MessageChannel;return e.port1.onmessage=h,function(){e.port2.postMessage(0)}}function d(){return function(){setTimeout(h,1)}}function h(){for(var e=0;Z>e;e+=2){var t=ae[e],n=ae[e+1];t(n),ae[e]=void 0,ae[e+1]=void 0}Z=0}function v(){try{var e=n(18);return J=e.runOnLoop||e.runOnContext,p()}catch(t){return d()}}function g(e,t){var n=this,r=new this.constructor(b);void 0===r[le]&&L(r);var o=n._state;if(o){var i=arguments[o-1];ee(function(){I(o,r,i,n._result)})}else x(n,r,e,t);return r}function m(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(b);return E(n,e),n}function b(){}function P(){return new TypeError("You cannot resolve a promise with itself")}function w(){return new TypeError("A promises callback cannot return that same promise.")}function O(e){try{return e.then}catch(t){return ye.error=t,ye}}function _(e,t,n,r){try{e.call(t,n,r)}catch(o){return o}}function k(e,t,n){ee(function(e){var r=!1,o=_(n,t,function(n){r||(r=!0,t!==n?E(e,n):S(e,n))},function(t){r||(r=!0,M(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&o&&(r=!0,M(e,o))},e)}function j(e,t){t._state===pe?S(e,t._result):t._state===fe?M(e,t._result):x(t,void 0,function(t){E(e,t)},function(t){M(e,t)})}function T(e,t,n){t.constructor===e.constructor&&n===ue&&constructor.resolve===se?j(e,t):n===ye?M(e,ye.error):void 0===n?S(e,t):u(n)?k(e,t,n):S(e,t)}function E(e,t){e===t?M(e,P()):a(t)?T(e,t,O(t)):S(e,t)}function C(e){e._onerror&&e._onerror(e._result),D(e)}function S(e,t){e._state===ce&&(e._result=t,e._state=pe,0!==e._subscribers.length&&ee(D,e))}function M(e,t){e._state===ce&&(e._state=fe,e._result=t,ee(C,e))}function x(e,t,n,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+pe]=n,o[i+fe]=r,0===i&&e._state&&ee(D,e)}function D(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r,o,i=e._result,a=0;a<t.length;a+=3)r=t[a],o=t[a+n],r?I(n,r,o,i):o(i);e._subscribers.length=0}}function A(){this.error=null}function R(e,t){try{return e(t)}catch(n){return de.error=n,de}}function I(e,t,n,r){var o,i,a,s,l=u(n);if(l){if(o=R(n,r),o===de?(s=!0,i=o.error,o=null):a=!0,t===o)return void M(t,w())}else o=r,a=!0;t._state!==ce||(l&&a?E(t,o):s?M(t,i):e===pe?S(t,o):e===fe&&M(t,o))}function F(e,t){try{t(function(t){E(e,t)},function(t){M(e,t)})}catch(n){M(e,n)}}function V(){return he++}function L(e){e[le]=he++,e._state=void 0,e._result=void 0,e._subscribers=[]}function N(e){return new Pe(this,e).promise}function U(e){var t=this;return new t(X(e)?function(n,r){for(var o=e.length,i=0;o>i;i++)t.resolve(e[i]).then(n,r)}:function(e,t){t(new TypeError("You must pass an array to race."))})}function B(e){var t=this,n=new t(b);return M(n,e),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function W(e){this[le]=V(),this._result=this._state=void 0,this._subscribers=[],b!==e&&("function"!=typeof e&&Y(),this instanceof W?F(this,e):K())}function $(e,t){this._instanceConstructor=e,this.promise=new e(b),this.promise[le]||L(this.promise),X(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):M(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function z(){var e;if("undefined"!=typeof o)e=o;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=e.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(e.Promise=be)}var G;G=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var J,H,Q,X=G,Z=0,ee=function(e,t){ae[Z]=e,ae[Z+1]=t,Z+=2,2===Z&&(H?H(h):Q())},te="undefined"!=typeof window?window:void 0,ne=te||{},re=ne.MutationObserver||ne.WebKitMutationObserver,oe="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),ie="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ae=new Array(1e3);Q=oe?c():re?f():ie?y():void 0===te?v():d();var ue=g,se=m,le=Math.random().toString(36).substring(16),ce=void 0,pe=1,fe=2,ye=new A,de=new A,he=0,ve=N,ge=U,me=B,be=W;W.all=ve,W.race=ge,W.resolve=se,W.reject=me,W._setScheduler=s,W._setAsap=l,W._asap=ee,W.prototype={constructor:W,then:ue,"catch":function(e){return this.then(null,e)}};var Pe=$;$.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ce&&e>n;n++)this._eachEntry(t[n],n)},$.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===se){var o=O(e);if(o===ue&&e._state!==ce)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===be){var i=new n(b);T(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new n(function(t){t(e)}),t)}else this._willSettleAt(r(e),t)},$.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===ce&&(this._remaining--,e===fe?M(r,n):this._result[t]=n),0===this._remaining&&S(r,this._result)},$.prototype._willSettleAt=function(e,t){var n=this;x(e,void 0,function(e){n._settledAt(pe,t,e)},function(e){n._settledAt(fe,t,e)})};var we=z,Oe={Promise:be,polyfill:we};n(16).amd?(r=function(){return Oe}.call(t,n,t,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=Oe:"undefined"!=typeof this&&(this.ES6Promise=Oe),we()}).call(this)}).call(t,n(13),function(){return this}(),n(17)(e))},function(e,t,n){var r,o,i;!function(n,a){o=[t,e],r=a,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i))}(this,function(e,t){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function r(e){try{delete window[e]}catch(t){window[e]=void 0}}function o(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}var i={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null},a=function(e){var t=void 0===arguments[1]?{}:arguments[1],a=null!=t.timeout?t.timeout:i.timeout,u=null!=t.jsonpCallback?t.jsonpCallback:i.jsonpCallback,s=void 0;return new Promise(function(i,l){var c=t.jsonpCallbackFunction||n();window[c]=function(e){i({ok:!0,json:function(){return Promise.resolve(e)}}),s&&clearTimeout(s),o(u+"_"+c),r(c)},e+=-1===e.indexOf("?")?"?":"&";var p=document.createElement("script");p.setAttribute("src",e+u+"="+c),p.id=u+"_"+c,document.getElementsByTagName("head")[0].appendChild(p),s=setTimeout(function(){l(new Error("JSONP request to "+e+" timed out")),r(c),o(u+"_"+c)},a)})};t.exports=a})},function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function o(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,i){var a=document.head||document.getElementsByTagName("head")[0],u=document.createElement("script");"function"==typeof t&&(i=t,t={}),t=t||{},i=i||function(){},u.type=t.type||"text/javascript",u.charset=t.charset||"utf8",u.async="async"in t?!!t.async:!0,u.src=e,t.attrs&&n(u,t.attrs),t.text&&(u.text=""+t.text);var s="onload"in u?r:o;s(u,i),u.onload||r(u,i),a.appendChild(u)}},function(e,t){function n(){l&&a&&(l=!1,a.length?s=a.concat(s):c=-1,s.length&&r())}function r(){if(!l){var e=setTimeout(n);l=!0;for(var t=s.length;t;){for(a=s,s=[];++c<t;)a&&a[c].run();c=-1,t=s.length}a=null,l=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var a,u=e.exports={},s=[],l=!1,c=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];
s.push(new o(e,t)),1!==s.length||l||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=i,u.addListener=i,u.once=i,u.off=i,u.removeListener=i,u.removeAllListeners=i,u.emit=i,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t,n){"use strict";function r(e,t){return t?o(e):encodeURIComponent(e)}var o=n(15);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e){var t=Object.create(null);return"string"!=typeof e?t:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("="),r=n.shift(),o=n.length>0?n.join("="):void 0;r=decodeURIComponent(r),o=void 0===o?null:decodeURIComponent(o),void 0===t[r]?t[r]=o:Array.isArray(t[r])?t[r].push(o):t[r]=[t[r],o]}),t):t},t.stringify=function(e,t){t=t||{};var n=t.strict!==!1;return e?Object.keys(e).sort().map(function(t){var o=e[t];if(void 0===o)return"";if(null===o)return t;if(Array.isArray(o)){var i=[];return o.slice().sort().forEach(function(e){void 0!==e&&(null===e?i.push(r(t,n)):i.push(r(t,n)+"="+r(e,n)))}),i.join("&")}return r(t,n)+"="+r(o,n)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){}]);
//# sourceMappingURL=ReactPlayer.js.map