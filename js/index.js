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
console.log($(window).width())

//requestAnimationFrameID
var requestAnimationFrameID;

var arr = [
    "2021001",
    "2021002",
    "2021003",
    "2021004",
    "2021005",
    "2021006",
    "2021007",
    "2021008",
    "2021009",
    "2021010",
    "2021011",
    "2021012",
    "2021013",
    "2021014",
    "2021015",
    "2021016",
    "2021017",
    "2021018",
    "2021019",
    "2021020",
    "2021021",
    "2021022",
    "2021023",
    "2021024",
    "2021025",
    "2021026",
    "2021027",
    "2021028",
    "2021029",
    "2021030",
    "2021031",
    "2021032",
    "2021033",
    "2021034",
    "2021035",
    "2021036",
    "2021037",
    "2021038",
    "2021039",
    "2021040",
    "2021041",
    "2021042",
    "2021043",
    "2021044",
    "2021045",
    "2021046",
    "2021047",
    "2021048",
    "2021049",
    "2021050",
    "2021051",
    "2021052",
    "2021053",
    "2021054",
    "2021055",
    "2021056",
    "2021057",
    "2021058",
    "2021059",
    "2021060",
    "2021061",
    "2021062",
    "2021063",
    "2021064",
    "2021065",
    "2021066",
    "2021067",
    "2021068",
    "2021069",
    "2021070",
    "2021071",
    "2021072",
    "2021073",
    "2021074",
    "2021075",
    "2021076",
    "2021077",
    "2021078",
    "2021079",
    "2021080",
    "2021081",
    "2021082",
    "2021083",
    "2021084",
    "2021085",
    "2021086",
    "2021087",
    "2021088",
    "2021089",
    "2021090",
    "2021091",
    "2021092",
    "2021093",
    "2021094",
    "2021095",
    "2021096",
    "2021097",
    "2021098",
    "2021099",
    "2021100",
    "2021101",
    "2021102",
    "2021103",
    "2021104",
    "2021105",
    "2021106",
    "2021107",
    "2021108",
    "2021109",
    "2021110",
    "2021111",
    "2021112",
    "2021113",
    "2021114",
    "2021115",
    "2021116",
    "2021117",
    "2021118",
    "2021119",
    "2021120",
    "2021121",
    "2021122",
    "2021123",
    "2021124",
    "2021125",
    "2021126",
    "2021127",
    "2021128",
    "2021129",
    "2021130",
    "2021131",
    "2021132",
    "2021133",
    "2021134",
    "2021135",
    "2021136",
    "2021137",
    "2021138",
    "2021139",
    "2021140",
    "2021141",
    "2021142",
    "2021143",
    "2021144",
    "2021145",
    "2021146",
    "2021147",
    "2021148",
    "2021149",
    "2021150"
];
var third = [];
var thirdNoPick = [];
var second = [];
var secondNoPick = [];
var frist = [];
var fristNoPick = [];
var grand = [];
var grandNoPick = [];
var extra = [];
var extraNoPick = [];
var thirdName = [];
var secondName = [];
var fristName = [];
var grandName = [];
var extraName = [];


if(!window.localStorage.getItem("arr")){
    window.localStorage.setItem("arr",JSON.stringify(arr));
} else {
    arr = JSON.parse(window.localStorage.getItem("arr"));
}
if(!window.localStorage.getItem("thirdName")){
    window.localStorage.setItem("thirdName",JSON.stringify(thirdName));
}
if(!window.localStorage.getItem("secondName")){
    window.localStorage.setItem("secondName",JSON.stringify(secondName));
}
if(!window.localStorage.getItem("fristName")){
    window.localStorage.setItem("fristName",JSON.stringify(fristName));
}
if(!window.localStorage.getItem("grandName")){
    window.localStorage.setItem("grandName",JSON.stringify(grandName));
}
if(!window.localStorage.getItem("extraName")){
    window.localStorage.setItem("extraName",JSON.stringify(extraName));
}


var bg_music = document.getElementById("bg_music");
var stop_music = document.getElementById("stop_music");

$(document).ready(function() {
    $(".body").css("height", $(window).height());
    $(".body").css("width", $(window).width());
})

function readFile(filename){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.OpenTextFile(filename,1);
    var s = "";
    while (!f.AtEndOfStream)
        s += f.ReadLine()+"\n";
    f.Close();
    return s;
}

function startThird() {
    if (!pressed) {
        if (thirdName.length == 15) {
            console.log("thirdName = " + thirdName);
            window.localStorage.setItem("arr",JSON.stringify(arr));
            window.localStorage.setItem("thirdName",JSON.stringify(thirdName));
            nameHidden();
            readyShow();
            $("#btn").hide();
        } else {
            readyHidden();
            nameShow();
            cancelAniFrame();
            pressed = true;
            bg_music.currentTime = 0;
            bg_music.play();
            $('#btnblock')[0].style.setProperty('margin-top', '900px');
            $('#btn').text("结束");
            id1 = setInterval("document.getElementById('target1').innerHTML = show(arr);", 50);
            id2 = setInterval("document.getElementById('target2').innerHTML = show(arr);", 50);
            id3 = setInterval("document.getElementById('target3').innerHTML = show(arr);", 50);
        }
    } else {
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        loop();
        pressed = false;
        bg_music.pause();
        bg_music.currentTime = 0;
        stop_music.currentTime = 0;
        stop_music.play();
        getThirdRewardName(arr,third,thirdNoPick);
        $('#btn').text("开始");
        thirdNameTmp = JSON.parse(window.localStorage.getItem("thirdName"));
        if(!isEmpty(thirdNameTmp)) {
            thirdName = mergerArr(thirdNameTmp,thirdName);
        }
        thirdNameTmp = [];
        window.localStorage.setItem("thirdName",JSON.stringify(thirdName));
    }
}

function startSecond() {
    if (!pressed) {
        if (secondName.length == 8) {
            console.log("secondName = " + secondName);
            window.localStorage.setItem("arr",JSON.stringify(arr));
            window.localStorage.setItem("secondName",JSON.stringify(secondName));
            nameHidden();
            readyShow();
            $("#btn").hide();
        } else {
            readyHidden();
            nameShow();
            cancelAniFrame();
            pressed = true;
            bg_music.currentTime = 0;
            bg_music.play();
            $('#btnblock')[0].style.setProperty('margin-top', '900px');
            $('#btn').text("结束");
            id1 = setInterval("document.getElementById('target1').innerHTML = show(arr);", 50);
            id2 = setInterval("document.getElementById('target2').innerHTML = show(arr);", 50);
        }
    } else {
        clearInterval(id1);
        clearInterval(id2);
        loop();
        pressed = false;
        bg_music.pause();
        bg_music.currentTime = 0;
        stop_music.currentTime = 0;
        stop_music.play();
        getSecondRewardName(arr,second,secondNoPick);
        $('#btn').text("开始");
        secondNameTmp = JSON.parse(window.localStorage.getItem("secondName"));
        if(!isEmpty(secondNameTmp)) {
            secondName = mergerArr(secondNameTmp,secondName);
        }
        secondNameTmp = [];
        window.localStorage.setItem("secondName",JSON.stringify(secondName));
    }
}

function startFrist() {
    if (!pressed) {
        if (fristName.length == 3) {
            console.log("fristName = " + fristName);
            window.localStorage.setItem("arr",JSON.stringify(arr));
            // window.localStorage.setItem("fristName",JSON.stringify(fristName));
            nameHidden();
            readyShow();
            $("#btn").hide();
        } else {
            readyHidden();
            nameShow();
            cancelAniFrame();
            pressed = true;
            bg_music.currentTime = 0;
            bg_music.play();
            $('#btnblock')[0].style.setProperty('margin-top', '900px');
            $('#btn').text("结束");
            id1 = setInterval("document.getElementById('target1').innerHTML = show(arr);", 50);
            id2 = setInterval("document.getElementById('target2').innerHTML = show(arr);", 50);
            id3 = setInterval("document.getElementById('target3').innerHTML = show(arr);", 50);
        }
    } else {
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        loop();
        pressed = false;
        bg_music.pause();
        bg_music.currentTime = 0;
        stop_music.currentTime = 0;
        stop_music.play();
        getFristRewardName(arr,frist,fristNoPick);
        $('#btn').text("开始");
        fristNameTmp = JSON.parse(window.localStorage.getItem("fristName"));
        if(!isEmpty(fristNameTmp)) {
            fristName = mergerArr(fristNameTmp,fristName);
        }
        fristNameTmp = [];
        window.localStorage.setItem("fristName",JSON.stringify(fristName));
    }
}

function startGrand() {
    if (!pressed) {
        if (grandName.length == 1) {
            console.log("grandName = " + grandName);
            window.localStorage.setItem("arr",JSON.stringify(arr));
            window.localStorage.setItem("grandName",JSON.stringify(grandName));
            nameHidden();
            readyShow();
            $("#btn").hide();
        } else {
            readyHidden();
            nameShow();
            cancelAniFrame();
            pressed = true;
            bg_music.currentTime = 0;
            bg_music.play();
            $('#btnblock')[0].style.setProperty('margin-top', '900px');
            $('#btn').text("结束");
            id = setInterval("document.getElementById('target1').innerHTML = show(arr);", 50);
        }
    } else {
        clearInterval(id);
        loop();
        pressed = false;
        bg_music.pause();
        bg_music.currentTime = 0;
        stop_music.currentTime = 0;
        stop_music.play();
        getGrandRewardName(arr,grand,grandNoPick);
        $('#btn').text("开始");
    }
}

function startExtra() {
    if (!pressed) {
        console.log("extraName = " + extraName);
        window.localStorage.setItem("arr",JSON.stringify(arr));
        readyHidden();
        nameShow();
        cancelAniFrame();
        pressed = true;
        bg_music.currentTime = 0;
        bg_music.play();
        $('#btnblock')[0].style.setProperty('margin-top', '900px');
        $('#btn').text("结束");
        id = setInterval("document.getElementById('target1').innerHTML = show(arr);", 50);
    } else {
        clearInterval(id);
        loop();
        pressed = false;
        bg_music.pause();
        bg_music.currentTime = 0;
        stop_music.currentTime = 0;
        stop_music.play();
        getExtraRewardName(arr,extra,extraNoPick);
        $('#btn').text("开始");
        extraNameTmp = JSON.parse(window.localStorage.getItem("extraName"));
        if(!isEmpty(extraNameTmp)) {
            extraName = mergerArr(extraNameTmp,extraName);
        }
        extraNameTmp = [];
        window.localStorage.setItem("extraName",JSON.stringify(extraName));
    }
}

function checkArrayAndRemove(array, element){
    if(array.indexOf(element) != -1) {
        array.remove(element)
    }
}

function getThirdRewardName(all,thirdArr,thirdNoPick) {
    console.log("thirdArr：" + thirdArr);
    console.log("thirdNoPick：" + thirdNoPick);
    var m1 = write(all,thirdNoPick);
    checkArrayAndRemove(third,m1);
    arr.remove(m1);
    if (thirdArr.length >0) {
        var m2 = write(thirdArr,thirdNoPick);
        console.log("m2：" + m2)
        third.remove(m2);
        console.log("third：" + third)
        arr.remove(m2);
    } else {
        var m2 = write(all,thirdNoPick);
        checkArrayAndRemove(third,m2);
        arr.remove(m2);
    }
    var m3 = write(all,thirdNoPick);
    checkArrayAndRemove(third,m3);
    arr.remove(m3);
    thirdName.push(m1,m2,m3);
    if (arr != null) {
        document.getElementById('target1').innerHTML = m1;
        document.getElementById('target2').innerHTML = m2;
        document.getElementById('target3').innerHTML = m3;
        console.log("三等奖：" + thirdName);
        console.log("二等奖：" + secondName);
        console.log("一等奖：" + fristName);
        console.log("特等奖：" + grandName);
        console.log("加抽奖：" + extraName);
        console.log("未中奖：" + arr);
    }
}

function getSecondRewardName(all,secondArr,secondNoPick) {
    console.log("secondArr：" + secondArr);
    console.log("secondNoPick：" + secondNoPick);
    var m1 = write(all,secondNoPick);
    checkArrayAndRemove(second,m1);
    arr.remove(m1);
    if (secondArr.length >0) {
        var m2 = write(secondArr,secondNoPick);
        console.log("m2：" + m2)
        secondArr.remove(m2);
        console.log("second：" + second)
        arr.remove(m2);
    } else {
        var m2 = write(all,secondNoPick);
        checkArrayAndRemove(second,m2);
        arr.remove(m2);
    }
    secondName.push(m1,m2);
    if (arr != null) {
        document.getElementById('target1').innerHTML = m1;
        document.getElementById('target2').innerHTML = m2;
        console.log("三等奖：" + thirdName)
        console.log("二等奖：" + secondName)
        console.log("一等奖：" + fristName)
        console.log("特等奖：" + grandName)
        console.log("加抽奖：" + extraName)
        console.log("未中奖：" + arr)
    }
}

function getFristRewardName(all,fristArr,fristNoPick) {
    console.log("fristArr：" + fristArr);
    console.log("fristNoPick：" + fristNoPick);
    if (fristArr.length >0) {
        var m1 = write(fristArr,fristNoPick);
        console.log("m：" + m1)
        fristArr.remove(m1);
        console.log("frist：" + frist)
        arr.remove(m1);
    } else {
        var m1 = write(all,fristNoPick);
        checkArrayAndRemove(frist,m1);
        arr.remove(m1);
    }
    var m2 = write(all,fristNoPick);
    checkArrayAndRemove(frist,m2);
    arr.remove(m2);
    var m3 = write(all,fristNoPick);
    checkArrayAndRemove(frist,m3);
    arr.remove(m3);
    fristName.push(m1,m2,m3);
    if (arr != null) {
        document.getElementById('target1').innerHTML = m1;
        document.getElementById('target2').innerHTML = m2;
        document.getElementById('target3').innerHTML = m3;
        console.log("三等奖：" + thirdName)
        console.log("二等奖：" + secondName)
        console.log("一等奖：" + fristName)
        console.log("特等奖：" + grandName)
        console.log("加抽奖：" + extraName)
        console.log("未中奖：" + arr)
    }
}

function getGrandRewardName(all,grandArr,grandNoPick) {
    console.log("grandArr：" + grandArr);
    console.log("grandNoPick：" + grandNoPick);
    if (grandArr.length >0) {
        var m = write(grandArr,grandNoPick);
        console.log("m：" + m)
        grandArr.remove(m);
        console.log("grand：" + grand)
        arr.remove(m);
    } else {
        var m = write(all,grandNoPick);
        checkArrayAndRemove(grand,m);
        arr.remove(m);
    }
    grandName.push(m);
    if (arr != null) {
        document.getElementById('target1').innerHTML = m;
        console.log("三等奖：" + thirdName);
        console.log("二等奖：" + secondName);
        console.log("一等奖：" + fristName);
        console.log("特等奖：" + grandName);
        console.log("加抽奖：" + extraName);
        console.log("未中奖：" + arr);
    }
}

function getExtraRewardName(all,extraArr,extraNoPick) {
    console.log("extraArr：" + extraArr);
    console.log("extraNoPick：" + extraNoPick);
    var m = write(all,extraNoPick);
    arr.remove(m);
    extraName.push(m);
    if (arr != null) {
        document.getElementById('target1').innerHTML = m;
        console.log("三等奖：" + thirdName);
        console.log("二等奖：" + secondName);
        console.log("一等奖：" + fristName);
        console.log("特等奖：" + grandName);
        console.log("加抽奖：" + extraName);
        console.log("未中奖：" + arr);
    }
}

function changeToThird() {
    window.location = 'third.html';
}

function changeToSecond() {
    window.location = 'second.html';
}

function changeToFrist() {
    window.location = 'frist.html';
}

function changeToGrand() {
    window.location = 'grand.html';
}

function changeToExtra() {
    window.location = 'extra.html';
}

function backToIndex() {
    window.location = 'index.html';
}

function readyShow() {
    $('#readyName').text("本轮抽奖结束，恭喜大家中奖！");
    $('#readyName').css("font-size","72px");
    $('#readyName').show();
    $('#gobackbutton').show();
}

function readyHidden() {
    $('#readyName').hide();
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

function show(array) {
    var one = getOne(array);
    var index = $.inArray(one, targeted);
    return one;
}

function write(array,noPickArray) {
    // console.log("————————————————————begin write-----------------------");
    // console.log("in write: array = " + array);
    // console.log("in write: noPickArray = " + noPickArray);
    var one = getOne(array,noPickArray);
    // console.log("in write: one = " + one);
    var index = $.inArray(one, targeted);
    // console.log("————————————————————end write-----------------------");
    return one;
}

function getOne(array,noPickArray) {
    console.log("————————————————————begin getOne-----------------------");
    var name = '';
    var length = array.length;
    if (length > 0) {
        var num = Math.ceil(Math.random() * length) - 1;
        // console.log("in getOne: array[num] = " + array[num]);
        if ($.inArray(array[num], noPickArray) >= 0) {
            // console.log("————————————————————end getOne in >0  -----------------------" + array[num]);
            return getOne(array,noPickArray);
        } else {
            // console.log("————————————————————end getOne in <=0 -----------------------" + array[num]);
            return array[num];
        }
    } else {
        // console.log("————————————————————end getOne-----------------------");
        return "已经全部抽完！"
    }
}

function isEmpty (val) {
    // null or undefined
    if (val == null) return true;

    if (typeof val === 'boolean') return false;

    if (typeof val === 'number') return !val;

    if (val instanceof Error) return val.message === '';

    switch (Object.prototype.toString.call(val)) {
        // String or Array
        case '[object String]':
        case '[object Array]':
            return !val.length;

        // Map or Set or File
        case '[object File]':
        case '[object Map]':
        case '[object Set]': {
            return !val.size;
        }
        // Plain Object
        case '[object Object]': {
            return !Object.keys(val).length;
        }
    }

    return false;
}

function mergerArr(arr1,arr2){
    var flag;
    for(var i = 0;i<arr1.length;i++){
        flag = false;
        for(var j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                flag = true;
                break;
            }
        }
        if(!flag){
            arr2.push(arr1[i]);
        }
    }
    return arr2;
}

//-------------------------------------------华丽的分割线-----------------------------------------------------

// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim
window.requestAnimFrame = ( function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function( callback ) {
            window.setTimeout( callback, 1000 / 60 );
        };
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById( 'canvas' ),
    ctx = canvas.getContext( '2d' ),
    // full screen dimensions
    cw = window.innerWidth,
    ch = window.innerHeight * 4 / 5,
    // firework collection
    fireworks = [],
    // particle collection
    particles = [],
    // starting hue
    hue = 120,
    // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
    limiterTotal = 5,
    limiterTick = 0,
    // this will time the auto launches of fireworks, one launch per 80 loop ticks
    timerTotal = 10,
    timerTick = 0,
    mousedown = false,
    // mouse x coordinate,
    mx,
    // mouse y coordinate
    my;

// set canvas dimensions
canvas.width = cw;
canvas.height = ch;

function cancelAniFrame() {
    window.cancelAnimationFrame(requestAnimationFrameID);
    document.getElementById( 'canvas' ).getContext("2d").clearRect(0,0,window.innerWidth,window.innerHeight / 2);
    return;
}

// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random( min, max ) {
    return Math.random() * ( max - min ) + min;
}

// calculate the distance between two points
function calculateDistance( p1x, p1y, p2x, p2y ) {
    var xDistance = p1x - p2x,
        yDistance = p1y - p2y;
    return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

// create firework
function Firework( sx, sy, tx, ty ) {
    // actual coordinates
    this.x = sx;
    this.y = sy;
    // starting coordinates
    this.sx = sx;
    this.sy = sy;
    // target coordinates
    this.tx = tx;
    this.ty = ty;
    // distance from starting point to target
    this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
    this.distanceTraveled = 0;
    // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
    this.coordinates = [];
    this.coordinateCount = 10;
    // populate initial coordinate collection with the current coordinates
    while( this.coordinateCount-- ) {
        this.coordinates.push( [ this.x, this.y ] );
    }
    this.angle = Math.atan2( ty - sy, tx - sx );
    this.speed = 20;
    this.acceleration = 100;
    this.brightness = random( 50, 100 );
    // circle target indicator radius
    this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function( index ) {
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift( [ this.x, this.y ] );

    // cycle the circle target indicator radius
    if( this.targetRadius < 8 ) {
        this.targetRadius += 0.3;
    } else {
        this.targetRadius = 1;
    }

    // speed up the firework
    this.speed *= this.acceleration;

    // get the current velocities based on angle and speed
    var vx = Math.cos( this.angle ) * this.speed,
        vy = Math.sin( this.angle ) * this.speed;
    // how far will the firework have traveled with velocities applied?
    this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );

    // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
    if( this.distanceTraveled >= this.distanceToTarget ) {
        createParticles( this.tx, this.ty );
        // remove the firework, use the index passed into the update function to determine which to remove
        fireworks.splice( index, 1 );
    } else {
        // target not reached, keep traveling
        this.x += vx;
        this.y += vy;
    }
}

// draw firework
Firework.prototype.draw = function() {
    ctx.beginPath();
    // move to the last tracked coordinate in the set, then draw a line to the current x and y
    ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
    ctx.lineTo( this.x, this.y );
    ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
    ctx.stroke();

    ctx.beginPath();
    // draw the target for this firework with a pulsing circle
    ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
    ctx.stroke();
}

// create particle
function Particle( x, y ) {
    this.x = x;
    this.y = y;
    // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
    this.coordinates = [];
    this.coordinateCount = 10;
    while( this.coordinateCount-- ) {
        this.coordinates.push( [ this.x, this.y ] );
    }
    // set a random angle in all possible directions, in radians
    this.angle = random( 0, Math.PI * 2 );
    this.speed = random( 1, 20 );
    // friction will slow the particle down
    this.friction = 0.95;
    // gravity will be applied and pull the particle down
    this.gravity = 1.5;
    // set the hue to a random number +-50 of the overall hue variable
    this.hue = random( hue - 50, hue + 50 );
    this.brightness = random( 50, 100 );
    this.alpha = 1;
    // set how fast the particle fades out
    this.decay = random( 0.015, 0.03 );
}

// update particle
Particle.prototype.update = function( index ) {
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift( [ this.x, this.y ] );
    // slow down the particle
    this.speed *= this.friction;
    // apply velocity
    this.x += Math.cos( this.angle ) * this.speed;
    this.y += Math.sin( this.angle ) * this.speed + this.gravity;
    // fade out the particle
    this.alpha -= this.decay;

    // remove the particle once the alpha is low enough, based on the passed in index
    if( this.alpha <= this.decay ) {
        particles.splice( index, 1 );
    }
}

// draw particle
Particle.prototype.draw = function() {
    ctx. beginPath();
    // move to the last tracked coordinates in the set, then draw a line to the current x and y
    ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
    ctx.lineTo( this.x, this.y );
    ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
    ctx.stroke();
}

// create particle group/explosion
function createParticles( x, y ) {
    // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
    var particleCount = 100;
    while( particleCount-- ) {
        particles.push( new Particle( x, y ) );
    }
}

// main demo loop
function loop() {
    // this function will run endlessly with requestAnimationFrame
    requestAnimationFrameID = requestAnimFrame( loop );
    // increase the hue to get different colored fireworks over time
    hue += 0.5;

    // create random color
    hue= random(0, 360 );

    // normally, clearRect() would be used to clear the canvas
    // we want to create a trailing effect though
    // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
    ctx.globalCompositeOperation = 'destination-out';
    // decrease the alpha property to create more prominent trails
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect( 0, 0, cw, ch );
    // change the composite operation back to our main mode
    // lighter creates bright highlight points as the fireworks and particles overlap each other
    ctx.globalCompositeOperation = 'lighter';

    // loop over each firework, draw it, update it
    var i = fireworks.length;
    while( i-- ) {
        fireworks[ i ].draw();
        fireworks[ i ].update( i );
    }

    // loop over each particle, draw it, update it
    var i = particles.length;
    while( i-- ) {
        particles[ i ].draw();
        particles[ i ].update( i );
    }

    // launch fireworks automatically to random coordinates, when the mouse isn't down
    if( timerTick >= timerTotal ) {
        if( !mousedown ) {
            // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
            fireworks.push( new Firework( random( 0, cw ), ch, random( 0, cw ), random( 0, ch / 2 ) ) );
            timerTick = 0;
        }
    } else {
        timerTick++;
    }

    // limit the rate at which fireworks get launched when mouse is down
    if( limiterTick >= limiterTotal ) {
        if( mousedown ) {
            // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
            fireworks.push( new Firework( cw / 2, ch, mx, my ) );
            limiterTick = 0;
        }
    } else {
        limiterTick++;
    }
}

// mouse event bindings
// update the mouse coordinates on mousemove
canvas.addEventListener( 'mousemove', function( e ) {
    mx = e.pageX - canvas.offsetLeft;
    my = e.pageY - canvas.offsetTop;
});

// toggle mousedown state and prevent canvas from being selected
canvas.addEventListener( 'mousedown', function( e ) {
    e.preventDefault();
    mousedown = true;
});

canvas.addEventListener( 'mouseup', function( e ) {
    e.preventDefault();
    mousedown = false;
});

// once the window loads, we are ready for some fireworks!
// window.onload = loop;