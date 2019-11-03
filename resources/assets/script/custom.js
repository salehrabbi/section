$(".playerID").click(function() {
  var videoURL = $("#VdoID").attr("src"),
    dataplay = $("#VdoID").attr("data-play");

  //for check autoplay
  //if not set autoplay=1
  if (dataplay == 0) {
    $("#VdoID").attr("src", videoURL + "?autoplay=1");
    $("#VdoID").attr("data-play", 1);
  } else {
    var videoURL = $("#VdoID").attr("src");
    videoURL = videoURL.replace("?autoplay=1", "");
    $("#VdoID").prop("src", "");
    $("#VdoID").prop("src", videoURL);

    $("#VdoID").attr("data-play", 0);
  }
});
