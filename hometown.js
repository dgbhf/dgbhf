// 1.获取所有的点击按钮
var btnArr = document.querySelectorAll('.btns button');

btnArr.forEach(function (btn, i) {
  //2.给每个按钮添加点击事件
  btn.onclick = function () {
    console.log(btn, i);
    btnArr.forEach(function (btn) {
      //3.先清除点击按钮的类名
      btn.className = '';
    });
    //4.给点击按钮添加一个类名,在点击按钮之后,实现背景颜色的效果
    btn.className = 'active';

    //5.获取所有的ul
    var ulArr = document.querySelectorAll('.role');
    console.log(ulArr[i]);
    ulArr.forEach(function (v) {
      //6.让所有的ul消失
      v.style.display = 'none';
    });
    //7.点击按钮的时候,根据点击按钮对应的下标显示对应的ul
    ulArr[i].style.display = 'block';
  };
});