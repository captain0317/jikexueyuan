var list = document.getElementsByTagName('li'); //将所有li的值看作一个list
for (var i = 0; i < list.length; i++) {
    list[i].onclick = function() { //给li绑定onclick事件
        var click_num = this.innerHTML;
        document.getElementById('display').innerText += click_num; //在显示屏显示计算公式与结果
        var expression = document.getElementById('display').innerText; //表达式
        var result = expression.substring(0, expression.length - 1); //去除表达式‘=’
        var backresult = expression.substring(0, expression.length - 5); //退格功能
        var patt = /\/0/g; //正则表达式：验证除数是否为0
        if (click_num == 'C') {
            document.getElementById('display').innerText = '';
        } else if (click_num == '=') {
            if (patt.test(result)) { //验证除数是否为0
                // alert('除数/分母不能为0');
                document.getElementById('display').innerText = NaN;
            } else {
                document.getElementById('display').innerText = parseFloat(eval(result).toFixed(8));
            }
        } else if (click_num == '%') { //%转换为小数
            document.getElementById('display').innerText = result / 100;
        } else if (click_num == 'back') {
            document.getElementById('display').innerText = backresult;
        }
    }
}