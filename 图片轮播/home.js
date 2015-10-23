window.onload=function(){
  var showSumImgCount = 5;
  var sumImgCount = 7;
  var b = true;

  var l = function(r, s){
    var q = r;
    $("#img-flow .news-smallimg-mask").parent().removeClass("cur-span");
    $("#img-flow .img-bars span[num=" + q + "]").addClass("cur-span");
    if( s == true){
      $("#img-flow .img-viewer-cell").css("left", - q * 429);

      $("#img-flow .img-viewer").attr("num", q);
      $("#img-flow .img-bars span").removeClass("click-span");
      $("#img-flow .img-bars span[num=" + q + "]").addClass("click-span");
      d(q);
      
    }
  }
  var o = function(p){
    $("#img-flow .img-bars-content").animate(
      {left: p}, 300, function(){
        b = true;
    });
    //$("#img-flow .img-bars-content").css("left",p);
  }
  var d = function(t) {
    b = false;
    if (t == 0 ){
      o(0);
    } else if( t == sumImgCount -1){
      o( - (sumImgCount - showSumImgCount) * 82 )
    } else {
      var s = $("#img-flow .img-bars-content").position().left;
      var r = s;
      var q = 78, p = parseInt(Math.abs(r) / q);
      if (t == p) s = r + 82;
      else if (t == p + showSumImgCount - 1) s = r - 82;
      o(s)
    }
  }
  
  $("#img-flow").delegate(".news-smallimg-mask","mouseover", function(){
    var v = $(this).parent(), t = -1;
    t = v.attr("num");
    l(t, false);
  }).delegate(".news-smallimg-mask","mouseout", function(){
    t = $("#img-flow .img-viewer").attr("num");
    l(t, false)
  }).delegate(".news-smallimg-mask","mousedown", function(){
    var w = $(this).parent(), t = w.attr("num");
    if (t != $("#img-flow .img-viewer").attr("num")){
      l(t, true);
    }
  }).delegate(".change-bigimg","mouseover", function(){
    var w = $(this);
    if( w.hasClass("pre-img")){
      w.children(".arrow").addClass("is-hover");
    }else {
      if (w.hasClass("next-img")) {
        w.children(".arrow").addClass("is-hover");
      }
    }
    
  }).delegate(".change-bigimg","mouseout", function(){
    var w = $(this);
    if( w.hasClass("pre-img")){
      w.children(".arrow").removeClass("is-hover");
    }else {
      if (w.hasClass("next-img")) {
        w.children(".arrow").removeClass("is-hover");
      }
    }
  }).delegate(".change-bigimg","click", function(){
    if (!b) {
      return;
    }
    
    var x = $(this);
    var w = $("#img-flow .img-viewer"), t = w.attr("num");
    if( x.hasClass("pre-img")){
      if( parseInt(t) == 0){
        l( sumImgCount - 1, true);
      }
      else l( parseInt(t) - 1, true);
    }else {
      if (x.hasClass("next-img")) {
        if( parseInt(t) == sumImgCount - 1){
          l(0, true);
        }
        else l( parseInt(t) + 1, true);
      }
    }
    
  }).mouseenter(function() {
    $(this).addClass("hasarrow");
  }).mouseleave(function() {
    $(this).removeClass("hasarrow")
  });

  l(0, true);
  
}
 