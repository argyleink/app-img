const styles = `
  <style>
    :host {
      position: relative;
      display: inline-block;
      contain: content;

      --loading-bg: hsl(0,0%,85%);
      --loading-text_color: hsl(0,0%,70%);
      --fit: cover;
      --position: initial;
      --fade-speed: 0.5s;
    }

    :host([loading]):after {
      content: "Loading";
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      color: var(--loading-text_color);
      background: var(--loading-bg);
      font-family: cursive;
      z-index: -1;
    }

    :host([hidden]) { 
      display: none; 
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: var(--fit);
      object-position: var(--position);
      border: none;

      opacity: 1;
      transition: opacity var(--fade-speed) ease-out;
    }

    :host([loading]) img {
      opacity: 0;
    }
  </style>
`

class AppImg extends HTMLElement {
  constructor() {
    super()

    if (!this.hasAttribute('src')) return

    this.setAttribute('loading', '')
    this.$img = document.createElement('img')

    if (this.hasAttribute('no-shadow')) {
      this.innerHTML += styles
      this.appendChild(this.$img)
    }
    else {
      this.$shadows = this.attachShadow({ mode: 'open' })
      this.$shadows.innerHTML += styles
      this.$shadows.appendChild(this.$img)
    }

    this.observer_viewport = this.hasAttribute('viewport') 
    ? document.querySelector(this.getAttribute('viewport'))
    : null
  }

  connectedCallback() {
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver(e => {
        if (e[0].intersectionRatio < 1) return

        this.$img.src = this.getAttribute('src')
        this.observer.unobserve(this)
      }, { 
        root:       this.observer_viewport,
        threshold:  1,
        rootMargin: '0px',
      })

      this.observer.observe(this)
    }
    else // busy loading
      this.$img.src = this.getAttribute('src')
    
    this.$img.onload = e => {
      this.removeAttribute('loading')
      this.dispatchEvent(new CustomEvent('loaded', { 
        bubbles: false,
        detail: { 
          target: this, 
          loaded: true,
        },
      }))
    }
  }
}

customElements.define('app-img', AppImg)