<template>
  <div v-if="showBanner" class="release-banner" ref="releaseBanner">
    <p class="release-text text-xl" ref="releaseText">{{ releaseDate }}</p>
    <button @click='hideBanner' class="close-button">&#x2716;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: true,
      releaseDate: "Date de sortie : 20 novembre 2024",
    };
  },
  methods: {
    hideBanner() {
      this.showBanner = false;
    },
  },
};
</script>

<style scoped>
.release-banner {
  background-color: #081c2a; /* Couleur de fond plus sombre */
  color: #4d9cf0;
  padding: 20px; /* Augmentation de la marge intérieure */
  z-index: 999;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2); /* Légère modification de la ombre */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #00b0ff; /* Bordure bleue */
  
}

.release-text {
  margin: auto;
  white-space: nowrap; /* Empêcher le texte de passer à la ligne */
  
}


.close-button {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 28px; /* Légère augmentation de la taille */
  cursor: pointer;
}
</style>
