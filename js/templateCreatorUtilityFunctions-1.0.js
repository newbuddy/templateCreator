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
 
function removeElement(){
	var r = confirm("Are you sure you want to delete this element!");
	if (r == true)
	{
		var removeElement = document.getElementById(selectedElement);
		removeElement.parentNode.removeChild(removeElement);
		var obj = document.getElementById('theme-page');
		selectElement(obj);
	}
	else
	{
		return false;
	}
}

function loadCode(obj){
	code = document.getElementById('code');
	code.textContent = makeCode(obj.value);
}

function setInputBg(obj){
	hideColors();
	setAllInputBg();
	obj.style.background = "pink";
}

function bgForAllBrowsers(dir,color,ele){
	document.getElementById('gradientTopWhite').style.background = "linear-gradient(top, #fff, "+ele+")";
	document.getElementById('gradientTopWhite').style.background = "-webkit-linear-gradient(top, #fff, "+ele+")";
	document.getElementById('gradientTopWhite').style.background = "-moz-linear-gradient(top, #fff, "+ele+")";
	document.getElementById('gradientTopWhite').style.background = "-o-linear-gradient(top, #fff, "+ele+")";
	
	document.getElementById('gradientTopBlack').style.background = "linear-gradient(top, #000, "+ele+")";
	document.getElementById('gradientTopBlack').style.background = "-webkit-linear-gradient(top, #000, "+ele+")";
	document.getElementById('gradientTopBlack').style.background = "-moz-linear-gradient(top, #000, "+ele+")";
	document.getElementById('gradientTopBlack').style.background = "-o-linear-gradient(top, #000, "+ele+")";
	
	document.getElementById('gradientBottomWhite').style.background = "linear-gradient(bottom, #fff, "+ele+")";
	document.getElementById('gradientBottomWhite').style.background = "-webkit-linear-gradient(bottom, #fff, "+ele+")";
	document.getElementById('gradientBottomWhite').style.background = "-moz-linear-gradient(bottom, #fff, "+ele+")";
	document.getElementById('gradientBottomWhite').style.background = "-o-linear-gradient(bottom, #fff, "+ele+")";
	
	document.getElementById('gradientBottomBlack').style.background = "linear-gradient(bottom, #000, "+ele+")";
	document.getElementById('gradientBottomBlack').style.background = "-webkit-linear-gradient(bottom, #000, "+ele+")";
	document.getElementById('gradientBottomBlack').style.background = "-moz-linear-gradient(bottom, #000, "+ele+")";
	document.getElementById('gradientBottomBlack').style.background = "-o-linear-gradient(bottom, #000, "+ele+")";
	
	document.getElementById(selectedElement).style.background = "linear-gradient("+dir+", "+color+", "+ele+")";
	document.getElementById(selectedElement).style.background = "-webkit-linear-gradient("+dir+", "+color+", "+ele+")";
	document.getElementById(selectedElement).style.background = "-moz-linear-gradient("+dir+", "+color+", "+ele+")";
	document.getElementById(selectedElement).style.background = "-o-linear-gradient("+dir+", "+color+", "+ele+")";
}

function getBg(a,b,c){
	if(a == 0){
		c = c+';';
		return c;
	}else if(a == 1){
	
		if(b == 'topwhite'){
			c = "-webkit-linear-gradient(top, #fff, "+c+");background:-moz-linear-gradient(top, #fff,"+c+");background:linear-gradient(top, #fff, "+c+");background:-o-linear-gradient(top, #fff,"+c+");";
		}
		if(b == 'bottomwhite'){
			c = "-webkit-linear-gradient(bottom, #fff, "+c+");background:-moz-linear-gradient(bottom, #fff,"+c+");background:linear-gradient(bottom, #fff, "+c+");background:-o-linear-gradient(bottom, #fff,"+c+");";
		}
		if(b == 'topblack'){
			c = "-webkit-linear-gradient(top, #000, "+c+");background:-moz-linear-gradient(top, #000,"+c+");background:linear-gradient(top, #000, "+c+");background:-o-linear-gradient(top, #000,"+c+");";
		}
		if(b == 'bottomblack'){
			c = "-webkit-linear-gradient(bottom, #000, "+c+");background:-moz-linear-gradient(bottom, #000,"+c+");background:linear-gradient(bottom, #000, "+c+");background:-o-linear-gradient(bottom, #000,"+c+");";
		}
		return c;
	}
}

function getBorder(a,b,c){
	if(b == 'All'){
		var elementBorder = 'border:'+a+'px solid '+c;
	}
	if(b == 'Top'){
		var elementBorder = 'border-top:'+a+'px solid '+c;
	}
	if(b == 'Bottom'){
		var elementBorder = 'border-bottom:'+a+'px solid '+c;
	}
	if(b == 'Left'){
		var elementBorder = 'border-left:'+a+'px solid '+c;
	}
	if(b == 'Right'){
		var elementBorder = 'border-right:'+a+'px solid '+c;
	}
	if(b == 'Top-Bottom'){
		var elementBorder = 'border-top:'+a+'px solid '+c+';border-bottom:'+a+'px solid '+c;
	}
	if(b == 'Top-Left'){
		var elementBorder = 'border-top:'+a+'px solid '+c+';border-left:'+a+'px solid '+c;
	}
	if(b == 'Top-Right'){
		var elementBorder = 'border-top:'+a+'px solid '+c+';border-right:'+a+'px solid '+c;
	}
	if(b == 'Bottom-Left'){
		var elementBorder = 'border-bottom:'+a+'px solid '+c+';border-left:'+a+'px solid '+c;
	}
	if(b == 'Bottom-Right'){
		var elementBorder = 'border-bottom:'+a+'px solid '+c+';border-right:'+a+'px solid '+c;
	}
	if(b == 'Left-Right'){
		var elementBorder = 'border-left:'+a+'px solid '+c+';border-right:'+a+'px solid '+c;
	}
	if(b == 'Top-Bottom-Left'){
		var elementBorder = 'border-left:'+a+'px solid '+c+';border-top:'+a+'px solid '+c+';border-bottom:'+a+'px solid '+c;
	}
	if(b == 'Top-Bottom-Right'){
		var elementBorder = 'border-right:'+a+'px solid '+c+';border-top:'+a+'px solid '+c+';border-bottom:'+a+'px solid '+c;
	}
	if(b == 'Top-Left-Right'){
		var elementBorder = 'border-right:'+a+'px solid '+c+';border-top:'+a+'px solid '+c+';border-left:'+a+'px solid '+c;
	}
	if(b == 'Bottom-Left-Right'){
		var elementBorder = 'border-right:'+a+'px solid '+c+';border-left:'+a+'px solid '+c+';border-bottom:'+a+'px solid '+c;
	}
	return elementBorder;
}

function hideBtns(){
	for(var a=1;a<=13;a++)
		document.getElementById('btns-'+a).style.display = "none";
}

function showBtns(obj,id){
	hideBtns();
	colorslidingdown = 1;
	hideColors(0);
	if(obj.value != 'auto' && obj.value != 'Fixed'){
		document.getElementById(id).style.display = "block";
	}
	setAllInputBg();
	obj.style.background = "pink";
}

function hideColors(codeSliding){
	colorsSlideIntervalDown = setInterval(function (){colorsSlideDown(codeSliding);}, 35);
}

function showColors(obj){
	document.getElementById('options').style.display = "block";
	setAllInputBg();
	obj.style.background = "pink";
	if(obj.id == 'inputTextColor'){
		clr = 1;
		bg = 0;
		borderbg = 0;
	}else if(obj.id == 'inputBackground'){
		bg = 1;
		clr = 0;
		borderbg = 0;
	}else if(obj.id == 'inputBorderBg'){
		bg = 0;
		clr = 0;
		borderbg = 1;
	}
	hideBtns();
	colorsSlideIntervalUp = setInterval(function (){colorsSlideUp();}, 35);
}

function applyTopWhite(){
	var gradientTopWhite = document.getElementById('gradientTopWhite');
	var gradientBottomWhite = document.getElementById('gradientBottomWhite');
	var gradientTopBlack = document.getElementById('gradientTopBlack');
	var gradientBottomBlack = document.getElementById('gradientBottomBlack');			
	gradientTopWhite.style.display = 'block';
	gradientBottomWhite.style.display = 'block';
	gradientTopBlack.style.display = 'block';
	gradientBottomBlack.style.display = 'block';
	gradientTopWhite.style.outline = '3px solid orange';
}

function applyBottomWhite(){
	var gradientTopWhite = document.getElementById('gradientTopWhite');
	var gradientBottomWhite = document.getElementById('gradientBottomWhite');
	var gradientTopBlack = document.getElementById('gradientTopBlack');
	var gradientBottomBlack = document.getElementById('gradientBottomBlack');			
	gradientTopWhite.style.display = 'block';
	gradientBottomWhite.style.display = 'block';
	gradientTopBlack.style.display = 'block';
	gradientBottomBlack.style.display = 'block';
	gradientBottomWhite.style.outline = '3px solid orange';
}

function applyTopBlack(){
	var gradientTopWhite = document.getElementById('gradientTopWhite');
	var gradientBottomWhite = document.getElementById('gradientBottomWhite');
	var gradientTopBlack = document.getElementById('gradientTopBlack');
	var gradientBottomBlack = document.getElementById('gradientBottomBlack');		
	gradientTopWhite.style.display = 'block';
	gradientBottomWhite.style.display = 'block';
	gradientTopBlack.style.display = 'block';
	gradientBottomBlack.style.display = 'block';
	gradientTopBlack.style.outline = '3px solid orange';
}

function applyBottomBlack(){
	var gradientTopWhite = document.getElementById('gradientTopWhite');
	var gradientBottomWhite = document.getElementById('gradientBottomWhite');
	var gradientTopBlack = document.getElementById('gradientTopBlack');
	var gradientBottomBlack = document.getElementById('gradientBottomBlack');
	gradientTopWhite.style.display = 'block';
	gradientBottomWhite.style.display = 'block';
	gradientTopBlack.style.display = 'block';
	gradientBottomBlack.style.display = 'block';
	gradientBottomBlack.style.outline = '3px solid orange';
}

function hideGradientBoxes(){
	var gradientTopWhite = document.getElementById('gradientTopWhite');
	var gradientBottomWhite = document.getElementById('gradientBottomWhite');
	var gradientTopBlack = document.getElementById('gradientTopBlack');
	var gradientBottomBlack = document.getElementById('gradientBottomBlack');		
	gradientTopWhite.style.display = 'none';
	gradientBottomWhite.style.display = 'none';
	gradientTopBlack.style.display = 'none';
	gradientBottomBlack.style.display = 'none';
}

function setAllInputBg(){
	document.getElementById('inputFontFamily').style.background = "white";
	document.getElementById('inputTextColor').style.background = "white";
	document.getElementById('inputFontSize').style.background = "white";
	document.getElementById('inputBackground').style.background = "white";
	document.getElementById('inputMarginTop').style.background = "white";
	document.getElementById('inputMarginLeft').style.background = "white";
	document.getElementById('inputMarginRight').style.background = "white";
	document.getElementById('inputMarginBottom').style.background = "white";
	document.getElementById('inputPaddingTop').style.background = "white";
	document.getElementById('inputPaddingLeft').style.background = "white";
	document.getElementById('inputPaddingRight').style.background = "white";
	document.getElementById('inputPaddingBottom').style.background = "white";
	document.getElementById('inputOpacity').style.background = "white";
	document.getElementById('inputWidth').style.background = "white";
	document.getElementById('inputHeight').style.background = "white";
	document.getElementById('inputBorderWeight').style.background = "white";
	document.getElementById('inputBorderBg').style.background = "white";
	document.getElementById('inputBorderRadiusTopLeft').style.background = "white";
	document.getElementById('inputBorderRadiusTopRight').style.background = "white";
	document.getElementById('inputBorderRadiusBottomLeft').style.background = "white";
	document.getElementById('inputBorderRadiusBottomRight').style.background = "white";
}

function showAllAttributes(){
	document.getElementsByClassName('Ptb')[0].style.display = "table-row";
	document.getElementsByClassName('Plr')[0].style.display = "table-row";
	document.getElementsByClassName('Tcfs')[0].style.display = "table-row";
	document.getElementsByClassName('Hw')[0].style.display = "table-row";
	document.getElementsByClassName('Ff')[0].style.display = "table-row";
	document.getElementsByClassName('Mlr')[0].style.display = "table-row";
	document.getElementsByClassName('Mtb')[0].style.display = "table-row";
	document.getElementsByClassName('Bgo')[0].style.display = "table-row";
	document.getElementsByClassName('Br')[0].style.display = "table-row";
	document.getElementsByClassName('B-radius')[0].style.display = "table-row";
}
function setBackupBackground(clr){
	if(selectedElement == 'theme-page'){
		initThemePageBackupBackground = clr;
	}
	if(selectedElement == 'header'){
		initHeaderBackupBackground = clr;
	}
	if(selectedElement == 'footer'){
		initFooterBackupBackground = clr;
	}
	if(selectedElement == 'navigation'){
		initNavigationBackupBackground = clr;
	}
	if(selectedElement == 'content-text1'){
		initContentText1BackupBackground = clr;
	}
	if(selectedElement == 'content-text2'){
		initContentText2BackupBackground = clr;
	}
	if(selectedElement == 'side-bar-module1'){
		initSideBarModule1BackupBackground = clr;
	}
	if(selectedElement == 'side-bar-module2'){
		initSideBarModule2BackupBackground = clr;
	}
	if(selectedElement == 'side-bar-module3'){
		initSideBarModule3BackupBackground = clr;
	}
	if(selectedElement == 'side-bar-module4'){
		initSideBarModule4BackupBackground = clr;
	}
	if(selectedElement == 'side-bar-module5'){
		initSideBarModule5BackupBackground = clr;
	}
	if(selectedElement == 'side-bar-module6'){
		initSideBarModule6BackupBackground = clr;
	}
	if(selectedElement == 'sbm1h2'){
		initSbm1h2BackupBackground = clr;
	}
	if(selectedElement == 'sbm2h2'){
		initSbm2h2BackupBackground = clr;
	}
	if(selectedElement == 'sbm3h2'){
		initSbm3h2BackupBackground = clr;
	}
	if(selectedElement == 'sbm4h2'){
		initSbm4h2BackupBackground = clr;
	}
	if(selectedElement == 'sbm5h2'){
		initSbm5h2BackupBackground = clr;
	}
	if(selectedElement == 'sbm6h2'){
		initSbm6h2BackupBackground = clr;
	}
}

function changeFontFamily(obj){
	var setFF = document.getElementById(selectedElement);
	setFF.style.fontFamily = obj.value;
	if(selectedElement == 'navigation'){
		initNavigationFontFamily = obj.value;
	}
	if(selectedElement == 'footer'){
		initFooterFontFamily = obj.value;
	}
	if(selectedElement == 'content'){
		initContentFontFamily = obj.value;
	}
	if(selectedElement == 'selected'){
		initSelectedFontFamily = obj.value;
	}
	if(selectedElement == 'content-text1'){
		initContentText1FontFamily = obj.value;
	}
	if(selectedElement == 'content-text2'){
		initContentText2FontFamily = obj.value;
	}
	if(selectedElement == 'sbm1h2'){
		initSbm1h2FontFamily = obj.value;
	}
	if(selectedElement == 'sbm2h2'){
		initSbm2h2FontFamily = obj.value;
	}
	if(selectedElement == 'sbm3h2'){
		initSbm3h2FontFamily = obj.value;
	}
	if(selectedElement == 'sbm4h2'){
		initSbm4h2FontFamily = obj.value;
	}
	if(selectedElement == 'sbm5h2'){
		initSbm5h2FontFamily = obj.value;
	}
	if(selectedElement == 'sbm6h2'){
		initSbm6h2FontFamily = obj.value;
	}
	if(selectedElement == 'side-bar-module1'){
		initSideBarModule1FontFamily = obj.value;
	}
	if(selectedElement == 'side-bar-module2'){
		initSideBarModule2FontFamily = obj.value;
	}
	if(selectedElement == 'side-bar-module3'){
		initSideBarModule3FontFamily = obj.value;
	}
	if(selectedElement == 'side-bar-module4'){
		initSideBarModule4FontFamily = obj.value;
	}
	if(selectedElement == 'side-bar-module5'){
		initSideBarModule5FontFamily = obj.value;
	}
	if(selectedElement == 'side-bar-module6'){
		initSideBarModule6FontFamily = obj.value;
	}
}
