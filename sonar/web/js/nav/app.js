define("common/selectable-collection-view",[],function(){return Marionette.CollectionView.extend({initialize:function(){this.resetSelectedIndex();this.listenTo(this.collection,"reset",this.resetSelectedIndex)},itemViewOptions:function(a,b){return{index:b}},resetSelectedIndex:function(){this.selectedIndex=0},onRender:function(){this.selectCurrent()},submitCurrent:function(){var a=this.children.findByIndex(this.selectedIndex);if(a!=null){a.submit()}},selectCurrent:function(){this.selectItem(this.selectedIndex)},selectNext:function(){if(this.selectedIndex<this.collection.length-1){this.deselectItem(this.selectedIndex);this.selectedIndex++;this.selectItem(this.selectedIndex)}},selectPrev:function(){if(this.selectedIndex>0){this.deselectItem(this.selectedIndex);this.selectedIndex--;this.selectItem(this.selectedIndex)}},selectItem:function(a){if(a>=0&&a<this.collection.length){var b=this.children.findByIndex(a);if(b!=null){b.select()}}},deselectItem:function(a){var b=this.children.findByIndex(a);if(b!=null){b.deselect()}}})});Handlebars.registerPartial("_nav-logo",Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'<img src="'+f((b.link||a&&a.link||e).call(a,"/images/logo.svg",{name:"link",hash:{},data:d}))+'" alt="'+f((b.t||a&&a.t||e).call(a,"layout.sonar.slogan",{name:"t",hash:{},data:d}))+'" title="'+f((b.t||a&&a.t||e).call(a,"layout.sonar.slogan",{name:"t",hash:{},data:d}))+'">\n'},useData:true}));Handlebars.registerPartial("_nav-navbar-label",Handlebars.template({1:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return h((e=(e=b.labelLocalized||(a!=null?a.labelLocalized:a))!=null?e:g,typeof e===f?e.call(a,{name:"labelLocalized",hash:{},data:d}):e))},3:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return f((b.t||a&&a.t||e).call(a,a!=null?a.label:a,{name:"t",hash:{},data:d}))},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="";e=b["if"].call(a,a!=null?a.labelLocalized:a,{name:"if",hash:{},fn:this.program(1,d),inverse:this.program(3,d),data:d});if(e!=null){f+=e}return f+"\n"},useData:true}));this["Templates"]=this["Templates"]||{};this["Templates"]["nav-context-navbar"]=Handlebars.template({1:function(a,b,c,d){var e,f='    <div class="navbar-context-favorite">\n      <a class="js-favorite ';e=b["if"].call(a,a!=null?a.isContextFavorite:a,{name:"if",hash:{},fn:this.program(2,d),inverse:this.program(4,d),data:d});if(e!=null){f+=e}return f+'"></a>\n    </div>\n'},2:function(a,b,c,d){return"icon-favorite"},4:function(a,b,c,d){return"icon-not-favorite"},6:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h="function";return'      <li>\n        <a href="'+g((b.link||a&&a.link||f).call(a,a!=null?a.url:a,{name:"link",hash:{},data:d}))+'">\n          '+g((b.qualifierIcon||a&&a.qualifierIcon||f).call(a,a!=null?a.q:a,{name:"qualifierIcon",hash:{},data:d}))+"&nbsp;"+g((e=(e=b.name||(a!=null?a.name:a))!=null?e:f,typeof e===h?e.call(a,{name:"name",hash:{},data:d}):e))+"\n        </a>\n      </li>\n"},8:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return"Version "+h((e=(e=b.contextVersion||(a!=null?a.contextVersion:a))!=null?e:g,typeof e===f?e.call(a,{name:"contextVersion",hash:{},data:d}):e))},10:function(a,b,c,d){return"/"},12:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return f((b.dt||a&&a.dt||e).call(a,a!=null?a.contextDate:a,{name:"dt",hash:{},data:d}))},14:function(a,b,c,d){return'class="active"'},16:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h='      <li class="dropdown ';e=b["if"].call(a,a!=null?a.isSettingsActive:a,{name:"if",hash:{},fn:this.program(17,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='">\n        <a class="dropdown-toggle navbar-admin-link" data-toggle="dropdown" href="#">'+g((b.t||a&&a.t||f).call(a,"layout.settings",{name:"t",hash:{},data:d}))+'&nbsp;<i class="icon-dropdown"></i></a>\n        <ul class="dropdown-menu">\n';e=b.each.call(a,a!=null?a.contextConfiguration:a,{name:"each",hash:{},fn:this.program(19,d),inverse:this.noop,data:d});if(e!=null){h+=e}return h+"        </ul>\n      </li>\n"},17:function(a,b,c,d){return"active"},19:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h="function";return'            <li>\n              <a href="'+g((b.link||a&&a.link||f).call(a,a!=null?a.url:a,{name:"link",hash:{},data:d}))+'">'+g((e=(e=b.name||(a!=null?a.name:a))!=null?e:f,typeof e===h?e.call(a,{name:"name",hash:{},data:d}):e))+"</a>\n            </li>\n"},21:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h="function";return'          <li>\n            <a href="'+g((b.link||a&&a.link||f).call(a,a!=null?a.url:a,{name:"link",hash:{},data:d}))+'">'+g((e=(e=b.name||(a!=null?a.name:a))!=null?e:f,typeof e===h?e.call(a,{name:"name",hash:{},data:d}):e))+"</a>\n          </li>\n"},23:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'          <li class="small-divider"></li>\n          <li>\n            <a href="'+f((b.link||a&&a.link||e).call(a,"/dashboards?resource=",a!=null?a.contextId:a,{name:"link",hash:{},data:d}))+'">'+f((b.t||a&&a.t||e).call(a,"dashboard.manage_dashboards",{name:"t",hash:{},data:d}))+"</a>\n          </li>\n"},25:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'          <li>\n            <a href="'+f((b.link||a&&a.link||e).call(a,"/comparison/index?resource=",a!=null?a.contextKey:a,{name:"link",hash:{},data:d}))+'">'+f((b.t||a&&a.t||e).call(a,"comparison.page",{name:"t",hash:{},data:d}))+"</a>\n          </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h='<div class="container">\n';e=b["if"].call(a,a!=null?a.canFavoriteContext:a,{name:"if",hash:{},fn:this.program(1,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='  <ul class="nav navbar-nav nav-crumbs">\n';e=b.each.call(a,a!=null?a.contextBreadcrumbs:a,{name:"each",hash:{},fn:this.program(6,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='  </ul>\n\n  <div class="navbar-right navbar-context-meta">\n    ';e=b["if"].call(a,a!=null?a.contextVersion:a,{name:"if",hash:{},fn:this.program(8,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+="\n    ";e=(b.all||a&&a.all||f).call(a,a!=null?a.contextVersion:a,a!=null?a.contextDate:a,{name:"all",hash:{},fn:this.program(10,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+="\n    ";e=b["if"].call(a,a!=null?a.contextDate:a,{name:"if",hash:{},fn:this.program(12,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='\n  </div>\n\n  <ul class="nav navbar-nav nav-tabs">\n    <li ';e=b["if"].call(a,a!=null?a.isOverviewActive:a,{name:"if",hash:{},fn:this.program(14,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='>\n      <a href="'+g((b.dashboardUrl||a&&a.dashboardUrl||f).call(a,a!=null?a.contextKey:a,{name:"dashboardUrl",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"overview.page",{name:"t",hash:{},data:d}))+"</a>\n    </li>\n    <li ";e=(b.isActiveLink||a&&a.isActiveLink||f).call(a,"/components",{name:"isActiveLink",hash:{},fn:this.program(14,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='>\n      <a href="'+g((b.link||a&&a.link||f).call(a,"/components/index/",a!=null?a.contextId:a,{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"components.page",{name:"t",hash:{},data:d}))+"</a>\n    </li>\n    <li ";e=(b.isActiveLink||a&&a.isActiveLink||f).call(a,"/component_issues",{name:"isActiveLink",hash:{},fn:this.program(14,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='>\n      <a href="'+g((b.link||a&&a.link||f).call(a,"/component_issues/index?id=",a!=null?a.contextKeyEncoded:a,{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"issues.page",{name:"t",hash:{},data:d}))+"</a>\n    </li>\n";e=b["if"].call(a,a!=null?a.contextConfiguration:a,{name:"if",hash:{},fn:this.program(16,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='    <li class="dropdown ';e=b["if"].call(a,a!=null?a.isMoreActive:a,{name:"if",hash:{},fn:this.program(17,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='">\n      <a class="dropdown-toggle" data-toggle="dropdown" href="#">'+g((b.t||a&&a.t||f).call(a,"more",{name:"t",hash:{},data:d}))+'&nbsp;<i class="icon-dropdown"></i></a>\n      <ul class="dropdown-menu">\n        <li class="dropdown-header">'+g((b.t||a&&a.t||f).call(a,"layout.dashboards",{name:"t",hash:{},data:d}))+"</li>\n";e=(b.withoutFirst||a&&a.withoutFirst||f).call(a,a!=null?a.contextDashboards:a,{name:"withoutFirst",hash:{},fn:this.program(21,d),inverse:this.noop,data:d});if(e!=null){h+=e}e=b["if"].call(a,a!=null?a.canManageContextDashboards:a,{name:"if",hash:{},fn:this.program(23,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='        <li class="divider"></li>\n        <li class="dropdown-header">Tools</li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/design/index/",a!=null?a.contextId:a,{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"design.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/libraries/index/",a!=null?a.contextId:a,{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"libraries.page",{name:"t",hash:{},data:d}))+"</a>\n        </li>\n";e=b["if"].call(a,a!=null?a.contextComparable:a,{name:"if",hash:{},fn:this.program(25,d),inverse:this.noop,data:d});if(e!=null){h+=e}return h+"      </ul>\n    </li>\n  </ul>\n</div>\n"},useData:true});this["Templates"]["nav-global-navbar"]=Handlebars.template({1:function(a,b,c,d){return"navbar-brand-custom"},3:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j='        <img src="'+i((f=(f=b.logoUrl||(a!=null?a.logoUrl:a))!=null?f:h,typeof f===g?f.call(a,{name:"logoUrl",hash:{},data:d}):f))+'" ';e=b["if"].call(a,a!=null?a.logoWidth:a,{name:"if",hash:{},fn:this.program(4,d),inverse:this.noop,data:d});if(e!=null){j+=e}return j+' height="30"\n             alt="'+i((b.t||a&&a.t||h).call(a,"layout.sonar.slogan",{name:"t",hash:{},data:d}))+'" title="'+i((b.t||a&&a.t||h).call(a,"layout.sonar.slogan",{name:"t",hash:{},data:d}))+'">\n'},4:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'width="'+h((e=(e=b.logoWidth||(a!=null?a.logoWidth:a))!=null?e:g,typeof e===f?e.call(a,{name:"logoWidth",hash:{},data:d}):e))+'"'},6:function(a,b,c,d){var e,f="";e=this.invokePartial(c["_nav-logo"],"        ","_nav-logo",a,undefined,b,c,d);if(e!=null){f+=e}return f},8:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h="function";return'          <li>\n            <a href="'+g((b.link||a&&a.link||f).call(a,a!=null?a.url:a,{name:"link",hash:{},data:d}))+'">'+g((e=(e=b.name||(a!=null?a.name:a))!=null?e:f,typeof e===h?e.call(a,{name:"name",hash:{},data:d}):e))+"</a>\n          </li>\n"},10:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'          <li class="divider"></li>\n          <li>\n            <a href="'+f((b.link||a&&a.link||e).call(a,"/dashboards",{name:"link",hash:{},data:d}))+'">'+f((b.t||a&&a.t||e).call(a,"dashboard.manage_dashboards",{name:"t",hash:{},data:d}))+"</a>\n          </li>\n"},12:function(a,b,c,d){return'class="active"'},14:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h="      <li ";e=(b.isActiveLink||a&&a.isActiveLink||f).call(a,"/settings",{name:"isActiveLink",hash:{},fn:this.program(12,d),inverse:this.noop,data:d});if(e!=null){h+=e}return h+'>\n        <a class="navbar-admin-link" href="'+g((b.link||a&&a.link||f).call(a,"/settings",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"layout.settings",{name:"t",hash:{},data:d}))+"</a>\n      </li>\n"},16:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'      <li class="dropdown">\n        <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n          '+h((e=(e=b.userName||(a!=null?a.userName:a))!=null?e:g,typeof e===f?e.call(a,{name:"userName",hash:{},data:d}):e))+'&nbsp;<span class="icon-dropdown"></span>\n        </a>\n        <ul class="dropdown-menu dropdown-menu-right">\n          <li>\n            <a href="'+h((b.link||a&&a.link||g).call(a,"/account/index",{name:"link",hash:{},data:d}))+'">'+h((b.t||a&&a.t||g).call(a,"layout.user_panel.my_profile",{name:"t",hash:{},data:d}))+'</a>\n          </li>\n          <li>\n            <a href="'+h((b.link||a&&a.link||g).call(a,"/sessions/logout",{name:"link",hash:{},data:d}))+'"\n               onclick="if (sonarRecentHistory) { sonarRecentHistory.clear(); }">'+h((b.t||a&&a.t||g).call(a,"layout.logout",{name:"t",hash:{},data:d}))+"</a>\n          </li>\n        </ul>\n      </li>\n"},18:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'      <li>\n        <a class="js-login" href="'+f((b.link||a&&a.link||e).call(a,"/sessions/new",{name:"link",hash:{},data:d}))+'">'+f((b.t||a&&a.t||e).call(a,"layout.login",{name:"t",hash:{},data:d}))+"</a>\n      </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h='<div class="container">\n  <div class="navbar-header">\n    <a class="navbar-brand ';e=b["if"].call(a,a!=null?a.logoUrl:a,{name:"if",hash:{},fn:this.program(1,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='" href="'+g((b.link||a&&a.link||f).call(a,"/",{name:"link",hash:{},data:d}))+'">\n';e=b["if"].call(a,a!=null?a.logoUrl:a,{name:"if",hash:{},fn:this.program(3,d),inverse:this.program(6,d),data:d});if(e!=null){h+=e}h+='    </a>\n  </div>\n\n  <ul class="nav navbar-nav">\n    <li class="dropdown">\n      <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n        '+g((b.t||a&&a.t||f).call(a,"layout.dashboards",{name:"t",hash:{},data:d}))+'&nbsp;<span class="icon-dropdown"></span>\n      </a>\n      <ul class="dropdown-menu">\n';e=b.each.call(a,a!=null?a.globalDashboards:a,{name:"each",hash:{},fn:this.program(8,d),inverse:this.noop,data:d});if(e!=null){h+=e}e=b["if"].call(a,a!=null?a.canManageGlobalDashboards:a,{name:"if",hash:{},fn:this.program(10,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+="      </ul>\n    </li>\n    <li ";e=(b.isActiveLink||a&&a.isActiveLink||f).call(a,"/issues",{name:"isActiveLink",hash:{},fn:this.program(12,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='>\n      <a href="'+g((b.link||a&&a.link||f).call(a,"/issues/search",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"issues.page",{name:"t",hash:{},data:d}))+"</a>\n    </li>\n    <li ";e=(b.isActiveLink||a&&a.isActiveLink||f).call(a,"/measures",{name:"isActiveLink",hash:{},fn:this.program(12,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='>\n      <a href="'+g((b.link||a&&a.link||f).call(a,"/measures/search?qualifiers[]=TRK",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"layout.measures",{name:"t",hash:{},data:d}))+"</a>\n    </li>\n    <li ";e=(b.isActiveLink||a&&a.isActiveLink||f).call(a,"/coding_rules",{name:"isActiveLink",hash:{},fn:this.program(12,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='>\n      <a href="'+g((b.link||a&&a.link||f).call(a,"/coding_rules",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"coding_rules.page",{name:"t",hash:{},data:d}))+"</a>\n    </li>\n    <li ";e=(b.isActiveLink||a&&a.isActiveLink||f).call(a,"/profiles",{name:"isActiveLink",hash:{},fn:this.program(12,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='>\n      <a href="'+g((b.link||a&&a.link||f).call(a,"/profiles",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"quality_profiles.page",{name:"t",hash:{},data:d}))+"</a>\n    </li>\n    <li ";e=(b.isActiveLink||a&&a.isActiveLink||f).call(a,"/quality_gates",{name:"isActiveLink",hash:{},fn:this.program(12,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='>\n      <a href="'+g((b.link||a&&a.link||f).call(a,"/quality_gates",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"quality_gates.page",{name:"t",hash:{},data:d}))+"</a>\n    </li>\n";e=b["if"].call(a,a!=null?a.isUserAdmin:a,{name:"if",hash:{},fn:this.program(14,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='    <li class="dropdown">\n      <a class="dropdown-toggle" data-toggle="dropdown" href="#">'+g((b.t||a&&a.t||f).call(a,"more",{name:"t",hash:{},data:d}))+'&nbsp;<i class="icon-dropdown"></i></a>\n      <ul class="dropdown-menu">\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/comparison",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"comparison_global.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/dependencies",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"dependencies.page",{name:"t",hash:{},data:d}))+"</a>\n        </li>\n";e=b.each.call(a,a!=null?a.globalPages:a,{name:"each",hash:{},fn:this.program(8,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='      </ul>\n    </li>\n  </ul>\n\n  <ul class="nav navbar-nav navbar-right">\n';e=b["if"].call(a,a!=null?a.user:a,{name:"if",hash:{},fn:this.program(16,d),inverse:this.program(18,d),data:d});if(e!=null){h+=e}return h+'    <li class="dropdown js-search-dropdown">\n      <a class="dropdown-toggle navbar-search-dropdown js-search-dropdown-toggle" data-toggle="dropdown" href="#">\n        <i class="icon-search navbar-icon"></i>&nbsp;<span class="icon-dropdown"></span>\n      </a>\n\n      <div class="js-search-region dropdown-menu dropdown-menu-right"></div>\n    </li>\n    <li>\n      <a class="js-shortcuts" href="#">\n        <i class="icon-help navbar-icon"></i>\n      </a>\n    </li>\n  </ul>\n\n</div>\n'},usePartial:true,useData:true});this["Templates"]["nav-search-empty"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'<span class="subtitle">'+f((b.t||a&&a.t||e).call(a,"no_results",{name:"t",hash:{},data:d}))+"</span>\n"},useData:true});this["Templates"]["nav-search-item"]=Handlebars.template({1:function(a,b,c,d){var e,f=b.helperMissing,g="";e=(b.gt||a&&a.gt||f).call(a,a!=null?a.index:a,0,{name:"gt",hash:{},fn:this.program(2,d),inverse:this.noop,data:d});if(e!=null){g+=e}e=b["if"].call(a,a!=null?a.extra:a,{name:"if",hash:{},fn:this.program(4,d),inverse:this.noop,data:d});if(e!=null){g+=e}return g},2:function(a,b,c,d){return'    <div class="divider"></div>\n'},4:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'    <div class="dropdown-header">'+h((e=(e=b.extra||(a!=null?a.extra:a))!=null?e:g,typeof e===f?e.call(a,{name:"extra",hash:{},data:d}):e))+"</div>\n"},6:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return f((b.qualifierIcon||a&&a.qualifierIcon||e).call(a,a!=null?a.q:a,{name:"qualifierIcon",hash:{},data:d}))},8:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return"    "+f((b.collapsedDirFromPath||a&&a.collapsedDirFromPath||e).call(a,a!=null?a.name:a,{name:"collapsedDirFromPath",hash:{},data:d}))+f((b.fileFromPath||a&&a.fileFromPath||e).call(a,a!=null?a.name:a,{name:"fileFromPath",hash:{},data:d}))+"\n"},10:function(a,b,c,d){var e,f=b.helperMissing,g="";e=(b.eq||a&&a.eq||f).call(a,a!=null?a.q:a,"UTS",{name:"eq",hash:{},fn:this.program(11,d),inverse:this.program(13,d),data:d});if(e!=null){g+=e}return g},11:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return"      "+f((b.collapsedDirFromPath||a&&a.collapsedDirFromPath||e).call(a,a!=null?a.name:a,{name:"collapsedDirFromPath",hash:{},data:d}))+f((b.fileFromPath||a&&a.fileFromPath||e).call(a,a!=null?a.name:a,{name:"fileFromPath",hash:{},data:d}))+"\n"},13:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return"      "+h((e=(e=b.name||(a!=null?a.name:a))!=null?e:g,typeof e===f?e.call(a,{name:"name",hash:{},data:d}):e))+"\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression,j="";e=(b.notNull||a&&a.notNull||g).call(a,a!=null?a.extra:a,{name:"notNull",hash:{},fn:this.program(1,d),inverse:this.noop,data:d});if(e!=null){j+=e}j+='\n<a href="'+i((f=(f=b.url||(a!=null?a.url:a))!=null?f:g,typeof f===h?f.call(a,{name:"url",hash:{},data:d}):f))+'" title="'+i((f=(f=b.name||(a!=null?a.name:a))!=null?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+'">\n  ';e=b["if"].call(a,a!=null?a.q:a,{name:"if",hash:{},fn:this.program(6,d),inverse:this.noop,data:d});if(e!=null){j+=e}j+="\n";e=(b.eq||a&&a.eq||g).call(a,a!=null?a.q:a,"FIL",{name:"eq",hash:{},fn:this.program(8,d),inverse:this.program(10,d),data:d});if(e!=null){j+=e}return j+"</a>\n"},useData:true});this["Templates"]["nav-search"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'<i class="navbar-search-icon icon-search"></i>\n\n<input class="navbar-search-input js-search-input" type="search" name="q" placeholder="'+f((b.t||a&&a.t||e).call(a,"search_verb",{name:"t",hash:{},data:d}))+'"\n       maxlength="30" autocomplete="off">\n\n<div class="js-search-results"></div>\n\n<div class="subtitle navbar-search-subtitle">'+f((b.t||a&&a.t||e).call(a,"search.shortcut",{name:"t",hash:{},data:d}))+"</div>\n"},useData:true});this["Templates"]["nav-settings-navbar"]=Handlebars.template({1:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h="function";return'          <li>\n            <a href="'+g((b.link||a&&a.link||f).call(a,a!=null?a.url:a,{name:"link",hash:{},data:d}))+'">'+g((e=(e=b.name||(a!=null?a.name:a))!=null?e:f,typeof e===h?e.call(a,{name:"name",hash:{},data:d}):e))+"</a>\n          </li>\n"},3:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'          <li>\n            <a href="'+f((b.link||a&&a.link||e).call(a,"/provisioning",{name:"link",hash:{},data:d}))+'">'+f((b.t||a&&a.t||e).call(a,"provisioning.page",{name:"t",hash:{},data:d}))+"</a>\n          </li>\n"},5:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'          <li>\n            <a href="'+f((b.link||a&&a.link||e).call(a,"/updatecenter",{name:"link",hash:{},data:d}))+'">'+f((b.t||a&&a.t||e).call(a,"update_center.page",{name:"t",hash:{},data:d}))+"</a>\n          </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=b.helperMissing,g=this.escapeExpression,h='<div class="container">\n  <ul class="nav navbar-nav nav-crumbs">\n      <li>\n        <a href="'+g((b.link||a&&a.link||f).call(a,"/settings",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"layout.settings",{name:"t",hash:{},data:d}))+'</a>\n      </li>\n  </ul>\n\n  <ul class="nav navbar-nav nav-tabs">\n    <li class="dropdown">\n      <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n        '+g((b.t||a&&a.t||f).call(a,"sidebar.project_settings",{name:"t",hash:{},data:d}))+'&nbsp;<i class="icon-dropdown"></i>\n      </a>\n      <ul class="dropdown-menu">\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/settings/index",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"settings.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/metrics/index",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"manual_metrics.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/admin_dashboards/index",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"default_dashboards.page",{name:"t",hash:{},data:d}))+"</a>\n        </li>\n";e=b.each.call(a,a!=null?a.settingsPages:a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='      </ul>\n    </li>\n\n    <li class="dropdown">\n      <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n        '+g((b.t||a&&a.t||f).call(a,"sidebar.security",{name:"t",hash:{},data:d}))+'&nbsp;<i class="icon-dropdown"></i>\n      </a>\n      <ul class="dropdown-menu">\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/users",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"users.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/groups/index",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"user_groups.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/roles/global",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"global_permissions.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/roles/projects",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"roles.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n      </ul>\n    </li>\n\n    <li class="dropdown">\n      <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n        '+g((b.t||a&&a.t||f).call(a,"sidebar.system",{name:"t",hash:{},data:d}))+'&nbsp;<i class="icon-dropdown"></i>\n      </a>\n      <ul class="dropdown-menu">\n';e=b["if"].call(a,a!=null?a.settingsProvisioning:a,{name:"if",hash:{},fn:this.program(3,d),inverse:this.noop,data:d});if(e!=null){h+=e}h+='        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/bulk_deletion",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"bulk_deletion.page",{name:"t",hash:{},data:d}))+"</a>\n        </li>\n";e=b["if"].call(a,a!=null?a.settingsUpdateCenter:a,{name:"if",hash:{},fn:this.program(5,d),inverse:this.noop,data:d});if(e!=null){h+=e}return h+'        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/system",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"system_info.page",{name:"t",hash:{},data:d}))+'</a>\n        </li>\n        <li>\n          <a href="'+g((b.link||a&&a.link||f).call(a,"/analysis_reports",{name:"link",hash:{},data:d}))+'">'+g((b.t||a&&a.t||f).call(a,"analysis_reports.page",{name:"t",hash:{},data:d}))+"</a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n"},useData:true});this["Templates"]["nav-shortcuts-help"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e=b.helperMissing,f=this.escapeExpression;return'<div class="modal-head">\n  <h2>'+f((b.t||a&&a.t||e).call(a,"help",{name:"t",hash:{},data:d}))+'</h2>\n</div>\n\n<div class="modal-body modal-container">\n  <div class="spacer-bottom">\n    <a href="http://www.sonarqube.org" target="sonar">Community</a> -\n    <a href="http://www.sonarqube.org/documentation" target="sonar_doc">Documentation</a> -\n    <a href="http://www.sonarqube.org/support" target="support">Get Support</a> -\n    <a href="http://redirect.sonarsource.com/doc/plugin-library.html" target="plugins">Plugins</a> -\n    <a href="'+f((b.link||a&&a.link||e).call(a,"/api_documentation",{name:"link",hash:{},data:d}))+'">Web Service API</a>\n  </div>\n\n  <h2 class="spacer-top spacer-bottom">'+f((b.t||a&&a.t||e).call(a,"shortcuts.modal_title",{name:"t",hash:{},data:d}))+'</h2>\n\n  <div class="columns">\n    <div class="column-half">\n      <div class="spacer-bottom">\n        <h3 class="shortcuts-section-title">'+f((b.t||a&&a.t||e).call(a,"shortcuts.section.global",{name:"t",hash:{},data:d}))+'</h3>\n        <ul class="shortcuts-list">\n          <li><span class="shortcut-button">s</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.global.search",{name:"t",hash:{},data:d}))+'</li>\n          <li><span class="shortcut-button">?</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.global.shortcuts",{name:"t",hash:{},data:d}))+'</li>\n        </ul>\n      </div>\n\n      <h3 class="shortcuts-section-title">'+f((b.t||a&&a.t||e).call(a,"shortcuts.section.rules",{name:"t",hash:{},data:d}))+'</h3>\n      <ul class="shortcuts-list">\n        <li><span class="shortcut-button">&uparrow;</span> <span\n            class="shortcut-button">&darr;</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.rules.navigate_between_rules",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">&rarr;</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.rules.open_details",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">&larr;</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.rules.return_to_list",{name:"t",hash:{},data:d}))+'</li>\n      </ul>\n    </div>\n\n    <div class="column-half">\n      <h3 class="shortcuts-section-title">'+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issues",{name:"t",hash:{},data:d}))+'</h3>\n      <ul class="shortcuts-list">\n        <li><span class="shortcut-button">&uparrow;</span> <span\n            class="shortcut-button">&darr;</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issues.navigate_between_issues",{name:"t",hash:{},data:d}))+'\n        </li>\n        <li><span class="shortcut-button">&rarr;</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issues.open_details",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">&larr;</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issues.return_to_list",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">f</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issue.do_transition",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">a</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issue.assign",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">m</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issue.assign_to_me",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">p</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issue.plan",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">i</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issue.change_severity",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">c</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issue.comment",{name:"t",hash:{},data:d}))+'</li>\n        <li><span class="shortcut-button">t</span> &nbsp;&nbsp; '+f((b.t||a&&a.t||e).call(a,"shortcuts.section.issue.change_tags",{name:"t",hash:{},data:d}))+'</li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div class="modal-foot">\n  <a class="js-modal-close" href="#">'+f((b.t||a&&a.t||e).call(a,"close",{name:"t",hash:{},data:d}))+"</a>\n</div>\n"},useData:true});define("templates/nav",function(){});define("nav/search-view",["common/selectable-collection-view","templates/nav"],function(a){var b=jQuery,c=Marionette.ItemView.extend({tagName:"li",template:Templates["nav-search-item"],select:function(){this.$el.addClass("active")},deselect:function(){this.$el.removeClass("active")},submit:function(){this.$("a")[0].click()},serializeData:function(){return _.extend(Marionette.ItemView.prototype.serializeData.apply(this,arguments),{index:this.options.index})}}),d=Marionette.ItemView.extend({tagName:"li",template:Templates["nav-search-empty"]}),e=a.extend({className:"menu",tagName:"ul",itemView:c,emptyView:d});return Marionette.Layout.extend({className:"navbar-search",tagName:"form",template:Templates["nav-search"],regions:{resultsRegion:".js-search-results"},events:{submit:"onSubmit","keydown .js-search-input":"onKeyDown","keyup .js-search-input":"debouncedOnKeyUp"},initialize:function(){this.results=new Backbone.Collection;this.resetResultsToDefault();this.resultsView=new e({collection:this.results});this.debouncedOnKeyUp=_.debounce(this.onKeyUp,400);this._bufferedValue=""},onRender:function(){var a=this;this.resultsRegion.show(this.resultsView);setTimeout(function(){a.$(".js-search-input").focus();

},0)},onKeyDown:function(a){if(a.keyCode===38){this.resultsView.selectPrev();return false}if(a.keyCode===40){this.resultsView.selectNext();return false}if(a.keyCode===13){this.resultsView.submitCurrent();return false}if(a.keyCode===27){this.options.hide();return false}},onKeyUp:function(){var a=this.$(".js-search-input").val();if(a===this._bufferedValue){return}this._bufferedValue=this.$(".js-search-input").val();this.search(a)},onSubmit:function(){return false},resetResultsToDefault:function(){var a=JSON.parse(localStorage.getItem("sonar_recent_history")),b=(a||[]).map(function(a,b){return{url:baseUrl+"/dashboard/index?id="+encodeURIComponent(a.key)+dashboardParameters(true),name:a.name,q:a.icon,extra:b===0?t("browsed_recently"):null}}),c=this.model.get("qualifiers").map(function(a,b){return{url:baseUrl+"/all_projects?qualifier="+encodeURIComponent(a),name:t("qualifiers.all",a),extra:b===0?"":null}});this.results.reset(b.concat(c))},search:function(a){if(a.length<2){this.resetResultsToDefault();return}var c=this,d=baseUrl+"/api/components/suggestions",e={s:a};return b.get(d,e).done(function(a){var b=[];a.results.forEach(function(a){a.items.forEach(function(c,d){b.push(_.extend(c,{q:a.q,extra:d===0?a.name:null,url:baseUrl+"/dashboard/index?id="+encodeURIComponent(c.key)+dashboardParameters(true)}))})});c.results.reset(b)})}})});define("common/modals",[],function(){var a=jQuery,b="modal";return Marionette.ItemView.extend({className:"modal",overlayClassName:"modal-overlay",htmlClassName:"modal-open",events:function(){return{"click .js-modal-close":"onCloseClick"}},onRender:function(){var b=this;this.$el.detach().appendTo(a("body"));a("html").addClass(this.htmlClassName);this.renderOverlay();this.keyScope=key.getScope();key.setScope("modal");key("escape","modal",function(){b.close();return false});this.show();if(!!this.options.large){this.$el.addClass("modal-large")}},show:function(){var b=this;setTimeout(function(){b.$el.addClass("in");a("."+b.overlayClassName).addClass("in")},0)},onClose:function(){a("html").removeClass(this.htmlClassName);this.removeOverlay();key.deleteScope("modal");key.setScope(this.keyScope)},onCloseClick:function(a){a.preventDefault();this.close()},renderOverlay:function(){var b=a("."+this.overlayClassName);if(b.length===0){a('<div class="'+this.overlayClassName+'"></div>').appendTo(a("body"))}},removeOverlay:function(){a("."+this.overlayClassName).remove()},attachCloseEvents:function(){var c=this;a("body").on("click."+b,function(){a("body").off("click."+b);c.close()})}})});define("nav/shortcuts-help-view",["common/modals","templates/nav"],function(a){return a.extend({className:"modal modal-large",template:Templates["nav-shortcuts-help"]})});define("nav/global-navbar-view",["nav/search-view","nav/shortcuts-help-view","templates/nav"],function(a,b){return Marionette.Layout.extend({template:Templates["nav-global-navbar"],regions:{searchRegion:".js-search-region"},events:{"click .js-login":"onLoginClick","click .js-favorite":"onFavoriteClick","show.bs.dropdown .js-search-dropdown":"onSearchDropdownShow","hidden.bs.dropdown .js-search-dropdown":"onSearchDropdownHidden","click .js-shortcuts":"onShortcutsClick"},onRender:function(){var a=this;if(this.model.has("space")){this.$el.addClass("navbar-"+this.model.get("space"))}this.$el.addClass("navbar-fade");setTimeout(function(){a.$el.addClass("in")},0)},onLoginClick:function(){var a=window.location.pathname+window.location.search;window.location=baseUrl+"/sessions/new?return_to="+encodeURIComponent(a)+window.location.hash;return false},onSearchDropdownShow:function(){var b=this;this.searchRegion.show(new a({model:this.model,hide:function(){b.$(".js-search-dropdown-toggle").dropdown("toggle")}}))},onSearchDropdownHidden:function(){this.searchRegion.reset()},onShortcutsClick:function(){this.showShortcutsHelp()},showShortcutsHelp:function(){new b({shortcuts:this.model.get("shortcuts")}).render()},serializeData:function(){return _.extend(Marionette.Layout.prototype.serializeData.apply(this,arguments),{user:window.SS.user,userName:window.SS.userName,isUserAdmin:window.SS.isUserAdmin,canManageGlobalDashboards:!!window.SS.user,canManageIssueFilters:!!window.SS.user,canManageMeasureFilters:!!window.SS.user})}})});define("nav/context-navbar-view",["templates/nav"],function(){var a=jQuery,b=["/design","/libraries","/dashboards"],c=["/project/settings","/project/profile","/project/qualitygate","/manual_measures/index","/action_plans/index","/project/links","/project_roles/index","/project/history","/project/key","/project/deletion"];return Marionette.ItemView.extend({template:Templates["nav-context-navbar"],modelEvents:{change:"render"},events:{"click .js-favorite":"onFavoriteClick"},onRender:function(){this.$('[data-toggle="tooltip"]').tooltip({container:"body"})},onFavoriteClick:function(){var b=this,c=baseUrl+"/favourites/toggle/"+this.model.get("contextId"),d=this.model.get("isContextFavorite");this.model.set({isContextFavorite:!d});return a.post(c).fail(function(){b.model.set({isContextFavorite:d})})},serializeData:function(){var a=window.location.href,d=window.location.search,e=_.some(b,function(b){return a.indexOf(b)!==-1})||a.indexOf("/dashboard")!==-1&&d.indexOf("did=")!==-1,f=_.some(c,function(b){return a.indexOf(b)!==-1}),g=!e&&a.indexOf("/dashboard")!==-1&&d.indexOf("did=")===-1;return _.extend(Marionette.Layout.prototype.serializeData.apply(this,arguments),{canManageContextDashboards:!!window.SS.user,contextKeyEncoded:encodeURIComponent(this.model.get("contextKey")),isOverviewActive:g,isSettingsActive:f,isMoreActive:e})}})});define("nav/settings-navbar-view",["templates/nav"],function(){return Marionette.ItemView.extend({template:Templates["nav-settings-navbar"]})});define("nav/app",["nav/global-navbar-view","nav/context-navbar-view","nav/settings-navbar-view"],function(a,b,c){var d=jQuery,e=new Marionette.Application,f=window.navbarOptions;e.addInitializer(function(){this.navbarView=new a({app:e,el:d(".navbar-global"),model:f});this.navbarView.render()});if(f.has("contextBreadcrumbs")){e.addInitializer(function(){this.contextNavbarView=new b({app:e,el:d(".navbar-context"),model:f});this.contextNavbarView.render()})}if(f.get("space")==="settings"){e.addInitializer(function(){this.settingsNavbarView=new c({app:e,el:d(".navbar-context"),model:f});this.settingsNavbarView.render()})}e.addInitializer(function(){var a=this;d(window).on("keypress",function(b){var c=b.target.tagName;if(c!=="INPUT"&&c!=="SELECT"&&c!=="TEXTAREA"){var d=b.keyCode||b.which;if(d===63){a.navbarView.showShortcutsHelp()}}})});window.requestMessages().done(function(){e.start()})});