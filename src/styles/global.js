import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --white: #F8F9FA;
        --lightgray: #868E96;
        --black: #121214;
        --pink: #FF577F;
        --gray: #343B41;
        --darkgray: #212529;
        --red: #E83F5B;
    }

    body {
        background-color: var(--black);
        color: var(--white)
    }

    body, input, button, select, option {
        font-family: "Inter", sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Inter", sans-serif;
        font-size: 700;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
