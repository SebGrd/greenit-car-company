// Create a button component

import { component$ } from "@builder.io/qwik";

export default component$((props: any) => {
    return (
        <a class="button" href={props.href}>
            {props.children}
        </a>
    );
}
);