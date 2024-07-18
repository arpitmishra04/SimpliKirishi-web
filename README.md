# *SimpliKrishi*



## Tech Stack
- Frontend
	- HTML5
	- CSS3
	- Vanilla JavaScript

- Backend
	- Node.js (Express.js)

- Database
	- MongoDB



- The live demo replicates the behavior of the site without the need for a real server. Instead, there is a mock server that is implemented in client side JavaScript, using `localStorage` as the database.
- Please refer to [`frontend/mock-server.js`](frontend/mock-server.js) if you are curious about how the mock server is implemented.  
- To get a better understanding of how the site works, please open the developer console (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd>).  
  The live demo logs a lot of details like network requests, responses and messages to the browser console.
- The database can be inspected directly from the console by typing `Database.tables`.  
  When the page is unloaded, the database is saved to `localStorage` with the key `database`. You can access this with `localStorage.database`.
- Since this is just a prototype, there isn't any real OTP integration.  
  If you run the server locally, then the OTP will be generated and logged to the server output.  
  If you view the live demo then the OTP will be displayed as an alert and also logged to the browser console.



## Landing page flow
- Unified landing page loads.
- Do **GET** `/user`
	- If successful, go to respective dashboard.
- Wait for user to enter valid phone, and press next.
- Do **POST** `/otp` body: `{phoneNumber}`
	- If post is unsuccessful, then we have bigger problems.
- (*) Wait for user to enter valid OTP, and press next.
- Do **POST** `/authenticate` body: `{phoneNumber, otp}`
	- If post is successful, do **GET** `/user`
		- If user is found then go to respective dashboard.
		- Else user does not exist, goto signup.
- Inform user that OTP is wrong, goto (*)

## Project Structure

```
frontend
 ┣ contact
 ┃ ┣ index.html
 ┃ ┗ translation.js
 ┣ farmer
 ┃ ┣ index.html
 ┃ ┣ script.js
 ┃ ┗ style.css
 ┣ signup
 ┃ ┣ index.html
 ┃ ┣ script.js
 ┃ ┗ style.css
 ┣ videos
 ┃ ┣ farmer.mp4
 ┃ ┗ wholesaler.mp4
 ┣ wholesaler
 ┃ ┣ index.html
 ┃ ┣ script.js
 ┃ ┗ style.css
 ┣ background.svg
 ┣ index.html
 ┣ logo.svg
 ┣ mock-server.js
 ┣ script.js
 ┣ style.css
 ┣ translation.js
 ┗ util.js
```


## Local Setup
- Clone repository.
- Setup MongoDB, either locally, in a Docker container or on the cloud.
- Edit the MongoDB server Url in `/server/server.js`.
- Run `npm install` and `npm start` in the `/server` folder.
- Go to `https://localhost:5000` in your web browser.




## *SECURITY*: 
* Mobile - OTP verification
	* OTP is valid for 5 minutes from issue time
	* Blind checking of OTP
* Unified auth & identity token.
	* Token is stored as a cookie on the client side
	* Token valid for 2 days
	* Every privileged request is authenticated on the server side
	* Client side cookie is set to expire after 2 days


