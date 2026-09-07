const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".nav-mobile");
const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

menuBtn?.addEventListener("click", () => {
  const open = mobileNav.hasAttribute("hidden") === false;
  mobileNav.hidden = open;
  menuBtn.setAttribute("aria-expanded", String(!open));
  menuBtn.setAttribute("aria-label", open ? "Open menu" : "Close menu");
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  });
});
