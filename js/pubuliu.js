window.onload = function(){
	var dataInt = {'data':[{"src":'a.jpg'},{"src":'c.jpg'},{"src":'d.jpg'}]};
	window.onscroll = function(){
		if(ssrollsilde){
			var oparent = document.getElementById('mian')
			for(var i=0;i<dataInt.data.length;i++){
				var obox = document.createElement('div');
				obox.className = 'box';
				oparent.appendChild(obox);
				var opic = document.createElement('div');
				opic.className='pic';
				obox.appendChild(opic);
				var oimg = document.createElement('img');
				oimg.src="img/"+dataInt.data[i].src;
				opic.appendChild(oimg)
	
			}
		}
		
		wetload("mian","box")
		
	}
	
	wetload("mian","box");
	
}
var arrH = [];
function wetload(parent,box){
	var oparent = document.getElementById(parent);
	var oboxs = getByClass(oparent,box);
	var boxW = oboxs[0].offsetWidth;//拿到每一列的宽度
	var cols = Math.floor(document.documentElement.clientWidth/boxW);
	var arrH = [];//存放每一列的高度；
	oparent.style.cssText = 'width:'+boxW*cols+'px;margin:0 auto;';
	for(var i=0;i<oboxs.length;i++){
		if(i<cols){
			arrH.push(oboxs[i].offsetHeight)
			oboxs[i].style.position = 'absolute';
			oboxs[i].style.top = 0;
			oboxs[i].style.left = boxW*i+'px'
			
		}else{
			
			var minH = Math.min.apply(null,arrH);
			var index = getminIndex(arrH,minH);
			oboxs[i].style.position = 'absolute';
			oboxs[i].style.top = minH+'px';
			oboxs[i].style.left = boxW*index+'px'
			//oboxs[i].style.left = oboxs[index].offsetLeft+'px';
			arrH[index]+=oboxs[i].offsetHeight;
			
		}
		console.log(arrH[0])

	}
}
//
function getminIndex(arr,val){
	
	for(var i in arr){
		if(arr[i]==val)
			return i;
	}
  
}
//检查是否具备滚动的条件
function ssrollsilde(){
	
	var oparent = document.getElementById('mian');
	var oboxs = getByClass(oparent,'box')
	var lastboxＨ= oboxs[oboxs.length-1].offsetTop+oboxs[boxs.length-1].offsetHeight;
	var srcollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var docH = document.body.clientHeight || document.documentElement.clientHeight;
		return lastboxＨ<(srcollTop+docH)?true:false;
	
}


function getByClass(pare,box){	
	
	var arr = [];
	var boxs = pare.getElementsByTagName('*')
	 for(var i=0;i<boxs.length;i++){
	 	if(boxs[i].className==box){
	 		arr.push(boxs[i]);
	 	}
	 }
	return arr;
	
}
window.onresize = function(){
	arrH = [];
	wetload("mian","box");
	
}

