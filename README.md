# JavaScript Calculator

A functional React calculator that allows users to perform basic arithmetic operations using a clean, responsive interface.

## Features

* Click to input numbers and operations.
* Displays both the full expression and current input.
* Handles edge cases.
* Correctly evaluates expressions including negative numbers.

## Tech Stack

* **React**: Component-based structure with `useState` for managing calculator logic.
* **Tailwind CSS**: Utility-first styling for layout and responsiveness.
* **JavaScript**: Arithmetic evaluation and input validation logic.

## What I Learned

* **Operator Validation Logic**: Implemented a smart operator-handling system that respects negative signs while replacing invalid operator sequences.
* **Chained Expression Management**: Controlled input flow by tracking both full expressions and current entry separately.
* **Dynamic Styling**: Styled buttons based on roles (numbers, operators, control) using Tailwind and prop-driven classNames.
* **Responsive Layouts with Grid**: Used Tailwind’s grid system with custom spans (`col-span`, `row-span`) for better UX on mobile and desktop.