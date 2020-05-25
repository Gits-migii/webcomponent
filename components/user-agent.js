export default class UserAgentElement extends HTMLElement {
  constructor() {
    super()
    const
      shadowRoot = this.attachShadow({ mode: 'open' }),
      ua = navigator.userAgent
    shadowRoot.innerHTML = ua
  }
}
