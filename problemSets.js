(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b["problemSets.html"]=a(function(a,b,c,d,e){function k(a,b){var d="",e,f;return d+='\r\n	<li class="problemSet" name="',f=c.name,f?e=f.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===h?e.apply(a):e),d+=i(e)+'">\r\n		',f=c.displayName,f?e=f.call(a,{hash:{},data:b}):(e=a.displayName,e=typeof e===h?e.apply(a):e),d+=i(e)+"\r\n	</li>\r\n",d}c=c||a.helpers,e=e||{};var f,g,h="function",i=this.escapeExpression,j=this;return f=b.problemSets,g={},f=c.each.call(b,f,{hash:g,inverse:j.noop,fn:j.program(1,k,e),data:e}),f||f===0?f:""})})()