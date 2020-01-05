$(function() {
  const $firstview = $("#firstview"),
        $inviewEl = $(".inviewEl"),
        $window = $(window),
        $body = $("body"),
        $campaignSection = $("#campaign"),
        $campaignTagList = $("#campaign-tag-list");
  let winW, shadeModalID, $shadeModal, tabID;

  $inviewEl.on("inview", function() {
    $(this).addClass("inviewed");
  });
  
  $campaignTagList.find("a").on("click", function() {
    tabID = $(this).data("tab-id");
    $campaignSection.find(".bolt-ver:not(#"+tabID+")").removeClass("current-list");
    $campaignSection.find("#"+tabID).addClass("current-list");
  });
});