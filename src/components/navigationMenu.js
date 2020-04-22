const template = `
<nav class="nav-wrapper transparent">
<div class="container">
  <a href="" class="sidenav-trigger" data-target="mobile-menu">
    <i class="material-icons">menu</i>
  </a>
  <img id="logo-img" src="./img/logo.png" alt="logo" />
  <a href="#" class="brand-logo">Imediar</a>

  <ul class="right hide-on-med-and-down">
    <li>
      <a href="#" class="yellow-text text-lighten-3" autofocus>Home</a>
    </li>
    <li>
      <a href="#" class="yellow-text text-lighten-3">Recorder</a>
    </li>
    <li>
      <a href="#" class="yellow-text text-lighten-3">Streaming</a>
    </li>
  </ul>
  <ul class="sidenav #263238 blue-grey darken-4" id="mobile-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Recorder</a></li>
    <li><a href="#">Streaming</a></li>
  </ul>
</div>
</nav>
`;

export default class NavigationMenu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = template;
    console.log(this);
  }
}
