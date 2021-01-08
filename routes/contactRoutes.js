const express = require('express');
const {addContact, 
       getAllContacts, 
       getContact,
       updateContact,
       deleteContact
      } = require('../controllers/contactControllers');

const router = express.Router();

router.post('/add', addContact);
router.get('/', getAllContacts);
router.get('/contact/:id', getContact);
router.put('/contact/:id', updateContact);
router.delete('/contact/:id', deleteContact);


module.exports = {
    routes: router
}