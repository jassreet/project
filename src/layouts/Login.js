import {Link} from "react-router-dom";
export default function Login(){
    return(
        <>
    <div class="services-breadcrumb">
		<div class="inner_breadcrumb">
			<ul class="short_ls">
				<li>
					<a href="index.html">Home</a>
					<span>| |</span>
				</li>
				<li>Login</li>
			</ul>
		</div>
	</div>
	<div class="register-form-main">
		<div class="container">
			<div class="title-div">
				<h3 class="tittle">
					<span>L</span>ogin
					<span>F</span>orm
				</h3>
				<div class="tittle-style">

				</div>
			</div>
			<div class="login-form">
				<form action="#" method="post">
					<div class="">
						<p>User Name </p>
						<input type="text" class="name" name="user name" required="" />
					</div>
					<div class="">
						<p>Password</p>
						<input type="password" class="password" name="Password" required="" />
					</div>
					<label class="anim">
						<input type="checkbox" class="checkbox"/>
						<span> Remember me ?</span>
					</label>
					<div class="login-agileits-bottom wthree">
						<h6>
							<a href="#">Forgot password?</a>
						</h6>
					</div>
					<input type="submit" value="Login"/>
					<div class="register-forming">
						<p>To Register New Account --
							<Link to="/register">
							  Click Here
							</Link>
						</p>
					</div>
				</form>
			</div>

		</div>
	</div>
        </>
    )
}