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

function applyGradient(a,gradientColor){
	if(selectedElement == 'theme-page'){
		if(gradientColor != '')
			initThemePageBackupBackground = gradientColor;
		if(initThemePageGradient == a){
			if(initThemePageGradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initThemePageBackupBackground);
			}else if(initThemePageGradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initThemePageBackupBackground);
			}else if(initThemePageGradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initThemePageBackupBackground);
			}else if(initThemePageGradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initThemePageBackupBackground);
			}
			initThemePageGradient = 1;
		}else if(initThemePageGradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initThemePageBackupBackground;
			initThemePageGradient = 0;
		}
	}
	if(selectedElement == 'header'){
		if(gradientColor != '')
			initHeaderBackupBackground = gradientColor;
		if(initHeaderGradient == a){
			if(initHeaderGradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initHeaderBackupBackground);
			}else if(initHeaderGradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initHeaderBackupBackground);
			}else if(initHeaderGradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initHeaderBackupBackground);
			}else if(initHeaderGradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initHeaderBackupBackground);
			}
			initHeaderGradient = 1;
		}else if(initHeaderGradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initHeaderBackupBackground;
			initHeaderGradient = 0;
		}
	}
	if(selectedElement == 'footer'){
		if(gradientColor != '')
			initFooterBackupBackground = gradientColor;
		if(initFooterGradient == a){
			if(initFooterGradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initFooterBackupBackground);
			}else if(initFooterGradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initFooterBackupBackground);
			}else if(initFooterGradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initFooterBackupBackground);
			}else if(initFooterGradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initFooterBackupBackground);
			}
			initFooterGradient = 1;
		}else if(initFooterGradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initFooterBackupBackground;
			initFooterGradient = 0;
		}
	}
	if(selectedElement == 'navigation'){
		if(gradientColor != '')
			initNavigationBackupBackground = gradientColor;
		if(initNavigationGradient == a){
			if(initNavigationGradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initNavigationBackupBackground);
			}else if(initNavigationGradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initNavigationBackupBackground);
			}else if(initNavigationGradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initNavigationBackupBackground);
			}else if(initNavigationGradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initNavigationBackupBackground);
			}
			initNavigationGradient = 1;
		}else if(initNavigationGradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initNavigationBackupBackground;
			initNavigationGradient = 0;
		}
	}
	if(selectedElement == 'selected'){
		if(gradientColor != '')
			initSelectedBackupBackground = gradientColor;
		if(initSelectedGradient == a){
			if(initSelectedGradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSelectedBackupBackground);
			}else if(initSelectedGradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSelectedBackupBackground);
			}else if(initSelectedGradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSelectedBackupBackground);
			}else if(initSelectedGradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSelectedBackupBackground);
			}
			initSelectedGradient = 1;
		}else if(initSelectedGradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSelectedBackupBackground;
			initSelectedGradient = 0;
		}
	
	}
	if(selectedElement == 'content-text1'){
		if(gradientColor != '')
			initContentText1BackupBackground = gradientColor;
		if(initContentText1Gradient == a){
			if(initContentText1GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initContentText1BackupBackground);
			}else if(initContentText1GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initContentText1BackupBackground);
			}else if(initContentText1GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initContentText1BackupBackground);
			}else if(initContentText1GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initContentText1BackupBackground);
			}
			initContentText1Gradient = 1;
		}else if(initContentText1Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initContentText1BackupBackground;
			initContentText1Gradient = 0;
		}
	}
	if(selectedElement == 'content-text2'){
		if(gradientColor != '')
			initContentText2BackupBackground = gradientColor;
		if(initContentText2Gradient == a){
			if(initContentText2GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initContentText2BackupBackground);	
			}else if(initContentText2GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initContentText2BackupBackground);
			}else if(initContentText2GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initContentText2BackupBackground);
			}else if(initContentText2GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initContentText2BackupBackground);
			}
			initContentText2Gradient = 1;
		}else if(initContentText2Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initContentText2BackupBackground;
			initContentText2Gradient = 0;
		}
	}
	if(selectedElement == 'side-bar-module1'){
		if(gradientColor != '')
			initSideBarModule1BackupBackground = gradientColor;
		if(initSideBarModule1Gradient == a){
			if(initSideBarModule1GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSideBarModule1BackupBackground);
			}else if(initSideBarModule1GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSideBarModule1BackupBackground);	
			}else if(initSideBarModule1GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSideBarModule1BackupBackground);
			}else if(initSideBarModule1GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSideBarModule1BackupBackground);
			}
			initSideBarModule1Gradient = 1;
		}else if(initSideBarModule1Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSideBarModule1BackupBackground;
			initSideBarModule1Gradient = 0;
		}
	}
	if(selectedElement == 'side-bar-module2'){
		if(gradientColor != '')
			initSideBarModule2BackupBackground = gradientColor;
		if(initSideBarModule2Gradient == a){
			if(initSideBarModule2GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSideBarModule2BackupBackground);	
			}else if(initSideBarModule2GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSideBarModule2BackupBackground);		
			}else if(initSideBarModule2GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSideBarModule2BackupBackground);	
			}else if(initSideBarModule2GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSideBarModule2BackupBackground);	
			}
			initSideBarModule2Gradient = 1;
		}else if(initSideBarModule2Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSideBarModule2BackupBackground;
			initSideBarModule2Gradient = 0;
		}
	}
	if(selectedElement == 'side-bar-module3'){
		if(gradientColor != '')
			initSideBarModule3BackupBackground = gradientColor;
		if(initSideBarModule3Gradient == a){
			if(initSideBarModule3GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSideBarModule3BackupBackground);	
			}else if(initSideBarModule3GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSideBarModule3BackupBackground);		
			}else if(initSideBarModule3GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSideBarModule3BackupBackground);	
			}else if(initSideBarModule3GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSideBarModule3BackupBackground);	
			}
			initSideBarModule3Gradient = 1;
		}else if(initSideBarModule3Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSideBarModule3BackupBackground;
			initSideBarModule3Gradient = 0;
		}
	}
	if(selectedElement == 'side-bar-module4'){
		if(gradientColor != '')
			initSideBarModule4BackupBackground = gradientColor;
		if(initSideBarModule4Gradient == a){
			if(initSideBarModule4GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSideBarModule4BackupBackground);	
			}else if(initSideBarModule4GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSideBarModule4BackupBackground);		
			}else if(initSideBarModule4GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSideBarModule4BackupBackground);	
			}else if(initSideBarModule4GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSideBarModule4BackupBackground);	
			}
			initSideBarModule4Gradient = 1;
		}else if(initSideBarModule4Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSideBarModule4BackupBackground;
			initSideBarModule4Gradient = 0;
		}
	}
	if(selectedElement == 'side-bar-module5'){
		if(gradientColor != '')
			initSideBarModule5BackupBackground = gradientColor;
		if(initSideBarModule5Gradient == a){
			if(initSideBarModule5GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSideBarModule5BackupBackground);	
			}else if(initSideBarModule5GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSideBarModule5BackupBackground);		
			}else if(initSideBarModule5GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSideBarModule5BackupBackground);	
			}else if(initSideBarModule5GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSideBarModule5BackupBackground);	
			}
			initSideBarModule5Gradient = 1;
		}else if(initSideBarModule5Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSideBarModule5BackupBackground;
			initSideBarModule5Gradient = 0;
		}
	}
	if(selectedElement == 'side-bar-module6'){
		if(gradientColor != '')
			initSideBarModule6BackupBackground = gradientColor;
		if(initSideBarModule6Gradient == a){
			if(initSideBarModule6GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSideBarModule6BackupBackground);	
			}else if(initSideBarModule6GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSideBarModule6BackupBackground);		
			}else if(initSideBarModule6GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSideBarModule6BackupBackground);	
			}else if(initSideBarModule6GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSideBarModule6BackupBackground);	
			}
			initSideBarModule6Gradient = 1;
		}else if(initSideBarModule6Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSideBarModule6BackupBackground;
			initSideBarModule6Gradient = 0;
		}
	}
	if(selectedElement == 'sbm1h2'){
		if(gradientColor != '')
			initSbm1h2BackupBackground = gradientColor;
		if(initSbm1h2Gradient == a){
			if(initSbm1h2GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSbm1h2BackupBackground);	
			}else if(initSbm1h2GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSbm1h2BackupBackground);		
			}else if(initSbm1h2GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSbm1h2BackupBackground);	
			}else if(initSbm1h2GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSbm1h2BackupBackground);	
			}
			initSbm1h2Gradient = 1;
		}else if(initSbm1h2Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSbm1h2BackupBackground;
			initSbm1h2Gradient = 0;
		}
	}
	if(selectedElement == 'sbm2h2'){
		if(gradientColor != '')
			initSbm2h2BackupBackground = gradientColor;
		if(initSbm2h2Gradient == a){
			if(initSbm2h2GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSbm2h2BackupBackground);	
			}else if(initSbm2h2GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSbm2h2BackupBackground);		
			}else if(initSbm2h2GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSbm2h2BackupBackground);	
			}else if(initSbm2h2GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSbm2h2BackupBackground);	
			}
			initSbm2h2Gradient = 1;
		}else if(initSbm2h2Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSbm2h2BackupBackground;
			initSbm2h2Gradient = 0;
		}
	}if(selectedElement == 'sbm3h2'){
		if(gradientColor != '')
				initSbm3h2BackupBackground = gradientColor;
		if(initSbm3h2Gradient == a){
			if(initSbm3h2GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSbm3h2BackupBackground);	
			}else if(initSbm3h2GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSbm3h2BackupBackground);		
			}else if(initSbm3h2GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSbm3h2BackupBackground);	
			}else if(initSbm3h2GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSbm3h2BackupBackground);	
			}
			initSbm3h2Gradient = 1;
		}else if(initSbm3h2Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSbm3h2BackupBackground;
			initSbm3h2Gradient = 0;
		}
	}
	if(selectedElement == 'sbm4h2'){
		if(gradientColor != '')
			initSbm4h2BackupBackground = gradientColor;
		if(initSbm4h2Gradient == a){
			if(initSbm4h2GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSbm4h2BackupBackground);	
			}else if(initSbm4h2GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSbm4h2BackupBackground);		
			}else if(initSbm4h2GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSbm4h2BackupBackground);	
			}else if(initSbm4h2GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSbm4h2BackupBackground);	
			}
			initSbm4h2Gradient = 1;
		}else if(initSbm4h2Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSbm4h2BackupBackground;
			initSbm4h2Gradient = 0;
		}
	
	}if(selectedElement == 'sbm5h2'){
		if(gradientColor != '')
			initSbm5h2BackupBackground = gradientColor;
		if(initSbm5h2Gradient == a){
			if(initSbm5h2GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSbm5h2BackupBackground);	
			}else if(initSbm5h2GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSbm5h2BackupBackground);		
			}else if(initSbm5h2GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSbm5h2BackupBackground);	
			}else if(initSbm5h2GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSbm5h2BackupBackground);	
			}
			initSbm5h2Gradient = 1;
		}else if(initSbm5h2Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSbm5h2BackupBackground;
			initSbm5h2Gradient = 0;
		}
	
	}if(selectedElement == 'sbm6h2'){
		if(gradientColor != '')
			initSbm6h2BackupBackground = gradientColor;
		if(initSbm6h2Gradient == a){
			if(initSbm6h2GradientType == 'topwhite'){
				applyTopWhite();
				bgForAllBrowsers('top','#fff',initSbm6h2BackupBackground);	
			}else if(initSbm6h2GradientType == 'bottomwhite'){
				applyBottomWhite();
				bgForAllBrowsers('bottom','#fff',initSbm6h2BackupBackground);		
			}else if(initSbm6h2GradientType == 'topblack'){
				applyTopBlack();
				bgForAllBrowsers('top','#000',initSbm6h2BackupBackground);	
			}else if(initSbm6h2GradientType == 'bottomblack'){
				applyBottomBlack();
				bgForAllBrowsers('bottom','#000',initSbm6h2BackupBackground);	
			}
			initSbm6h2Gradient = 1;
		}else if(initSbm6h2Gradient != a){
			hideGradientBoxes();
			document.getElementById(selectedElement).style.background = initSbm6h2BackupBackground;
			initSbm6h2Gradient = 0;
		}
	}
}
function updateGradient(applygradient,a){
	if(applygradient == ''){
		if(document.getElementById('inputGradient').checked == false)
			applygradient = 1;
	}
	if(selectedElement == 'theme-page'){
		if(a != '')
			initThemePageGradientType = a;
			initThemePageGradient = 0;
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
	}
	if(selectedElement == 'header'){
		if(a != '')
			initHeaderGradientType = a;
			initHeaderGradient = 0;
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
	}
	if(selectedElement == 'footer'){
		if(a != '')
			initFooterGradientType = a;
			initFooterGradient = 0;
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
		}else if(initFooterGradientType == 'topblack'){
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
	}
	if(selectedElement == 'navigation'){
		if(a != '')
			initNavigationGradientType = a;
			initNavigationGradient = 0;
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
	}
	if(selectedElement == 'content-text1'){
		if(a != '')
			initContentText1GradientType = a;
			initContentText1Gradient = 0;
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
	}
	if(selectedElement == 'content-text2'){
		if(a != '')
			initContentText2GradientType = a;
			initContentText2Gradient = 0;
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
	}
	if(selectedElement == 'selected'){
		if(a != '')
			initSelectedGradientType = a;
			initSelectedGradient = 0;
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
	}
	if(selectedElement == 'side-bar-module1'){
		if(a != '')
			initSideBarModule1GradientType = a;
			initSideBarModule1Gradient = 0;
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
	}
	if(selectedElement == 'side-bar-module2'){
		if(a != '')
			initSideBarModule2GradientType = a;
			initSideBarModule2Gradient = 0;
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
	}
	if(selectedElement == 'side-bar-module3'){
		if(a != '')
			initSideBarModule3GradientType = a;
			initSideBarModule3Gradient = 0;
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
	}
	if(selectedElement == 'side-bar-module4'){
		if(a != '')
			initSideBarModule4GradientType = a;
			initSideBarModule4Gradient = 0;
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
	}
	if(selectedElement == 'side-bar-module5'){
		if(a != '')
			initSideBarModule5GradientType = a;
			initSideBarModule5Gradient = 0;
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
	}
	if(selectedElement == 'side-bar-module6'){
		if(a != '')
			initSideBarModule6GradientType = a;
			initSideBarModule6Gradient = 0;
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
	}
	if(selectedElement == 'sbm1h2'){
		if(a != '')
			initSbm1h2GradientType = a;
			initSbm1h2Gradient = 0;
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
	}
	if(selectedElement == 'sbm2h2'){
		if(a != '')
			initSbm2h2GradientType = a;
			initSbm2h2Gradient = 0;
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
	}
	if(selectedElement == 'sbm3h2'){
		if(a != '')
			initSbm3h2GradientType = a;
			initSbm3h2Gradient = 0;
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
	}
	if(selectedElement == 'sbm4h2'){
		if(a != '')
			initSbm4h2GradientType = a;
			initSbm4h2Gradient = 0;
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
	}
	if(selectedElement == 'sbm5h2'){
		if(a != '')
			initSbm5h2GradientType = a;
			initSbm5h2Gradient = 0;
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
	}
	if(selectedElement == 'sbm6h2'){
		if(a != '')
			initSbm6h2GradientType = a;
			initSbm6h2Gradient = 0;
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
	}
	
	applyGradient(applygradient,'');

}