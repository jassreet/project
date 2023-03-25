import {Link} from "react-router-dom";
export default function Footer(){
    return(
        <>
          <div class="mkl_footer">
		<div class="sub-footer">
			<div class="container">
				<div class="mkls_footer_grid">
					<div class="col-xs-4 mkls_footer_grid_left">
						<h4>Location:</h4>
						<p> Khalsa College Entrance, Mohyal Nagar,
							<br/> Jalandhar, Punjab 144008.</p>
					</div>
					<div class="col-xs-4 mkls_footer_grid_left">
						<h4>Mail Us:</h4>
						<p>
							<span>Phone : </span>+91-181-2241466-67</p>
						<p>
							<span>Email : </span>
							<a href="mailto:info@example.com">lkcjald@yahoo.com</a>
						</p>
					</div>
					<div class="col-xs-4 mkls_footer_grid_left">
						<h4>Opening Hours:</h4>
						<p>Working days : 8am-4pm</p>
						<p>Sunday
							<span>(closed)</span>
						</p>
					</div>
					<div class="clearfix"> </div>
				</div>
				<div class="botttom-nav-allah">
					<ul>
						<li>
						<Link to="/">
										Home
									 </Link>
						</li>
						<li>
						<Link to="/about">
										About Us
									</Link>
						</li>
						<li>
						<Link to="/courses">
										Courses
									</Link>
						</li>
						<li>
						<Link to="/join">
										Join Us
									</Link>
						</li>
						<li>
						<Link to="/contact">
										Contact Us
									</Link>
						</li>
					</ul>
				</div>
				<div class="footer-middle-thanks">
					<h2>Thanks For watching</h2>
				</div>
			</div>
		</div>
		<div class="footer-copy-right">
			<div class="container">
				<div class="footercopy-social">
					<ul>
						<li>
							<a href="#">
								<span class="fa fa-facebook"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="fa fa-twitter"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="fa fa-rss"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="fa fa-vk"></span>
							</a>
						</li>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
        </>
    )
}