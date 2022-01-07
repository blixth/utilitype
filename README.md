# utilitype

Provides utility functions in typescript.

## Types

- [Any](#Any)
- [Arrays](#Arrays)
- [Booleans](#Booleans)
- [Enumerables](#Enumerables)
- [Functions](#Functions)
- [JSON](#JSON)
- [Numbers](#Numbers)
- [Objects](#Objects)
- [Strings](#Strings)
- [Tabular data](#Tabular-data)
- [Units](#Units)
    - [Filesize](#Filesize)
    - [Length units](#Length-units)
    - [Percent](#Percent)

[Contributing](#Contributing)

## Any

### isPresent
Asserts whether the given value is present or not. The definition of present is opiniated. See examples for more information.

```typescript
isPresent({}) => false

isPresent({ food: 'pizza' }) => true

isPresent([]) => false

isPresent(['pizza']) => true

isPresent(false) => false

isPresent(true) => true

isPresent("\t\n ") => false

isPresent("pizza") => true

isPresent(0) => true

isPresent(NaN) => false
```

### isMissing
Asserts wheter the given value is missing or not.

```typescript
isMissing(undefined) => true
isMissing(null) => true
```

### presence
Returns the given value if present, otherwise undefined.

```typescript
presence({}) => undefined
presence({ fruit: 'banana' }) => { fruit: 'banana' }

presence([]) => undefined
presence(['banana']) => ['banana']

presence('') => undefined
presence('banana') => 'banana'

presence(NaN) => undefined
presence(1) => 1

presence(true) => true
presence(false) => undefined
```

## Arrays

### chunk
Chunk the given array into pieces of given size.

```typescript
chunk(['Pizza', 'Pineapple', 'Apple', 'Pasta'], 2) 
=> [['Pizza', 'Pineapple'], ['Apple', 'Pasta']]
```

### compact
Return the same array excluding falsey values.

```typescript
compact(['Pizza', 'Pineapple', null, '', undefined]) 
=> ['Pizza', 'Pineapple']
```

### first
Retrieve the first element in the given array.

```typescript
first([1, 2, 3]) => 1

first([]) => undefined
```

### isArray
Checks if a value is an array

```typescript
isArray([]) => true

isArray(null) => false

isArray(undefined) => false
```

### isEmpty
Assert whether the given array is empty.

```typescript
isEmpty([]) => true

isEmpty([undefined]) => false
isEmpty(['pizza']) => false
```

### isMissing
Checks if an array is missing.

```typescript
isMissing([1, 2, 3]) => false

isMissing([]) => true
isMissing(null) => true
isMissing(undefined) => true
```

### isPresent
Checks if there is an array present.

```typescript
isPresent([1, 2, 3]) => true

isPresent([]) => false
isPresent(null) => false
isPresent(undefined) => false
```

### last
Obtain the last item in the given array.

```typescript
last([1, 2, 3]) => 3

last([]) => undefined
last([], { fallback: -1 }) => -1
```

### partition
Given a predicate return an array containing two arrays.
The first array contains values passing the predicate. The second array contains values not passing the predicate.

```typescript
const array = [1, 2, 3, 4];
const isEven = (num) => num % 2 === 0;

partition(array, isEven) => [[2, 4], [1, 3]]
```

### pushOrReplace
Replace item in array if it exists based on the given identification, otherwise add it to the array. Does not modify the original array.

If identification function is omitted, it identifies the item by strict comparison.

```typescript
pushOrReplace([1, 5, 3], 2, (n) => n === 5) => [1, 2, 3]

pushOrReplace([1, 2], 3) => [1, 2, 3]
```

### range
Given a min and max value, retrieve an array with the numbers from min to max (inclusive).

```typescript
range(1, 3) => [1, 2, 3]
```

### symmetricDifference
Returns an array of which all elements only exists in one of two arrays. Same as the xor operation.

```typescript
symmetricDifference([1, 2], [2, 3]) => [1, 3]

symmetricDifference([1, 2], [3, 4]) => [1, 2, 3, 4]
```

### unique
Return array with duplicate values stripped out. By default it compares using object identity. Custom comparison can be used.

```typescript
unique([1, 2, 2, 3]) => [1, 2, 3]

unique([{ food: 'pizza' }, { food: 'pizza' }])
=> [{ food: 'pizza' }, { food: 'pizza' }]

unique([{ food: 'pizza' }, { food: 'pizza' }],
    (a, b) => JSON.stringify(a) === JSON.stringify(b)
)
=> [{ food: 'pizza' }]

 ```

### wrap
Return the given item in an array, or the given array.

```typescript
wrap([1, 2, 3]) => [1, 2, 3]

wrap(1) => [1]
```

## Booleans

### isBoolean
Retrieve whether the given value is a boolean or not.

```typescript
isBoolean(true) => true
isBoolean(false) => true

isBoolean(null) => false
isBoolean(undefined) => false
isBoolean(1) => false
isBoolean('true') => false
```

### isPresent
Retrieve whether the given value is present. The keyword true is the only value which is considered present.

```typescript
isPresent(true) => true

isPresent(false) => false
```

## Enumerables

Objects and arrays are considered Enumerables.

### compact
Return the enumerable excluding falsey values. 

```typescript
compact(['Pizza', 'Pineapple', null, '', undefined]) => ['Pizza', 'Pineapple']

compact({ pizza: 'Mmm', banana: undefined, salad: null }) => { pizza: 'Mmm' }
```

### isEmpty

```typescript
isEmpty({}) => true
isEmpty({ food: 'pizza' }) => false

isEmpty([]) => true
isEmpty(['pizza']) => false
```

## Functions

### isFunction
Determine whether the given value is a function.

```typescript
isFunction(() => null) => true

isFunction(null) => false
```

### isPresent
Determine whether the given function is present.

```typescript
isPresent(() => null) => true

isPresent(null) => false
```

## JSON

### parseJson
Parse the given JSON and return the result if successful, otherwise undefined.

```typescript
parseJson('{}') => {}

parseJson('{') => undefined
```

## Numbers

### clamp
Return the given number if in range, otherwise return the nearest value in range.

```typescript
clamp(1, 2, 3) => 2

clamp(1, 3, 2) => 2

clamp(2, 1, 3) => 2
```

### isEven
Determine whether the provided number is even or not.

```typescript
isEven(2) => true

isEven(3) => false
```

### isNumber
Determine whether the given value is a number or not.

```typescript
isNumber(0) => true
isNumber(Infinity) => true

isNumber(NaN) => false
isNumber({}) => false
isNumber('1') => false
```

### isPresent
Determine whether the given number is present or not.

```typescript
isPresent(0) => true
isPresent(Infinity) => true

isPresent(NaN) => false
isPresent({}) => false
isPresent('1') => false
```

### round
Takes a number and rounds it to the desired number of decimals.

```typescript
round(1.1337, 0) => 1

round(0.4, 1) => 0
round(0.5, 1) => 1
round(0.44, 1) => 0.4
round(0.45, 1) => 0.5

round(1.005, 2) => 1.01
```

## Objects

### compact
Return the same object excluding keys without values.

```typescript
compact({ pizza: 'Mmm', banana: undefined, salad: null }) => { pizza: 'Mmm' }
```

### dig
Recursively digs in the given object with the given keys.

```typescript
const dishes = { dishes: { good: { italian: 'Pizza' } } };

dig(dishes, 'dishes', 'good', 'italian') => 'Pizza'
```

### except
Clone object without given keys.

```typescript
except({ snack: 'banana', dish: 'pizza' }, 'snack') => { dish: 'pizza' }
```

### isEmpty
Assert whether the given object is empty. It is considered empty if it has no keys.

```typescript
isEmpty({}) => true

isEmpty({ food: 'pizza' }) => false

isEmpty({ food: undefined }) => false
```

### isEqual
Determine whether the given objects are deeply equal.

```typescript
isEqual({ a: 'a' }, { a: 'a' }) => true

isEqual({ a: 'a' }, { a: 'b' }) => false
```

### isObject
Determine if the given value is an object. Arrays are not considered objects.

```typescript
isObject({}) => true

isObject([]) => false

isObject(null) => false

isObject('') => false
```

### isPresent
Determine if the given object is present. The object is considered present if it either has properties, or is an instance with inherited properties.

```typescript
isPresent({}) => false

isPresent({ foo: 'bar' }) => true

isPresent(new Date()) => true
```

### remodel
Remodel the given object to a new schema.

```typescript
remodel({ food: 'Pineapple Pizza' }, { trash: { from: 'food' } })
=> { trash: 'Pineapple Pizza' }

remodel({ calories: 5000 }, { kiloCalories: o => o.calories / 1000 })
=> { kiloCalories: 5 }
```

### set
Set the property at the given path without mutating the given object.

```typescript
set({ food: 'salad' }, 'food', 'pizza') => { food: 'pizza' }
set({}, 'food', 'pizza') => { food: 'pizza' }

set({}, ['food', 'favorite'], 'pizza') => { food: { favorite: 'pizza' } }

set({}, 'food.favorite', 'pizza') => { food: { favorite: 'pizza' } }
```

### slice
Slice object to include only the given keys.

```typescript
slice({ pizza: 'Mm', pasta: 'Ah', spinach: 'Ew' }, 'pizza', 'pasta') 
=> { pizza: 'Mm', pasta: 'Ah' }
```

### transformValues
Takes the given objects and transforms the values with the provided transformation function.

```typescript
 transformValues({ niceFood: 'Salad', favoriteFood: 'Lasagna' },
   (key, value) => 'Pizza'
 )
 => { niceFood: 'Pizza', favoriteFood: 'Pizza' }


 transformValues({ foo: 'bar', bar: 'bar' },
    (value: any) => value.toUpperCase()
 )
 => { foo: 'FOO', bar: 'BAR' }
```

## Strings

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

### pascalCase
Pascal case the given string.

```typescript
pascalCase('General Kenobi') => 'GeneralKenobi'
```

### kebabCase
Kebab case the given string.

```typescript
kebabCase('camelCase') => 'camel-case'
```

### sentenceCase
Sentence case the given string.

```typescript
sentenceCase('CurvedBanana') => "Curved banana"
```

### isMissingOrEmpty
Checks if string is missing or empty.

```typescript
isMissingOrEmpty('') => true
isMissingOrEmpty(undefined) => true
isMissingOrEmpty('banana') => false
```

### isMissingOrWhitespace
Checks if string is missing or whitespace.

```typescript
isMissingOrWhiteSpace('') => true
isMissingOrWhiteSpace(' ') => true
isMissingOrWhiteSpace(undefined) => true
isMissingOrWhiteSpace('banana') => false
```

### isPresent
Checks if string is present.

```typescript
isPresent('') => false
isPresent(undefined) => false
isPresent('banana') => true
```

### isString
Checks if value is a string.

```typescript
isString('') => true
isString(null) =>  false
isString(undefined) => false
isString({}) => false
isString([]) => false
```

## Tabular data

### Csv
Create a csv string from an array of objects.

Parse a csv string to an array of type T.

```typescript
Csv.toString([
    { name: 'Luke', planet: 'Tatooine' },
    { name: 'Leia', planet: 'Alderaan' },
    ])
=> 'name;planet\nLuke;Tatooine\nLeia;Alderaan'

Csv.fromString<Pizza>('PIZZANAME;PRICE;NUMBER;\r\nHawaii;69;1\r\nCalzone;69;2', [{
        header: 'PIZZANAME',
        key: 'name',
      },
      {
        header: 'NUMBER',
        key: 'number',
      }]);
=> [{ name: 'Hawaii', number: 1}, { name: 'Calzone', number: 2}]
```

## Units

### filesize
Returns the number of bytes or mega bytes based on the multiples.

```typescript
bytes({ kB: 1 }) => 1000
bytes({ MB: 2 }) => 2000000
bytes({ GB: 3 }) => 3000000000
bytes({ TB: 4 }) => 4000000000000

megaBytes({ kB: 1 }) => 0.001
megaBytes({ MB: 2 }) => 2
megaBytes({ GB: 3 }) => 3000
megaBytes({ TB: 4 }) => 4000000
```

### Length units
Converts the given value to the provided length unit. Dpi is set to default 300 but can be overridden.

```typescript
convertLengthUnit(5, { from: LengthUnit.Pixel, to: LengthUnit.Pixel }) => 5

convertLengthUnit(10, { from: LengthUnit.Pixel, to: LengthUnit.Point }) => 7.5

convertLengthUnit(30, { from: LengthUnit.Pixel, to: LengthUnit.Inch }) => 0.1

convertLengthUnit(30, { from: LengthUnit.Pixel, to: LengthUnit.Inch, dpi: 100 }) => 0.3

convertLengthUnit(30, { from: LengthUnit.Pixel, to: LengthUnit.Centimeter }) => 0.254

convertLengthUnit(3, { from: LengthUnit.Inch, to: LengthUnit.Pixel, dpi: 100 }) => 300
```

### Percent
Return percent from a given fraction with desired number of decimals

```typescript
percent(0.01, 0) => 1
percent(0.1, 0) => 10
percent(0.125, 1)) => 12.5
percent(0.1337, 2) => 13.37
percent(1, 2) => 100
```

## Contributing

Any change to behavior (including bugfixes) must come with a test.

PR's that fail tests will be rejected.

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
