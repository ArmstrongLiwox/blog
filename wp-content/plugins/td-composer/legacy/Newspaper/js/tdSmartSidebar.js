var tdSmartSidebar={};
(function(){tdSmartSidebar={hasItems:!1,items:[],scroll_window_scrollTop_last:0,tds_snap_menu:tdUtil.getBackendVar("tds_snap_menu"),is_enabled:!0,is_enabled_state_run_once:!1,is_disabled_state_run_once:!1,is_tablet_grid:!1,_view_port_current_interval_index:tdViewport.getCurrentIntervalIndex(),item:function(){this.sidebar_jquery_obj=this.content_jquery_obj="";this.sidebar_height=this.sidebar_bottom=this.sidebar_top=0;this.enabled_on=[!1,!1,!1,!1];this.offset=0;this.is_width_auto=[!1,!1,!1,!1];this.content_bottom=
this.content_top=0;this.sidebar_state="";this.case_3_run_once=this.case_2_run_once=this.case_1_run_once=!1;this.case_3_last_content_height=this.case_3_last_sidebar_height=0;this.case_4_run_once=!1;this.case_4_last_menu_offset=0;this.case_6_run_once=this.case_5_run_once=!1},add_item:function(c){tdSmartSidebar.hasItems=!0;c.sidebar_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');c.content_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');
tdSmartSidebar.items.push(c)},td_events_scroll:function(c){if(!1!==tdSmartSidebar.hasItems)if(!1===tdSmartSidebar.is_enabled){if(!1===tdSmartSidebar.is_disabled_state_run_once){tdSmartSidebar.is_disabled_state_run_once=!0;for(var d=0;d<tdSmartSidebar.items.length;d++)tdSmartSidebar.items[d].sidebar_jquery_obj.css({width:"auto",position:"static",top:"auto",bottom:"auto"});tdSmartSidebar.log("smart_sidebar_disabled")}}else window.requestAnimationFrame(function(){""!==tdSmartSidebar.tds_snap_menu&&tdAffix._get_menu_affix_height();
var d="";c!==tdSmartSidebar.scroll_window_scrollTop_last&&(d=c>tdSmartSidebar.scroll_window_scrollTop_last?"down":"up");tdSmartSidebar.scroll_window_scrollTop_last=c;for(var m=jQuery(window).height(),g=c+m,f=0;f<tdSmartSidebar.items.length;f++){var a=tdSmartSidebar.items[f];a.content_top=a.content_jquery_obj.offset().top;a.content_height=a.content_jquery_obj.height();a.content_bottom=a.content_top+a.content_height;a.sidebar_top=a.sidebar_jquery_obj.offset().top;a.sidebar_height=a.sidebar_jquery_obj.height();
a.sidebar_bottom=a.sidebar_top+a.sidebar_height;var l="undefined"!==typeof window.tdThemeName?window.tdThemeName:"";var e="Newspaper"===l?20:0;if("Newspaper"===l){if(!a.sidebar_jquery_obj.closest(".td-main-sidebar")&&!1===a.enabled_on[tdSmartSidebar._view_port_current_interval_index]){a.sidebar_jquery_obj.css({width:"auto",position:"static",top:"auto",bottom:"auto"});continue}if(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(a.offset)){var b=JSON.parse(atob(a.offset));
switch(tdSmartSidebar._view_port_current_interval_index){case 0:e="undefined"!==typeof b.phone?parseInt(b.phone):e;break;case 1:e="undefined"!==typeof b.portrait?parseInt(b.portrait):e;break;case 2:e="undefined"!==typeof b.landscape?parseInt(b.landscape):e;break;case 3:e="undefined"!==typeof b.all?parseInt(b.all):e}}else e=a.offset}jQuery("body").hasClass("admin-bar")&&(e=0<tdSmartSidebar._view_port_current_interval_index?e+32:e);b=c+e;if(a.content_height<=a.sidebar_height)a.sidebar_state="case_6_content_too_small";
else if(a.sidebar_height<m){var h=a.content_top;tdAffix.is_menu_affix||"undefined"===typeof window.tdThemeName||"Newsmag"!==window.tdThemeName||"smart_snap_always"!==tdAffix.tds_snap_menu||(h+=e);tdSmartSidebar._is_smaller_or_equal(b,h)?a.sidebar_state="case_2_top_of_content":!0===tdSmartSidebar._is_smaller(a.sidebar_bottom,b)?tdSmartSidebar._is_smaller(b,a.content_bottom-a.sidebar_height)?a.sidebar_state="case_4_fixed_up":a.sidebar_state="case_3_bottom_of_content":tdSmartSidebar._is_smaller_or_equal(a.content_bottom,
a.sidebar_bottom)?"up"===d&&tdSmartSidebar._is_smaller_or_equal(b,a.sidebar_top)?a.sidebar_state="case_4_fixed_up":a.sidebar_state="case_3_bottom_of_content":a.sidebar_state=a.content_bottom-b>=a.sidebar_height?"case_4_fixed_up":"case_3_bottom_of_content"}else if(!0===tdSmartSidebar._is_smaller(a.sidebar_bottom,b)?!0===tdSmartSidebar._is_smaller_or_equal(b,a.sidebar_top)&&!0===tdSmartSidebar._is_smaller_or_equal(a.content_top,b)?a.sidebar_state="case_4_fixed_up":!0===tdSmartSidebar._is_smaller(a.sidebar_bottom,
g)&&!0===tdSmartSidebar._is_smaller(a.sidebar_bottom,a.content_bottom)&&a.content_bottom>=g?a.sidebar_state="case_1_fixed_down":a.sidebar_state="case_3_bottom_of_content":!0===tdSmartSidebar._is_smaller(a.sidebar_bottom,g)&&!0===tdSmartSidebar._is_smaller(a.sidebar_bottom,a.content_bottom)&&"down"===d&&a.content_bottom>=g?a.sidebar_state="case_1_fixed_down":!0===tdSmartSidebar._is_smaller_or_equal(a.sidebar_top,a.content_top)&&"up"===d&&a.content_bottom>=g?a.sidebar_state="case_2_top_of_content":
!0===tdSmartSidebar._is_smaller_or_equal(a.content_bottom,a.sidebar_bottom)&&"down"===d||a.content_bottom<g?a.sidebar_state="case_3_bottom_of_content":!0===tdSmartSidebar._is_smaller_or_equal(b,a.sidebar_top)&&"up"===d&&!0===tdSmartSidebar._is_smaller_or_equal(a.content_top,b)?a.sidebar_state="case_4_fixed_up":"up"===d&&!0===tdSmartSidebar._is_smaller_or_equal(g,a.sidebar_top)&&(a.sidebar_state="case_2_top_of_content"),"case_1_fixed_down"===a.sidebar_state&&"up"===d||"case_4_fixed_up"===a.sidebar_state&&
"down"===d)a.sidebar_state="case_5_absolute";b=0;if(null!==tdViewport.getCurrentIntervalItem()){h=a.sidebar_jquery_obj.parent(".vc_column, .td-main-sidebar, .vc_column-inner, .vc_column_inner");var k=h.find(".td-sticky-sidebar-placeholder");"Newspaper"===l?!0===a.is_width_auto[tdSmartSidebar._view_port_current_interval_index]?(a.sidebar_jquery_obj.css("width",""),k.length&&k.css("width",""),b=a.sidebar_jquery_obj.width(),k.length?k.css("width",b):h.prepend('<div class="td-sticky-sidebar-placeholder" style="width:'+
b+'px"></div>')):(b=h.width(),k.length&&k.remove()):b=h.width();a.sidebar_jquery_obj.width(b)}switch(a.sidebar_state){case "case_1_fixed_down":if(!0===a.case_1_run_once)break;tdSmartSidebar.log("sidebar_id: "+f+" "+a.sidebar_state);a.case_1_run_once=!0;a.case_2_run_once=!1;a.case_3_run_once=!1;a.case_4_run_once=!1;a.case_5_run_once=!1;a.case_6_run_once=!1;a.sidebar_jquery_obj.css({width:b,position:"fixed",top:"auto",bottom:"0","z-index":"1"});break;case "case_2_top_of_content":if(!0===a.case_2_run_once)break;
tdSmartSidebar.log("sidebar_id: "+f+" "+a.sidebar_state);a.case_1_run_once=!1;a.case_2_run_once=!0;a.case_3_run_once=!1;a.case_4_run_once=!1;a.case_5_run_once=!1;a.case_6_run_once=!1;a.sidebar_jquery_obj.css({width:"auto",position:"static",top:"auto",bottom:"auto"});break;case "case_3_bottom_of_content":if(!0===a.case_3_run_once&&a.case_3_last_sidebar_height===a.sidebar_height&&a.case_3_last_content_height===a.content_height)break;tdSmartSidebar.log("sidebar_id: "+f+" "+a.sidebar_state);a.case_1_run_once=
!1;a.case_2_run_once=!1;a.case_3_run_once=!0;a.case_3_last_sidebar_height=a.sidebar_height;a.case_3_last_content_height=a.content_height;a.case_4_run_once=!1;a.case_5_run_once=!1;a.case_6_run_once=!1;a.sidebar_jquery_obj.css({width:b,position:"absolute",top:a.content_bottom-a.sidebar_height-a.content_top,bottom:"auto"});break;case "case_4_fixed_up":if(!0===a.case_4_run_once&&a.case_4_last_menu_offset===e)break;tdSmartSidebar.log("sidebar_id: "+f+" "+a.sidebar_state);a.case_1_run_once=!1;a.case_2_run_once=
!1;a.case_3_run_once=!1;a.case_4_run_once=!0;a.case_4_last_menu_offset=e;a.case_5_run_once=!1;a.case_6_run_once=!1;a.sidebar_jquery_obj.css({width:b,position:"fixed",top:e,bottom:"auto"});break;case "case_5_absolute":if(!0===a.case_5_run_once)break;tdSmartSidebar.log("sidebar_id: "+f+" "+a.sidebar_state);a.case_1_run_once=!1;a.case_2_run_once=!1;a.case_3_run_once=!1;a.case_4_run_once=!1;a.case_5_run_once=!0;a.case_6_run_once=!1;a.sidebar_jquery_obj.css({width:b,position:"absolute",top:a.sidebar_top-
a.content_top,bottom:"auto"});break;case "case_6_content_too_small":!0!==a.case_6_run_once&&(tdSmartSidebar.log("sidebar_id: "+f+" "+a.sidebar_state),a.case_1_run_once=!1,a.case_2_run_once=!1,a.case_3_run_once=!1,a.case_4_run_once=!1,a.case_5_run_once=!1,a.case_6_run_once=!0,a.sidebar_jquery_obj.css({width:"auto",position:"static",top:"auto",bottom:"auto"}))}}})},compute:function(){tdSmartSidebar.td_events_scroll(jQuery(window).scrollTop())},reset_run_once_flags:function(){for(var c=0;c<tdSmartSidebar.items.length;c++)tdSmartSidebar.items[c].case_1_run_once=
!1,tdSmartSidebar.items[c].case_2_run_once=!1,tdSmartSidebar.items[c].case_3_run_once=!1,tdSmartSidebar.items[c].case_3_last_sidebar_height=0,tdSmartSidebar.items[c].case_3_last_content_height=0,tdSmartSidebar.items[c].case_4_run_once=!1,tdSmartSidebar.items[c].case_4_last_menu_offset=0,tdSmartSidebar.items[c].case_5_run_once=!1,tdSmartSidebar.items[c].case_6_run_once=!1},td_events_resize:function(){tdSmartSidebar._view_port_current_interval_index=tdViewport.getCurrentIntervalIndex();switch(tdSmartSidebar._view_port_current_interval_index){case 0:tdSmartSidebar.is_enabled=
!1;tdSmartSidebar.is_enabled_state_run_once=!1;break;case 1:!1===tdSmartSidebar.is_tablet_grid&&(tdSmartSidebar.reset_run_once_flags(),tdSmartSidebar.is_tablet_grid=!0,tdSmartSidebar.is_desktop_grid=!1,tdSmartSidebar.log("view port tablet"));tdSmartSidebar.is_enabled=!0;tdSmartSidebar.is_disabled_state_run_once=!1;!1===tdSmartSidebar.is_enabled_state_run_once&&(tdSmartSidebar.is_enabled_state_run_once=!0,tdSmartSidebar.log("smart_sidebar_enabled"));break;case 2:case 3:!0===tdSmartSidebar.is_tablet_grid&&
(tdSmartSidebar.reset_run_once_flags(),tdSmartSidebar.is_tablet_grid=!1,tdSmartSidebar.is_desktop_grid=!0,tdSmartSidebar.log("view port desktop")),tdSmartSidebar.is_enabled=!0,tdSmartSidebar.is_disabled_state_run_once=!1,!1===tdSmartSidebar.is_enabled_state_run_once&&(tdSmartSidebar.is_enabled_state_run_once=!0,tdSmartSidebar.log("smart_sidebar_enabled"))}tdSmartSidebar.compute()},log:function(c){},_is_smaller_or_equal:function(c,d){return 1<=Math.abs(c-d)?c<d?!0:!1:!0},_is_smaller:function(c,d){return 1<=
Math.abs(c-d)?c<d?!0:!1:!1}}})();