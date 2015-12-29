function $ID(id){return document.getElementById(id);}
function $F(id){return $ID(id).value.replace(/&/g,"");}
/****JX*****/
jx = {
getHTTPObject : function() {
var http = false;
if(typeof ActiveXObject != 'undefined') {
try {http = new ActiveXObject("Msxml2.XMLHTTP");}
catch (e) {
try {http = new ActiveXObject("Microsoft.XMLHTTP");}
catch (E) {http = false;}
}
} else if (window.XMLHttpRequest) {
try {http = new XMLHttpRequest();}
catch (e) {http = false;}
}
return http;
},
get : function (url,callback,format) {
var http = this.init(); 
if(!http||!url) return;
if (http.overrideMimeType) http.overrideMimeType('text/xml');

if(!format) var format = "text";
format = format.toLowerCase();
var now = "uid=" + new Date().getTime();
url += (url.indexOf("?")+1) ? "&" : "?";
url += now;
http.open("GET", url, true);
http.onreadystatechange = function () {
if (http.readyState == 4) {
if(http.status == 200) {
var result = "";
if(http.responseText) result = http.responseText;
if(format.charAt(0) == "j") {
result = result.replace(/[\n\r]/g,"");
result = eval('('+result+')');
}
if(callback) callback(result);
} else {
if(error) error(http.status);
}
}
}
http.send(null);
},
post : function (url,params,callback,format) {
var http = this.init(); 
if(!http||!url) return;
if (http.overrideMimeType) http.overrideMimeType('text/xml');
if(!format) var format = "text";
format = format.toLowerCase();
var now = "uid=" + new Date().getTime();
url += (url.indexOf("?")+1) ? "&" : "?";
url += now;
http.open("POST", url);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", params.length);
http.setRequestHeader("Connection", "close");
http.onreadystatechange = function () {
if (http.readyState == 4) {
if(http.status == 200) {
var result = "";
if(http.responseText) result = http.responseText;
if(format.charAt(0) == "j") {
result = result.replace(/[\n\r]/g,"");
result = eval('('+result+')');
}
if(callback) callback(result);
} else { 
if(error) error(http.status);
}
}
}
http.send(params);
},
init : function() {return this.getHTTPObject();}
}

/********* SLIDER ***********************/
var slideSpeed = 7;	// Higher value = faster
var timer = 10;	// Lower value = faster

var objectIdToSlideDown = false;
var activeId = false;
var slideInProgress = false;
var smurl = 'index.php?option=com_smfaq&format=raw&task='

function SmFaqinit() {
	var patern = /#p(.*[0-9])/;
	var t = patern.exec(location.href);
	if (t) {
		showHideContent(false, t[1]);
		return; 
	} else {
		if (first) {
			showHideContent(false, first);
			return;
		}
		return;
	}
}
function showHideContent(e,inputId)
{
	if(slideInProgress)return;
	slideInProgress = true;
	if(!inputId)inputId = this.id;
	inputId = inputId + '';
	var numericId = inputId.replace(/[^0-9]/g,'');
	var answerDiv = $ID('a' + numericId);
	if(!answerDiv)return;
	objectIdToSlideDown = false;
	if(!answerDiv.style.display || answerDiv.style.display=='none'){		
		if(activeId &&  activeId!=numericId){
			$ID('q' + activeId).className='question';
			$ID('q' + numericId).className='question q-active';
			objectIdToSlideDown = numericId;
			slideContent(activeId,(slideSpeed*-1));
		}else{
			$ID('q' + numericId).className='question q-active';
			answerDiv.style.display='block';
			answerDiv.style.visibility = 'visible';
			
			slideContent(numericId,slideSpeed);
		}
	}else{
		$ID('q' + numericId).className='question';
		slideContent(numericId,(slideSpeed*-1));
		activeId = false;
	}	
}

function slideContent(inputId,direction)
{
	var obj =$ID('a' + inputId);
	var contentObj = $ID('ac' + inputId);
	height = obj.clientHeight;
	if(height==0)height = obj.offsetHeight;
	height = height + direction;
	rerunFunction = true;
	if(height>contentObj.offsetHeight){
		height = contentObj.offsetHeight;
		rerunFunction = false;
	}
	if(height<=1){
		height = 1;
		rerunFunction = false;
	}

	obj.style.height = height + 'px';
	var topPos = height - contentObj.offsetHeight;
	if(topPos>0)topPos=0;
	contentObj.style.top = topPos + 'px';
	if(rerunFunction){
		setTimeout('slideContent(' + inputId + ',' + direction + ')',timer);
	}else{
		if(height<=1){
			obj.style.display='none'; 
			if(objectIdToSlideDown && objectIdToSlideDown!=inputId){
				$ID('a' + objectIdToSlideDown).style.display='block';
				$ID('a' + objectIdToSlideDown).style.visibility='visible';
				slideContent(objectIdToSlideDown,slideSpeed);				
			}else{
				slideInProgress = false;
			}
		}else{
			activeId = inputId;
			slideInProgress = false;
		}
	}
}



function Vote(id, value) {
    var url = smurl+'storevote&id='+id+'&vote='+value;
	statusElem = $ID('vote'+id);
	tt = 'vote'+id;
	var d = statusElem.parentNode;
	co = statusElem.parentNode.parentNode;
	jx.get(url,response,'json');
	function response(data) {
		if (data.valid == true) {
			if (value == 0) {
				statusElem.innerHTML=data.msg;
				h = $ID('sm-comment-form-'+id+'').clientHeight;
				co.style.height = co.clientHeight + h - 15 + 'px';
			} else {
				statusElem.innerHTML=data.msg;
				co.style.height = co.clientHeight - 15 + 'px';
				setTimeout("fadeOut('tt')", 3000);
				return;
			}
		} else {
				statusElem.innerHTML=data.msg;
				co.style.height = co.clientHeight - 15 + 'px';
				setTimeout("fadeOut('tt')", 3000);
				return;
		}
	}
}

function comment(id) {
	var url = smurl+'comment';
	var params = 'id='+id+'&comment='+$F('sm-comment-'+id);
	cur = $ID('vote'+id);
	tt='vote'+id;
	jx.post(url,params,response,'json');
	function response(data) {
		if (data.valid == false) {
			msg = cur.parentNode.insertBefore(document.createElement('div'),cur);
			msg.className = 'sm-err-msg';
			tt = msg.id = 'sm-msg';
			msg.innerHTML = data.msg;			
			setTimeout("fadeOut('tt')", 3000)
			return;
			;
		} else {
			cur.className = 'sm-ok-msg'
			cur.innerHTML = data.msg;
			co.style.height = co.clientHeight - h + 'px';
			setTimeout("fadeOut('tt');", 3000);
			return;
		} 
	}
}

function addquestion() {
	catid = $F('smcatid'), itemid = $F('Itemid');
	var url = smurl+'addquestion&catid='+catid+'&Itemid='+itemid;
	statusElem = $ID('addquestion');
	var d = statusElem.parentNode;
	jx.get(url,response);
	function response(data) {
		statusElem.style.visibility='hidden';
		var f = d.appendChild(document.createElement('div'));
		f.innerHTML=data;
	}
	
}

function textChange() {
	var count = $F('count'); 	
	var a = $F('question').length;
	if((a)>count)$ID('question').value=$F('question').substring(0,count);
	$ID('t1').value=count-a;
}

function sendform() {
	var d = $ID('form-box');
	var loader = document.createElement('div');
	loader.className = 'sm-loader';
	$ID('sm-question-form').insertBefore(loader,d);
	if ($ID('send_mail')) {
		send_mail = $ID('send_mail').checked == true ? 1 : 0;
	} else {
		send_mail = null;
	}
	email = $ID('email') == null ? null : $F('email'); 
	created_by = $ID('created_by') == null ? null : $F('created_by');
	captcha = $ID('captcha') == null ? null : $F('captcha')
	var params = 'catid='+catid+'&question='+$F('question')+'&email='+email+'&created_by='+created_by+'&send_mail='+send_mail+'&captcha='+captcha+'&Itemid='+itemid;
	var url = smurl+'send';
	jx.post(url,params,response,'json');
	function response(data) {
		loader.parentNode.removeChild(loader);
		if (data.valid == false) {
			boxmsg = document.createElement('div');
			s = boxmsg.id = 'smfaq-msg';
			d.insertBefore(boxmsg,d.getElementsByTagName('div')[0]); 
			for (fail in data.items) {
				if (data.items[fail].status == 0) {
					var msg = boxmsg.appendChild(document.createElement('div'))
					msg.className = 'sm-err-msg';
					msg.innerHTML = data.items[fail].msg;
					$ID(data.items[fail].name).className = 'sm-form-error';
				}
				
			}
		setTimeout("fadeOut('s');",3000);
		unclass();
		} else {
			var boxmsg = document.createElement('div');
			tt = boxmsg.id = 'smfaq-msg';
			boxmsg.className = 'sm-ok-msg';
			boxmsg.innerHTML = data.msg;
			$ID('sm-question-form').parentNode.insertBefore(boxmsg,$ID('sm-question-form')); 
			$ID('sm-question-form').parentNode.removeChild($ID('sm-question-form'));
			//d.nextSibling.parentNode.removeChild(d.nextSibling);
			setTimeout("fadeOut('tt');", 3000);
		}
			
	}
}
function closeform() {
	var f = $ID('sm-question-form').parentNode;
	f.parentNode.removeChild(f);
	$ID('addquestion').style.visibility='visible';
}
function unclass() {
	var err = $ID('sm-question-form').getElementsByTagName('input');
	for(var no=0;no < err.length;no++){
		if (err[no].className == 'sm-form-error') 
		err[no].onchange=function() {this.className = ''}
	}
	if ($ID('question').className == 'sm-form-error') $ID('question').onchange=function(){this.className ='';}
}
function captha() {
	$ID('captchaimg').src = $ID('captchaimg').src.replace(/&ac=\d+/g, '&ac='+String(Math.floor(Math.random()*100000)));
}
function setOpacity(level,id) {
  element = $ID(id);
  element.style.opacity = level;
  element.style.MozOpacity = level;
  element.style.KhtmlOpacity = level;
  element.style.filter = "alpha(opacity=" + (level * 100) + ");";
  if (level < 0.05){
	  element.parentNode.removeChild(element);
	  return;
  }
}
function fadeOut(id) {
	var duration = 1000;  /* 1000 millisecond fade = 1 sec */
	var steps = 20;       /* number of opacity intervals   */
	var delay = 5000;     /* 5 sec delay before fading out */
	for (i = 0; i <= 1; i += (1 / steps)) {
	  setTimeout("setOpacity(" + (1 - i) + ',' +id+")", i * duration);
	}
} 
/******************Admin funnction*************************/
function noanswer() {
	var url = smurl+'shownoanswer&controller=admin&catid='+$F('smcatid')+'&Itemid='+$F('Itemid');
	if ($ID('smnopublish') != null) {
	$ID('smnopublish').parentNode.removeChild($ID('smnopublish')); 
	} 
	jx.get(url,response);
	function response(data) {
		no = $ID('sm-noanswer').parentNode.appendChild(document.createElement('div'));
		no.innerHTML = data;
	}
}
function del(id, img) {
	var url = smurl+'delete&controller=admin&id='+id;
	el = $ID('sm-'+id);
	img.src = 'components/com_smfaq/images/ajax-loader.gif'
	jx.get(url,response);
	function response(data) {
		el.innerHTML = data;
		setTimeout("el.parentNode.removeChild(el);",2000);
	}
}

window.onload = SmFaqinit;
