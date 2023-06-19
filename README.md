# vue-3-ecommerce

Tienda online

## Entities

### Product

-id
-name
-description
-price
-image

### Category

-name
-description

### Cart

-products `[{productId: 1, quantity: 3},{productId: 7, quantity: 7}]`

### Pages

- / -> Todos los products
- /category/5 -> only products category 5
- /cart -> view cartShop

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
