import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <section>
      Hero
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
