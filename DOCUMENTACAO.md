# 📚 Documentação Detalhada - Portfólio Tecnológico Interativo

## 📖 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [HTML - Estrutura Semântica](#html---estrutura-semântica)
4. [CSS - Design e Animações](#css---design-e-animações)
5. [JavaScript - Interatividade](#javascript---interatividade)
6. [Boas Práticas Aplicadas](#boas-práticas-aplicadas)
7. [Guia de Customização](#guia-de-customização)

---

## Visão Geral

Este projeto transformou um portfólio básico em um **portfólio tecnológico moderno** com:

- ✨ Animações suaves e elegantes
- 🎯 Design responsivo
- ⚡ Interatividade sem ser exagerada
- 🎨 Paleta de cores moderna (Cyan + Purple)
- 📱 Otimizado para todos os dispositivos

---

## Estrutura do Projeto

```
portfolio-pessoal/
├── index.html          # Estrutura HTML
├── style.css          # Estilos e animações
├── script.js          # Interatividade JavaScript
└── DOCUMENTACAO.md    # Este arquivo
```

---

## HTML - Estrutura Semântica

### 1. **Header (Cabeçalho)**

```html
<header>
  <div class="container">
    <div class="header-content">
      <h1 class="animate-fade-in">Gabriel Martorelli</h1>
      <p class="subtitle animate-fade-in" style="animation-delay: 0.2s">
        Estudante de Sistemas de Informação • Desenvolvedor em formação
      </p>
    </div>
  </div>
  <div class="header-glow"></div>
</header>
```

**O que foi melhorado:**

- ✅ Adicionado `header-content` envolvendo os títulos para melhor organização
- ✅ Classes `animate-fade-in` para animações ao carregar
- ✅ `animation-delay: 0.2s` no subtitle para sequência visual
- ✅ `header-glow` elemento decorativo para efeito visual

**Propósito:**

- O header é a primeira impressão, por isso animações entrada suave
- O elemento `.header-glow` cria um efeito visual tecnológico em background

---

### 2. **Seção Sobre**

```html
<section class="sobre scroll-reveal">
  <div class="container">
    <h2 class="section-title">Sobre mim</h2>
    <p class="about-text">...</p>
    <div class="skills-mini">
      <span class="skill-tag">C#</span>
      <span class="skill-tag">ASP.NET</span>
      <span class="skill-tag">HTML/CSS</span>
      <span class="skill-tag">JavaScript</span>
    </div>
  </div>
</section>
```

**Inovações:**

- ✅ **`.scroll-reveal`**: Classe que ativa animação ao entrar na viewport
- ✅ **`.section-title`**: Título com underline animado (gradiente)
- ✅ **`.skill-tag`**: Tags das tecnologias com efeito hover

**Por que isso melhora UX:**

- Animação ao scroll mantém usuário engajado
- Skills destacadas facilitam visualização de competências
- Cada tag é interativa com hover responsivo

---

### 3. **Seção Projetos**

```html
<section class="projetos">
  <div class="container">
    <h2>Projetos em destaque</h2>
    <div class="grid">
      <div class="card card-hover" data-index="0">
        <div class="card-icon">⚙️</div>
        <h3>Lógica de Programação</h3>
        <p>...</p>
        <a href="..." target="_blank" class="btn-link"> Ver repositório → </a>
      </div>
      <!-- Mais 2 cards -->
    </div>
  </div>
</section>
```

**Melhorias estruturais:**

- ✅ **`card card-hover`**: Classes duplas para estilo + interatividade
- ✅ **`data-index`**: Atributo para delays de animação diferentes
- ✅ **`.card-icon`**: Emoji como ícone visual
- ✅ **`.btn-link`**: Link com animação de underline

**Funcionamento visual:**

- Cards entram com delay progressivo (0.2s, 0.3s, 0.4s)
- Ao hover: levantam, brilham e mudam cor
- Link com seta temática

---

### 4. **Seção Contato**

```html
<section class="contato scroll-reveal">
  <div class="container">
    <h2 class="section-title">Contato</h2>
    <div class="contact-links">
      <a href="mailto:..." class="contact-card hover-lift">
        <span class="icon">✉️</span>
        <div>
          <strong>Email</strong>
          <p>gabriel.martorelli@hotmail.com</p>
        </div>
      </a>
      <!-- LinkedIn e GitHub -->
    </div>
  </div>
</section>
```

**Características:**

- ✅ **`.contact-card`**: Cards clicáveis com layout flexível
- ✅ **`.icon`**: Ícones flutuantes (animação contínua)
- ✅ **`.hover-lift`**: Classe para efeito de elevação no hover

---

## CSS - Design e Animações

### 1. **Variáveis CSS (Design System)**

```css
:root {
  --primary: #00d8ff; /* Cyan - cor principal */
  --primary-dark: #0098b8; /* Cyan escuro */
  --bg-dark: #0f172a; /* Fundo escuro */
  --bg-darker: #020617; /* Fundo mais escuro */
  --card-bg: #111827; /* Fundo dos cards */
  --text-light: #e5e7eb; /* Texto claro */
  --text-muted: #9ca3af; /* Texto secundário */
  --accent: #7c3aed; /* Roxo - acentuação */
  --accent-light: #a78bfa; /* Roxo claro */
}
```

**Por que usar variáveis?**

- 🎯 Fácil manutenção de cores
- 🔄 Alterar tema em um único lugar
- 📱 Consistência visual

---

### 2. **Animações Globais**

#### **fadeInUp - Entrada com movimento**

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

📍 **Usada em:** Seções ao entrar na viewport, cards ao carregar

#### **float - Flutuação suave**

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

📍 **Usada em:** Ícones de contato, elemento glow do header

#### **shimmer - Brilho passante**

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
```

📍 **Usada em:** Linha superior do header

#### **slideInDown - Deslize para baixo**

```css
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

📍 **Usada em:** Header ao carregar

---

### 3. **Header - Elemento Premium**

```css
header {
  background: linear-gradient(135deg, var(--bg-darker) 0%, #1a1f3a 100%);
  padding: 50px 0 40px;
  border-bottom: 1px solid rgba(0, 216, 255, 0.1);
  position: relative;
  overflow: hidden;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  animation: shimmer 2s infinite;
}
```

**Efeitos aplicados:**

- 🎨 Gradiente de fundo (escuro para mais escuro)
- ✨ Linha brilhante no topo (pseudo-elemento `::before`)
- 🔲 Border sutil cyan no rodapé

```css
.header-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(0, 216, 255, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  top: -100px;
  right: -100px;
  animation: float 6s ease-in-out infinite;
}
```

**O que é:**

- Efeito decorativo que flutua no background
- Gradiente radial (ponto de luz diffuso)
- Posicionado fora do canvas, mas visível

---

### 4. **Títulos com Efeito Gradient**

```css
header h1 {
  font-size: 2.5em;
  background: linear-gradient(
    135deg,
    var(--primary) 0%,
    var(--accent-light) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  letter-spacing: 1px;
}
```

**Como funciona:**

- Cria um gradiente de cyan para roxo
- `background-clip: text` - aplica gradiente ao texto
- `-webkit-text-fill-color: transparent` - compatibilidade com navegadores

**Resultado visual:** Texto com gradient luxuoso

---

### 5. **Seção Titles com Underline Animado**

```css
.section-title {
  font-size: 2em;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), transparent);
  border-radius: 2px;
}
```

**Design:**

- Underline em gradiente que desaparece
- Cria efeito visual sofisticado
- Sem animação ativa, mas bem proporcionado

---

### 6. **Cards - Interatividade Complexa**

```css
.card {
  background: linear-gradient(
    135deg,
    var(--card-bg) 0%,
    rgba(26, 31, 58, 0.8) 100%
  );
  padding: 25px;
  border-radius: 12px;
  border: 1px solid rgba(0, 216, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.6s ease-out both;
}

.card[data-index="0"] {
  animation-delay: 0.2s;
}
.card[data-index="1"] {
  animation-delay: 0.3s;
}
.card[data-index="2"] {
  animation-delay: 0.4s;
}
```

**Elementos:**

- ✅ **Gradiente de fundo:** Adiciona profundidade
- ✅ **Transição cubic-bezier:** Animação mais natural
- ✅ **overflow: hidden:** Contém efeitos internos
- ✅ **animation-delay:** Cada card entra em sequência

#### **Efeito de deslize interno (shimmer)**

```css
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 216, 255, 0.2),
    transparent
  );
  transition: left 0.6s ease;
}

.card:hover::before {
  left: 100%;
}
```

**Funciona assim:**

1. Pseudo-elemento começa fora (`left: -100%`)
2. Ao hover, desliza para `left: 100%`
3. Cria efeito de "raio de luz" passando pelo card

#### **Hover do Card**

```css
.card:hover {
  border-color: var(--primary);
  background: linear-gradient(
    135deg,
    rgba(0, 216, 255, 0.1),
    rgba(124, 58, 237, 0.1)
  );
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 216, 255, 0.2);
}

.card:hover h3 {
  color: var(--primary);
}
```

**O que muda:**

- Borda muda para cyan
- Fundo fica mais vibrante
- Card levanta 8px
- Sombra cyan brilhante
- Título fica cyan

---

### 7. **Links com Underline Animado**

```css
.btn-link {
  text-decoration: none;
  color: var(--primary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  position: relative;
}

.btn-link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.btn-link:hover::after {
  width: 100%;
}
```

**Animação:**

- Underline começa com `width: 0`
- Ao hover, expande para `width: 100%`
- Diferente do hover comum (mais elegante)

---

### 8. **Cards de Contato**

```css
.contact-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: linear-gradient(
    135deg,
    rgba(0, 216, 255, 0.05),
    rgba(124, 58, 237, 0.05)
  );
  padding: 25px;
  border-radius: 10px;
  border: 1px solid rgba(0, 216, 255, 0.15);
  transition: all 0.4s ease;
  animation: fadeInUp 0.6s ease-out both;
}

.contact-card:nth-of-type(1) {
  animation-delay: 0.3s;
}
.contact-card:nth-of-type(2) {
  animation-delay: 0.4s;
}
.contact-card:nth-of-type(3) {
  animation-delay: 0.5s;
}
```

**Layout:**

- `display: flex` com `gap: 20px` para espaço entre ícone e texto
- `align-items: flex-start` para alinhar ao topo
- Animações em cascata (delays diferentes)

#### **Ícones Flutuantes**

```css
.contact-card .icon {
  font-size: 1.8em;
  flex-shrink: 0;
  animation: float 3s ease-in-out infinite;
}

.contact-card:nth-of-type(2) .icon {
  animation-delay: 0.5s;
}

.contact-card:nth-of-type(3) .icon {
  animation-delay: 1s;
}
```

**Efeito:**

- Cada ícone flutua continuamente
- Delays diferentes para movimento desincronizado
- Cria movimento visual contínuo

---

### 9. **Responsividade**

```css
@media (max-width: 768px) {
  header h1 {
    font-size: 1.8em;
  }
  .projetos .grid {
    grid-template-columns: 1fr;
  }
  .contact-links {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  header h1 {
    font-size: 1.5em;
  }
  .card {
    padding: 20px;
  }
}
```

**Breakpoints:**

- ✅ **Desktop:** Layout 3 colunas
- ✅ **Tablet (768px):** Layout 2 colunas
- ✅ **Mobile (480px):** Layout 1 coluna

---

## JavaScript - Interatividade

### 1. **Scroll Suave (Global)**

```javascript
document.documentElement.style.scrollBehavior = "smooth"
```

**O que faz:**

- Ao clicar em um link `<a href="#section">`, a página desliza suavemente
- Não precisa de eventos, é nativo do navegador

---

### 2. **Intersection Observer - Animações ao Scroll**

```javascript
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
```

**Como funciona:**

1. `threshold: 0.1` - Ativa quando 10% do elemento está visível
2. `rootMargin: '0px 0px -50px 0px'` - Ativa 50px antes de entrar
3. Quando ativa, remove `observer.unobserve()` para não repetir
4. Anima de `opacity: 0` e `translateY(30px)` para normal

**Benefício:** Animações só rodam quando necessário (performance)

---

### 3. **Aplicar Reveal aos Elementos**

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".scroll-reveal")
  revealElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
    observer.observe(element)
  })
  // ... resto do código
})
```

**Processo:**

1. Seleciona todos `.scroll-reveal`
2. Define estado inicial (invisível, deslocado)
3. Aplica transição CSS
4. Começa a observar para mudanças

---

### 4. **Parallax Suave no Header**

```javascript
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const header = document.querySelector(".header-glow")
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})
```

**O que faz:**

- Elemento `.header-glow` se move mais lentamente que o scroll
- `scrolled * 0.5` = 50% da velocidade de scroll
- Cria efeito de "profundidade" visual

**Fórmula:**

- `* 0.3` = movimento mais lento
- `* 0.5` = velocidade média
- `* 0.8` = movimento mais rápido

---

### 5. **Animação ao Hover nos Ícones de Contato**

```javascript
const contactIcons = document.querySelectorAll(".contact-card .icon")
contactIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.style.animation = "none"
    setTimeout(() => {
      this.style.animation = "float 0.6s ease-in-out 3"
    }, 10)
  })
})
```

**Funcioanalidade:**

1. Ao passar mouse no ícone
2. Reseta a animação (`animation: 'none'`)
3. Reaplica com `3` iterações (repete 3x apenas)
4. Cria "pulsação" interativa

---

### 6. **Performance - Passive Listeners**

```javascript
let ticking = false
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        ticking = false
      })
      ticking = true
    }
  },
  { passive: true },
)
```

**Por que?**

- ✅ `{ passive: true }` - Navegador não espera por `preventDefault()`
- ✅ `requestAnimationFrame` - Sincroniza com refresh rate (60fps)
- ✅ Throttling com `ticking` - Limita chamadas de função

**Resultado:** Scroll mais fluido, menos CPU usado

---

### 7. **Função para Contar números (Opcional)**

```javascript
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
```

**Como usar (no HTML):**

```html
<span data-count="150">Projects</span>
```

**Efeito:** Número "conta" de 0 até 150 em 2 segundos

---

## Boas Práticas Aplicadas

### 1. **Mobile First Responsiveness** 📱

- CSS base funciona em mobile
- Media queries adicionam ajustes para telas maiores
- Breakpoints: 480px, 768px, 1024px

### 2. **Accessibility (Acessibilidade)** ♿

- Semântica HTML correta (`<header>`, `<section>`, `<footer>`)
- Contraste de cores suficiente (cyan #00d8ff sobre fundo escuro)
- Links com `target="_blank"` têm setas para indicar nova aba

### 3. **Performance** ⚡

- Observador de intersecção em vez de scroll contínuo
- Passive listeners para eventos
- `requestAnimationFrame` para sincronizar com browser
- CSS transforms em vez de alterações de layout

### 4. **CSS Variables** 🎨

```css
:root {
  --primary: #00d8ff;
}
/* Usar em qualquer lugar */
color: var(--primary);
```

**Vantagem:** Alterar tema inteiro em um lugar

### 5. **Cubic Bezier Customizado** 📈

```css
transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
```

- Animações mais naturais que `ease-in-out`
- Pode copiar valores de sites como [cubic-bezier.com](https://cubic-bezier.com)

### 6. **Pseudo-elementos para Design** ✨

```css
.element::before {
} /* Antes do conteúdo */
.element::after {
} /* Depois do conteúdo */
```

- Permite adicionar elementos sem HTML extra
- Ideal para decorações, overlays, underlines

### 7. **Data Attributes** 📊

```html
<div class="card" data-index="0">...</div>
```

```css
.card[data-index="0"] {
  animation-delay: 0.2s;
}
```

- Forma elegante de passar dados HTML para CSS/JS
- Melhor legibilidade que classes numéricas

---

## Guia de Customização

### 🎨 Alterar Cores

**No arquivo `style.css`, mude as variáveis:**

```css
:root {
  --primary: #00d8ff; /* Cyan → Sua cor */
  --accent: #7c3aed; /* Roxo → Sua cor */
  --bg-dark: #0f172a; /* Fundo → Sua cor */
}
```

**Exemplo - Tema Verde:**

```css
:root {
  --primary: #10b981; /* Verde esmeralda */
  --accent: #059669; /* Verde mais escuro */
  --bg-dark: #064e3b; /* Fundo verde escuro */
}
```

---

### ⏱️ Ajustar Velocidade de Animações

**Encontre no CSS:**

```css
animation: fadeInUp 0.6s ease-out both;
/* ↑ tempo */
```

**Valores comuns:**

- `0.3s` = Rápido
- `0.6s` = Normal (recomendado)
- `1s` = Lento

---

### 🔧 Adicionar Nova Animação

**1. Defina em CSS:**

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

**2. Use em um elemento:**

```css
.novo-elemento {
  animation: slideInLeft 0.6s ease-out;
}
```

**3. Ou via JavaScript:**

```javascript
element.style.animation = "slideInLeft 0.6s ease-out"
```

---

### 📐 Modificar Grid de Projetos

**Altere no CSS:**

```css
.projetos .grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  /* ↑ número de colunas automaticamente */
}
```

**Para 2 colunas sempre:**

```css
.projetos .grid {
  grid-template-columns: repeat(2, 1fr);
}
```

**Para 4 colunas:**

```css
.projetos .grid {
  grid-template-columns: repeat(4, 1fr);
}
```

---

### 🎯 Ativar/Desativar Animações

**Para desativar em produção (performance):**

```javascript
// No script.js, comente as animações:
// observer.observe(element); ← comentado
```

Ou adicione flag global:

```javascript
const ENABLE_ANIMATIONS = true

if (ENABLE_ANIMATIONS) {
  observer.observe(element)
}
```

---

### 📱 Adicionar Breakpoints Novos

**Exemplo - Tablet grande (920px):**

```css
@media (max-width: 920px) {
  .projetos .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  header h1 {
    font-size: 2em;
  }
}
```

---

### 🔗 Adicionar Nova Seção

**Estrutura padrão:**

```html
<section class="nova-secao scroll-reveal">
  <div class="container">
    <h2 class="section-title">Meu Título</h2>
    <div class="conteudo">
      <!-- Seu conteúdo -->
    </div>
  </div>
</section>
```

**CSS básico:**

```css
.nova-secao {
  animation-delay: 0.8s; /* Ajuste delay */
}

.nova-secao-item {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 216, 255, 0.1);
  transition: all 0.3s ease;
}

.nova-secao-item:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
}
```

---

## 🚀 Checklist Final

Antes de publicar seu portfólio:

- [ ] Verificar links (todos funcionam?)
- [ ] Testar em mobile (responsivo?)
- [ ] Verificar animações (suaves?)
- [ ] Otimizar imagens (se houver)
- [ ] Validar HTML (validator.w3.org)
- [ ] Testar performance (lighthouse no DevTools)
- [ ] Verificar contraste de cores
- [ ] Testar em navegadores diferentes

---

## 📚 Recursos para Continuar Aprendendo

### Sobre Animações CSS

- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Animate.css](https://animate.style/) - Biblioteca pronta

### Sobre Performance

- [Web.dev Performance](https://web.dev/performance/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Sobre Responsividade

- [MDN - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Can I Use](https://caniuse.com/) - Compatibilidade navegadores

### Sobre Design

- [Cuberl Bezier Creator](https://cubic-bezier.com/)
- [Color Hunt](https://colorhunt.co/) - Paletas de cor
- [Coolors](https://coolors.co/) - Gerador de paletas

### Sobre JavaScript

- [MDN - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [JavaScript.info](https://javascript.info/)

---

## 💡 Dicas Profissionais

✅ **Mantenha a consistência:** Use as mesmas cores, fonts e espaçamentos
✅ **Menos é mais:** Animações sutis são mais profissionais
✅ **Teste performance:** Não exagere em efeitos
✅ **Documente seu código:** Comentários ajudam quem lê depois
✅ **Use ferramentas:** DevTools, Lighthouse, W3C Validators
✅ **Estude design:** Veja portfólios profissionais como referência

---

## 📞 Resumo Rápido

| Componente | Arquivo                    | Função                        |
| ---------- | -------------------------- | ----------------------------- |
| Estrutura  | `index.html`               | Define seções e semântica     |
| Estilos    | `style.css`                | Design visual e animações CSS |
| Interação  | `script.js`                | Eventos e movimento dinâmico  |
| Cores      | `style.css` (`:root`)      | Paleta de cores centralizada  |
| Animações  | `style.css` (`@keyframes`) | Define movimentos             |
| Responsivo | `style.css` (`@media`)     | Ajustes para diferentes telas |

---

**Criado em:** 8 de Abril de 2026  
**Propósito:** Documentação para referência futura em estudos e projetos  
**Nível:** Iniciante a Intermediário

Happy Coding! 🚀
