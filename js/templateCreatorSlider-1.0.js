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
 
/**######################################################################################################################################################################
#################################################################### IMAGE SLIDER #######################################################################################
######################################################################################################################################################################**/

var screenHeight, screenWidth;
window.addEventListener("load",do_first,false);
	
function do_first(){
	screenHeight = window.screen.availHeight;
	screenWidth = window.screen.availWidth;
	document.getElementsByClassName('options')[0].style.marginTop = screenHeight+50;
	setInitialVals();
	setInterval(function (){imageSlider();}, 100);
	var element = 'how-to-use';
	slideCallInterval = setInterval(function (){slideLeft(element,howToUseInitValue,'');}, 10);
}

function imageSlider(){
	var slider = document.getElementById("slider");
	imagearrlen = imagearr.length;
	if(count == 0 && flag == 1){
		if(slider != null){
			slider.innerHTML = "";
			var img = new Image();
			img.src = imagearr[a];
			img.width = initSliderWidth;
			img.height = initSliderHeight;
			img.id = "image";
			img.style.opacity = 0;
			slider.appendChild(img);
			count++;
		}
	}else if(count <= 10 && count > 0 && flag == 1){
		
		var img = document.getElementById("image");
		if(img != null){
			img.style.opacity = count*0.1;
			count++;
		}
	}else if(count == 11 && flag == 1){
		flag = 0;
		timeset();
		count++;
	}else if(count > 11 && count <= 21 && flag == 1){
		var img = document.getElementById("image");
		if(img != null){
			img.style.opacity = img.style.opacity - 0.1;
			if(img.style.opacity < 0.15){
				img.style.opacity = 0;
			}
			count++;
		}
	}else if(count == 22){
		count = 0;
		a++;
		if(a == imagearrlen){
			a = 0;
		}
	}
}

function startcount(){
	if(flagcount == 3){
	
		flagcount = 0;
		flag = 1;
		clearInterval(interval);
	
	}else{
	flagcount++;
	}
}

function timeset(){
	interval = setInterval(function (){startcount();}, 1000);
}

/**######################################################################################################################################################################
#################################################################### SLIDING ELEMENTS ###################################################################################
######################################################################################################################################################################**/

var slideCallIntervalDown, slideCallIntervalUp, slideCallInterval, moving = 0;
var count = 0, a = 0, imagearrlen, flag = 1, flagcount = 0, interval, colorslidingdown = 0;
var imagearr = [];
imagearr[0] = "images/sliderpic1.jpg";
imagearr[1] = "images/sliderpic2.jpg";
imagearr[2] = "images/sliderpic3.jpg";

function slideLeft(element,elementValue,hideElement){
	moving = 1;
	if(elementValue > 590){
		elementValue = elementValue - 7;
	}else{
		moving = 0;
		if(document.getElementById(hideElement) != null)
			document.getElementById(hideElement).style.display = "none";
		clearInterval(slideCallInterval);
		clearInterval(slideCallIntervalDown);
		timerCount = 0;
	}
	var slideElement = document.getElementById(element);
	slideElement.style.marginLeft = elementValue;
	if(slideElement.id == 'attributes'){
		initAttributesMarginLeft = elementValue;
	}else if(slideElement.id == 'how-to-use'){
		howToUseInitValue = elementValue;
	}else if(slideElement.id == 'code-wrap'){
		codeWrapInitValue = elementValue;
	}
}
	
function slideDown(ele,eleProperty){
	moving = 1;
	if(eleProperty < screenHeight){
		eleProperty = eleProperty + 7;
	}
	if(eleProperty > 360 && ele == 'how-to-use'){
		var elementLeft = 'attributes';
		var hideElement = 'how-to-use';
		var elementLeftProperty = initAttributesMarginLeft;		
		slideLeft(elementLeft,elementLeftProperty,hideElement);
	}
	if(eleProperty > 500 && ele == 'attributes'){
		var elementLeft = 'code-wrap';
		var hideElement = 'attributes';
		var elementLeftProperty = codeWrapInitValue;
		slideLeft(elementLeft,elementLeftProperty,hideElement);
	}
	if(ele == 'how-to-use'){
		howToUseMarginTop = eleProperty;
	}else if(ele == 'attributes'){
		initAttributesMarginTop = eleProperty;
	}
	var slideElement = document.getElementById(ele);
	slideElement.style.marginTop = eleProperty; 
}

function slideRight(ele,eleProperty){
	moving = 1;
	if(eleProperty < screenWidth){
		eleProperty = eleProperty + 7;
	}
	if(eleProperty > (screenWidth - 400)){
		var hideElement = 'code-wrap';
		slideUp('attributes',initAttributesMarginTop,hideElement);
	}
	var slideElement = document.getElementById(ele);
	slideElement.style.marginLeft = eleProperty;
	codeWrapInitValue = eleProperty;
}

function slideUp(ele,eleProperty,hideElement){
	if(eleProperty > 117){
		eleProperty = eleProperty - 7;
	}
	if(eleProperty < 120){
		moving = 0;
		if(document.getElementById(hideElement) != null)
			document.getElementById(hideElement).style.display = "none";
		clearInterval(slideCallIntervalUp);
	}
	if(ele == 'attributes'){
		initAttributesMarginTop = eleProperty;
	}
	var slideElement = document.getElementById(ele);
	slideElement.style.marginTop = eleProperty; 
}

function colorsSlideUp(){
	moving = 1;
	colorslidingdown = 1;
	if(initOptionsMarginTop > 540){
		initOptionsMarginTop = initOptionsMarginTop - 8;
	}else{
		moving = 0;
		clearInterval(colorsSlideIntervalUp);
	}
	var element = 'options';
	var slideElement = document.getElementById(element);
	slideElement.style.marginTop = initOptionsMarginTop; 
}

function colorsSlideDown(codeSliding){
	moving = 1;
	if(initOptionsMarginTop < screenHeight){
		initOptionsMarginTop = initOptionsMarginTop + 8;
	}else{
		moving = 0;
		colorslidingdown = 0;
		clearInterval(colorsSlideIntervalDown);
		if(codeSliding != 0)
			codeSlide();
		document.getElementById('options').style.display = "none";
	}
	var element = 'options';
	var slideElement = document.getElementById(element);
	slideElement.style.marginTop = initOptionsMarginTop; 
}		
function codeSlide(){
	if(colorslidingdown == 1)
		hideColors();
	if(colorslidingdown == 0){
		document.getElementById('code-wrap').style.display = 'block';
		var defaultScale = 1024;
		var code = document.getElementById('code');
		code.textContent = makeCode(defaultScale);
		slideCallInterval = setInterval(function (){slideDown('attributes',initAttributesMarginTop); }, 10);
	}
}
		
function codeSlideRight(){
	document.getElementById('attributes').style.display = 'block';
	slideCallIntervalUp = setInterval(function (){slideRight('code-wrap',codeWrapInitValue); }, 10);
}
