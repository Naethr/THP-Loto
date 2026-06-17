# Loto

Small web project built with HTML, CSS, and vanilla JavaScript to check a Loto grid.

## Goal

The application lets users:

- enter a player's contact information;
- enter 6 Loto numbers;
- validate the submitted data;
- generate a random draw;
- display whether the player won or lost.

## Structure

```text
.
├── index.html
├── style.css
└── index.js
```

## Run

No installation is required.

Simply open `index.html` in a browser.

## Main Rules

- First name, last name, and email are required.
- The email must follow the validation rules defined in `index.js`.
- The grid must contain exactly 6 numbers.
- Each number must be between 1 and 49.
- The 6 winning numbers are generated randomly, without duplicates.
- The player wins only if all 6 selected numbers match the winning numbers, regardless of order.

## Winning Test

In `index.js`, a commented section lets you temporarily replace the random draw with a fixed grid:

```js
// const winningNumbers = [1, 2, 3, 4, 5, 6];
```

This makes it easy to test the winning message.
