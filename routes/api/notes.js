const express = require('express');
const router = express.Router();

const Note = require('../../models/Note');

router.get('/test', (req, res) => res.send('note route testing!'));

router.get('/', (req, res) => {
    Note.find()
      .then(notes => res.json(notes))
      .catch(err => res.status(404).json({ nonotesfound: 'No Notes found' }));
});


router.get('/:id', (req, res) => {
    Note.findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(404).json({ nonotefound: 'No Note found' }));
});


router.post('/', (req, res) => {
    Note.create(req.body)
      .then(note => res.json({msg: 'Note added succesfully'}))
      .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

router.put('/:id', (req, res) => {
    Note.findByIdAndUpdate(req.params.id,req.body)
      .then(note => res.json({msg: 'Updated succesfully'}))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
});

router.delete('/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id, req.body)
      .then(note => res.json({ mgs: 'Note entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a note' }));
  });

module.exports = router;

