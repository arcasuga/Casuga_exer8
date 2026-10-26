Casuga, Allen Gabriel R.
D-2L

This is the Lazado homepage built with React (Vite). No CSS frameworks are used. The header and the body both use flexbox.

Structure
src/
  main.jsx                  entry point, renders <App /> into #root
  App.jsx                   holds the menus, products and carts[] data
  App.css                   all styles (flex layout)
  components/
    Header.jsx              store name + navigation
    NavButton.jsx           reusable button, one per item in menus[]
    ProductList.jsx         flex container for the product cards
    ProductCard.jsx         reusable card with an "Add to cart" button
    
Run it:
npm install
npm run dev
localhost:5173
