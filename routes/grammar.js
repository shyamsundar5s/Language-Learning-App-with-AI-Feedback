const express = require('express');
const router = express.Router();
const { correctGrammar } = require('../services/grammarService');

router.post('/check', async (req, res) => {
  try {
    const { text } = req.body;
    const corrections = await correctGrammar(text);
    res.json({ success: true, corrections });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
