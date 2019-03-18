
document.getElementById('burger').onclick=function(){
  link();
  };
  function link(){
    document.getElementById('burger').classList.toggle('menu-link-active');
    document.getElementById('nav-ul').classList.toggle('nav-ul-link');
    document.getElementById("body").classList.toggle("scroll");
  }
  
var catalog_info=document.getElementById('catalog-info');
var catalog_specification=document.getElementById('catalog-specification');
var catalog_video=document.getElementById('catalog-video');
var catalog_review=document.getElementById('catalog-review');
var catalog_goods_description=document.getElementById('catalog-goods-description');
var catalog_goods_specifications=document.getElementById('catalog-goods-specifications');
var catalog_goods_video=document.getElementById('catalog-goods-video');
var catalog_goods_review=document.getElementById('catalog-goods-review');
catalog_info.onclick=function(){
  show_1();
};
catalog_specification.onclick=function(){
  show_2();
};
catalog_video.onclick=function(){
  show_3();
};
catalog_review.onclick=function(){
  show_4();
};
function show_1(){
  catalog_goods_description.classList.remove('display-none');
  catalog_goods_specifications.classList.remove('display-none');
  catalog_goods_video.classList.remove('display-none');
  catalog_goods_review.classList.remove('display-none');
  catalog_info.classList.add('display-active');
  catalog_specification.classList.remove('display-active');
  catalog_video.classList.remove('display-active');
  catalog_review.classList.remove('display-active');
  catalog_goods_specifications.classList.add('display-none');
  catalog_goods_video.classList.add('display-none');
  catalog_goods_review.classList.add('display-none');catalog_goods_description.classList.add('display-flex');
}
function show_2(){
  catalog_goods_description.classList.remove('display-none');
  catalog_goods_specifications.classList.remove('display-none');
  catalog_goods_video.classList.remove('display-none');
  catalog_goods_review.classList.remove('display-none');
  catalog_specification.classList.add('display-active');
  catalog_info.classList.remove('display-active');
  catalog_video.classList.remove('display-active');
  catalog_review.classList.remove('display-active');
  catalog_goods_description.classList.add('display-none');
  catalog_goods_video.classList.add('display-none');catalog_goods_specifications.classList.add('display-flex');
  catalog_goods_review.classList.add('display-none');
}
function show_3(){
  catalog_goods_description.classList.remove('display-none');
  catalog_goods_specifications.classList.remove('display-none');
  catalog_goods_video.classList.remove('display-none');
  catalog_goods_review.classList.remove('display-none');
  catalog_video.classList.add('display-active');
  catalog_specification.classList.remove('display-active');
  catalog_info.classList.remove('display-active');
  catalog_review.classList.remove('display-active');
  catalog_goods_description.classList.add('display-none');
  catalog_goods_specifications.classList.add('display-none');
  catalog_goods_video.classList.add('display-flex');
  catalog_goods_review.classList.add('display-none');
}
function show_4(){
  catalog_goods_description.classList.remove('display-none');
  catalog_goods_specifications.classList.remove('display-none');
  catalog_goods_video.classList.remove('display-none');
  catalog_goods_review.classList.remove('display-none');
  catalog_review.classList.add('display-active');
  catalog_specification.classList.remove('display-active');
  catalog_video.classList.remove('display-active');
  catalog_info.classList.remove('display-active');
  catalog_goods_description.classList.add('display-none');
  catalog_goods_specifications.classList.add('display-none');
  catalog_goods_video.classList.add('display-none');
  catalog_goods_review.classList.add('display-flex');
}