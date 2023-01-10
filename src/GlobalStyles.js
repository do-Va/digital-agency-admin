import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

:root {
  /* *** FONTS *** */  
  --fs-sm: 0.875rem; // 14px
  --fs-base: clamp(1rem, 0.34vw + 0.91rem, 1.125rem); // 16px - 18px
  --fs-md: 1.125rem; // 18px
  --fs-lg: 1.75rem; // 28px
  --fs-xl: clamp(2.5rem, 3vw, 3.375rem); // 40px - 54px
  --fs-xxl: 4rem; // 64px
  --fs-xxxl: clamp(2.5rem, 5.3vw, 4.75rem); // 40px - 76px

  --fw-regular: 400;
  --fw-bold: 700;
  --fw-black: 900;


  --ff-londrina: 'Londrina Outline', cursive;
  --ff-merriweather: 'Merriweather', serif;
  /* *** END OF FONTS *** */

  --logo-size: clamp(5.1875rem, 10vw + 2.17rem, 8rem);

  /* *** COLORS *** */ 
  --red: #FF5678;
  --dark-blue: #020E35;
  --pink: #FFDDE4;
  --white: #FFFFFF;
  --gray: #2b2b2b;
  --gray-light: #b8b8b8;
  /* *** END OF COLORS *** */

  --box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.1);
  --radius: 6px;

  --max-width: 1656px;
}

*, *::before, *::after { box-sizing: border-box; }

* { 
  margin: 0; 
  padding: 0; 
}

html { 
  font-size: 100%; /*16px*/
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #FF5678 #020E35;

  &::-webkit-scrollbar {
    width: 8px ;
  }
  
  &::-webkit-scrollbar-track {
    background-color: var(--dark-blue);
    border-radius: 5px;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25) ;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--red);
    border-radius: 5px;
  }
  
} 

html, body, #root { height: 100%; }

body {
  font-family:var(--ff-merriweather);
  font-weight: 400;
  line-height: 1.5;
  font-size: var(--font-size-base);
  -webkit-font-smoothing: antialiased;
  color: var(--dark-blue);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

ul, li { list-style: none; }

a { 
  text-decoration: none; 
  color: inherit 
}

input, button, textarea, select { font: inherit; }

p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

h1, h2, h3, h4, h5 {
  margin-top: 0;
  font-family: var(--ff-merriweather);
  line-height: 1.3;
}

h1 { 
  font-size: var(--fs-xxxl); 
  font-weight: var(--fw-black);
}

h2 { font-size: var(--fs-xxl); }
h3 { font-size: var(--fs-xl); }
h4 { font-size: var(--fs-lg); }
h5 { font-size: var(--fs-md); }

small, .text_small { font-size: var(--fs-sm); }

#root, #__next { isolation: isolate; }

.max-container {
  width: 90%;
  max-width: var(--max-width);
  margin: 0 auto;
}

.content-container {
  width: 100%;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  padding: 20px 20px;
  border-radius: var(--radius)
}
`;

export default GlobalStyles;
