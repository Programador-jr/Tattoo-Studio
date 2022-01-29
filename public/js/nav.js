const createNav = () => {
    let nav = document.querySelector('.bar');

    nav.innerHTML = `
			<header class="header_section">
				<div class="container">
					<nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span>
              Tattoo
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item active ">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="service.html">Serviços <span class="sr-only">(current)</span> </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="gallery.html">Galeria</a>
              </li>
          </div>
        </nav>
				</div>
			</header>
`;
}

createNav();