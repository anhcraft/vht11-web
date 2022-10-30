(self.webpackChunkvht11=self.webpackChunkvht11||[]).push([["C:\\Users\\huynh\\IdeaProjects\\vht11\\node_modules\\mathjax-full\\js\\adaptors\\lite\\Parser"],{"./node_modules/mathjax-full/js/adaptors/lite/Parser.js":function(t,e,r){"use strict";var n=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},o=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.LiteParser=e.PATTERNS=void 0;var a,i=r("./node_modules/mathjax-full/js/util/Entities.js"),l=r("./node_modules/mathjax-full/js/adaptors/lite/Element.js"),s=r("./node_modules/mathjax-full/js/adaptors/lite/Text.js");!function(t){t.TAGNAME="[a-z][^\\s\\n>]*",t.ATTNAME="[a-z][^\\s\\n>=]*",t.VALUE="(?:'[^']*'|\"[^\"]*\"|[^\\s\\n]+)",t.VALUESPLIT="(?:'([^']*)'|\"([^\"]*)\"|([^\\s\\n]+))",t.SPACE="(?:\\s|\\n)+",t.OPTIONALSPACE="(?:\\s|\\n)*",t.ATTRIBUTE=t.ATTNAME+"(?:"+t.OPTIONALSPACE+"="+t.OPTIONALSPACE+t.VALUE+")?",t.ATTRIBUTESPLIT="("+t.ATTNAME+")(?:"+t.OPTIONALSPACE+"="+t.OPTIONALSPACE+t.VALUESPLIT+")?",t.TAG="(<(?:"+t.TAGNAME+"(?:"+t.SPACE+t.ATTRIBUTE+")*"+t.OPTIONALSPACE+"/?|/"+t.TAGNAME+"|!--[^]*?--|![^]*?)(?:>|$))",t.tag=new RegExp(t.TAG,"i"),t.attr=new RegExp(t.ATTRIBUTE,"i"),t.attrsplit=new RegExp(t.ATTRIBUTESPLIT,"i")}(a=e.PATTERNS||(e.PATTERNS={}));var c=function(){function t(){}return t.prototype.parseFromString=function(t,e,r){void 0===e&&(e="text/html"),void 0===r&&(r=null);for(var n=r.createDocument(),o=r.body(n),i=t.replace(/<\?.*?\?>/g,"").split(a.tag);i.length;){var l=i.shift(),s=i.shift();l&&this.addText(r,o,l),s&&">"===s.charAt(s.length-1)&&("!"===s.charAt(1)?this.addComment(r,o,s):o="/"===s.charAt(1)?this.closeTag(r,o,s):this.openTag(r,o,s,i))}return this.checkDocument(r,n),n},t.prototype.addText=function(t,e,r){return r=i.translate(r),t.append(e,t.text(r))},t.prototype.addComment=function(t,e,r){return t.append(e,new s.LiteComment(r))},t.prototype.closeTag=function(t,e,r){for(var n=r.slice(2,r.length-1).toLowerCase();t.parent(e)&&t.kind(e)!==n;)e=t.parent(e);return t.parent(e)},t.prototype.openTag=function(t,e,r,n){var o=this.constructor.PCDATA,i=this.constructor.SELF_CLOSING,l=r.match(/<(.*?)[\s\n>\/]/)[1].toLowerCase(),s=t.node(l),c=r.replace(/^<.*?[\s\n>]/,"").split(a.attrsplit);return(c.pop().match(/>$/)||c.length<5)&&(this.addAttributes(t,s,c),t.append(e,s),i[l]||r.match(/\/>$/)||(o[l]?this.handlePCDATA(t,s,l,n):e=s)),e},t.prototype.addAttributes=function(t,e,r){for(var o=this.constructor.CDATA_ATTR;r.length;){var a=n(r.splice(0,5),5),l=a[1],s=a[2],c=a[3],u=a[4],d=s||c||u||"";o[l]||(d=i.translate(d)),t.setAttribute(e,l,d)}},t.prototype.handlePCDATA=function(t,e,r,n){for(var o=[],a="</"+r+">",i="";n.length&&i!==a;)o.push(i),o.push(n.shift()),i=n.shift();t.append(e,t.text(o.join("")))},t.prototype.checkDocument=function(t,e){var r,n,a,i,l=this.getOnlyChild(t,t.body(e));if(l){try{for(var c=o(t.childNodes(t.body(e))),u=c.next();!u.done;u=c.next()){if((h=u.value)===l)break;h instanceof s.LiteComment&&h.value.match(/^<!DOCTYPE/)&&(e.type=h.value)}}catch(t){r={error:t}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}switch(t.kind(l)){case"html":try{for(var d=o(l.children),p=d.next();!p.done;p=d.next()){var h=p.value;switch(t.kind(h)){case"head":e.head=h;break;case"body":e.body=h}}}catch(t){a={error:t}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(a)throw a.error}}e.root=l,t.remove(l),t.parent(e.body)!==l&&t.append(l,e.body),t.parent(e.head)!==l&&t.insert(e.head,e.body);break;case"head":e.head=t.replace(l,e.head);break;case"body":e.body=t.replace(l,e.body)}}},t.prototype.getOnlyChild=function(t,e){var r,n,a=null;try{for(var i=o(t.childNodes(e)),s=i.next();!s.done;s=i.next()){var c=s.value;if(c instanceof l.LiteElement){if(a)return null;a=c}}}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},t.prototype.serialize=function(t,e){var r=this,n=this.constructor.SELF_CLOSING,o=this.constructor.CDATA_ATTR,a=t.kind(e),i=t.allAttributes(e).map((function(t){return t.name+'="'+(o[t.name]?t.value:r.protectAttribute(t.value))+'"'})).join(" ");return"<"+a+(i?" "+i:"")+">"+(n[a]?"":t.innerHTML(e)+"</"+a+">")},t.prototype.serializeInner=function(t,e){var r=this;return this.constructor.PCDATA.hasOwnProperty(e.kind)?t.childNodes(e).map((function(e){return t.value(e)})).join(""):t.childNodes(e).map((function(e){var n=t.kind(e);return"#text"===n?r.protectHTML(t.value(e)):"#comment"===n?e.value:r.serialize(t,e)})).join("")},t.prototype.protectAttribute=function(t){return"string"!=typeof t&&(t=String(t)),t.replace(/"/g,"&quot;")},t.prototype.protectHTML=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},t.SELF_CLOSING={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},t.PCDATA={option:!0,textarea:!0,fieldset:!0,title:!0,style:!0,script:!0},t.CDATA_ATTR={style:!0,datafld:!0,datasrc:!0,href:!0,src:!0,longdesc:!0,usemap:!0,cite:!0,datetime:!0,action:!0,axis:!0,profile:!0,content:!0,scheme:!0},t}();e.LiteParser=c}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aHQxMS8uL25vZGVfbW9kdWxlcy9tYXRoamF4LWZ1bGwvanMvYWRhcHRvcnMvbGl0ZS9QYXJzZXIuanMiXSwibmFtZXMiOlsiX19yZWFkIiwidGhpcyIsIm8iLCJuIiwibSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiciIsImUiLCJpIiwiY2FsbCIsImFyIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJlcnJvciIsIl9fdmFsdWVzIiwicyIsImxlbmd0aCIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsIkxpdGVQYXJzZXIiLCJQQVRURVJOUyIsIkVudGl0aWVzIiwiRWxlbWVudF9qc18xIiwiVGV4dF9qc18xIiwiVEFHTkFNRSIsIkFUVE5BTUUiLCJWQUxVRSIsIlZBTFVFU1BMSVQiLCJTUEFDRSIsIk9QVElPTkFMU1BBQ0UiLCJBVFRSSUJVVEUiLCJBVFRSSUJVVEVTUExJVCIsIlRBRyIsInRhZyIsIlJlZ0V4cCIsImF0dHIiLCJhdHRyc3BsaXQiLCJwcm90b3R5cGUiLCJwYXJzZUZyb21TdHJpbmciLCJ0ZXh0IiwiX2Zvcm1hdCIsImFkYXB0b3IiLCJyb290IiwiY3JlYXRlRG9jdW1lbnQiLCJub2RlIiwiYm9keSIsInBhcnRzIiwicmVwbGFjZSIsInNwbGl0IiwidGV4dF8xIiwic2hpZnQiLCJhZGRUZXh0IiwiY2hhckF0IiwiYWRkQ29tbWVudCIsImNsb3NlVGFnIiwib3BlblRhZyIsImNoZWNrRG9jdW1lbnQiLCJ0cmFuc2xhdGUiLCJhcHBlbmQiLCJjb21tZW50IiwiTGl0ZUNvbW1lbnQiLCJraW5kIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsInBhcmVudCIsIlBDREFUQSIsImNvbnN0cnVjdG9yIiwiU0VMRl9DTE9TSU5HIiwibWF0Y2giLCJjaGlsZCIsImF0dHJpYnV0ZXMiLCJwb3AiLCJhZGRBdHRyaWJ1dGVzIiwiaGFuZGxlUENEQVRBIiwiQ0RBVEFfQVRUUiIsIl9hIiwic3BsaWNlIiwibmFtZV8xIiwidjEiLCJ2MiIsInYzIiwic2V0QXR0cmlidXRlIiwicGNkYXRhIiwiZXRhZyIsInB0YWciLCJqb2luIiwiZV8xIiwiZV8yIiwiX2IiLCJnZXRPbmx5Q2hpbGQiLCJfYyIsImNoaWxkTm9kZXMiLCJfZCIsInR5cGUiLCJlXzFfMSIsInJldHVybiIsIl9lIiwiY2hpbGRyZW4iLCJfZiIsImhlYWQiLCJlXzJfMSIsInJlbW92ZSIsImluc2VydCIsImVfMyIsIkxpdGVFbGVtZW50IiwiZV8zXzEiLCJzZXJpYWxpemUiLCJfdGhpcyIsIkNEQVRBIiwiYWxsQXR0cmlidXRlcyIsIm1hcCIsIngiLCJuYW1lIiwicHJvdGVjdEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInNlcmlhbGl6ZUlubmVyIiwiaGFzT3duUHJvcGVydHkiLCJwcm90ZWN0SFRNTCIsIlN0cmluZyIsImFyZWEiLCJiYXNlIiwiYnIiLCJjb2wiLCJjb21tYW5kIiwiZW1iZWQiLCJociIsImltZyIsImlucHV0Iiwia2V5Z2VuIiwibGluayIsIm1lbnVpdGVtIiwibWV0YSIsInBhcmFtIiwic291cmNlIiwidHJhY2siLCJ3YnIiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsImZpZWxkc2V0IiwidGl0bGUiLCJzdHlsZSIsInNjcmlwdCIsImRhdGFmbGQiLCJkYXRhc3JjIiwiaHJlZiIsInNyYyIsImxvbmdkZXNjIiwidXNlbWFwIiwiY2l0ZSIsImRhdGV0aW1lIiwiYWN0aW9uIiwiYXhpcyIsInByb2ZpbGUiLCJjb250ZW50Iiwic2NoZW1lIl0sIm1hcHBpbmdzIjoibVBBQ0EsSUFBSUEsRUFBVUMsTUFBUUEsS0FBS0QsUUFBVyxTQUFVRSxFQUFHQyxHQUMvQyxJQUFJQyxFQUFzQixtQkFBWEMsUUFBeUJILEVBQUVHLE9BQU9DLFVBQ2pELElBQUtGLEVBQUcsT0FBT0YsRUFDZixJQUFtQkssRUFBWUMsRUFBM0JDLEVBQUlMLEVBQUVNLEtBQUtSLEdBQU9TLEVBQUssR0FDM0IsSUFDSSxXQUFjLElBQU5SLEdBQWdCQSxLQUFNLE1B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LFFBQVEsR0FFTHZJLEVBdlBNLEdBeVBqQkQsRUFBUUMsV0FBYUEiLCJmaWxlIjoiNGYyZTJlOTQ4NGZkNjM0NzI4MzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGl0ZVBhcnNlciA9IGV4cG9ydHMuUEFUVEVSTlMgPSB2b2lkIDA7XG52YXIgRW50aXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9FbnRpdGllcy5qc1wiKTtcbnZhciBFbGVtZW50X2pzXzEgPSByZXF1aXJlKFwiLi9FbGVtZW50LmpzXCIpO1xudmFyIFRleHRfanNfMSA9IHJlcXVpcmUoXCIuL1RleHQuanNcIik7XG52YXIgUEFUVEVSTlM7XG4oZnVuY3Rpb24gKFBBVFRFUk5TKSB7XG4gICAgUEFUVEVSTlMuVEFHTkFNRSA9ICdbYS16XVteXFxcXHNcXFxcbj5dKic7XG4gICAgUEFUVEVSTlMuQVRUTkFNRSA9ICdbYS16XVteXFxcXHNcXFxcbj49XSonO1xuICAgIFBBVFRFUk5TLlZBTFVFID0gXCIoPzonW14nXSonfFxcXCJbXlxcXCJdKlxcXCJ8W15cXFxcc1xcXFxuXSspXCI7XG4gICAgUEFUVEVSTlMuVkFMVUVTUExJVCA9IFwiKD86JyhbXiddKiknfFxcXCIoW15cXFwiXSopXFxcInwoW15cXFxcc1xcXFxuXSspKVwiO1xuICAgIFBBVFRFUk5TLlNQQUNFID0gJyg/OlxcXFxzfFxcXFxuKSsnO1xuICAgIFBBVFRFUk5TLk9QVElPTkFMU1BBQ0UgPSAnKD86XFxcXHN8XFxcXG4pKic7XG4gICAgUEFUVEVSTlMuQVRUUklCVVRFID0gUEFUVEVSTlMuQVRUTkFNRSArICcoPzonICsgUEFUVEVSTlMuT1BUSU9OQUxTUEFDRSArICc9JyArIFBBVFRFUk5TLk9QVElPTkFMU1BBQ0UgKyBQQVRURVJOUy5WQUxVRSArICcpPyc7XG4gICAgUEFUVEVSTlMuQVRUUklCVVRFU1BMSVQgPSAnKCcgKyBQQVRURVJOUy5BVFROQU1FICsgJykoPzonICsgUEFUVEVSTlMuT1BUSU9OQUxTUEFDRSArICc9JyArIFBBVFRFUk5TLk9QVElPTkFMU1BBQ0UgKyBQQVRURVJOUy5WQUxVRVNQTElUICsgJyk/JztcbiAgICBQQVRURVJOUy5UQUcgPSAnKDwoPzonICsgUEFUVEVSTlMuVEFHTkFNRSArICcoPzonICsgUEFUVEVSTlMuU1BBQ0UgKyBQQVRURVJOUy5BVFRSSUJVVEUgKyAnKSonXG4gICAgICAgICsgUEFUVEVSTlMuT1BUSU9OQUxTUEFDRSArICcvP3wvJyArIFBBVFRFUk5TLlRBR05BTUUgKyAnfCEtLVteXSo/LS18IVteXSo/KSg/Oj58JCkpJztcbiAgICBQQVRURVJOUy50YWcgPSBuZXcgUmVnRXhwKFBBVFRFUk5TLlRBRywgJ2knKTtcbiAgICBQQVRURVJOUy5hdHRyID0gbmV3IFJlZ0V4cChQQVRURVJOUy5BVFRSSUJVVEUsICdpJyk7XG4gICAgUEFUVEVSTlMuYXR0cnNwbGl0ID0gbmV3IFJlZ0V4cChQQVRURVJOUy5BVFRSSUJVVEVTUExJVCwgJ2knKTtcbn0pKFBBVFRFUk5TID0gZXhwb3J0cy5QQVRURVJOUyB8fCAoZXhwb3J0cy5QQVRURVJOUyA9IHt9KSk7XG52YXIgTGl0ZVBhcnNlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGl0ZVBhcnNlcigpIHtcbiAgICB9XG4gICAgTGl0ZVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gKHRleHQsIF9mb3JtYXQsIGFkYXB0b3IpIHtcbiAgICAgICAgaWYgKF9mb3JtYXQgPT09IHZvaWQgMCkgeyBfZm9ybWF0ID0gJ3RleHQvaHRtbCc7IH1cbiAgICAgICAgaWYgKGFkYXB0b3IgPT09IHZvaWQgMCkgeyBhZGFwdG9yID0gbnVsbDsgfVxuICAgICAgICB2YXIgcm9vdCA9IGFkYXB0b3IuY3JlYXRlRG9jdW1lbnQoKTtcbiAgICAgICAgdmFyIG5vZGUgPSBhZGFwdG9yLmJvZHkocm9vdCk7XG4gICAgICAgIHZhciBwYXJ0cyA9IHRleHQucmVwbGFjZSgvPFxcPy4qP1xcPz4vZywgJycpLnNwbGl0KFBBVFRFUk5TLnRhZyk7XG4gICAgICAgIHdoaWxlIChwYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0XzEgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHRhZyA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAodGV4dF8xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUZXh0KGFkYXB0b3IsIG5vZGUsIHRleHRfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFnICYmIHRhZy5jaGFyQXQodGFnLmxlbmd0aCAtIDEpID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFnLmNoYXJBdCgxKSA9PT0gJyEnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tbWVudChhZGFwdG9yLCBub2RlLCB0YWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWcuY2hhckF0KDEpID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuY2xvc2VUYWcoYWRhcHRvciwgbm9kZSwgdGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLm9wZW5UYWcoYWRhcHRvciwgbm9kZSwgdGFnLCBwYXJ0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tEb2N1bWVudChhZGFwdG9yLCByb290KTtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfTtcbiAgICBMaXRlUGFyc2VyLnByb3RvdHlwZS5hZGRUZXh0ID0gZnVuY3Rpb24gKGFkYXB0b3IsIG5vZGUsIHRleHQpIHtcbiAgICAgICAgdGV4dCA9IEVudGl0aWVzLnRyYW5zbGF0ZSh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGFkYXB0b3IuYXBwZW5kKG5vZGUsIGFkYXB0b3IudGV4dCh0ZXh0KSk7XG4gICAgfTtcbiAgICBMaXRlUGFyc2VyLnByb3RvdHlwZS5hZGRDb21tZW50ID0gZnVuY3Rpb24gKGFkYXB0b3IsIG5vZGUsIGNvbW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGFkYXB0b3IuYXBwZW5kKG5vZGUsIG5ldyBUZXh0X2pzXzEuTGl0ZUNvbW1lbnQoY29tbWVudCkpO1xuICAgIH07XG4gICAgTGl0ZVBhcnNlci5wcm90b3R5cGUuY2xvc2VUYWcgPSBmdW5jdGlvbiAoYWRhcHRvciwgbm9kZSwgdGFnKSB7XG4gICAgICAgIHZhciBraW5kID0gdGFnLnNsaWNlKDIsIHRhZy5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB3aGlsZSAoYWRhcHRvci5wYXJlbnQobm9kZSkgJiYgYWRhcHRvci5raW5kKG5vZGUpICE9PSBraW5kKSB7XG4gICAgICAgICAgICBub2RlID0gYWRhcHRvci5wYXJlbnQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkYXB0b3IucGFyZW50KG5vZGUpO1xuICAgIH07XG4gICAgTGl0ZVBhcnNlci5wcm90b3R5cGUub3BlblRhZyA9IGZ1bmN0aW9uIChhZGFwdG9yLCBub2RlLCB0YWcsIHBhcnRzKSB7XG4gICAgICAgIHZhciBQQ0RBVEEgPSB0aGlzLmNvbnN0cnVjdG9yLlBDREFUQTtcbiAgICAgICAgdmFyIFNFTEZfQ0xPU0lORyA9IHRoaXMuY29uc3RydWN0b3IuU0VMRl9DTE9TSU5HO1xuICAgICAgICB2YXIga2luZCA9IHRhZy5tYXRjaCgvPCguKj8pW1xcc1xcbj5cXC9dLylbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIGNoaWxkID0gYWRhcHRvci5ub2RlKGtpbmQpO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHRhZy5yZXBsYWNlKC9ePC4qP1tcXHNcXG4+XS8sICcnKS5zcGxpdChQQVRURVJOUy5hdHRyc3BsaXQpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5wb3AoKS5tYXRjaCgvPiQvKSB8fCBhdHRyaWJ1dGVzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhhZGFwdG9yLCBjaGlsZCwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgICBhZGFwdG9yLmFwcGVuZChub2RlLCBjaGlsZCk7XG4gICAgICAgICAgICBpZiAoIVNFTEZfQ0xPU0lOR1traW5kXSAmJiAhdGFnLm1hdGNoKC9cXC8+JC8pKSB7XG4gICAgICAgICAgICAgICAgaWYgKFBDREFUQVtraW5kXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBDREFUQShhZGFwdG9yLCBjaGlsZCwga2luZCwgcGFydHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIExpdGVQYXJzZXIucHJvdG90eXBlLmFkZEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoYWRhcHRvciwgbm9kZSwgYXR0cmlidXRlcykge1xuICAgICAgICB2YXIgQ0RBVEFfQVRUUiA9IHRoaXMuY29uc3RydWN0b3IuQ0RBVEFfQVRUUjtcbiAgICAgICAgd2hpbGUgKGF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQoYXR0cmlidXRlcy5zcGxpY2UoMCwgNSksIDUpLCBuYW1lXzEgPSBfYVsxXSwgdjEgPSBfYVsyXSwgdjIgPSBfYVszXSwgdjMgPSBfYVs0XTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHYxIHx8IHYyIHx8IHYzIHx8ICcnO1xuICAgICAgICAgICAgaWYgKCFDREFUQV9BVFRSW25hbWVfMV0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IEVudGl0aWVzLnRyYW5zbGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGFwdG9yLnNldEF0dHJpYnV0ZShub2RlLCBuYW1lXzEsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTGl0ZVBhcnNlci5wcm90b3R5cGUuaGFuZGxlUENEQVRBID0gZnVuY3Rpb24gKGFkYXB0b3IsIG5vZGUsIGtpbmQsIHBhcnRzKSB7XG4gICAgICAgIHZhciBwY2RhdGEgPSBbXTtcbiAgICAgICAgdmFyIGV0YWcgPSAnPC8nICsga2luZCArICc+JztcbiAgICAgICAgdmFyIHB0YWcgPSAnJztcbiAgICAgICAgd2hpbGUgKHBhcnRzLmxlbmd0aCAmJiBwdGFnICE9PSBldGFnKSB7XG4gICAgICAgICAgICBwY2RhdGEucHVzaChwdGFnKTtcbiAgICAgICAgICAgIHBjZGF0YS5wdXNoKHBhcnRzLnNoaWZ0KCkpO1xuICAgICAgICAgICAgcHRhZyA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYWRhcHRvci5hcHBlbmQobm9kZSwgYWRhcHRvci50ZXh0KHBjZGF0YS5qb2luKCcnKSkpO1xuICAgIH07XG4gICAgTGl0ZVBhcnNlci5wcm90b3R5cGUuY2hlY2tEb2N1bWVudCA9IGZ1bmN0aW9uIChhZGFwdG9yLCByb290KSB7XG4gICAgICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0T25seUNoaWxkKGFkYXB0b3IsIGFkYXB0b3IuYm9keShyb290KSk7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXMoYWRhcHRvci5jaGlsZE5vZGVzKGFkYXB0b3IuYm9keShyb290KSkpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2QudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUZXh0X2pzXzEuTGl0ZUNvbW1lbnQgJiYgY2hpbGQudmFsdWUubWF0Y2goL148IURPQ1RZUEUvKSkge1xuICAgICAgICAgICAgICAgICAgICByb290LnR5cGUgPSBjaGlsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGFkYXB0b3Iua2luZChub2RlKSkge1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2UgPSBfX3ZhbHVlcyhub2RlLmNoaWxkcmVuKSwgX2YgPSBfZS5uZXh0KCk7ICFfZi5kb25lOyBfZiA9IF9lLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2YudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFkYXB0b3Iua2luZChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdoZWFkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5oZWFkID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290LmJvZHkgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZiAmJiAhX2YuZG9uZSAmJiAoX2IgPSBfZS5yZXR1cm4pKSBfYi5jYWxsKF9lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvb3Qucm9vdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgYWRhcHRvci5yZW1vdmUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGFkYXB0b3IucGFyZW50KHJvb3QuYm9keSkgIT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRvci5hcHBlbmQobm9kZSwgcm9vdC5ib2R5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFkYXB0b3IucGFyZW50KHJvb3QuaGVhZCkgIT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRvci5pbnNlcnQocm9vdC5oZWFkLCByb290LmJvZHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgICAgICAgICAgIHJvb3QuaGVhZCA9IGFkYXB0b3IucmVwbGFjZShub2RlLCByb290LmhlYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICAgICAgcm9vdC5ib2R5ID0gYWRhcHRvci5yZXBsYWNlKG5vZGUsIHJvb3QuYm9keSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpdGVQYXJzZXIucHJvdG90eXBlLmdldE9ubHlDaGlsZCA9IGZ1bmN0aW9uIChhZGFwdG9yLCBib2R5KSB7XG4gICAgICAgIHZhciBlXzMsIF9hO1xuICAgICAgICB2YXIgbm9kZSA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGFkYXB0b3IuY2hpbGROb2Rlcyhib2R5KSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBFbGVtZW50X2pzXzEuTGl0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgTGl0ZVBhcnNlci5wcm90b3R5cGUuc2VyaWFsaXplID0gZnVuY3Rpb24gKGFkYXB0b3IsIG5vZGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIFNFTEZfQ0xPU0lORyA9IHRoaXMuY29uc3RydWN0b3IuU0VMRl9DTE9TSU5HO1xuICAgICAgICB2YXIgQ0RBVEEgPSB0aGlzLmNvbnN0cnVjdG9yLkNEQVRBX0FUVFI7XG4gICAgICAgIHZhciB0YWcgPSBhZGFwdG9yLmtpbmQobm9kZSk7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gYWRhcHRvci5hbGxBdHRyaWJ1dGVzKG5vZGUpLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5uYW1lICsgJz1cIicgKyAoQ0RBVEFbeC5uYW1lXSA/IHgudmFsdWUgOiBfdGhpcy5wcm90ZWN0QXR0cmlidXRlKHgudmFsdWUpKSArICdcIic7IH0pLmpvaW4oJyAnKTtcbiAgICAgICAgdmFyIGh0bWwgPSAnPCcgKyB0YWcgKyAoYXR0cmlidXRlcyA/ICcgJyArIGF0dHJpYnV0ZXMgOiAnJykgKyAnPidcbiAgICAgICAgICAgICsgKFNFTEZfQ0xPU0lOR1t0YWddID8gJycgOiBhZGFwdG9yLmlubmVySFRNTChub2RlKSArICc8LycgKyB0YWcgKyAnPicpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9O1xuICAgIExpdGVQYXJzZXIucHJvdG90eXBlLnNlcmlhbGl6ZUlubmVyID0gZnVuY3Rpb24gKGFkYXB0b3IsIG5vZGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIFBDREFUQSA9IHRoaXMuY29uc3RydWN0b3IuUENEQVRBO1xuICAgICAgICBpZiAoUENEQVRBLmhhc093blByb3BlcnR5KG5vZGUua2luZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhZGFwdG9yLmNoaWxkTm9kZXMobm9kZSkubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBhZGFwdG9yLnZhbHVlKHgpOyB9KS5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRhcHRvci5jaGlsZE5vZGVzKG5vZGUpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdmFyIGtpbmQgPSBhZGFwdG9yLmtpbmQoeCk7XG4gICAgICAgICAgICByZXR1cm4gKGtpbmQgPT09ICcjdGV4dCcgPyBfdGhpcy5wcm90ZWN0SFRNTChhZGFwdG9yLnZhbHVlKHgpKSA6XG4gICAgICAgICAgICAgICAga2luZCA9PT0gJyNjb21tZW50JyA/IHgudmFsdWUgOlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXJpYWxpemUoYWRhcHRvciwgeCkpO1xuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICB9O1xuICAgIExpdGVQYXJzZXIucHJvdG90eXBlLnByb3RlY3RBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0ZXh0ID0gU3RyaW5nKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICB9O1xuICAgIExpdGVQYXJzZXIucHJvdG90eXBlLnByb3RlY3RIVE1MID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICB9O1xuICAgIExpdGVQYXJzZXIuU0VMRl9DTE9TSU5HID0ge1xuICAgICAgICBhcmVhOiB0cnVlLFxuICAgICAgICBiYXNlOiB0cnVlLFxuICAgICAgICBicjogdHJ1ZSxcbiAgICAgICAgY29sOiB0cnVlLFxuICAgICAgICBjb21tYW5kOiB0cnVlLFxuICAgICAgICBlbWJlZDogdHJ1ZSxcbiAgICAgICAgaHI6IHRydWUsXG4gICAgICAgIGltZzogdHJ1ZSxcbiAgICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICAgIGtleWdlbjogdHJ1ZSxcbiAgICAgICAgbGluazogdHJ1ZSxcbiAgICAgICAgbWVudWl0ZW06IHRydWUsXG4gICAgICAgIG1ldGE6IHRydWUsXG4gICAgICAgIHBhcmFtOiB0cnVlLFxuICAgICAgICBzb3VyY2U6IHRydWUsXG4gICAgICAgIHRyYWNrOiB0cnVlLFxuICAgICAgICB3YnI6IHRydWVcbiAgICB9O1xuICAgIExpdGVQYXJzZXIuUENEQVRBID0ge1xuICAgICAgICBvcHRpb246IHRydWUsXG4gICAgICAgIHRleHRhcmVhOiB0cnVlLFxuICAgICAgICBmaWVsZHNldDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IHRydWUsXG4gICAgICAgIHN0eWxlOiB0cnVlLFxuICAgICAgICBzY3JpcHQ6IHRydWVcbiAgICB9O1xuICAgIExpdGVQYXJzZXIuQ0RBVEFfQVRUUiA9IHtcbiAgICAgICAgc3R5bGU6IHRydWUsXG4gICAgICAgIGRhdGFmbGQ6IHRydWUsXG4gICAgICAgIGRhdGFzcmM6IHRydWUsXG4gICAgICAgIGhyZWY6IHRydWUsXG4gICAgICAgIHNyYzogdHJ1ZSxcbiAgICAgICAgbG9uZ2Rlc2M6IHRydWUsXG4gICAgICAgIHVzZW1hcDogdHJ1ZSxcbiAgICAgICAgY2l0ZTogdHJ1ZSxcbiAgICAgICAgZGF0ZXRpbWU6IHRydWUsXG4gICAgICAgIGFjdGlvbjogdHJ1ZSxcbiAgICAgICAgYXhpczogdHJ1ZSxcbiAgICAgICAgcHJvZmlsZTogdHJ1ZSxcbiAgICAgICAgY29udGVudDogdHJ1ZSxcbiAgICAgICAgc2NoZW1lOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gTGl0ZVBhcnNlcjtcbn0oKSk7XG5leHBvcnRzLkxpdGVQYXJzZXIgPSBMaXRlUGFyc2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGFyc2VyLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=