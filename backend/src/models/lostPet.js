const {Schema, model}= require('mongoose');

const lostPetSchema=new Schema({
    Nom_User: String,
    Direccion: String,
    Nom_Pet: String,
    Description: String,
    foto_pet: String},
    {
    timestamps:true
}
    
)

module.exports=model('lostPet',lostPetSchema);