this["templates"] = this["templates"] || {};

this["templates"]["newsitem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":36}}}) : helper)))
    + "\" data-idx=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":58}}}) : helper)))
    + "\" class=\"uk-card uk-card-default uk-card-body uk-width-1-"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"single") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":115},"end":{"line":1,"column":146}}})) != null ? stack1 : "")
    + "@m hian-newsitem"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"single") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":162},"end":{"line":1,"column":199}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"single") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":200},"end":{"line":1,"column":266}}})) != null ? stack1 : "")
    + ">";
},"2":function(container,depth0,helpers,partials,data) {
    return "1";
},"4":function(container,depth0,helpers,partials,data) {
    return "3";
},"6":function(container,depth0,helpers,partials,data) {
    return " newsitem-detail";
},"8":function(container,depth0,helpers,partials,data) {
    return " style=\"padding: 0 20px 20px 20px; margin: 0\"";
},"10":function(container,depth0,helpers,partials,data) {
    return "<div id=\"newsitem_close_wrap\" class=\"uk-width-1-1\"><button id=\"newsitem_close\" class=\"uk-close-large\" type=\"button\" uk-close></button></div>";
},"12":function(container,depth0,helpers,partials,data) {
    return "</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.hooks.blockHelperMissing, alias5=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = "";

  stack1 = ((helper = (helper = lookupProperty(helpers,"innerRender") || (depth0 != null ? lookupProperty(depth0,"innerRender") : depth0)) != null ? helper : alias2),(options={"name":"innerRender","hash":{},"fn":container.noop,"inverse":container.program(1, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":283}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"innerRender")) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = ((helper = (helper = lookupProperty(helpers,"single") || (depth0 != null ? lookupProperty(depth0,"single") : depth0)) != null ? helper : alias2),(options={"name":"single","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":166}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"single")) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n    <div class=\"newsitem-banner\" style=\"border-top: 8px solid "
    + alias5(((helper = (helper = lookupProperty(helpers,"color") || (depth0 != null ? lookupProperty(depth0,"color") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":3,"column":62},"end":{"line":3,"column":71}}}) : helper)))
    + "\">\r\n        <img src=\"/img/"
    + alias5(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":4,"column":23},"end":{"line":4,"column":32}}}) : helper)))
    + "\">\r\n        <h3>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":24}}}) : helper))) != null ? stack1 : "")
    + "</h3>\r\n    </div>            \r\n    <div class=\"newsitem-text\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":41}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"innerRender") || (depth0 != null ? lookupProperty(depth0,"innerRender") : depth0)) != null ? helper : alias2),(options={"name":"innerRender","hash":{},"fn":container.noop,"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":8,"column":38}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"innerRender")) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["templates"]["newsitems"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"app.templates.newsitem"),depth0,{"name":"app.templates.newsitem","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"news-items-wrap uk-text-center\" uk-grid>\r\n    <!-- note the triple brackets - its for handling html within the string data - title in this case - it will display properly if it contains html -->    \r\n    <div class=\"news-items-header uk-column-1-2@m\"><form class=\"search-form\"><fieldset class=\"uk-fieldset\"><input class=\"uk-input\" type=\"text\" name=\"search-input\"/></fieldset></form><h2>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":186},"end":{"line":3,"column":197}}}) : helper))) != null ? stack1 : "")
    + "</h2></div>\r\n    <div class=\"news-items uk-text-center\" uk-grid>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":7,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"usePartial":true,"useData":true});