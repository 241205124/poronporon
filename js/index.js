setTimeout(() => {
  const fade = document.getElementById("fadeOverlay");
  fade.classList.add("show");

  setTimeout(() => {
    fade.classList.remove("show");
    document.getElementById("slide2").scrollIntoView({ behavior: "smooth" });
    document.body.classList.add("slide2-locked");
  }, 1000);
}, 11500);

setTimeout(() => {
  const fade = document.getElementById("fadeOverlay");
  fade.classList.add("show");

  setTimeout(() => {
    fade.classList.remove("show");
    document.getElementById("slide2").scrollIntoView({ behavior: "smooth" });
    document.body.classList.add("slide2-locked");

    // ★ メニュー表示と動作設定
    const menu = document.getElementById("menu");
    const menuLinks = document.getElementById("menuLinks");
    menu.style.display = "block";

    menu.addEventListener("click", (e) => {
      e.stopPropagation(); // 親要素への伝播を防止
      if (menuLinks.style.display === "flex") {
        menuLinks.style.display = "none";
      } else {
        menuLinks.style.display = "flex";
      }
    });

  }, 1000);
}, 11500);
