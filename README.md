# Exercise: Building a Pokemon Card

1. Clone the repo
   
2. Open the terminal in the project directory and do npm install
   
3. npm start
    
4.  Open the React component called PokemonCard.

5. In the PokemonCard component, render a card-like layout that displays a pokemons profile information. (css should be taken care of for you).

6. The pokemon card should include the following information:
 - Name (h1)
 - Type (h3)
 - Height (h3)
 - Weight (h3)
 - Image (img) note: You will need to add a className="pokemon-image" for the styling to work.
   
7. Set up yout props so that they will pass the pokemon data to the PokemonCard component from the PokemonPage Component.

8. Import the PokemonCard component into your PokemonPage component.

9. Import the PokemonPage component into your main application file App.js.

10. Create multiple instances of the PokemonCard component with different profile data.

11. Render the pokemon cards in your application, passing the pokemon data as props to each instance of the PokemonCard component.

Extra:
1. Try to destructure the data you are passing into the PokemonCard component.
   
2. Instead of creating multiple instances of the PokemonCard component. Try mapping them out using this array.

```bash
const pokemons = [
  {
    name: "Pikachu",
    type: "Electric",
    height: "0.4m",
    weight: "6.0kg",
    src: Pikachu,
  },
  {
    name: "Psyduck",
    type: "Water",
    height: "0.8m",
    weight: "19.6kg",
    src: Psyduck,
  },
  {
    name: "Charmander",
    type: "Fire",
    height: "0.6m",
    weight: "8.5kg",
    src: Charmander,
  },
  {
    name: "Eevee",
    type: "Normal",
    height: "0.3m",
    weight: "6.5kg",
    src: Eevee,
  },

];
```
