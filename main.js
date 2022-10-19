// tabs

const tabs = document.querySelectorAll(".slider");
const slideBar = document.querySelector(".slider-bar");
const allContent = document.querySelectorAll(".tab");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    slideBar.style.left = `${index * 33}%`;

    const id = e.currentTarget.dataset.id;
    const element = document.querySelector(`.${id}`);
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      allContent.forEach((content) => {
        content.classList.remove("active");
      });
    });
    e.currentTarget.classList.add("active");
    element.classList.add("active");
  });
});

// questions and answers

const qaBlock = document.querySelectorAll(".qa-block");

qaBlock.forEach((qa) => {
  qa.addEventListener("click", (e) => {
    qaBlock.forEach((qA) => {
      if (qA !== qa) {
        qA.classList.remove("active");
      }
    });
    e.currentTarget.classList.toggle("active");
  });
});

const email = document.querySelector(".error-mail");
const emailInput = document.querySelector(".error-mail input");
const mailBtn = document.getElementById("mailBtn");

mailBtn.addEventListener("click", () => {
  const emailValue = emailInput.value;
  if (!validateEmail(emailValue)) {
    email.classList.add("active");
    setTimeout(() => {
      email.classList.remove("active");
    }, 3000);
  } else {
    email.classList.remove("active");
    email.classList.add("correct");
    setTimeout(() => {
      email.classList.remove("correct");
    }, 3000);
  }
});

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// mobile menu

const mobileMenu = document.querySelector(".mobile-menu");
const mobileOpen = document.querySelector(".mobile-menu-open");
const mobileClose = document.querySelector(".mobile-menu-close");

mobileOpen.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

mobileClose.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
