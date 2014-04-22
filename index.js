
findChild = function(parent, name) {
    if (parent.hasOwnProperty('children')) {
        for (i in parent.children) {
            var bookmark = parent.children[i];
            if (bookmark.hasOwnProperty('name') && bookmark.name == name) {
                return bookmark;
                continue;
            }
        }
    }
    return null;
}

$.get('bookmarks.json', function(result) {
    var bookmark_bar = result.parseJSON().roots.bookmark_bar;
    var F = findChild(bookmark_bar, 'F');
    var NineGag = findChild(F, '9gag');
    console.log(NineGag);
    var gags = NineGag.children;
    for (i in gags) {
        $.get(gags[i].url, function(reply) {
            url = reply.between('badge-item-img" src="', '"');
            $('body').append('<img class="gag" src="'+url+'"/><br/>');
        });
    }
});
