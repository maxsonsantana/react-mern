const { response } = require('express');
const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(req, res){       
        const annotationList = await Annotations.find();
        return res.json(annotationList);       
    },

    async create(req, res){
        const { title, notes, priority} = req.body;

        if(!notes || !title){
            return res.status(400).json({error: "Necessário um título/anotaçao"})
        }
        
        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return res.json(annotationCreated);
    }
}