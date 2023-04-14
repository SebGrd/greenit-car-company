// make a qwik component for the header

import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <header class="container mx-auto py-8 flex justify-between items-center">
            <a href='/' class="flex items-center gap-4">
                <img src="/img/logoheader.svg" alt="" />
                <span class="text-6xl font-bold">OPTA</span>
            </a>
            <nav>
                <ul class="flex justify-end items-center gap-6">
                    <li>
                        <a class="font-medium text-xl" href="/modeles">Modèles</a>
                    </li>
                    <li>
                        <a class="font-medium text-xl" href="/marque">La marque</a>
                    </li>
                    <li>
                        <a class="font-medium text-xl" href="/essai-routier">Reserver un essai</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
    }
);
