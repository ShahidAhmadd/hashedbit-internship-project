document.getElementById('colorchange').addEventListener('click', function() {
    var color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
});

document.getElementById('fontsize').addEventListener('input', function() {
    var fontSize = document.getElementById('fontsize').value + 'px';
    document.getElementById('text-container').style.fontSize = fontSize;
});

document.getElementById('italic').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

document.getElementById('underline').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

document.getElementById('bold').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

document.getElementById('list').addEventListener('change', function() {
    var fontFamily = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
});

document.getElementById('getstyle').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    var cssProps = `
        color: ${textContainer.style.color};
        font-size: ${textContainer.style.fontSize};
        font-style: ${textContainer.style.fontStyle};
        text-decoration: ${textContainer.style.textDecoration};
        font-weight: ${textContainer.style.fontWeight};
        font-family: ${textContainer.style.fontFamily};
    `;
    document.getElementById('css-props').textContent = cssProps.replace(/\s+/g, ' ').trim();
});
