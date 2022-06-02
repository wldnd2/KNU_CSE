function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function toggleSubmit() {
  const section = document.querySelector(".contents");
  const result = document.querySelector(".result");
  section.classList.toggle("active");
  result.classList.toggle("active");
}
