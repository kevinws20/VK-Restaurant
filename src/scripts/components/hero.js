class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" id="hero">
    <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
        <img src="./images/heros/hero-image_4-large.jpg"
             alt="Hero Image" class="hero__background">
    </picture>
    <div class="hero__inner">
      <h1 tabindex="0" class="hero__title">We serve you the best experience and taste</h1>
      <p tabindex="0" class="hero__tagline">
        Spread across several big cities in Indonesia
      </p>
    </div>
  </div>  
      `;
  }
}

customElements.define('custom-hero', Hero);
