// paso 1
const title = document.getElementsByTagName('h1')[0];

// paso 2
title.textContent = "modified from javascript"

// paso 3
title.innerHTML = "<p>Now i'm a paragraph</p>"


// paso 4
const new_paragraph = document.createElement('p')
new_paragraph.textContent = "I'm a second paragraph"
title.appendChild(new_paragraph)