// Navigation scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Active navigation link
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Typing effect for code window
const codeLines = [
  "class SoftwareEngineer {",
  "  constructor() {",
  '    this.name = "Yvette Kwizera";',
  '    this.location = "Rwanda";',
  '    this.education = "ALU";',
  "  }",
  "",
  "  skills() {",
  "    return [",
  '      "Python", "JavaScript",',
  '      "React", "Node.js",',
  '      "UI/UX Design"',
  "    ];",
  "  }",
  "",
  "  passion() {",
  '    return "Solving global challenges";',
  "  }",
  "}",
]

let lineIndex = 0
let charIndex = 0
const typingElement = document.querySelector(".typing-text")

function typeCode() {
  if (lineIndex < codeLines.length) {
    if (charIndex < codeLines[lineIndex].length) {
      typingElement.textContent += codeLines[lineIndex].charAt(charIndex)
      charIndex++
      setTimeout(typeCode, 30)
    } else {
      typingElement.textContent += "\n"
      lineIndex++
      charIndex = 0
      setTimeout(typeCode, 100)
    }
  } else {
    // Reset and start over
    setTimeout(() => {
      typingElement.textContent = ""
      lineIndex = 0
      charIndex = 0
      typeCode()
    }, 3000)
  }
}

// Start typing effect when page loads
window.addEventListener("load", () => {
  setTimeout(typeCode, 500)
})

// Tab functionality
const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab")

    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabContents.forEach((content) => content.classList.remove("active"))

    // Add active class to clicked button and corresponding content
    button.classList.add("active")
    document.getElementById(targetTab).classList.add("active")
  })
})

// Contact form submission
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  // Create mailto link
  const mailtoLink = `mailto:y.kwizera@alustudent.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

  // Open email client
  window.location.href = mailtoLink

  // Reset form
  contactForm.reset()

  // Show success message (optional)
  alert("Thank you for your message! Your email client will open shortly.")
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})
