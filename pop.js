document.getElementById('correctButton').addEventListener('click', async function() {
    const inputText = document.getElementById('inputText').value;

    // Your Gradio app's public URL (e.g., from ngrok or your hosted Gradio app)
    const apiUrl = "https://ad8e7b7fd3053b77d0.gradio.live";

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: [inputText] })
    });

    const result = await response.json();
    const correctedText = result.data[0];
    
    document.getElementById('correctedOutput').textContent = correctedText;
});
