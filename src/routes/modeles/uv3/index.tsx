import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <section>
        <div class="lg:h-[800px] flex justify-center items-center overflow-hidden">
          <picture class="w-full">
            <source srcSet="/img/uv3.webp" type="image/webp" />
            <source srcSet="/img/uv3.avif" type="image/avif" />
            <img src="/img/uv3.jpg" width="100%" alt="OPTA Usine" loading="lazy" />
          </picture>
        </div>
        <h1 class="text-4xl lg:text-6xl font-bold text-center py-4 mb-24">La nouvelle UV3®</h1>
      </section>

      <section class="flex justify-between items-center mb-24 px-8 sm:px-0">
        <div class="w-5/6 md:w-2/3">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8">Les avantages UV3®</h2>
          <p class="font-medium text-xl mb-8">Vous pouvez désormais rouler dans un véhicule sportif, spacieux et comfortable. Tout cela en gardant notre ADN écologique.</p>
          <a href="/" class="bg-black text-white py-2 px-4">Reserver un essai</a>
        </div>
        <img src="/img/cutrightlogo.svg" alt="Logo coupé droit OPTA" class="hidden md:block w-24 md:w-48 xl:w-auto" />
      </section>

      <section class="flex justify-center flex-wrap gap-24 bg-gray-200 py-8">
        <div>
          <p class="text-center text-3xl font-bold">200km</p>
          <p class="text-center text-xl font-medium">Autonomie éléctrique</p>
        </div>
        <div>
          <p class="text-center text-3xl font-bold">700km</p>
          <p class="text-center text-xl font-medium">Autonomie totale</p>
        </div>
        <div>
          <p class="text-center text-3xl font-bold">530ch</p>
          <p class="text-center text-xl font-medium">Puissance</p>
        </div>
        <div>
          <p class="text-center text-3xl font-bold">7</p>
          <p class="text-center text-xl font-medium">Places</p>
        </div>
      </section>

      <section class="md:flex my-12 lg:my-24">
        <picture class="w-full lg:w-1/3">
          <source srcSet="/img/cockpit.webp" type="image/webp" />
          <source srcSet="/img/cockpit.avif" type="image/avif" />
          <img src="/img/cockpit.jpg" width="100%" alt="OPTA Usine" loading="lazy" />
        </picture>
        <div class="w-full lg:w-2/3 px-12 py-8 lg:py-24">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4">Un tableau de bord <br /> soigné</h2>
          <p class="font-medium text-xl">Rien ne doit vous ditraire. Pour cela nous avons créé un tableau de bord intelligent qui s’adapte à vos besoin afin de garder les yeux sur la route.</p>
        </div>
      </section>
      <section class="flex flex-col md:flex-row my-12 lg:my-24">
        <div class="w-full lg:w-2/3 px-12 py-8 lg:py-24 order-last">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4">Beaucoup <br/> de place</h2>
          <p class="font-medium text-xl">Avec ses 7 sièges dont 2 rabattable. La UV3 vous accompagnera dans tous vos voyages, Familial comme professionel.</p>
        </div>
        <picture class="w-full lg:w-1/3">
          <source srcSet="/img/steats.webp" type="image/webp" />
          <source srcSet="/img/steats.avif" type="image/avif" />
          <img src="/img/steats.jpg" width="100%" alt="OPTA Usine" loading="lazy" />
        </picture>
      </section>
      <section class="md:flex my-12 lg:my-24">
        <picture class="w-1/3">
          <source srcSet="/img/engine.webp" type="image/webp" />
          <source srcSet="/img/engine.avif" type="image/avif" />
          <img src="/img/engine.jpg" width="100%" alt="OPTA Usine" loading="lazy" />
        </picture>
        <div class="w-full lg:w-2/3 px-12 py-8 lg:py-24">
          <h2 class="text-3xl lg:text-5xl font-bold mb-4">Hydro-Hybrid technology</h2>
          <p class="font-medium text-xl">Notre moteur unique au monde combine éléctrique et hydrogène afin d’offrir de très bonnes performances tout en consommant le moins possible.</p>
        </div>
      </section>


      <section class="flex flex-col md:flex-row items-start gap-8 md:justify-between bg-gray-200 py-8 px-12 mb-24">
        <div>
          <p class="text-xl md:text-4xl font-bold">Votre UV3® à partir de</p>
          <p class="text-3xl md:text-6xl font-bold">370€<span class="text-xl">/mois</span></p>
        </div>
        <body>
          <div class="flex justify-center items-center">
            <div class="flex flex-col justify-center items-center">
              <a href="/" class="bg-black text-white py-2 px-4">Reserver un essai</a>
              <a href="/" class="text-black py-2 px-4">Voir les conditions</a>
            </div>
          </div>
        </body>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'OPTA - Nouveau UV3®',
  meta: [
    {
      name: 'description',
      content: 'La nouvelle UV3® est un véhicule sportif, spacieux et comfortable. Tout cela en gardant notre ADN écologique.',
    },
  ],
};
