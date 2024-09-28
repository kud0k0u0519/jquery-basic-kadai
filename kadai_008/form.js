$(function () {
  // クリックボタンを押したら
  $('.btn').on('click' , function() {
    // テキストボックス内に文字を表示させる
    $('.text-box').val('クリックしました！')
  } );
});