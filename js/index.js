$(function(){
  $('.nav').on('click',function(){
  	$('.nav').toggleClass('active');
      $('.xialanav').toggleClass('active')
      $('body').toggleClass('sss')
  })
  $('.search').on('click',function(e){
     e.preventDefault();
     $('.qqq').addClass('ooo');
     $('.searching').addClass('suo')
     $('.main').addClass('suo')
     $('.youyou').addClass('suo')
  })
  $('.youyou').on('click',function(e){
    e.preventDefault();
    $('.qqq').removeClass('ooo');
    $('.searching').removeClass('suo')
     $('.main').removeClass('suo')
     $('.youyou').removeClass('suo')
  })



  //轮播
  var win=$(".banner")[0];//获取banner窗口元素
  var as=$("a",win);//获取banner元素
  var num=0;//第一张banner下标等于0
  var next=0;//下一张banner下标就位
  var point=$(".point")[0];
  var lis=$("li",point);
  var btnl=$(".left-bnt")[0];
  var btnr=$(".right-bnt")[0];
  var flag=true
  var widths=parseInt( getComputedStyle(as[0],null).width)//转换数值，获取banner的宽属性
  /*(getStyle(as[0],"width"));*/
  for(var i=0;i<as.length;i++){
    if(i==0){
      continue;
    }//如果下标等于0，跳出本次循环,继续执行下次循环
    as[i].style.left=widths+"px";//把每一张图片都向左移动一张图片的距离
  }
  for(var i=0;i<lis.length;i++){
      lis[i].index=i;
      lis[i].onclick=function(){
               as[this.index].style.left=widths+"px";
               animate(as[this.index],{left:0});
               animate(as[num],{left:-widths});
               lis[this.index].style.background="#fff";
               lis[this.index].style.border="1px solid #187DCE"
              lis[num].style.background="#999999";
              lis[num].style.border="1px solid #fff"
               next=this.index;
               num=this.index;
      }
    }
    btnl.onclick=function(){
/*      if(flag){
        flag=false;
        morel()*/
      movel();
    }
    btnr.onclick=function(){
/*      if(flag){
        flag=false;
        morer()*/
      mover();
    }
  var t=setInterval(movel,2000);//时间间隔函数，2秒
  win.onmouseover=function(){
       clearInterval(t)
    }
    win.onmouseout=function(){
      t=setInterval(movel,2000);
    }
  function movel(){
    next++;
    if(next==as.length){
      next=0;
    }//下一张图片下标等于最大下标时，让下标等于0
    
    
    lis[num].style.background="#999999";
    lis[num].style.border="1px solid #fff"
        lis[next].style.background="#fff";
        lis[next].style.border="1px solid #187DCE"
    as[next].style.left=widths+"px";//把下一张图片都向左移动一张图片的距离
    animate(as[num],{left:-widths});//动画向左移动一个图片的距离
    animate(as[next],{left:0});//下一张动画向左移动
    num=next;//第一张图片下标等于0再次循环起来
  }
  function mover(){
    next--;
    if(next<0){
      next=lis.length-1;
    }//下一张图片下标等于最大下标时，让下标等于0
    lis[num].style.background="#999999";
    lis[num].style.border="1px solid #fff"
        lis[next].style.background="#fff";
        lis[next].style.border="1px solid #187DCE"
    as[next].style.left=-widths+"px";//把下一张图片都向左移动一张图片的距离
    animate(as[num],{left:widths});//动画向左移动一个图片的距离
    animate(as[next],{left:0});//下一张动画向左移动
    num=next;//第一张图片下标等于0再次循环起来
  }

  //换图
  // if($(window).width()<='768px'){
  //   $('.banner img').src='img/1.jpg'
  // }
})