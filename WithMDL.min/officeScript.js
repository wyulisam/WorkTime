jQuery.expr[":"].contains=function(c,d,b){return jQuery(c).text().toUpperCase().indexOf(b[3].toUpperCase())>=0};function mergeSort(d,c){var b=d.length,a=Math.floor(b/2);if(!c){c=function(f,e){if(f<e){return -1}if(f==e){return 0}else{return 1}}}if(b<2){return d}return merge(mergeSort(d.slice(0,a),c),mergeSort(d.slice(a,b),c),c)}function merge(d,b,c){var a=[];while(d.length>0||b.length>0){if(d.length>0&&b.length>0){if(c(d[0],b[0])<=0){a.push(d[0]);d=d.slice(1)}else{a.push(b[0]);b=b.slice(1)}}else{if(d.length>0){a.push(d[0]);d=d.slice(1)}else{if(b.length>0){a.push(b[0]);b=b.slice(1)}}}}return a}function CreateSearchInput(){var a=$("<input>",{type:"text",id:"searchInput",title:"Введите фамилию или имя сотрудника",placeholder:"Сотрудник"}).css("width","100px");$("th.text").eq(0).children().hide();$("th.text").eq(0).append(a)}function CreateSearchInput_withMD(){var a=$("<input>",{type:"text","class":"mdl-textfield__input",id:"searchInput",title:"Введите фамилию или имя сотрудника"});var c=$("<label></label>",{"class":"mdl-textfield__label","for":"searchInput",style:"line-height: 12pt !important;"}).append("Сотрудник");var b=$('<i class="material-icons" style="float: left; margin-top: 22px;">search</i>');var d=$("<div></div>",{"class":"mdl-textfield mdl-js-textfield"}).append(a,c);$("th.text").eq(0).children().hide();$("th.text").eq(0).append(b,d);componentHandler.upgradeElement($(".mdl-textfield.mdl-js-textfield").get(0))}function escapeHtml(b){var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return b.replace(/[&<>"']/g,function(c){return a[c]})}function SetClassesOnColumns(){var a=" header";$("th.text").first().addClass("employee header");$("col.text").first().addClass("employee");$("tbody tr").each(function(b){$(this).children("td.text").first().addClass("employee")});$("th.text").eq(1).addClass("info");$("col.text").eq(1).addClass("info");$("tbody tr").each(function(b){$(this).children("td.text").eq(1).addClass("info")});$("th.text.phone").first().addClass("first");$("col.text.phone").first().addClass("first");$("tbody tr").each(function(b){$(this).children("td.text.phone").first().addClass("first")});$("th.text.phone").eq(1).addClass("second");$("col.text.phone").eq(1).addClass("second");$("tbody tr").each(function(b){$(this).children("td.text.phone").eq(1).addClass("second")});$("th.text.phone").eq(2).addClass("third");$("col.text.phone").eq(2).addClass("third");$("tbody tr").each(function(b){$(this).children("td.text.phone").eq(2).addClass("third")});$("th.text").eq(5).addClass("workgroup header");$("col.text").eq(5).addClass("workgroup");$("tbody tr").each(function(b){$(this).children("td.text").eq(5).addClass("workgroup")});$("th.text").eq(6).addClass("room header");$("col.text").eq(6).addClass("room");$("tbody tr").each(function(b){$(this).children("td.text").eq(6).addClass("room")});$("th.indicator").first().addClass("workstate header");$("col.indicator").first().addClass("workstate");$("tbody tr").each(function(b){$(this).children("td.indicator").first().addClass("workstate")});$("th.indicator").last().addClass("mail");$("col.indicator").last().addClass("mail");$("tbody tr").each(function(b){$(this).children("td.indicator").last().addClass("mail")})}function CreateSelectForGroups(){var b=[];$("table.full-size > tbody > tr").each(function(f){var g=$(this).children("td.workgroup").text();if(b.indexOf(g)<0){b.push(g)}});b.sort();var d,e;if(IsMyHomeOffice()){d=$('<button style="float: left;" id="groupSelectButton" class="mdl-button mdl-js-button mdl-button--icon  mdl-button--accent mdl-js-ripple-effect"><i class="material-icons">home</i></button>');e=$('<div class="mdl-tooltip" for="groupSelectButton">Моя группа</div>')}var a=$("<select></select>",{id:"workgroupSelect",title:"Выберите группу"}).append("<option value=''>Группы</option>");for(var c=0;c<b.length;c++){if(b[c]!=""){a.append("<option value='"+b[c]+"'>"+b[c]+"</option>")}else{a.append("<option value='NoGroup'>---</option>")}}$("th.text").eq(5).children().hide();if(d!==undefined&&e!==undefined){$("th.text").eq(5).append(d,e,a);componentHandler.upgradeElement(d.get(0));componentHandler.upgradeElement(e.get(0))}else{$("th.text").eq(5).append(a)}}function CreateSelectOnWorkState(){var a=$("<select></select>",{id:"workStateSelect",title:"Выберите состояние"}).append("<option value='' title='Выберите состояние'></option>").append("<option id='option_ball_green' value='/Content/ball_green.png' title='На работе'>На работе</option>").append("<option id='option_ball_blue' value='/Content/ball_blue.png' title='Работает удаленно'>Работает удаленно</option>").append("<option id='option_ball_yellow' value='/Content/ball_yellow.png' title='Закончил работу'>Закончил работу</option>").append("<option id='option_ball_gray' value='/Content/ball_gray.png' title='Отсутствует'>Отсутствует</option>");$("th.indicator").eq(0).append(a)}function CreateSelectOnRoom(){var e=[];$("table.full-size > tbody > tr").each(function(f){var g=$(this).children("td.room").text();if(e.indexOf(g)<0){e.push(g)}});e.sort();var c,d;if(IsMyHomeOffice()){c=$('<button style="float: left;" id="roomSelectButton" class="mdl-button mdl-js-button mdl-button--icon  mdl-button--accent mdl-js-ripple-effect"><i class="material-icons">home</i></button>');d=$('<div class="mdl-tooltip" for="roomSelectButton">Моя комната</div>')}var a=$("<select></select>",{id:"roomSelect",title:"Выберите номер комнаты"}).append("<option value=''>Комната</option>");for(var b=0;b<e.length;b++){if(e[b]!=""){a.append("<option value='"+e[b]+"'>"+e[b]+"</option>")}else{a.append("<option value='NoRoom'>---</option>")}}$("th.text").eq(6).children().hide();if(c!==undefined&&d!==undefined){$("th.text").eq(6).append(c,d,a);componentHandler.upgradeElement(c.get(0));componentHandler.upgradeElement(d.get(0))}else{$("th.text").eq(6).append(a)}}function IsMyHomeOffice(){var a=GetMyName();if($('td.employee:contains("'+a+'")').length>0){return true}return false}function PrepareEmployeeColumnForSort(){var b=$("<div></div>",{"class":"arrowDiv"}).css({"float":"right",margin:"20px 0px",backgroundImage:"url("+chrome.extension.getURL("/images/bg.gif")+")"});var a=$("<div></div>",{"class":"clearfix"});$("#searchInput").css("float","left");$("#searchInput").parent().after(b,a)}function PrepareWorkgroupColumnForSort(){var b=$("<div></div>",{"class":"arrowDiv"}).css("float","right").css("backgroundImage","url("+chrome.extension.getURL("/images/bg.gif")+")");var a=$("<div></div>",{"class":"clearfix"});$("#workgroupSelect").css("float","left");$("#workgroupSelect").after(b,a)}function PrepareRoomColumnForSort(){var b=$("<div></div>",{"class":"arrowDiv"}).css("float","right").css("backgroundImage","url("+chrome.extension.getURL("/images/bg.gif")+")");var a=$("<div></div>",{"class":"clearfix"});$("#roomSelect").css("float","left");$("#roomSelect").after(b,a)}function RemoveEmptyColumns(){$("table.full-size > thead th").each(function(a){var b=true;$("table.full-size > tbody > tr").each(function(c){if($(this).children("td").eq(a).html()!=""){b=false}});if(b){$(this).hide();$("table.full-size > tbody > tr").each(function(c){$(this).children("td").eq(a).hide()})}})}function GetColumnToSort(a){if($(a).hasClass("employee")){return"employee"}if($(a).hasClass("workgroup")){return"workgroup"}if($(a).hasClass("room")){return"room"}}function AddResetFiltersButton(){var b=$('<i class="material-icons">clear</i>');var a=$("<button></button>",{id:"idReset","class":"mdl-button mdl-js-button  mdl-button--fab mdl-button--icon mdl-button--accent  mdl-js-ripple-effect",type:"button"}).append(b);var d=$("<div></div>",{"class":"buttonDiv"}).append(a).css("width","100%");$("table.full-size colgroup").append('<col class="reset button">');$("table.full-size thead tr").append('<th class="reset button"></th>');$("th.reset.button").append(d);$("table.full-size tbody tr").each(function(){$(this).append('<td class="reset button"></td>')});var c=$('<div class="mdl-tooltip" for="idReset">Сбросить<br>фильтры</div>');componentHandler.upgradeElement(c.get(0));componentHandler.upgradeElement(a.get(0));$("th.reset.button").append(c);$("button#idReset").hide()}function SetFilters(){$("table.full-size > tbody > tr").show();$("#searchInput").val("");FilterGroup();FilterWorkState();FilterRoom()}function FilterGroup(){var b=$("select#workgroupSelect option").filter(":selected").val();if(b==""){return}if(b=="NoGroup"){$("td.workgroup").not("[style='display: none;']").each(function(c){if($(this).text()==""){$(this).parent().show()}else{$(this).parent().hide()}});return}var a='td.workgroup:contains("'+b+'")';$(a).parent().not("[style='display: none;']").show();$("td.workgroup").not(a).parent().hide()}function FilterWorkState(){var b=$("select#workStateSelect option").filter(":selected").val();if(b==""){$("select#workStateSelect").attr("title","Выберите состояние");$("th.workstate i").css("color","white").attr("title","Выберите состояние").css("textShadow","-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray");return}$("tbody tr").not('[style="display: none;"]').each(function(d){if($(this).children("td.indicator").first().children("img").attr("src").indexOf(b)>-1){$(this).show()}else{$(this).hide()}});var c=$("select#workStateSelect option").filter(":selected").attr("title");var a=$("select#workStateSelect option").filter(":selected").attr("id").replace("option_ball_","");switch(a){case"green":a="#8bc349";break;case"blue":a="rgb(63, 81, 181)";break;case"yellow":a="#ffeb3b";break}$("select#workStateSelect").attr("title",c);$("th.workstate i").css("color",a).attr("title",c).css("textShadow","none")}function FilterRoom(){var b=$("select#roomSelect option").filter(":selected").val();if(b==""){return}if(b=="NoRoom"){$("td.room").not('[style="display: none;"]').each(function(c){if($(this).text()==""){$(this).parent().show()}else{$(this).parent().hide()}});return}var a='td.room:contains("'+b+'")';$(a).parent().not('[style="display: none;"]').show();$("td.room").not(a).parent().hide()}function SelectHomeGroup(){$("table.full-size > tbody > tr").show();$("#searchInput").val("");var b=GetMyGroupName();$("#workgroupSelect").val(b);if(b==""){return}if(b=="NoGroup"){$("td.workgroup").not('[style="display: none;"]').each(function(c){if($(this).text()==""){$(this).parent().show()}else{$(this).parent().hide()}});return}var a='td.workgroup:contains("'+b+'")';$(a).parent().not('[style="display: none;"]').show();$("td.workgroup").not(a).parent().hide()}function GetMyGroupName(){var a="";var b=GetMyName();$("td.workgroup").each(function(c){if($(this).parent().children("td.employee").text()==b){a=$(this).text();return false}});return a}function GetMyName(){var c=$(".status-right a").text();var a=c.indexOf(" ");var d=c.substr(0,a);var b=c.substr(a+1);c=b+" "+d;return c}function SelectHomeRoom(){$("table.full-size > tbody > tr").show();$("#searchInput").val("");var b=GetMyRoomNumber();$("#roomSelect").val(b);if(b==""){return}if(b=="NoRoom"){$("td.room").not('[style="display: none;"]').each(function(c){if($(this).text()==""){$(this).parent().show()}else{$(this).parent().hide()}});return}var a='td.room:contains("'+b+'")';$(a).parent().not('[style="display: none;"]').show();$("td.room").not(a).parent().hide()}function GetMyRoomNumber(){var a="";var b=GetMyName();$("td.room").each(function(c){if($(this).parent().children("td.employee").text()==b){a=$(this).text();return false}});return a}function CreateMDLCard(){$(".status-center").hide();$(".main").hide();var a=$("<span></span>",{"class":"mdl-layout-title"}).append($(".status-center").text());$("table.full-size").addClass("mdl-shadow--2dp");$(".mdl-layout__content").append(a,$("table.full-size"))}function ResizeTableHeader(){var a=$("table.full-size"),c=a.find("tbody tr").not("[style='display: none;']").first().children(),b;b=c.map(function(){return $(this).width()}).get();a.find("th").each(function(e,d){$(d).width(b[e])})}function CreateSettingsForLang(){$("div.mdl-layout__drawer").append($("<div id=settings></div>"));$("#settings").load("http://co-msk-app02/Preferences/Edit form",function(){$("#settings").hide();$("#settings").prepend("<br><br><label><b>Настройки:</b></label><br>");$("#ReturnTo").val("/"+window.location.search);$("#settings a").hide();$("#settings label").removeAttr("for");$("#settings label").after("<br>");$("div.table-form").last().next().css({paddingTop:"2em"});$("div.table-form").hide();$("div.table-form").first().show();ReplaceInput.apply($("form[action='/Preferences/Edit'] input[type=submit]").get(0));ChangeButtonsToMD.apply($("form[action='/Preferences/Edit'] button.inputReplaceButton").get(0));$("form[action='/Preferences/Edit'] button.inputReplaceButton").parent().css("width","0px");$("#settings").fadeIn("fast")})}function SetTableHeightForOffice(){$("table.full-size tbody").height($(window).height()-370)}function CheckResetButton(){if($("#workgroupSelect").val()!=""||$("#workStateSelect").val()!=""||$("#roomSelect").val()!=""||$("#searchInput").val()!=""){$("button#idReset").fadeIn("fast")}else{$("button#idReset").fadeOut("fast")}}function AddBorderToStatusSelect(){var a=$("<span></span>").css({display:"block",border:"1px solid rgb(202, 202, 202)",paddingLeft:"3px"}).append($("th.indicator.workstate.header").children());$("th.indicator.workstate.header").append(a)}$(document).ready(function(){CreateSearchInput_withMD();SetClassesOnColumns();CreateSelectForGroups();CreateSelectOnWorkState();CreateSelectOnRoom();PrepareEmployeeColumnForSort();PrepareWorkgroupColumnForSort();PrepareRoomColumnForSort();RemoveEmptyColumns();AddResetFiltersButton();CreateSettingsForLang();CreateMDLCard();AddBorderToStatusSelect();$("button").not("#idReset").not(".mdl-button--icon").not("form[action='/Remote/Come'] button, form[action='/Remote/Leave'] button").each(function(a){ChangeButtonsToMD.apply(this)});$("table.full-size").before($("div.holiday-box"));ShowTableFullSizeAndHolidayBox();ResizeTableHeader();$("#searchInput").on("propertychange input change keyup paste click",function(){$("#workgroupSelect, #workStateSelect, #roomSelect").val("");var c=escapeHtml($(this).val());var b='td.employee:contains("'+c+'")';var a='td.employee:contains("'+c+'")';$(b).parent().show();$("td.employee").not(a).parent().hide();$("th.workstate i").css("color","white").attr("title","Выберите состояние").css("textShadow","-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray");$("select#workStateSelect").attr("title","Выберите состояние");ResizeTableHeader();CheckResetButton()});$("#workgroupSelect, #workStateSelect, #roomSelect").change(function(){SetFilters();ResizeTableHeader();CheckResetButton()});$(".arrowDiv").click(function(){var b=GetColumnToSort($(this).parent());var a=$("table.full-size > tbody > tr");if($(this).hasClass("headerSortUp")){a=mergeSort(a,function(d,c){if($(d).children("td."+b).text().toLowerCase()>$(c).children("td."+b).text().toLowerCase()){return -1}else{if($(d).children("td."+b).text().toLowerCase()<$(c).children("td."+b).text().toLowerCase()){return 1}else{return 0}}});$(this).removeClass("headerSortUp").addClass("headerSortDown").css("backgroundImage","url("+chrome.extension.getURL("/images/asc.gif")+")")}else{a=mergeSort(a,function(d,c){if($(d).children("td."+b).text()>$(c).children("td."+b).text()){return 1}else{if($(d).children("td."+b).text()<$(c).children("td."+b).text()){return -1}else{return 0}}});$(this).removeClass("headerSortDown").addClass("headerSortUp").css("backgroundImage","url("+chrome.extension.getURL("/images/desc.gif")+")")}$("table.full-size > tbody").append(a)});$("button#idReset").on("click",function(){$("table.full-size > tbody > tr").show();$("#workgroupSelect, #workStateSelect, #roomSelect").val("");$("#searchInput").val("").parent().removeClass("is-dirty");$("th.workstate i").css("color","white").attr("title","Выберите состояние").css("textShadow","-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray");$("select#workStateSelect").attr("title","Выберите состояние");ResizeTableHeader();$(this).fadeOut("fast")});$("#roomSelectButton").click(function(){SelectHomeRoom();ResizeTableHeader();CheckResetButton()});$("#groupSelectButton").click(function(){SelectHomeGroup();ResizeTableHeader();CheckResetButton()});$(window).resize(function(){ResizeTableHeader();SetTableHeightForOffice()}).resize()});