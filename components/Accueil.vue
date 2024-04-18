<template>
  <div class="relative overflow-hidden">
    <!-- Fond d'étoiles -->
    <div class="absolute inset-0 z-0">
      <!-- Fond d'étoiles -->
      <div class="absolute inset-0 z-15">
        <!-- Planète 1 -->
        <div
          class="planet"
          style="top: 30%; left: 50%; animation-delay: 0s"
        ></div>
        <!-- Planète 2 -->
        <div
          class="planet"
          style="top: 60%; left: 70%; animation-delay: 3s"
        ></div>
        <!-- Ajoutez plus de planètes ici -->
      </div>
      <!-- Ajoutez plus d'étoiles ici -->
    </div>

    <!-- Contenu principal -->
    <div
      class="bg-gradient-to-b from-black to-gray-800 bg-opacity-90 text-white relative z-10"
    >
      <!-- Menu de navigation -->
      <nav class="bg-gray-900 py-4">
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
            :class="{ 'hidden': !isMenuOpen }"
            class="lg:flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 mt-4 mr-2 lg:mt-0"
          >
            <li>
              <a href="#shop" class="font-orbitron hover:text-gray-300"
                >Shop</a
              >
            </li>
            <li>
              <a href="#galerie" class="font-orbitron hover:text-gray-300"
                >Galerie</a
              >
            </li>
            <li>
              <a href="#histoire" class="font-orbitron hover:text-gray-300"
                >Histoire et Univers</a
              >
            </li>
            <li>
              <a href="#newsletter" class="font-orbitron hover:text-gray-300"
                >Inscription Newsletter</a
              >
            </li>
          </ul>
        </div>
      </nav>

      <!-- Contenu principal -->
      <div class="container mx-auto py-8">
        <h2 class="font-orbitron text-4xl font-bold mb-8 text-center">
          Bienvenue dans l'univers captivant de StellarBound
        </h2>
        <p class="font-roboto text-2xl mb-12 text-center">
          Explorez des mondes lointains, combattez des créatures
          extraterrestres, résolvez des mystères cosmiques.
        </p>
        <div class="w-full mb-12 flex justify-center">
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              class="mx-auto"
              width="1080"
              height="465"
              src="https://www.youtube.com/embed/Y76r88x-TSI?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div
          class="text-xl text-center mx-12 mb-8 border-2  border-white rounded-lg p-4"
        >
          <p class="flex flex-col">
            <div>
            Date de sortie :
            <span class="font-roboto font-bold">20 novembre 2024</span>
            </div>
            <a href="#newsletter" class="underline">Restez informé</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav ul li {
  list-style: none;
}

nav ul li a {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}

video {
  max-width: 80%;
  margin: auto;
  height: auto;
}
.planet {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  animation: planetMove 10s infinite linear;
}

@keyframes planetMove {
  from {
    transform: translateY(-100vh);
  }
  to {
    transform: translateY(100vh);
  }
}
</style>
