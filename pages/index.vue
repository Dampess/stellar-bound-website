<template>
  
  <div>
    <AlertBanner/>
    <div class="background-image-container bg-darkBlue">
    <!-- Composant Accueil -->
    <Accueil />
    <Galerie />
    </div>
    <TheShop/>

    

    <!-- Composant HistoireEtUnivers -->
    <HistoireEtUnivers />

    <!-- Composant InscriptionNewsletter -->
    <InscriptionNewLetter />

    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.background-image-container {
 position: relative;
  height: 175vh; /* 100% de la hauteur de la fenêtre */
}

.background-image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('~/static/background-image.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.1; /* Opacité de 60% */
}
</style>
