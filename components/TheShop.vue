<template>
  <div class="py-20 bg-gradient-to-b from-gray-800 to-gray-400 text-white">
    <div class="container mx-auto p-4">
      <h2 id="shop" class="font-orbitron text-4xl font-bold mb-8">Le Shop</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Item 1: Tee-shirt -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/300" alt="Tee-shirt StellarBound" class="w-full h-64 object-cover mb-4 rounded-lg">
          <h3 class="font-orbitron text-xl font-bold mb-2">Tee-shirt StellarBound</h3>
          <p class="font-roboto text-gray-400 mb-4">Disponible en tailles S, M, L, XL</p>
          <p class="font-roboto text-lg font-bold text-blue-500">Prix : $20</p>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">Acheter maintenant</button>
        </div>

        <!-- Item 2: Porte-clés -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/300" alt="Porte-clés StellarBound" class="w-full h-64 object-cover mb-4 rounded-lg">
          <h3 class="font-orbitron text-xl font-bold mb-2">Porte-clés StellarBound</h3>
          <p class="font-roboto text-gray-400 mb-4">Porte-clés en métal avec logo gravé</p>
          <p class="font-roboto text-lg font-bold text-blue-500">Prix : $10</p>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">Acheter maintenant</button>
        </div>

        <!-- Item 3: Poster -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/300" alt="Poster StellarBound" class="w-full h-64 object-cover mb-4 rounded-lg">
          <h3 class="font-orbitron text-xl font-bold mb-2">Poster StellarBound</h3>
          <p class="font-roboto text-gray-400 mb-4">Poster haute qualité 18x24 pouces</p>
          <p class="font-roboto text-lg font-bold text-blue-500">Prix : $15</p>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">Acheter maintenant</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Script ici si nécessaire
}
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
