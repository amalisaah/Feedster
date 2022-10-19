$(document).ready(() => {
  $(".menu").on("mouseenter", () => {
    $(".nav-menu").show();
  });

$(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
  });

  $(".btn")
    .on("mouseenter", (e) => {
      $(e.currentTarget).addClass("btn-hover");
    })
    .on("mouseenter", () => {
      $(".btn").removeClass("btn-hover");
    });

  $('.postText').on('keyup',(event)=>{
  let post=$(event.currentTarget).val();
  let remaining=140-post.length;
  $('.characters').html(remaining);
  if (remaining <=0){
    $('.wordcount').addClass('red')
  } else $('.wordcount').removeClass('red')
    }).focus()

  
});
