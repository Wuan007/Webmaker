module.exports = function(app) {
// users data
let users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
    {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
]

app.get("/api/user", (req, res)=>{
    const username = req.query["username"];
    const password = req.query["password"];
    let user = {};
    if(username && password) {
        user = users.find((user)=>{
            return user.username === username && user.password === password
        })
        
        if(user) {
        res.json(user);
        } else {
           res.status(404).send("error");
        }
    }
})    
};