# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects, its really great stuff!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![preview](./preview/preview.png)

### Links

- Solution URL: [Github Repo](https://github.com/acw-portfolio/fe-mentor-nft)
- Live Site URL: [Github Page](https://acw-portfolio.github.io/fe-mentor-nft/)

## My process

### Built with

- CSS Flexbox
- CSS 3D Transform 
- [Wick](https://github.com/CandleLibrary/candle-library-workspace/tree/main/packages/wick) - Web Component Compiler

### What I learned

I used this project as basic trail run a hot-module reloading solution in Wick. It helped me flush out some bugs
in the code and get the basic developers experience working. 

The NFT card is built as a self contained component that has properties that can be individually set:

```jsx
<card 
    src="images/image-equilibrium.jpg"
    title="Equilibrium #3429"
    description="Our Equilibrium collection promotes balance and calm."
    denomination="ETH"
    value="0.041"
    time="3 days"
    creator="Jules Wyvern"
/>
```


## Author

- Website - [Anthony Weathersby](https://github.com/acweathersby)
- Frontend Mentor - [@acweathersby](https://www.frontendmentor.io/profile/acweathersby)
