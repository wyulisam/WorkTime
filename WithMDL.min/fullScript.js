$(document).hide();jQuery.expr[":"].contains=function(c,d,b){return jQuery(c).text().toUpperCase().indexOf(b[3].toUpperCase())>=0};String.prototype.replaceAll=function(b,a){return this.split(b).join(a)};function ShowTableFullSizeAndHolidayBox(){$("table.full-size, div.holiday-box").fadeIn("fast")}function SetTimeToLocalStorage(){var a=$("<div></div>");a.load("http://co-msk-app02/Personal tr.summary",function(){localStorage.current_time=$(this).children(".summary:contains('Итог')").not(":contains('за месяц')").last().children("td.time").eq(2).text();if($(this).children(".summary:contains('Итог')").not(":contains('за месяц')").last().children("td.time").eq(2).hasClass("negative")){localStorage.current_class="accentColor";localStorage.removed_class="greenColor"}else{localStorage.current_class="greenColor";localStorage.removed_class="accentColor"}})}function PutInfoToTheLeftPanel(){var c=$("<div></div>",{"class":"clearfix"}).css({height:"40px"});var b=$("<div></div>",{"class":"clearfix"}).css({height:"40px"});$("form[action='/Remote/Come']").before($("div.status-right"),c,$("div.status-left"),b);var a=ChangeNumberOfMonthToWord($("div.status-left").text());$("div.status-left").empty().append(a)}function ChangeNumberOfMonthToWord(c){var b=c;var d=b.substr(0,1);switch(d){case"п":b="П"+b.substr(1);break;case"в":b="В"+b.substr(1);break;case"с":b="С"+b.substr(1);break;case"ч":b="Ч"+b.substr(1);break}b=b.replace(".01."," Января ");b=b.replace(".02."," Февраля ");b=b.replace(".03."," Марта ");b=b.replace(".04."," Апреля ");b=b.replace(".05."," Мая ");b=b.replace(".06."," Июня ");b=b.replace(".07."," Июля ");b=b.replace(".08."," Августа ");b=b.replace(".09."," Сентября ");b=b.replace(".10."," Октября ");b=b.replace(".11."," Ноября ");b=b.replace(".12."," Декабря ");var a=b.indexOf(",");return b.substr(0,a)+"<br>"+b.substr(a+2)}function CreateMenu(){var b=$("<ul></ul>",{id:"menu","class":"nav"}).append($(".navbar ul").first().children("li"));var a=$("<div></div>",{"class":"clearfix"}).css({height:"55px"});$(".status-bar").append(b);$(".status-bar").after(a);$("#menu").children().each(function(c){$(this).attr("id","menu_li"+c).addClass("drop");$(this).children("a").text($(this).children("a").text().toUpperCase())});$("#menu_li0").append($("<ul id='menu_li0_submenu'><ul>"));$("#menu_li0_submenu").load("/ ul.nav2 li",function(){$("#menu_li0_submenu li").first().children("a").attr("href","http://co-msk-app02/?officeid=1");$("#menu_li0_submenu li").last().children("a").attr("href","http://co-msk-app02/?officeid=2");$("#menu_li0_submenu a").each(function(){$(this).text($(this).text().toUpperCase())})});$("#menu_li1").append($("<ul id='menu_li1_submenu'><ul>"));$("#menu_li1_submenu").load("/Personal ul.nav2 li",function(){$("#menu_li1_submenu li").last().children("a").attr("href","http://co-msk-app02/Personal");$("#menu_li1_submenu a").each(function(){$(this).text($(this).text().toUpperCase())})});$("#menu_li2").append($("<ul id='menu_li2_submenu'><ul>"));$("#menu_li2_submenu").load("/PersonalDaysoff ul.nav2 li",function(){$("#menu_li2_submenu li").eq(1).children("a").attr("href","http://co-msk-app02/PersonalDaysoff");$("#menu_li2_submenu a").each(function(){$(this).text($(this).text().toUpperCase())})});$("#menu_li3").append($("<ul id='menu_li3_submenu'><ul>"));$("#menu_li3_submenu").load("/Notes ul.nav2 li",function(){$("#menu_li3_submenu li").last().children("a").attr("href","http://co-msk-app02/Notes");$("#menu_li3_submenu a").each(function(){$(this).text($(this).text().toUpperCase())})});$("#menu_li4").append($("<ul id='menu_li4_submenu'><ul>"));$("#menu_li4_submenu").load("/Calendar ul.nav2 li",function(){$("#menu_li4_submenu li").eq(1).children("a").attr("href","http://co-msk-app02/Calendar");$("#menu_li4_submenu a").each(function(){$(this).text($(this).text().toUpperCase())})})}function ChangeButtonsToMD(){$(this).addClass("mdl-button mdl-button--raised mdl-js-button mdl-button--accent mdl-js-ripple-effect");componentHandler.upgradeElement($(this).get(0))}function ChangeTextInputToMD(h){var b=[],l=[];for(var j,e=0,g=$(this).get(0).attributes,d=g.length;e<d;e++){j=g[e];b.push(j.nodeName);l.push(j.nodeValue)}var k=$("<input></input>");for(e=0;e<b.length;e++){k.attr(b[e],l[e])}k.addClass("mdl-textfield__input").css("fontSize","11pt");var c;if(k.attr("id")){c=k.attr("id")}else{c=k.attr("name")+"_"+h;k.attr("id",c)}var f=$("<label></label>",{"class":"mdl-textfield__label","for":c}).append(k.attr("placeholder"));k.attr("placeholder","");var a=$("<div></div>",{"class":"mdl-textfield mdl-js-textfield"});$(this).after(a);a.append(k,f);$(this).remove();componentHandler.upgradeElement(a.get(0))}function ReplaceInput(){var a=$("<button></button>",{type:$(this).attr("type"),"class":"inputReplaceButton "+$(this).attr("class")}).append($(this).attr("value"));if($(this).attr("type")=="button"){a.attr("onclick",$(this).attr("onclick"))}$(this).after(a);$(this).hide()}function CreateFixedHeader(){$(".status-bar").hide();$(".navbar").hide();var d=$('<div class="mdl-layout__header-row" style="flex-wrap: wrap;"><!-- Title --><span class="mdl-layout-title notfixed" style="padding-right: 146px; padding-top: 33px; line-height: 30px;">'+$(".status-left").html()+'</span><span class="mdl-layout-title notfixed" style="padding-right: 200px; padding-top: 0px;"></span><span class="mdl-layout-title" style="position: absolute; right: 10px; top: 15px;">'+$(".status-right").text()+"</span></div>");componentHandler.upgradeElement(d.get(0));var f=$("<header></header>",{"class":"mdl-layout__header"}).append(d,$("#menu"));componentHandler.upgradeElement(f.get(0));var c=$('<div class="mdl-layout__drawer"></div>').append($(".navbar form"));componentHandler.upgradeElement(c.get(0));var b=$('<main class="mdl-layout__content content-wide"></main>').append($(".main"));componentHandler.upgradeElement(b.get(0));var e=$("<div></div>",{"class":"mainMenu mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer"}).append(f,c,b);$(".navbar").before(e);$(".mdl-layout-title").eq(2).prepend($(".status-right img"));$(".mdl-layout-title").eq(1).append("Текущее время: ",'<span class="mdl-layout-title currentTime" style="display: inline"></span>');if(localStorage.current_time!==undefined){$("span.currentTime").text(localStorage.current_time)}if(localStorage.current_class!==undefined&&localStorage.removed_class!==undefined){$("span.currentTime").removeClass(localStorage.removed_class).addClass(localStorage.current_class)}$(document.body).show();var a=$("<div></div>");a.load("http://co-msk-app02/Personal tr.summary",function(){var g=$(this).children(".summary:contains('Итог')").not(":contains('за месяц')").last().children("td.time").eq(2).text();localStorage.current_time=g;$("span.currentTime").text(g);if($(this).children(".summary:contains('Итог')").not(":contains('за месяц')").last().children("td.time").eq(2).hasClass("negative")){localStorage.current_class="accentColor";localStorage.removed_class="greenColor";$("span.currentTime").removeClass("greenColor").addClass("accentColor")}else{localStorage.current_class="greenColor";localStorage.removed_class="accentColor";$("span.currentTime").removeClass("accentColor").addClass("greenColor")}})}function ChangePicturesToMDLIcons(){$("img").each(function(c){var a,b;switch($(this).attr("src")){case"/Content/mail.png":a="email";b="gray";break;case"/Content/ball_gray.png":b="gray";a="lens";break;case"/Content/ball_green.png":b="#8bc349";a="lens";break;case"/Content/ball_blue.png":b="rgb(63, 81, 181)";a="lens";break;case"/Content/ball_yellow.png":b="#ffeb3b";a="lens";break}var d=$('<i class="material-icons" style="display: block; color:'+b+';">'+a+"</i>");d.attr("title",$(this).attr("title"));$(this).after(d);$(this).hide()});$("span.mdl-layout-title i").css({"float":"left",fontSize:"20px"});$("table.full-size i").first().css({"float":"left",marginTop:"3px",color:"white",textShadow:"-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray",cursor:"default"})}function CreateCommonMDLCard(){if(window.location.pathname=="/"){return}$(".status-center").hide();$(".main").hide();var a=$("<span></span>",{"class":"mdl-layout-title"}).append($(".status-center").text());$("table.full-size").addClass("mdl-shadow--2dp");$(".mdl-layout__content").append(a,$("table.full-size"));if(window.location.pathname=="/Notes"){if($("form[action='/Notes']").length>0){CreateCardForNotesSaving()}}}function CreateCardForNotesSaving(){var a=$("<div></div>",{"class":"noteSaveAndCancelCard mdl-card mdl-shadow--2dp"}).append($("form[action='/Notes']"));$(".mdl-layout__content").append(a)}function SetAllButtonsAndInputsToMDL(){$("input[type=submit], input[type=button]").each(function(a){ReplaceInput.apply(this)});$("button").each(function(a){ChangeButtonsToMD.apply(this)});$("input[type=text]").not("#idReset").each(function(a){ChangeTextInputToMD.apply(this,[a])});$("form.nav2 input[type=text]").parent().css("width","148px").before($('<i class="material-icons" style="float: left; margin-top:22px;">search</i>'));if(window.location.pathname=="/Notes"){$("label[for=Comment]").text("Текст заметки")}SetRaisedForOnlyOneButton();PutButtonsToTheOtherLineInNotes()}function SetRaisedForOnlyOneButton(){var a=$("div.status-right > img").attr("src");a=a.replace("/Content/ball_","");a=a.replace(".png","");switch(a){case"blue":case"green":$("form[action='/Remote/Come']").children("button").removeClass("mdl-button--raised");componentHandler.upgradeElement($("form[action='/Remote/Come']").children("button").get(0));$("form[action='/Remote/Leave']").show();break;case"yellow":case"gray":$("form[action='/Remote/Come']").show();$("form[action='/Remote/Leave']").children("button").removeClass("mdl-button--raised");componentHandler.upgradeElement($("form[action='/Remote/Leave']").children("button").get(0));break}}function PutButtonsToTheOtherLineInNotes(){$("input#Comment").parent().after("<br><br>")}function RestyleTableForCalendar(){$("table.full-size").addClass("mdl-shadow--2dp");componentHandler.upgradeElement($(".full-size").get(0))}function AddButtonToStopBlinking(){$("body").append("<button class='blink mdl-button' style='z-index: -10;'></button>")}function SetUpCalendarTable(){$("table.full-size tr").each(function(){var a=$(this).children("td").first().text();a=a.replaceAll("Пн","Понедельник,").replaceAll("Вт","Вторник,").replaceAll("Ср","Среда,").replaceAll("Чт","Четверг,").replaceAll("Пт","Пятница,").replaceAll("Сб","Суббота,").replaceAll("Вс","Воскресенье,").replaceAll(".01"," Января").replaceAll(".02"," Февраля").replaceAll(".03"," Марта").replaceAll(".04"," Апреля").replaceAll(".05"," Мая").replaceAll(".06"," Июня").replaceAll(".07"," Июля").replaceAll(".08"," Августа").replaceAll(".09"," Сентября").replaceAll(".10"," Октября").replaceAll(".11"," Ноября").replaceAll(".12"," Декабря");$(this).children("td").first().text(a)})}function AddDatePickerToNotes(){$("#NoteDate").datepicker({dateFormat:"dd.mm.yy",onClose:function(){if($("#NoteDate").val()!=""){$(this).parent().addClass("is-dirty")}else{$(this).parent().removeClass("is-dirty")}}})}function ChangeTitleToMDTooltip(d,c,a){var b=$('<div class="mdl-tooltip '+(a?a:"")+'" for="'+d+'">'+c+"</div>");$("#"+d).after(b);componentHandler.upgradeElement(b.get(0))}function AddTooltips_fullScrip(){$("input[type=text]").each(function(a){if($(this).attr("title")===undefined){return true}ChangeTitleToMDTooltip($(this).attr("id"),$(this).attr("title"));$(this).removeAttr("title")});$("li.drop").removeAttr("title")}$(document).ready(function(){if(window.location.pathname=="/"||window.location.pathname=="/Personal"){$("table.full-size, div.holiday-box").hide()}if(window.location.pathname=="/Notes"){$("#NoteDate").removeAttr("autofocus")}SetTimeToLocalStorage();PutInfoToTheLeftPanel();CreateMenu();$("ul.nav2").hide();$("div.version").hide();$(".status-bar").height("100px");SetAllButtonsAndInputsToMDL();CreateFixedHeader();ChangePicturesToMDLIcons();CreateCommonMDLCard();RestyleTableForCalendar();AddButtonToStopBlinking();AddDatePickerToNotes();AddTooltips_fullScrip();if(window.location.pathname=="/Calendar"){SetUpCalendarTable()}$("div.status-right a, th.indicator a").click(function(){return false});$(window).resize(function(){if($(this).width()<830){$("div.mainMenu").addClass("is-small-header")}else{$("div.mainMenu").removeClass("is-small-header")}}).resize()});