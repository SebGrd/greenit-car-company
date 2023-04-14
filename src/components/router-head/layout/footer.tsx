import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <footer class="container mx-auto bg-gray-900 py-24 px-12 text-white flex justify-between items-start">
            <div>
                <h2 class="text-3xl font-bold">Liens utiles</h2>
                <nav>
                    <ul class="flex flex-wrap">
                        <li class="w-1/2">
                            <a href="/modeles">Nos modèles</a>
                        </li>
                        <li class="w-1/2">
                            <a href="/">Mention légales</a>
                        </li>
                        <li class="w-1/2">
                            <a href="/la-marque">Notre marque</a>
                        </li>
                        <li class="w-1/2">
                            <a href="/">Politiques de confidentialité</a>
                        </li>
                        <li class="w-1/2">
                            <a href="/la-marque#eco">Notre démarche écologique</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <img src="/img/logofooter.svg" alt="OPTA Logo blanc" />
        </footer>
    );
});
