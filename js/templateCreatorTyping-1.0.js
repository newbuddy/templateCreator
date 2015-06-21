/*
 * @name Template Creator
 *
 * @author Faisal Abbas
 * @version 1.0
 *
 * Copyright 2014 Faisal Abbas. All rights reserved.
 *
 * To use this file you must to buy a licence at http://codecanyon.net
 *
 * Date: Sun Feb 16 12:57:00 2014
 */

var capsLock = 0, shiftPressed = 0, show = 1, hide = 0, blink, curText, nonSelectableElement;

document.onkeydown = checkKey;
document.onkeyup = keyUp;
	
function keyUp(e){
	if(e.which == 16)
		shiftPressed = 0;
}

function textEditing(param,contenttext){
	removeBlink();
	document.getElementById(param).innerHTML = contenttext+'<b class="blink">|</b>';
}
blink = setInterval(function (){blinkText(); }, 500);

function blinkText(){
	if(show == 1){
		if(document.getElementsByClassName('blink')[0] != null){
			document.getElementsByClassName('blink')[0].style.display = 'none';
			show = 0;
			hide = 1;
		}
	}else if(hide == 1){
		if(document.getElementsByClassName('blink')[0] != null){
			document.getElementsByClassName('blink')[0].style.display = 'inline';
			show = 1;
			hide = 0;
		}
	}
}

function checkKey(e){
   
	if(e.shiftKey==1){
		shiftPressed = 1;
	}
   switch(e.which){
   
	 case 8: {
	   
		deleteLastChar();
	    break;
	 }
	 case 20: {
	    if(capsLock == 0)
			capsLock = 1;
		else if(capsLock == 1)
			capsLock = 0;
	    break;
	 }
     case 65: {
	    if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'a';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'A';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 66: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'b';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'B';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 67: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'c';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'C';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 68: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'd';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'D';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 69: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'e';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'E';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 70: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'f';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'F';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 71: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'g';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'G';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 72: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'h';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'H';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 73: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'i';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'I';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 74: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'j';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'J';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 75: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'k';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'K';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 76: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'l';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'L';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 77: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'm';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'M';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 78: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'n';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'N';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 79: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'o';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'O';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 80: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'p';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'P';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 81: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'q';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'Q';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 82: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'r';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'R';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 83: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 's';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'S';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 84: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 't';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'T';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 85: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'u';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'U';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 86: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'v';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'V';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 87: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'w';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'W';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 88: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'x';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'X';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 89: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'y';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'Y';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 90: {
		if(capsLock == 0 && shiftPressed == 0){
			addAlphabet = 'z';
		}else if(capsLock == 1 || shiftPressed == 1){
			addAlphabet = 'Z';
		}
		updateText(addAlphabet);
	    break;
	 }
	 case 48: {
		if(shiftPressed == 0){
			addAlphabet = '0';
		}else if(shiftPressed == 1){
			addAlphabet = ')';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 49: {
		if(shiftPressed == 0){
			addAlphabet = '1';
		}else if(shiftPressed == 1){
			addAlphabet = '!';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 50: {
		if(shiftPressed == 0){
			addAlphabet = '2';
		}else if(shiftPressed == 1){
			addAlphabet = '@';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 51: {
		if(shiftPressed == 0){
			addAlphabet = '3';
		}else if(shiftPressed == 1){
			addAlphabet = '#';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 52: {
		if(shiftPressed == 0){
			addAlphabet = '4';
		}else if(shiftPressed == 1){
			addAlphabet = '$';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 53: {
		if(shiftPressed == 0){
			addAlphabet = '5';
		}else if(shiftPressed == 1){
			addAlphabet = '%';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 54: {
		if(shiftPressed == 0){
			addAlphabet = '6';
		}else if(shiftPressed == 1){
			addAlphabet = '^';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 55: {
		if(shiftPressed == 0){
			addAlphabet = '7';
		}else if(shiftPressed == 1){
			addAlphabet = '&';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 56: {
		if(shiftPressed == 0){
			addAlphabet = '8';
		}else if(shiftPressed == 1){
			addAlphabet = '*';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 57: {
		if(shiftPressed == 0){
			addAlphabet = '9';
		}else if(shiftPressed == 1){
			addAlphabet = '(';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 58: {
		addAlphabet = '0';
		updateText(addAlphabet);
		break;
	 }
	 case 97: {
		addAlphabet = '1';
		updateText(addAlphabet);
		break;
	 }
	 case 98: {
		addAlphabet = '2';
		updateText(addAlphabet);
		break;
	 }
	 case 99: {
		addAlphabet = '3';
		updateText(addAlphabet);
		break;
	 }
	 case 100: {
		addAlphabet = '4';
		updateText(addAlphabet);
		break;
	 }
	 case 101: {
		addAlphabet = '5';
		updateText(addAlphabet);
		break;
	 }
	 case 102: {
		addAlphabet = '6';
		updateText(addAlphabet);
		break;
	 }
	 case 103: {
		addAlphabet = '7';
		updateText(addAlphabet);
		break;
	 }
	 case 104: {
		addAlphabet = '8';
		updateText(addAlphabet);
		break;
	 }
	 case 105: {
		addAlphabet = '9';
		updateText(addAlphabet);
		break;
	 }
	 case 106: {
		addAlphabet = '*';
		updateText(addAlphabet);
		break;
	 }
	 case 107: {
		addAlphabet = '+';
		updateText(addAlphabet);
		break;
	 }
	 case 109: {
		addAlphabet = '-';
		updateText(addAlphabet);
		break;
	 }
	 case 110: {
		addAlphabet = '.';
		updateText(addAlphabet);
		break;
	 }
	 case 190: {
		if(shiftPressed == 0){
			addAlphabet = '.';
		}else if(shiftPressed == 1){
			addAlphabet = '>';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 188: {
		if(shiftPressed == 0){
			addAlphabet = ',';
		}else if(shiftPressed == 1){
			addAlphabet = '<';
		}
		updateText(addAlphabet);
		break;
	 }
     case 32: {
		addAlphabet = ' ';
		updateText(addAlphabet);
		break;
	 }
	
	 case 191: {
		if(shiftPressed == 0){
			addAlphabet = '/';
		}else if(shiftPressed == 1){
			addAlphabet = '?';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 222: {
		if(shiftPressed == 0){
			addAlphabet = "'";
		}else if(shiftPressed == 1){
			addAlphabet = '"';
		}
		updateText(addAlphabet);
		break;
	 }
	 
	 case 186: {
		if(shiftPressed == 0){
			addAlphabet = ';';
		}else if(shiftPressed == 1){
			addAlphabet = ':';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 189: {
		if(shiftPressed == 0){
			addAlphabet = '-';
		}else if(shiftPressed == 1){
			addAlphabet = '_';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 187: {
		if(shiftPressed == 0){
			addAlphabet = '=';
		}else if(shiftPressed == 1){
			addAlphabet = '+';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 219: {
		if(shiftPressed == 0){
			addAlphabet = '[';
		}else if(shiftPressed == 1){
			addAlphabet = '}';
		}
		updateText(addAlphabet);
		break;
	 }
	 case 221: {
		if(shiftPressed == 0){
			addAlphabet = ']';
		}else if(shiftPressed == 1){
			addAlphabet = '}';
		}
		updateText(addAlphabet);
		break;
	 }
	 
   }
     
}

function removeBlink(){
	if(document.getElementById('content-text1') != null){
		document.getElementById('content-text1').innerHTML = contentText1Text;
	}
	if(document.getElementById('content-text2') != null){
		document.getElementById('content-text2').innerHTML = contentText2Text;
	}
	if(document.getElementById('footer') != null){
		document.getElementById('footer').innerHTML = FooterText;
	}
	if(document.getElementById('selected') != null){
		document.getElementById('selected').innerHTML = SelectedText;
	}
	if(document.getElementById('sbm1h2') != null){
		document.getElementById('sbm1h2').innerHTML = Sbm1h2Text;
	}
	if(document.getElementById('sbm2h2') != null){
		document.getElementById('sbm2h2').innerHTML = Sbm2h2Text;
	}
	if(document.getElementById('sbm3h2') != null){
		document.getElementById('sbm3h2').innerHTML = Sbm3h2Text;
	}
	if(document.getElementById('sbm4h2') != null){
		document.getElementById('sbm4h2').innerHTML = Sbm4h2Text;
	}
	if(document.getElementById('sbm5h2') != null){
		document.getElementById('sbm5h2').innerHTML = Sbm5h2Text;
	}
	if(document.getElementById('sbm6h2') != null){
		document.getElementById('sbm6h2').innerHTML = Sbm6h2Text;
	}
	if(document.getElementById('product1') != null){
		document.getElementById('product1').innerHTML = product1Text;
	}
	if(document.getElementById('product2') != null){
		document.getElementById('product2').innerHTML = product2Text;
	}
	if(document.getElementById('product3') != null){
		document.getElementById('product3').innerHTML = product3Text;
	}
	if(document.getElementById('partner1') != null){
		document.getElementById('partner1').innerHTML = partner1Text;
	}
	if(document.getElementById('partner2') != null){
		document.getElementById('partner2').innerHTML = partner2Text;
	}
	if(document.getElementById('partner3') != null){
		document.getElementById('partner3').innerHTML = partner3Text;
	}
	if(document.getElementById('brand1') != null){
		document.getElementById('brand1').innerHTML = brand1Text;
	}
	if(document.getElementById('brand2') != null){
		document.getElementById('brand2').innerHTML = brand2Text;
	}
	if(document.getElementById('brand3') != null){
		document.getElementById('brand3').innerHTML = brand3Text;
	}
	if(document.getElementById('brand4') != null){
		document.getElementById('brand4').innerHTML = brand4Text;
	}
	if(document.getElementById('brand5') != null){
		document.getElementById('brand5').innerHTML = brand5Text;
	}
	if(document.getElementById('latest1') != null){
		document.getElementById('latest1').innerHTML = latest1Text;
	}
	if(document.getElementById('latest2') != null){
		document.getElementById('latest2').innerHTML = latest2Text;
	}
	if(document.getElementById('latest3') != null){
		document.getElementById('latest3').innerHTML = latest3Text;
	}
	if(document.getElementById('topnews1') != null){
		document.getElementById('topnews1').innerHTML = topnews1Text;
	}
	if(document.getElementById('topnews2') != null){
		document.getElementById('topnews2').innerHTML = topnews2Text;
	}
	if(document.getElementById('topnews3') != null){
		document.getElementById('topnews3').innerHTML = topnews3Text;
	}
	if(document.getElementById('topnews4') != null){
		document.getElementById('topnews4').innerHTML = topnews4Text;
	}
	if(document.getElementById('about') != null){
		document.getElementById('about').innerHTML = aboutText;
	}
	if(document.getElementById('contact') != null){
		document.getElementById('contact').innerHTML = contactText;
	}
	if(document.getElementById('privacy') != null){
		document.getElementById('privacy').innerHTML = privacyText;
	}
}
function nonSelectableEditing(elementId){
	
	if(moving == 1)
		return false;
	if(elementId == 'product1'){
		textEditing(elementId,product1Text);
		nonSelectableElement = 'product1';
	}
	if(elementId == 'product2'){
		textEditing(elementId,product2Text);
		nonSelectableElement = 'product2';
	}
	if(elementId == 'product3'){
		textEditing(elementId,product3Text);
		nonSelectableElement = 'product3';
	}
	if(elementId == 'partner1'){
		textEditing(elementId,partner1Text);
		nonSelectableElement = 'partner1';
	}
	if(elementId == 'partner2'){
		textEditing(elementId,partner2Text);
		nonSelectableElement = 'partner2';
	}
	if(elementId == 'partner3'){
		textEditing(elementId,partner3Text);
		nonSelectableElement = 'partner3';
	}
	if(elementId == 'brand1'){
		textEditing(elementId,brand1Text);
		nonSelectableElement = 'brand1';
	}
	if(elementId == 'brand2'){
		textEditing(elementId,brand2Text);
		nonSelectableElement = 'brand2';
	}
	if(elementId == 'brand3'){
		textEditing(elementId,brand3Text);
		nonSelectableElement = 'brand3';
	}
	if(elementId == 'brand4'){
		textEditing(elementId,brand4Text);
		nonSelectableElement = 'brand4';
	}
	if(elementId == 'brand5'){
		textEditing(elementId,brand5Text);
		nonSelectableElement = 'brand5';
	}
	if(elementId == 'latest1'){
		textEditing(elementId,latest1Text);
		nonSelectableElement = 'latest1';
	}
	if(elementId == 'latest2'){
		textEditing(elementId,latest2Text);
		nonSelectableElement = 'latest2';
	}
	if(elementId == 'latest3'){
		textEditing(elementId,latest3Text);
		nonSelectableElement = 'latest3';
	}
	if(elementId == 'topnews1'){
		textEditing(elementId,topnews1Text);
		nonSelectableElement = 'topnews1';
	}
	if(elementId == 'topnews2'){
		textEditing(elementId,topnews2Text);
		nonSelectableElement = 'topnews2';
	}
	if(elementId == 'topnews3'){
		textEditing(elementId,topnews3Text);
		nonSelectableElement = 'topnews3';
	}
	if(elementId == 'topnews4'){
		textEditing(elementId,topnews4Text);
		nonSelectableElement = 'topnews4';
	}
	if(elementId == 'about'){
		textEditing(elementId,aboutText);
		nonSelectableElement = 'about';
	}
	if(elementId == 'contact'){
		textEditing(elementId,contactText);
		nonSelectableElement = 'contact';
	}
	if(elementId == 'privacy'){
		textEditing(elementId,privacyText);
		nonSelectableElement = 'privacy';
	}

}

function deleteLastChar(){
	
	if(selectedElement == 'content-text1'){
		var res = contentText1Text.slice(0,contentText1Text.length-1);
		contentText1Text = res;
		document.getElementById(selectedElement).innerHTML = contentText1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'content-text2'){
		var res = contentText2Text.slice(0,contentText2Text.length-1);
		contentText2Text = res;
		document.getElementById(selectedElement).innerHTML = contentText2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'footer'){
		var res = FooterText.slice(0,FooterText.length-1);
		FooterText = res;
		document.getElementById(selectedElement).innerHTML = FooterText+'<b class="blink">|</b>';
	}
	if(selectedElement == 'selected'){
		var res = SelectedText.slice(0,SelectedText.length-1);
		SelectedText = res;
		document.getElementById(selectedElement).innerHTML = SelectedText+'<b class="blink">|</b>';
	}
	if(selectedElement == 'content-text2'){
		var res = contentText2Text.slice(0,contentText2Text.length-1);
		contentText2Text = res;
		document.getElementById(selectedElement).innerHTML = contentText2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm1h2'){
		var res = Sbm1h2Text.slice(0,Sbm1h2Text.length-1);
		Sbm1h2Text = res;
		document.getElementById(selectedElement).innerHTML = Sbm1h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm2h2'){
		var res = Sbm2h2Text.slice(0,Sbm2h2Text.length-1);
		Sbm2h2Text = res;
		document.getElementById(selectedElement).innerHTML = Sbm2h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm3h2'){
		var res = Sbm3h2Text.slice(0,Sbm3h2Text.length-1);
		Sbm3h2Text = res;
		document.getElementById(selectedElement).innerHTML = Sbm3h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm4h2'){
		var res = Sbm4h2Text.slice(0,Sbm4h2Text.length-1);
		Sbm4h2Text = res;
		document.getElementById(selectedElement).innerHTML = Sbm4h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm5h2'){
		var res = Sbm5h2Text.slice(0,Sbm5h2Text.length-1);
		Sbm5h2Text = res;
		document.getElementById(selectedElement).innerHTML = Sbm5h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm6h2'){
		var res = Sbm6h2Text.slice(0,Sbm6h2Text.length-1);
		Sbm6h2Text = res;
		document.getElementById(selectedElement).innerHTML = Sbm6h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module1' && nonSelectableElement == 'product1'){
		var res = product1Text.slice(0,product1Text.length-1);
		product1Text = res;
		document.getElementById(nonSelectableElement).innerHTML = product1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module1' && nonSelectableElement == 'product2'){
		var res = product2Text.slice(0,product2Text.length-1);
		product2Text = res;
		document.getElementById(nonSelectableElement).innerHTML = product2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module1' && nonSelectableElement == 'product3'){
		var res = product3Text.slice(0,product3Text.length-1);
		product3Text = res;
		document.getElementById(nonSelectableElement).innerHTML = product3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module5' && nonSelectableElement == 'partner1'){
		var res = partner1Text.slice(0,partner1Text.length-1);
		partner1Text = res;
		document.getElementById(nonSelectableElement).innerHTML = partner1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module5' && nonSelectableElement == 'partner2'){
		var res = partner2Text.slice(0,partner2Text.length-1);
		partner2Text = res;
		document.getElementById(nonSelectableElement).innerHTML = partner2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module5' && nonSelectableElement == 'partner3'){
		var res = partner3Text.slice(0,partner3Text.length-1);
		partner3Text = res;
		document.getElementById(nonSelectableElement).innerHTML = partner3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand1'){
		var res = brand1Text.slice(0,brand1Text.length-1);
		brand1Text = res;
		document.getElementById(nonSelectableElement).innerHTML = brand1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand2'){
		var res = brand2Text.slice(0,brand2Text.length-1);
		brand2Text = res;
		document.getElementById(nonSelectableElement).innerHTML = brand2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand3'){
		var res = brand3Text.slice(0,brand3Text.length-1);
		brand3Text = res;
		document.getElementById(nonSelectableElement).innerHTML = brand3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand4'){
		var res = brand4Text.slice(0,brand4Text.length-1);
		brand4Text = res;
		document.getElementById(nonSelectableElement).innerHTML = brand4Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand5'){
		var res = brand5Text.slice(0,brand5Text.length-1);
		brand5Text = res;
		document.getElementById(nonSelectableElement).innerHTML = brand5Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module3' && nonSelectableElement == 'latest1'){
		var res = latest1Text.slice(0,latest1Text.length-1);
		latest1Text = res;
		document.getElementById(nonSelectableElement).innerHTML = latest1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module3' && nonSelectableElement == 'latest2'){
		var res = latest2Text.slice(0,latest2Text.length-1);
		latest2Text = res;
		document.getElementById(nonSelectableElement).innerHTML = latest2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module3' && nonSelectableElement == 'latest3'){
		var res = latest3Text.slice(0,latest3Text.length-1);
		latest3Text = res;
		document.getElementById(nonSelectableElement).innerHTML = latest3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module2' && nonSelectableElement == 'topnews1'){
		var res = topnews1Text.slice(0,topnews1Text.length-1);
		topnews1Text = res;
		document.getElementById(nonSelectableElement).innerHTML = topnews1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module2' && nonSelectableElement == 'topnews2'){
		var res = topnews2Text.slice(0,topnews2Text.length-1);
		topnews2Text = res;
		document.getElementById(nonSelectableElement).innerHTML = topnews2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module2' && nonSelectableElement == 'topnews3'){
		var res = topnews3Text.slice(0,topnews3Text.length-1);
		topnews3Text = res;
		document.getElementById(nonSelectableElement).innerHTML = topnews3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module2' && nonSelectableElement == 'topnews4'){
		var res = topnews4Text.slice(0,topnews4Text.length-1);
		topnews4Text = res;
		document.getElementById(nonSelectableElement).innerHTML = topnews4Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'navigation' && nonSelectableElement == 'about'){
		var res = aboutText.slice(0,aboutText.length-1);
		aboutText = res;
		document.getElementById(nonSelectableElement).innerHTML = aboutText+'<b class="blink">|</b>';
	}
	if(selectedElement == 'navigation' && nonSelectableElement == 'contact'){
		var res = contactText.slice(0,contactText.length-1);
		contactText = res;
		document.getElementById(nonSelectableElement).innerHTML = contactText+'<b class="blink">|</b>';
	}
	if(selectedElement == 'navigation' && nonSelectableElement == 'privacy'){
		var res = privacyText.slice(0,privacyText.length-1);
		privacyText = res;
		document.getElementById(nonSelectableElement).innerHTML = privacyText+'<b class="blink">|</b>';
	}

}
	
function updateText(alphabet){
		
	if(selectedElement == 'content-text1'){
		contentText1Text += alphabet;
		document.getElementById(selectedElement).innerHTML = contentText1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'content-text2'){
		contentText2Text += alphabet;
		document.getElementById(selectedElement).innerHTML = contentText2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'footer'){
		FooterText += alphabet;
		document.getElementById(selectedElement).innerHTML = FooterText+'<b class="blink">|</b>';
	}
	if(selectedElement == 'selected'){
		SelectedText += alphabet;
		document.getElementById(selectedElement).innerHTML = SelectedText+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm1h2'){
		Sbm1h2Text += alphabet;
		document.getElementById(selectedElement).innerHTML = Sbm1h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm2h2'){
		Sbm2h2Text += alphabet;
		document.getElementById(selectedElement).innerHTML = Sbm2h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm3h2'){
		Sbm3h2Text += alphabet;
		document.getElementById(selectedElement).innerHTML = Sbm3h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm4h2'){
		Sbm4h2Text += alphabet;
		document.getElementById(selectedElement).innerHTML = Sbm4h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm5h2'){
		Sbm5h2Text += alphabet;
		document.getElementById(selectedElement).innerHTML = Sbm5h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'sbm6h2'){
		Sbm6h2Text += alphabet;
		document.getElementById(selectedElement).innerHTML = Sbm6h2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module1' && nonSelectableElement == 'product1'){
		product1Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = product1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module1' && nonSelectableElement == 'product2'){
		product2Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = product2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module1' && nonSelectableElement == 'product3'){
		product3Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = product3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module5' && nonSelectableElement == 'partner1'){
		partner1Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = partner1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module5' && nonSelectableElement == 'partner2'){
		partner2Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = partner2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module5' && nonSelectableElement == 'partner3'){
		partner3Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = partner3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand1'){
		brand1Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = brand1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand2'){
		brand2Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = brand2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand3'){
		brand3Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = brand3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand4'){
		brand4Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = brand4Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module6' && nonSelectableElement == 'brand5'){
		brand5Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = brand5Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module3' && nonSelectableElement == 'latest1'){
		latest1Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = latest1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module3' && nonSelectableElement == 'latest2'){
		latest2Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = latest2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module3' && nonSelectableElement == 'latest3'){
		latest3Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = latest3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module2' && nonSelectableElement == 'topnews1'){
		topnews1Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = topnews1Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module2' && nonSelectableElement == 'topnews2'){
		topnews2Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = topnews2Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module2' && nonSelectableElement == 'topnews3'){
		topnews3Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = topnews3Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'side-bar-module2' && nonSelectableElement == 'topnews4'){
		topnews4Text += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = topnews4Text+'<b class="blink">|</b>';
	}
	if(selectedElement == 'navigation' && nonSelectableElement == 'about'){
		aboutText += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = aboutText+'<b class="blink">|</b>';
	}
	if(selectedElement == 'navigation' && nonSelectableElement == 'contact'){
		contactText += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = contactText+'<b class="blink">|</b>';
	}
	if(selectedElement == 'navigation' && nonSelectableElement == 'privacy'){
		privacyText += alphabet;
		document.getElementById(nonSelectableElement).innerHTML = privacyText+'<b class="blink">|</b>';
	}
}
