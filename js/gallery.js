const createGallery = () => {
    let gallery = document.querySelector('gallery');

    gallery.innerHTML = `
		  <div class="gallery_section layout_padding">
		    <div class="container-fluid">
		      <div class="heading_container heading_center">
		        <h2>
		          Nossa galeria de tatuagens
		        </h2>
		      </div>
		      <div class="row">
		        <div class=" col-sm-8 col-md-6 px-0">
		          <div class="img-box">
		            <img src="images/g1.jpg" alt="">
		            <div class="btn-box">
		              <a href="images/g1.jpg" data-toggle="lightbox" class="btn-1">
		                <i class="fa fa-picture-o" aria-hidden="true"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		        <div class="col-sm-4 col-md-3 px-0">
		          <div class="img-box">
		            <img src="images/g2.jpg" alt="">
		            <div class="btn-box">
		              <a href="images/g2.jpg" data-toggle="lightbox" class="btn-1">
		                <i class="fa fa-picture-o" aria-hidden="true"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		        <div class="col-sm-6 col-md-3 px-0">
		          <div class="img-box">
		            <img src="images/g3.jpg" alt="">
		            <div class="btn-box">
		              <a href="images/g3.jpg" data-toggle="lightbox" class="btn-1">
		                <i class="fa fa-picture-o" aria-hidden="true"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		        <div class="col-sm-6 col-md-3 px-0">
		          <div class="img-box">
		            <img src="images/g4.jpg" alt="">
		            <div class="btn-box">
		              <a href="images/g4.jpg" data-toggle="lightbox" class="btn-1">
		                <i class="fa fa-picture-o" aria-hidden="true"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		        <div class="col-sm-4 col-md-3 px-0">
		          <div class="img-box">
		            <img src="images/g5.jpg" alt="">
		            <div class="btn-box">
		              <a href="images/g5.jpg" data-toggle="lightbox" class="btn-1">
		                <i class="fa fa-picture-o" aria-hidden="true"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		        <div class="col-sm-8 col-md-6 px-0">
		          <div class="img-box">
		            <img src="images/g6.jpg" alt="">
		            <div class="btn-box">
		              <a href="images/g6.jpg" data-toggle="lightbox" class="btn-1">
		                <i class="fa fa-picture-o" aria-hidden="true"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
`;
}

createGallery();