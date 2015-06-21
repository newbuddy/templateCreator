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
/**###########################################################################################################################################################
########################################################## DECLARATION #######################################################################################
###########################################################################################################################################################**/

var color, clr = 0, bg = 0, borderbg = 0, howToUseInitValue = 1360, howToUseMarginTop = 130, codeWrapInitValue = 1360, initAttributesMarginLeft = 1360, initOptionsMarginTop = 708;
var initAttributesMarginTop = 130;
var prev = '', setProperty, timer = 3, timerCount = 0, selectedElement = '';
var initThemePageBackground, initThemePageBackupBackground, initThemePageGradient, initThemePageGradientType, initThemePageColor, initThemePageWidth, initThemePageMinHeight, initThemePageOutline, initThemePageMarginLeft, initThemePageMarginRight, initThemePageMarginTop, initThemePageMarginBottom, initThemePagePaddingLeft, initThemePagePaddingRight, initThemePagePaddingTop, initThemePagePaddingBottom, initThemePageFontSize, initThemePageFontFamily, initThemePageOpacity, initThemePageBorderWeight, initThemePageBorderBg, initThemePageBorderBgBackup, initThemePageBorderRadiusTopLeft, initThemePageBorderRadiusTopRight, initThemePageBorderRadiusBottomLeft, initThemePageBorderRadiusBottomRight; 
var initHeaderBackground, initHeaderBackupBackground, initHeaderGradient, initHeaderGradientType, initHeaderColor, initHeaderWidth, initHeaderHeight, initHeaderOutline, initHeaderMarginLeft, initHeaderMarginRight, initHeaderMarginTop, initHeaderMarginBottom, initHeaderPaddingLeft, initHeaderPaddingRight, initHeaderPaddingTop, initHeaderPaddingBottom, initHeaderFontSize, initHeaderFontFamily, initHeaderOpacity, initHeaderBorderWeight, initHeaderBorderType, initHeaderBorderBg, initHeaderBorderBgBackup, initHeaderBorderRadiusTopLeft, initHeaderBorderRadiusTopRight, initHeaderBorderRadiusBottomLeft, initHeaderBorderRadiusBottomRight; 
var initFooterBackground, initFooterBackupBackground, initFooterGradient, initFooterGradientType, initFooterColor, initFooterWidth, initFooterHeight, initFooterOutline, initFooterMarginLeft, initFooterMarginRight, initFooterMarginTop, initFooterMarginBottom, initFooterPaddingLeft, initFooterPaddingRight, initFooterPaddingTop, initFooterPaddingBottom, initFooterFontSize, initFooterFontFamily, initFooterOpacity, initFooterBorderWeight, initFooterBorderType, initFooterBorderBg, initFooterBorderBgBackup, initFooterBorderRadiusTopLeft, initFooterBorderRadiusTopRight, initFooterBorderRadiusBottomLeft, initFooterBorderRadiusBottomRight;
var initNavigationBackground, initNavigationBackupBackground, initNavigationGradient, initNavigationGradientType, initNavigationColor, initNavigationWidth, initNavigationHeight, initNavigationOutline, initNavigationMarginLeft, initNavigationMarginRight, initNavigationMarginTop, initNavigationMarginBottom, initNavigationPaddingLeft, initNavigationPaddingRight, initNavigationPaddingTop, initNavigationPaddingBottom, initNavigationFontSize, initNavigationFontFamily, initNavigationOpacity, initNavigationBorderWeight, initNavigationBorderType, initNavigationBorderBg, initNavigationBorderBgBackup, initNavigationBorderRadiusTopLeft, initNavigationBorderRadiusTopRight, initNavigationBorderRadiusBottomLeft, initNavigationBorderRadiusBottomRight;
var initSideBarModule1Background, initSideBarModule1BackupBackground, initSideBarModule1Gradient, initSideBarModule1GradientType, initSideBarModule1Color, initSideBarModule1Width, initSideBarModule1Height, initSideBarModule1Outline, initSideBarModule1MarginLeft, initSideBarModule1MarginRight, initSideBarModule1MarginTop, initSideBarModule1MarginBottom, initSideBarModule1PaddingLeft, initSideBarModule1PaddingRight, initSideBarModule1PaddingTop, initSideBarModule1PaddingBottom, initSideBarModule1FontSize, initSideBarModule1FontFamily, initSideBarModule1Opacity, initSideBarModule1BorderWeight, initSideBarModule1BorderType, initSideBarModule1BorderBg, initSideBarModule1BorderBgBackup, initSideBarModule1BorderRadiusTopLeft, initSideBarModule1BorderRadiusTopRight, initSideBarModule1BorderRadiusBottomLeft, initSideBarModule1BorderRadiusBottomRight; 
var initSideBarModule2Background, initSideBarModule2BackupBackground, initSideBarModule2Gradient, initSideBarModule2GradientType, initSideBarModule2Color, initSideBarModule2Width, initSideBarModule2Height, initSideBarModule2Outline, initSideBarModule2MarginLeft, initSideBarModule2MarginRight, initSideBarModule2MarginTop, initSideBarModule2MarginBottom, initSideBarModule2PaddingLeft, initSideBarModule2PaddingRight, initSideBarModule2PaddingTop, initSideBarModule2PaddingBottom, initSideBarModule2FontSize, initSideBarModule2FontFamily, initSideBarModule2Opacity, initSideBarModule2BorderWeight, initSideBarModule2BorderType, initSideBarModule2BorderBg, initSideBarModule2BorderBgBackup, initSideBarModule2BorderRadiusTopLeft, initSideBarModule2BorderRadiusTopRight, initSideBarModule2BorderRadiusBottomLeft, initSideBarModule2BorderRadiusBottomRight; 
var initSideBarModule3Background, initSideBarModule3BackupBackground, initSideBarModule3Gradient, initSideBarModule3GradientType, initSideBarModule3Color, initSideBarModule3Width, initSideBarModule3Height, initSideBarModule3Outline, initSideBarModule3MarginLeft, initSideBarModule3MarginRight, initSideBarModule3MarginTop, initSideBarModule3MarginBottom, initSideBarModule3PaddingLeft, initSideBarModule3PaddingRight, initSideBarModule3PaddingTop, initSideBarModule3PaddingBottom, initSideBarModule3FontSize, initSideBarModule3FontFamily, initSideBarModule3Opacity, initSideBarModule3BorderWeight, initSideBarModule3BorderType, initSideBarModule3BorderBg, initSideBarModule3BorderBgBackup, initSideBarModule3BorderRadiusTopLeft, initSideBarModule3BorderRadiusTopRight, initSideBarModule3BorderRadiusBottomLeft, initSideBarModule3BorderRadiusBottomRight; 
var initSideBarModule4Background, initSideBarModule4BackupBackground, initSideBarModule4Gradient, initSideBarModule4GradientType, initSideBarModule4Color, initSideBarModule4Width, initSideBarModule4Height, initSideBarModule4Outline, initSideBarModule4MarginLeft, initSideBarModule4MarginRight, initSideBarModule4MarginTop, initSideBarModule4MarginBottom, initSideBarModule4PaddingLeft, initSideBarModule4PaddingRight, initSideBarModule4PaddingTop, initSideBarModule4PaddingBottom, initSideBarModule4FontSize, initSideBarModule4FontFamily, initSideBarModule4Opacity, initSideBarModule4BorderWeight, initSideBarModule4BorderType, initSideBarModule4BorderBg, initSideBarModule4BorderBgBackup, initSideBarModule4BorderRadiusTopLeft, initSideBarModule4BorderRadiusTopRight, initSideBarModule4BorderRadiusBottomLeft, initSideBarModule4BorderRadiusBottomRight; 
var initSideBarModule5Background, initSideBarModule5BackupBackground, initSideBarModule5Gradient, initSideBarModule5GradientType, initSideBarModule5Color, initSideBarModule5Width, initSideBarModule5Height, initSideBarModule5Outline, initSideBarModule5MarginLeft, initSideBarModule5MarginRight, initSideBarModule5MarginTop, initSideBarModule5MarginBottom, initSideBarModule5PaddingLeft, initSideBarModule5PaddingRight, initSideBarModule5PaddingTop, initSideBarModule5PaddingBottom, initSideBarModule5FontSize, initSideBarModule5FontFamily, initSideBarModule5Opacity, initSideBarModule5BorderWeight, initSideBarModule5BorderType, initSideBarModule5BorderBg, initSideBarModule5BorderBgBackup, initSideBarModule5BorderRadiusTopLeft, initSideBarModule5BorderRadiusTopRight, initSideBarModule5BorderRadiusBottomLeft, initSideBarModule5BorderRadiusBottomRight; 
var initSideBarModule6Background, initSideBarModule6BackupBackground, initSideBarModule6Gradient, initSideBarModule6GradientType, initSideBarModule6Color, initSideBarModule6Width, initSideBarModule6Height, initSideBarModule6Outline, initSideBarModule6MarginLeft, initSideBarModule6MarginRight, initSideBarModule6MarginTop, initSideBarModule6MarginBottom, initSideBarModule6PaddingLeft, initSideBarModule6PaddingRight, initSideBarModule6PaddingTop, initSideBarModule6PaddingBottom, initSideBarModule6FontSize, initSideBarModule6FontFamily, initSideBarModule6Opacity, initSideBarModule6BorderWeight, initSideBarModule6BorderType, initSideBarModule6BorderBg, initSideBarModule6BorderBgBackup, initSideBarModule6BorderRadiusTopLeft, initSideBarModule6BorderRadiusTopRight, initSideBarModule6BorderRadiusBottomLeft, initSideBarModule6BorderRadiusBottomRight; 
var initContentText1Background, initContentText1BackupBackground, initContentText1Gradient, initContentText1GradientType, initContentText1Color, initContentText1Width, initContentText1Height, initContentText1Outline, initContentText1MarginLeft, initContentText1MarginRight, initContentText1MarginTop, initContentText1MarginBottom, initContentText1PaddingLeft, initContentText1PaddingRight, initContentText1PaddingTop, initContentText1PaddingBottom, initContentText1FontSize, initContentText1FontFamily, initContentText1Opacity, initContentText1BorderWeight, initContentText1BorderType, initContentText1BorderBg, initContentText1BorderBgBackup, initContentText1BorderRadiusTopLeft, initContentText1BorderRadiusTopRight, initContentText1BorderRadiusBottomLeft, initContentText1BorderRadiusBottomRight;
var initContentText2Background, initContentText1BackupBackground, initContentText2Gradient, initContentText2GradientType, initContentText2Color, initContentText2Width, initContentText2Height, initContentText2Outline, initContentText2MarginLeft, initContentText2MarginRight, initContentText2MarginTop, initContentText2MarginBottom, initContentText2PaddingLeft, initContentText2PaddingRight, initContentText2PaddingTop, initContentText2PaddingBottom, initContentText2FontSize, initContentText2FontFamily, initContentText2Opacity, initContentText2BorderWeight, initContentText2BorderType, initContentText2BorderBg, initContentText2BorderBgBackup, initContentText2BorderRadiusTopLeft, initContentText2BorderRadiusTopRight, initContentText2BorderRadiusBottomLeft, initContentText2BorderRadiusBottomRight; 		
var initSliderBackground, initSliderBackupBackground, initSliderGradient, initSliderColor, initSliderWidth, initSliderHeight, initSliderOutline, initSliderMarginLeft, initSliderMarginRight, initSliderMarginTop, initSliderMarginBottom, initSliderPaddingLeft, initSliderPaddingRight, initSliderPaddingTop, initSliderPaddingBottom, initSliderFontSize, initSliderFontFamily, initSliderOpacity, initSliderBorderWeight, initSliderBorderType, initSliderBorderBg, initSliderBorderBgBackup, initSliderBorderRadiusTopLeft, initSliderBorderRadiusTopRight, initSliderBorderRadiusBottomLeft, initSliderBorderRadiusBottomRight; 		
var initSbm1h2Background, initSbm1h2BackupBackground, initSbm1h2Gradient, initSbm1h2GradientType, initSbm1h2Color, initSbm1h2Width, initSbm1h2Height, initSbm1h2Outline, initSbm1h2MarginLeft, initSbm1h2MarginRight, initSbm1h2MarginTop, initSbm1h2MarginBottom, initSbm1h2PaddingLeft, initSbm1h2PaddingRight, initSbm1h2PaddingTop, initSbm1h2PaddingBottom, initSbm1h2FontSize, initSbm1h2FontFamily, initSbm1h2BorderWeight, initSbm1h2BorderType, initSbm1h2BorderBg, initSbm1h2BorderBgBackup, initSbm1h2BorderRadiusTopLeft, initSbm1h2BorderRadiusTopRight, initSbm1h2BorderRadiusBottomLeft, initSbm1h2BorderRadiusBottomRight;
var initSbm2h2Background, initSbm2h2BackupBackground, initThemePageBackground, initSbm2h2Gradient, initSbm2h2GradientType, initSbm2h2Color, initSbm2h2Width, initSbm2h2Height, initSbm2h2Outline, initSbm2h2MarginLeft, initSbm2h2MarginRight, initSbm2h2MarginTop, initSbm2h2MarginBottom, initSbm2h2PaddingLeft, initSbm2h2PaddingRight, initSbm2h2PaddingTop, initSbm2h2PaddingBottom, initSbm2h2FontSize, initSbm2h2FontFamily, initSbm2h2BorderWeight, initSbm2h2BorderType, initSbm2h2BorderBg, initSbm2h2BorderBgBackup, initSbm2h2BorderRadiusTopLeft, initSbm2h2BorderRadiusTopRight, initSbm2h2BorderRadiusBottomLeft, initSbm2h2BorderRadiusBottomRight;
var initSbm3h2Background, initSbm3h2BackupBackground, initSbm3h2Gradient, initSbm3h2GradientType, initSbm3h2Color, initSbm3h2Width, initSbm3h2Height, initSbm3h2Outline, initSbm3h2MarginLeft, initSbm3h2MarginRight, initSbm3h2MarginTop, initSbm3h2MarginBottom, initSbm3h2PaddingLeft, initSbm3h2PaddingRight, initSbm3h2PaddingTop, initSbm3h2PaddingBottom, initSbm3h2FontSize, initSbm3h2FontFamily, initSbm3h2BorderWeight, initSbm3h2BorderType, initSbm3h2BorderBg, initSbm3h2BorderBgBackup, initSbm3h2BorderRadiusTopLeft, initSbm3h2BorderRadiusTopRight, initSbm3h2BorderRadiusBottomLeft, initSbm3h2BorderRadiusBottomRight;
var initSbm4h2Background, initSbm4h2BackupBackground, initSbm4h2Gradient, initSbm4h2GradientType, initSbm4h2Color, initSbm4h2Width, initSbm4h2Height, initSbm4h2Outline, initSbm4h2MarginLeft, initSbm4h2MarginRight, initSbm4h2MarginTop, initSbm4h2MarginBottom, initSbm4h2PaddingLeft, initSbm4h2PaddingRight, initSbm4h2PaddingTop, initSbm4h2PaddingBottom, initSbm4h2FontSize, initSbm4h2FontFamily, initSbm4h2BorderWeight, initSbm4h2BorderType, initSbm4h2BorderBg, initSbm4h2BorderBgBackup, initSbm4h2BorderRadiusTopLeft, initSbm4h2BorderRadiusTopRight, initSbm4h2BorderRadiusBottomLeft, initSbm4h2BorderRadiusBottomRight;
var initSbm5h2Background, initSbm5h2BackupBackground, initSbm5h2Gradient, initSbm5h2GradientType, initSbm5h2Color, initSbm5h2Width, initSbm5h2Height, initSbm5h2Outline, initSbm5h2MarginLeft, initSbm5h2MarginRight, initSbm5h2MarginTop, initSbm5h2MarginBottom, initSbm5h2PaddingLeft, initSbm5h2PaddingRight, initSbm5h2PaddingTop, initSbm5h2PaddingBottom, initSbm5h2FontSize, initSbm5h2FontFamily, initSbm5h2BorderWeight, initSbm5h2BorderType, initSbm5h2BorderBg, initSbm5h2BorderBgBackup, initSbm5h2BorderRadiusTopLeft, initSbm5h2BorderRadiusTopRight, initSbm5h2BorderRadiusBottomLeft, initSbm5h2BorderRadiusBottomRight;
var initSbm6h2Background, initSbm6h2BackupBackground, initSbm6h2Gradient, initSbm6h2GradientType, initSbm6h2Color, initSbm6h2Width, initSbm6h2Height, initSbm6h2Outline, initSbm6h2MarginLeft, initSbm6h2MarginRight, initSbm6h2MarginTop, initSbm6h2MarginBottom, initSbm6h2PaddingLeft, initSbm6h2PaddingRight, initSbm6h2PaddingTop, initSbm6h2PaddingBottom, initSbm6h2FontSize, initSbm6h2FontFamily, initSbm6h2BorderWeight, initSbm6h2BorderType, initSbm6h2BorderBg, initSbm6h2BorderBgBackup, initSbm6h2BorderRadiusTopLeft, initSbm6h2BorderRadiusTopRight, initSbm6h2BorderRadiusBottomLeft, initSbm6h2BorderRadiusBottomRight;
var initSelectedColor, initSelectedBackupBackground, initSelectedGradient, initSelectedGradientType, initSelectedBackground, initSelectedOpacity, initSelectedFontSize, initSelectedFontFamily, initSelectedBorderWeight, initSelectedBorderType, initSelectedBorderBg, initSelectedBorderBgBackup, initSelectedBorderRadiusTopLeft, initSelectedBorderRadiusTopRight, initSelectedBorderRadiusBottomLeft, initSelectedBorderRadiusBottomRight;
var initContentBackground, initThemePageBackground, initContentGradient, initContentGradientType, initContentOpacity, initContentFontFamily, initContentHeight, initContentWidth, initContentMarginLeft, initContentMarginRight, initContentMarginTop, initContentMarginBottom, initContentBorderWeight, initContentBorderBg, initContentBorderRadiusTopLeft, initContentBorderRadiusTopRight, initContentBorderRadiusBottomLeft, initContentBorderRadiusBottomRight;
		
var contentText1Text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'; 
	contentText1Text += 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'; 
	contentText1Text += 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero'; 
	contentText1Text += 'eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';
var contentText2Text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'; 
	contentText2Text += 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'; 
	contentText2Text += 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero'; 
	contentText2Text += 'eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';
var Sbm1h2Text = 'Products', Sbm2h2Text = 'Top News', Sbm3h2Text = 'Latest', Sbm4h2Text = 'Follow', Sbm5h2Text = 'Partners', Sbm6h2Text = 'Brands';
var FooterText = 'Copyrights © Default 2013';
var SelectedText = 'Home';
var product1Text = 'Product1', product2Text = 'Product2', product3Text = 'Product3';
var partner1Text = 'Partner1', partner2Text = 'Partner2', partner3Text = 'Partner3';
var brand1Text = 'Brand1', brand2Text = 'Brand2', brand3Text = 'Brand3', brand4Text = 'Brand4', brand5Text = 'Brand5';
var latest1Text = "Yippe I'm feeling lucky!", latest2Text = "Yes Something went wrong!", latest3Text = "There is more to celebrate.";
var topnews1Text = "Yippe I'm feeling lucky!", topnews2Text = "Yes Something went wrong!", topnews3Text = "There is more to celebrate.", topnews4Text = "Another good offer for all!";
var aboutText = 'About', contactText = 'Contact', privacyText = 'Privacy';

/**###########################################################################################################################################################
########################################################## SET INITIAL VALUES ################################################################################
###########################################################################################################################################################**/

function setInitialVals(){
	initThemePageBackground = "#e7eaea";
	initThemePageBackupBackground = "#e7eaea";
	initThemePageColor = "black";
	initThemePageWidth = 520;
	initThemePageHeight = 'auto';
	initThemePageMarginLeft = 0;
	initThemePageMarginRight = 0;
	initThemePageMarginTop = 0;
	initThemePageMarginBottom = 0;
	initThemePagePaddingLeft = 0;
	initThemePagePaddingRight = 0;
	initThemePagePaddingTop = 0;
	initThemePagePaddingBottom = 0;
	initThemePageFontSize = 14;
	initThemePageFontFamily = "Tahoma";
	initThemePageOpacity = 1;
	initThemePageGradient = 0;
	initThemePageGradientType = 'topwhite';
	
	
	initHeaderBackground = "#627a66";
	initHeaderBackupBackground = "#627a66";
	initHeaderColor = "white";
	initHeaderWidth = 520;
	initHeaderHeight = 48;
	initHeaderMarginLeft = 0;
	initHeaderMarginRight = 0;
	initHeaderMarginTop = 0;
	initHeaderMarginBottom = 0;
	initHeaderPaddingLeft = 0;
	initHeaderPaddingRight = 0;
	initHeaderPaddingTop = 0;
	initHeaderPaddingBottom = 0;
	initHeaderFontSize = 14;
	initHeaderFontFamily = "Tahoma";
	initHeaderOpacity = 1;
	initHeaderBorderWeight = 0; 
	initHeaderBorderType = 'All'; 
	initHeaderBorderBg = 'None';			
	initHeaderBorderRadiusTopLeft = 0; 
	initHeaderBorderRadiusTopRight = 0;
	initHeaderBorderRadiusBottomLeft = 0; 
	initHeaderBorderRadiusBottomRight = 0;
	initHeaderGradient = 0;
	initHeaderGradientType = 'topwhite';
	
	initFooterBackground = "#627a66";
	initFooterBackupBackground = "#627a66";
	initFooterColor = "white";
	initFooterWidth = 520;
	initFooterHeight = 17;
	initFooterMarginLeft = 0;
	initFooterMarginRight = 0;
	initFooterMarginTop = 81;
	initFooterMarginBottom = 0;
	initFooterPaddingLeft = 0;
	initFooterPaddingRight = 0;
	initFooterPaddingTop = 4;
	initFooterPaddingBottom = 0;
	initFooterFontSize = 8;
	initFooterFontFamily = "Arial";
	initFooterOpacity = 1;
	initFooterBorderWeight = 0;
	initFooterBorderType = 'All'; 			
	initFooterBorderBg = 'None';			
	initFooterBorderRadiusTopLeft = 0; 
	initFooterBorderRadiusTopRight = 0;
	initFooterBorderRadiusBottomLeft = 0; 
	initFooterBorderRadiusBottomRight = 0;
	initFooterGradient = 0;
	initFooterGradientType = 'topwhite';
	
	initNavigationBackground = "#2f3430";
	initNavigationBackupBackground = "#2f3430";
	initNavigationColor = "white";
	initNavigationWidth = 520;
	initNavigationHeight = 17;
	initNavigationMarginLeft = 0;
	initNavigationMarginRight = 0;
	initNavigationMarginTop = 0;
	initNavigationMarginBottom = 0;
	initNavigationPaddingLeft = 0;
	initNavigationPaddingRight = 0;
	initNavigationPaddingTop = 0;
	initNavigationPaddingBottom = 0;
	initNavigationFontSize = 10;
	initNavigationFontFamily = "Arial";
	initNavigationOpacity = 1;
	initNavigationBorderWeight = 0; 
	initNavigationBorderType = 'All'; 
	initNavigationBorderBg = 'None';			
	initNavigationBorderRadiusTopLeft = 0; 
	initNavigationBorderRadiusTopRight = 0;
	initNavigationBorderRadiusBottomLeft = 0; 
	initNavigationBorderRadiusBottomRight = 0;
	initNavigationGradient = 0;
	initNavigationGradientType = 'topwhite';
	
	initContentBackground = "#e7eaea";
	initContentColor = "white";
	initContentWidth = 486;
	initContentHeight = 'auto';
	initContentMarginLeft = 4;
	initContentMarginRight = 0;
	initContentMarginTop = 34;
	initContentMarginBottom = 0;
	initContentPaddingLeft = 0;
	initContentPaddingRight = 0;
	initContentPaddingTop = 0;
	initContentPaddingBottom = 0;
	initContentOpacity = 'Fixed';
	initContentFontFamily = 'Fixed';
	initContentGradient = 0;
	initContentGradientType = 'topwhite';
	
	initSelectedColor = "#bce377";
	initSelectedBackground = "";
	initSelectedBackupBackground = "";
	initSelectedOpacity = 1;
	initSelectedFontSize = 10;
	initSelectedFontFamily = 'Arial';
	initSelectedBorderWeight = 0; 
	initSelectedBorderType = 'All'; 
	initSelectedBorderBg = 'None';			
	initSelectedBorderRadiusTopLeft = 0; 
	initSelectedBorderRadiusTopRight = 0;
	initSelectedBorderRadiusBottomLeft = 0; 
	initSelectedBorderRadiusBottomRight = 0;
	initSelectedGradient = 0;
	initSelectedGradientType = 'topwhite';
	
	initSideBarModule1Background = "lightgray";
	initSideBarModule1BackupBackground = "lightgray";
	initSideBarModule1Color = "black";
	initSideBarModule1Width = 81;
	initSideBarModule1Height = 'auto';
	initSideBarModule1MarginLeft = 0;
	initSideBarModule1MarginRight = 0;
	initSideBarModule1MarginTop = 0;
	initSideBarModule1MarginBottom = 0;
	initSideBarModule1PaddingLeft = 0;
	initSideBarModule1PaddingRight = 0;
	initSideBarModule1PaddingTop = 0;
	initSideBarModule1PaddingBottom = 5;
	initSideBarModule1FontSize = 7;
	initSideBarModule1FontFamily = "Arial";
	initSideBarModule1Opacity = 1;
	initSideBarModule1BorderWeight = 0; 
	initSideBarModule1BorderType = 'All'; 
	initSideBarModule1BorderBg = 'None';			
	initSideBarModule1BorderRadiusTopLeft = 0; 
	initSideBarModule1BorderRadiusTopRight = 0;
	initSideBarModule1BorderRadiusBottomLeft = 0; 
	initSideBarModule1BorderRadiusBottomRight = 0;
	initSideBarModule1Gradient = 0;
	initSideBarModule1GradientType = 'topwhite';
	
	initSideBarModule2Background = "lightgray";
	initSideBarModule2BackupBackground = "lightgray";
	initSideBarModule2Color = "black";
	initSideBarModule2Width = 95;
	initSideBarModule2Height = 'auto';
	initSideBarModule2MarginLeft = 0;
	initSideBarModule2MarginRight = 0;
	initSideBarModule2MarginTop = 14;
	initSideBarModule2MarginBottom = 0;
	initSideBarModule2PaddingLeft = 0;
	initSideBarModule2PaddingRight = 0;
	initSideBarModule2PaddingTop = 0;
	initSideBarModule2PaddingBottom = 5;
	initSideBarModule2FontSize = 7;
	initSideBarModule2FontFamily = "Arial";
	initSideBarModule2Opacity = 1;
	initSideBarModule2BorderWeight = 0; 
	initSideBarModule2BorderType = 'All';
	initSideBarModule2BorderBg = 'None';			
	initSideBarModule2BorderRadiusTopLeft = 0; 
	initSideBarModule2BorderRadiusTopRight = 0;
	initSideBarModule2BorderRadiusBottomLeft = 0; 
	initSideBarModule2BorderRadiusBottomRight = 0;
	initSideBarModule2Gradient = 0;
	initSideBarModule2GradientType = 'topwhite';
	
	initSideBarModule3Background = "lightgray";
	initSideBarModule3BackupBackground = "lightgray";
	initSideBarModule3Color = "black";
	initSideBarModule3Width = 95;
	initSideBarModule3Height = 'auto';
	initSideBarModule3MarginLeft = 0;
	initSideBarModule3MarginRight = 0;
	initSideBarModule3MarginTop = 14;
	initSideBarModule3MarginBottom = 0;
	initSideBarModule3PaddingLeft = 0;
	initSideBarModule3PaddingRight = 0;
	initSideBarModule3PaddingTop = 0;
	initSideBarModule3PaddingBottom = 5;
	initSideBarModule3FontSize = 7;
	initSideBarModule3FontFamily = "Arial";
	initSideBarModule3Opacity = 1;
	initSideBarModule3BorderWeight = 0; 
	initSideBarModule3BorderType = 'All';
	initSideBarModule3BorderBg = 'None';			
	initSideBarModule3BorderRadiusTopLeft = 0; 
	initSideBarModule3BorderRadiusTopRight = 0;
	initSideBarModule3BorderRadiusBottomLeft = 0; 
	initSideBarModule3BorderRadiusBottomRight = 0;
	initSideBarModule3Gradient = 0;
	initSideBarModule3GradientType = 'topwhite';
	
	initSideBarModule4Background = "lightgray";
	initSideBarModule4BackupBackground = "lightgray";
	initSideBarModule4Color = "black";
	initSideBarModule4Width = 95;
	initSideBarModule4Height = 'auto';
	initSideBarModule4MarginLeft = 0;
	initSideBarModule4MarginRight = 0;
	initSideBarModule4MarginTop = 7;
	initSideBarModule4MarginBottom = 0;
	initSideBarModule4PaddingLeft = 0;
	initSideBarModule4PaddingRight = 0;
	initSideBarModule4PaddingTop = 0;
	initSideBarModule4PaddingBottom = 5;
	initSideBarModule4FontSize = 7;
	initSideBarModule4FontFamily = "Arial";
	initSideBarModule4Opacity = 1;
	initSideBarModule4BorderWeight = 0; 
	initSideBarModule4BorderType = 'All';
	initSideBarModule4BorderBg = 'None';			
	initSideBarModule4BorderRadiusTopLeft = 0; 
	initSideBarModule4BorderRadiusTopRight = 0;
	initSideBarModule4BorderRadiusBottomLeft = 0; 
	initSideBarModule4BorderRadiusBottomRight = 0;
	initSideBarModule4Gradient = 0;
	initSideBarModule4GradientType = 'topwhite';
	
	initSideBarModule5Background = "lightgray";
	initSideBarModule5BackupBackground = "lightgray";
	initSideBarModule5Color = "black";
	initSideBarModule5Width = 81;
	initSideBarModule5Height = 'auto';
	initSideBarModule5MarginLeft = 0;
	initSideBarModule5MarginRight = 0;
	initSideBarModule5MarginTop = 14;
	initSideBarModule5MarginBottom = 0;
	initSideBarModule5PaddingLeft = 0;
	initSideBarModule5PaddingRight = 0;
	initSideBarModule5PaddingTop = 0;
	initSideBarModule5PaddingBottom = 5;
	initSideBarModule5FontSize = 7;
	initSideBarModule5FontFamily = "Arial";
	initSideBarModule5Opacity = 1;
	initSideBarModule5BorderWeight = 0; 
	initSideBarModule5BorderType = 'All';
	initSideBarModule5BorderBg = 'None';			
	initSideBarModule5BorderRadiusTopLeft = 0; 
	initSideBarModule5BorderRadiusTopRight = 0;
	initSideBarModule5BorderRadiusBottomLeft = 0; 
	initSideBarModule5BorderRadiusBottomRight = 0;
	initSideBarModule5Gradient = 0;
	initSideBarModule5GradientType = 'topwhite';
	
	initSideBarModule6Background = "lightgray";
	initSideBarModule6BackupBackground = "lightgray";
	initSideBarModule6Color = "black";
	initSideBarModule6Width = 81;
	initSideBarModule6Height = 'auto';
	initSideBarModule6MarginLeft = 0;
	initSideBarModule6MarginRight = 0;
	initSideBarModule6MarginTop = 14;
	initSideBarModule6MarginBottom = 0;
	initSideBarModule6PaddingLeft = 0;
	initSideBarModule6PaddingRight = 0;
	initSideBarModule6PaddingTop = 0;
	initSideBarModule6PaddingBottom = 5;
	initSideBarModule6FontSize = 7;
	initSideBarModule6FontFamily = "Arial";
	initSideBarModule6Opacity = 1;
	initSideBarModule6BorderWeight = 0; 
	initSideBarModule6BorderType = 'All';
	initSideBarModule6BorderBg = 'None';			
	initSideBarModule6BorderRadiusTopLeft = 0; 
	initSideBarModule6BorderRadiusTopRight = 0;
	initSideBarModule6BorderRadiusBottomLeft = 0; 
	initSideBarModule6BorderRadiusBottomRight = 0;
	initSideBarModule6Gradient = 0;
	initSideBarModule6GradientType = 'topwhite';
	
	initSbm1h2Background = "#2f3430";
	initSbm1h2BackupBackground = "#2f3430";
	initSbm1h2Color = "whitesmoke";
	initSbm1h2MarginLeft = 0;
	initSbm1h2MarginRight = 0;
	initSbm1h2MarginTop = 0;
	initSbm1h2MarginBottom = 8;
	initSbm1h2PaddingLeft = 4;
	initSbm1h2PaddingRight = 0;
	initSbm1h2PaddingTop = 0;
	initSbm1h2PaddingBottom = 0;
	initSbm1h2FontSize = 8;
	initSbm1h2FontFamily = "Arial";
	initSbm1h2Opacity = 1;
	initSbm1h2BorderWeight = 0;
	initSbm1h2BorderType = 'All';			
	initSbm1h2BorderBg = 'None';			
	initSbm1h2BorderRadiusTopLeft = 4; 
	initSbm1h2BorderRadiusTopRight = 4;
	initSbm1h2BorderRadiusBottomLeft = 0; 
	initSbm1h2BorderRadiusBottomRight = 0;
	initSbm1h2Gradient = 0;
	initSbm1h2GradientType = 'topwhite';
	
	initSbm2h2Background = "#2f3430";
	initSbm2h2BackupBackground = "#2f3430";
	initSbm2h2Color = "whitesmoke";
	initSbm2h2MarginLeft = 0;
	initSbm2h2MarginRight = 0;
	initSbm2h2MarginTop = 0;
	initSbm2h2MarginBottom = 8;
	initSbm2h2PaddingLeft = 4;
	initSbm2h2PaddingRight = 0;
	initSbm2h2PaddingTop = 0;
	initSbm2h2PaddingBottom = 0;
	initSbm2h2FontSize = 8;
	initSbm2h2FontFamily = "Arial";
	initSbm2h2Opacity = 1;
	initSbm2h2BorderWeight = 0; 
	initSbm2h2BorderType = 'All';
	initSbm2h2BorderBg = 'None';			
	initSbm2h2BorderRadiusTopLeft = 4; 
	initSbm2h2BorderRadiusTopRight = 4;
	initSbm2h2BorderRadiusBottomLeft = 0; 
	initSbm2h2BorderRadiusBottomRight = 0;
	initSbm2h2Gradient = 0;
	initSbm2h2GradientType = 'topwhite';
	
	initSbm3h2Background = "#2f3430";
	initSbm3h2BackupBackground = "#2f3430";
	initSbm3h2Color = "whitesmoke";
	initSbm3h2MarginLeft = 0;
	initSbm3h2MarginRight = 0;
	initSbm3h2MarginTop = 0;
	initSbm3h2MarginBottom = 8;
	initSbm3h2PaddingLeft = 4;
	initSbm3h2PaddingRight = 0;
	initSbm3h2PaddingTop = 0;
	initSbm3h2PaddingBottom = 0;
	initSbm3h2FontSize = 8;
	initSbm3h2FontFamily = "Arial";
	initSbm3h2Opacity = 1;
	initSbm3h2BorderWeight = 0; 
	initSbm3h2BorderType = 'All';
	initSbm3h2BorderBg = 'None';			
	initSbm3h2BorderRadiusTopLeft = 4; 
	initSbm3h2BorderRadiusTopRight = 4;
	initSbm3h2BorderRadiusBottomLeft = 0; 
	initSbm3h2BorderRadiusBottomRight = 0;
	initSbm3h2Gradient = 0;
	initSbm3h2GradientType = 'topwhite';
	
	initSbm4h2Background = "#2f3430";
	initSbm4h2BackupBackground = "#2f3430";
	initSbm4h2Color = "whitesmoke";
	initSbm4h2MarginLeft = 0;
	initSbm4h2MarginRight = 0;
	initSbm4h2MarginTop = 0;
	initSbm4h2MarginBottom = 8;
	initSbm4h2PaddingLeft = 4;
	initSbm4h2PaddingRight = 0;
	initSbm4h2PaddingTop = 0;
	initSbm4h2PaddingBottom = 0;
	initSbm4h2FontSize = 8;
	initSbm4h2FontFamily = "Arial";
	initSbm4h2Opacity = 1;
	initSbm4h2BorderWeight = 0; 
	initSbm4h2BorderType = 'All';
	initSbm4h2BorderBg = 'None';			
	initSbm4h2BorderRadiusTopLeft = 4; 
	initSbm4h2BorderRadiusTopRight = 4;
	initSbm4h2BorderRadiusBottomLeft = 0; 
	initSbm4h2BorderRadiusBottomRight = 0;
	initSbm4h2Gradient = 0;
	initSbm4h2GradientType = 'topwhite';
	
	initSbm5h2Background = "#2f3430";
	initSbm5h2BackupBackground = "#2f3430";
	initSbm5h2Color = "whitesmoke";
	initSbm5h2MarginLeft = 0;
	initSbm5h2MarginRight = 0;
	initSbm5h2MarginTop = 0;
	initSbm5h2MarginBottom = 8;
	initSbm5h2PaddingLeft = 4;
	initSbm5h2PaddingRight = 0;
	initSbm5h2PaddingTop = 0;
	initSbm5h2PaddingBottom = 0;
	initSbm5h2FontSize = 8;
	initSbm5h2FontFamily = "Arial";
	initSbm5h2Opacity = 1;
	initSbm5h2BorderWeight = 0; 
	initSbm5h2BorderType = 'All';
	initSbm5h2BorderBg = 'None';			
	initSbm5h2BorderRadiusTopLeft = 4; 
	initSbm5h2BorderRadiusTopRight = 4;
	initSbm5h2BorderRadiusBottomLeft = 0; 
	initSbm5h2BorderRadiusBottomRight = 0;
	initSbm5h2Gradient = 0;
	initSbm5h2GradientType = 'topwhite';
	
	initSbm6h2Background = "#2f3430";
	initSbm6h2BackupBackground = "#2f3430";
	initSbm6h2Color = "whitesmoke";
	initSbm6h2MarginLeft = 0;
	initSbm6h2MarginRight = 0;
	initSbm6h2MarginTop = 0;
	initSbm6h2MarginBottom = 8;
	initSbm6h2PaddingLeft = 4;
	initSbm6h2PaddingRight = 0;
	initSbm6h2PaddingTop = 0;
	initSbm6h2PaddingBottom = 0;
	initSbm6h2FontSize = 8;
	initSbm6h2FontFamily = "Arial";
	initSbm6h2Opacity = 1;
	initSbm6h2BorderWeight = 0; 
	initSbm6h2BorderType = 'All';
	initSbm6h2BorderBg = 'None';			
	initSbm6h2BorderRadiusTopLeft = 4; 
	initSbm6h2BorderRadiusTopRight = 4;
	initSbm6h2BorderRadiusBottomLeft = 0; 
	initSbm6h2BorderRadiusBottomRight = 0;
	initSbm6h2Gradient = 0;
	initSbm6h2GradientType = 'topwhite';
	
	initContentText1Background = "cadetblue";
	initContentText1BackupBackground = "cadetblue";
	initContentText1Color = "black";
	initContentText1Width = 117;
	initContentText1Height = 'auto';
	initContentText1Outline = 0;
	initContentText1MarginLeft = 7;
	initContentText1MarginRight = 0;
	initContentText1MarginTop = 0;
	initContentText1MarginBottom = 0;
	initContentText1PaddingLeft = 9;
	initContentText1PaddingRight = 9;
	initContentText1PaddingTop = 9;
	initContentText1PaddingBottom = 9;
	initContentText1FontSize = 12;
	initContentText1FontFamily = "Arial";
	initContentText1Opacity = 1;
	initContentText1BorderWeight = 0;
	initContentText1BorderType = 'All';			
	initContentText1BorderBg = 'None';			
	initContentText1BorderRadiusTopLeft = 0; 
	initContentText1BorderRadiusTopRight = 0;
	initContentText1BorderRadiusBottomLeft = 0; 
	initContentText1BorderRadiusBottomRight = 0;
	initContentText1Gradient = 0;
	initContentText1GradientType = 'topwhite';
			
	initContentText2Background = "darkseagreen";
	initContentText2BackupBackground = "darkseagreen";
	initContentText2Color = "black";
	initContentText2Width = 117;
	initContentText2Height = 'auto';
	initContentText2Outline = 0;
	initContentText2MarginLeft = 0;
	initContentText2MarginRight = 0;
	initContentText2MarginTop = 0;
	initContentText2MarginBottom = 0;
	initContentText2PaddingLeft = 9;
	initContentText2PaddingRight = 9;
	initContentText2PaddingTop = 9;
	initContentText2PaddingBottom = 9;
	initContentText2FontSize = 12;
	initContentText2FontFamily = "Arial";
	initContentText2Opacity = 1;
	initContentText2BorderWeight = 0;
	initContentText2BorderType = 'All';			
	initContentText2BorderBg = 'None';			
	initContentText2BorderRadiusTopLeft = 0; 
	initContentText2BorderRadiusTopRight = 0;
	initContentText2BorderRadiusBottomLeft = 0; 
	initContentText2BorderRadiusBottomRight = 0;
	initContentText2Gradient = 0;
	initContentText2GradientType = 'topwhite';
			
	initSliderBackground = "#e7eaea";
	initSliderWidth = 237;
	initSliderHeight = 95;
	initSliderMarginLeft = 23;
	initSliderMarginRight = 0;
	initSliderMarginTop = 0;
	initSliderMarginBottom = 21;
	initSliderPaddingLeft = 0;
	initSliderPaddingRight = 0;
	initSliderPaddingTop = 0;
	initSliderPaddingBottom = 0;
	initSliderOpacity = 1;
	initSliderBorderWeight = 2;
	initSliderBorderType = 'All';
	initSliderBorderBg = '#2f3430';	
	initSliderBorderBgBackup = '#2f3430';
	initSliderBorderRadiusTopLeft = 0; 
	initSliderBorderRadiusTopRight = 0;
	initSliderBorderRadiusBottomLeft = 0; 
	initSliderBorderRadiusBottomRight = 0;
}

/**###########################################################################################################################################################
########################################################## SELECT ELEMENT ####################################################################################
###########################################################################################################################################################**/

function selectElement(obj){
	if(moving == 1)
		return false;
	if(timerCount != 1){
		var header = document.getElementById('header');
		var footer = document.getElementById('footer');
		var themepage = document.getElementById('theme-page');
		var navigation = document.getElementById('navigation');
		var content = document.getElementById('content');
		var sidebarmodule1 = document.getElementById('side-bar-module1');
		var sidebarmodule2 = document.getElementById('side-bar-module2');
		var sidebarmodule3 = document.getElementById('side-bar-module3');
		var sidebarmodule4 = document.getElementById('side-bar-module4');
		var sidebarmodule5 = document.getElementById('side-bar-module5');
		var sidebarmodule6 = document.getElementById('side-bar-module6');
		var sbm1h2 = document.getElementById('sbm1h2');
		var sbm2h2 = document.getElementById('sbm2h2');
		var sbm3h2 = document.getElementById('sbm3h2');
		var sbm4h2 = document.getElementById('sbm4h2');
		var sbm5h2 = document.getElementById('sbm5h2');
		var sbm6h2 = document.getElementById('sbm6h2');
		var contenttext1 = document.getElementById('content-text1');
		var contenttext2 = document.getElementById('content-text2');
		var slider = document.getElementById('slider');
		var selected = document.getElementById('selected');
		
		if(header != null){
			header.style.outline = "0px";
		}
		if(footer != null){
			footer.style.outline = "0px";
		}
		if(themepage != null){
			themepage.style.outline = "0px";
		}
		if(navigation != null){
			navigation.style.outline = "0px";
		}
		if(content != null){
			content.style.outline = "0px";
		}
		if(sidebarmodule1 != null){
			sidebarmodule1.style.outline = "0px";
		}
		if(sidebarmodule2 != null){
			sidebarmodule2.style.outline = "0px";
		}
		if(sidebarmodule3 != null){
			sidebarmodule3.style.outline = "0px";
		}
		if(sidebarmodule4 != null){
			sidebarmodule4.style.outline = "0px";
		}
		if(sidebarmodule5 != null){
			sidebarmodule5.style.outline = "0px";
		}
		if(sidebarmodule6 != null){
			sidebarmodule6.style.outline = "0px";
		}
		if(sbm1h2 != null){
			sbm1h2.style.outline = "0px";
		}
		if(sbm2h2 != null){
			sbm2h2.style.outline = "0px";
		}
		if(sbm3h2 != null){
			sbm3h2.style.outline = "0px";
		}
		if(sbm4h2 != null){
			sbm4h2.style.outline = "0px";
		}
		if(sbm5h2 != null){
			sbm5h2.style.outline = "0px";
		}
		if(sbm6h2 != null){
			sbm6h2.style.outline = "0px";
		}
		if(contenttext1 != null){
			contenttext1.style.outline = "0px";
		}
		if(contenttext2 != null){
			contenttext2.style.outline = "0px";
		}
		if(slider != null){
			slider.style.outline = "0px";
		}
		if(selected != null){
			selected.style.outline = "0px";
		}
		obj.style.outline = "2px solid #3893e0";
		timerCount = 1;
		selectedElement = obj.id;
		showAttributes(obj);
	}	
}

/**###########################################################################################################################################################
########################################################## SHOW ELEMENT'S ATTRIBUTES #########################################################################
###########################################################################################################################################################**/

function showAttributes(obj){
		
	document.getElementById('attributes').style.display = "block";
	slideCallIntervalDown = setInterval(function (){slideDown('how-to-use',howToUseMarginTop);}, 10);
	
	showAllAttributes();
	
	if(obj.id == 'theme-page'){
		removeBlink();
		document.getElementsByClassName('Ptb')[0].style.display = "none";
		document.getElementsByClassName('Plr')[0].style.display = "none";
		document.getElementsByClassName('Tcfs')[0].style.display = "none";
		document.getElementsByClassName('Br')[0].style.display = "none";
		document.getElementsByClassName('B-radius')[0].style.display = "none";
		
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initThemePageColor;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initThemePageFontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initThemePageBackground;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initThemePageMarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initThemePageMarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initThemePageMarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initThemePageMarginBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initThemePageOpacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initThemePageFontFamily;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initThemePageWidth;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initThemePageHeight;
		if(initThemePageGradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initThemePageGradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initThemePageGradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initThemePageGradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initThemePageGradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
			
		}else if(initThemePageGradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		
	}
	
	if(obj.id == 'header'){
		removeBlink();
		document.getElementsByClassName('Tcfs')[0].style.display = "none";
		document.getElementsByClassName('Ff')[0].style.display = "none";
	
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initHeaderBackground;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initHeaderMarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initHeaderMarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initHeaderMarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initHeaderMarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initHeaderPaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initHeaderPaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initHeaderPaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initHeaderPaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initHeaderOpacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initHeaderFontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initHeaderHeight;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initHeaderWidth;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initHeaderBorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initHeaderBorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initHeaderBorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initHeaderBorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initHeaderBorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initHeaderBorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initHeaderBorderBg;
		if(initHeaderGradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initHeaderGradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initHeaderGradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initHeaderGradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initHeaderGradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initHeaderGradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'footer'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initFooterColor;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initFooterFontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initFooterBackground;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initFooterMarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initFooterMarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initFooterMarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initFooterMarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initFooterPaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initFooterPaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initFooterPaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initFooterPaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initFooterOpacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initFooterFontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initFooterHeight;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initFooterWidth;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initFooterBorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initFooterBorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initFooterBorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initFooterBorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initFooterBorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initFooterBorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initFooterBorderBg;
		if(initFooterGradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initFooterGradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initFooterGradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initHeaderGradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initFooterGradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initFooterGradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		textEditing('footer',FooterText);
		
	}
	
	if(obj.id == 'navigation'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initNavigationColor;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initNavigationFontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initNavigationBackground;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initNavigationMarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initNavigationMarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initNavigationMarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initNavigationMarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initNavigationPaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initNavigationPaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initNavigationPaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initNavigationPaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initNavigationOpacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initNavigationFontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initNavigationHeight;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initNavigationWidth;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initNavigationBorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initNavigationBorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initNavigationBorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initNavigationBorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initNavigationBorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initNavigationBorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initNavigationBorderBg;
		if(initNavigationGradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initNavigationGradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initNavigationGradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initNavigationGradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initNavigationGradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initNavigationGradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'content'){
		
		document.getElementsByClassName('Ptb')[0].style.display = "none";
		document.getElementsByClassName('Plr')[0].style.display = "none";
		document.getElementsByClassName('Tcfs')[0].style.display = "none";
		document.getElementsByClassName('Br')[0].style.display = "none";
		document.getElementsByClassName('B-radius')[0].style.display = "none";
		
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initContentBackground;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initContentMarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initContentMarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initContentMarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initContentMarginBottom;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initContentHeight;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initContentWidth;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initContentOpacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initContentFontFamily;
		if(initContentGradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initContentGradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentGradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentGradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentGradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initContentGradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'selected'){

		document.getElementsByClassName('Ptb')[0].style.display = "none";
		document.getElementsByClassName('Plr')[0].style.display = "none";
		document.getElementsByClassName('Mtb')[0].style.display = "none";
		document.getElementsByClassName('Mlr')[0].style.display = "none";
		document.getElementsByClassName('Hw')[0].style.display = "none";

		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSelectedColor;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSelectedFontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSelectedBackground;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSelectedOpacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSelectedFontFamily;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSelectedBorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSelectedBorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSelectedBorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSelectedBorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSelectedBorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSelectedBorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSelectedBorderBg;
		if(initSelectedGradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSelectedGradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSelectedGradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSelectedGradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSelectedGradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSelectedGradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		textEditing('selected',SelectedText);
		
	}
	
	if(obj.id == 'side-bar-module1'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSideBarModule1Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSideBarModule1FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSideBarModule1Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSideBarModule1MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSideBarModule1MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSideBarModule1MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSideBarModule1MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSideBarModule1PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSideBarModule1PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSideBarModule1PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSideBarModule1PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSideBarModule1Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSideBarModule1FontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initSideBarModule1Height;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initSideBarModule1Width;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSideBarModule1BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSideBarModule1BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSideBarModule1BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSideBarModule1BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSideBarModule1BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSideBarModule1BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSideBarModule1BorderBg;
		if(initSideBarModule1Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSideBarModule1GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule1GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule1GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule1GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSideBarModule1Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'side-bar-module2'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSideBarModule2Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSideBarModule2FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSideBarModule2Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSideBarModule2MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSideBarModule2MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSideBarModule2MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSideBarModule2MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSideBarModule2PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSideBarModule2PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSideBarModule2PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSideBarModule2PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSideBarModule2Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSideBarModule2FontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initSideBarModule2Height;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initSideBarModule2Width;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSideBarModule2BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSideBarModule2BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSideBarModule2BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSideBarModule2BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSideBarModule2BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSideBarModule2BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSideBarModule2BorderBg;
		if(initSideBarModule2Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSideBarModule2GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule2GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule2GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule2GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSideBarModule2Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'side-bar-module3'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSideBarModule3Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSideBarModule3FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSideBarModule3Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSideBarModule3MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSideBarModule3MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSideBarModule3MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSideBarModule3MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSideBarModule3PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSideBarModule3PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSideBarModule3PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSideBarModule3PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSideBarModule3Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSideBarModule3FontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initSideBarModule3Height;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initSideBarModule3Width;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSideBarModule3BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSideBarModule3BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSideBarModule3BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSideBarModule3BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSideBarModule3BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSideBarModule3BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSideBarModule3BorderBg;
		if(initSideBarModule3Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSideBarModule3GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule3GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule3GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule3GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSideBarModule3Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'side-bar-module4'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSideBarModule4Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSideBarModule4FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSideBarModule4Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSideBarModule4MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSideBarModule4MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSideBarModule4MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSideBarModule4MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSideBarModule4PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSideBarModule4PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSideBarModule4PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSideBarModule4PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSideBarModule4Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSideBarModule4FontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initSideBarModule4Height;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initSideBarModule4Width;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSideBarModule4BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSideBarModule4BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSideBarModule4BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSideBarModule4BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSideBarModule4BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSideBarModule4BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSideBarModule4BorderBg;
		if(initSideBarModule4Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSideBarModule4GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule4GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule4GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule4GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSideBarModule4Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'side-bar-module5'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSideBarModule5Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSideBarModule5FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSideBarModule5Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSideBarModule5MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSideBarModule5MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSideBarModule5MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSideBarModule5MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSideBarModule5PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSideBarModule5PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSideBarModule5PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSideBarModule5PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSideBarModule5Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSideBarModule5FontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initSideBarModule5Height;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initSideBarModule5Width;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSideBarModule5BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSideBarModule5BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSideBarModule5BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSideBarModule5BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSideBarModule5BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSideBarModule5BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSideBarModule5BorderBg;
		if(initSideBarModule5Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSideBarModule5GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule5GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule5GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule5GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSideBarModule5Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'side-bar-module6'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSideBarModule6Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSideBarModule6FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSideBarModule6Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSideBarModule6MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSideBarModule6MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSideBarModule6MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSideBarModule6MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSideBarModule6PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSideBarModule6PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSideBarModule6PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSideBarModule6PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSideBarModule6Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSideBarModule6FontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initSideBarModule6Height;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initSideBarModule6Width;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSideBarModule6BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSideBarModule6BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSideBarModule6BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSideBarModule6BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSideBarModule6BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSideBarModule6BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSideBarModule6BorderBg;
		if(initSideBarModule6Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSideBarModule6GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule6GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule6GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSideBarModule6GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSideBarModule6Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
	}
	
	if(obj.id == 'sbm1h2'){
	
		document.getElementsByClassName('Hw')[0].style.display = "none";
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSbm1h2Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSbm1h2FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSbm1h2Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSbm1h2MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSbm1h2MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSbm1h2MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSbm1h2MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSbm1h2PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSbm1h2PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSbm1h2PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSbm1h2PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSbm1h2Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSbm1h2FontFamily;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSbm1h2BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSbm1h2BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSbm1h2BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSbm1h2BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSbm1h2BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSbm1h2BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSbm1h2BorderBg;
		if(initSbm1h2Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSbm1h2GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm1h2GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm1h2GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm1h2GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSbm1h2Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		textEditing('sbm1h2',Sbm1h2Text);
	}
	
	if(obj.id == 'sbm2h2'){
	
		document.getElementsByClassName('Hw')[0].style.display = "none";
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSbm2h2Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSbm2h2FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSbm2h2Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSbm2h2MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSbm2h2MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSbm2h2MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSbm2h2MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSbm2h2PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSbm2h2PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSbm2h2PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSbm2h2PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSbm2h2Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSbm2h2FontFamily;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSbm2h2BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSbm2h2BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSbm2h2BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSbm2h2BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSbm2h2BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSbm2h2BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSbm2h2BorderBg;
		if(initSbm2h2Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSbm2h2GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm2h2GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm2h2GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm2h2GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSbm2h2Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		textEditing('sbm2h2',Sbm2h2Text);
	}
	
	if(obj.id == 'sbm3h2'){
	
		document.getElementsByClassName('Hw')[0].style.display = "none";
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSbm3h2Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSbm3h2FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSbm3h2Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSbm3h2MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSbm3h2MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSbm3h2MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSbm3h2MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSbm3h2PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSbm3h2PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSbm3h2PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSbm3h2PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSbm3h2Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSbm3h2FontFamily;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSbm3h2BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSbm3h2BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSbm3h2BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSbm3h2BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSbm3h2BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSbm3h2BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSbm3h2BorderBg;
		if(initSbm3h2Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSbm3h2GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm3h2GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm3h2GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm3h2GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSbm3h2Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		textEditing('sbm3h2',Sbm3h2Text);
	}
	
	if(obj.id == 'sbm4h2'){
	
		document.getElementsByClassName('Hw')[0].style.display = "none";
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSbm4h2Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSbm4h2FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSbm4h2Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSbm4h2MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSbm4h2MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSbm4h2MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSbm4h2MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSbm4h2PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSbm4h2PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSbm4h2PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSbm4h2PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSbm4h2Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSbm4h2FontFamily;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSbm4h2BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSbm4h2BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSbm4h2BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSbm4h2BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSbm4h2BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSbm4h2BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSbm4h2BorderBg;
		if(initSbm4h2Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSbm4h2GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm4h2GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm4h2GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm4h2GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSbm4h2Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		textEditing('sbm4h2',Sbm4h2Text);
	}
	
	if(obj.id == 'sbm5h2'){
	
		document.getElementsByClassName('Hw')[0].style.display = "none";
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSbm5h2Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSbm5h2FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSbm5h2Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSbm5h2MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSbm5h2MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSbm5h2MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSbm5h2MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSbm5h2PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSbm5h2PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSbm5h2PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSbm5h2PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSbm5h2Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSbm5h2FontFamily;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSbm5h2BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSbm5h2BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSbm5h2BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSbm5h2BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSbm5h2BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSbm5h2BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSbm5h2BorderBg;
		if(initSbm5h2Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSbm5h2GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm5h2GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm5h2GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm5h2GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSbm5h2Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		textEditing('sbm5h2',Sbm5h2Text);
	}
	
	if(obj.id == 'sbm6h2'){
	
		document.getElementsByClassName('Hw')[0].style.display = "none";
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initSbm6h2Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initSbm6h2FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSbm6h2Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSbm6h2MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSbm6h2MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSbm6h2MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSbm6h2MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSbm6h2PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSbm6h2PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSbm6h2PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSbm6h2PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSbm6h2Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initSbm6h2FontFamily;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSbm6h2BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSbm6h2BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSbm6h2BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSbm6h2BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSbm6h2BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSbm6h2BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSbm6h2BorderBg;
		if(initSbm6h2Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initSbm6h2GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm6h2GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm6h2GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initSbm6h2GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initSbm6h2Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		
		textEditing('sbm6h2',Sbm6h2Text);
	}
	
	if(obj.id == 'content-text1'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initContentText1Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initContentText1FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initContentText1Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initContentText1MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initContentText1MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initContentText1MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initContentText1MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initContentText1PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initContentText1PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initContentText1PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initContentText1PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initContentText1Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initContentText1FontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initContentText1Height;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initContentText1Width;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initContentText1BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initContentText1BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initContentText1BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initContentText1BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initContentText1BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initContentText1BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initContentText1BorderBg;
		if(initContentText1Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initContentText1GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentText1GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentText1GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentText1GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initContentText1Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		
		textEditing('content-text1',contentText1Text);
	}
	
	if(obj.id == 'content-text2'){
	
		var inputTextColor = document.getElementById('inputTextColor');
		inputTextColor.value = initContentText2Color;
		var inputFontSize = document.getElementById('inputFontSize');
		inputFontSize.value = initContentText2FontSize;
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initContentText2Background;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initContentText2MarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initContentText2MarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initContentText2MarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initContentText2MarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initContentText2PaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initContentText2PaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initContentText2PaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initContentText2PaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initContentText2Opacity;
		var inputFontFamily = document.getElementById('inputFontFamily');
		inputFontFamily.value = initContentText2FontFamily;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initContentText2Height;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initContentText2Width;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initContentText2BorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initContentText2BorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initContentText2BorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initContentText2BorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initContentText2BorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initContentText2BorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initContentText2BorderBg;
		if(initContentText2Gradient == 1){
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = true;
			var gradientTopWhite = document.getElementById('gradientTopWhite');
			var gradientBottomWhite = document.getElementById('gradientBottomWhite');
			var gradientTopBlack = document.getElementById('gradientTopBlack');
			var gradientBottomBlack = document.getElementById('gradientBottomBlack');
			
			gradientTopWhite.style.display = 'block';
			gradientBottomWhite.style.display = 'block';
			gradientTopBlack.style.display = 'block';
			gradientBottomBlack.style.display = 'block';
			
			if(initContentText2GradientType == 'topwhite'){
			
				gradientTopWhite.style.outline = '3px solid orange';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentText2GradientType == 'bottomwhite'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '3px solid orange';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentText2GradientType == 'topblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '3px solid orange';
				gradientBottomBlack.style.outline = '';
			
			}else if(initContentText2GradientType == 'bottomblack'){
			
				gradientTopWhite.style.outline = '';
				gradientBottomWhite.style.outline = '';
				gradientTopBlack.style.outline = '';
				gradientBottomBlack.style.outline = '3px solid orange';
			
			}
		}else if(initContentText2Gradient == 0){
			hideGradientBoxes();
			var inputGradient = document.getElementById('inputGradient');
			inputGradient.checked = false;
		}
		textEditing('content-text2',contentText2Text);
		
	}
	
	if(obj.id == 'slider'){
		removeBlink();
		document.getElementsByClassName('Tcfs')[0].style.display = "none";
		document.getElementsByClassName('Ff')[0].style.display = "none";
		document.getElementsByClassName('B-radius')[0].style.display = "none";
	
		var inputBackground = document.getElementById('inputBackground');
		inputBackground.value = initSliderBackground;
		var inputMarginTop = document.getElementById('inputMarginTop');
		inputMarginTop.value = initSliderMarginTop;
		var inputMarginLeft = document.getElementById('inputMarginLeft');
		inputMarginLeft.value = initSliderMarginLeft;
		var inputMarginRight = document.getElementById('inputMarginRight');
		inputMarginRight.value = initSliderMarginRight;
		var inputMarginBottom = document.getElementById('inputMarginBottom');
		inputMarginBottom.value = initSliderMarginBottom;
		var inputPaddingTop = document.getElementById('inputPaddingTop');
		inputPaddingTop.value = initSliderPaddingTop;
		var inputPaddingLeft = document.getElementById('inputPaddingLeft');
		inputPaddingLeft.value = initSliderPaddingLeft;
		var inputPaddingRight = document.getElementById('inputPaddingRight');
		inputPaddingRight.value = initSliderPaddingRight;
		var inputPaddingBottom = document.getElementById('inputPaddingBottom');
		inputPaddingBottom.value = initSliderPaddingBottom;
		var inputOpacity = document.getElementById('inputOpacity');
		inputOpacity.value = initSliderOpacity;
		var inputHeight = document.getElementById('inputHeight');
		inputHeight.value = initSliderHeight;
		var inputWidth = document.getElementById('inputWidth');
		inputWidth.value = initSliderWidth;
		var inputBorderRadiusTopLeft = document.getElementById('inputBorderRadiusTopLeft');
		inputBorderRadiusTopLeft.value = initSliderBorderRadiusTopLeft;
		var inputBorderRadiusTopRight = document.getElementById('inputBorderRadiusTopRight');
		inputBorderRadiusTopRight.value = initSliderBorderRadiusTopRight;
		var inputBorderRadiusBottomLeft = document.getElementById('inputBorderRadiusBottomLeft');
		inputBorderRadiusBottomLeft.value = initSliderBorderRadiusBottomLeft;
		var inputBorderRadiusBottomRight = document.getElementById('inputBorderRadiusBottomRight');
		inputBorderRadiusBottomRight.value = initSliderBorderRadiusBottomRight;
		var inputBorderWeight = document.getElementById('inputBorderWeight');
		inputBorderWeight.value = initSliderBorderWeight;
		var inputBorderType = document.getElementById('inputBorderType');
		inputBorderType.value = initSliderBorderType;
		var inputBorderBg = document.getElementById('inputBorderBg');
		inputBorderBg.value = initSliderBorderBg;
	}

}

/**###########################################################################################################################################################
############################################################# SET BACKGROUND, TEXT AND BORDER COLORS #########################################################
###########################################################################################################################################################**/
	
function setColor(n, m){

	color = n;
	setOpacity();
	
	var colorid = document.getElementById(color);
	colorid.style.opacity = "0.4";
	
	if(bg == 1){
		var setBG = document.getElementById(selectedElement);
		//setBG.style.background = color;
		setBackupBackground(color);
		applyGradient(1,color);
		setProperty = 1;
		updateAttributes('inputBackground',m);
		setProperty = 0;
	
	}else if(clr == 1){
		
		var setBG = document.getElementById(selectedElement);
		setBG.style.color = color;
		setProperty = 1;
		updateAttributes('inputTextColor',m);
		setProperty = 0;
	
	}else if(borderbg == 1){
	
		var setBG = document.getElementById(selectedElement);
		
		if(selectedElement == 'header'){
			
			initHeaderBorderBg = color;
			setBG.style.border = '';
			if(initHeaderBorderType == 'All'){
		
				setBG.style.border = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
			}			
			if(initHeaderBorderType == 'Top'){
		
				setBG.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
			}
			if(initHeaderBorderType == 'Bottom'){
			
				setBG.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
			}
			if(initHeaderBorderType == 'Left'){
			
				setBG.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
			}
			if(initHeaderBorderType == 'Right'){
			
				setBG.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
			}
			if(initHeaderBorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			}
			if(initHeaderBorderType == 'Top-Left'){
			
				setBG.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			}
			if(initHeaderBorderType == 'Top-Right'){
			
				setBG.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
			}
			if(initHeaderBorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			}
			if(initHeaderBorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			}
			if(initHeaderBorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
			}
			if(initHeaderBorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
			}
			if(initHeaderBorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			}
			if(initHeaderBorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
			}
			if(initHeaderBorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
				setBG.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
			}
			
		
		}
		if(selectedElement == 'navigation'){
			
			initNavigationBorderBg = color;
			setBG.style.border = '';
	
			if(initNavigationBorderType == 'All'){
		
				setBG.style.border = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
			}			
			if(initNavigationBorderType == 'Top'){
		
				setBG.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
			}
			if(initNavigationBorderType == 'Bottom'){
			
				setBG.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			
			}
			if(initNavigationBorderType == 'Left'){
			
				setBG.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			
			}
			if(initNavigationBorderType == 'Right'){
			
				setBG.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			
			}
			if(initNavigationBorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			}
			if(initNavigationBorderType == 'Top-Left'){
			
				setBG.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			}
			if(initNavigationBorderType == 'Top-Right'){
			
				setBG.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			
			}
			if(initNavigationBorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			}
			if(initNavigationBorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			}
			if(initNavigationBorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			
			}
			if(initNavigationBorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			
			}
			if(initNavigationBorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			}
			if(initNavigationBorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			
			}
			if(initNavigationBorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
				setBG.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			
			}
		
		}
		if(selectedElement == 'footer'){
			
			initFooterBorderBg = color;
			setBG.style.border = '';
	
			if(initFooterBorderType == 'All'){
		
				setBG.style.border = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
			}			
			if(initFooterBorderType == 'Top'){
		
				setBG.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
			}
			if(initFooterBorderType == 'Bottom'){
			
				setBG.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			
			}
			if(initFooterBorderType == 'Left'){
			
				setBG.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			
			}
			if(initFooterBorderType == 'Right'){
			
				setBG.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			
			}
			if(initFooterBorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			}
			if(initFooterBorderType == 'Top-Left'){
			
				setBG.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			}
			if(initFooterBorderType == 'Top-Right'){
			
				setBG.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			
			}
			if(initFooterBorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			}
			if(initFooterBorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			}
			if(initFooterBorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			
			}
			if(initFooterBorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			
			}
			if(initFooterBorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			}
			if(initFooterBorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			
			}
			if(initFooterBorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
				setBG.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			
			}
		
		}
		if(selectedElement == 'slider'){
			
			initSliderBorderBg = color;
			setBG.style.border = '';
	
			if(initSliderBorderType == 'All'){
		
				setBG.style.border = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
			}			
			if(initSliderBorderType == 'Top'){
		
				setBG.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
			}
			if(initSliderBorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			
			}
			if(initSliderBorderType == 'Left'){
			
				setBG.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			
			}
			if(initSliderBorderType == 'Right'){
			
				setBG.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			
			}
			if(initSliderBorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			}
			if(initSliderBorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			}
			if(initSliderBorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			
			}
			if(initSliderBorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			}
			if(initSliderBorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			}
			if(initSliderBorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			
			}
			if(initSliderBorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			
			}
			if(initSliderBorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			}
			if(initSliderBorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			
			}
			if(initSliderBorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
				setBG.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			
			}
		
		}
		if(selectedElement == 'selected'){
			
			initSelectedBorderBg = color;
			setBG.style.border = '';
	
			if(initSelectedBorderType == 'All'){
		
				setBG.style.border = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
			}			
			if(initSelectedBorderType == 'Top'){
		
				setBG.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
			}
			if(initSelectedBorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			
			}
			if(initSelectedBorderType == 'Left'){
			
				setBG.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			
			}
			if(initSelectedBorderType == 'Right'){
			
				setBG.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			
			}
			if(initSelectedBorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			}
			if(initSelectedBorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			}
			if(initSelectedBorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			
			}
			if(initSelectedBorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			}
			if(initSelectedBorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			}
			if(initSelectedBorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			
			}
			if(initSelectedBorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			
			}
			if(initSelectedBorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			}
			if(initSelectedBorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			
			}
			if(initSelectedBorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
				setBG.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			
			}
		
		}
		if(selectedElement == 'content-text1'){
			
			initContentText1BorderBg = color;
			setBG.style.border = '';
			if(initContentText1BorderType == 'All'){
		
				setBG.style.border = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
			}			
			if(initContentText1BorderType == 'Top'){
		
				setBG.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
			}
			if(initContentText1BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			
			}
			if(initContentText1BorderType == 'Left'){
			
				setBG.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			
			}
			if(initContentText1BorderType == 'Right'){
			
				setBG.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			
			}
			if(initContentText1BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			}
			if(initContentText1BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			}
			if(initContentText1BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			
			}
			if(initContentText1BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			}
			if(initContentText1BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			}
			if(initContentText1BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			
			}
			if(initContentText1BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			
			}
			if(initContentText1BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			}
			if(initContentText1BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			
			}
			if(initContentText1BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
				setBG.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			
			}
		
		}
		if(selectedElement == 'content-text2'){
			
			initContentText2BorderBg = color;
			setBG.style.border = '';
	
			if(initContentText2BorderType == 'All'){
		
				setBG.style.border = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
			}			
			if(initContentText2BorderType == 'Top'){
		
				setBG.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
			}
			if(initContentText2BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			
			}
			if(initContentText2BorderType == 'Left'){
			
				setBG.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			
			}
			if(initContentText2BorderType == 'Right'){
			
				setBG.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			
			}
			if(initContentText2BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			}
			if(initContentText2BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			}
			if(initContentText2BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			
			}
			if(initContentText2BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			}
			if(initContentText2BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			}
			if(initContentText2BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			
			}
			if(initContentText2BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			
			}
			if(initContentText2BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			}
			if(initContentText2BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			
			}
			if(initContentText2BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
				setBG.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			
			}
		
		}
		if(selectedElement == 'sbm1h2'){
			
			initSbm1h2BorderBg = color;
			setBG.style.border = '';
	
			if(initSbm1h2BorderType == 'All'){
		
				setBG.style.border = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
			}			
			if(initSbm1h2BorderType == 'Top'){
		
				setBG.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
			}
			if(initSbm1h2BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			
			}
			if(initSbm1h2BorderType == 'Left'){
			
				setBG.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			
			}
			if(initSbm1h2BorderType == 'Right'){
			
				setBG.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			
			}
			if(initSbm1h2BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			}
			if(initSbm1h2BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			}
			if(initSbm1h2BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			
			}
			if(initSbm1h2BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			}
			if(initSbm1h2BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			}
			if(initSbm1h2BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			
			}
			if(initSbm1h2BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			
			}
			if(initSbm1h2BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			}
			if(initSbm1h2BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			
			}
			if(initSbm1h2BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
				setBG.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			
			}
		
		}
		if(selectedElement == 'sbm2h2'){
			
			initSbm2h2BorderBg = color;
			setBG.style.border = '';
	
			if(initSbm2h2BorderType == 'All'){
		
				setBG.style.border = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
			}			
			if(initSbm2h2BorderType == 'Top'){
		
				setBG.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
			}
			if(initSbm2h2BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			
			}
			if(initSbm2h2BorderType == 'Left'){
			
				setBG.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			
			}
			if(initSbm2h2BorderType == 'Right'){
			
				setBG.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			
			}
			if(initSbm2h2BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			}
			if(initSbm2h2BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			}
			if(initSbm2h2BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			
			}
			if(initSbm2h2BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			}
			if(initSbm2h2BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			}
			if(initSbm2h2BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			
			}
			if(initSbm2h2BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			
			}
			if(initSbm2h2BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			}
			if(initSbm2h2BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			
			}
			if(initSbm2h2BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
				setBG.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			
			}
		
		}
		if(selectedElement == 'sbm3h2'){
			
			initSbm3h2BorderBg = color;
			setBG.style.border = '';
	
			if(initSbm3h2BorderType == 'All'){
		
				setBG.style.border = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
			}			
			if(initSbm3h2BorderType == 'Top'){
		
				setBG.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
			}
			if(initSbm3h2BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			
			}
			if(initSbm3h2BorderType == 'Left'){
			
				setBG.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			
			}
			if(initSbm3h2BorderType == 'Right'){
			
				setBG.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			
			}
			if(initSbm3h2BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			}
			if(initSbm3h2BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			}
			if(initSbm3h2BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			
			}
			if(initSbm3h2BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			}
			if(initSbm3h2BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			}
			if(initSbm3h2BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			
			}
			if(initSbm3h2BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			
			}
			if(initSbm3h2BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			}
			if(initSbm3h2BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			
			}
			if(initSbm3h2BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
				setBG.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			
			}
		
		}
		if(selectedElement == 'sbm4h2'){
			
			initSbm4h2BorderBg = color;
			setBG.style.border = '';
	
			if(initSbm4h2BorderType == 'All'){
		
				setBG.style.border = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
			}			
			if(initSbm4h2BorderType == 'Top'){
		
				setBG.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
			}
			if(initSbm4h2BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			
			}
			if(initSbm4h2BorderType == 'Left'){
			
				setBG.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			
			}
			if(initSbm4h2BorderType == 'Right'){
			
				setBG.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			
			}
			if(initSbm4h2BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			}
			if(initSbm4h2BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			}
			if(initSbm4h2BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			
			}
			if(initSbm4h2BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			}
			if(initSbm4h2BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			}
			if(initSbm4h2BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			
			}
			if(initSbm4h2BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			
			}
			if(initSbm4h2BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			}
			if(initSbm4h2BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			
			}
			if(initSbm4h2BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
				setBG.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			
			}
		
		}
		if(selectedElement == 'sbm5h2'){
			
			initSbm5h2BorderBg = color;
			setBG.style.border = '';
	
			if(initSbm5h2BorderType == 'All'){
		
				setBG.style.border = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
			}			
			if(initSbm5h2BorderType == 'Top'){
		
				setBG.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
			}
			if(initSbm5h2BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			
			}
			if(initSbm5h2BorderType == 'Left'){
			
				setBG.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			
			}
			if(initSbm5h2BorderType == 'Right'){
			
				setBG.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			
			}
			if(initSbm5h2BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			}
			if(initSbm5h2BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			}
			if(initSbm5h2BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			
			}
			if(initSbm5h2BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			}
			if(initSbm5h2BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			}
			if(initSbm5h2BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			
			}
			if(initSbm5h2BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			
			}
			if(initSbm5h2BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			}
			if(initSbm5h2BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			
			}
			if(initSbm5h2BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
				setBG.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			
			}
		
		}
		if(selectedElement == 'sbm6h2'){
			
			initSbm6h2BorderBg = color;
			setBG.style.border = '';
	
			if(initSbm6h2BorderType == 'All'){
		
				setBG.style.border = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
			}			
			if(initSbm6h2BorderType == 'Top'){
		
				setBG.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
			}
			if(initSbm6h2BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			
			}
			if(initSbm6h2BorderType == 'Left'){
			
				setBG.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			
			}
			if(initSbm6h2BorderType == 'Right'){
			
				setBG.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			
			}
			if(initSbm6h2BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			}
			if(initSbm6h2BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			}
			if(initSbm6h2BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			
			}
			if(initSbm6h2BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			}
			if(initSbm6h2BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			}
			if(initSbm6h2BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			
			}
			if(initSbm6h2BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			
			}
			if(initSbm6h2BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			}
			if(initSbm6h2BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			
			}
			if(initSbm6h2BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
				setBG.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			
			}
		
		}
		if(selectedElement == 'side-bar-module1'){
			
			initSideBarModule1BorderBg = color;
			setBG.style.border = '';
	
			if(initSideBarModule1BorderType == 'All'){
		
				setBG.style.border = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
			}			
			if(initSideBarModule1BorderType == 'Top'){
		
				setBG.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
			}
			if(initSideBarModule1BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			
			}
			if(initSideBarModule1BorderType == 'Left'){
			
				setBG.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			
			}
			if(initSideBarModule1BorderType == 'Right'){
			
				setBG.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			
			}
			if(initSideBarModule1BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			}
			if(initSideBarModule1BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			}
			if(initSideBarModule1BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			
			}
			if(initSideBarModule1BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			}
			if(initSideBarModule1BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			}
			if(initSideBarModule1BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			
			}
			if(initSideBarModule1BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			
			}
			if(initSideBarModule1BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			}
			if(initSideBarModule1BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			
			}
			if(initSideBarModule1BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
				setBG.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			
			}
		
		}
		if(selectedElement == 'side-bar-module2'){
			
			initSideBarModule2BorderBg = color;
			setBG.style.border = '';
	
			if(initSideBarModule2BorderType == 'All'){
		
				setBG.style.border = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
			}			
			if(initSideBarModule2BorderType == 'Top'){
		
				setBG.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
			}
			if(initSideBarModule2BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			
			}
			if(initSideBarModule2BorderType == 'Left'){
			
				setBG.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			
			}
			if(initSideBarModule2BorderType == 'Right'){
			
				setBG.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			
			}
			if(initSideBarModule2BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			}
			if(initSideBarModule2BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			}
			if(initSideBarModule2BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			
			}
			if(initSideBarModule2BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			}
			if(initSideBarModule2BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			}
			if(initSideBarModule2BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			
			}
			if(initSideBarModule2BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			
			}
			if(initSideBarModule2BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			}
			if(initSideBarModule2BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			
			}
			if(initSideBarModule2BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
				setBG.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			
			}
		
		}
		if(selectedElement == 'side-bar-module3'){
			
			initSideBarModule3BorderBg = color;
			setBG.style.border = '';
	
			if(initSideBarModule3BorderType == 'All'){
		
				setBG.style.border = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
			}			
			if(initSideBarModule3BorderType == 'Top'){
		
				setBG.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
			}
			if(initSideBarModule3BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			
			}
			if(initSideBarModule3BorderType == 'Left'){
			
				setBG.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			
			}
			if(initSideBarModule3BorderType == 'Right'){
			
				setBG.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			
			}
			if(initSideBarModule3BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			}
			if(initSideBarModule3BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			}
			if(initSideBarModule3BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			
			}
			if(initSideBarModule3BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			}
			if(initSideBarModule3BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			}
			if(initSideBarModule3BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			
			}
			if(initSideBarModule3BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			
			}
			if(initSideBarModule3BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			}
			if(initSideBarModule3BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			
			}
			if(initSideBarModule3BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
				setBG.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			
			}
		
		}
		if(selectedElement == 'side-bar-module4'){
			
			initSideBarModule4BorderBg = color;
			setBG.style.border = '';
	
			if(initSideBarModule4BorderType == 'All'){
		
				setBG.style.border = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
			}			
			if(initSideBarModule4BorderType == 'Top'){
		
				setBG.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
			}
			if(initSideBarModule4BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			
			}
			if(initSideBarModule4BorderType == 'Left'){
			
				setBG.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			
			}
			if(initSideBarModule4BorderType == 'Right'){
			
				setBG.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			
			}
			if(initSideBarModule4BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			}
			if(initSideBarModule4BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			}
			if(initSideBarModule4BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			
			}
			if(initSideBarModule4BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			}
			if(initSideBarModule4BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			}
			if(initSideBarModule4BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			
			}
			if(initSideBarModule4BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			
			}
			if(initSideBarModule4BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			}
			if(initSideBarModule4BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			
			}
			if(initSideBarModule4BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
				setBG.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			
			}
		
		}
		if(selectedElement == 'side-bar-module5'){
			
			initSideBarModule5BorderBg = color;
			setBG.style.border = '';
	
			if(initSideBarModule5BorderType == 'All'){
		
				setBG.style.border = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
			}			
			if(initSideBarModule5BorderType == 'Top'){
		
				setBG.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
			}
			if(initSideBarModule5BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			
			}
			if(initSideBarModule5BorderType == 'Left'){
			
				setBG.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			
			}
			if(initSideBarModule5BorderType == 'Right'){
			
				setBG.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			
			}
			if(initSideBarModule5BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			}
			if(initSideBarModule5BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			}
			if(initSideBarModule5BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			
			}
			if(initSideBarModule5BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			}
			if(initSideBarModule5BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			}
			if(initSideBarModule5BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			
			}
			if(initSideBarModule5BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			
			}
			if(initSideBarModule5BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			}
			if(initSideBarModule5BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			
			}
			if(initSideBarModule5BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
				setBG.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			
			}
		
		}
		if(selectedElement == 'side-bar-module6'){
			
			initSideBarModule6BorderBg = color;
			setBG.style.border = '';
	
			if(initSideBarModule6BorderType == 'All'){
		
				setBG.style.border = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
			}			
			if(initSideBarModule6BorderType == 'Top'){
		
				setBG.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
			}
			if(initSideBarModule6BorderType == 'Bottom'){
			
				setBG.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			
			}
			if(initSideBarModule6BorderType == 'Left'){
			
				setBG.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			
			}
			if(initSideBarModule6BorderType == 'Right'){
			
				setBG.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			
			}
			if(initSideBarModule6BorderType == 'Top-Bottom'){
			
				setBG.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			}
			if(initSideBarModule6BorderType == 'Top-Left'){
			
				setBG.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			}
			if(initSideBarModule6BorderType == 'Top-Right'){
			
				setBG.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			
			}
			if(initSideBarModule6BorderType == 'Bottom-Left'){
			
				setBG.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			}
			if(initSideBarModule6BorderType == 'Bottom-Right'){
			
				setBG.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			}
			if(initSideBarModule6BorderType == 'Left-Right'){
				
				setBG.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			
			}
			if(initSideBarModule6BorderType == 'Top-Bottom-Left'){
				
				setBG.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			
			}
			if(initSideBarModule6BorderType == 'Top-Bottom-Right'){
			
				setBG.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			}
			if(initSideBarModule6BorderType == 'Top-Left-Right'){
				
				setBG.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			
			}
			if(initSideBarModule6BorderType == 'Bottom-Left-Right'){
				
				setBG.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
				setBG.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			
			}
		
		}
		
		setProperty = 1;
		updateAttributes('inputBorderBg',m);
		setProperty = 0;
	
	}
}

/**###########################################################################################################################################################
########################################################## BORDER SIDES ######################################################################################
###########################################################################################################################################################**/
		
function changeBorderType(obj){
	
	var setBT = document.getElementById(selectedElement);
	
	if(selectedElement == 'header'){
	
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBT.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		
		initHeaderBorderType = obj.value;
	
	}
	if(selectedElement == 'navigation'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBT.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		
		initNavigationBorderType = obj.value;
	
	}
	if(selectedElement == 'footer'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initFooterBorderWeight+'px solid '+initFooterBorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBT.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		
		initFooterBorderType = obj.value;
	
	}
	if(selectedElement == 'slider'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initSliderBorderWeight+'px solid '+initSliderBorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBT.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		
		initSliderBorderType = obj.value;
	
	}
	if(selectedElement == 'selected'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBT.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		
		initSelectedBorderType = obj.value;
	
	}
	if(selectedElement == 'content-text1'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBT.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		
		initContentText1BorderType = obj.value;
	
	}
	if(selectedElement == 'content-text2'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBT.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		
		initContentText2BorderType = obj.value;
	
	}
	if(selectedElement == 'sbm1h2'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBT.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		
		initSbm1h2BorderType = obj.value;
	
	}
	if(selectedElement == 'sbm2h2'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBT.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		
		initSbm2h2BorderType = obj.value;
	
	}
	if(selectedElement == 'sbm3h2'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBT.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		
		initSbm3h2BorderType = obj.value;
	
	}
	if(selectedElement == 'sbm4h2'){
		
		setBT.style.border = '';
	
		if(obj.value == 'All'){
	
			setBT.style.border = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
	
		}			
		if(obj.value == 'Top'){
	
			setBT.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
	
		}
		if(obj.value == 'Bottom'){
		
			setBT.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(obj.value == 'Left'){
		
			setBT.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(obj.value == 'Right'){
		
			setBT.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom'){
		
			setBT.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(obj.value == 'Top-Left'){
		
			setBT.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(obj.value == 'Top-Right'){
		
			setBT.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left'){
		
			setBT.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
		
			setBT.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(obj.value == 'Left-Right'){
			
			setBT.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Left'){
			
			setBT.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(obj.value == 'Top-Bottom-Right'){
		
			setBT.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			
			setBT.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(obj.value == 'Bottom-Left-Right'){
			
			setBT.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBT.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		
		initSbm4h2BorderType = obj.value;
	
	}
	if(selectedElement == 'sbm5h2'){
		setBT.style.border = '';
		if(obj.value == 'All'){
			setBT.style.border = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}			
		if(obj.value == 'Top'){
			setBT.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Bottom'){
			setBT.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Left'){
			setBT.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Right'){
			setBT.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Top-Bottom'){
			setBT.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Top-Left'){
			setBT.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Top-Right'){
			setBT.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Bottom-Left'){
			setBT.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
			setBT.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Left-Right'){
			setBT.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Top-Bottom-Left'){
			setBT.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Top-Bottom-Right'){
			setBT.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			setBT.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(obj.value == 'Bottom-Left-Right'){
			setBT.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBT.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		initSbm5h2BorderType = obj.value;
	}
	if(selectedElement == 'sbm6h2'){
		setBT.style.border = '';
		if(obj.value == 'All'){
			setBT.style.border = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}			
		if(obj.value == 'Top'){
			setBT.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Bottom'){
			setBT.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Left'){
			setBT.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Right'){
			setBT.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Top-Bottom'){
			setBT.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Top-Left'){
			setBT.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Top-Right'){
			setBT.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Bottom-Left'){
			setBT.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
			setBT.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Left-Right'){
			setBT.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Top-Bottom-Left'){
			setBT.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Top-Bottom-Right'){
			setBT.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			setBT.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(obj.value == 'Bottom-Left-Right'){
			setBT.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBT.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		initSbm6h2BorderType = obj.value;
	}
	if(selectedElement == 'side-bar-module1'){
		setBT.style.border = '';
		if(obj.value == 'All'){
			setBT.style.border = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}			
		if(obj.value == 'Top'){
			setBT.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Bottom'){
			setBT.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Left'){
			setBT.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Right'){
			setBT.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Top-Bottom'){
			setBT.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Top-Left'){
			setBT.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Top-Right'){
			setBT.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Bottom-Left'){
			setBT.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
			setBT.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Left-Right'){
			setBT.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Top-Bottom-Left'){
			setBT.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Top-Bottom-Right'){
			setBT.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			setBT.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(obj.value == 'Bottom-Left-Right'){
			setBT.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBT.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		initSideBarModule1BorderType = obj.value;
	}
	if(selectedElement == 'side-bar-module2'){
		setBT.style.border = '';
		if(obj.value == 'All'){
			setBT.style.border = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}			
		if(obj.value == 'Top'){
			setBT.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Bottom'){
			setBT.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Left'){
			setBT.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Right'){
			setBT.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Top-Bottom'){
			setBT.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Top-Left'){
			setBT.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Top-Right'){
			setBT.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Bottom-Left'){
			setBT.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
			setBT.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Left-Right'){
			setBT.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Top-Bottom-Left'){
			setBT.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Top-Bottom-Right'){
			setBT.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			setBT.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(obj.value == 'Bottom-Left-Right'){
			setBT.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBT.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		initSideBarModule2BorderType = obj.value;
	}
	if(selectedElement == 'side-bar-module3'){
		setBT.style.border = '';
		if(obj.value == 'All'){
			setBT.style.border = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}			
		if(obj.value == 'Top'){
			setBT.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Bottom'){
			setBT.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Left'){
			setBT.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Right'){
			setBT.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Top-Bottom'){
			setBT.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Top-Left'){
			setBT.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Top-Right'){
			setBT.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Bottom-Left'){
			setBT.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
			setBT.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Left-Right'){
			setBT.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Top-Bottom-Left'){
			setBT.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Top-Bottom-Right'){
			setBT.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			setBT.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(obj.value == 'Bottom-Left-Right'){
			setBT.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBT.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		initSideBarModule3BorderType = obj.value;
	}
	if(selectedElement == 'side-bar-module4'){
		setBT.style.border = '';
		if(obj.value == 'All'){
			setBT.style.border = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}			
		if(obj.value == 'Top'){
			setBT.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Bottom'){
			setBT.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Left'){
			setBT.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Right'){
			setBT.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Top-Bottom'){
			setBT.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Top-Left'){
			setBT.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Top-Right'){
			setBT.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Bottom-Left'){
			setBT.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
			setBT.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Left-Right'){
			setBT.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Top-Bottom-Left'){
			setBT.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Top-Bottom-Right'){
			setBT.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			setBT.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(obj.value == 'Bottom-Left-Right'){
			setBT.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBT.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		initSideBarModule4BorderType = obj.value;
	}
	if(selectedElement == 'side-bar-module5'){
		setBT.style.border = '';
		if(obj.value == 'All'){
			setBT.style.border = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}			
		if(obj.value == 'Top'){
			setBT.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Bottom'){
			setBT.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Left'){
			setBT.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Right'){
			setBT.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Top-Bottom'){
			setBT.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Top-Left'){
			setBT.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Top-Right'){
			setBT.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Bottom-Left'){
			setBT.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
			setBT.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Left-Right'){
			setBT.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Top-Bottom-Left'){
			setBT.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Top-Bottom-Right'){
			setBT.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			setBT.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(obj.value == 'Bottom-Left-Right'){
			setBT.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBT.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		initSideBarModule5BorderType = obj.value;
	}
	if(selectedElement == 'side-bar-module6'){
		setBT.style.border = '';
		if(obj.value == 'All'){
			setBT.style.border = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}			
		if(obj.value == 'Top'){
			setBT.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Bottom'){
			setBT.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Left'){
			setBT.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Right'){
			setBT.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Top-Bottom'){
			setBT.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Top-Left'){
			setBT.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Top-Right'){
			setBT.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Bottom-Left'){
			setBT.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Bottom-Right'){
			setBT.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Left-Right'){
			setBT.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Top-Bottom-Left'){
			setBT.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Top-Bottom-Right'){
			setBT.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Top-Left-Right'){
			setBT.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(obj.value == 'Bottom-Left-Right'){
			setBT.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBT.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		initSideBarModule6BorderType = obj.value;
	}
}

/**###########################################################################################################################################################
########################################################## BORDER WEIGHT #####################################################################################
###########################################################################################################################################################**/
		
function changeBorderWeight(obj){
	
	var setBW = document.getElementById(selectedElement);
	
	if(selectedElement == 'header'){
	
		initHeaderBorderWeight = obj.value;
		if(initHeaderBorderType == 'All'){
	
			setBW.style.border = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			
		}			
		if(initHeaderBorderType == 'Top'){
			alert();
			setBW.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
	
		}
		if(initHeaderBorderType == 'Bottom'){
		
			setBW.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(initHeaderBorderType == 'Left'){
		
			setBW.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(initHeaderBorderType == 'Right'){
		
			setBW.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(initHeaderBorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(initHeaderBorderType == 'Top-Left'){
		
			setBW.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(initHeaderBorderType == 'Top-Right'){
		
			setBW.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(initHeaderBorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(initHeaderBorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(initHeaderBorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(initHeaderBorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(initHeaderBorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		}
		if(initHeaderBorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		if(initHeaderBorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderLeft = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
			setBW.style.borderRight = initHeaderBorderWeight+'px solid '+initHeaderBorderBg;
		
		}
		
	
	}
	if(selectedElement == 'navigation'){
		
		initNavigationBorderWeight = obj.value;
		
		if(initNavigationBorderType == 'All'){
	
			setBW.style.border = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
	
		}			
		if(initNavigationBorderType == 'Top'){
	
			setBW.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
	
		}
		if(initNavigationBorderType == 'Bottom'){
		
			setBW.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(initNavigationBorderType == 'Left'){
		
			setBW.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(initNavigationBorderType == 'Right'){
		
			setBW.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(initNavigationBorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(initNavigationBorderType == 'Top-Left'){
		
			setBW.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(initNavigationBorderType == 'Top-Right'){
		
			setBW.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(initNavigationBorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(initNavigationBorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(initNavigationBorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(initNavigationBorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(initNavigationBorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		}
		if(initNavigationBorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
		if(initNavigationBorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderLeft = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
			setBW.style.borderRight = initNavigationBorderWeight+'px solid '+initNavigationBorderBg;
		
		}
	
	}
	if(selectedElement == 'footer'){
		
		initFooterBorderWeight = obj.value;
		
		if(initFooterBorderType == 'All'){
	
			setBW.style.border = initFooterBorderWeight+'px solid '+initFooterBorderBg;
	
		}			
		if(initFooterBorderType == 'Top'){
	
			setBW.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
	
		}
		if(initFooterBorderType == 'Bottom'){
		
			setBW.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(initFooterBorderType == 'Left'){
		
			setBW.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(initFooterBorderType == 'Right'){
		
			setBW.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(initFooterBorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(initFooterBorderType == 'Top-Left'){
		
			setBW.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(initFooterBorderType == 'Top-Right'){
		
			setBW.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(initFooterBorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(initFooterBorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(initFooterBorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(initFooterBorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(initFooterBorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		}
		if(initFooterBorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
		if(initFooterBorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderLeft = initFooterBorderWeight+'px solid '+initFooterBorderBg;
			setBW.style.borderRight = initFooterBorderWeight+'px solid '+initFooterBorderBg;
		
		}
	
	}
	if(selectedElement == 'slider'){
		
		initSliderBorderWeight = obj.value;
		
		if(initSliderBorderType == 'All'){
	
			setBW.style.border = initSliderBorderWeight+'px solid '+initSliderBorderBg;
	
		}			
		if(initSliderBorderType == 'Top'){
	
			setBW.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
	
		}
		if(initSliderBorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(initSliderBorderType == 'Left'){
		
			setBW.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(initSliderBorderType == 'Right'){
		
			setBW.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(initSliderBorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(initSliderBorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(initSliderBorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(initSliderBorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(initSliderBorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(initSliderBorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(initSliderBorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(initSliderBorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		}
		if(initSliderBorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
		if(initSliderBorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderLeft = initSliderBorderWeight+'px solid '+initSliderBorderBg;
			setBW.style.borderRight = initSliderBorderWeight+'px solid '+initSliderBorderBg;
		
		}
	
	}
	if(selectedElement == 'selected'){
		
		initSelectedBorderWeight = obj.value;
		
		if(initSelectedBorderType == 'All'){
	
			setBW.style.border = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
	
		}			
		if(initSelectedBorderType == 'Top'){
	
			setBW.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
	
		}
		if(initSelectedBorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(initSelectedBorderType == 'Left'){
		
			setBW.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(initSelectedBorderType == 'Right'){
		
			setBW.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(initSelectedBorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(initSelectedBorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(initSelectedBorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(initSelectedBorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(initSelectedBorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(initSelectedBorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(initSelectedBorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(initSelectedBorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		}
		if(initSelectedBorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
		if(initSelectedBorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderLeft = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
			setBW.style.borderRight = initSelectedBorderWeight+'px solid '+initSelectedBorderBg;
		
		}
	
	}
	if(selectedElement == 'content-text1'){
		
		initContentText1BorderWeight = obj.value;
		
		if(initContentText1BorderType == 'All'){
	
			setBW.style.border = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
	
		}			
		if(initContentText1BorderType == 'Top'){
	
			setBW.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
	
		}
		if(initContentText1BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(initContentText1BorderType == 'Left'){
		
			setBW.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(initContentText1BorderType == 'Right'){
		
			setBW.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(initContentText1BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(initContentText1BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(initContentText1BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(initContentText1BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(initContentText1BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(initContentText1BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(initContentText1BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(initContentText1BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		}
		if(initContentText1BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
		if(initContentText1BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderLeft = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
			setBW.style.borderRight = initContentText1BorderWeight+'px solid '+initContentText1BorderBg;
		
		}
	
	}
	if(selectedElement == 'content-text2'){
		
		initContentText2BorderWeight = obj.value;
		
		if(initContentText2BorderType == 'All'){
	
			setBW.style.border = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
	
		}			
		if(initContentText2BorderType == 'Top'){
	
			setBW.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
	
		}
		if(initContentText2BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(initContentText2BorderType == 'Left'){
		
			setBW.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(initContentText2BorderType == 'Right'){
		
			setBW.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(initContentText2BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(initContentText2BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(initContentText2BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(initContentText2BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(initContentText2BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(initContentText2BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(initContentText2BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(initContentText2BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		}
		if(initContentText2BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
		if(initContentText2BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderLeft = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
			setBW.style.borderRight = initContentText2BorderWeight+'px solid '+initContentText2BorderBg;
		
		}
	
	}
	if(selectedElement == 'sbm1h2'){
		
		initSbm1h2BorderWeight = obj.value;
		
		if(initSbm1h2BorderType == 'All'){
	
			setBW.style.border = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
	
		}			
		if(initSbm1h2BorderType == 'Top'){
	
			setBW.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
	
		}
		if(initSbm1h2BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(initSbm1h2BorderType == 'Left'){
		
			setBW.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(initSbm1h2BorderType == 'Right'){
		
			setBW.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(initSbm1h2BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(initSbm1h2BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(initSbm1h2BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(initSbm1h2BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(initSbm1h2BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(initSbm1h2BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(initSbm1h2BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(initSbm1h2BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		}
		if(initSbm1h2BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
		if(initSbm1h2BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderLeft = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
			setBW.style.borderRight = initSbm1h2BorderWeight+'px solid '+initSbm1h2BorderBg;
		
		}
	
	}
	if(selectedElement == 'sbm2h2'){
		
		initSbm2h2BorderWeight = obj.value;
		
		if(initSbm2h2BorderType == 'All'){
	
			setBW.style.border = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
	
		}			
		if(initSbm2h2BorderType == 'Top'){
	
			setBW.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
	
		}
		if(initSbm2h2BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(initSbm2h2BorderType == 'Left'){
		
			setBW.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(initSbm2h2BorderType == 'Right'){
		
			setBW.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(initSbm2h2BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(initSbm2h2BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(initSbm2h2BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(initSbm2h2BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(initSbm2h2BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(initSbm2h2BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(initSbm2h2BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(initSbm2h2BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		}
		if(initSbm2h2BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
		if(initSbm2h2BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderLeft = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
			setBW.style.borderRight = initSbm2h2BorderWeight+'px solid '+initSbm2h2BorderBg;
		
		}
	
	}
	if(selectedElement == 'sbm3h2'){
		
		initSbm3h2BorderWeight = obj.value;
		
		if(initSbm3h2BorderType == 'All'){
	
			setBW.style.border = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
	
		}			
		if(initSbm3h2BorderType == 'Top'){
	
			setBW.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
	
		}
		if(initSbm3h2BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(initSbm3h2BorderType == 'Left'){
		
			setBW.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(initSbm3h2BorderType == 'Right'){
		
			setBW.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(initSbm3h2BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(initSbm3h2BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(initSbm3h2BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(initSbm3h2BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(initSbm3h2BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(initSbm3h2BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(initSbm3h2BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(initSbm3h2BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		}
		if(initSbm3h2BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
		if(initSbm3h2BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderLeft = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
			setBW.style.borderRight = initSbm3h2BorderWeight+'px solid '+initSbm3h2BorderBg;
		
		}
	
	}
	if(selectedElement == 'sbm4h2'){
		
		initSbm4h2BorderWeight = obj.value;
		
		if(initSbm4h2BorderType == 'All'){
	
			setBW.style.border = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
	
		}			
		if(initSbm4h2BorderType == 'Top'){
	
			setBW.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
	
		}
		if(initSbm4h2BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(initSbm4h2BorderType == 'Left'){
		
			setBW.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(initSbm4h2BorderType == 'Right'){
		
			setBW.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(initSbm4h2BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(initSbm4h2BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(initSbm4h2BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(initSbm4h2BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(initSbm4h2BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(initSbm4h2BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(initSbm4h2BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(initSbm4h2BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		}
		if(initSbm4h2BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
		if(initSbm4h2BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderLeft = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
			setBW.style.borderRight = initSbm4h2BorderWeight+'px solid '+initSbm4h2BorderBg;
		
		}
	
	}
	if(selectedElement == 'sbm5h2'){
		
		initSbm5h2BorderWeight = obj.value;
		
		if(initSbm5h2BorderType == 'All'){
	
			setBW.style.border = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
	
		}			
		if(initSbm5h2BorderType == 'Top'){
	
			setBW.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
	
		}
		if(initSbm5h2BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
		}
		if(initSbm5h2BorderType == 'Left'){
		
			setBW.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
		}
		if(initSbm5h2BorderType == 'Right'){
		
			setBW.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
		}
		if(initSbm5h2BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(initSbm5h2BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(initSbm5h2BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
		}
		if(initSbm5h2BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(initSbm5h2BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(initSbm5h2BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
		}
		if(initSbm5h2BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
		}
		if(initSbm5h2BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		}
		if(initSbm5h2BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
		}
		if(initSbm5h2BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderLeft = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
			setBW.style.borderRight = initSbm5h2BorderWeight+'px solid '+initSbm5h2BorderBg;
		
		}
	
	}
	if(selectedElement == 'sbm6h2'){
		
		initSbm6h2BorderWeight = obj.value;
		
		if(initSbm6h2BorderType == 'All'){
	
			setBW.style.border = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
	
		}			
		if(initSbm6h2BorderType == 'Top'){
	
			setBW.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
	
		}
		if(initSbm6h2BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
		}
		if(initSbm6h2BorderType == 'Left'){
		
			setBW.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
		}
		if(initSbm6h2BorderType == 'Right'){
		
			setBW.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
		}
		if(initSbm6h2BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(initSbm6h2BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(initSbm6h2BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
		}
		if(initSbm6h2BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(initSbm6h2BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(initSbm6h2BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
		}
		if(initSbm6h2BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
		}
		if(initSbm6h2BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		}
		if(initSbm6h2BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
		}
		if(initSbm6h2BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderLeft = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
			setBW.style.borderRight = initSbm6h2BorderWeight+'px solid '+initSbm6h2BorderBg;
		
		}
	
	}
	if(selectedElement == 'side-bar-module1'){
		
		initSideBarModule1BorderWeight = obj.value;
		
		if(initSideBarModule1BorderType == 'All'){
	
			setBW.style.border = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
	
		}			
		if(initSideBarModule1BorderType == 'Top'){
	
			setBW.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
	
		}
		if(initSideBarModule1BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
		}
		if(initSideBarModule1BorderType == 'Left'){
		
			setBW.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
		}
		if(initSideBarModule1BorderType == 'Right'){
		
			setBW.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
		}
		if(initSideBarModule1BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(initSideBarModule1BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(initSideBarModule1BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
		}
		if(initSideBarModule1BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(initSideBarModule1BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(initSideBarModule1BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
		}
		if(initSideBarModule1BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
		}
		if(initSideBarModule1BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		}
		if(initSideBarModule1BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
		}
		if(initSideBarModule1BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderLeft = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
			setBW.style.borderRight = initSideBarModule1BorderWeight+'px solid '+initSideBarModule1BorderBg;
		
		}
	
	}
	if(selectedElement == 'side-bar-module2'){
		
		initSideBarModule2BorderWeight = obj.value;
		
		if(initSideBarModule2BorderType == 'All'){
	
			setBW.style.border = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
	
		}			
		if(initSideBarModule2BorderType == 'Top'){
	
			setBW.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
	
		}
		if(initSideBarModule2BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
		}
		if(initSideBarModule2BorderType == 'Left'){
		
			setBW.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
		}
		if(initSideBarModule2BorderType == 'Right'){
		
			setBW.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
		}
		if(initSideBarModule2BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(initSideBarModule2BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(initSideBarModule2BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
		}
		if(initSideBarModule2BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(initSideBarModule2BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(initSideBarModule2BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
		}
		if(initSideBarModule2BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
		}
		if(initSideBarModule2BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		}
		if(initSideBarModule2BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
		}
		if(initSideBarModule2BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderLeft = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
			setBW.style.borderRight = initSideBarModule2BorderWeight+'px solid '+initSideBarModule2BorderBg;
		
		}
	
	}
	if(selectedElement == 'side-bar-module3'){
		
		initSideBarModule3BorderWeight = obj.value;
		
		if(initSideBarModule3BorderType == 'All'){
	
			setBW.style.border = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
	
		}			
		if(initSideBarModule3BorderWeight == 'Top'){
	
			setBW.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
	
		}
		if(initSideBarModule3BorderWeight == 'Bottom'){
		
			setBW.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
		}
		if(initSideBarModule3BorderWeight == 'Left'){
		
			setBW.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
		}
		if(initSideBarModule3BorderWeight == 'Right'){
		
			setBW.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
		}
		if(initSideBarModule3BorderWeight == 'Top-Bottom'){
		
			setBW.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(initSideBarModule3BorderWeight == 'Top-Left'){
		
			setBW.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(initSideBarModule3BorderWeight == 'Top-Right'){
		
			setBW.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
		}
		if(initSideBarModule3BorderWeight == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(initSideBarModule3BorderWeight == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(initSideBarModule3BorderWeight == 'Left-Right'){
			
			setBW.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
		}
		if(initSideBarModule3BorderWeight == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
		}
		if(initSideBarModule3BorderWeight == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		}
		if(initSideBarModule3BorderWeight == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
		}
		if(initSideBarModule3BorderWeight == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderLeft = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
			setBW.style.borderRight = initSideBarModule3BorderWeight+'px solid '+initSideBarModule3BorderBg;
		
		}
	
	}
	if(selectedElement == 'side-bar-module4'){
		
		initSideBarModule4BorderWeight = obj.value;
		
		if(initSideBarModule4BorderType == 'All'){
	
			setBW.style.border = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
	
		}			
		if(initSideBarModule4BorderType == 'Top'){
	
			setBW.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
	
		}
		if(initSideBarModule4BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
		}
		if(initSideBarModule4BorderType == 'Left'){
		
			setBW.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
		}
		if(initSideBarModule4BorderType == 'Right'){
		
			setBW.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
		}
		if(initSideBarModule4BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(initSideBarModule4BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(initSideBarModule4BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
		}
		if(initSideBarModule4BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(initSideBarModule4BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(initSideBarModule4BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
		}
		if(initSideBarModule4BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
		}
		if(initSideBarModule4BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		}
		if(initSideBarModule4BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
		}
		if(initSideBarModule4BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderLeft = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
			setBW.style.borderRight = initSideBarModule4BorderWeight+'px solid '+initSideBarModule4BorderBg;
		
		}
	
	}
	if(selectedElement == 'side-bar-module5'){
		
		initSideBarModule5BorderWeight = obj.value;
		
		if(initSideBarModule5BorderType == 'All'){
	
			setBW.style.border = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
	
		}			
		if(initSideBarModule5BorderType == 'Top'){
	
			setBW.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
	
		}
		if(initSideBarModule5BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
		}
		if(initSideBarModule5BorderType == 'Left'){
		
			setBW.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
		}
		if(initSideBarModule5BorderType == 'Right'){
		
			setBW.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
		}
		if(initSideBarModule5BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(initSideBarModule5BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(initSideBarModule5BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
		}
		if(initSideBarModule5BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(initSideBarModule5BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(initSideBarModule5BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
		}
		if(initSideBarModule5BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
		}
		if(initSideBarModule5BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		}
		if(initSideBarModule5BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
		}
		if(initSideBarModule5BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderLeft = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
			setBW.style.borderRight = initSideBarModule5BorderWeight+'px solid '+initSideBarModule5BorderBg;
		
		}
	
	}
	if(selectedElement == 'side-bar-module6'){
		
		initSideBarModule6BorderWeight = obj.value;
		
		if(initSideBarModule6BorderType == 'All'){
	
			setBW.style.border = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
	
		}			
		if(initSideBarModule6BorderType == 'Top'){
	
			setBW.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
	
		}
		if(initSideBarModule6BorderType == 'Bottom'){
		
			setBW.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
		}
		if(initSideBarModule6BorderType == 'Left'){
		
			setBW.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
		}
		if(initSideBarModule6BorderType == 'Right'){
		
			setBW.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
		}
		if(initSideBarModule6BorderType == 'Top-Bottom'){
		
			setBW.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(initSideBarModule6BorderType == 'Top-Left'){
		
			setBW.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(initSideBarModule6BorderType == 'Top-Right'){
		
			setBW.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
		}
		if(initSideBarModule6BorderType == 'Bottom-Left'){
		
			setBW.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(initSideBarModule6BorderType == 'Bottom-Right'){
		
			setBW.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(initSideBarModule6BorderType == 'Left-Right'){
			
			setBW.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
		}
		if(initSideBarModule6BorderType == 'Top-Bottom-Left'){
			
			setBW.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
		}
		if(initSideBarModule6BorderType == 'Top-Bottom-Right'){
		
			setBW.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		}
		if(initSideBarModule6BorderType == 'Top-Left-Right'){
			
			setBW.style.borderTop = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
		}
		if(initSideBarModule6BorderType == 'Bottom-Left-Right'){
			
			setBW.style.borderBottom = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderLeft = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
			setBW.style.borderRight = initSideBarModule6BorderWeight+'px solid '+initSideBarModule6BorderBg;
		
		}
	
	}

}