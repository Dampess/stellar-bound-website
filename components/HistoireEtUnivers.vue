<template>
  <div class="bg-gradient-to-b from-gray-800 to-darkBlue text-white">
    <div class="container mx-auto p-8">
      <h2 id="histoire" class="font-orbitron text-4xl font-bold mb-8">Histoire et Univers</h2>
      <p class="font-roboto mb-8">Plongez dans le scénario passionnant et l'univers riche de StellarBound, où chaque planète cache ses propres secrets et dangers.</p>
      
      <!-- Contenu détaillé sur l'histoire et l'univers -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contenu de l'histoire -->
        <div class="rounded-lg overflow-hidden bg-gray-900 p-6">
          <h3 class="font-orbitron text-2xl font-bold mb-4">Scénario</h3>
          <p class=" font-roboto mb-4">Dans StellarBound, vous incarnez un explorateur interstellaire chargé de découvrir de nouveaux mondes et de percer les mystères de l'univers. Vous devrez naviguer à travers des galaxies inconnues, affronter des créatures extraterrestres et résoudre des énigmes cosmiques pour atteindre votre objectif ultime.</p>
          <p class=" font-roboto mb-4">Votre voyage vous emmènera dans des environnements diversifiés, des jungles luxuriantes aux déserts arides, des océans profonds aux montagnes glacées. Chaque planète que vous explorez révèle des histoires uniques et des défis stimulants.</p>
          <p class=" font-roboto mb-4">Préparez-vous à vivre une aventure épique à travers les étoiles, où chaque décision que vous prenez affectera le destin de l'univers.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT230WzI9iJ5zhe4OhmaaHMazT7tQMYaL0Qyw&s" alt="Illustration du scénario" class="w-full rounded-lg shadow-lg mb-4">
        </div>
        
        <!-- Contenu sur l'univers -->
        <div class="rounded-lg overflow-hidden bg-gray-900 p-6">
          <h3 class="font-orbitron text-2xl font-bold mb-4">Univers</h3>
          <p class="font-roboto mb-4">StellarBound présente un univers vaste et diversifié, composé de milliers de systèmes solaires et de planètes à explorer. Chaque planète possède ses propres caractéristiques uniques, des paysages magnifiques aux écosystèmes étranges.</p>
          <p class="font-roboto mb-4">L'univers de StellarBound est peuplé de civilisations extraterrestres, de factions rivales et de mystérieuses entités cosmiques. À mesure que vous explorez cet univers, vous découvrirez des histoires fascinantes, des alliances improbables et des conflits interstellaires.</p>
          <p class="font-roboto mb-4">Aventurez-vous dans l'inconnu, découvrez des mondes inexplorés et forgez votre propre destin dans StellarBound.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHW3TrexXriBtXwrcUP1k2Dz_Q0iaWOin8Q&s" alt="Illustration de l'univers" class="w-full mt-10 rounded-lg shadow-lg mb-4">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles spécifiques au composant */
h2 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ombre portée sur le titre */
}

p {
  letter-spacing: 0.5px; /* Espacement des lettres légèrement augmenté */
}

.grid > div {
  border: 2px solid #2563eb; /* Bordure bleue autour des conteneurs */
}

img {
  filter: brightness(80%) contrast(120%); /* Augmente le contraste et réduit la luminosité des images */
}
</style>
