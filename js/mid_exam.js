jQuery(document).ready(function () {
  console.log("working");
});

document.addEventListener("DOMContentLoaded", () => {
  const leaves = document.querySelectorAll(
    ".leg_right_img, .right_img, .right_back_img, .left_img, .right2_img"
  );

  leaves.forEach((leaf) => {
    leaf.addEventListener("click", () => {
      leaf.classList.toggle("paused");
    });
  });
});
