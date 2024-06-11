function createDiv(width, height, text) {
    const container = document.getElementById('container');

    // Create new div element
    const newDiv = document.createElement('div');

    // Set the width and height with "px" unit
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';

    // Set the text content
    newDiv.textContent = text;

    // Append the new div to the container
    container.appendChild(newDiv);
}

// Example usage:
createDiv(200, 100, "This is a new div");
createDiv(300, 150, "Another custom div");
createDiv(250, 120, "More content here");
