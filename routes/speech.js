const express = require('express');
const router = express.Router();
const { processSpeech } = require('../services/speechService');

router.post('/analyze', async (req, res) => {
  try {
    const { audioData } = req.body;
    const feedback = await processSpeech(audioData);
    res.json({ success: true, feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
