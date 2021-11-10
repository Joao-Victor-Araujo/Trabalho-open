import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
body{
    color: #000000;
    background-color: #093D4E;
    @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
    font-family: 'Open Sans', sans-serif;
}
`;

export default Base;
