var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var w = can.width = window.innerWidth;
var h = can.height = window.innerHeight;
window.onresize = function(){
    w = can.width = window.innerWidth;
    h = can.height = window.innerHeight;
}
var num = 1000;
ctx.fillStyle = "#fff";
var points = [];
for (var i = 0;i<num;i++){
    points.push({
        x :Math.random()*w,
        y : Math.random()*h,
        r:Math.random()*2
    })
}
function draw(){
    ctx.beginPath();
    ctx.clearRect(0,0,w,h)
    for(var i = 0;i<num;i++){
        ctx.moveTo(points[i].x,points[i].y)
        ctx.arc(points[i].x,points[i].y,points[i].r,0,Math.PI*2,false )

    }
    ctx.fill();
    updata();
}

setInterval(draw,100)

function updata(){
    for(var i = 0;i<num;i++){
        points[i].y += Math.random()*5;
        if(points[i].y>h){
            points[i].y = 0;
        }
    }
}