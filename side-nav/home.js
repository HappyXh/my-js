window.onload = function(){
  var a = function(){
  $(".navbar-right .glyphicon-plus").unbind("click");
  $(".navbar-right .glyphicon-minus").unbind("click");
  $(".nav a").unbind("click");
  $(".nav .nav li").unbind("click");
  $(".nav .nav a[href^='#'] span").unbind("click");

  $(".nav a").click(function(){
    $(".nav li").removeClass("active");
    $(this).parent().addClass("active");
  })
  $(".nav .nav li").click(function(){
    $(this).parent().parent().addClass("active");
  })

  $(".nav .nav a[href^='#'] span").click(function(){
    
    var value = $(this).prop("innerText");
    var html_str='<input type="text" class="nav-input" >';
    e = $(this);
    $(this).hide();
    this.insertAdjacentHTML("afterEnd", html_str);
    $(".active input").focus();
    $(".active input").val("").focus().val(value);
    $(".active input").blur(function(){
      var s= $(this).val();
      e.text($(this).val());
      e.show();
      $(this).remove();
    }) 
    $(".active input").bind('keypress',function(event){
      if(event.keyCode == "13"){
        $(this).blur();
      }
    });
  })
  $(".navbar-right .glyphicon-plus").click(function(){
    html_str=$(this).parent().parent().prop("outerHTML");
    this.parentNode.parentNode.insertAdjacentHTML("afterEnd", html_str);
    a();
  })
  $(".navbar-right .glyphicon-minus").click(function(){
    $(this).parent().parent().remove()
  })
  }
  a();
  

}