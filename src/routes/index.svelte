<svelte:head>
	<title>Birdhouse - Rust game development with Bevy</title>
	<meta name="description" content="Learn to develop games in Rust using the Bevy game engine." />
</svelte:head>

<template>
	<header>
		<img class="logo" src="/img/logo.png" alt="Birdhouse, Rust game development with Bevy" />
		<h1>Birdhouse</h1>
	</header>
	<main>
		<p>
			We're building a platform for game development in Rust using
			<a href="https://bevyengine.org">the Bevy game engine.</a>
			<br />
			<br />
			Check out
			<a href="https://www.youtube.com/channel/UCMwSZq-wKJW2e0DgG1GOi8Q">the Birdhouse channel</a
			>
			for tutorials, devlogs, and updates about Bevy.
			<br />
			<br />
			Full game courses are currently being developed. If you're interested in learning game development
			in Rust, or want to get involved with the Birdhouse project, come join us on Discord!
		</p>
		<a href="https://discord.gg/VkRaekQc6b">
			<img class="discord" src="/img/discord.png" alt="Join us on Discord" />
		</a>
	</main>
</template>

<style lang="scss">
	header {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding-top: 32px;
		img {
			width: 120px;
		}
		h1 {
			font-family: var(--FONT-FAMILY-BALOO-PAAJI);
			font-size: 64px;
			margin-top: 48px;
			line-height: 1;
		}
	}
	main {
		margin-top: 48px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 48px;
		p {
			text-align: center;
			max-width: 720px;
			line-height: 1.5;
		}
		.discord {
			width: 256px;
		}
	}
</style>
