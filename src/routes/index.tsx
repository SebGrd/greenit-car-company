import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <section class="xl:flex flex-column mb-24">
      <div class="2xl:w-1/2 xl:w-3/6 w-full bg-gray-300 px-12 py-24">
        <h1 class="text-4xl md:text-6xl font-bold mb-12">La nouvelle <br/>UV3®</h1>
        <p class="text-xl mb-8">Vous avez toujours voulu rouler dans un véhicule qui soit à la fois comfortable, spacieux, performant et écologique ? Notre nouvelle voiture, la UV3 est faite pour vous.</p>
        <div class="flex items-center gap-2">
          <a href="/modeles/uv3" class="bg-white text-black py-2 px-4 font-medium">En savoir plus</a>
          <a href="/" class="bg-black text-white py-2 px-4">Reserver un essai</a>
        </div>
      </div>
      <picture class="2xl:w-1/2 xl:w-2/3 w-full">
        <source srcSet="img/uv3.webp" type="image/webp" />
        <source srcSet="img/uv3.avif" type="image/avif" /> 
        <img src="img/uv3.jpg" alt="OPTA UV3" loading="lazy" />
      </picture>
    </section>

    <section class="py-24">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-center">UV3® Touring</h2>
      <p class="text-center mb-4">Le confort avant tout.</p>
      <video width="100%" controls id="video-player" title="OPTA Touring">
        <source src="img/nissan-video.mp4" type="video/mp4" />
      </video>
    </section>


    <section class="xl-flex mb-24 py-24">
      <picture class="xl:w-2/3 w-full">
        <source srcSet="img/greenfactory.webp" type="image/webp" />
        <source srcSet="img/greenfactory.avif" type="image/avif" /> 
        <img src="img/greenfactory.jpg" width="100%" alt="OPTA Usine" loading="lazy" />
      </picture>
      <div class="xl:w-1/3 w-full bg-gray-300 px-12 py-24">
        <h1 class="text-3xl md:text-4xl font-bold mb-8">Des usines <br/>propres</h1>
        <p class="text-xl mb-4">Aucun rejet de CO2 ou GES en 2023. Nos usines sont les seules au monde à en être capable.</p>
        <p class="text-xl mb-4">Toute l’éléctricité consommée est verte et nous y tenons.</p>
        <p class="text-xl mb-4">La toiture en herbe c’est juste pour faire cool.</p>
      </div>
    </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'OPTA - Eco friendly cars',
  meta: [
    {
      name: 'description',
      content: 'We make the best eco friendly cars in the world. From small cars to big SUVs, we are changing the automotive industry.',
    },
  ],
};
