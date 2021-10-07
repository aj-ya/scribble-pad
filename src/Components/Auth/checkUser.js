
  function checkUser(usernm,passwd){
    const mysql=require('mysql')  
    const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node",
  });
  if (usernm !== "") {
    if (passwd !== "") {
      connection.query(
        "SELECT * FROM users WHERE usernm = ? AND passwd = ?",
        [usernm, passwd],
        function (error, results, fields) {
          if (results.length > 0) {
            //request.session.loggedin = true;
            //request.session.username = usernm;
            return true;
          } else {
            return false;
          }
        });
    }}}
export default checkUser;