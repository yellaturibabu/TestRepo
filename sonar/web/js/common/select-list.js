define("common/select-list",[],function(){var a=jQuery,b=null;var c=Backbone.Collection.extend({parse:function(a){this.more=a.more;return a.results},fetch:function(b){var c=a.extend({page:1,pageSize:100},b.data||{}),d=a.extend({},b,{data:c});this.settings={url:d.url,data:c};Backbone.Collection.prototype.fetch.call(this,d)},fetchNextPage:function(b){if(this.more){var c=this.settings.data.page+1,d=a.extend(this.settings,b);d.data.page=c;d.remove=false;this.fetch(d)}else{b.error()}}});var d=Backbone.View.extend({tagName:"li",template:function(a){return'<input class="select-list-list-checkbox" type="checkbox">'+'<div class="select-list-list-item">'+a+"</div>"},events:{"change .select-list-list-checkbox":"toggle"},initialize:function(a){this.listenTo(this.model,"change",this.render);this.settings=a.settings},render:function(){this.$el.html(this.template(this.settings.format(this.model.toJSON())));this.$("input").prop("name",this.model.get("name"));this.$el.toggleClass("selected",this.model.get("selected"));this.$(".select-list-list-checkbox").prop("title",this.model.get("selected")?this.settings.tooltips.deselect:this.settings.tooltips.select).prop("checked",this.model.get("selected"));if(this.settings.readOnly){this.$(".select-list-list-checkbox").prop("disabled",true)}},remove:function(a){if(a){var b=this;b.$el.addClass(this.model.get("selected")?"added":"removed");setTimeout(function(){Backbone.View.prototype.remove.call(b,arguments)},500)}else{Backbone.View.prototype.remove.call(this,arguments)}},toggle:function(){var c=this.model.get("selected"),d=this,e=c?this.settings.deselectUrl:this.settings.selectUrl,f=a.extend({},this.settings.extra||{});f[this.settings.selectParameter]=this.model.get(this.settings.selectParameterValue);d.$el.addClass("progress");a.ajax({url:e,type:"POST",data:f}).done(function(){d.model.set("selected",!c)}).fail(b).always(function(){d.$el.removeClass("progress")})}});var e=Backbone.View.extend({template:function(a){return'<div class="select-list-container">'+'<div class="select-list-control">'+'<div class="select-list-check-control">'+'<a class="select-list-control-button" name="selected">'+a.selected+"</a>"+'<a class="select-list-control-button" name="deselected">'+a.deselected+"</a>"+'<a class="select-list-control-button" name="all">'+a.all+"</a>"+"</div>"+'<div class="select-list-search-control">'+'<input type="text" placeholder="Search">'+'<a class="select-list-search-control-clear">&times;</a>'+"</div>"+"</div>"+'<div class="select-list-list-container">'+'<ul class="select-list-list"></ul>'+"</div>"+"</div>"},events:{"click .select-list-control-button[name=selected]":"showSelected","click .select-list-control-button[name=deselected]":"showDeselected","click .select-list-control-button[name=all]":"showAll","click .select-list-search-control-clear":"clearSearch"},initialize:function(a){this.listenTo(this.collection,"add",this.renderListItem);this.listenTo(this.collection,"reset",this.renderList);this.listenTo(this.collection,"remove",this.removeModel);this.listenTo(this.collection,"change:selected",this.confirmFilter);this.settings=a.settings;var b=this;this.showFetchSpinner=function(){b.$listContainer.addClass("loading")};this.hideFetchSpinner=function(){b.$listContainer.removeClass("loading")};var c=function(){b.showFetchSpinner();b.collection.fetchNextPage({success:function(){b.hideFetchSpinner()},error:function(){b.hideFetchSpinner()}})};this.onScroll=_.throttle(c,1e3)},render:function(){var c=this,d=function(){c.search()};this.$el.html(this.template(this.settings.labels)).width(this.settings.width);this.$listContainer=this.$(".select-list-list-container");if(!this.settings.readOnly){this.$listContainer.height(this.settings.height).css("overflow","auto").on("scroll",function(){c.scroll()})}else{this.$listContainer.addClass("select-list-list-container-readonly")}this.$list=this.$(".select-list-list");var e=this.$(".select-list-search-control input").on("keyup",_.debounce(d,250));if(this.settings.focusSearch){setTimeout(function(){e.focus()},250)}this.listItemViews=[];b=function(){a("<div>").addClass("error").text(c.settings.errorMessage).insertBefore(c.$el)};if(this.settings.readOnly){this.$(".select-list-control").remove()}},renderList:function(){this.listItemViews.forEach(function(a){a.remove()});this.listItemViews=[];if(this.collection.length>0){this.collection.each(this.renderListItem,this)}else{if(this.settings.readOnly){this.renderEmpty()}}this.$listContainer.scrollTop(0)},renderListItem:function(a){var b=new d({model:a,settings:this.settings});this.listItemViews.push(b);this.$list.append(b.el);b.render()},renderEmpty:function(){this.$list.append('<li class="empty-message">'+this.settings.labels.noResults+"</li>")},confirmFilter:function(a){if(this.currentFilter!=="all"){this.collection.remove(a)}},removeModel:function(a,b,c){this.listItemViews[c.index].remove(true);this.listItemViews.splice(c.index,1)},filterBySelection:function(a){var c=this;a=this.currentFilter=a||this.currentFilter;if(a!=null){this.$(".select-list-check-control").toggleClass("disabled",false);this.$(".select-list-search-control").toggleClass("disabled",true);this.$(".select-list-search-control input").val("");this.$(".select-list-control-button").removeClass("active").filter("[name="+a+"]").addClass("active");this.showFetchSpinner();this.collection.fetch({url:this.settings.searchUrl,reset:true,data:{selected:a},success:function(){c.hideFetchSpinner()},error:b})}},showSelected:function(){this.filterBySelection("selected")},showDeselected:function(){this.filterBySelection("deselected")},showAll:function(){this.filterBySelection("all")},search:function(){var a=this.$(".select-list-search-control input").val(),c=a.length>0,d=this;this.$(".select-list-check-control").toggleClass("disabled",c);this.$(".select-list-search-control").toggleClass("disabled",!c);if(c){this.showFetchSpinner();this.currentFilter="all";this.collection.fetch({url:this.settings.searchUrl,reset:true,data:{query:a},success:function(){d.hideFetchSpinner()},error:b})}else{this.filterBySelection()}},searchByQuery:function(a){this.$(".select-list-search-control input").val(a);this.search()},clearSearch:function(){this.filterBySelection()},scroll:function(){var a=this.$listContainer.scrollTop()>=this.$list[0].scrollHeight-this.$listContainer.outerHeight();if(a&&this.collection.more){this.onScroll()}}});window.SelectList=function(b){this.settings=a.extend(window.SelectList.defaults,b);this.collection=new c;this.view=new e({el:this.settings.el,collection:this.collection,settings:this.settings});this.view.render();this.filter("selected");return this};window.SelectList.prototype.filter=function(a){this.view.filterBySelection(a);return this};window.SelectList.prototype.search=function(a){this.view.searchByQuery(a);return this};window.SelectList.defaults={width:"50%",height:400,readOnly:false,focusSearch:true,format:function(a){return a.value},labels:{selected:"Selected",deselected:"Deselected",all:"All",noResults:""},tooltips:{select:"Click this to select item",deselect:"Click this to deselect item"},errorMessage:"Something gone wrong, try to reload the page and try again."}});