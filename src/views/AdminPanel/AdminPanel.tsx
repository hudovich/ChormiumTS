import Logo from "../../components/logo/Logo"
import image from "../../assets/logo.png"

const AdminPanel = () => {
  return(
    <>
      <header>
        <Logo image={image}/>
        <a href="/">Вернутся на сайт</a>
      </header>
      <div className="content">
        <nav>
          <ul>
            <li>Пункт меню</li>
            <li>Пункт меню</li>
            <li>Пункт меню</li>
          </ul>
        </nav>
        <div>Контент</div>
      </div>
      <footer>Все права защищены</footer>
    </>
  )
}

export default AdminPanel