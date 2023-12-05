# Js and php together

```php
<?php
$data = array(
    "name" => "John Doe",
    "email" => "john@example.com"
);
?>

<script>
var data = <?php echo json_encode($data); ?>;
console.log(data.name);  // Outputs: John Doe
console.log(data.email); // Outputs: john@example.com
</script>
```

# yombiee notes

dbconnect.inc --> Connects database

add.php --> form to add to database

process(Anything).php --> this does actions with database

edit.php --> edit db data

# Notes on softwares

- php is a bitch needs to steal htmls glory
- basically this dude is the server php as html is the water its the divit for the river so it needs to be passed first
- .inc basically just a fancy wdfsdfa for files that contain text to preload into main index

_definiton for file naming reasons_
So, if you have PHP code in your file, you should rename it from index.html to index.php. When you access this file through a PHP-enabled server, the server will process the PHP code and send the resulting HTML to the client.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Head content... -->
  </head>
  <body>
    <?php include 'example.php'; ?>

    <!-- Rest of your HTML content... -->
  </body>
</html>
```

# basic start on index

```php
<?php
$title = "FCC";
include("header.inc");//html bits as well as start session
include("nav.inc");
include("db_connect.inc");// database
$sql = 'select * from game order by game_id desc limit 4';
$result = $conn->query($sql);
?>
//..... html

//inside header.inc
<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php e
//html........
```

```php
<?php
//db_connect.inc
if ($_SERVER['SERVER_NAME'] == 'localhost') {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "gameshop";
} else {
    $servername = "talsprddb02.int.its.rmit.edu.au";
    $username = "s3948220";
    $password = "frankston123";
    $dbname = "s3948220";
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


```

# server address

http://localhost/Major_Project/

# useful template

```php
<?php
$title = "Games";
include("header.inc");
include("nav.inc");
include("db_connect.inc");//db connect
$sql = "select * from game";// the big ask
$result = $conn->query($sql);// the big reply
$dollarsign = "$" ?>// some definition


//html garbo
<main class="offset-1">
    <h2>Games</h2>
    <div class="clearfix">
        <img src="gametable.PNG" alt="Game Table" id="gametable" class="img-fluid">

        //table of data loaded
        <table class="table table-bordered w-50">
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Year</th>
                <th>Price</th>
            </tr>
            //sneaky php to load data
            <?php while ($row = $result->fetch_array()) {
                print "<tr>";
                print "<td><a href='game.php?game_id={$row['game_id']}' class='gamestable'>{$row['name']}</a></td>";
                print "<td>{$row['category']} </td>";
                print "<td>{$row['year']}</td>";
                print "<td>$dollarsign{$row['price']}</td>";
                print "</tr>";
            } ?>
        </table>
    </div>
</main>
<?php include("footer.inc"); ?>
```

# fetcher

`while ($row = $result->fetch_array()) `

# grabing info from one to the other

_from_ <a href='game.php?game_id={$row['game_id']}' class='gamestable'>{$row['name']}</a></td>";

```php
<?php
$dollarsign = "$";
if (!empty($_GET['game_id'])) {
    include("db_connect.inc");

    $sql = "select * from game where game_id = ?";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param("i", $gameid);

    $gameid = $_GET['game_id'];

    $stmt->execute();

    $result = $stmt->get_result();
    $row = mysqli_fetch_array($result);
    $title = $row['name'];
    include("header.inc");
    include("nav.inc");
    echo "<main class='offset-1'>";
    echo "<h2>{$row['name']}</h2>";
    echo "<img src='game_images/{$row['image']}' alt='' class='game'>";
    echo "<p class='category'>Category: {$row['category']}</p>";
    echo "<p>{$row['description']}</p>";
    echo "<p class='price'>Price: $dollarsign{$row['price']}</p>";
    echo "<p class='year'>Year: {$row['year']}</p>";

    if (isset($_SESSION['developername'])) { ?>
        <form action="edit.php?game_id=<?php echo $gameid; ?>" method="post">
            <input type="submit" class="btn btn-primary" value="Edit">
        </form>
<?php
    }
    echo "</main>";
}

include("footer.inc");
?>
```
