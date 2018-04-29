# Build a Phone Book API :telephone:

Today's assignment is to build an small API – the server side of a phone book. The API could later be used to build webpages like Eniro or Hitta.se.

We have provided a blob of JSON which will serve as your database for the API. Your task is to create a couple of endpoints in your API;

| Method | Path | Description |
| --- | --- | --- |
| GET | /contacts | Should return all contacts from the JSON blob |
| GET | /contacts/:id | Should return only one contact, whose ID matched :id |

If an unknown url is entered (such as /foobar), then the API should respond with a 404 status code. The same goes for if an ID is requested which doesn't exist - it should also return a 404.

:rotating_light: The assignment is only to build the server side, so let's save the frontend for stretch goals. :rotating_light:

## How to complete this assignment

In the `assets` folder of this assignment you have a `contacts.json` file that contains javascript objects of contacts.

### Get started with Node and Express

Below are the steps we followed in the lecture for creating a new express project. *Run all of this from within the code folder of this assignment*

<details><summary>Create project & setup dependencies</summary><p>

1. If you haven't already, cd into the code folder of this assignment.
2. Create server.js. Leave it empty for now.
3. Run `npm init`
4. `npm install nodemon babel-cli babel-preset-env eslint-config-technigo --save-dev`
5. create .babelrc:
  ```
  {
    "presets": ["env"]
  }
  ```
6. Create `.eslintconfig.json`:
  ```
  {
    "extends": [
      "technigo"
    ]
  }
  ```
</p></details>

<details><summary>Make a start script in package.json</summary><p>

```javascript
{
  "scripts": {
    "start": "nodemon server.js --exec babel-node",
  }
}
```

</p></details>

<details><summary>Install and configure express</summary><p>

Run `npm install express` to install express as a dependency.

Then update server.js to create a server:

```
import express from "express"

const app = express()

app.get("/", (req, res) =>
  res.send("Hello World!")
)

app.listen(3000, () =>
  console.log("Example app listening on port 3000!")
)
```

Change "3000" to something else if you want it to run on a different port.

</p></details>

### Loading the "database"

You can load the contacts.json file into your server.js file using `const contacts = require("./contacts.json")` (assuming the contacts.json file is in the same folder as server.js. If it isn't you'll need to use the correct path to the json file).

### Making requests from Postman

To test your API, you can use the [Postman](https://www.getpostman.com/) - a simple HTTP client.

### Hand in the assignment

To complete this assignment, you need to fork this repository, add your code in the "code" folder, and then submit a pull request on GitHub (from your repository into the Technigo one) for review.

### Readings

* [Getting started with Express - Hello World example](http://expressjs.com/en/starter/hello-world.html)
* [Glossary – Talk the backend language](https://expressjs.com/en/resources/glossary.html)
* [Sending the first request with Postman](https://www.getpostman.com/docs/postman/launching_postman/sending_the_first_request)
---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask the teacher. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment your should have tried a little Node.js and Express and have more knowledge about how servers and APIs work.

---

### :runner: Stretch Goals

Done with the main task? Try some of the suggestions below, or make something up yourself.

1. Build a frontend which can use the api (create a new react project which runs separately and makes API requests to your server).
1. Add on more details to the database to make it more interesting, and add more endpoints which make it possible to find a user by email or phone number, for example.
1. Try to make a search endpoint which uses regular expressions to find a user based on multiple fields at the same time, and without having to enter the entire string. For example, so you could search for "technigo.io" and retrieve all users with a technigo.io email address.
