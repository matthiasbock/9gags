
String.prototype.between = function(begin, end) {
    var a = this.indexOf(begin) + begin.length;
    var b = this.indexOf(end, a);
    b = b > -1 ? b : this.length;
    return this.substring(a, b);
};

String.prototype.generateValidFilename = function() {
    return this.replace(/:/g,'').replace(/\|/g,'-').replace(/\!/g,'').trim();
};

String.prototype.parseQueryString = function(key, separatorArguments, separatorKeyValue) {
    var result = {};
    var equations = this.split(separatorArguments ? separatorArguments : '&');
    console.log(equations);
    for (var i=0; i<equations.length; i++) {
        var p = equations[i].indexOf(separatorKeyValue ? separatorKeyValue : '=');
        result[ equations[i].substr(0,p).trim() ] = equations[i].substr(p+1).trim();
    }
    return key ? result[key] : result;
};

String.prototype.decodeURI = function() {
    return decodeURIComponent(this);
};

String.prototype.replaceAll = function(Old, New) {
    return this.replace(RegExp(Old,"g"), New);
};

String.prototype.parseJSON = function() {
    try {
        return JSON.parse(this);
    } catch (e) {
        console.error("JSON parsing error:", e); 
    }
};

getEmbedFlashvars = function(element) {
    return element.attr('flashvars').replace(/\&amp;/g, '&').parseQueryString();
};

VideoPlayer = function(url, width, height, poster) {
    return $('<video width="'+width+'" height="'+height+'" '+(poster ? 'poster="'+poster+'" ' : '')+'controls autobuffer><source src="'+url+'">Your browser does not support the video tag.</video>');
};

VLCPlayer = function(url, width, height) {
    return $('<embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" target="'+url+'" width="'+width+'" height="'+height+'"/>');
};

DownloadLink = function(url, filename) {
    return 'Download: <a download="'+filename+'" href="'+url+'" style="color:#428bca;text-decoration:underline;">'+filename+'</a>';
};

appendCSS = function(cssRule) {
    $('body').append('<style>'+cssRule+'</style>');
};

cssHide = function(selector) {
    appendCSS(selector+' { display: none; visibility: hidden; opacity: 0; }');
};
