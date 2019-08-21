var proyectSchema = Schema({
    _id: String,
    company: {type: Schema.ObjectId, ref: 'company'},
    module: {type: Schema.ObjectId, ref: 'module'},
    status: String
})