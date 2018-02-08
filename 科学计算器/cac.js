//需要一个事件监听器
var EventHandlerUtil ={
    addHandler:function (element,type,handler) {
        if (element.addEventListener){
            //w3c
            element.addEventListener(type,handler,false);
        }else if (element.attachEvent){
            //ie
            element.attachEvent('on'+type,handler);
        }else {
            //dom0
            element['on'+type]=handler;
        }
    },
    removeHandler:function (element,type,handler) {
        if (element.removeEventListener){
            //w3c
            element.removeEventListener(type,handler,false);
        }else if (element.detachEvent){
            //ie
            element.detachEvent('on'+type,handler);
        }else {
            //dom0
            element['on'+type]=null;
        }
    }
};
//变量定义区域开始
//保存临时计算变量
var n1=null;
//保存计算变量和结果变量
var n2=null;
//保存计算符号
var op=null;
//保存临时输入的数值，用数组是为了方便退格记忆
var tempNumber=[]
//保存小数点的按下状态，每次输入只能有一个小数点，默认为false
var haveDot=false;
//保存正数状态，默认输入为正数
var isPositiveNum=true;
//END
//点击获取数字
var elementNums=document.getElementById('num');
EventHandlerUtil.addHandler(elementNums,'click',function (e) {
    var target=e.target?e.target:window.event.srcElement;
    if (target.tagName==='LI'){
        var targetValue=target.innerHTML;
        if (targetValue==='.' && !haveDot){
//用户输入小数点，此前没有输入过小数
            tempNumber.push('.');
            haveDot=true;
        }else if (targetValue==='.' && haveDot){
//用户输入小数点，此前已经输入过小数
            return false;//每次一个小数点，什么也不做退出
        }else if(targetValue==='+/-' && isPositiveNum){
//用户改变正负数，此时为正数
            tempNumber.unshift('-');
            isPositiveNum=false;
        }else if(targetValue==='+/-' && !isPositiveNum){
//用户改变正负数，此时为负数
            tempNumber.shift();
            isPositiveNum=true;
        }else{
//正常输入数字
            tempNumber.push(targetValue);
        }
        setN1(tempNumber);

    }
});
function setN1(arg){
    //用于将闯入的数组转换为数字
    var temp=arg.join('');
    if (!isNaN(parseFloat(temp))){
        n1=parseFloat(temp);
        show(tempNumber);
    }else{
        n1=null;
        show(0);
    }
}
function show(arg){
    var elementScreen=document.getElementById('result');
    if (Array.isArray(arg)){
        elementScreen.innerHTML=parseFloat(arg.join(''));
    }else if (!isNaN(arg)){
        elementScreen.innerHTML=parseFloat(arg.toFixed(6));
    }else{
        elementScreen.innerHTML=arg;
    }
}

//普通计算功能
var elementControl=document.getElementById('control');
EventHandlerUtil.addHandler(elementControl,'click',function (e) {
    var target =e.target?e.target:window.event.srcElement;
    if (target.tagName==='LI'){
        var targetValue=target.innerHTML;//捕获点击值
        if(targetValue==='C'){
            //退格处理
            tempNumber.pop();
            setN1(tempNumber);
        }else if(targetValue==='√'){
            //开方
            if (n1!==null){
                n2=Math.sqrt(n1);
                show(n2);
                //重置n1
                reset();
            }

        }else if(targetValue.match(/[\+\-×÷%]/)){
            //四则运算
            //考虑到连续运算的可能，每次点过计算符号后先计算运算之前的操作符，再获取当前的操作符
            calculate();
            op=targetValue;
        }else{
            //只剩=一种情况
            calculate();
        }
    }
});
function reset(){//重置n1
    n1=null;
    tempNumber=[];
}
function calculate() {
    if(n2===null){
        //如果n2位null，说明此时没有输入第二个数字，需要做的操作是交换变量，
        n2=n1;
        reset();
    }else{
//这种情况下可以肯定第一组数字完备，n1,n2都有值，如果运算符号还被按下，说明用户是连续计算
        switch(op){
            case '+':
                n2 +=n1;
                reset();
                show(n2);
                break;
            case '-':
                n2 -=n1;
                reset();
                show(n2);
                break;
            case '×':
//乘除法要注意n1是否为0
                if (n1 !==null){
                    n2 *=n1;
                    reset();
                    show(n2);
                }
                break;
            case '÷':
                if (n1 === 0){
                    show("error");
                }else if(n1 !==null){
                    n2 /=n1;
                    reset();
                    show(n2);
                }
                break;
            case '%':
                if (n1===0){
                    show("error");
                }else if(n1!==null){
                    n2 %=n1;
                    reset();
                    show(n2);
                }
                break;
            default:
                console.log("不该看到这个，看到说明有bug");
        }
    }
}

var elementPro=document.getElementById('pro');
EventHandlerUtil.addHandler(elementPro,'click',function (e) {
    var target =e.target?e.target:window.event.srcElement;
    if (target.tagName==='LI'){
        var targetValue=target.innerHTML;
        switch (targetValue){
            case 'AC':
                n1=null;
                n2=null;
                tempNumber=[];
                show(0);
                break;
            case 'sin':
                if(n1!==null){
                    n2=parseFloat(Math.sin(n1*2*Math.PI/360).toFixed(6));
                    reset();
                    show(n2);
                }
                break;
            case 'cos':
                if(n1!==null){
                    n2=parseFloat(Math.cos(n1*2*Math.PI/360).toFixed(6));
                    reset();
                    show(n2);
                }
                break;
            case 'tan':
                if(n1!==null){
                    n2=parseFloat(Math.tan(n1*2*Math.PI/360).toFixed(6));
                    reset();
                    show(n2);
                }
                break;
            default:
                console.log("error");
        }
    }
});