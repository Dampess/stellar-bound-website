<template>
  <div class="relative overflow-hidden">
    <!-- Contenu principal -->
    <div class="text-white relative z-11">
      <!-- Menu de navigation -->
      <nav class="bg-darkBlue py-4">
        <div class="container mx-auto flex justify-between items-center">
          <!-- Logo -->
          <h1 class="font-orbitron text-4xl ml-2 font-bold tracking-wider">
            StellarBound
          </h1>
          <!-- Bouton burger pour le menu mobile -->
          <button
            @click="toggleMenu"
            class="block lg:hidden px-3 py-2 text-white focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <!-- Liens de navigation -->
          <ul
            :class="{ hidden: !isMenuOpen }"
            class="lg:flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 mt-4 mr-2 lg:mt-0"
          >
            <li>
              <a
                href="#shop"
                class="font-orbitron text-white transition-colors duration-300 hover:text-cyan-500 border border-transparent hover:border-cyan-500 border-opacity-50 hover:border-opacity-100 px-4 py-2 rounded-md"
                >Shop</a
              >
            </li>
            <li>
              <a
                href="#histoire"
                class="font-orbitron text-white transition-colors duration-300 hover:text-cyan-500 border border-transparent hover:border-cyan-500 border-opacity-50 hover:border-opacity-100 px-4 py-2 rounded-md"
                >Histoire et Univers</a
              >
            </li>
            <li>
              <a
                href="#newsletter"
                class="font-orbitron text-white transition-colors duration-300 hover:text-cyan-500 border border-transparent hover:border-cyan-500 border-opacity-50 hover:border-opacity-100 px-4 py-2 rounded-md"
                >Inscription Newsletter</a
              >
            </li>
          </ul>
        </div>
      </nav>

      <!-- Contenu principal -->
      <div class="container mx-auto pt-16">
        <h2 class="font-orbitron text-4xl font-bold mb-8 text-center">
          Bienvenue dans l'univers captivant de StellarBound
        </h2>
        <p class="font-roboto text-2xl mb-12 text-center">
          Explorez des mondes lointains, combattez des créatures
          extraterrestres, résolvez des mystères cosmiques.
        </p>

        <iframe
          class="mx-auto rounded"
          width="85%"
          height="320"
          src="https://www.youtube.com/embed/Y76r88x-TSI?"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { FeatherIcon } from 'vue-feather-icons'

export default {
  components: {
    FeatherIcon,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped>
/* Styles spécifiques au composant */
video {
  max-width: 80%;
  margin: auto;
  height: auto;
}

ul li a {
  border-radius: 8px; /* Plus arrondi */
  border: 2px solid #ffffff; /* Bordure bleue */
  font-size: 16px; /* Taille de police légèrement augmentée */
  transition: background-color 0.3s ease;
}
</style>
