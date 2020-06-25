const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

const idFilter = req => members => member.id === parseInt(req.parmas.id);

//Get All Member
router.get('/',(req, res) => res.json(members));

//Get Single Member
router.get('/:id',(req, res)=>{
  const found = members.some(idFilter(req));
  if (found){
    res.json(members.filter(idFilter(req)));

  }else{
    res.status(400).json({msg: `No member with the id of ${req.params.id}`});

  }
});

// Create Member
router.post('/',(req, res)=>{
  const newMember = {
    ...req.body,
    id: uuid.v4(),
    status: 'active'
  }

if(!newMember.name || !newMember.email){
  return res.status(400).json({msg: 'Please include a name and email' });
}
members.push(newMember);
res.json(members);
//res.redirect('/');
});