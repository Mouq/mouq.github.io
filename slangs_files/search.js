$(function(){
  $('#search').css('visibility', 'visible');
  $("#query").autocomplete({
      position: { my: "right top", at: "right bottom", of: "#search div" },
      source: [
{ label: "Language: Slangs Today", value: "Slangs Today", url: "/language/1Slangs" },
{ label: "Type: Mu", value: "Mu", url: "/type/Mu" },
{ label: "Method: ACCEPTS", value: "ACCEPTS", url: "/routine/ACCEPTS" },
{ label: "Sub: Bool", value: "Bool", url: "/routine/Bool" },
{ label: "Method: CREATE", value: "CREATE", url: "/routine/CREATE" },
{ label: "Sub: EXPORT", value: "EXPORT", url: "/routine/EXPORT" },
{ label: "Method: Str", value: "Str", url: "/routine/Str" },
{ label: "Method: WHICH", value: "WHICH", url: "/routine/WHICH" },
{ label: "Method: bless", value: "bless", url: "/routine/bless" },
{ label: "Method: clone", value: "clone", url: "/routine/clone" },
{ label: "Sub: defined", value: "defined", url: "/routine/defined" },
{ label: "Sub: gist", value: "gist", url: "/routine/gist" },
{ label: "Method: new", value: "new", url: "/routine/new" },
{ label: "Sub: perl", value: "perl", url: "/routine/perl" },
{ label: "Method: print", value: "print", url: "/routine/print" },
{ label: "Method: say", value: "say", url: "/routine/say" },
{ label: "Variable: $*LANG", value: "$*LANG", url: "/syntax/%24*LANG" },
{ label: "Variable: %*MAIN", value: "%*MAIN", url: "/syntax/%25*MAIN" }
      ],
      select: function (event, ui) { window.location.href = ui.item.url; },
      autoFocus: true
  });
});
