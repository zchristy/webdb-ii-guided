const router = require('express').Router();

const rolesDb = require('./roles-model.js')

router.get('/', (req, res) => {
  rolesDb.find()
  .then(roles => {
    res.status(200).json(roles)
  })
  .catch(err => {
    res.status(500).json({error: "Bad Request", err})
  })
});

router.get('/:id', (req, res) => {
  rolesDb.findById(req.params.id)
  .then(role => {
    if(role){
      res.status(200).json(role)
    } else {
      res.status(404).json({message: "Role not found"})
    }
  })
  .catch(err => {
    res.status(500).json({error: "Bad Request", err})
  })
});

router.post('/', (req, res) => {
  rolesDb.add(req.body)
  .then(ids => {
    res.status(201).json(ids)
  })
  .catch(err => {
    res.status(500).json({error: "Bad Request", err})
  })
});

router.put('/:id', (req, res) => {
  rolesDb.update(req.params.id, req.body)
  .then(count => {
    if(count > 0) {
      res.status(200).json({message: `${count} records updated`})
    } else {
      res.status(404).json({message: "Role not found"})
    }
  })
  .catch(err => {
    res.status(500).json({error: "Bad Request", err})
  })
});

router.delete('/:id', (req, res) => {
  rolesDb.remove(req.params.id)
  .then(count => {
    if(count > 0) {
      const unit = count > 1 ? 'records' : 'record'
      res.status(200).json({message: `${count} ${unit} deleted`})
    } else {
      res.status(404).json({message: "Role not found"})
    }
  })
  .catch(err => {
    res.status(500).json({error: "Bad Request", err})
  })
});

module.exports = router;
