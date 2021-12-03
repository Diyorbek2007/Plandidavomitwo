````
- (1) mern-ecommerce papkasi ochib ctrl+` ni bosib, terminalga npx create-react-app admin-app yozamiz
- (2) package.jsonni ochib "start" : "set PORT=4000 && react-scripts start" ga o'zgartiramiz
- (3) terminalda npm i react-bootstrap bootstrap --save qilib bootstrapni ustanovka qilamiz
- (4) terminalda npm i --save react-router-domni ustanovka qilamiz
- (5) App.cssni tozalab tashimiz
- (6) App.test.js, logo.svg, serviceWorker.js, setupTests.js faylarini ochirib tashimiz
- (7) fonts.google.com saytidan o'zimizga kerakli style olamiz va index.htmlga linkini ulimiz
- (8) react-bootstrap.github.iodagi Cssni linkini olamiz va index.htmlga linkini ulimiz
- (9) src papkasini ichida components, containers papkalarini ochamiz
- (10) react-bootstrap.github.io saytidan kerakli navbarni olamiz
- (11) components papkasini ichida Layout, Header papkalarni ochamiz va ularni ichida index.js faylni ochamiz
- (12) react-snippets pluginini o'rnatamiz
- (13) Header papkasini ichidagi index.js faylini ichiga kopiya qilingan navbarni qo'yamiz
- (14) Layout papkasini ichidagi index.js va faylini ichida <Header/> chaqiramiz
- (15) containers papkasini ichida Home, Signin va Signup papkalarini ochamiz va hammasini ichida index.js faylini ochamiz
- (16) App.js faylini ichida import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
<div className="App">
    <Router>
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
        </Routes>
    </Router>
<div> kodlarini yozamiz
- (17) return(
    <Layout>
        <p style={{margin: '5rem', background='#fff'}} className="text-center">
            <h1>Welcome to Admin Dashboard</h1>
            <p>Lorem</p>
        </p>
    </Layout>
)
- (18) import { NavLink, Link } from 'react-router-dom

       <Link className="navbar-brand">Admin Dasboard</Link>
       
       <Nav>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signin">Signin</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </li>
       </Nav>
- (19) Signin va Signup papkalarini ichidagi index.js faylarini ichida:
  
       return(
           <Layout>
                <h1>...</h1>
           </Layout>
       )
- (20) react-bootstrap.github.io saytidan kerakli formni olamiz va Signin va Signup papkalarini ichidagi index.js fayliga qoyamiz
- (21) components papkasini ichida UI papkasini ochamiz va uni ichida Input papkasi ochamiz, Input papkasini ichida index.js ochamiz
````