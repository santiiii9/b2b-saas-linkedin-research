// First, make sure you run: npm install @supadata/js
const { Supadata } = require('@supadata/js');

const supadata = new Supadata({
  apiKey: 'sd_4f0b27f202483bb351b915ea0cdc0178', // Your API key
});

async function runTranscription(videoUrl) {
  try {
    console.log("Fetching transcript...");
    const result = await supadata.transcript({
      url: videoUrl,
      lang: 'en',
      text: true,
      mode: 'auto'
    });
    
    // This will print the transcript in your terminal
    console.log("--- TRANSCRIPT START ---");
    console.log(JSON.stringify(result, null, 2));
    console.log("--- TRANSCRIPT END ---");
  } catch (error) {
    console.error("Error fetching transcript:", error);
  }
}

// Replace this URL with your first video
runTranscription('https://youtu.be/2HSavr17yq0');
