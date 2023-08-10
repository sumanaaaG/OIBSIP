# OIBSIP
Basic Calculator-WEB DEVELOPMENT PROJECT

This project is a simple web-based calculator application that allows users to perform basic arithmetic operations. The calculator's functionality is implemented using HTML, CSS, and JavaScript.
The HTML structure of the calculator includes a text input field (with the id 'display') where users can see and input arithmetic expressions, and a set of buttons for various numerical digits, operators, and control actions. The available buttons include digits from 0 to 9, operators like addition, subtraction, multiplication, and division, as well as special buttons for clearing the input ('AC'), calculating the result ('='), parentheses, percentage, and a decimal point.
The JavaScript code interacts with the HTML elements to provide the calculator's functionality. 
The key features of the calculator include:

Input Handling: The calculator handles user input through button clicks. When a digit button is clicked, the corresponding digit is appended to the input field. Operators and special buttons update the expression accordingly.

Clearing: The 'AC' button clears the input field.

Calculation: When the '=' button is clicked, the total() function is called. This function evaluates the expression using the eval() function and displays the result in the input field. If an error occurs during evaluation, the field displays 'Error'.

Event Listeners: Event listeners are attached to each button using JavaScript. These listeners detect button clicks and trigger appropriate functions based on the button's text content.

Styling: The CSS stylesheet ('css.css') is linked to the HTML file to provide a visually appealing design to the calculator interface.
