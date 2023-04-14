import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <section>
      <h1 class="text-3xl md:text-4xl font-bold mb-12">La Marque OPTA</h1>
    </section>
    <section class="xl:flex flex-column mb-24">
      <div class="2xl:w-1/2 xl:w-3/6 w-full bg-gray-300 px-10 py-5">
        <h1 class="text-4xl md:text-5xl font-bold mb-12 mt-5">Notre <br />Histoire</h1>
        <p class="text-lg">Le changement climatique et les pressions réglementaires pour réduire les émissions de gaz à effet de serre ont également stimulé l'intérêt pour les voitures électriques. De nombreux pays ont adopté des politiques pour encourager l'achat de voitures électriques, telles que des subventions ou des incitations fiscales.
          Aujourd'hui, les voitures électriques sont de plus en plus populaires, et de nombreux constructeurs automobiles proposent désormais des modèles électriques pour répondre à la demande croissante.</p>

      </div>
      <picture class="2xl:w-1/2 xl:w-2/3 w-full">
        <source srcSet="/img/rechauffement.webp" type="image/webp" />
        <source srcSet="/img/rechauffement.avif" type="image/avif" />
        <img src="/img/rechauffement.jpg" alt="OPTA UV3" loading="lazy" />
      </picture>
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
