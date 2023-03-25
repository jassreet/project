import {Link} from "react-router-dom";
export default function Header(){
    return(
        <>
            <div class="header-top">
		<div class="container">
			<div class="bottom_header_left">
				<p>
					<span class="fa fa-map-marker" aria-hidden="true"></span>Lyallpur Khalsa College, Jalandhar
				</p>
			</div>
			<div class="bottom_header_right">
				<div class="bottom-social-icons">
					<a class="facebook" href="#">
						<span class="fa fa-facebook"></span>
					</a>
					<a class="twitter" href="#">
						<span class="fa fa-twitter"></span>
					</a>
					<a class="pinterest" href="#">
						<span class="fa fa-pinterest-p"></span>
					</a>
					<a class="linkedin" href="#">
						<span class="fa fa-linkedin"></span>
					</a>
				</div>
				<div class="header-top-righ">
						<Link to="/login">
						<span class="fa fa-sign-out" aria-hidden="true"></span>Login
						</Link>
				</div>
				<div class="clearfix"> </div>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
    <div class="header">
		<div class="content white">
			<nav class="navbar navbar-default">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="index.html">
							<h1>
								<Link to="/"> 
								<span class="fa fa-leanpub" aria-hidden="true"></span>LKC
								</Link>
								<label>Over 100 years of Selfless service to Humanity</label>
							</h1>
						</a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<nav class="link-effect-2" id="link-effect-2">
							<ul class="nav navbar-nav">
								<li class="active">
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
								<Link to="/gallery">
										Gallery
									</Link>
								</li>
								<li>
								<Link to="/contact">
										Contact Us
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</nav>
		</div>
	</div>
        </>
    )
}