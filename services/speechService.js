const { SpeechClient } = require('@google-cloud/speech');

const processSpeech = async (audioData) => {
  const client = new SpeechClient();
  const audio = { content: audioData };
  const config = { encoding: 'LINEAR16', sampleRateHertz: 16000, languageCode: 'en-US' };

  const request = { audio, config };
  const [response] = await client.recognize(request);

  const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
  const feedback = `Your pronunciation was analyzed. Detected speech: "${transcription}"`;

  return feedback;
};

module.exports = { processSpeech };
