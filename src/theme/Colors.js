import { createGlobalStyle, css } from "styled-components";

const Colors = css `
    :root {
        --color-primary: #1B718A;
        --color-secondary: #042537;
        --color-orange: #F1931B;
        --color-cream: #F1E9E8;
    }
`

const Color = createGlobalStyle `
    ${Colors}
`;

export default Color;