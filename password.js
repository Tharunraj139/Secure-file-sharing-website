<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/stylesheets/style1.css"/>
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <style>
    .css-selector {
    background: linear-gradient(270deg, #12e4ae, #5fd4bd, #50eaf9, #7569fa);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 15s ease infinite;
    -moz-animation: AnimationName 15s ease infinite;
    animation: AnimationName 15s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .center-image {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      position:fixed;
    }
    form {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: auto 1fr;
      text-align: left; /* Align form elements to the left within the form */
    }

    label, input, button, a {
      margin-bottom: 0.5rem;
      display: block; /* Ensure each element is on a new line */
    }

    button {
      grid-column: span 2;
    }
    .center-image {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      position: fixed;
    }
  </style>
</head>
<body class="css-selector">
  <section>
    <img src="../stylesheets/image-removebg-preview.png" class="center-image">
  </section>
  <% if (locals.error) { %>
    <div style="color: red; margin-bottom: 1rem;">
      Incorrect Password
    </div>
  <% } %>
  <form method="post" style="display: grid; gap: .5rem; grid-template-columns: auto 1fr; max-width: 500px; margin: 0 auto;">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required />
    <button  class="btn btn-secondary" type="submit">Download</button>
  </form>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>