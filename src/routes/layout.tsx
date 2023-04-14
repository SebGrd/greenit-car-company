import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/router-head/layout/header';


export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page">
      <Header />
      <main class="container mx-auto">
        <Slot />
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
});
