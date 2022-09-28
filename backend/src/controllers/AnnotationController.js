const { response } = require('express');
const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(req, res){       
        const annotationList = await Annotations.find();
        return res.json(annotationList);       
    },

    create(req, res){
        const { title, notes, priority} = request.body;
        console.log(title);
        console.log(notes);
        console.log(priority);
    }
}