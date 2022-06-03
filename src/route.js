const express = require('express');
const router = new express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/api/fileanalyse', upload.single('upfile'), async(req, res) => {
    
    const file = req.file;

    res.json({
        name: file.originalname,
        type: file.mimetype,
        size: file.size
    })
})

module.exports = router