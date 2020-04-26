const results = document.querySelectorAll('.result');
results.forEach((value) => {
    try {
        const url = value.children[0].children[1].textContent;
        if (url.toLowerCase().includes('w3school')) {
            console.log('Found W3Schools link!');
            value.parentNode.removeChild(value);
        }
    } catch {}
});