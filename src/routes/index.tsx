import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <section>
      <picture>
        <source srcSet="img/uv3.webp" type="image/webp" />
        <source srcSet="img/uv3.avif" type="image/avif" /> 
        <img src="img/uv3.jpg" alt="OPTA UV3" loading="lazy" />
      </picture>
    </section>
    <section>
      <video width="400" controls id="video-player" title="OPTA Touring">
        <source src="img/nissan-video.mp4" type="video/mp4" />
      </video>
    </section>
    <section>
      <picture >
          <source srcSet="img/greenfactory.webp" type="image/webp" />
          <source srcSet="img/greenfactory.avif" type="image/avif" /> 
          <img src="img/greenfactory.jpg" alt="OPTA Usine" loading="lazy" />
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
