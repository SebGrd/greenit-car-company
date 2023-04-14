// make a qwik component for the header

import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <header>
        <a href='/'>
            <img src="/img/logoheader.svg" alt="" />
            <span>OPTA</span>
        </a>
        <nav>
            <ul>
                <li>
                    <a href="/modeles">Modèles</a>
                </li>
                <li>
                    <a href="/marque">La marque</a>
                </li>
                <li>
                    <a href="/essai-routier">Reserver un essai</a>
                </li>
            </ul>
        </nav>
        </header>
    );
    }
);
