<template>
  <div class="bg-gradient-to-b from-darkBlue to-gray-800 text-white">
    <div class="container mx-auto p-8">
      <h2 id="shop" class="font-orbitron text-4xl font-bold mb-8">Le Shop</h2>
      <!-- Carousel des items -->
      <div class="carousel">
        <!-- Item 1: Tee-shirt -->
        <div class="item">
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Tee-shirt StellarBound"
              class="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h3 class="font-orbitron text-xl font-bold mb-2">
              Tee-shirt StellarBound
            </h3>
            <p class="font-roboto text-gray-400 mb-4">
              Disponible en tailles S, M, L, XL
            </p>
            <p class="font-roboto text-lg font-bold text-blue-500">
              Prix : $20
            </p>
            <button
              class="btn bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Acheter maintenant
            </button>
          </div>
        </div>

        <!-- Item 2: Porte-clés -->
        <div class="item">
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Porte-clés StellarBound"
              class="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h3 class="font-orbitron text-xl font-bold mb-2">
              Porte-clés StellarBound
            </h3>
            <p class="font-roboto text-gray-400 mb-4">
              Porte-clés en métal avec logo gravé
            </p>
            <p class="font-roboto text-lg font-bold text-blue-500">
              Prix : $10
            </p>
            <button
              class="btn bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Acheter maintenant
            </button>
          </div>
        </div>

        <!-- Item 3: Poster -->
        <div class="item">
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Poster StellarBound"
              class="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h3 class="font-orbitron text-xl font-bold mb-2">
              Poster StellarBound
            </h3>
            <p class="font-roboto text-gray-400 mb-4">
              Poster haute qualité 18x24 pouces
            </p>
            <p class="font-roboto text-lg font-bold text-blue-500">
              Prix : $15
            </p>
            <button
              class="btn bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Acheter maintenant
            </button>
          </div>
        </div>

        <!-- Item 4: Ajoutez plus d'items ici -->
        <div class="item">
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Nouvel article"
              class="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h3 class="font-orbitron text-xl font-bold mb-2">Nouvel article</h3>
            <p class="font-roboto text-gray-400 mb-4">
              Description de l'article
            </p>
            <p class="font-roboto text-lg font-bold text-blue-500">
              Prix : $25
            </p>
            <button
              class="btn bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Acheter maintenant
            </button>
          </div>
        </div>

        <div class="item">
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Nouvel article"
              class="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h3 class="font-orbitron text-xl font-bold mb-2">Nouvel article</h3>
            <p class="font-roboto text-gray-400 mb-4">
              Description de l'article
            </p>
            <p class="font-roboto text-lg font-bold text-blue-500">
              Prix : $30
            </p>
            <button
              class="btn bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Acheter maintenant
            </button>
          </div>
        </div>

        <div class="item">
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Nouvel article"
              class="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h3 class="font-orbitron text-xl font-bold mb-2">Nouvel article</h3>
            <p class="font-roboto text-gray-400 mb-4">
              Description de l'article
            </p>
            <p class="font-roboto text-lg font-bold text-blue-500">
              Prix : $35
            </p>
            <button
              class="btn bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Acheter maintenant
            </button>
          </div>
        </div>

        <!-- Ajoutez plus d'items ici -->
      </div>
      <div class="flex justify-between items-center mt-10">
        <!-- Boutons de navigation du carousel -->
        <button
          class="prev  top-1/2 left-0 transform -translate-y-1/2  text-white px-4 py-2 rounded-full z-10 transition duration-300 ease-in-out"
          @click="prevSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M224 88v80a16 16 0 0 1-16 16h-80v40a8 8 0 0 1-13.66 5.66l-96-96a8 8 0 0 1 0-11.32l96-96A8 8 0 0 1 128 32v40h80a16 16 0 0 1 16 16"
            />
          </svg>
        </button>
        <button
          class="next top-1/2 right-0 transform -translate-y-1/2  text-white px-4 py-2 rounded-full z-10  transition duration-300 ease-in-out"
          @click="nextSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="m237.66 133.66l-96 96A8 8 0 0 1 128 224v-40H48a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h80V32a8 8 0 0 1 13.66-5.66l96 96a8 8 0 0 1 0 11.32"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      itemWidth: 0,
      carouselContainer: null, // Ajout d'une référence au conteneur du carousel
      carouselItems: [],
    }
  },
  mounted() {
    // Calcul de la largeur d'un item
    const item = document.querySelector('.item')
    this.itemWidth = item.offsetWidth

    // Récupération des items du carousel
    this.carouselItems = document.querySelectorAll('.item')

    // Récupération du conteneur du carousel
    this.carouselContainer = document.querySelector('.carousel')
  },
  methods: {
    nextSlide() {
      // Calcul du nombre d'items affichés par slide (3 dans notre cas)
      const itemsPerSlide = 3

      // Incrémentation de l'index pour afficher le prochain slide
      this.currentIndex++

      // Vérification si l'index dépasse le nombre total d'items
      if (this.currentIndex + itemsPerSlide > this.carouselItems.length) {
        // Si l'index dépasse, revenir au début du carousel
        this.currentIndex = 0
      }

      // Calcul du décalage pour le prochain slide
      const offset = this.currentIndex * itemsPerSlide * this.itemWidth

      // Déplacement dans le conteneur du carousel
      this.carouselContainer.scrollTo({
        left: offset,
        behavior: 'smooth', // Ajout d'un effet de glissement
      })
    },
    prevSlide() {
      // Calcul du nombre d'items affichés par slide (3 dans notre cas)
      const itemsPerSlide = 3

      // Décrémentation de l'index pour afficher le slide précédent
      this.currentIndex--

      // Vérification si l'index est inférieur à 0
      if (this.currentIndex < 0) {
        // Si l'index est inférieur à 0, passer au dernier groupe d'items
        const lastIndex =
          Math.ceil(this.carouselItems.length / itemsPerSlide) - 1
        this.currentIndex = lastIndex
      }

      // Calcul du décalage pour le slide précédent
      const offset = this.currentIndex * itemsPerSlide * this.itemWidth

      // Déplacement dans le conteneur du carousel
      this.carouselContainer.scrollTo({
        left: offset,
        behavior: 'smooth', // Ajout d'un effet de glissement
      })
    },
  },
}
</script>

<style scoped>
/* Styles spécifiques au composant */

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  overflow: hidden;
}

.btn {
  background-color: #081c2a; /* Bleu très foncé */
  color: #fff; /* Texte blanc */
  padding: 12px 24px; /* Légèrement plus grand */
  border-radius: 8px; /* Plus arrondi */
  border: 2px solid #00b0ff; /* Bordure bleue */
  font-size: 16px; /* Taille de police légèrement augmentée */
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #00478c; /* Variation de bleu foncé */
}

.item {
  flex: 0 0 calc(80% / 3);
  margin-right: 1%;
  transition: transform 0.5s ease;

}

.prev,
.next {
  transform: translateY(-50%);
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 1;
 background-color: #081c2a; /* Bleu très foncé */
  border-radius: 8px; /* Plus arrondi */
  border: 2px solid #00b0ff; /* Bordure bleue */
  font-size: 16px; /* Taille de police légèrement augmentée */
  transition: background-color 0.3s ease;
}
.prev:hover, .next:hover{
  background-color: #00478c;
}
.prev {
  left: 0;
  z-index: 20;
}

.next {
  right: 0;
  z-index: 20;
}
</style>
