//!toggle journey board
$(document).ready(function () {
  var content = $("li");
  content.animate({ opacity: "0" }, 1000);
  $(".box").click(function () {
    var div = $(".wraper");
    var content = $("li");
    var box = $(".box");
    div.animate({ left: "0" }, 1000);
    box.animate({ opacity: "0" }, 1000);
    content.animate({ opacity: "1" }, 1000);
  });
  $(".all-content").click(function () {
    var div = $(".wraper");
    var content = $("li");
    var box = $(".box");
    div.animate({ left: "-22%" }, 1000);
    box.animate({ opacity: "1" }, 1000);
    content.animate({ opacity: "0" }, 1000);
  });
  $(".li-h3").click(function () {
    var div = $(".wraper");
    var content = $("li");
    var box = $(".box");
    div.animate({ left: "-22%" }, 1000);
    box.animate({ opacity: "1" }, 1000);
    content.animate({ opacity: "0" }, 1000);
  });
});

//! toggle notice board
$(document).ready(function () {
  var note = $(".note-tasks");
  note.animate({ opacity: "0" }, 1000);
  $(".not").click(function () {
    var open = $(".note-content");
    var note = $(".note-tasks");
    note.animate({ opacity: "1" }, 1000);
    open.animate({ width: "300px" }, 1000);
  });
  $(".close").click(function () {
    var close = $(".note-content");
    var note = $(".note-tasks");
    note.animate({ opacity: "0" }, 1000);
    close.animate({ width: "30px" }, 1000);
  });
  $(".all-content").click(function () {
    var close = $(".note-content");
    var note = $(".note-tasks");
    note.animate({ opacity: "0" }, 1000);
    close.animate({ width: "30px" }, 1000);
  });
});
