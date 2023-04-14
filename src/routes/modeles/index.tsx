import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <section>
        <h1 class="text-4xl md:text-6xl font-bold text-center py-24">Nos modèles</h1>
        <article class="md:flex md:gap-8 mb-24">
          <div class="h-72 w-fuul md:h-48 md:w-96 flex items-center justify-center overflow-hidden">
            <picture class="h-full w-full mb-8 md:mb-0">
              <source srcSet="/img/uv3.webp" type="image/webp" />
              <source srcSet="/img/uv3.avif" type="image/avif" />
              <img src="/img/uv3.jpg" alt="UV3" class="w-full h-full object-cover" loading='lazy' />
            </picture>
          </div>
          <div>
            <h2 class="text-4xl md:text-6xl font-bold">UV3</h2>
            <p class="text-xl md:text-2xl mb-8">Notre SUV le plus polyvalent, alliant confort, espace et performances.</p>
            <a href="/modeles/uv3" class="bg-black text-white py-2 px-4">En savoir plus</a>
          </div>
        </article>
        <article class="md:flex md:gap-8 mb-24">
          <div class="h-72 w-fuul md:h-48 md:w-96 flex items-center justify-center overflow-hidden">
            <picture class="h-full w-full mb-8 md:mb-0">
              <source srcSet="/img/uv4.webp" type="image/webp" />
              <source srcSet="/img/uv4.avif" type="image/avif" />
              <img src="/img/uv4.jpg" alt="UV3" class="w-full h-full object-cover" loading='lazy' />
            </picture>
          </div>
          <div>
            <h2 class="text-4xl md:text-6xl font-bold">UV4</h2>
            <p class="text-xl md:text-2xl mb-8">Le vehicule le plus spacieux de la gamme. La UV4 saura répondre à tous vos besoin.</p>
            <a href="/modeles/" class="bg-black text-white py-2 px-4">En savoir plus</a>
          </div>
        </article>
        <article class="md:flex md:gap-8 mb-24">
          <div class="h-72 w-fuul md:h-48 md:w-96 flex items-center justify-center overflow-hidden">
            <picture class="h-full w-full mb-8 md:mb-0">
              <source srcSet="/img/uvf.webp" type="image/webp" />
              <source srcSet="/img/uvf.avif" type="image/avif" />
              <img src="/img/uvf.jpg" alt="UV3" class="w-full h-full object-cover" loading='lazy' />
            </picture>
          </div>
          <div>
            <h2 class="text-4xl md:text-6xl font-bold">UV-F GT</h2>
            <p class="text-xl md:text-2xl mb-8">Des allures futuriste mélant sportivité et écologie, la UV-F GT represente le dynamisme à l'état pur.</p>
            <a href="/modeles/" class="bg-black text-white py-2 px-4">En savoir plus</a>
          </div>
        </article>
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
