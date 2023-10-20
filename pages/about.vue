<template>
    <div class="">
        <p class="text-3xl">About page</p>
        <nuxt-link to="/"  class="text-blue-500">go back</nuxt-link>
    </div>
</template>

<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>About Us</title>
</head>

<body>
	<header>
		<nav>
			<div class="logo">GeeksforGeeks</div>
			<ul class="nav-links">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	</header>

	<section class="about">
		<h1>About Us</h1>
		<p style="font-weight: bold">GeeksforGeeks is a leading platform...</p>
		<div class="about-info">
			<div class="about-img">
				<img src=
"https://www.reddit.com/r/AnarchyChess/>
			</div>
			<div>
	<p>Anarchy Chess is a leading organization that provides opportunities for chess players and 
				Memesters alike to share their love of chess through memes.
				By sharing chess in a lighthearted way, it allows for people that wouldn't 
				otherwise be exposed to the game to share in it's glory. With memes, all is possible.</p>
				<button>Read More...</button>
			</div>
		</div>
	</section>

	<section class="team">
		<h1>Meet Our Team</h1>
		<div class="team-cards">
			<!-- Cards here -->
			<!-- Card 1 -->
			<div class="card">
				<div class="card-img">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/
business-office-business-woman-professional.jpg" alt="User 1">
				</div>
				<div class="card-info">
					<h2 class="card-name">Jane</h2>
					<p class="card-role">CEO and Founder</p>
					<p class="card-email">jane@example.com</p>
					<p><button class="button">Contact</button></p>
				</div>
			</div>

			<!-- Card 2 -->
			<div class="card">
				<div class="card-img">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/
man-portrait-businessman-male.jpg" alt="User 2">
				</div>
				<div class="card-info">
					<h2 class="card-name">Miller</h2>
					<p class="card-role">Co-Founder</p>
					<p class="card-email">Miller@example.com</p>
					<p><button class="button">Contact</button></p>
				</div>
			</div>
			<!-- Card 3 -->
			<div class="card">
				<div class="card-img">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/
business-office-business-woman-professional.jpg" alt="User 3">
				</div>
				<div class="card-info">
					<h2 class="card-name">Joe</h2>
					<p class="card-role">Co-Founder</p>
					<p class="card-email">Joe@example.com</p>
					<p><button class="button">Contact</button></p>
				</div>
			</div>
		</div>
	</section>

	<footer>
		<p>© 2023 GeeksforGeeks. All Rights Reserved.</p>
	</footer>
</body>

</html>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
/* Global Styles */
body {
	font-family: Arial, sans-serif;
}
/* Header */
header {
	background-color: white;
	color: rgb(0, 0, 0);
	padding: 10px 0;
	position: fixed;
	width: 100%;
	z-index: 100;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px auto;
	padding: 0 20px;
}

.logo {
	font-size: 1.5rem;
	font-weight: bold;
	color: #40b736;
}

.nav-links {
	list-style: none;
	display: flex;
}

.nav-links li {
	margin-right: 20px;
}

.nav-links a {
	color: rgb(0, 0, 0);
	padding: 10px;
	font-weight: bold;
	text-decoration: none;
}

.nav-links a:hover {
	background-color: #40b736;
	border-radius: 4px;
	color: white;
}

/* About Section */
.about {
	background: rgb(224, 251, 222);
	background: linear-gradient(360deg, rgb(245, 255, 245) 0%, rgb(173, 252, 163) 100%);
	padding: 100px 0 20px 0;
	text-align: center;
}

.about h1 {
	font-size: 2.5rem;
	margin-bottom: 20px;
}

.about p {
	font-size: 1rem;
	color: #323030;
	max-width: 800px;
	margin: 0 auto;
}

.about-info {
	margin: 2rem 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: left;
}

.about-img {
	width: 20rem;
	height: 20rem;

}

.about-img img {
	width: 100%;
	height: 100%;
	border-radius: 5px;
	object-fit: contain;
}

.about-info p {
	font-size: 1.3rem;
	margin: 0 2rem;
	text-align: justify;
}

button {
	border: none;
	outline: 0;
	padding: 10px;
	margin: 2rem;
	font-size: 1rem;
	color: white;
	background-color: #40b736;
	text-align: center;
	cursor: pointer;
	width: 15rem;
	border-radius: 4px;
}

button:hover {
	background-color: #1f9405;
}

/* Team Section */
.team {
	padding: 30px 0;
	text-align: center;
}

.team h1 {
	font-size: 2.5rem;
	margin-bottom: 20px;
}

.team-cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 15px;
	margin-top: 20px;
}

.card {
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
	overflow: hidden;
	transition: transform 0.2s, box-shadow 0.2s;
	width: 18rem;
	height: 25rem;
	margin-top: 10px;
}

.card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
}

.card-img {
	width: 18rem;
	height: 12rem;
}

.card-img img {
	width: 100%;
	height: 100%;
	object-fit: fill;
}

.card-info button {
	margin: 2rem 1rem;
}

.card-name {
	font-size: 2rem;
	margin: 10px 0;
}

.card-role {
	font-size: 1rem;
	color: #888;
	margin: 5px 0;
}

.card-email {
	font-size: 1rem;
	color: #555;
}

/* Footer */
footer {
	background-color: #222;
	color: white;
	text-align: center;
	padding: 20px 0;
}

@media (max-width: 768px) {
	nav {
		display: block;
	}

	.logo {
		text-align: center;
	}

	.nav-links {
		margin-top: 1rem;
		justify-content: space-between;
	}

	.nav-links li {
		margin-right: 0;
	}

	.about h1 {
		font-size: 2rem;
	}

	.about p {
		font-size: 0.9rem;
	}

	.about-info {
		flex-direction: column;
		text-align: center;
	}

	.about-img {
		width: 60%;
		height: 60%;
		margin-bottom: 1rem;
	}

	.about-info p {
		margin: 1rem 2rem;
	}

	.about-info button {
		margin: 1rem 2rem;
		width: 10rem;
	}

	.team {
		margin: 0 1rem;
	}
}

