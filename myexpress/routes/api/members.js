const express = require('express');
const router = express.Router();
const members = require('../../Member');
const uuid = require('uuid');

router.get('/api/members', (req, res) => res.json(members));
router.get('/api/members/:id', (req, res) => {
  const found = members.some(m => m.id === parseInt(req.params.id));
  if (found) {
    res.status(200).json(members.filter(m => m.id === parseInt(req.params.id)));    
  } else {
    res.status(400).json({ msg: `no member with id of ${req.params.id}`});
  }
});
router.post('/api/members', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({msg: 'fix your input'});
  }
  members.push(newMember);
  res.json(members);
});
router.put('/api/members/:id', (req, res) => {
  const found = members.some(m => m.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    members.forEach(m => {
      if (m.id === parseInt(req.params.id)) {
        if (updMember.name) m.name = updMember.name;
        if (updMember.email) m.email = updMember.email;
      }
    });
    res.json(members);
  } else {
    res.status(400).send("wrong ID");
  }
});

module.exports = router;