// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Ambil semua tombol dengan class "tombol"
const tombolList = document.querySelectorAll(".tombol");

// Tambahkan event listener ke setiap tombol
tombolList.forEach((tombol) => {
  tombol.addEventListener("click", function () {
    // Periksa apakah tombol memiliki kelas "active"
    if (this.classList.contains("active")) {
      // Jika sudah "aktif," hilangkan kelas "active"
      this.classList.remove("active");
    } else {
      // Jika belum "aktif," tambahkan kelas "active"
      // dan hilangkan kelas "active" dari tombol lain
      tombolList.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    }
  });
});

