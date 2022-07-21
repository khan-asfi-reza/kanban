<div align="center" style="display: flex; justify-content: center; align-items: center; flex-direction: column">
<img src="https://github.com/khan-asfi-reza/kanban/.github/kanban.png" alt="Logo" height="100" width="100">    
<h1>Kanban</h1>
<p>
Kanban Like Application Built With Express and React
</p>
</div>


## Get Started ✨

### Server

- Create `.env`
```shell
cd server
# For Unix Systems
touch .env # UNIX System
# For Windows [Powershell]
ni .env
```

- Set `.env`

```dotenv
MONGODB_URL=mongodb://127.0.0.1:27017/kanban-app
PORT=5000
PASSWORD_SECRET_KEY=PASSWORD_SECRET
TOKEN_SECRET_KEY=TOKEN_SECRET
```
- Install Packages
```shell
yarn install
```
- Start Server
```shell
yarn start
```

### Frontend
- Go to client directory
```shell
cd client
```
- Install Packages
```shell
yarn install
```
- Run Server
```shell
yarn start
```