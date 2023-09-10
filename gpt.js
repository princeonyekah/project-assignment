Certainly! Here are 10 different actions triggered by event listeners:

1. **Change Displayed Text**: Change the displayed text of an element when a button is clicked.

```javascript
const textElement = document.querySelector("#text");
const changeTextButton = document.querySelector("#changeTextButton");

changeTextButton.addEventListener("click", function () {
    textElement.innerText = "New Text";
});
```

2. **Change Element's Color**: Change the color of a text element when hovering over it.

```javascript
const colorElement = document.querySelector("#colorElement");

colorElement.addEventListener("mouseover", function () {
    colorElement.style.color = "red";
});

colorElement.addEventListener("mouseout", function () {
    colorElement.style.color = "black";
});
```

3. **Change Element's Background Color**: Change the background color of a div element when clicked.

```javascript
const backgroundElement = document.querySelector("#backgroundElement");

backgroundElement.addEventListener("click", function () {
    backgroundElement.style.backgroundColor = "blue";
});
```

4. **Create a New Element**: Create a new paragraph element and append it to the document when a button is clicked.

```javascript
const createButton = document.querySelector("#createButton");
const parentElement = document.querySelector("#parentElement");

createButton.addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "New Paragraph";
    parentElement.appendChild(newParagraph);
});
```

5. **Delete an Existing Element**: Delete a paragraph element when it's clicked.

```javascript
const deleteParagraph = document.querySelector("#deleteParagraph");

deleteParagraph.addEventListener("click", function () {
    deleteParagraph.remove();
});
```

6. **Hide an Element**: Hide an image element when a button is clicked.

```javascript
const hideButton = document.querySelector("#hideButton");
const imageElement = document.querySelector("#imageElement");

hideButton.addEventListener("click", function () {
    imageElement.style.display = "none";
});
```

7. **Display an Element**: Display a hidden element when a button is clicked.

```javascript
const showButton = document.querySelector("#showButton");
const hiddenElement = document.querySelector("#hiddenElement");

showButton.addEventListener("click", function () {
    hiddenElement.style.display = "block";
});
```

8. **Toggle Element Visibility**: Toggle the visibility of a div element when a button is clicked.

```javascript
const toggleButton = document.querySelector("#toggleButton");
const toggleElement = document.querySelector("#toggleElement");
let isVisible = true;

toggleButton.addEventListener("click", function () {
    if (isVisible) {
        toggleElement.style.display = "none";
    } else {
        toggleElement.style.display = "block";
    }
    isVisible = !isVisible;
});
```

9. **Alert Message**: Show an alert message when a button is clicked.

```javascript
const alertButton = document.querySelector("#alertButton");

alertButton.addEventListener("click", function () {
    alert("Button Clicked!");
});
```

10. **Redirect to a URL**: Redirect to a specified URL when a link is clicked.

```javascript
const redirectLink = document.querySelector("#redirectLink");

redirectLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.location.href = "https://www.example.com"; // Redirect to the specified URL
});
```

These examples demonstrate different actions triggered by event listeners, such as changing text, colors, creating and deleting elements, hiding, displaying, toggling visibility, showing alerts, and redirecting to URLs.