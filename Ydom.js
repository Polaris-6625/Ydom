function initLunBo() {
        let items = document.querySelectorAll(".item");//图片节点
        let points = document.querySelectorAll(".point")//点
        let left = document.getElementById("leftBtn");
        let right = document.getElementById("rightBtn");
        let all = document.querySelector(".wrap")
        let index = 0;
        let time = 0;//定时器跳转参数初始化
        
 
        //封装一个清除active方法
        let clearActive = function () {
            for (i = 0; i < items.length; i++) {
                items[i].className = 'item';
            }
            for (j = 0; j < points.length; j++) {
                points[j].className = 'point';
            }
        }
 
        //改变active方法
        let goIndex = function () {
            clearActive();
            items[index].className = 'item active';
            points[index].className = 'point active'
        }
        //左按钮事件
        let goLeft = function () {
            if (index == 0) {
                index = 4;
            } else {
                index--;
            }
            goIndex();
        }
 
        //右按钮事件
        let goRight = function () {
            if (index < 4) {
                index++;
            } else {
                index = 0;
            }
            goIndex();
        }
        
 
        //绑定点击事件监听
        left.addEventListener('click', function () {
            goLeft();
            time = 0;//计时器跳转清零
        })
 
        right.addEventListener('click', function () {
            goRight();
            time = 0;//计时器跳转清零
        })
 
        for(i = 0;i < points.length;i++){
            points[i].addEventListener('click',function(){
                var pointIndex = this.getAttribute('data-index')
                index = pointIndex;
                goIndex();
                time = 0;//计时器跳转清零
            })
        }
        //计时器轮播效果
        let timer;
        function play(){
         timer = setInterval(() => {
            time ++;
            if(time == 20 ){
                goRight();
                time = 0;
            }    
        },100)
    }
        play();
        //移入清除计时器
        all.onmousemove = function(){
            clearInterval(timer)
        }
       //移出启动计时器
        all.onmouseleave = function(){
            play();
        }
}
if(document.getElementById('lunbo') != null) {
    console.log("1");
    document.getElementById('lunbo').innerHTML = ` <div class="wrap">
    <ul class="list">
        <li class="item active">0</li>
        <li class="item">1</li>
        <li class="item">2</li>
        <li class="item">3</li>
        <li class="item">4</li>
    </ul>
    <ul class="pointList">
        <li class="point active" data-index = 0></li>
        <li class="point" data-index = 1></li>
        <li class="point" data-index = 2></li>
        <li class="point" data-index = 3></li>
        <li class="point" data-index = 4></li>
    </ul>
    <button class="btn" id="leftBtn"> < </button> 
    <button class="btn" id="rightBtn"> > </button>

    </div>`
    initLunBo();
}
else {
    console.log('无轮播');
}