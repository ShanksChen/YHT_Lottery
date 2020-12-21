var targeted = [];
var pressed = false;
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

console.log($(window).height())
var arr = [
    "20154944 孙臣臣",
    "20151010 王莹",
    "20140198 刘阳科",
    "20140196 丁欣烨",
    "20140197 刘睿博",
    "20140198 刘阳科",
    "20140199 彭亮",
    "20140200 彭钊",
    "20140201 Sandy",
    "20140202 Peter",
    "20140202 Mike",
    "20140202 Judy"
];

var third = [
    "20140201 Sandy",
    "20140202 Peter",
    "20140202 Mike",
    "20140202 Judy"
];

var second = [
    "20140203 London",
    "20140204 Paris"
];

var first = [
    "20140205 YHT"
];

var grand = [
    "21503466 HOLALA"
]

var bg_music = document.getElementById("bg_music");
var stop_music = document.getElementById("stop_music");

$(document).ready(function() {
    $(".body").css("height", $(window).height())　　;
})

// window.onload = function(){
//     namehidden();
// }

//进入全屏
function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }

    setTimeout("$('.body').css('height', $(window).height());", 100);
    setTimeout("$('.body').css('height', $(window).height());", 300);
    setTimeout("$('.body').css('height', $(window).height());", 500); //确保高度等于屏幕高度
}
//退出全屏
function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
    setTimeout("$('.body').css('height', $(window).height());", 100);
    setTimeout("$('.body').css('height', $(window).height());", 300);
    setTimeout("$('.body').css('height', $(window).height());", 500); //确保高度等于屏幕高度
}

function start() {
    if (!pressed) {
        readyHidden();
        nameShow();
        pressed = true;
        bg_music.currentTime = 0;
        bg_music.play();
        $('#btnblock')[0].style.setProperty('margin-top','640px');
        $('#btn').text("结束");
        id1 = setInterval("document.getElementById('target1').innerHTML = show();", 50);
        id2 = setInterval("document.getElementById('target2').innerHTML = show();", 50);
        id3 = setInterval("document.getElementById('target3').innerHTML = show();", 50);
        id4 = setInterval("document.getElementById('target4').innerHTML = show();", 50);
    } else {
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        clearInterval(id4);
        pressed = false;
        bg_music.pause();
        bg_music.currentTime = 0;
        $('#btn').text("开始");
        swfshow();
        stop_music.currentTime = 0;
        stop_music.play();
        getThirdRewardName(arr,third);
        // var m1 = write();
        // arr.remove(m1);
        // var m2 = write();
        // arr.remove(m2);
        // var m3 = write();
        // arr.remove(m3);
        // var m4 = write();
        // arr.remove(m4);
        // targeted.push(m1,m2,m3,m4);
        // if (arr != null) {
        //     document.getElementById('target1').innerHTML = m1;
        //     document.getElementById('target2').innerHTML = m2;
        //     document.getElementById('target3').innerHTML = m3;
        //     document.getElementById('target4').innerHTML = m4;
        //     console.log("已中奖：" + targeted)
        //     console.log("未中奖：" + arr)
        //     setTimeout("swfhidden()", 3000) //修改烟花多久后消失。3000代表3秒
        // }
        // if (arr.length == 0 && m == "已经全部抽完！") {
        //     $("#btn").hide();
        // }
    }
}

function checkArrayAndRemove(array, element){
    if(array.indexOf(element) != -1) {
        array.remove(element)
    }
}

function getThirdRewardName(all,thirdArr) {
    console.log("thirdArr：" + thirdArr)
    var m1 = write(all);
    checkArrayAndRemove(third,m1);
    arr.remove(m1);
    if (thirdArr.length >0) {
        var m2 = write(thirdArr);
        console.log("m2：" + m2)
        third.remove(m2);
        console.log("third：" + third)
        arr.remove(m2);
    } else {
        var m2 = write(all);
        checkArrayAndRemove(third,m2);
        arr.remove(m2);
    }
    var m3 = write(all);
    checkArrayAndRemove(third,m3);
    arr.remove(m3);
    var m4 = write(all);
    checkArrayAndRemove(third,m4);
    arr.remove(m4);
    targeted.push(m1,m2,m3,m4);
    if (arr != null) {
        document.getElementById('target1').innerHTML = m1;
        document.getElementById('target2').innerHTML = m2;
        document.getElementById('target3').innerHTML = m3;
        document.getElementById('target4').innerHTML = m4;
        console.log("已中奖：" + targeted)
        console.log("未中奖：" + arr)
        setTimeout("swfhidden()", 3000) //修改烟花多久后消失。3000代表3秒
    }
    if (arr.length == 0 && m == "已经全部抽完！") {
        $("#btn").hide();
    }
}

function getSecondRewardName() {

}

function getFirstRewardName() {

}

function getGrandRewardName() {

}

function changeToSecond() {

}

function changeToFirst() {

}

function changeToGrand() {

}

function swfshow() {
    $('#swfbg').show();
}

function swfhidden() {
    $('#swfbg').hide();
}

function readyShow() {
    $('#ready').show();
}

function readyHidden() {
    $('#ready').hide();
}

function nameShow() {
    $('#name1').show();
    $('#name2').show();
    $('#name3').show();
    $('#name4').show();
}

function nameHidden() {
    $('#name1').hide();
    $('#name2').hide();
    $('#name3').hide();
    $('#name4').hide();
}

function show() {
    var one = getOne();
    var index = $.inArray(one, targeted);
    return one;
}

function write(array) {
    var one = getOne(array);
    var index = $.inArray(one, targeted);
    return one;
}

function getOne(array) {
    var name = '';
    var length = array.length;
    if (length > 0) {
        var num = Math.ceil(Math.random() * length) - 1;
        return array[num];
    } else {
        return "已经全部抽完！"
    }
    
}