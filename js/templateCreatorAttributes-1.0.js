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
#################################################################### UPDATE ATTRIBUTES VALUES ############################################################################
######################################################################################################################################################################**/

function updateAttributes(attr,propertyVal){

document.getElementById(attr).value = propertyVal;

if(setProperty == 1){

if(bg == 1){

if(selectedElement == 'header'){

	initHeaderBackground = propertyVal;
	
}
if(selectedElement == 'footer'){

	initFooterBackground = propertyVal;
}
if(selectedElement == 'navigation'){

	initNavigationBackground = propertyVal;
}
if(selectedElement == 'selected'){

	initSelectedBackground = propertyVal;
}
if(selectedElement == 'side-bar-module1'){

	initSideBarModule1Background = propertyVal;
}
if(selectedElement == 'side-bar-module2'){

	initSideBarModule2Background = propertyVal;
}
if(selectedElement == 'side-bar-module3'){

	initSideBarModule3Background = propertyVal;
}
if(selectedElement == 'side-bar-module4'){

	initSideBarModule4Background = propertyVal;
}
if(selectedElement == 'side-bar-module5'){

	initSideBarModule5Background = propertyVal;
}
if(selectedElement == 'side-bar-module6'){

	initSideBarModule6Background = propertyVal;
}
if(selectedElement == 'sbm1h2'){

	initSbm1h2Background = propertyVal;
}
if(selectedElement == 'sbm2h2'){

	initSbm2h2Background = propertyVal;
}
if(selectedElement == 'sbm3h2'){

	initSbm3h2Background = propertyVal;
}
if(selectedElement == 'sbm4h2'){

	initSbm4h2Background = propertyVal;
}
if(selectedElement == 'sbm5h2'){

	initSbm5h2Background = propertyVal;
}
if(selectedElement == 'sbm6h2'){

	initSbm6h2Background = propertyVal;
}
if(selectedElement == 'content-text1'){

	initContentText1Background = propertyVal;
}
if(selectedElement == 'content-text2'){

	initContentText2Background = propertyVal;
}
if(selectedElement == 'slider'){

	initSliderBackground = propertyVal;
}

}
if(clr == 1){

if(selectedElement == 'header'){

initHeaderColor = propertyVal;

}
if(selectedElement == 'footer'){

initFooterColor = propertyVal;

}
if(selectedElement == 'navigation'){

initNavigationColor = propertyVal;

}
if(selectedElement == 'selected'){

initSelectedColor = propertyVal;

}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1Color = propertyVal;

}
if(selectedElement == 'side-bar-module2'){

initSideBarModule2Color = propertyVal;

}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3Color = propertyVal;

}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4Color = propertyVal;

}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5Color = propertyVal;

}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6Color = propertyVal;

}
if(selectedElement == 'sbm1h2'){

initSbm1h2Color = propertyVal;

}
if(selectedElement == 'sbm2h2'){

initSbm2h2Color = propertyVal;

}
if(selectedElement == 'sbm3h2'){

initSbm3h2Color = propertyVal;

}
if(selectedElement == 'sbm4h2'){

initSbm4h2Color = propertyVal;

}
if(selectedElement == 'sbm5h2'){

initSbm5h2Color = propertyVal;

}
if(selectedElement == 'sbm6h2'){

initSbm6h2Color = propertyVal;

}
if(selectedElement == 'content-text1'){

initContentText1Color = propertyVal;

}
if(selectedElement == 'content-text2'){

initContentText2Color = propertyVal;

}
if(selectedElement == 'slider'){

initSliderColor = propertyVal;

}

}
if(borderbg == 1){

if(selectedElement == 'header'){

initHeaderBorderBgBackup = initHeaderBorderBg;
initHeaderBorderBg = propertyVal;

}
if(selectedElement == 'footer'){

initFooterBorderBgBackup = initFooterBorderBg;
initFooterBorderBg = propertyVal;

}
if(selectedElement == 'navigation'){

initNavigationBorderBgBackup = initNavigationBorderBg;
initNavigationBorderBg = propertyVal;

}
if(selectedElement == 'selected'){

initSelectedBorderBgBackup = initSelectedBorderBg;
initSelectedBorderBg = propertyVal;

}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderBgBackup = initSideBarModule1BorderBg;
initSideBarModule1BorderBg = propertyVal;

}
if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderBgBackup = initSideBarModule2BorderBg;
initSideBarModule2BorderBg = propertyVal;

}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderBgBackup = initSideBarModule3BorderBg;
initSideBarModule3BorderBg = propertyVal;

}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderBgBackup = initSideBarModule4BorderBg;
initSideBarModule4BorderBg = propertyVal;

}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderBgBackup = initSideBarModule5BorderBg;
initSideBarModule5BorderBg = propertyVal;

}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderBgBackup = initSideBarModule6BorderBg;
initSideBarModule6BorderBg = propertyVal;

}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderBgBackup = initSbm1h2BorderBg;
initSbm1h2BorderBg = propertyVal;

}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderBgBackup = initSbm2h2BorderBg;
initSbm2h2BorderBg = propertyVal;

}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderBgBackup = initSbm3h2BorderBg;
initSbm3h2BorderBg = propertyVal;

}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderBgBackup = initSbm4h2BorderBg;
initSbm4h2BorderBg = propertyVal;

}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderBgBackup = initSbm5h2BorderBg;
initSbm5h2BorderBg = propertyVal;

}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderBgBackup = initSbm6h2BorderBg;
initSbm6h2BorderBg = propertyVal;

}
if(selectedElement == 'content-text1'){

initContentText1BorderBgBackup = initContentText1BorderBg;
initContentText1BorderBg = propertyVal;

}
if(selectedElement == 'content-text2'){

initContentText2BorderBgBackup = initContentText2BorderBg;
initContentText2BorderBg = propertyVal;

}
if(selectedElement == 'slider'){

initSliderBorderBgBackup = initSliderBorderBg;
initSliderBorderBg = propertyVal;

}

}
}
}

/**######################################################################################################################################################################
#################################################################### INCREMENT BORDER RADIUS ############################################################################
######################################################################################################################################################################**/

function incrementBorderRadius(){

var brtl = document.getElementById('inputBorderRadiusTopLeft');
var brbl = document.getElementById('inputBorderRadiusBottomLeft');
var brtr = document.getElementById('inputBorderRadiusTopRight');
var brbr = document.getElementById('inputBorderRadiusBottomRight');

if(brtl.style.background != 'white'){

if(selectedElement == 'header'){

initHeaderBorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initHeaderBorderRadiusTopLeft;
propertyVal = initHeaderBorderRadiusTopLeft;

}
if(selectedElement == 'footer'){

initFooterBorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initFooterBorderRadiusTopLeft;
propertyVal = initFooterBorderRadiusTopLeft;
}

if(selectedElement == 'navigation'){

initNavigationBorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initNavigationBorderRadiusTopLeft;
propertyVal = initNavigationBorderRadiusTopLeft;
}

if(selectedElement == 'selected'){

initSelectedBorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSelectedBorderRadiusTopLeft;
propertyVal = initSelectedBorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule1BorderRadiusTopLeft;
propertyVal = initSideBarModule1BorderRadiusTopLeft;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule2BorderRadiusTopLeft;
propertyVal = initSideBarModule2BorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule3BorderRadiusTopLeft;
propertyVal = initSideBarModule3BorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule4BorderRadiusTopLeft;
propertyVal = initSideBarModule4BorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule5BorderRadiusTopLeft;
propertyVal = initSideBarModule5BorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule6BorderRadiusTopLeft;
propertyVal = initSideBarModule6BorderRadiusTopLeft;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm1h2BorderRadiusTopLeft;
propertyVal = initSbm1h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm2h2BorderRadiusTopLeft;
propertyVal = initSbm2h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm3h2BorderRadiusTopLeft;
propertyVal = initSbm3h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm4h2BorderRadiusTopLeft;
propertyVal = initSbm4h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm5h2BorderRadiusTopLeft;
propertyVal = initSbm5h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm6h2BorderRadiusTopLeft;
propertyVal = initSbm6h2BorderRadiusTopLeft;
}
if(selectedElement == 'content-text1'){

initContentText1BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initContentText1BorderRadiusTopLeft;
propertyVal = initContentText1BorderRadiusTopLeft;
}
if(selectedElement == 'content-text2'){

initContentText2BorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initContentText2BorderRadiusTopLeft;
propertyVal = initContentText2BorderRadiusTopLeft;
}
if(selectedElement == 'slider'){

initSliderBorderRadiusTopLeft++;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSliderBorderRadiusTopLeft;
propertyVal = initSliderBorderRadiusTopLeft;
}

updateAttributes('inputBorderRadiusTopLeft',propertyVal);

}else if(brbl.style.background != 'white'){

if(selectedElement == 'header'){

initHeaderBorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initHeaderBorderRadiusBottomLeft;
propertyVal = initHeaderBorderRadiusBottomLeft;

}
if(selectedElement == 'footer'){

initFooterBorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initFooterBorderRadiusBottomLeft;
propertyVal = initFooterBorderRadiusBottomLeft;
}

if(selectedElement == 'navigation'){

initNavigationBorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initNavigationBorderRadiusBottomLeft;
propertyVal = initNavigationBorderRadiusBottomLeft;
}

if(selectedElement == 'selected'){

initSelectedBorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSelectedBorderRadiusBottomLeft;
propertyVal = initSelectedBorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule1BorderRadiusBottomLeft;
propertyVal = initSideBarModule1BorderRadiusBottomLeft;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule2BorderRadiusBottomLeft;
propertyVal = initSideBarModule2BorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule3BorderRadiusBottomLeft;
propertyVal = initSideBarModule3BorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule4BorderRadiusBottomLeft;
propertyVal = initSideBarModule4BorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule5BorderRadiusBottomLeft;
propertyVal = initSideBarModule5BorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule6BorderRadiusBottomLeft;
propertyVal = initSideBarModule6BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm1h2BorderRadiusBottomLeft;
propertyVal = initSbm1h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm2h2BorderRadiusBottomLeft;
propertyVal = initSbm2h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm3h2BorderRadiusBottomLeft;
propertyVal = initSbm3h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm4h2BorderRadiusBottomLeft;
propertyVal = initSbm4h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm5h2BorderRadiusBottomLeft;
propertyVal = initSbm5h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm6h2BorderRadiusBottomLeft;
propertyVal = initSbm6h2BorderRadiusBottomLeft;
}
if(selectedElement == 'content-text1'){

initContentText1BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initContentText1BorderRadiusBottomLeft;
propertyVal = initContentText1BorderRadiusBottomLeft;
}
if(selectedElement == 'content-text2'){

initContentText2BorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initContentText2BorderRadiusBottomLeft;
propertyVal = initContentText2BorderRadiusBottomLeft;
}
if(selectedElement == 'slider'){

initSliderBorderRadiusBottomLeft++;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSliderBorderRadiusBottomLeft;
propertyVal = initSliderBorderRadiusBottomLeft;
}

updateAttributes('inputBorderRadiusBottomLeft',propertyVal);

}else if(brtr.style.background != 'white'){

if(selectedElement == 'header'){

initHeaderBorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initHeaderBorderRadiusTopRight;
propertyVal = initHeaderBorderRadiusTopRight;

}
if(selectedElement == 'footer'){

initFooterBorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initFooterBorderRadiusTopRight;
propertyVal = initFooterBorderRadiusTopRight;
}

if(selectedElement == 'navigation'){

initNavigationBorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initNavigationBorderRadiusTopRight;
propertyVal = initNavigationBorderRadiusTopRight;
}

if(selectedElement == 'selected'){

initSelectedBorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSelectedBorderRadiusTopRight;
propertyVal = initSelectedBorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule1BorderRadiusTopRight;
propertyVal = initSideBarModule1BorderRadiusTopRight;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule2BorderRadiusTopRight;
propertyVal = initSideBarModule2BorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule3BorderRadiusTopRight;
propertyVal = initSideBarModule3BorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule4BorderRadiusTopRight;
propertyVal = initSideBarModule4BorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule5BorderRadiusTopRight;
propertyVal = initSideBarModule5BorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule6BorderRadiusTopRight;
propertyVal = initSideBarModule6BorderRadiusTopRight;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm1h2BorderRadiusTopRight;
propertyVal = initSbm1h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm2h2BorderRadiusTopRight;
propertyVal = initSbm2h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm3h2BorderRadiusTopRight;
propertyVal = initSbm3h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm4h2BorderRadiusTopRight;
propertyVal = initSbm4h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm5h2BorderRadiusTopRight;
propertyVal = initSbm5h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm6h2BorderRadiusTopRight;
propertyVal = initSbm6h2BorderRadiusTopRight;
}
if(selectedElement == 'content-text1'){

initContentText1BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initContentText1BorderRadiusTopRight;
propertyVal = initContentText1BorderRadiusTopRight;
}
if(selectedElement == 'content-text2'){

initContentText2BorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initContentText2BorderRadiusTopRight;
propertyVal = initContentText2BorderRadiusTopRight;
}
if(selectedElement == 'slider'){

initSliderBorderRadiusTopRight++;
document.getElementById(selectedElement).style.borderTopRightRadius = initSliderBorderRadiusTopRight;
propertyVal = initSliderBorderRadiusTopRight;
}

updateAttributes('inputBorderRadiusTopRight',propertyVal);

}else if(brbr.style.background != 'white'){

if(selectedElement == 'header'){

initHeaderBorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initHeaderBorderRadiusBottomRight;
propertyVal = initHeaderBorderRadiusBottomRight;

}
if(selectedElement == 'footer'){

initFooterBorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initFooterBorderRadiusBottomRight;
propertyVal = initFooterBorderRadiusBottomRight;
}

if(selectedElement == 'navigation'){

initNavigationBorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initNavigationBorderRadiusBottomRight;
propertyVal = initNavigationBorderRadiusBottomRight;
}

if(selectedElement == 'selected'){

initSelectedBorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSelectedBorderRadiusBottomRight;
propertyVal = initSelectedBorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule1BorderRadiusBottomRight;
propertyVal = initSideBarModule1BorderRadiusBottomRight;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule2BorderRadiusBottomRight;
propertyVal = initSideBarModule2BorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule3BorderRadiusBottomRight;
propertyVal = initSideBarModule3BorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule4BorderRadiusBottomRight;
propertyVal = initSideBarModule4BorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule5BorderRadiusBottomRight;
propertyVal = initSideBarModule5BorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule6BorderRadiusBottomRight;
propertyVal = initSideBarModule6BorderRadiusBottomRight;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm1h2BorderRadiusBottomRight;
propertyVal = initSbm1h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm2h2BorderRadiusBottomRight;
propertyVal = initSbm2h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm3h2BorderRadiusBottomRight;
propertyVal = initSbm3h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm4h2BorderRadiusBottomRight;
propertyVal = initSbm4h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm5h2BorderRadiusBottomRight;
propertyVal = initSbm5h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm6h2BorderRadiusBottomRight;
propertyVal = initSbm6h2BorderRadiusBottomRight;
}
if(selectedElement == 'content-text1'){

initContentText1BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initContentText1BorderRadiusBottomRight;
propertyVal = initContentText1BorderRadiusBottomRight;
}
if(selectedElement == 'content-text2'){

initContentText2BorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initContentText2BorderRadiusBottomRight;
propertyVal = initContentText2BorderRadiusBottomRight;
}
if(selectedElement == 'slider'){

initSliderBorderRadiusBottomRight++;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSliderBorderRadiusBottomRight;
propertyVal = initSliderBorderRadiusBottomRight;
}

updateAttributes('inputBorderRadiusBottomRight',propertyVal);

}

}

/**######################################################################################################################################################################
#################################################################### DECREMENT BORDER RADIUS ############################################################################
######################################################################################################################################################################**/

function decrementBorderRadius(){

var brtl = document.getElementById('inputBorderRadiusTopLeft');
var brbl = document.getElementById('inputBorderRadiusBottomLeft');
var brtr = document.getElementById('inputBorderRadiusTopRight');
var brbr = document.getElementById('inputBorderRadiusBottomRight');
if(brtl.style.background != 'white'){

if(selectedElement == 'header'){

initHeaderBorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initHeaderBorderRadiusTopLeft;
propertyVal = initHeaderBorderRadiusTopLeft;

}
if(selectedElement == 'footer'){

initFooterBorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initFooterBorderRadiusTopLeft;
propertyVal = initFooterBorderRadiusTopLeft;
}

if(selectedElement == 'navigation'){

initNavigationBorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initNavigationBorderRadiusTopLeft;
propertyVal = initNavigationBorderRadiusTopLeft;
}

if(selectedElement == 'selected'){

initSelectedBorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSelectedBorderRadiusTopLeft;
propertyVal = initSelectedBorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule1BorderRadiusTopLeft;
propertyVal = initSideBarModule1BorderRadiusTopLeft;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule2BorderRadiusTopLeft;
propertyVal = initSideBarModule2BorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule3BorderRadiusTopLeft;
propertyVal = initSideBarModule3BorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule4BorderRadiusTopLeft;
propertyVal = initSideBarModule4BorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule5BorderRadiusTopLeft;
propertyVal = initSideBarModule5BorderRadiusTopLeft;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSideBarModule6BorderRadiusTopLeft;
propertyVal = initSideBarModule6BorderRadiusTopLeft;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm1h2BorderRadiusTopLeft;
propertyVal = initSbm1h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm2h2BorderRadiusTopLeft;
propertyVal = initSbm2h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm3h2BorderRadiusTopLeft;
propertyVal = initSbm3h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm4h2BorderRadiusTopLeft;
propertyVal = initSbm4h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm5h2BorderRadiusTopLeft;
propertyVal = initSbm5h2BorderRadiusTopLeft;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSbm6h2BorderRadiusTopLeft;
propertyVal = initSbm6h2BorderRadiusTopLeft;
}
if(selectedElement == 'content-text1'){

initContentText1BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initContentText1BorderRadiusTopLeft;
propertyVal = initContentText1BorderRadiusTopLeft;
}
if(selectedElement == 'content-text2'){

initContentText2BorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initContentText2BorderRadiusTopLeft;
propertyVal = initContentText2BorderRadiusTopLeft;
}
if(selectedElement == 'slider'){

initSliderBorderRadiusTopLeft--;
document.getElementById(selectedElement).style.borderTopLeftRadius = initSliderBorderRadiusTopLeft;
propertyVal = initSliderBorderRadiusTopLeft;
}

updateAttributes('inputBorderRadiusTopLeft',propertyVal);

}else if(brbl.style.background != 'white'){

if(selectedElement == 'header'){

initHeaderBorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initHeaderBorderRadiusBottomLeft;
propertyVal = initHeaderBorderRadiusBottomLeft;

}
if(selectedElement == 'footer'){

initFooterBorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initFooterBorderRadiusBottomLeft;
propertyVal = initFooterBorderRadiusBottomLeft;
}

if(selectedElement == 'navigation'){

initNavigationBorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initNavigationBorderRadiusBottomLeft;
propertyVal = initNavigationBorderRadiusBottomLeft;
}

if(selectedElement == 'selected'){

initSelectedBorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSelectedBorderRadiusBottomLeft;
propertyVal = initSelectedBorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule1BorderRadiusBottomLeft;
propertyVal = initSideBarModule1BorderRadiusBottomLeft;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule2BorderRadiusBottomLeft;
propertyVal = initSideBarModule2BorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule3BorderRadiusBottomLeft;
propertyVal = initSideBarModule3BorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule4BorderRadiusBottomLeft;
propertyVal = initSideBarModule4BorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule5BorderRadiusBottomLeft;
propertyVal = initSideBarModule5BorderRadiusBottomLeft;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSideBarModule6BorderRadiusBottomLeft;
propertyVal = initSideBarModule6BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm1h2BorderRadiusBottomLeft;
propertyVal = initSbm1h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm2h2BorderRadiusBottomLeft;
propertyVal = initSbm2h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm3h2BorderRadiusBottomLeft;
propertyVal = initSbm3h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm4h2BorderRadiusBottomLeft;
propertyVal = initSbm4h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm5h2BorderRadiusBottomLeft;
propertyVal = initSbm5h2BorderRadiusBottomLeft;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSbm6h2BorderRadiusBottomLeft;
propertyVal = initSbm6h2BorderRadiusBottomLeft;
}
if(selectedElement == 'content-text1'){

initContentText1BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initContentText1BorderRadiusBottomLeft;
propertyVal = initContentText1BorderRadiusBottomLeft;
}
if(selectedElement == 'content-text2'){

initContentText2BorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initContentText2BorderRadiusBottomLeft;
propertyVal = initContentText2BorderRadiusBottomLeft;
}
if(selectedElement == 'slider'){

initSliderBorderRadiusBottomLeft--;
document.getElementById(selectedElement).style.borderBottomLeftRadius = initSliderBorderRadiusBottomLeft;
propertyVal = initSliderBorderRadiusBottomLeft;
}

updateAttributes('inputBorderRadiusBottomLeft',propertyVal);

}else if(brtr.style.background != 'white'){

if(selectedElement == 'header'){

initHeaderBorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initHeaderBorderRadiusTopRight;
propertyVal = initHeaderBorderRadiusTopRight;

}
if(selectedElement == 'footer'){

initFooterBorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initFooterBorderRadiusTopRight;
propertyVal = initFooterBorderRadiusTopRight;
}

if(selectedElement == 'navigation'){

initNavigationBorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initNavigationBorderRadiusTopRight;
propertyVal = initNavigationBorderRadiusTopRight;
}

if(selectedElement == 'selected'){

initSelectedBorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSelectedBorderRadiusTopRight;
propertyVal = initSelectedBorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule1BorderRadiusTopRight;
propertyVal = initSideBarModule1BorderRadiusTopRight;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule2BorderRadiusTopRight;
propertyVal = initSideBarModule2BorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule3BorderRadiusTopRight;
propertyVal = initSideBarModule3BorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule4BorderRadiusTopRight;
propertyVal = initSideBarModule4BorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule5BorderRadiusTopRight;
propertyVal = initSideBarModule5BorderRadiusTopRight;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSideBarModule6BorderRadiusTopRight;
propertyVal = initSideBarModule6BorderRadiusTopRight;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm1h2BorderRadiusTopRight;
propertyVal = initSbm1h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm2h2BorderRadiusTopRight;
propertyVal = initSbm2h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm3h2BorderRadiusTopRight;
propertyVal = initSbm3h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm4h2BorderRadiusTopRight;
propertyVal = initSbm4h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm5h2BorderRadiusTopRight;
propertyVal = initSbm5h2BorderRadiusTopRight;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSbm6h2BorderRadiusTopRight;
propertyVal = initSbm6h2BorderRadiusTopRight;
}
if(selectedElement == 'content-text1'){

initContentText1BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initContentText1BorderRadiusTopRight;
propertyVal = initContentText1BorderRadiusTopRight;
}
if(selectedElement == 'content-text2'){

initContentText2BorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initContentText2BorderRadiusTopRight;
propertyVal = initContentText2BorderRadiusTopRight;
}
if(selectedElement == 'slider'){

initSliderBorderRadiusTopRight--;
document.getElementById(selectedElement).style.borderTopRightRadius = initSliderBorderRadiusTopRight;
propertyVal = initSliderBorderRadiusTopRight;
}

updateAttributes('inputBorderRadiusTopRight',propertyVal);

}else if(brbr.style.background != 'white'){

if(selectedElement == 'header'){

initHeaderBorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initHeaderBorderRadiusBottomRight;
propertyVal = initHeaderBorderRadiusBottomRight;

}
if(selectedElement == 'footer'){

initFooterBorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initFooterBorderRadiusBottomRight;
propertyVal = initFooterBorderRadiusBottomRight;
}

if(selectedElement == 'navigation'){

initNavigationBorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initNavigationBorderRadiusBottomRight;
propertyVal = initNavigationBorderRadiusBottomRight;
}

if(selectedElement == 'selected'){

initSelectedBorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSelectedBorderRadiusBottomRight;
propertyVal = initSelectedBorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module1'){

initSideBarModule1BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule1BorderRadiusBottomRight;
propertyVal = initSideBarModule1BorderRadiusBottomRight;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule2BorderRadiusBottomRight;
propertyVal = initSideBarModule2BorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule3BorderRadiusBottomRight;
propertyVal = initSideBarModule3BorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule4BorderRadiusBottomRight;
propertyVal = initSideBarModule4BorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule5BorderRadiusBottomRight;
propertyVal = initSideBarModule5BorderRadiusBottomRight;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSideBarModule6BorderRadiusBottomRight;
propertyVal = initSideBarModule6BorderRadiusBottomRight;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm1h2BorderRadiusBottomRight;
propertyVal = initSbm1h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm2h2BorderRadiusBottomRight;
propertyVal = initSbm2h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm3h2BorderRadiusBottomRight;
propertyVal = initSbm3h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm4h2BorderRadiusBottomRight;
propertyVal = initSbm4h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm5h2BorderRadiusBottomRight;
propertyVal = initSbm5h2BorderRadiusBottomRight;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSbm6h2BorderRadiusBottomRight;
propertyVal = initSbm6h2BorderRadiusBottomRight;
}
if(selectedElement == 'content-text1'){

initContentText1BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initContentText1BorderRadiusBottomRight;
propertyVal = initContentText1BorderRadiusBottomRight;
}
if(selectedElement == 'content-text2'){

initContentText2BorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initContentText2BorderRadiusBottomRight;
propertyVal = initContentText2BorderRadiusBottomRight;
}
if(selectedElement == 'slider'){

initSliderBorderRadiusBottomRight--;
document.getElementById(selectedElement).style.borderBottomRightRadius = initSliderBorderRadiusBottomRight;
propertyVal = initSliderBorderRadiusBottomRight;
}

updateAttributes('inputBorderRadiusBottomRight',propertyVal);

}

}

/**######################################################################################################################################################################
#################################################################### INCREMENT FONT SIZE ################################################################################
######################################################################################################################################################################**/

function incrementFontSize(){

if(selectedElement == 'header'){

initHeaderFontSize++;
document.getElementById(selectedElement).style.fontSize = initHeaderFontSize;
propertyVal = initHeaderFontSize;

}
if(selectedElement == 'footer'){

initFooterFontSize++;
document.getElementById(selectedElement).style.fontSize = initFooterFontSize;
propertyVal = initFooterFontSize;
}

if(selectedElement == 'navigation'){

initNavigationFontSize++;
document.getElementById(selectedElement).style.fontSize = initNavigationFontSize;
propertyVal = initNavigationFontSize;
}

if(selectedElement == 'selected'){

initSelectedFontSize++;
document.getElementById(selectedElement).style.fontSize = initSelectedFontSize;
propertyVal = initSelectedFontSize;
}

if(selectedElement == 'theme-page'){

initThemePageFontSize++;
document.getElementById(selectedElement).style.fontSize = initThemePageFontSize;
propertyVal = initThemePageFontSize;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1FontSize++;
document.getElementById(selectedElement).style.fontSize = initSideBarModule1FontSize;
propertyVal = initSideBarModule1FontSize;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2FontSize++;
document.getElementById(selectedElement).style.fontSize = initSideBarModule2FontSize;
propertyVal = initSideBarModule2FontSize;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3FontSize++;
document.getElementById(selectedElement).style.fontSize = initSideBarModule3FontSize;
propertyVal = initSideBarModule3FontSize;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4FontSize++;
document.getElementById(selectedElement).style.fontSize = initSideBarModule4FontSize;
propertyVal = initSideBarModule4FontSize;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5FontSize++;
document.getElementById(selectedElement).style.fontSize = initSideBarModule5FontSize;
propertyVal = initSideBarModule5FontSize;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6FontSize++;
document.getElementById(selectedElement).style.fontSize = initSideBarModule6FontSize;
propertyVal = initSideBarModule6FontSize;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2FontSize++;
document.getElementById(selectedElement).style.fontSize = initSbm1h2FontSize;
propertyVal = initSbm1h2FontSize;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2FontSize++;
document.getElementById(selectedElement).style.fontSize = initSbm2h2FontSize;
propertyVal = initSbm2h2FontSize;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2FontSize++;
document.getElementById(selectedElement).style.fontSize = initSbm3h2FontSize;
propertyVal = initSbm3h2FontSize;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2FontSize++;
document.getElementById(selectedElement).style.fontSize = initSbm4h2FontSize;
propertyVal = initSbm4h2FontSize;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2FontSize++;
document.getElementById(selectedElement).style.fontSize = initSbm5h2FontSize;
propertyVal = initSbm5h2FontSize;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2FontSize++;
document.getElementById(selectedElement).style.fontSize = initSbm6h2FontSize;
propertyVal = initSbm6h2FontSize;
}
if(selectedElement == 'content-text1'){

initContentText1FontSize++;
document.getElementById(selectedElement).style.fontSize = initContentText1FontSize;
propertyVal = initContentText1FontSize;
}
if(selectedElement == 'content-text2'){

initContentText2FontSize++;
document.getElementById(selectedElement).style.fontSize = initContentText2FontSize;
propertyVal = initContentText2FontSize;
}

updateAttributes('inputFontSize',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT FONT SIZE ################################################################################
######################################################################################################################################################################**/

function decrementFontSize(){

if(selectedElement == 'header'){

initHeaderFontSize--;
document.getElementById(selectedElement).style.fontSize = initHeaderFontSize;
propertyVal = initHeaderFontSize;
}
if(selectedElement == 'footer'){

initFooterFontSize--;
document.getElementById(selectedElement).style.fontSize = initFooterFontSize;
propertyVal = initFooterFontSize;
}
if(selectedElement == 'navigation'){

initNavigationFontSize--;
document.getElementById(selectedElement).style.fontSize = initNavigationFontSize;
propertyVal = initNavigationFontSize;
}

if(selectedElement == 'selected'){

initSelectedFontSize--;
document.getElementById(selectedElement).style.fontSize = initSelectedFontSize;
propertyVal = initSelectedFontSize;
}

if(selectedElement == 'theme-page'){

initThemePageFontSize--;
document.getElementById(selectedElement).style.fontSize = initThemePageFontSize;
propertyVal = initThemePageFontSize;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1FontSize--;
document.getElementById(selectedElement).style.fontSize = initSideBarModule1FontSize;
propertyVal = initFooterFontSize;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2FontSize--;
document.getElementById(selectedElement).style.fontSize = initSideBarModule2FontSize;
propertyVal = initSideBarModule2FontSize;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3FontSize--;
document.getElementById(selectedElement).style.fontSize = initSideBarModule4FontSize;
propertyVal = initSideBarModule3FontSize;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4FontSize--;
document.getElementById(selectedElement).style.fontSize = initSideBarModule4FontSize;
propertyVal = initSideBarModule4FontSize;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5FontSize--;
document.getElementById(selectedElement).style.fontSize = initSideBarModule5FontSize;
propertyVal = initSideBarModule5FontSize;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6FontSize--;
document.getElementById(selectedElement).style.fontSize = initSideBarModule6FontSize;
propertyVal = initSideBarModule6FontSize;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2FontSize--;
document.getElementById(selectedElement).style.fontSize = initSbm1h2FontSize;
propertyVal = initSbm1h2FontSize;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2FontSize--;
document.getElementById(selectedElement).style.fontSize = initSbm2h2FontSize;
propertyVal = initSbm2h2FontSize;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2FontSize--;
document.getElementById(selectedElement).style.fontSize = initSbm3h2FontSize;
propertyVal = initSbm3h2FontSize;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2FontSize--;
document.getElementById(selectedElement).style.fontSize = initSbm4h2FontSize;
propertyVal = initSbm4h2FontSize;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2FontSize--;
document.getElementById(selectedElement).style.fontSize = initSbm5h2FontSize;
propertyVal = initSbm5h2FontSize;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2FontSize--;
document.getElementById(selectedElement).style.fontSize = initSbm6h2FontSize;
propertyVal = initSbm6h2FontSize;
}
if(selectedElement == 'content-text1'){

initContentText1FontSize--;
document.getElementById(selectedElement).style.fontSize = initContentText1FontSize;
propertyVal = initContentText1FontSize;
}
if(selectedElement == 'content-text2'){

initContentText2FontSize--;
document.getElementById(selectedElement).style.fontSize = initContentText2FontSize;
propertyVal = initContentText2FontSize;
}

updateAttributes('inputFontSize',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT OPACITY ##################################################################################
######################################################################################################################################################################**/

function incrementOpacity(){

if(selectedElement == 'header'){

initHeaderOpacity = initHeaderOpacity+0.1;
document.getElementById(selectedElement).style.opacity = initHeaderOpacity;
propertyVal = initHeaderOpacity;

}
if(selectedElement == 'footer'){

initFooterOpacity = initFooterOpacity+0.1;
document.getElementById(selectedElement).style.opacity = initFooterOpacity;
propertyVal = initFooterOpacity;
}

if(selectedElement == 'navigation'){

initNavigationOpacity = initNavigationOpacity+0.1;
document.getElementById(selectedElement).style.opacity = initNavigationOpacity;
propertyVal = initNavigationOpacity;
}

if(selectedElement == 'selected'){

initSelectedOpacity = initSelectedOpacity+0.1;
document.getElementById(selectedElement).style.opacity = initSelectedOpacity;
propertyVal = initSelectedOpacity;
}

if(selectedElement == 'theme-page'){

initThemePageOpacity = initThemePageOpacity+0.1;
document.getElementById(selectedElement).style.opacity = initThemePageOpacity;
propertyVal = initThemePageOpacity;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1Opacity = initSideBarModule1Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule1Opacity;
propertyVal = initSideBarModule1Opacity;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2Opacity = initSideBarModule2Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule2Opacity;
propertyVal = initSideBarModule2Opacity;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3Opacity = initSideBarModule4Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule3Opacity;
propertyVal = initSideBarModule3Opacity;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4Opacity = initSideBarModule4Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule4Opacity;
propertyVal = initSideBarModule4Opacity;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5Opacity = initSideBarModule5Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule5Opacity;
propertyVal = initSideBarModule5Opacity;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6Opacity = initSideBarModule6Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule6Opacity;
propertyVal = initSideBarModule6Opacity;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2Opacity = initSbm1h2Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSbm1h2Opacity;
propertyVal = initSbm1h2Opacity;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2Opacity = initSbm2h2Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSbm2h2Opacity;
propertyVal = initSbm2h2Opacity;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2Opacity = initSbm3h2Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSbm3h2Opacity;
propertyVal = initSbm3h2Opacity;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2Opacity = initSbm4h2Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSbm4h2Opacity;
propertyVal = initSbm4h2Opacity;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2Opacity = initSbm5h2Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSbm5h2Opacity;
propertyVal = initSbm5h2Opacity;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2Opacity = initSbm6h2Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initSbm6h2Opacity;
propertyVal = initSbm6h2Opacity;
}
if(selectedElement == 'content-text1'){

initContentText1Opacity = initContentText1Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initContentText1Opacity;
propertyVal = initContentText1Opacity;
}
if(selectedElement == 'content-text2'){

initContentText2Opacity = initContentText2Opacity+0.1;
document.getElementById(selectedElement).style.opacity = initContentText2Opacity;
propertyVal = initContentText2Opacity;
}
if(selectedElement == 'slider'){

initSliderOpacity = initSliderOpacity+0.1;
document.getElementById(selectedElement).style.opacity = initSliderOpacity;
propertyVal = initSliderOpacity;
}

updateAttributes('inputOpacity',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT OPACITY ##################################################################################
######################################################################################################################################################################**/

function decrementOpacity(){

if(selectedElement == 'header'){

initHeaderOpacity = initHeaderOpacity-0.1;
document.getElementById(selectedElement).style.opacity = initHeaderOpacity;
propertyVal = initHeaderOpacity;

}
if(selectedElement == 'footer'){

initFooterOpacity = initFooterOpacity-0.1;
document.getElementById(selectedElement).style.opacity = initFooterOpacity;
propertyVal = initFooterOpacity;
}

if(selectedElement == 'navigation'){

initNavigationOpacity = initNavigationOpacity-0.1;
document.getElementById(selectedElement).style.opacity = initNavigationOpacity;
propertyVal = initNavigationOpacity;
}

if(selectedElement == 'selected'){

initSelectedOpacity = initSelectedOpacity-0.1;
document.getElementById(selectedElement).style.opacity = initSelectedOpacity;
propertyVal = initSelectedOpacity;
}

if(selectedElement == 'theme-page'){

initThemePageOpacity = initThemePageOpacity-0.1;
document.getElementById(selectedElement).style.opacity = initThemePageOpacity;
propertyVal = initThemePageOpacity;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1Opacity = initSideBarModule1Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule1Opacity;
propertyVal = initSideBarModule1Opacity;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2Opacity = initSideBarModule2Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule2Opacity;
propertyVal = initSideBarModule2Opacity;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3Opacity = initSideBarModule3Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule3Opacity;
propertyVal = initSideBarModule3Opacity;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4Opacity = initSideBarModule4Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule4Opacity;
propertyVal = initSideBarModule4Opacity;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5Opacity = initSideBarModule5Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule5Opacity;
propertyVal = initSideBarModule5Opacity;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6Opacity = initSideBarModule6Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSideBarModule6Opacity;
propertyVal = initSideBarModule6Opacity;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2Opacity = initSbm1h2Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSbm1h2Opacity;
propertyVal = initSbm1h2Opacity;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2Opacity = initSbm2h2Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSbm2h2Opacity;
propertyVal = initSbm2h2Opacity;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2Opacity = initSbm3h2Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSbm3h2Opacity;
propertyVal = initSbm3h2Opacity;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2Opacity = initSbm4h2Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSbm4h2Opacity;
propertyVal = initSbm4h2Opacity;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2Opacity = initSbm5h2Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSbm5h2Opacity;
propertyVal = initSbm5h2Opacity;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2Opacity = initSbm6h2Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initSbm6h2Opacity;
propertyVal = initSbm6h2Opacity;
}
if(selectedElement == 'content-text1'){

initContentText1Opacity = initContentText1Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initContentText1Opacity;
propertyVal = initContentText1Opacity;
}
if(selectedElement == 'content-text2'){

initContentText2Opacity = initContentText2Opacity-0.1;
document.getElementById(selectedElement).style.opacity = initContentText2Opacity;
propertyVal = initContentText2Opacity;
}
if(selectedElement == 'slider'){

initSliderOpacity = initSliderOpacity-0.1;
document.getElementById(selectedElement).style.opacity = initSliderOpacity;
propertyVal = initSliderOpacity;
}

updateAttributes('inputOpacity',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT PADDING BOTTOM ###########################################################################
######################################################################################################################################################################**/

function incrementPaddingBottom(){

if(selectedElement == 'header'){

initHeaderPaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initHeaderPaddingBottom;
propertyVal = initHeaderPaddingBottom;

}
if(selectedElement == 'footer'){

initFooterPaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initFooterPaddingBottom;
propertyVal = initFooterPaddingBottom;
}

if(selectedElement == 'navigation'){

initNavigationPaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initNavigationPaddingBottom;
propertyVal = initNavigationPaddingBottom;
}

if(selectedElement == 'theme-page'){

initThemePagePaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initThemePagePaddingBottom;
propertyVal = initThemePagePaddingBottom;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule1PaddingBottom;
propertyVal = initSideBarModule1PaddingBottom;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule2PaddingBottom;
propertyVal = initSideBarModule2PaddingBottom;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule3PaddingBottom;
propertyVal = initSideBarModule3PaddingBottom;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule4PaddingBottom;
propertyVal = initSideBarModule4PaddingBottom;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule5PaddingBottom;
propertyVal = initSideBarModule5PaddingBottom;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule6PaddingBottom;
propertyVal = initSideBarModule6PaddingBottom;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSbm1h2PaddingBottom;
propertyVal = initSbm1h2PaddingBottom;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSbm2h2PaddingBottom;
propertyVal = initSbm2h2PaddingBottom;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSbm3h2PaddingBottom;
propertyVal = initSbm3h2PaddingBottom;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSbm4h2PaddingBottom;
propertyVal = initSbm4h2PaddingBottom;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSbm5h2PaddingBottom;
propertyVal = initSbm5h2PaddingBottom;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSbm6h2PaddingBottom;
propertyVal = initSbm6h2PaddingBottom;
}
if(selectedElement == 'content-text1'){

initContentText1PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initContentText1PaddingBottom;
propertyVal = initContentText1PaddingBottom;
}
if(selectedElement == 'content-text2'){

initContentText2PaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initContentText2PaddingBottom;
propertyVal = initContentText2PaddingBottom;
}
if(selectedElement == 'slider'){

initSliderPaddingBottom++;
document.getElementById(selectedElement).style.paddingBottom = initSliderPaddingBottom;
propertyVal = initSliderPaddingBottom;
}

updateAttributes('inputPaddingBottom',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT PADDING BOTTOM ###########################################################################
######################################################################################################################################################################**/

function decrementPaddingBottom(){

if(selectedElement == 'header'){

initHeaderPaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initHeaderPaddingBottom;
propertyVal = initHeaderPaddingBottom;

}
if(selectedElement == 'footer'){

initFooterPaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initFooterPaddingBottom;
propertyVal = initFooterPaddingBottom;
}

if(selectedElement == 'navigation'){

initNavigationPaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initNavigationPaddingBottom;
propertyVal = initNavigationPaddingBottom;
}

if(selectedElement == 'theme-page'){

initThemePagePaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initThemePagePaddingBottom;
propertyVal = initThemePagePaddingBottom;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule1PaddingBottom;
propertyVal = initSideBarModule1PaddingBottom;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule2PaddingBottom;
propertyVal = initSideBarModule2PaddingBottom;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule3PaddingBottom;
propertyVal = initSideBarModule3PaddingBottom;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule4PaddingBottom;
propertyVal = initSideBarModule4PaddingBottom;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule5PaddingBottom;
propertyVal = initSideBarModule5PaddingBottom;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSideBarModule6PaddingBottom;
propertyVal = initSideBarModule6PaddingBottom;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSbm1h2PaddingBottom;
propertyVal = initSbm1h2PaddingBottom;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSbm2h2PaddingBottom;
propertyVal = initSbm2h2PaddingBottom;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSbm3h2PaddingBottom;
propertyVal = initSbm3h2PaddingBottom;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSbm4h2PaddingBottom;
propertyVal = initSbm4h2PaddingBottom;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSbm5h2PaddingBottom;
propertyVal = initSbm5h2PaddingBottom;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSbm6h2PaddingBottom;
propertyVal = initSbm6h2PaddingBottom;
}
if(selectedElement == 'content-text1'){

initContentText1PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initContentText1PaddingBottom;
propertyVal = initContentText1PaddingBottom;
}
if(selectedElement == 'content-text2'){

initContentText2PaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initContentText2PaddingBottom;
propertyVal = initContentText2PaddingBottom;
}
if(selectedElement == 'slider'){

initSliderPaddingBottom--;
document.getElementById(selectedElement).style.paddingBottom = initSliderPaddingBottom;
propertyVal = initSliderPaddingBottom;
}

updateAttributes('inputPaddingBottom',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT PADDING TOP ##############################################################################
######################################################################################################################################################################**/

function incrementPaddingTop(){

if(selectedElement == 'header'){

initHeaderPaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initHeaderPaddingTop;
propertyVal = initHeaderPaddingTop;

}
if(selectedElement == 'footer'){

initFooterPaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initFooterPaddingTop;
propertyVal = initFooterPaddingTop;
}

if(selectedElement == 'navigation'){

initNavigationPaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initNavigationPaddingTop;
propertyVal = initNavigationPaddingTop;
}

if(selectedElement == 'theme-page'){

initThemePagePaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initThemePagePaddingTop;
propertyVal = initThemePagePaddingTop;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule1PaddingTop;
propertyVal = initSideBarModule1PaddingTop;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule2PaddingTop;
propertyVal = initSideBarModule2PaddingTop;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule3PaddingTop;
propertyVal = initSideBarModule3PaddingTop;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule4PaddingTop;
propertyVal = initSideBarModule4PaddingTop;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule5PaddingTop;
propertyVal = initSideBarModule5PaddingTop;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule6PaddingTop;
propertyVal = initSideBarModule6PaddingTop;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSbm1h2PaddingTop;
propertyVal = initSbm1h2PaddingTop;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSbm2h2PaddingTop;
propertyVal = initSbm2h2PaddingTop;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSbm3h2PaddingTop;
propertyVal = initSbm3h2PaddingTop;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSbm4h2PaddingTop;
propertyVal = initSbm4h2PaddingTop;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSbm5h2PaddingTop;
propertyVal = initSbm5h2PaddingTop;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSbm6h2PaddingTop;
propertyVal = initSbm6h2PaddingTop;
}
if(selectedElement == 'content-text1'){

initContentText1PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initContentText1PaddingTop;
propertyVal = initContentText1PaddingTop;
}
if(selectedElement == 'content-text2'){

initContentText2PaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initContentText2PaddingTop;
propertyVal = initContentText2PaddingTop;
}
if(selectedElement == 'slider'){

initSliderPaddingTop++;
document.getElementById(selectedElement).style.paddingTop = initSliderPaddingTop;
propertyVal = initSliderPaddingTop;
}

updateAttributes('inputPaddingTop',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT PADDING TOP ##############################################################################
######################################################################################################################################################################**/

function decrementPaddingTop(){

if(selectedElement == 'header'){

initHeaderPaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initHeaderPaddingTop;
propertyVal = initHeaderPaddingTop;

}
if(selectedElement == 'footer'){

initFooterPaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initFooterPaddingTop;
propertyVal = initFooterPaddingTop;
}

if(selectedElement == 'navigation'){

initNavigationPaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initNavigationPaddingTop;
propertyVal = initNavigationPaddingTop;
}

if(selectedElement == 'theme-page'){

initThemePagePaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initThemePagePaddingTop;
propertyVal = initThemePagePaddingTop;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule1PaddingTop;
propertyVal = initSideBarModule1PaddingTop;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule2PaddingTop;
propertyVal = initSideBarModule2PaddingTop;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule3PaddingTop;
propertyVal = initSideBarModule3PaddingTop;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule4PaddingTop;
propertyVal = initSideBarModule4PaddingTop;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule5PaddingTop;
propertyVal = initSideBarModule5PaddingTop;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSideBarModule6PaddingTop;
propertyVal = initSideBarModule6PaddingTop;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSbm1h2PaddingTop;
propertyVal = initSbm1h2PaddingTop;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSbm2h2PaddingTop;
propertyVal = initSbm2h2PaddingTop;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSbm3h2PaddingTop;
propertyVal = initSbm3h2PaddingTop;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSbm4h2PaddingTop;
propertyVal = initSbm4h2PaddingTop;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSbm5h2PaddingTop;
propertyVal = initSbm5h2PaddingTop;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSbm6h2PaddingTop;
propertyVal = initSbm6h2PaddingTop;
}
if(selectedElement == 'content-text1'){

initContentText1PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initContentText1PaddingTop;
propertyVal = initContentText1PaddingTop;
}
if(selectedElement == 'content-text2'){

initContentText2PaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initContentText2PaddingTop;
propertyVal = initContentText2PaddingTop;
}
if(selectedElement == 'slider'){

initSliderPaddingTop--;
document.getElementById(selectedElement).style.paddingTop = initSliderPaddingTop;
propertyVal = initSliderPaddingTop;
}

updateAttributes('inputPaddingTop',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT PADDING RIGHT ############################################################################
######################################################################################################################################################################**/

function incrementPaddingRight(){

if(selectedElement == 'header'){

initHeaderPaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initHeaderPaddingRight;
propertyVal = initHeaderPaddingRight;

}
if(selectedElement == 'footer'){

initFooterPaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initFooterPaddingRight;
propertyVal = initFooterPaddingRight;
}

if(selectedElement == 'navigation'){

initNavigationPaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initNavigationPaddingRight;
propertyVal = initNavigationPaddingRight;
}

if(selectedElement == 'theme-page'){

initThemePagePaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initThemePagePaddingRight;
propertyVal = initThemePagePaddingRight;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule1PaddingRight;
propertyVal = initSideBarModule1PaddingRight;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule2PaddingRight;
propertyVal = initSideBarModule2PaddingRight;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule3PaddingRight;
propertyVal = initSideBarModule3PaddingRight;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule4PaddingRight;
propertyVal = initSideBarModule4PaddingRight;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule5PaddingRight;
propertyVal = initSideBarModule5PaddingRight;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule6PaddingRight;
propertyVal = initSideBarModule6PaddingRight;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSbm1h2PaddingRight;
propertyVal = initSbm1h2PaddingRight;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSbm2h2PaddingRight;
propertyVal = initSbm2h2PaddingRight;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSbm3h2PaddingRight;
propertyVal = initSbm3h2PaddingRight;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSbm4h2PaddingRight;
propertyVal = initSbm4h2PaddingRight;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSbm5h2PaddingRight;
propertyVal = initSbm5h2PaddingRight;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSbm6h2PaddingRight;
propertyVal = initSbm6h2PaddingRight;
}
if(selectedElement == 'content-text1'){

initContentText1PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initContentText1PaddingRight;
propertyVal = initContentText1PaddingRight;
}
if(selectedElement == 'content-text2'){

initContentText2PaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initContentText2PaddingRight;
propertyVal = initContentText2PaddingRight;
}
if(selectedElement == 'slider'){

initSliderPaddingRight++;
document.getElementById(selectedElement).style.paddingRight = initSliderPaddingRight;
propertyVal = initSliderPaddingRight;
}

updateAttributes('inputPaddingRight',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT PADDING RIGHT ############################################################################
######################################################################################################################################################################**/

function decrementPaddingRight(){

if(selectedElement == 'header'){

initHeaderPaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initHeaderPaddingRight;
propertyVal = initHeaderPaddingRight;

}
if(selectedElement == 'footer'){

initFooterPaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initFooterPaddingRight;
propertyVal = initFooterPaddingRight;
}

if(selectedElement == 'navigation'){

initNavigationPaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initNavigationPaddingRight;
propertyVal = initNavigationPaddingRight;
}

if(selectedElement == 'theme-page'){

initThemePagePaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initThemePagePaddingRight;
propertyVal = initThemePagePaddingRight;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule1PaddingRight;
propertyVal = initSideBarModule1PaddingRight;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule2PaddingRight;
propertyVal = initSideBarModule2PaddingRight;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule3PaddingRight;
propertyVal = initSideBarModule3PaddingRight;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule4PaddingRight;
propertyVal = initSideBarModule4PaddingRight;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule5PaddingRight;
propertyVal = initSideBarModule5PaddingRight;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSideBarModule6PaddingRight;
propertyVal = initSideBarModule6PaddingRight;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSbm1h2PaddingRight;
propertyVal = initSbm1h2PaddingRight;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSbm2h2PaddingRight;
propertyVal = initSbm2h2PaddingRight;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSbm3h2PaddingRight;
propertyVal = initSbm3h2PaddingRight;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSbm4h2PaddingRight;
propertyVal = initSbm4h2PaddingRight;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSbm5h2PaddingRight;
propertyVal = initSbm5h2PaddingRight;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSbm6h2PaddingRight;
propertyVal = initSbm6h2PaddingRight;
}
if(selectedElement == 'content-text1'){

initContentText1PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initContentText1PaddingRight;
propertyVal = initContentText1PaddingRight;
}
if(selectedElement == 'content-text2'){

initContentText2PaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initContentText2PaddingRight;
propertyVal = initContentText2PaddingRight;
}
if(selectedElement == 'slider'){

initSliderPaddingRight--;
document.getElementById(selectedElement).style.paddingRight = initSliderPaddingRight;
propertyVal = initSliderPaddingRight;
}

updateAttributes('inputPaddingRight',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT PADDING LEFT #############################################################################
######################################################################################################################################################################**/

function incrementPaddingLeft(){

if(selectedElement == 'header'){

initHeaderPaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initHeaderPaddingLeft;
propertyVal = initHeaderPaddingLeft;

}
if(selectedElement == 'footer'){

initFooterPaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initFooterPaddingLeft;
propertyVal = initFooterPaddingLeft;
}

if(selectedElement == 'navigation'){

initNavigationPaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initNavigationPaddingLeft;
propertyVal = initNavigationPaddingLeft;
}

if(selectedElement == 'theme-page'){

initThemePagePaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initThemePagePaddingLeft;
propertyVal = initThemePagePaddingLeft;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule1PaddingLeft;
propertyVal = initSideBarModule1PaddingLeft;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule2PaddingLeft;
propertyVal = initSideBarModule2PaddingLeft;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule3PaddingLeft;
propertyVal = initSideBarModule3PaddingLeft;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule4PaddingLeft;
propertyVal = initSideBarModule4PaddingLeft;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule5PaddingLeft;
propertyVal = initSideBarModule5PaddingLeft;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule6PaddingLeft;
propertyVal = initSideBarModule6PaddingLeft;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSbm1h2PaddingLeft;
propertyVal = initSbm1h2PaddingLeft;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSbm2h2PaddingLeft;
propertyVal = initSbm2h2PaddingLeft;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSbm3h2PaddingLeft;
propertyVal = initSbm3h2PaddingLeft;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSbm4h2PaddingLeft;
propertyVal = initSbm4h2PaddingLeft;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSbm5h2PaddingLeft;
propertyVal = initSbm5h2PaddingLeft;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSbm6h2PaddingLeft;
propertyVal = initSbm6h2PaddingLeft;
}
if(selectedElement == 'content-text1'){

initContentText1PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initContentText1PaddingLeft;
propertyVal = initContentText1PaddingLeft;
}
if(selectedElement == 'content-text2'){

initContentText2PaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initContentText2PaddingLeft;
propertyVal = initContentText2PaddingLeft;
}
if(selectedElement == 'slider'){

initSliderPaddingLeft++;
document.getElementById(selectedElement).style.paddingLeft = initSliderPaddingLeft;
propertyVal = initSliderPaddingLeft;
}

updateAttributes('inputPaddingLeft',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT PADDING LEFT #############################################################################
######################################################################################################################################################################**/

function decrementPaddingLeft(){

if(selectedElement == 'header'){

initHeaderPaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initHeaderPaddingLeft;
propertyVal = initHeaderPaddingLeft;

}
if(selectedElement == 'footer'){

initFooterPaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initFooterPaddingLeft;
propertyVal = initFooterPaddingLeft;
}

if(selectedElement == 'navigation'){

initNavigationPaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initNavigationPaddingLeft;
propertyVal = initNavigationPaddingLeft;
}

if(selectedElement == 'theme-page'){

initThemePagePaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initThemePagePaddingLeft;
propertyVal = initThemePagePaddingLeft;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule1PaddingLeft;
propertyVal = initSideBarModule1PaddingLeft;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule2PaddingLeft;
propertyVal = initSideBarModule2PaddingLeft;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule3PaddingLeft;
propertyVal = initSideBarModule3PaddingLeft;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule4PaddingLeft;
propertyVal = initSideBarModule4PaddingLeft;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule5PaddingLeft;
propertyVal = initSideBarModule5PaddingLeft;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSideBarModule6PaddingLeft;
propertyVal = initSideBarModule6PaddingLeft;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSbm1h2PaddingLeft;
propertyVal = initSbm1h2PaddingLeft;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSbm2h2PaddingLeft;
propertyVal = initSbm2h2PaddingLeft;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSbm3h2PaddingLeft;
propertyVal = initSbm3h2PaddingLeft;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSbm4h2PaddingLeft;
propertyVal = initSbm4h2PaddingLeft;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSbm5h2PaddingLeft;
propertyVal = initSbm5h2PaddingLeft;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSbm6h2PaddingLeft;
propertyVal = initSbm6h2PaddingLeft;
}
if(selectedElement == 'content-text1'){

initContentText1PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initContentText1PaddingLeft;
propertyVal = initContentText1PaddingLeft;
}
if(selectedElement == 'content-text2'){

initContentText2PaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initContentText2PaddingLeft;
propertyVal = initContentText2PaddingLeft;
}
if(selectedElement == 'slider'){

initSliderPaddingLeft--;
document.getElementById(selectedElement).style.paddingLeft = initSliderPaddingLeft;
propertyVal = initSliderPaddingLeft;
}

updateAttributes('inputPaddingLeft',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT MARGIN LEFT ##############################################################################
######################################################################################################################################################################**/

function incrementMarginLeft(){

if(selectedElement == 'header'){

initHeaderMarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initHeaderMarginLeft;
propertyVal = initHeaderMarginLeft;

}
if(selectedElement == 'footer'){

initFooterMarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initFooterMarginLeft;
propertyVal = initFooterMarginLeft;
}

if(selectedElement == 'navigation'){

initNavigationMarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initNavigationMarginLeft;
propertyVal = initNavigationMarginLeft;
}

if(selectedElement == 'theme-page'){

initThemePageMarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initThemePageMarginLeft;
propertyVal = initThemePageMarginLeft;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule1MarginLeft;
propertyVal = initSideBarModule1MarginLeft;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule2MarginLeft;
propertyVal = initSideBarModule2MarginLeft;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule3MarginLeft;
propertyVal = initSideBarModule3MarginLeft;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule4MarginLeft;
propertyVal = initSideBarModule4MarginLeft;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule5MarginLeft;
propertyVal = initSideBarModule5MarginLeft;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule6MarginLeft;
propertyVal = initSideBarModule6MarginLeft;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSbm1h2MarginLeft;
propertyVal = initSbm1h2MarginLeft;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSbm2h2MarginLeft;
propertyVal = initSbm2h2MarginLeft;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSbm3h2MarginLeft;
propertyVal = initSbm3h2MarginLeft;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSbm4h2MarginLeft;
propertyVal = initSbm4h2MarginLeft;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSbm5h2MarginLeft;
propertyVal = initSbm5h2MarginLeft;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSbm6h2MarginLeft;
propertyVal = initSbm6h2MarginLeft;
}
if(selectedElement == 'content-text1'){

initContentText1MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initContentText1MarginLeft;
propertyVal = initContentText1MarginLeft;
}
if(selectedElement == 'content-text2'){

initContentText2MarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initContentText2MarginLeft;
propertyVal = initContentText2MarginLeft;
}
if(selectedElement == 'slider'){

initSliderMarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initSliderMarginLeft;
propertyVal = initSliderMarginLeft;
}
if(selectedElement == 'content'){

initContentMarginLeft++;
document.getElementById(selectedElement).style.marginLeft = initContentMarginLeft;
propertyVal = initContentMarginLeft;
}

updateAttributes('inputMarginLeft',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT MARGIN LEFT ##############################################################################
######################################################################################################################################################################**/

function decrementMarginLeft(){

if(selectedElement == 'header'){

initHeaderMarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initHeaderMarginLeft;
propertyVal = initHeaderMarginLeft;

}
if(selectedElement == 'footer'){

initFooterMarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initFooterMarginLeft;
propertyVal = initFooterMarginLeft;
}

if(selectedElement == 'navigation'){

initNavigationMarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initNavigationMarginLeft;
propertyVal = initNavigationMarginLeft;
}

if(selectedElement == 'theme-page'){

initThemePageMarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initThemePageMarginLeft;
propertyVal = initThemePageMarginLeft;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule1MarginLeft;
propertyVal = initSideBarModule1MarginLeft;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule2MarginLeft;
propertyVal = initSideBarModule2MarginLeft;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule3MarginLeft;
propertyVal = initSideBarModule3MarginLeft;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule4MarginLeft;
propertyVal = initSideBarModule4MarginLeft;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule5MarginLeft;
propertyVal = initSideBarModule5MarginLeft;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSideBarModule6MarginLeft;
propertyVal = initSideBarModule6MarginLeft;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSbm1h2MarginLeft;
propertyVal = initSbm1h2MarginLeft;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSbm2h2MarginLeft;
propertyVal = initSbm2h2MarginLeft;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSbm3h2MarginLeft;
propertyVal = initSbm3h2MarginLeft;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSbm4h2MarginLeft;
propertyVal = initSbm4h2MarginLeft;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSbm5h2MarginLeft;
propertyVal = initSbm5h2MarginLeft;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSbm6h2MarginLeft;
propertyVal = initSbm6h2MarginLeft;
}
if(selectedElement == 'content-text1'){

initContentText1MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initContentText1MarginLeft;
propertyVal = initContentText1MarginLeft;
}
if(selectedElement == 'content-text2'){

initContentText2MarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initContentText2MarginLeft;
propertyVal = initContentText2MarginLeft;
}
if(selectedElement == 'slider'){

initSliderMarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initSliderMarginLeft;
propertyVal = initSliderMarginLeft;
}
if(selectedElement == 'content'){

initContentMarginLeft--;
document.getElementById(selectedElement).style.marginLeft = initContentMarginLeft;
propertyVal = initContentMarginLeft;
}

updateAttributes('inputMarginLeft',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT MARGIN TOP ###############################################################################
######################################################################################################################################################################**/

function incrementMarginTop(){

if(selectedElement == 'header'){

initHeaderMarginTop++;
document.getElementById(selectedElement).style.marginTop = initHeaderMarginTop;
propertyVal = initHeaderMarginTop;

}
if(selectedElement == 'footer'){

initFooterMarginTop++;
document.getElementById(selectedElement).style.marginTop = initFooterMarginTop;
propertyVal = initFooterMarginTop;
}

if(selectedElement == 'navigation'){

initNavigationMarginTop++;
document.getElementById(selectedElement).style.marginTop = initNavigationMarginTop;
propertyVal = initNavigationMarginTop;
}

if(selectedElement == 'theme-page'){

initThemePageMarginTop++;
document.getElementById(selectedElement).style.marginTop = initThemePageMarginTop;
propertyVal = initThemePageMarginTop;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSideBarModule1MarginTop;
propertyVal = initSideBarModule1MarginTop;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSideBarModule2MarginTop;
propertyVal = initSideBarModule2MarginTop;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSideBarModule3MarginTop;
propertyVal = initSideBarModule3MarginTop;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSideBarModule4MarginTop;
propertyVal = initSideBarModule4MarginTop;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSideBarModule5MarginTop;
propertyVal = initSideBarModule5MarginTop;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSideBarModule6MarginTop;
propertyVal = initSideBarModule6MarginTop;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSbm1h2MarginTop;
propertyVal = initSbm1h2MarginTop;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSbm2h2MarginTop;
propertyVal = initSbm2h2MarginTop;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSbm3h2MarginTop;
propertyVal = initSbm3h2MarginTop;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSbm4h2MarginTop;
propertyVal = initSbm4h2MarginTop;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSbm5h2MarginTop;
propertyVal = initSbm5h2MarginTop;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2MarginTop++;
document.getElementById(selectedElement).style.marginTop = initSbm6h2MarginTop;
propertyVal = initSbm6h2MarginTop;
}
if(selectedElement == 'content-text1'){

initContentText1MarginTop++;
document.getElementById(selectedElement).style.marginTop = initContentText1MarginTop;
propertyVal = initContentText1MarginTop;
}
if(selectedElement == 'content-text2'){

initContentText2MarginTop++;
document.getElementById(selectedElement).style.marginTop = initContentText2MarginTop;
propertyVal = initContentText2MarginTop;
}
if(selectedElement == 'slider'){

initSliderMarginTop++;
document.getElementById(selectedElement).style.marginTop = initSliderMarginTop;
propertyVal = initSliderMarginTop;
}
if(selectedElement == 'content'){

initContentMarginTop++;
document.getElementById(selectedElement).style.marginTop = initContentMarginTop;
propertyVal = initContentMarginTop;
}

updateAttributes('inputMarginTop',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT MARGIN TOP ###############################################################################
######################################################################################################################################################################**/

function decrementMarginTop(){

if(selectedElement == 'header'){

initHeaderMarginTop--;
document.getElementById(selectedElement).style.marginTop = initHeaderMarginTop;
propertyVal = initHeaderMarginTop;

}
if(selectedElement == 'footer'){

initFooterMarginTop--;
document.getElementById(selectedElement).style.marginTop = initFooterMarginTop;
propertyVal = initFooterMarginTop;
}

if(selectedElement == 'navigation'){

initNavigationMarginTop--;
document.getElementById(selectedElement).style.marginTop = initNavigationMarginTop;
propertyVal = initNavigationMarginTop;
}

if(selectedElement == 'theme-page'){

initThemePageMarginTop--;
document.getElementById(selectedElement).style.marginTop = initThemePageMarginTop;
propertyVal = initThemePageMarginTop;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSideBarModule1MarginTop;
propertyVal = initSideBarModule1MarginTop;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSideBarModule2MarginTop;
propertyVal = initSideBarModule2MarginTop;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSideBarModule3MarginTop;
propertyVal = initSideBarModule3MarginTop;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSideBarModule4MarginTop;
propertyVal = initSideBarModule4MarginTop;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSideBarModule5MarginTop;
propertyVal = initSideBarModule5MarginTop;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSideBarModule6MarginTop;
propertyVal = initSideBarModule6MarginTop;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSbm1h2MarginTop;
propertyVal = initSbm1h2MarginTop;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSbm2h2MarginTop;
propertyVal = initSbm2h2MarginTop;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSbm3h2MarginTop;
propertyVal = initSbm3h2MarginTop;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSbm4h2MarginTop;
propertyVal = initSbm4h2MarginTop;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSbm5h2MarginTop;
propertyVal = initSbm5h2MarginTop;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2MarginTop--;
document.getElementById(selectedElement).style.marginTop = initSbm6h2MarginTop;
propertyVal = initSbm6h2MarginTop;
}
if(selectedElement == 'content-text1'){

initContentText1MarginTop--;
document.getElementById(selectedElement).style.marginTop = initContentText1MarginTop;
propertyVal = initContentText1MarginTop;
}
if(selectedElement == 'content-text2'){

initContentText2MarginTop--;
document.getElementById(selectedElement).style.marginTop = initContentText2MarginTop;
propertyVal = initContentText2MarginTop;
}
if(selectedElement == 'slider'){

initSliderMarginTop--;
document.getElementById(selectedElement).style.marginTop = initSliderMarginTop;
propertyVal = initSliderMarginTop;
}
if(selectedElement == 'content'){

initContentMarginTop--;
document.getElementById(selectedElement).style.marginTop = initContentMarginTop;
propertyVal = initContentMarginTop;
}

updateAttributes('inputMarginTop',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT MARGIN RIGHT #############################################################################
######################################################################################################################################################################**/

function incrementMarginRight(){

if(selectedElement == 'header'){

initHeaderMarginRight++;
document.getElementById(selectedElement).style.marginRight = initHeaderMarginRight;
propertyVal = initHeaderMarginRight;

}
if(selectedElement == 'footer'){

initFooterMarginRight++;
document.getElementById(selectedElement).style.marginRight = initFooterMarginRight;
propertyVal = initFooterMarginRight;
}

if(selectedElement == 'navigation'){

initNavigationMarginRight++;
document.getElementById(selectedElement).style.marginRight = initNavigationMarginRight;
propertyVal = initNavigationMarginRight;
}

if(selectedElement == 'theme-page'){

initThemePageMarginRight++;
document.getElementById(selectedElement).style.marginRight = initThemePageMarginRight;
propertyVal = initThemePageMarginRight;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSideBarModule1MarginRight;
propertyVal = initSideBarModule1MarginRight;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSideBarModule2MarginRight;
propertyVal = initSideBarModule2MarginRight;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSideBarModule3MarginRight;
propertyVal = initSideBarModule3MarginRight;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSideBarModule4MarginRight;
propertyVal = initSideBarModule4MarginRight;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSideBarModule5MarginRight;
propertyVal = initSideBarModule5MarginRight;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSideBarModule6MarginRight;
propertyVal = initSideBarModule6MarginRight;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSbm1h2MarginRight;
propertyVal = initSbm1h2MarginRight;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSbm2h2MarginRight;
propertyVal = initSbm2h2MarginRight;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSbm3h2MarginRight;
propertyVal = initSbm3h2MarginRight;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSbm4h2MarginRight;
propertyVal = initSbm4h2MarginRight;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSbm5h2MarginRight;
propertyVal = initSbm5h2MarginRight;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2MarginRight++;
document.getElementById(selectedElement).style.marginRight = initSbm6h2MarginRight;
propertyVal = initSbm6h2MarginRight;
}
if(selectedElement == 'content-text1'){

initContentText1MarginRight++;
document.getElementById(selectedElement).style.marginRight = initContentText1MarginRight;
propertyVal = initContentText1MarginRight;
}
if(selectedElement == 'content-text2'){

initContentText2MarginRight++;
document.getElementById(selectedElement).style.marginRight = initContentText2MarginRight;
propertyVal = initContentText2MarginRight;
}
if(selectedElement == 'slider'){

initSliderMarginRight++;
document.getElementById(selectedElement).style.marginRight = initSliderMarginRight;
propertyVal = initSliderMarginRight;
}
if(selectedElement == 'content'){

initContentMarginRight++;
document.getElementById(selectedElement).style.marginRight = initContentMarginRight;
propertyVal = initContentMarginRight;
}
updateAttributes('inputMarginRight',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT MARGIN RIGHT #############################################################################
######################################################################################################################################################################**/

function decrementMarginRight(){

if(selectedElement == 'header'){

initHeaderMarginRight--;
document.getElementById(selectedElement).style.marginRight = initHeaderMarginRight;
propertyVal = initHeaderMarginRight;

}
if(selectedElement == 'footer'){

initFooterMarginRight--;
document.getElementById(selectedElement).style.marginRight = initFooterMarginRight;
propertyVal = initFooterMarginRight;
}

if(selectedElement == 'navigation'){

initNavigationMarginRight--;
document.getElementById(selectedElement).style.marginRight = initNavigationMarginRight;
propertyVal = initNavigationMarginRight;
}

if(selectedElement == 'theme-page'){

initThemePageMarginRight--;
document.getElementById(selectedElement).style.marginRight = initThemePageMarginRight;
propertyVal = initThemePageMarginRight;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSideBarModule1MarginRight;
propertyVal = initSideBarModule1MarginRight;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSideBarModule2MarginRight;
propertyVal = initSideBarModule2MarginRight;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSideBarModule3MarginRight;
propertyVal = initSideBarModule3MarginRight;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSideBarModule4MarginRight;
propertyVal = initSideBarModule4MarginRight;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSideBarModule5MarginRight;
propertyVal = initSideBarModule5MarginRight;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSideBarModule6MarginRight;
propertyVal = initSideBarModule6MarginRight;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSbm1h2MarginRight;
propertyVal = initSbm1h2MarginRight;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSbm2h2MarginRight;
propertyVal = initSbm2h2MarginRight;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSbm3h2MarginRight;
propertyVal = initSbm3h2MarginRight;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSbm4h2MarginRight;
propertyVal = initSbm4h2MarginRight;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSbm5h2MarginRight;
propertyVal = initSbm5h2MarginRight;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2MarginRight--;
document.getElementById(selectedElement).style.marginRight = initSbm6h2MarginRight;
propertyVal = initSbm6h2MarginRight;
}
if(selectedElement == 'content-text1'){

initContentText1MarginRight--;
document.getElementById(selectedElement).style.marginRight = initContentText1MarginRight;
propertyVal = initContentText1MarginRight;
}
if(selectedElement == 'content-text2'){

initContentText2MarginRight--;
document.getElementById(selectedElement).style.marginRight = initContentText2MarginRight;
propertyVal = initContentText2MarginRight;
}
if(selectedElement == 'slider'){

initSliderMarginRight--;
document.getElementById(selectedElement).style.marginRight = initSliderMarginRight;
propertyVal = initSliderMarginRight;
}
if(selectedElement == 'content'){

initContentMarginRight--;
document.getElementById(selectedElement).style.marginRight = initContentMarginRight;
propertyVal = initContentMarginRight;
}

updateAttributes('inputMarginRight',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT MARGIN BOTTOM ############################################################################
######################################################################################################################################################################**/

function incrementMarginBottom(){

if(selectedElement == 'header'){

initHeaderMarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initHeaderMarginBottom;
propertyVal = initHeaderMarginBottom;

}
if(selectedElement == 'footer'){

initFooterMarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initFooterMarginBottom;
propertyVal = initFooterMarginBottom;
}

if(selectedElement == 'navigation'){

initNavigationMarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initNavigationMarginBottom;
propertyVal = initNavigationMarginBottom;
}

if(selectedElement == 'theme-page'){

initThemePageMarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initThemePageMarginBottom;
propertyVal = initThemePageMarginBottom;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule1MarginBottom;
propertyVal = initSideBarModule1MarginBottom;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule2MarginBottom;
propertyVal = initSideBarModule2MarginBottom;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule3MarginBottom;
propertyVal = initSideBarModule3MarginBottom;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule4MarginBottom;
propertyVal = initSideBarModule4MarginBottom;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule5MarginBottom;
propertyVal = initSideBarModule5MarginBottom;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule6MarginBottom;
propertyVal = initSideBarModule6MarginBottom;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSbm1h2MarginBottom;
propertyVal = initSbm1h2MarginBottom;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSbm2h2MarginBottom;
propertyVal = initSbm2h2MarginBottom;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSbm3h2MarginBottom;
propertyVal = initSbm3h2MarginBottom;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSbm4h2MarginBottom;
propertyVal = initSbm4h2MarginBottom;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSbm5h2MarginBottom;
propertyVal = initSbm5h2MarginBottom;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSbm6h2MarginBottom;
propertyVal = initSbm6h2MarginBottom;
}
if(selectedElement == 'content-text1'){

initContentText1MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initContentText1MarginBottom;
propertyVal = initContentText1MarginBottom;
}
if(selectedElement == 'content-text2'){

initContentText2MarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initContentText2MarginBottom;
propertyVal = initContentText2MarginBottom;
}
if(selectedElement == 'slider'){

initSliderMarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initSliderMarginBottom;
propertyVal = initSliderMarginBottom;
}
if(selectedElement == 'content'){

initContentMarginBottom++;
document.getElementById(selectedElement).style.marginBottom = initContentMarginBottom;
propertyVal = initContentMarginBottom;
}

updateAttributes('inputMarginBottom',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT MARGIN BOTTOM ############################################################################
######################################################################################################################################################################**/

function decrementMarginBottom(){

if(selectedElement == 'header'){

initHeaderMarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initHeaderMarginBottom;
propertyVal = initHeaderMarginBottom;

}
if(selectedElement == 'footer'){

initFooterMarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initFooterMarginBottom;
propertyVal = initFooterMarginBottom;
}

if(selectedElement == 'navigation'){

initNavigationMarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initNavigationMarginBottom;
propertyVal = initNavigationMarginBottom;
}

if(selectedElement == 'theme-page'){

initThemePageMarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initThemePageMarginBottom;
propertyVal = initThemePageMarginBottom;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule1MarginBottom;
propertyVal = initSideBarModule1MarginBottom;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule2MarginBottom;
propertyVal = initSideBarModule2MarginBottom;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule3MarginBottom;
propertyVal = initSideBarModule3MarginBottom;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule4MarginBottom;
propertyVal = initSideBarModule4MarginBottom;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule5MarginBottom;
propertyVal = initSideBarModule5MarginBottom;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSideBarModule6MarginBottom;
propertyVal = initSideBarModule6MarginBottom;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSbm1h2MarginBottom;
propertyVal = initSbm1h2MarginBottom;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSbm2h2MarginBottom;
propertyVal = initSbm2h2MarginBottom;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSbm3h2MarginBottom;
propertyVal = initSbm3h2MarginBottom;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSbm4h2MarginBottom;
propertyVal = initSbm4h2MarginBottom;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSbm5h2MarginBottom;
propertyVal = initSbm5h2MarginBottom;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSbm6h2MarginBottom;
propertyVal = initSbm6h2MarginBottom;
}
if(selectedElement == 'content-text1'){

initContentText1MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initContentText1MarginBottom;
propertyVal = initContentText1MarginBottom;
}
if(selectedElement == 'content-text2'){

initContentText2MarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initContentText2MarginBottom;
propertyVal = initContentText2MarginBottom;
}
if(selectedElement == 'slider'){

initSliderMarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initSliderMarginBottom;
propertyVal = initSliderMarginBottom;
}
if(selectedElement == 'content'){

initContentMarginBottom--;
document.getElementById(selectedElement).style.marginBottom = initContentMarginBottom;
propertyVal = initContentMarginBottom;
}

updateAttributes('inputMarginBottom',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT WIDTH ####################################################################################
######################################################################################################################################################################**/

function incrementWidth(){

if(selectedElement == 'header'){

initHeaderWidth++;
document.getElementById(selectedElement).style.width = initHeaderWidth;
propertyVal = initHeaderWidth;

}
if(selectedElement == 'footer'){

initFooterWidth++;
document.getElementById(selectedElement).style.width = initFooterWidth;
propertyVal = initFooterWidth;
}

if(selectedElement == 'navigation'){

initNavigationWidth++;
document.getElementById(selectedElement).style.width = initNavigationWidth;
propertyVal = initNavigationWidth;
}

if(selectedElement == 'theme-page'){

initThemePageWidth++;
document.getElementById(selectedElement).style.width = initThemePageWidth;
propertyVal = initThemePageWidth;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1Width++;
document.getElementById(selectedElement).style.width = initSideBarModule1Width;
propertyVal = initSideBarModule1Width;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2Width++;
document.getElementById(selectedElement).style.width = initSideBarModule2Width;
propertyVal = initSideBarModule2Width;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3Width++;
document.getElementById(selectedElement).style.width = initSideBarModule3Width;
propertyVal = initSideBarModule3Width;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4Width++;
document.getElementById(selectedElement).style.width = initSideBarModule4Width;
propertyVal = initSideBarModule4Width;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5Width++;
document.getElementById(selectedElement).style.width = initSideBarModule5Width;
propertyVal = initSideBarModule5Width;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6Width++;
document.getElementById(selectedElement).style.width = initSideBarModule6Width;
propertyVal = initSideBarModule6Width;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2Width++;
document.getElementById(selectedElement).style.width = initSbm1h2Width;
propertyVal = initSbm1h2Width;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2Width++;
document.getElementById(selectedElement).style.width = initSbm2h2Width;
propertyVal = initSbm2h2Width;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2Width++;
document.getElementById(selectedElement).style.width = initSbm3h2Width;
propertyVal = initSbm3h2Width;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2Width++;
document.getElementById(selectedElement).style.width = initSbm4h2Width;
propertyVal = initSbm4h2Width;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2Width++;
document.getElementById(selectedElement).style.width = initSbm5h2Width;
propertyVal = initSbm5h2Width;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2Width++;
document.getElementById(selectedElement).style.width = initSbm6h2Width;
propertyVal = initSbm6h2Width;
}
if(selectedElement == 'content-text1'){

initContentText1Width++;
document.getElementById(selectedElement).style.width = initContentText1Width;
propertyVal = initContentText1Width;
}
if(selectedElement == 'content-text2'){

initContentText2Width++;
document.getElementById(selectedElement).style.width = initContentText2Width;
propertyVal = initContentText2Width;
}
if(selectedElement == 'slider'){

initSliderWidth++;
document.getElementById(selectedElement).style.minWidth = initSliderWidth;
propertyVal = initSliderWidth;
}
updateAttributes('inputWidth',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT WIDTH ####################################################################################
######################################################################################################################################################################**/

function decrementWidth(){

if(selectedElement == 'header'){

initHeaderWidth--;
document.getElementById(selectedElement).style.width = initHeaderWidth;
propertyVal = initHeaderWidth;

}
if(selectedElement == 'footer'){

initFooterWidth--;
document.getElementById(selectedElement).style.width = initFooterWidth;
propertyVal = initFooterWidth;
}

if(selectedElement == 'navigation'){

initNavigationWidth--;
document.getElementById(selectedElement).style.width = initNavigationWidth;
propertyVal = initNavigationWidth;
}

if(selectedElement == 'theme-page'){

initThemePageWidth--;
document.getElementById(selectedElement).style.width = initThemePageWidth;
propertyVal = initThemePageWidth;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1Width--;
document.getElementById(selectedElement).style.width = initSideBarModule1Width;
propertyVal = initSideBarModule1Width;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2Width--;
document.getElementById(selectedElement).style.width = initSideBarModule2Width;
propertyVal = initSideBarModule2Width;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3Width--;
document.getElementById(selectedElement).style.width = initSideBarModule3Width;
propertyVal = initSideBarModule3Width;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4Width--;
document.getElementById(selectedElement).style.width = initSideBarModule4Width;
propertyVal = initSideBarModule4Width;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5Width--;
document.getElementById(selectedElement).style.width = initSideBarModule5Width;
propertyVal = initSideBarModule5Width;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6Width--;
document.getElementById(selectedElement).style.width = initSideBarModule6Width;
propertyVal = initSideBarModule6Width;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2Width--;
document.getElementById(selectedElement).style.width = initSbm1h2Width;
propertyVal = initSbm1h2Width;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2Width--;
document.getElementById(selectedElement).style.width = initSbm2h2Width;
propertyVal = initSbm2h2Width;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2Width--;
document.getElementById(selectedElement).style.width = initSbm3h2Width;
propertyVal = initSbm3h2Width;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2Width--;
document.getElementById(selectedElement).style.width = initSbm4h2Width;
propertyVal = initSbm4h2Width;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2Width--;
document.getElementById(selectedElement).style.width = initSbm5h2Width;
propertyVal = initSbm5h2Width;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2Width--;
document.getElementById(selectedElement).style.width = initSbm6h2Width;
propertyVal = initSbm6h2Width;
}
if(selectedElement == 'content-text1'){

initContentText1Width--;
document.getElementById(selectedElement).style.width = initContentText1Width;
propertyVal = initContentText1Width;
}
if(selectedElement == 'content-text2'){

initContentText2Width--;
document.getElementById(selectedElement).style.width = initContentText2Width;
propertyVal = initContentText2Width;
}
if(selectedElement == 'slider'){

initSliderWidth--;
document.getElementById(selectedElement).style.minWidth = initSliderWidth;
propertyVal = initSliderWidth;
}
updateAttributes('inputWidth',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### INCREMENT HEIGHT ###################################################################################
######################################################################################################################################################################**/

function incrementHeight(){

if(selectedElement == 'header'){

initHeaderHeight++;
document.getElementById(selectedElement).style.minHeight = initHeaderHeight;
propertyVal = initHeaderHeight;

}
if(selectedElement == 'footer'){

initFooterHeight++;
document.getElementById(selectedElement).style.minHeight = initFooterHeight;
propertyVal = initFooterHeight;
}

if(selectedElement == 'navigation'){

initNavigationHeight++;
document.getElementById(selectedElement).style.minHeight = initNavigationHeight;
propertyVal = initNavigationHeight;
}

if(selectedElement == 'theme-page'){

initThemePageHeight++;
document.getElementById(selectedElement).style.minHeight = initThemePageHeight;
propertyVal = initThemePageHeight;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1Height++;
document.getElementById(selectedElement).style.minHeight = initSideBarModule1Height;
propertyVal = initSideBarModule1Height;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2Height++;
document.getElementById(selectedElement).style.minHeight = initSideBarModule2Height;
propertyVal = initSideBarModule2Height;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3Height++;
document.getElementById(selectedElement).style.minHeight = initSideBarModule3Height;
propertyVal = initSideBarModule3Height;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4Height++;
document.getElementById(selectedElement).style.minHeight = initSideBarModule4Height;
propertyVal = initSideBarModule4Height;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5Height++;
document.getElementById(selectedElement).style.minHeight = initSideBarModule5Height;
propertyVal = initSideBarModule5Height;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6Height++;
document.getElementById(selectedElement).style.minHeight = initSideBarModule6Height;
propertyVal = initSideBarModule6Height;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2Height++;
document.getElementById(selectedElement).style.minHeight = initSbm1h2Height;
propertyVal = initSbm1h2Height;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2Height++;
document.getElementById(selectedElement).style.minHeight = initSbm2h2Height;
propertyVal = initSbm2h2Height;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2Height++;
document.getElementById(selectedElement).style.minHeight = initSbm3h2Height;
propertyVal = initSbm3h2Height;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2Height++;
document.getElementById(selectedElement).style.minHeight = initSbm4h2Height;
propertyVal = initSbm4h2Height;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2Height++;
document.getElementById(selectedElement).style.minHeight = initSbm5h2Height;
propertyVal = initSbm5h2Height;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2Height++;
document.getElementById(selectedElement).style.minHeight = initSbm6h2Height;
propertyVal = initSbm6h2Height;
}
if(selectedElement == 'content-text1'){

initContentText1Height++;
document.getElementById(selectedElement).style.minHeight = initContentText1Height;
propertyVal = initContentText1Height;
}
if(selectedElement == 'content-text2'){

initContentText2Height++;
document.getElementById(selectedElement).style.minHeight = initContentText2Height;
propertyVal = initContentText2Height;
}
if(selectedElement == 'slider'){

initSliderHeight++;
document.getElementById(selectedElement).style.minHeight = initSliderHeight;
propertyVal = initSliderHeight;
}

updateAttributes('inputHeight',propertyVal);

}

/**######################################################################################################################################################################
#################################################################### DECREMENT HEIGHT ###################################################################################
######################################################################################################################################################################**/

function decrementHeight(){

if(selectedElement == 'header'){

initHeaderHeight--;
document.getElementById(selectedElement).style.minHeight = initHeaderHeight;
propertyVal = initHeaderHeight;

}
if(selectedElement == 'footer'){

initFooterHeight--;
document.getElementById(selectedElement).style.minHeight = initFooterHeight;
propertyVal = initFooterHeight;
}

if(selectedElement == 'navigation'){

initNavigationHeight--;
document.getElementById(selectedElement).style.minHeight = initNavigationHeight;
propertyVal = initNavigationHeight;
}

if(selectedElement == 'theme-page'){

initThemePageHeight--;
document.getElementById(selectedElement).style.minHeight = initThemePageHeight;
propertyVal = initThemePageHeight;
}

if(selectedElement == 'side-bar-module1'){

initSideBarModule1Height--;
document.getElementById(selectedElement).style.minHeight = initSideBarModule1Height;
propertyVal = initSideBarModule1Height;
}

if(selectedElement == 'side-bar-module2'){

initSideBarModule2Height--;
document.getElementById(selectedElement).style.minHeight = initSideBarModule2Height;
propertyVal = initSideBarModule2Height;
}
if(selectedElement == 'side-bar-module3'){

initSideBarModule3Height--;
document.getElementById(selectedElement).style.minHeight = initSideBarModule3Height;
propertyVal = initSideBarModule3Height;
}
if(selectedElement == 'side-bar-module4'){

initSideBarModule4Height--;
document.getElementById(selectedElement).style.minHeight = initSideBarModule4Height;
propertyVal = initSideBarModule4Height;
}
if(selectedElement == 'side-bar-module5'){

initSideBarModule5Height--;
document.getElementById(selectedElement).style.minHeight = initSideBarModule5Height;
propertyVal = initSideBarModule5Height;
}
if(selectedElement == 'side-bar-module6'){

initSideBarModule6Height--;
document.getElementById(selectedElement).style.minHeight = initSideBarModule6Height;
propertyVal = initSideBarModule6Height;
}
if(selectedElement == 'sbm1h2'){

initSbm1h2Height--;
document.getElementById(selectedElement).style.minHeight = initSbm1h2Height;
propertyVal = initSbm1h2Height;
}
if(selectedElement == 'sbm2h2'){

initSbm2h2Height--;
document.getElementById(selectedElement).style.minHeight = initSbm2h2Height;
propertyVal = initSbm2h2Height;
}
if(selectedElement == 'sbm3h2'){

initSbm3h2Height--;
document.getElementById(selectedElement).style.minHeight = initSbm3h2Height;
propertyVal = initSbm3h2Height;
}
if(selectedElement == 'sbm4h2'){

initSbm4h2Height--;
document.getElementById(selectedElement).style.minHeight = initSbm4h2Height;
propertyVal = initSbm4h2Height;
}
if(selectedElement == 'sbm5h2'){

initSbm5h2Height--;
document.getElementById(selectedElement).style.minHeight = initSbm5h2Height;
propertyVal = initSbm5h2Height;
}
if(selectedElement == 'sbm6h2'){

initSbm6h2Height--;
document.getElementById(selectedElement).style.minHeight = initSbm6h2Height;
propertyVal = initSbm6h2Height;
}
if(selectedElement == 'content-text1'){

initContentText1Height--;
document.getElementById(selectedElement).style.minHeight = initContentText1Height;
propertyVal = initContentText1Height;
}
if(selectedElement == 'content-text2'){

initContentText2Height--;
document.getElementById(selectedElement).style.minHeight = initContentText2Height;
propertyVal = initContentText2Height;
}
if(selectedElement == 'slider'){

initSliderHeight--;
document.getElementById(selectedElement).style.minHeight = initSliderHeight;
propertyVal = initSliderHeight;
}
updateAttributes('inputHeight',propertyVal);

}
