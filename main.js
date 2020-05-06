const root = document.getElementById('root')
const e = React.createElement

// Layout
// Header
// Crear un componente Header que renderice un elemento header y que pueda contener componente dentro suyo

const Header = ({ children }) => {
return <header>{ children }</header>
}

// NavMenu
// Crear un componente Nav que renderice un elemento nav y un elemento ul dentro del nav, el componente debe poder contener elementos dentro suyo
// El elemento ul debe tener el estilo display: flex y list-style: none
// El componente NavMenu debe aceptar la prop direction con los valores "row" o "column", siendo "row" el valor por defecto, y cambiar el valor de la propiedad flex-direction del elemento ul en consecuencia

const Nav = ({ children, direction="row" }) => {
    const infoStyles = {
        display: "flex",
        listStyle: "none",
        flexDirection: direction
    }
return ( 
    <nav>
        <ul style={infoStyles}>
            {children}
        </ul>
    </nav>
    )
}

// NavItem
// Crear un componente MenuItem que renderice un componente li con un componente a, el componente debe poder contener elementos dentro suyo
// El elemento li debe tener el estilo display: flex
// Debe aceptar la prop path que corresponde al atributo href del componente a



//No logro que se vea el <a> como link aunque aparece en el HTML (No aparece el href, solo aparece como prop)
const MenuItem = ({ children, path }) => {
      return (
         <li style={{display: "flex"}}>
             <a href={path}>
                 {children}
             </a>
        </li>
   )
}

// Main
// Crear un componente Main que renderice un componente main y que pueda contener componente dentro suyo

const Main = ({ children }) => {
    return <main>{children}</main>
}

// Footer
// Crear un componente Footer que renderice un componente footer y que pueda contener componente dentro suyo

const Footer = ({ children }) => {
    return <footer>{children}</footer>
}

// const App = () => {
//     return  (
//         <div>
//             <Header>
//                 <Nav direction="column">
//                     <MenuItem path="https://www.google.com/">Home</MenuItem>
//                     <MenuItem path="#about">About</MenuItem>
//                     <MenuItem path="#projects">Projects</MenuItem>
//                     <MenuItem path="#contact">Contact</MenuItem>
//                 </Nav>
//             </Header>
//             <Main>¡Hola, mundo!</Main>
//             <Footer>® 2020 - All rights reserved</Footer>
//         </div>
//     )
// }

// UserGreeting
// Crear un componente UserGreeting que acepte una prop user (que es un string). Si user tiene algún valor, debe renderizar un componente p que diga Welcome ${user} y un componente a que diga Logout, en cambio si user no tiene ningún valor, debe mostrar dos componentes a, uno que diga Login y otro Register. Separar luego ambas opciones en dos componentes distintos: GuestUserMessage (para cuando user no tiene ningún valor) y LoggedUserMessage,
const GuestUserMessage = () => {
    const infoStyles = {
        display: "flex",
        flexDirection: "column",
    }
    return (
        <div style={infoStyles}>
            <a>Login</a>
            <a>Register</a>
        </div>
    )
}

const LoggedUserMessage = ({children}) => {
    return <p>{children}</p>
}

const UserGreeting = ({ user }) => {

    return user ? 
            <LoggedUserMessage>Welcome, {user}!</LoggedUserMessage> : 
            <GuestUserMessage></GuestUserMessage>
}


// const App = () => {
//     return (
//         <UserGreeting user="Loohan"/>
//     )
// }

// List
// Crear un componente List que acepte una prop items que sea un array de strings, y renderice un componente ul con componentes li por cada string de items. Si items está vacío o no está definido, se debe mostrar un componente p que diga Sorry, this list is empty


const List = ({ items }) => {
    return !items ? 
            <p>Sorry, this list is empty!</p> : 
            <ul>{items.map((item) => (<li>{item}</li>))}</ul>
    
}


// const App = () => {
//     return (
//        <List items={["item1", "item2", "item3", "item4"]}></List>
//     )
// }

// Field
// Crear un componente PasswordField que acepte una prop status que es un string con los valores posibles: "default", "error", "valid". El componente Field debe renderizar un label que diga "Password" y un input de tipo password. Si status tiene el valor "valid", debe mostrar el input con un borde de color verde. Si tiene el valor "error", debe mostrar el input con un borde de color rojo y renderizar debajo del input un componente small en color rojo que diga: "Invalid password, please try again"

const PasswordField = ({ status }) => {
    let infoStyle = {};
    const styleDiv = {
        display: "flex",
        flexDirection: "column",
        width: "250px",
    }
    if (status === "valid") {
        infoStyle = {...infoStyle, borderColor: "green"}
        

    } 
    else if (status === "error") {
        infoStyle = {...infoStyle, borderColor: "red"}
        
    }

    return (
        <div style={styleDiv}>
            <label>Password</label>
            <input type="password" style={infoStyle}/>
            {status === "error" ? <small style={{color: "red"}}>Invalid password, please try again.</small> : ""}
        </div>
    )
}


const App = () => {
    return (
      <PasswordField status="error"/>
    )
}

ReactDOM.render(<App />, root)