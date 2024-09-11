const   mongoose  = require("mongoose");

  function connecttodb() {
    mongoose.connect("mongodb+srv://alijan061333:oGEk1AwIyDKdo7an@cluster0.nfdwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").
    then(() => console.log("Connected to MongoDB")).
    catch((err) => console.error("Could not connect to MongoDB", err));
}
module.exports=connecttodb;