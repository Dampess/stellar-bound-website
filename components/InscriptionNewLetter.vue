<template>
  <div class="py-20 bg-blue-900 text-white">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
      <div class="w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0 lg:ml-12">
        <h2 id="newsletter" class="font-orbitron text-4xl font-bold mb-8">Inscription à la Newsletter</h2>
        <p class="font-roboto text-lg mb-8">
          Restez à jour avec les dernières nouvelles de StellarBound en vous
          inscrivant à notre newsletter.
        </p>
      </div>

      <div class="w-full lg:w-1/2">
        <!-- Formulaire d'inscription -->
        <form class="max-w-md mx-auto">
          <div class="mb-6">
            <label for="email" class="font-roboto block text-lg mb-2"
              >Adresse e-mail :</label
            >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre adresse e-mail"
              class="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 bg-gray-100 text-gray-900 placeholder-gray-500"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles spécifiques au composant */
input:focus {
  outline: none;
  border-color: #4d9cf0; /* Bleu vif */
}

button:hover {
  background-color: #2563eb; /* Bleu plus foncé */
}
</style>
