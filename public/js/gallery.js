const createGallery = () => {
    let gallery = document.querySelector('gallery');

    gallery.innerHTML = `
			<div class="gallery_section layout_padding">
					<div class="popup-gallery container-fluid">
						<div class="heading_container heading_center">
							<h2>Nossa galeria de tatuagens</h2>
						</div>
						<div class="row">
							<!-- imagem 1 -->
							<div class="col-sm-8 col-md-6 px-0">
								<div class="img-box">
									<img src="images/g1.jpg"/>
									<div class="btn-box">
										<a href="images/g1.jpg" title="Tatto Studio" class="btn-1"><i class="fas fa-search" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<!-- end -->
							<!-- imagem 2 -->
							<div class="col-sm-4 col-md-3 px-0">
								<div class="img-box">
									<img src="images/g2.jpg"/>
									<div class="btn-box">
									<a href="images/g2.jpg" title="Tatto Studio"><i class="fas fa-search" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<!-- end -->
							<!-- imagem 3-->
							<div class="col-sm-6 col-md-3 px-0">
								<div class="img-box">
									<img src="images/g3.jpg"/>
									<div class="btn-box">
									<a href="images/g3.jpg" title="Tatto Studio"><i class="fas fa-search" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<!-- end -->
							<!-- imagem 4 -->
							<div class="col-sm-6 col-md-3 px-0">
								<div class="img-box">
									<img src="images/g4.jpg"/>
									<div class="btn-box">
									<a href="images/g4.jpg" title="Tatto Studio"><i class="fas fa-search" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<!-- end -->
							<!-- imagem 5 -->		
							<div class="col-sm-4 col-md-3 px-0">
								<div class="img-box">
									<img src="images/g5.jpg"/>
									<div class="btn-box">
									<a href="images/g5.jpg" title="Tatto Studio"><i class="fas fa-search" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<!-- end -->
							<!-- imagem 6 -->		
							<div class="col-sm-8 col-md-6 px-0">
								<div class="img-box">
									<img src="images/g6.jpg"/>
									<div class="btn-box">
									<a href="images/g6.jpg" title="Tatto Studio"><i class="fas fa-search" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>			
					</div>
				</div>
			</div>
`;
}

createGallery();