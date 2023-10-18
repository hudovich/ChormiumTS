import s from './Contact.module.css'
import { FC } from "react";
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import Phone from '../../components/phone/Phone';
import ContactForm from '../../components/forms/Contact/ContactForm';

const Contact: FC = () => {

  return(
    <>
      <Header />
        <div className={s.size}>
          <div className={s.nameBox}>Contacts</div>
          <div className={s.box}>
            <div className={s.left}>
              <div className={s.name}>Chromium</div>
              <div className={s.description}>About Us Content</div>
              <div className={s.addres}>Chromium Co , 25 Silicon Road, London D04 89GR</div>
              <div className={s.phone}><Phone/></div>
              <div className={s.email}>test@chromium.com</div>
            </div>
            <div className={s.right}>
            <ContactForm />
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28694.71621131157!2d16.165285030291884!3d51.20219090697919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2spl!4v1695827308503!5m2!1sru!2spl" style={{display:'flex',justifyContent:'center',border:'none',margin:'10px'}} width="98%" height="450"></iframe>
        </div>
      <Footer />
    </>
  );
}

export default Contact;