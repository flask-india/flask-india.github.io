const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {
  this.classList.toggle('close');
});

function codeIdentity() {
  $(".highlighter-rouge, figure.highlight").each(function() {
      $(this).attr("data-lang", "code");
      var t = $(this).attr("class").split("language-");
      1 < t.length && (t = t[1].split(" ")[0],
      $(this).attr("data-lang", t));
      t = $(this).find("[data-lang]").data();
      t && $(this).attr("data-lang", t.lang)
  })
}
codeIdentity()