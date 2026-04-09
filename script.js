// Smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth"

// Função para animar elementos ao entrar na viewport
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observar todos os elementos com scroll-reveal
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".scroll-reveal")
  revealElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
    observer.observe(element)
  })

  // Adicionar evento de hover nos cards
  const cards = document.querySelectorAll(".card-hover")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Efeito adicional ao entrar
      this.style.zIndex = "10"
    })

    card.addEventListener("mouseleave", function () {
      this.style.zIndex = "1"
    })
  })

  // Adicionar efeito parallax suave ao scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const header = document.querySelector(".header-glow")
    if (header) {
      header.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Animar skill tags ao hover
  const skillTags = document.querySelectorAll(".skill-tag")
  skillTags.forEach((tag, index) => {
    tag.style.setProperty("--delay", `${index * 0.1}s`)
  })

  // Adicionar animação aos ícones de contato
  const contactIcons = document.querySelectorAll(".contact-card .icon")
  contactIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.animation = "none"
      setTimeout(() => {
        this.style.animation = "float 0.6s ease-in-out 3"
      }, 10)
    })
  })

  // Animar números ao scroll
  animateCounters()
})

// Função para animar contadores (se houver)
function animateCounters() {
  const counters = document.querySelectorAll("[data-count]")
  counters.forEach((counter) => {
    const startCount = 0
    const endCount = parseInt(counter.getAttribute("data-count"), 10)
    const duration = 2000
    let currentCount = startCount
    const increment = endCount / (duration / 16)

    const countInterval = setInterval(() => {
      currentCount += increment
      if (currentCount >= endCount) {
        counter.textContent = endCount
        clearInterval(countInterval)
      } else {
        counter.textContent = Math.floor(currentCount)
      }
    }, 16)
  })
}

// Efeito de digitação (opcional para títulos)
function typeWriter(element, text, speed = 50) {
  let index = 0
  element.textContent = ""

  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index)
      index++
      setTimeout(type, speed)
    }
  }

  type()
}

// Detectar redimensionamento da janela para ajustar animações
window.addEventListener("resize", () => {
  // Reajustar animações se necessário
})

// Adicionar classe active ao link de navegação (se houver)
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll("nav a")

  if (navLinks.length > 0) {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionBottom = sectionTop + section.offsetHeight
      const scrollPosition = window.scrollY

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach((link) => link.classList.remove("active"))
        const activeLink = document.querySelector(
          `nav a[href="#${section.id}"]`,
        )
        if (activeLink) {
          activeLink.classList.add("active")
        }
      }
    })
  }
})

// Melhorar performance com passive listeners
let ticking = false
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Executar animações de scroll aqui
        ticking = false
      })
      ticking = true
    }
  },
  { passive: true },
)

// Efeito de ripple ao clicar nos links
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // criar ripple effect (opcional)
    const ripple = document.createElement("span")
    ripple.style.position = "absolute"
    ripple.style.pointerEvents = "none"
    this.style.position = "relative"
  })
})

console.log("🚀 Portfolio inicializado com sucesso!")
