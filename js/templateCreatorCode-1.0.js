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
 
function makeCode(Scale){
	var multiple;
	if(Scale == 1024)
		multiple = 1.96923;
	if(Scale == 1200)
		multiple = 2.30769;
	if(Scale == 1300)
		multiple = 2.5;
	if(Scale == 960)
		multiple = 1.84615;

var codeText = [];
	codeText[0] = '<!DOCTYPE html>';
	codeText[0] += '<html>';
	codeText[0] += '<!-- BEGIN HEAD -->';
	codeText[0] += '<head>';
	codeText[0] += '<title></title>';
	codeText[0] += '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">';
	codeText[0] += '<meta name="author" content="">';
	codeText[0] += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
	codeText[0] += '<!-- BEGIN STYLE -->';
	codeText[0] += '<style>';
	codeText[0] += ' body{padding:0px;}';
	codeText[0] += ' h2{ border-radius:4px 4px 0px 0px; }';
	codeText[0] += ' a{ padding:0px;padding-top:0px;padding-bottom:0px;line-height:10px;cursor:pointer;margin-left:5px; }';
	codeText[0] += ' a:hover{ color:green; }';
	codeText[0] += ' .content-wrap{ float:left;margin-top:0px;margin-left:9px;margin-right:9px;}';
	codeText[0] += ' .slider-wrap{ padding-top:7px;padding-bottom:0px;overflow:hidden;}';
	codeText[0] += ' .set-margin{ margin-left:3px; }';
	codeText[0] += ' .theme-page{ background:';
	codeText[1] = 'overflow:hidden;min-height:621px;width:';  
	codeText[2] = 'px;color:';  
	codeText[3] = ';font-family:'; 
	codeText[4] = ';opacity:';  
	codeText[5] = ';margin-left:';
	codeText[6] = 'px;margin-right:';
	codeText[7] = 'px;margin-top:';
	codeText[8] = 'px;margin-bottom:';
	codeText[9] = 'px;margin:0px auto; }';
	if(document.getElementById('header') != null)
		codeText[9] += ' .header{ width:'; 
	codeText[10] = 'px;min-height:';
	codeText[11] = 'px;background:';
	codeText[12] = 'opacity:';
	codeText[13] = ';';
	codeText[14] = ';border-radius:';
	codeText[15] = ';margin-left:';
	codeText[16] = 'px;margin-right:';
	codeText[17] = 'px;margin-top:';
	codeText[18] = 'px;margin-bottom:';
	codeText[19] = 'px;padding-left:';
	codeText[20] = 'px;padding-right:';
	codeText[21] = 'px;padding-top:';
	codeText[22] = 'px;padding-bottom:';
	if(document.getElementById('header') != null){
		codeText[23] = 'px; }';
		codeText[23] += ' .logo{ padding-top:14px;margin-left:8px;width:10%;}';
	}else{
		codeText[23] = '';
	}
	if(document.getElementById('navigation') != null)
		codeText[23] += ' .navigation{ width:'
	codeText[24] = 'px;min-height:';
	codeText[25] = 'px;background:';
	codeText[26] = 'color:';
	codeText[27] = ';font-size:';
	codeText[28] = 'px;font-family:';
	codeText[29] = ';opacity:';
	codeText[30] = ';';
	codeText[31] = ';border-radius:';
	codeText[32] = ';margin-left:';
	codeText[33] = 'px;margin-right:';
	codeText[34] = 'px;margin-top:';
	codeText[35] = 'px;margin-bottom:';
	codeText[36] = 'px;padding-left:';
	codeText[37] = 'px;padding-right:';
	codeText[38] = 'px;padding-top:';
	codeText[39] = 'px;padding-bottom:';
	codeText[40] = 'px; }';
	codeText[40] += ' .navigation ul{ float:right;padding-top:0px;margin-top:5px;list-style:none;margin-right:'+Math.round((multiple*initNavigationWidth)/19.295)+'px; }';
	codeText[40] += ' .navigation ul li{ float:left;text-align:center;margin-left:'+Math.round((multiple*initNavigationWidth)/37.142)+'px;margin-right:'+Math.round((multiple*initNavigationWidth)/37.142)+'px; }';
	if(document.getElementById('selected') != null)
		codeText[41] = ' .selected{ color:';
	codeText[42] = ';background:';
	codeText[43] = 'opacity:';
	codeText[44] = ';font-family;';
	codeText[45] = ';font-size:';
	codeText[46] = 'px;';
	codeText[47] = ';border-radius:';
	if(document.getElementById('navigation') != null && document.getElementById('selected') != null)
		codeText[48] = ';cursor:pointer; }';
	else
		codeText[48] = '';
	codeText[48] += ' .content{ min-height:345px;margin-left:4%;margin-top:5%; }';
	codeText[48] += ' .side-bar-left{ float:left;margin-top:4%;font-family:arial; }';
	codeText[48] += ' .side-bar-right{ float:left;margin-top:4%;margin-left:2%;margin-right:0px;font-family:arial; }';
	if(document.getElementById('side-bar-module1') != null)
		codeText[48] += ' .side-bar-module1{ width:';
	codeText[49] = 'px;height:auto;background:';
	codeText[50] = 'color:';
	codeText[51] = ';';
	codeText[52] = ';border-radius:';
	codeText[53] = ';font-family:';
	codeText[54] = ';font-size:';
	codeText[55] = 'px;opacity:';
	codeText[56] = ';margin-left:';
	codeText[57] = 'px;margin-right:';
	codeText[58] = 'px;margin-top:';
	codeText[59] = 'px;margin-bottom:';
	codeText[60] = 'px;padding-left:';
	codeText[61] = 'px;padding-right:';
	codeText[62] = 'px;padding-top:';
	codeText[63] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module1') != null)
		codeText[64] = 'px; }';
	else
		codeText[64] = '';
	if(document.getElementById('side-bar-module2') != null)
		codeText[64] += ' .side-bar-module2{ width:';
	codeText[65] = 'px;height:auto;background:';
	codeText[66] = 'color:';
	codeText[67] = ';';
	codeText[68] = ';border-radius:';
	codeText[69] = ';font-family:';
	codeText[70] = ';font-size:';
	codeText[71] = 'px;opacity:';
	codeText[72] = ';margin-left:';
	codeText[73] = 'px;margin-right:';
	codeText[74] = 'px;margin-top:';
	codeText[75] = 'px;margin-bottom:';
	codeText[76] = 'px;padding-left:';
	codeText[77] = 'px;padding-right:';
	codeText[78] = 'px;padding-top:';
	codeText[79] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module2') != null)
		codeText[80] = 'px; }';
	else
		codeText[80] = '';
	if(document.getElementById('side-bar-module3') != null)
		codeText[80] += ' .side-bar-module3{ width:';
	codeText[81] = 'px;height:auto;background:';
	codeText[82] = 'color:';
	codeText[83] = ';';
	codeText[84] = ';border-radius:';
	codeText[85] = ';font-family:';
	codeText[86] = ';font-size:';
	codeText[87] = 'px;opacity:';
	codeText[88] = ';margin-left:';
	codeText[89] = 'px;margin-right:';
	codeText[90] = 'px;margin-top:';
	codeText[91] = 'px;margin-bottom:';
	codeText[92] = 'px;padding-left:';
	codeText[93] = 'px;padding-right:';
	codeText[94] = 'px;padding-top:';
	codeText[95] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module3') != null)
		codeText[96] = 'px; }';
	else
		codeText[96] = '';
	if(document.getElementById('side-bar-module4') != null)
		codeText[96] += ' .side-bar-module4{ width:';
	codeText[97] = 'px;height:auto;background:';
	codeText[98] = 'color:';
	codeText[99] = ';';
	codeText[100] = ';border-radius:';
	codeText[101] = ';font-family:';
	codeText[102] = ';font-size:';
	codeText[103] = 'px;opacity:';
	codeText[104] = ';margin-left:';
	codeText[105] = 'px;margin-right:';
	codeText[106] = 'px;margin-top:';
	codeText[107] = 'px;margin-bottom:';
	codeText[108] = 'px;padding-left:';
	codeText[109] = 'px;padding-right:';
	codeText[110] = 'px;padding-top:';
	codeText[111] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module4') != null)
		codeText[112] = 'px; }';
	else
		codeText[112] = '';
	if(document.getElementById('side-bar-module5') != null)
		codeText[112] += ' .side-bar-module5{ width:';
	codeText[113] = 'px;height:auto;background:';
	codeText[114] = 'color:';
	codeText[115] = ';';
	codeText[116] = ';border-radius:';
	codeText[117] = ';font-family:';
	codeText[118] = ';font-size:';
	codeText[119] = 'px;opacity:';
	codeText[120] = ';margin-left:';
	codeText[121] = 'px;margin-right:';
	codeText[122] = 'px;margin-top:';
	codeText[123] = 'px;margin-bottom:';
	codeText[124] = 'px;padding-left:';
	codeText[125] = 'px;padding-right:';
	codeText[126] = 'px;padding-top:';
	codeText[127] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module5') != null)
		codeText[128] = 'px; }';
	else
		codeText[128] = '';
	if(document.getElementById('side-bar-module6') != null)
		codeText[129] = ' .side-bar-module6{ width:';
	codeText[130] = 'px;height:auto;background:';
	codeText[131] = 'color:';
	codeText[132] = ';';
	codeText[133] = ';border-radius:';
	codeText[134] = ';font-family:';
	codeText[135] = ';font-size:';
	codeText[136] = 'px;opacity:';
	codeText[137] = ';margin-left:';
	codeText[138] = 'px;margin-right:';
	codeText[139] = 'px;margin-top:';
	codeText[140] = 'px;margin-bottom:';
	codeText[141] = 'px;padding-left:';
	codeText[142] = 'px;padding-right:';
	codeText[143] = 'px;padding-top:';
	codeText[144] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module6') != null)
		codeText[145] = 'px; }';
	else
		codeText[145] = '';
	if(document.getElementById('side-bar-module1') != null && document.getElementById('sbm1h2') != null)
		codeText[145] += ' .sbm1h2{ background:';
	codeText[146] = 'font-size:';
	codeText[147] = 'px;font-family:';
	codeText[148] = ';color:';
	codeText[149] = ';opacity:';
	codeText[150] = ';';
	codeText[151] = ';border-radius:';
	codeText[152] = ';margin-left:';
	codeText[153] = 'px;margin-right:';
	codeText[154] = 'px;margin-top:';
	codeText[155] = 'px;margin-bottom:';
	codeText[156] = 'px;padding-left:';
	codeText[157] = 'px;padding-right:';
	codeText[158] = 'px;padding-top:';
	codeText[159] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module1') != null && document.getElementById('sbm1h2') != null)
		codeText[160] = 'px;} ';
	else
		codeText[160] = '';
	if(document.getElementById('side-bar-module2') != null && document.getElementById('sbm2h2') != null)
		codeText[160] += ' .sbm2h2{ background:';
	codeText[161] = 'font-size:';
	codeText[162] = 'px;font-family:';
	codeText[163] = ';color:';
	codeText[164] = ';opacity:';
	codeText[165] = ';';
	codeText[166] = ';border-radius:';
	codeText[167] = ';margin-left:';
	codeText[168] = 'px;margin-right:';
	codeText[169] = 'px;margin-top:';
	codeText[170] = 'px;margin-bottom:';
	codeText[171] = 'px;padding-left:';
	codeText[172] = 'px;padding-right:';
	codeText[173] = 'px;padding-top:';
	codeText[174] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module2') != null && document.getElementById('sbm2h2') != null)
		codeText[175] = 'px;} ';
	else
		codeText[175] = '';
	if(document.getElementById('side-bar-module3') != null && document.getElementById('sbm3h2') != null)
		codeText[175] += ' .sbm3h2{ background:';
	codeText[176] = 'font-size:';
	codeText[177] = 'px;font-family:';
	codeText[178] = ';color:';
	codeText[179] = ';opacity:';
	codeText[180] = ';';
	codeText[181] = ';border-radius:';
	codeText[182] = ';margin-left:';
	codeText[183] = 'px;margin-right:';
	codeText[184] = 'px;margin-top:';
	codeText[185] = 'px;margin-bottom:';
	codeText[186] = 'px;padding-left:';
	codeText[187] = 'px;padding-right:';
	codeText[188] = 'px;padding-top:';
	codeText[189] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module3') != null && document.getElementById('sbm3h2') != null)
		codeText[190] = 'px;} ';
	else
		codeText[190] = '';
	if(document.getElementById('side-bar-module4') != null && document.getElementById('sbm4h2') != null)
		codeText[190] += ' .sbm4h2{ background:';
	codeText[191] = 'font-size:';
	codeText[192] = 'px;font-family:';
	codeText[193] = ';color:';
	codeText[194] = ';opacity:';
	codeText[195] = ';';
	codeText[196] = ';border-radius:';
	codeText[197] = ';margin-left:';
	codeText[198] = 'px;margin-right:';
	codeText[199] = 'px;margin-top:';
	codeText[200] = 'px;margin-bottom:';
	codeText[201] = 'px;padding-left:';
	codeText[202] = 'px;padding-right:';
	codeText[203] = 'px;padding-top:';
	codeText[204] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module4') != null && document.getElementById('sbm4h2') != null)
		codeText[205] = 'px;} ';
	else
		codeText[205] = '';
	if(document.getElementById('side-bar-module5') != null && document.getElementById('sbm5h2') != null)
		codeText[205] += ' .sbm5h2{ background:';
	codeText[206] = 'font-size:';
	codeText[207] = 'px;font-family:';
	codeText[208] = ';color:';
	codeText[209] = ';opacity:';
	codeText[210] = ';';
	codeText[211] = ';border-radius:';
	codeText[212] = ';margin-left:';
	codeText[213] = 'px;margin-right:';
	codeText[214] = 'px;margin-top:';
	codeText[215] = 'px;margin-bottom:';
	codeText[216] = 'px;padding-left:';
	codeText[217] = 'px;padding-right:';
	codeText[218] = 'px;padding-top:';
	codeText[219] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module5') != null && document.getElementById('sbm5h2') != null)
		codeText[220] = 'px;} ';
	else
		codeText[220] = '';
	if(document.getElementById('side-bar-module6') != null && document.getElementById('sbm6h2') != null)
		codeText[220] += ' .sbm6h2{ background:';
	codeText[221] = 'font-size:';
	codeText[222] = 'px;font-family:';
	codeText[223] = ';color:';
	codeText[224] = ';opacity:';
	codeText[225] = ';';
	codeText[226] = ';border-radius:';
	codeText[227] = 'px;margin-left:';
	codeText[228] = 'px;margin-right:';
	codeText[229] = 'px;margin-top:';
	codeText[230] = 'px;margin-bottom:';
	codeText[231] = 'px;padding-left:';
	codeText[232] = 'px;padding-right:';
	codeText[233] = 'px;padding-top:';
	codeText[234] = 'px;padding-bottom:';
	if(document.getElementById('side-bar-module6') != null && document.getElementById('sbm6h2') != null)
		codeText[235] = 'px;} ';
	else
		codeText[235] = '';
	if(document.getElementById('slider') != null)
		codeText[235] += ' .slider{ width:';
	codeText[236] = 'px;height:';
	codeText[237] = 'px;opacity:';
	codeText[238] = ';';
	codeText[239] = ';border-radius:';
	codeText[240] = ';margin-left:';
	codeText[241] = 'px;margin-right:';
	codeText[242] = 'px;margin-top:';
	codeText[243] = 'px;margin-bottom:';
	codeText[244] = 'px;padding-left:';
	codeText[245] = 'px;padding-right:';
	codeText[246] = 'px;padding-top:';
	codeText[247] = 'px;padding-bottom:';
	if(document.getElementById('slider') != null)
		codeText[248] = 'px;float:left; }';
	else
		codeText[248] = '';
	if(document.getElementById('content-text1') != null)
		codeText[248] += ' .content-text1{ width:'
	codeText[249] = 'px;height:auto;background:';
	codeText[250] = 'color:';
	codeText[251] = ';font-size:';
	codeText[252] = 'px;font-family:';
	codeText[253] = ';opacity:';
	codeText[254] = ';';
	codeText[255] = ';border-radius:';
	codeText[256] = ';margin-left:';
	codeText[257] = 'px;margin-right:';
	codeText[258] = 'px;margin-top:';
	codeText[259] = 'px;margin-bottom:';
	codeText[260] = 'px;padding-left:';
	codeText[261] = 'px;padding-right:';
	codeText[262] = 'px;padding-top:';
	codeText[263] = 'px;padding-bottom:';
	if(document.getElementById('content-text1') != null)
		codeText[264] = 'px;float:left; }';
	else
		codeText[264] = '';
	if(document.getElementById('content-text2') != null)
		codeText[264] += ' .content-text2{ width:'
	codeText[265] = 'px;height:auto;background:';
	codeText[266] = 'color:';
	codeText[267] = ';font-size:';
	codeText[268] = 'px;font-family:';
	codeText[269] = ';opacity:';
	codeText[270] = ';';
	codeText[271] = ';border-radius:';
	codeText[272] = ';margin-left:';
	codeText[273] = 'px;margin-right:';
	codeText[274] = 'px;margin-top:';
	codeText[275] = 'px;margin-bottom:';
	codeText[276] = 'px;padding-left:';
	codeText[277] = 'px;padding-right:';
	codeText[278] = 'px;padding-top:';
	codeText[279] = 'px;padding-bottom:';
	if(document.getElementById('content-text2') != null)
		codeText[280] = 'px;float:left; }';
	else
		codeText[280] = '';
	if(document.getElementById('side-bar-module4') != null)
		codeText[280] += ' .icons-wrap{ margin-left:4px; }';
	if(document.getElementById('footer') != null)
		codeText[280] += ' .footer{ width:'
	codeText[281] = 'px;min-height:';
	codeText[282] += 'px;background:';
	codeText[283] = 'color:';
	codeText[284] = ';font-size:';
	codeText[285] = 'px;font-family:';
	codeText[286] = ';opacity:';
	codeText[287] = ';';
	codeText[288] = ';border-radius:';
	codeText[289] = ';margin-left:';
	codeText[290] = 'px;margin-right:';
	codeText[291] = 'px;margin-top:';
	codeText[292] = 'px;margin-bottom:';
	codeText[293] = 'px;padding-left:';
	codeText[294] = 'px;padding-right:';
	codeText[295] = 'px;padding-top:';
	codeText[296] = 'px;padding-bottom:';
	if(document.getElementById('footer') != null)
		codeText[297] = 'px;float:left;text-align:center; }';
	else
		codeText[297] = '';
	codeText[297] += '</style>';
	codeText[297] += '<!-- END STYLE -->';
	if(document.getElementById('slider') != null){
		codeText[297] += '<!-- BEGIN SCRIPT -->';
		codeText[297] += '<script type="text/javascript">';
		codeText[297] += 'var count = 0, a = 0, imagearrlen, flag = 1, flagcount = 0, interval;';
		codeText[297] += 'var imagearr = [];';
		codeText[297] += 'imagearr[0] = "";';
		codeText[297] += 'function slider(){';
		codeText[297] += 'setInterval(function (){slide();}, 100);';
		codeText[297] += '} ';
		codeText[297] += 'function slide(){';
		codeText[297] += 'var slider = document.getElementById("slider");';
		codeText[297] += 'imagearrlen = imagearr.length;';
		codeText[297] += 'if(count == 0 && flag == 1){';
		codeText[297] += 'if(slider != null){';
		codeText[297] += 'slider.innerHTML = "";';
		codeText[297] += 'var img = new Image();';
		codeText[297] += 'img.src = imagearr[a];';
		codeText[297] += 'img.width = '+Math.round(multiple*initSliderWidth)+';';
		codeText[297] += 'img.height = '+Math.round(multiple*initSliderHeight)+';';
		codeText[297] += 'img.id = "image";';
		codeText[297] += 'img.style.opacity = 0;';
		codeText[297] += 'slider.appendChild(img);';
		codeText[297] += 'count++;';
		codeText[297] += '}';
		codeText[297] += '}else if(count <= 10 && count > 0 && flag == 1){';
		codeText[297] += 'var img = document.getElementById("image");';
		codeText[297] += 'if(img != null){';
		codeText[297] += 'img.style.opacity = count*0.1;';
		codeText[297] += 'count++;';
		codeText[297] += '}';
		codeText[297] += '}else if(count == 11 && flag == 1){';
		codeText[297] += 'flag = 0;';
		codeText[297] += 'timeset();';
		codeText[297] += 'count++;';
		codeText[297] += '}else if(count > 11 && count <= 21 && flag == 1){';
		codeText[297] += 'var img = document.getElementById("image");';
		codeText[297] += 'if(img != null){';
		codeText[297] += 'img.style.opacity = img.style.opacity - 0.1;';
		codeText[297] += 'if(img.style.opacity < 0.15){';
		codeText[297] += 'img.style.opacity = 0;';
		codeText[297] += '}';
		codeText[297] += 'count++;';
		codeText[297] += '}';
		codeText[297] += '}else if(count == 22){';
		codeText[297] += 'count = 0;';
		codeText[297] += 'a++;';
		codeText[297] += 'if(a == imagearrlen){';
		codeText[297] += 'a = 0;';
		codeText[297] += '}';
		codeText[297] += '}';
		codeText[297] += '}';
		codeText[297] += 'function timeset(){';
		codeText[297] += 'interval = setInterval(function (){startcount();}, 1000);';
		codeText[297] += '}';
		codeText[297] += 'function startcount(){';
		codeText[297] += 'if(flagcount == 3){';
		codeText[297] += 'flagcount = 0;';
		codeText[297] += 'flag = 1;';
		codeText[297] += 'clearInterval(interval);';
		codeText[297] += '}else{';
		codeText[297] += 'flagcount++;';
		codeText[297] += '}';
		codeText[297] += '}';
		codeText[297] += 'window.addEventListener("load",slider,false);';
		codeText[297] += '</script>';
		codeText[297] += '<!-- END SCRIPT -->';
	}
	codeText[297] += '</head>';
	codeText[297] += '<!-- END HEAD -->';
	codeText[297] += '<!-- BEGIN BODY -->';
	codeText[297] += '<body>';
	codeText[297] += '<!-- BEGIN THEMEPAGE WRAPPER -->';
	codeText[297] += '<div class="theme-page">';
	if(document.getElementById('header') != null){
		codeText[297] += '<!-- BEGIN HEADER -->';
		codeText[297] += '<div class="header">';
		codeText[297] +=	'<div class="logo">';
		codeText[297] +=	'<img src="logo.png" width="" height=""/>';
		codeText[297] +=	'</div>';
		codeText[297] +=	'</div>';
		codeText[297] += '<!-- END HEADER -->';
	}
	if(document.getElementById('navigation') != null){
		codeText[297] += '<!-- BEGIN NAVIGATION -->';
		codeText[297] += '<div class="navigation">';
		codeText[297] += '<ul>';
		if(document.getElementById('selected') != null){
			codeText[297] += '<li class="selected">';
			codeText[298] = '</li>';
		}else{
			codeText[298] = '';
		}
		codeText[298] += '<li>';
		codeText[299] = '</li>';
		codeText[299] += '<li>';
		codeText[300] = '</li>';
		codeText[300] += '<li>';
		codeText[301] = '</li>';
		codeText[301] += '</ul>';
		codeText[301] += '</div>';
		codeText[301] += '<!-- END NAVIGATION -->';
	}else{
		codeText[301] = '';
	}
	codeText[301] += '<!-- BEGIN CONTENT -->';
	codeText[301] += '<div class="content">';
	if(document.getElementById('side-bar-module1') != null || document.getElementById('side-bar-module5') != null || document.getElementById('side-bar-module6') != null){
		codeText[301] += '<div class="side-bar-left">';
		if(document.getElementById('side-bar-module1') != null){
			codeText[301] += '<div class="side-bar-module1">';
			if(document.getElementById('sbm1h2') != null){
				codeText[301] += '<h2 class="sbm1h2">';
				codeText[302] = '</h2>';
			}else{
				codeText[302] = '';
			}
			codeText[302] += '<div><a>';
			codeText[303] = '</a><hr></div>';
			codeText[303] += '<div><a>';
			codeText[304] = '</a><hr></div>'
			codeText[304] += '<div><a>';
			codeText[305] = '</a><hr></div>';
			codeText[305] += '</div>';
		}else{
			codeText[305] = '';
		}
		if(document.getElementById('side-bar-module5') != null){
			codeText[305] += '<div class="side-bar-module5">';
			if(document.getElementById('sbm5h2') != null){
				codeText[305] += '<h2 class="sbm5h2">';
				codeText[306] = '</h2>';
			}else{
				codeText[306] = '';
			}
			codeText[306] += '<div><a>';
			codeText[307] = '</a><hr></div>';
			codeText[307] += '<div><a>';
			codeText[308] = '</a><hr></div>';
			codeText[308] += '<div><a>';
			codeText[309] = '</a><hr></div>';
			codeText[309] += '</div>';
		}else{
			codeText[309] = '';
		}
		if(document.getElementById('side-bar-module6') != null){
			codeText[309] += '<div class="side-bar-module6">';
			if(document.getElementById('sbm6h2') != null){
				codeText[309] += '<h2 class="sbm6h2">';
				codeText[310] = '</h2>';
			}else{
				codeText[310] = '';
			}
			codeText[310] += '<div><a>';
			codeText[311] = '</a><hr></div>';
			codeText[311] += '<div><a>';
			codeText[312] = '</a><hr></div>';
			codeText[312] += '<div><a>';
			codeText[313] = '</a><hr></div>';
			codeText[313] += '<div><a>';
			codeText[314] = '</a><hr></div>';
			codeText[314] += '<div><a>';
			codeText[315] = '</a><hr></div>';
			codeText[315] += '</div>';
			codeText[315] += '</div>';
		}else{
			codeText[315] = '</div>';
		}
	}else{
		codeText[302] = '';
		codeText[303] = '';
		codeText[304] = '';
		codeText[305] = '';
		codeText[306] = '';
		codeText[307] = '';
		codeText[308] = '';
		codeText[309] = '';
		codeText[310] = '';
		codeText[311] = '';
		codeText[312] = '';
		codeText[313] = '';
		codeText[314] = '';
		codeText[315] = '';
	}
	codeText[315] += '<div class="content-wrap">';
	if(document.getElementById('slider') != null){
		codeText[315] += '<!-- BEGIN SLIDER -->';
		codeText[315] += '<div class="slider-wrap">';
		codeText[315] += '<div id="slider" class="slider"></div>';
		codeText[315] += '</div>';
		codeText[315] += '<!-- END SLIDER -->';
	}
	if(document.getElementById('content-text1') != null){
		codeText[315] += '<div class="content-text1">';
		codeText[316] = '</div>';
	}else{
		codeText[316] = '';
	}
	if(document.getElementById('content-text2') != null){
		codeText[316] += '<div class="content-text2">';
		codeText[317] = '</div>';
	}else{
		codeText[317] = '';
	}
	codeText[317] += '</div>';
	if(document.getElementById('side-bar-module4') != null || document.getElementById('side-bar-module3') != null || document.getElementById('side-bar-module2') != null){
		codeText[317] += '<div class="side-bar-right">';
		if(document.getElementById('side-bar-module4') != null){
			codeText[317] += '<div class="side-bar-module4">';
			if(document.getElementById('sbm4h2') != null){
				codeText[317] += '<h2 class="sbm4h2">';
				codeText[318] = '</h2>';
			}else{
				codeText[318] = '';
			}
			codeText[318] += '<div class="icons-wrap">';
			codeText[318] += '<img src="images/facebook.png" width="15%" height="70%" class="set-margin" />';
			codeText[318] += '<img src="images/twitter.png" width="15%" height="70%" class="set-margin" />';
			codeText[318] += '<img src="images/rss.png" width="15%" height="70%" class="set-margin" />';
			codeText[318] += '<img src="images/linkedin.png" width="15%" height="70%" class="set-margin" />';
			codeText[318] += '<img src="images/youtube.png" width="15%" height="70%" class="set-margin" /></div>';
			codeText[318] += '</div>';	
		}else{
			codeText[318] = '';
		}	
		if(document.getElementById('side-bar-module3') != null){
			codeText[318] += '<div class="side-bar-module3">';
			if(document.getElementById('sbm3h2') != null){
				codeText[318] += '<h2 class="sbm3h2">';
				codeText[319] = '</h2>';
			}else{
				codeText[319] = '';
			}
			codeText[319] += '<a>';
			codeText[320] = '</a><hr>';
			codeText[320] += '<a>';
			codeText[321] = '</a><hr>';
			codeText[321] += '<a>';
			codeText[322] = '</a><hr>';
			codeText[322] += '</div>';
		}else{
			codeText[322] += '';
		}
		if(document.getElementById('side-bar-module2') != null){
			codeText[322] += '<div class="side-bar-module2">';
			if(document.getElementById('sbm2h2') != null){
				codeText[322] += '<h2 class="sbm2h2">';
				codeText[323] = '</h2>';
			}else{
				codeText[323] = '';
			}
			codeText[323] += '<a>';
			codeText[324] = '</a><hr>';
			codeText[324] += '<a>';
			codeText[325] = '</a><hr>';
			codeText[325] += '<a>';
			codeText[326] = '</a><hr>';
			codeText[326] += '<a>';
			codeText[327] = '</a><hr>';
			codeText[327] += '</div>';
		}else{
			codeText[327] = '';
		}
		codeText[327] += '</div>';
	}else{
		codeText[318] = '';
		codeText[319] = '';
		codeText[320] = '';
		codeText[321] = '';
		codeText[322] = '';
		codeText[323] = '';
		codeText[324] = '';
		codeText[325] = '';
		codeText[326] = '';
		codeText[327] = '';
	}
	codeText[327] += '</div>';
	codeText[327] += '<!-- END CONTENT -->';
	if(document.getElementById('footer') != null){
		codeText[327] += '<!-- BEGIN FOOTER -->';
		codeText[327] += '<div class="footer">';
		codeText[328] = '</div>';
		codeText[328] += '<!-- END FOOTER -->';
	}else{
		codeText[328] = '';
	}
	codeText[328] += '</div>';
	codeText[328] += '<!-- END THEMEPAGE WRAPPER -->';
	codeText[328] += '</body>';
	codeText[328] += '<!-- END BODY -->';
	
	var themepageBg = getBg(initThemePageGradient,initThemePageGradientType,initThemePageBackupBackground);
	var headerBg = getBg(initHeaderGradient,initHeaderGradientType,initHeaderBackupBackground);
	var navigationBg = getBg(initNavigationGradient,initNavigationGradientType,initNavigationBackupBackground);
	var selectedBg = getBg(initSelectedGradient,initSelectedGradientType,initSelectedBackupBackground);
	var contenttext1Bg = getBg(initContentText1Gradient,initContentText1GradientType,initContentText1BackupBackground);
	var contenttext2Bg = getBg(initContentText2Gradient,initContentText2GradientType,initContentText2BackupBackground);
	var sidebarmodule1Bg = getBg(initSideBarModule1Gradient,initSideBarModule1GradientType,initSideBarModule1BackupBackground);
	var sidebarmodule2Bg = getBg(initSideBarModule2Gradient,initSideBarModule2GradientType,initSideBarModule2BackupBackground);
	var sidebarmodule3Bg = getBg(initSideBarModule3Gradient,initSideBarModule3GradientType,initSideBarModule3BackupBackground);
	var sidebarmodule4Bg = getBg(initSideBarModule4Gradient,initSideBarModule4GradientType,initSideBarModule4BackupBackground);
	var sidebarmodule5Bg = getBg(initSideBarModule5Gradient,initSideBarModule5GradientType,initSideBarModule5BackupBackground);
	var sidebarmodule6Bg = getBg(initSideBarModule6Gradient,initSideBarModule6GradientType,initSideBarModule6BackupBackground);
	var sbm1h2Bg = getBg(initSbm1h2Gradient,initSbm1h2GradientType,initSbm1h2BackupBackground);
	var sbm2h2Bg = getBg(initSbm2h2Gradient,initSbm2h2GradientType,initSbm2h2BackupBackground);
	var sbm3h2Bg = getBg(initSbm3h2Gradient,initSbm3h2GradientType,initSbm3h2BackupBackground);
	var sbm4h2Bg = getBg(initSbm4h2Gradient,initSbm4h2GradientType,initSbm4h2BackupBackground);
	var sbm5h2Bg = getBg(initSbm5h2Gradient,initSbm5h2GradientType,initSbm5h2BackupBackground);
	var sbm6h2Bg = getBg(initSbm6h2Gradient,initSbm6h2GradientType,initSbm6h2BackupBackground);
	var footerBg = getBg(initFooterGradient,initFooterGradientType,initFooterBackupBackground);
	
	var headerBorder = getBorder(initHeaderBorderWeight,initHeaderBorderType,initHeaderBorderBgBackup);
	var footerBorder = getBorder(initFooterBorderWeight,initFooterBorderType,initFooterBorderBgBackup);
	var navigationBorder = getBorder(initNavigationBorderWeight,initNavigationBorderType,initNavigationBorderBgBackup);
	var selectedBorder = getBorder(initSelectedBorderWeight,initSelectedBorderType,initSelectedBorderBgBackup);
	var sliderBorder = getBorder(initSliderBorderWeight,initSliderBorderType,initSliderBorderBgBackup);
	var contenttext1Border = getBorder(initContentText1BorderWeight,initContentText1BorderType,initContentText1BorderBgBackup);
	var contenttext2Border = getBorder(initContentText2BorderWeight,initContentText2BorderType,initContentText2BorderBgBackup);
	var sidebarmodule1Border = getBorder(initSideBarModule1BorderWeight,initSideBarModule1BorderType,initSideBarModule1BorderBgBackup);
	var sidebarmodule2Border = getBorder(initSideBarModule2BorderWeight,initSideBarModule2BorderType,initSideBarModule2BorderBgBackup);
	var sidebarmodule3Border = getBorder(initSideBarModule3BorderWeight,initSideBarModule3BorderType,initSideBarModule3BorderBgBackup);
	var sidebarmodule4Border = getBorder(initSideBarModule4BorderWeight,initSideBarModule4BorderType,initSideBarModule4BorderBgBackup);
	var sidebarmodule5Border = getBorder(initSideBarModule5BorderWeight,initSideBarModule5BorderType,initSideBarModule5BorderBgBackup);
	var sidebarmodule6Border = getBorder(initSideBarModule6BorderWeight,initSideBarModule6BorderType,initSideBarModule6BorderBgBackup);
	var sbm1h2Border = getBorder(initSbm1h2BorderWeight,initSbm1h2BorderType,initSbm1h2BorderBgBackup);
	var sbm2h2Border = getBorder(initSbm2h2BorderWeight,initSbm2h2BorderType,initSbm2h2BorderBgBackup);
	var sbm3h2Border = getBorder(initSbm3h2BorderWeight,initSbm3h2BorderType,initSbm3h2BorderBgBackup);
	var sbm4h2Border = getBorder(initSbm4h2BorderWeight,initSbm4h2BorderType,initSbm4h2BorderBgBackup);
	var sbm5h2Border = getBorder(initSbm5h2BorderWeight,initSbm5h2BorderType,initSbm5h2BorderBgBackup);
	var sbm6h2Border = getBorder(initSbm6h2BorderWeight,initSbm6h2BorderType,initSbm6h2BorderBgBackup);

	var themepageBorderRadius = initThemePageBorderRadiusTopLeft+'px '+initThemePageBorderRadiusTopRight+'px '+initThemePageBorderRadiusBottomRight+'px '+initThemePageBorderRadiusBottomLeft+'px ';
	var headerBorderRadius = initHeaderBorderRadiusTopLeft+'px '+initHeaderBorderRadiusTopRight+'px '+initHeaderBorderRadiusBottomRight+'px '+initHeaderBorderRadiusBottomLeft+'px ';
	var footerBorderRadius = initFooterBorderRadiusTopLeft+'px '+initFooterBorderRadiusTopRight+'px '+initFooterBorderRadiusBottomRight+'px '+initFooterBorderRadiusBottomLeft+'px ';
	var navigationBorderRadius = initNavigationBorderRadiusTopLeft+'px '+initNavigationBorderRadiusTopRight+'px '+initNavigationBorderRadiusBottomRight+'px '+initNavigationBorderRadiusBottomLeft+'px ';
	var selectedBorderRadius = initSelectedBorderRadiusTopLeft+'px '+initSelectedBorderRadiusTopRight+'px '+initSelectedBorderRadiusBottomRight+'px '+initSelectedBorderRadiusBottomLeft+'px ';
	var sliderBorderRadius = initSliderBorderRadiusTopLeft+'px '+initSliderBorderRadiusTopRight+'px '+initSliderBorderRadiusBottomRight+'px '+initSliderBorderRadiusBottomLeft+'px ';
	var contenttext1BorderRadius = initContentText1BorderRadiusTopLeft+'px '+initContentText1BorderRadiusTopRight+'px '+initContentText1BorderRadiusBottomRight+'px '+initContentText1BorderRadiusBottomLeft+'px ';
	var contenttext2BorderRadius = initContentText2BorderRadiusTopLeft+'px '+initContentText2BorderRadiusTopRight+'px '+initContentText2BorderRadiusBottomRight+'px '+initContentText2BorderRadiusBottomLeft+'px ';
	var sidebarmodule1BorderRadius = initSideBarModule1BorderRadiusTopLeft+'px '+initSideBarModule1BorderRadiusTopRight+'px '+initSideBarModule1BorderRadiusBottomRight+'px '+initSideBarModule1BorderRadiusBottomLeft+'px ';
	var sidebarmodule2BorderRadius = initSideBarModule2BorderRadiusTopLeft+'px '+initSideBarModule2BorderRadiusTopRight+'px '+initSideBarModule2BorderRadiusBottomRight+'px '+initSideBarModule2BorderRadiusBottomLeft+'px ';
	var sidebarmodule3BorderRadius = initSideBarModule3BorderRadiusTopLeft+'px '+initSideBarModule3BorderRadiusTopRight+'px '+initSideBarModule3BorderRadiusBottomRight+'px '+initSideBarModule3BorderRadiusBottomLeft+'px ';
	var sidebarmodule4BorderRadius = initSideBarModule4BorderRadiusTopLeft+'px '+initSideBarModule4BorderRadiusTopRight+'px '+initSideBarModule4BorderRadiusBottomRight+'px '+initSideBarModule4BorderRadiusBottomLeft+'px ';
	var sidebarmodule5BorderRadius = initSideBarModule5BorderRadiusTopLeft+'px '+initSideBarModule5BorderRadiusTopRight+'px '+initSideBarModule5BorderRadiusBottomRight+'px '+initSideBarModule5BorderRadiusBottomLeft+'px ';
	var sidebarmodule6BorderRadius = initSideBarModule6BorderRadiusTopLeft+'px '+initSideBarModule6BorderRadiusTopRight+'px '+initSideBarModule6BorderRadiusBottomRight+'px '+initSideBarModule6BorderRadiusBottomLeft+'px ';
	var sbm1h2BorderRadius = initSbm1h2BorderRadiusTopLeft+'px '+initSbm1h2BorderRadiusTopRight+'px '+initSbm1h2BorderRadiusBottomRight+'px '+initSbm1h2BorderRadiusBottomLeft+'px ';
	var sbm2h2BorderRadius = initSbm2h2BorderRadiusTopLeft+'px '+initSbm2h2BorderRadiusTopRight+'px '+initSbm2h2BorderRadiusBottomRight+'px '+initSbm2h2BorderRadiusBottomLeft+'px ';
	var sbm3h2BorderRadius = initSbm3h2BorderRadiusTopLeft+'px '+initSbm3h2BorderRadiusTopRight+'px '+initSbm3h2BorderRadiusBottomRight+'px '+initSbm3h2BorderRadiusBottomLeft+'px ';
	var sbm4h2BorderRadius = initSbm4h2BorderRadiusTopLeft+'px '+initSbm4h2BorderRadiusTopRight+'px '+initSbm4h2BorderRadiusBottomRight+'px '+initSbm4h2BorderRadiusBottomLeft+'px ';
	var sbm5h2BorderRadius = initSbm5h2BorderRadiusTopLeft+'px '+initSbm5h2BorderRadiusTopRight+'px '+initSbm5h2BorderRadiusBottomRight+'px '+initSbm5h2BorderRadiusBottomLeft+'px ';
	var sbm6h2BorderRadius = initSbm6h2BorderRadiusTopLeft+'px '+initSbm6h2BorderRadiusTopRight+'px '+initSbm6h2BorderRadiusBottomRight+'px '+initSbm6h2BorderRadiusBottomLeft+'px ';
	
	var finalCode = codeText[0]+themepageBg+codeText[1]+Math.round(multiple*initThemePageWidth)+codeText[2]+initThemePageColor+codeText[3]+initThemePageFontFamily;
		finalCode += codeText[4]+initThemePageOpacity+codeText[5]+(multiple*initThemePageMarginLeft)+codeText[6]+(multiple*initThemePageMarginRight)+codeText[7]+(multiple*initThemePageMarginTop);
		finalCode += codeText[8]+(multiple*initThemePageMarginBottom)+codeText[9];
		if(document.getElementById('header') != null){
			finalCode += Math.round(multiple*initHeaderWidth)+codeText[10]+Math.round(multiple*initHeaderHeight)+codeText[11]+headerBg+codeText[12]+initHeaderOpacity;
			finalCode += codeText[13]+headerBorder+codeText[14]+headerBorderRadius+codeText[15]+(multiple*initHeaderMarginLeft)+codeText[16]+(multiple*initHeaderMarginRight);
			finalCode += codeText[17]+(multiple*initHeaderMarginTop)+codeText[18]+(multiple*initHeaderMarginBottom)+codeText[19]+(multiple*initHeaderPaddingLeft)+codeText[20]+(multiple*initHeaderPaddingRight);
			finalCode += codeText[21]+(multiple*initHeaderPaddingTop)+codeText[22]+(multiple*initHeaderPaddingBottom); 
		}
		finalCode += codeText[23];
		if(document.getElementById('navigation') != null){
			finalCode += Math.round(multiple*initNavigationWidth)+codeText[24]+Math.round(multiple*initNavigationHeight);
			finalCode += codeText[25]+navigationBg+codeText[26]+initNavigationColor+codeText[27]+Math.round(multiple*initNavigationFontSize)+codeText[28]+initNavigationFontFamily;
			finalCode += codeText[29]+initNavigationOpacity+codeText[30]+navigationBorder+codeText[31]+navigationBorderRadius+codeText[32]+Math.round(multiple*initNavigationMarginLeft);
			finalCode += codeText[33]+Math.round(multiple*initNavigationMarginRight)+codeText[34]+Math.round(multiple*initNavigationMarginTop)+codeText[35]+Math.round(multiple*initNavigationMarginBottom)+codeText[36]+Math.round(multiple*initNavigationPaddingLeft);
			finalCode += codeText[37]+Math.round(multiple*initNavigationPaddingRight)+codeText[38]+Math.round(multiple*initNavigationPaddingTop)+codeText[39]+Math.round(multiple*initNavigationPaddingBottom)+codeText[40];
			if(document.getElementById('selected') != null){
				finalCode += codeText[41]+initSelectedColor;
				finalCode += codeText[42]+selectedBg+codeText[43]+initSelectedOpacity+codeText[44]+initSelectedFontFamily+codeText[45]+Math.round(multiple*initSelectedFontSize)+codeText[46]+selectedBorder;
				finalCode += codeText[47]+selectedBorderRadius;
			}
		}
		finalCode += codeText[48];
		if(document.getElementById('side-bar-module1') != null){
			finalCode += Math.round(multiple*initSideBarModule1Width)+codeText[49]+sidebarmodule1Bg+codeText[50]+initSideBarModule1Color+codeText[51]+sidebarmodule1Border;
			finalCode += codeText[52]+sidebarmodule1BorderRadius+codeText[53]+initSideBarModule1FontFamily+codeText[54]+Math.round(multiple*initSideBarModule1FontSize)+codeText[55]+initSideBarModule1Opacity;
			finalCode += codeText[56]+Math.round(multiple*initSideBarModule1MarginLeft)+codeText[57]+Math.round(multiple*initSideBarModule1MarginRight)+codeText[58]+Math.round(multiple*initSideBarModule1MarginTop)+codeText[59]+Math.round(multiple*initSideBarModule1MarginBottom);
			finalCode += codeText[60]+Math.round(multiple*initSideBarModule1PaddingLeft)+codeText[61]+Math.round(multiple*initSideBarModule1PaddingRight)+codeText[62]+Math.round(multiple*initSideBarModule1PaddingTop)+codeText[63]+Math.round(multiple*initSideBarModule1PaddingBottom);
		}
		finalCode += codeText[64];
		if(document.getElementById('side-bar-module2') != null){
			finalCode += Math.round(multiple*initSideBarModule2Width)+codeText[65]+sidebarmodule2Bg+codeText[66]+initSideBarModule2Color+codeText[67]+sidebarmodule2Border;
			finalCode += codeText[68]+sidebarmodule2BorderRadius+codeText[69]+initSideBarModule2FontFamily+codeText[70]+Math.round(multiple*initSideBarModule2FontSize)+codeText[71]+initSideBarModule2Opacity;
			finalCode += codeText[72]+Math.round(multiple*initSideBarModule2MarginLeft)+codeText[73]+Math.round(multiple*initSideBarModule2MarginRight)+codeText[74]+Math.round(multiple*initSideBarModule2MarginTop)+codeText[75]+Math.round(multiple*initSideBarModule2MarginBottom);
			finalCode += codeText[76]+Math.round(multiple*initSideBarModule2PaddingLeft)+codeText[77]+Math.round(multiple*initSideBarModule2PaddingRight)+codeText[78]+Math.round(multiple*initSideBarModule2PaddingTop)+codeText[79]+Math.round(multiple*initSideBarModule2PaddingBottom);
		}
		finalCode += codeText[80];
		if(document.getElementById('side-bar-module3') != null){
			finalCode += Math.round(multiple*initSideBarModule3Width)+codeText[81]+sidebarmodule3Bg+codeText[82]+initSideBarModule3Color+codeText[83]+sidebarmodule3Border;
			finalCode += codeText[84]+sidebarmodule3BorderRadius+codeText[85]+initSideBarModule3FontFamily+codeText[86]+Math.round(multiple*initSideBarModule3FontSize)+codeText[87]+initSideBarModule3Opacity;
			finalCode += codeText[88]+Math.round(multiple*initSideBarModule3MarginLeft)+codeText[89]+Math.round(multiple*initSideBarModule3MarginRight)+codeText[90]+Math.round(multiple*initSideBarModule3MarginTop)+codeText[91]+Math.round(multiple*initSideBarModule3MarginBottom);
			finalCode += codeText[92]+Math.round(multiple*initSideBarModule3PaddingLeft)+codeText[93]+Math.round(multiple*initSideBarModule3PaddingRight)+codeText[94]+Math.round(multiple*initSideBarModule3PaddingTop)+codeText[95]+Math.round(multiple*initSideBarModule3PaddingBottom);
		}
		finalCode += codeText[96];
		if(document.getElementById('side-bar-module4') != null){
			finalCode += Math.round(multiple*initSideBarModule4Width)+codeText[97]+sidebarmodule4Bg+codeText[98]+initSideBarModule4Color+codeText[99]+sidebarmodule4Border;
			finalCode += codeText[100]+sidebarmodule4BorderRadius+codeText[101]+initSideBarModule4FontFamily+codeText[102]+Math.round(multiple*initSideBarModule4FontSize)+codeText[103]+initSideBarModule4Opacity;
			finalCode += codeText[104]+Math.round(multiple*initSideBarModule4MarginLeft)+codeText[105]+Math.round(multiple*initSideBarModule4MarginRight)+codeText[106]+Math.round(multiple*initSideBarModule4MarginTop)+codeText[107]+Math.round(multiple*initSideBarModule4MarginBottom);
			finalCode += codeText[108]+Math.round(multiple*initSideBarModule4PaddingLeft)+codeText[109]+Math.round(multiple*initSideBarModule4PaddingRight)+codeText[110]+Math.round(multiple*initSideBarModule4PaddingTop)+codeText[111]+Math.round(multiple*initSideBarModule4PaddingBottom);
		}
		finalCode += codeText[112];
		if(document.getElementById('side-bar-module5') != null){
			finalCode += Math.round(multiple*initSideBarModule5Width)+codeText[113]+sidebarmodule5Bg+codeText[114]+initSideBarModule5Color+codeText[115]+sidebarmodule5Border;
			finalCode += codeText[116]+sidebarmodule5BorderRadius+codeText[117]+initSideBarModule5FontFamily+codeText[118]+Math.round(multiple*initSideBarModule5FontSize)+codeText[119]+initSideBarModule5Opacity;
			finalCode += codeText[120]+Math.round(multiple*initSideBarModule5MarginLeft)+codeText[121]+Math.round(multiple*initSideBarModule5MarginRight)+codeText[122]+Math.round(multiple*initSideBarModule5MarginTop)+codeText[123]+Math.round(multiple*initSideBarModule5MarginBottom);
			finalCode += codeText[124]+Math.round(multiple*initSideBarModule5PaddingLeft)+codeText[125]+Math.round(multiple*initSideBarModule5PaddingRight)+codeText[126]+Math.round(multiple*initSideBarModule5PaddingTop)+codeText[127]+Math.round(multiple*initSideBarModule5PaddingBottom);
		}
		finalCode += codeText[128];
		if(document.getElementById('side-bar-module6') != null){
			finalCode += codeText[129]+Math.round(multiple*initSideBarModule6Width)+codeText[130]+sidebarmodule6Bg+codeText[131]+initSideBarModule6Color+codeText[132]+sidebarmodule6Border;
			finalCode += codeText[133]+sidebarmodule6BorderRadius+codeText[134]+initSideBarModule6FontFamily+codeText[135]+Math.round(multiple*initSideBarModule6FontSize)+codeText[136]+initSideBarModule6Opacity;
			finalCode += codeText[137]+Math.round(multiple*initSideBarModule6MarginLeft)+codeText[138]+Math.round(multiple*initSideBarModule6MarginRight)+codeText[139]+Math.round(multiple*initSideBarModule6MarginTop)+codeText[140]+Math.round(multiple*initSideBarModule6MarginBottom);
			finalCode += codeText[141]+Math.round(multiple*initSideBarModule6PaddingLeft)+codeText[142]+Math.round(multiple*initSideBarModule6PaddingRight)+codeText[143]+Math.round(multiple*initSideBarModule6PaddingTop)+codeText[144]+Math.round(multiple*initSideBarModule6PaddingBottom);
		}
		finalCode += codeText[145];
		if(document.getElementById('side-bar-module1') != null && document.getElementById('sbm1h2') != null){
			finalCode += sbm1h2Bg+codeText[146]+Math.round(multiple*initSbm1h2FontSize)+codeText[147]+initSbm1h2FontFamily+codeText[148]+initSbm1h2Color+codeText[149]+initSbm1h2Opacity;
			finalCode += codeText[150]+sbm1h2Border+codeText[151]+sbm1h2BorderRadius+codeText[152]+Math.round(multiple*initSbm1h2MarginLeft)+codeText[153]+Math.round(multiple*initSbm1h2MarginRight)+codeText[154]+Math.round(multiple*initSbm1h2MarginTop);
			finalCode += codeText[155]+Math.round(multiple*initSbm1h2MarginBottom)+codeText[156]+Math.round(multiple*initSbm1h2PaddingLeft)+codeText[157]+Math.round(multiple*initSbm1h2PaddingRight)+codeText[158]+Math.round(multiple*initSbm1h2PaddingTop)+codeText[159]+Math.round(multiple*initSbm1h2PaddingBottom);
		}
		finalCode += codeText[160];
		if(document.getElementById('side-bar-module2') != null && document.getElementById('sbm2h2') != null){
			finalCode += sbm2h2Bg+codeText[161]+Math.round(multiple*initSbm2h2FontSize)+codeText[162]+initSbm2h2FontFamily+codeText[163]+initSbm2h2Color+codeText[164]+initSbm2h2Opacity;
			finalCode += codeText[165]+sbm2h2Border+codeText[166]+sbm2h2BorderRadius+codeText[167]+Math.round(multiple*initSbm2h2MarginLeft)+codeText[168]+Math.round(multiple*initSbm2h2MarginRight)+codeText[169]+Math.round(multiple*initSbm2h2MarginTop);
			finalCode += codeText[170]+Math.round(multiple*initSbm2h2MarginBottom)+codeText[171]+Math.round(multiple*initSbm2h2PaddingLeft)+codeText[172]+Math.round(multiple*initSbm2h2PaddingRight)+codeText[173]+Math.round(multiple*initSbm2h2PaddingTop)+codeText[174]+Math.round(multiple*initSbm2h2PaddingBottom);
		}
		finalCode += codeText[175];
		if(document.getElementById('side-bar-module3') != null && document.getElementById('sbm3h2') != null){
			finalCode += sbm3h2Bg+codeText[176]+Math.round(multiple*initSbm3h2FontSize)+codeText[177]+initSbm3h2FontFamily+codeText[178]+initSbm3h2Color+codeText[179]+initSbm3h2Opacity;
			finalCode += codeText[180]+sbm3h2Border+codeText[181]+sbm3h2BorderRadius+codeText[182]+Math.round(multiple*initSbm3h2MarginLeft)+codeText[183]+Math.round(multiple*initSbm3h2MarginRight)+codeText[184]+Math.round(multiple*initSbm3h2MarginTop);
			finalCode += codeText[185]+Math.round(multiple*initSbm3h2MarginBottom)+codeText[186]+Math.round(multiple*initSbm3h2PaddingLeft)+codeText[187]+Math.round(multiple*initSbm3h2PaddingRight)+codeText[188]+Math.round(multiple*initSbm3h2PaddingTop)+codeText[189]+Math.round(multiple*initSbm3h2PaddingBottom);
		}
		finalCode += codeText[190];
		if(document.getElementById('side-bar-module4') != null && document.getElementById('sbm4h2') != null){
			finalCode += sbm4h2Bg+codeText[191]+Math.round(multiple*initSbm4h2FontSize)+codeText[192]+initSbm4h2FontFamily+codeText[193]+initSbm4h2Color+codeText[194]+initSbm4h2Opacity;
			finalCode += codeText[195]+sbm4h2Border+codeText[196]+sbm4h2BorderRadius+codeText[197]+Math.round(multiple*initSbm4h2MarginLeft)+codeText[198]+Math.round(multiple*initSbm4h2MarginRight)+codeText[199]+Math.round(multiple*initSbm4h2MarginTop);
			finalCode += codeText[200]+Math.round(multiple*initSbm4h2MarginBottom)+codeText[201]+Math.round(multiple*initSbm4h2PaddingLeft)+codeText[202]+Math.round(multiple*initSbm4h2PaddingRight)+codeText[203]+Math.round(multiple*initSbm4h2PaddingTop)+codeText[204]+Math.round(multiple*initSbm4h2PaddingBottom);
		}
		finalCode += codeText[205];
		if(document.getElementById('side-bar-module5') != null && document.getElementById('sbm5h2') != null){
			finalCode += sbm5h2Bg+codeText[206]+Math.round(multiple*initSbm5h2FontSize)+codeText[207]+initSbm5h2FontFamily+codeText[208]+initSbm5h2Color+codeText[209]+initSbm5h2Opacity;
			finalCode += codeText[210]+sbm5h2Border+codeText[211]+sbm5h2BorderRadius+codeText[212]+Math.round(multiple*initSbm5h2MarginLeft)+codeText[213]+Math.round(multiple*initSbm5h2MarginRight)+codeText[214]+Math.round(multiple*initSbm5h2MarginTop);
			finalCode += codeText[215]+Math.round(multiple*initSbm5h2MarginBottom)+codeText[216]+Math.round(multiple*initSbm5h2PaddingLeft)+codeText[217]+Math.round(multiple*initSbm5h2PaddingRight)+codeText[218]+Math.round(multiple*initSbm5h2PaddingTop)+codeText[219]+Math.round(multiple*initSbm5h2PaddingBottom);
		}
		finalCode += codeText[220];
		if(document.getElementById('side-bar-module6') != null && document.getElementById('sbm6h2') != null){
			finalCode += sbm6h2Bg+codeText[221]+Math.round(multiple*initSbm6h2FontSize)+codeText[222]+initSbm6h2FontFamily+codeText[223]+initSbm6h2Color+codeText[224]+initSbm6h2Opacity;
			finalCode += codeText[225]+sbm6h2Border+codeText[226]+sbm6h2BorderRadius+codeText[227]+Math.round(multiple*initSbm6h2MarginLeft)+codeText[228]+Math.round(multiple*initSbm6h2MarginRight)+codeText[229]+Math.round(multiple*initSbm6h2MarginTop);
			finalCode += codeText[230]+Math.round(multiple*initSbm6h2MarginBottom)+codeText[231]+Math.round(multiple*initSbm6h2PaddingLeft)+codeText[232]+Math.round(multiple*initSbm6h2PaddingRight)+codeText[233]+Math.round(multiple*initSbm6h2PaddingTop)+codeText[234]+Math.round(multiple*initSbm6h2PaddingBottom);
		}
		finalCode += codeText[235];
		if(document.getElementById('slider') != null){
			finalCode += Math.round(multiple*initSliderWidth)+codeText[236]+Math.round(multiple*initSliderHeight)+codeText[237]+initSliderOpacity+codeText[238]+sliderBorder+codeText[239]+sliderBorderRadius+codeText[240]+Math.round(multiple*initSliderMarginLeft);
			finalCode += codeText[241]+Math.round(multiple*initSliderMarginRight)+codeText[242]+Math.round(multiple*initSliderMarginTop)+codeText[243]+Math.round(multiple*initSliderMarginBottom)+codeText[244]+Math.round(multiple*initSliderPaddingLeft)+codeText[245]+Math.round(multiple*initSliderPaddingRight);
			finalCode += codeText[246]+Math.round(multiple*initSliderPaddingTop)+codeText[247]+Math.round(multiple*initSliderPaddingBottom);
		}
		finalCode += codeText[248];
		if(document.getElementById('content-text1') != null){
			finalCode += Math.round(multiple*initContentText1Width)+codeText[249]+contenttext1Bg+codeText[250]+initContentText1Color+codeText[251]+Math.round(multiple*initContentText1FontSize)+codeText[252]+initContentText1FontFamily;
			finalCode += codeText[253]+initContentText1Opacity+codeText[254]+contenttext1Border+codeText[255]+contenttext1BorderRadius+codeText[256]+Math.round(multiple*initContentText1MarginLeft);
			finalCode += codeText[257]+Math.round(multiple*initContentText1MarginRight)+codeText[258]+Math.round(multiple*initContentText1MarginTop)+codeText[259]+Math.round(multiple*initContentText1MarginBottom)+codeText[260]+Math.round(multiple*initContentText1PaddingLeft);
			finalCode += codeText[261]+Math.round(multiple*initContentText1PaddingRight)+codeText[262]+Math.round(multiple*initContentText1PaddingTop)+codeText[263]+Math.round(multiple*initContentText1PaddingBottom);
		}
		finalCode += codeText[264];
		if(document.getElementById('content-text2') != null){
			finalCode += Math.round(multiple*initContentText2Width)+codeText[265]+contenttext2Bg+codeText[266]+initContentText2Color+codeText[267]+Math.round(multiple*initContentText2FontSize)+codeText[268]+initContentText2FontFamily;
			finalCode += codeText[269]+initContentText2Opacity+codeText[270]+contenttext2Border+codeText[271]+contenttext2BorderRadius+codeText[272]+Math.round(multiple*initContentText2MarginLeft);
			finalCode += codeText[273]+Math.round(multiple*initContentText2MarginRight)+codeText[274]+Math.round(multiple*initContentText2MarginTop)+codeText[275]+Math.round(multiple*initContentText2MarginBottom)+codeText[276]+Math.round(multiple*initContentText2PaddingLeft);
			finalCode += codeText[277]+Math.round(multiple*initContentText2PaddingRight)+codeText[278]+Math.round(multiple*initContentText2PaddingTop)+codeText[279]+Math.round(multiple*initContentText2PaddingBottom);
		}
		finalCode += codeText[280];
		if(document.getElementById('footer') != null){
			finalCode += Math.round(multiple*initFooterWidth)+codeText[281]+(multiple*initFooterHeight);
			finalCode += codeText[282]+footerBg+codeText[283]+initFooterColor+codeText[284]+Math.round(multiple*initFooterFontSize)+codeText[285]+initFooterFontFamily+codeText[286]+initFooterOpacity+codeText[287]+footerBorder;
			finalCode += codeText[288]+footerBorderRadius+codeText[289]+(multiple*initFooterMarginLeft)+codeText[290]+(multiple*initFooterMarginRight)+codeText[291]+(multiple*initFooterMarginTop)+codeText[292]+(multiple*initFooterMarginBottom);
			finalCode += codeText[293]+(multiple*initFooterPaddingLeft)+codeText[294]+(multiple*initFooterPaddingRight)+codeText[295]+(multiple*initFooterPaddingTop)+codeText[296]+(multiple*initFooterPaddingBottom);
		}
		finalCode += codeText[297];
		if(document.getElementById('navigation') != null && document.getElementById('selected') != null){
			finalCode += SelectedText;
		}
		if(document.getElementById('navigation') != null)
			finalCode += codeText[298]+aboutText+codeText[299]+contactText+codeText[300]+privacyText;
		finalCode += codeText[301];
		if(document.getElementById('sbm1h2') != null)
			finalCode += Sbm1h2Text;
		if(document.getElementById('side-bar-module1') != null)
			finalCode += codeText[302]+product1Text+codeText[303]+product2Text+codeText[304]+product3Text;
		finalCode += codeText[305];
		if(document.getElementById('sbm5h2') != null)
			finalCode += Sbm5h2Text;
		if(document.getElementById('side-bar-module5') != null)
			finalCode += codeText[306]+partner1Text+codeText[307]+partner2Text+codeText[308]+partner3Text;
		finalCode += codeText[309];
		if(document.getElementById('sbm6h2') != null)
			finalCode += Sbm6h2Text;
		if(document.getElementById('side-bar-module6') != null){
			finalCode += codeText[310]+brand1Text+codeText[311]+brand2Text;
			finalCode += codeText[312]+brand3Text+codeText[313]+brand4Text+codeText[314]+brand5Text;
		}
		finalCode += codeText[315];
		if(document.getElementById('content-text1') != null)
			finalCode += contentText1Text;
		finalCode += codeText[316];
		if(document.getElementById('content-text2') != null)
			finalCode += contentText2Text;
		finalCode += codeText[317];
		if(document.getElementById('sbm4h2') != null)
			finalCode += Sbm4h2Text;
		finalCode += codeText[318];
		if(document.getElementById('sbm3h2') != null)
			finalCode += Sbm3h2Text;
		if(document.getElementById('side-bar-module4') != null)
			finalCode += codeText[319]+latest1Text+codeText[320]+latest2Text+codeText[321]+latest3Text;
		finalCode += codeText[322];
		if(document.getElementById('sbm2h2') != null)
			finalCode += Sbm2h2Text;
		if(document.getElementById('side-bar-module2') != null)
		finalCode += codeText[323]+topnews1Text+codeText[324]+topnews2Text+codeText[325]+topnews3Text+codeText[326]+topnews4Text;
		finalCode += codeText[327];
		if(document.getElementById('footer') != null)
			finalCode += FooterText;
		finalCode += codeText[328];
		if(document.getElementById('theme-page') != null)
			return finalCode;
		else 
			return '';
}