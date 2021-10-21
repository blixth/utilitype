# utilitype

Provides utility functions in typescript.

## strings

### capitalize
Capitalize the given string

```typescript
capitalize('VOLVO') => 'Volvo'
```

### tokenize
Tokenizes the given string.

```typescript
tokenize('VOLVO_V40') => ['VOLVO', 'V40']

tokenize('Audi R8') => ['Audi', 'R8']
```

### camelCase
Camel case the given string.

```typescript
camelCase('PizzaSlize') => 'pizzaSlize'

camelCase('kebab-pizza-slize') => 'kebabPizzaSlize'
```

### titleCase
Title case the given string.

```typescript
titleCase('her royal highness') => 'Her Royal Highness'
```

## Contributing

### Installation

Install dependencies.

```bash
npm install
```

Test
```bash
npm run test
```

Build

```bash
npm run build
```
