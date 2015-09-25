<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <title>Title of the document</title>
    <link href="styles.css" rel="stylesheet">
    <link href="jquery-ui-1.11.4.custom/jquery-ui.min.css" rel="stylesheet">
    <link href="jquery-ui-1.11.4.custom/jquery-ui.structure.min.css" rel="stylesheet">
    <link href="jquery-ui-1.11.4.custom/jquery-ui.theme.min.css" rel="stylesheet">

</head>

<body>
    <div id="container">
        <header>
          <!-- This button will open the modal -->
          <button id="additem">Add an item to your list!</button>
        </header>

        <div id="main">
          <!-- This is the list of unfinished items -->
          <div id="unfinished">
            <h1>Still To-Do</h1>
              <ul id="unfinishedList" class="sortlist">
              </ul>
          </div>

          <!-- This list has all of the finished items -->
          <div id="finished">
            <h1>Finished</h1>
              <ul id="finishedList" class="sortlist">
              </ul>
          </div>


          <!-- This is the code for the modal to add items -->
            <div id="newitemform">
          <form>
            <p>
              <label for="task">Task Name:</label>
              <input type="text" name="task" id="task">
            </p>
            <p>
              <label for="date">Due Date:</label>
              <input type="text" name="date" id="date">
            </p>
            </form>
            </div>
        </div>


    </div>



  <script src="jquery-1.11.3.min.js"></script>
  <script src="jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
  <script src="main.js"></script>
</body>

</html>
