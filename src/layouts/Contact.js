export default function Contact(){
    return(
        <>
          <div class="contact">
		<div class="container">
			<div class="title-div">
				<h3 class="tittle">
					<span>C</span>ontact
					<span>U</span>s
				</h3>
				<div class="tittle-style">

				</div>
			</div>
			<div class="contact-row">
				<div class="col-md-6 contact-text1">
					<h4>Contact Our
						<span>Best Study</span>
					</h4>
					<p>Lyallpur Khalsa College is region’s one of the leading college in sports, academics and cultural activities. It has more than 6000 students with one of the best infrastructure and lush green pollution free campus. 
					</p>
				</div>
				<div class="col-md-6 contact-w3lsright">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13635.497889329656!2d75.57689372389738!3d31.307214401590716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a34518e5f8f%3A0x812b9c9e1bc68287!2sLyallpur%20Khalsa%20College!5e0!3m2!1sen!2sin!4v1679643829520!5m2!1sen!2sin" ></iframe>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<div class="contact-lsleft">
		<div class="container">
			<div class="address-grid">
				<h4>Contact Details</h4>
				<ul class="w3_address">
					<li>
						<span class="fa fa-globe" aria-hidden="true"></span>Lyallpur Khalsa College, Jalandhar
					</li>
					<li>
						<span class="fa fa-envelope-o" aria-hidden="true"></span>
						<a href="mailto:info@example.com"> lkcjald@yahoo.com</a>
					</li>
					<li>
						<span class="fa fa-phone" aria-hidden="true"></span>+91-181-2241466-67
					</li>
				</ul>
			</div>
			<div class="contact-grid agileits">
				<h4>Get In Touch</h4>
				<form action="#" method="post">
					<div class="">
						<input type="text" name="Name" placeholder="Name" required=""/>
					</div>
					<div class="">
						<input type="email" name="Email" placeholder="Email" required=""/>
					</div>
					<div class="">
						<input type="text" name="Phone Number" placeholder="Phone Number" required=""/>
					</div>
					<div class="">
						<textarea name="Message" placeholder="Message..." required=""></textarea>
					</div>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		</div>
	</div>
        </>
    )
}