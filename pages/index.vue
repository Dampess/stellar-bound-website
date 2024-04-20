<template>
  <div>
    <AlertBanner />
    <div class="background-image-container bg-darkBlue">
      <!-- Composant Accueil -->
      <Accueil />
      <Galerie />
    </div>
    <div class="background-image-container3 bg-darkBlue">
      <TheShop />
    </div>
    <div class="background-image-container4 bg-darkBlue">
    <!-- Composant HistoireEtUnivers -->
    <HistoireEtUnivers />
    </div>
    <div class="background-image-container2 bg-darkBlue">
      <!-- Composant InscriptionNewsletter -->
      <InscriptionNewLetter />
    </div>
    <Footer />
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
.background-image-container2 {
  position: relative;
  height: 60vh; /* 100% de la hauteur de la fenêtre */
}
.background-image-container3 {
  position: relative;
  height: 130vh; /* 100% de la hauteur de la fenêtre */
}
.background-image-container4 {
  position: relative;
  height: 175vh; /* 100% de la hauteur de la fenêtre */
  z-index: 10;
}

.background-image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./static/background-image.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.background-image-container2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./static/background-image2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.background-image-container3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./static/background-image3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.background-image-container4::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./static/background-image4.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.background-image-container:hover::before {
  opacity: 0.4; /* Opacité au survol */
}
.background-image-container2:hover::before {
  opacity: 0.4; /* Opacité au survol */
}
.background-image-container3:hover::before {
  opacity: 0.4; /* Opacité au survol */
}
.background-image-container4:hover::before {
  opacity: 0.4; /* Opacité au survol */
}
</style>
