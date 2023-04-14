import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <header class="container mx-auto py-8 px-8 sm:px-0 flex flex-col lg:flex-row md:justify-between items-center">
            <a href='/' class="flex items-center gap-4 mb-8 lg:mb-0">
                <img src="/img/logoheader.svg" alt="logo OPTA" class="w-10 sm:w-auto" />
                <span class="hidden sm:inline sm:text-4xl lg:text-6xl font-bold">OPTA</span>
            </a>
            <nav>
                <ul class="flex justify-end items-center gap-6">
                    <li>
                        <a class="font-medium lg:text-xl" href="/modeles">Modèles</a>
                    </li>
                    <li>
                        <a class="font-medium lg:text-xl" href="/la-marque">La marque</a>
                    </li>
                    <li>
                        <a class="font-medium lg:text-xl" href="/essai-routier">Reserver un essai</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
    }
);
