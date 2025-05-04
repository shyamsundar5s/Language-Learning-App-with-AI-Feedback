const axios = require('axios');

const correctGrammar = async (text) => {
  // Replace with your grammar correction API or ML model endpoint
  const endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
  const apiKey = process.env.OPENAI_API_KEY;

  const response = await axios.post(
    endpoint,
    {
      prompt: `Correct the following sentence: "${text}"`,
      max_tokens: 60,
    },
    {
      headers: { Authorization: `Bearer ${apiKey}` },
    }
  );

  const correctedText = response.data.choices[0].text.trim();
  return { original: text, corrected: correctedText };
};

module.exports = { correctGrammar };
