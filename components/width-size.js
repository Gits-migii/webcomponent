export default class WidthSizeElement extends HTMLElement {
  constructor() {
    super();
    const
      shadowRoot = this.attachShadow({mode: 'open'}),
      size = window.outerWidth

    shadowRoot.innerHTML = size +'px'

  }
}