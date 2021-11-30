<script>
import NavLink from './components/NavLink.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'App',
	components: {
		NavLink,
    HelloWorld
	}
}
</script>

<template>
	<div id="app">
		<nav>
			<NavLink url="/" text="Accueil"/>
      <NavLink url="/about" text="À propos"/>
      <NavLink url="/contact" text="Contact"/>
		</nav>
		<p>Bienvenue sur notre page d'accueil</p>
    <HelloWorld msg="Cafe with a Vue"/>
	</div>
</template>