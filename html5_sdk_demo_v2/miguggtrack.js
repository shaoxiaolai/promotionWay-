var miguggtrack = function (tagid, pw) {
  var _pw = pw;
  var _j = {};

  var _s = document.createElement("script");
  _s.type = "text/javascript";
  _s.id = "miguqqrequest";
  _s.src = "http://ggx.cmvideo.cn/request/api11?authid=miguinnertrack&token=hhfdsauyuidsa&tagid=" + tagid + "&networktraffictype=3&callback=" + escape("ggtrack.impress");
  document.body.appendChild(_s);

  this.impress = function (j) {
    var _s = document.getElementById("miguqqrequest");
    document.body.removeChild(_s);

    _j = j;
    try {
      var _url = _j.seats[0].ads[0].native.impressurl[0].replace("adxserver.ad.cmvideo.cn", "ggx.cmvideo.cn");
      _s = document.createElement("script");
      _s.type = "text/javascript";
      _s.id = "miguqqimpress";
      _s.addEventListener("load", function () {
        var _s = document.getElementById("miguqqimpress");
        document.body.removeChild(_s);
      });
      _s.setAttribute("src", _url + "&ext=" + escape("{\"pw\":\"" + escape(_pw) + "\"}"));
      document.body.appendChild(_s);
    } catch (e) {}
  };

  this.click = function (tag, callback) {
    try {
      var _url = _j.seats[0].ads[0].native.clickurl[0].replace("adxserver.ad.cmvideo.cn", "ggx.cmvideo.cn");
      _s = document.createElement("script");
      _s.type = "text/javascript";
      _s.id = "miguqqclick";
      _s.addEventListener("load", function () {
        var _s = document.getElementById("miguqqclick");
        document.body.removeChild(_s);
		callback();
      });
      _s.setAttribute("src", _url + "&ext=" + escape("{\"pw\":\"" + escape(_pw) + "\",\"tag\":\"" + escape(tag) + "\"}"));
      document.body.appendChild(_s);
    } catch (e) {}
  };
}