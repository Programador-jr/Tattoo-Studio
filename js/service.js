const createService = () => {
    let service = document.querySelector('service');

    service.innerHTML = `
<section class="service_section layout_padding">
		    <div class="container">
		      <div class="heading_container heading_center">
		        <h2>O que nós fazemos</h2>
		      </div>
		      <div class="row">
		        <div class="col-md-4">
		          <div class="box">
		            <div class="img-box">
		              <img src="images/s1.png" alt="">
		            </div>
		            <div class="detail-box">
		              <h5>
		                Tatuagem
		              </h5>
		              <p>Odio vero voluptatibus excepturi in, dolor neque nesciunt reiciendis saepe veniam, pariatur fuga, nam voluptatum minima id? Quod omnis nisi.</p>
		            </div>
		          </div>
		        </div>
		        <div class="col-md-4">
		          <div class="box">
		            <div class="img-box">
		              <img src="images/s2.png" alt="">
		            </div>
		            <div class="detail-box">
		              <h5>
		                Piercing
		              </h5>
		              <p>
		                Odio vero voluptatibus excepturi in, dolor neque nesciunt reiciendis saepe veniam, pariatur fuga, nam voluptatum minima id? Quod omnis nisi.
		              </p>
		            </div>
		          </div>
		        </div>
		        <div class="col-md-4">
		          <div class="box">
		            <div class="img-box">
		              <img src="images/s3.png" alt="">
		            </div>
		            <div class="detail-box">
		              <h5>Desenho de tatuagem</h5>
		              <p>Odio vero voluptatibus excepturi in, dolor neque nesciunt reiciendis saepe veniam, pariatur fuga, nam voluptatum minima id? Quod omnis nisi.</p>
		            </div>
		          </div>
		        </div>
		      </div>
		  </section>
`;
}

createService();