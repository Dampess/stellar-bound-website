<template>
  <div class="z-11 relative">
    <div class="container mx-auto p-4">
      <div class="mx-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <!-- Image 1 -->
        <div>
          <img
            src="https://images.ctfassets.net/rporu91m20dc/2atek9zHEFOkmMMje2dFwp/86a8be1e1e405ca2297ea68b98833b48/Starfield_LargeHero_FullDirect.png?fit=fill&w=1200&h=600"
            alt="Description de l'image"
            class="rounded-lg shadow-lg cursor-pointer w-full h-full"
            @click="openImage('https://images.ctfassets.net/rporu91m20dc/2atek9zHEFOkmMMje2dFwp/86a8be1e1e405ca2297ea68b98833b48/Starfield_LargeHero_FullDirect.png?fit=fill&w=1200&h=600')"
          />
        </div>
        <!-- Image 2 -->
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8SC6HcjDObQxYGkj88dgQog017ERd7tEjw&s"
            alt="Description de l'image"
            class="rounded-lg shadow-lg cursor-pointer w-full h-full"
            @click="openImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8SC6HcjDObQxYGkj88dgQog017ERd7tEjw&s')"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIHir-MqWMg9VrYEmcWL6bkdXObYf0Yg4rg&s"
            alt="Description de l'image"
            class="rounded-lg shadow-lg cursor-pointer w-full h-full"
            @click="openImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIHir-MqWMg9VrYEmcWL6bkdXObYf0Yg4rg&s')"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZRUDb2RIvkA2F2iR146YfJvOeDt3lgRjIQ&s"
            alt="Description de l'image"
            class="rounded-lg shadow-lg cursor-pointer w-full h-full"
            @click="openImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZRUDb2RIvkA2F2iR146YfJvOeDt3lgRjIQ&s')"
          />
        </div>
      </div>
      <div
          class="info text-xl text-white text-center mt-4 mx-20 mb-8 border-2 border-white rounded-lg p-4"
        >
          <p class="flex flex-col">
            <div>
            Date de sortie :
            <span class="font-roboto font-bold">20 novembre 2024</span>
            </div>
            <a href="#newsletter" class="underline">Restez informé</a>
          </p>
        </div>
      <!-- Modèle de fenêtre modale -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
        <div class="max-w-3xl min-w-2xl bg-white rounded-lg overflow-hidden scale-150" @click.stop>
          <!-- Contenu de l'image agrandie -->
          <img
            :src="modalImageUrl"
            :alt="modalImageAlt"
            class="w-full h-auto"
          />
          <!-- Bouton de fermeture -->
          <button @click="closeModal" class="absolute top-0 right-0 m-4 text-gray-700">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      modalImageUrl: '',
      modalImageAlt: ''
    };
  },
  methods: {
    openImage(imageUrl) {
      this.modalImageUrl = imageUrl;
      this.modalImageAlt = 'Description de l\'image agrandie';
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>
<style>
.info{
  background-color: #081c2a; /* Bleu très foncé */
  border-radius: 8px; /* Plus arrondi */
  border: 2px solid #00b0ff; /* Bordure bleue */
}
</style>
