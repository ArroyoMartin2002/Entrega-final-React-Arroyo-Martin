/* Importacion */

//Modulos

//Estilos
import "./AboutUs.css";

//Componentes


/* Logica */
const AboutUs = () => {
    return (
        <>
            <h2 className="sectionName">ABOUT US</h2>
            <section className="section-container"> 
                <div className="section-text">
                    <h2>Welcome to our music store!</h2>
                    <p>We are passionate about all things music and are dedicated to providing our customers with the best selection of instruments, accessories, and sheet music. Our team consists of experienced musicians who are here to share their knowledge and expertise with you, whether you're a beginner or a seasoned pro. We believe that music has the power to enrich lives and bring people together, and we're committed to helping our customers experience the joy of music-making. Thank you for choosing our store and we look forward to serving you!
                    </p>
                </div>
                <div>
                    <img className="section-img" alt="img" src={"https://images.pexels.com/photos/13847666/pexels-photo-13847666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}></img>
                </div>
            </section>

            <section className="section-container flex-row-reverse"> 
                <div className="section-text">
                    <h2 className="text-decoration-underline">Our objetive</h2>
                    <p>we strive to create a sophisticated and memorable shopping experience for music enthusiasts. Our passion for music is reflected in our exquisite selection of instruments, accessories, and sheet music, which have been handpicked to cater to the most discerning musicians. Our team of experienced and knowledgeable professionals is dedicated to providing exceptional service and expert guidance to help you find the perfect instrument that suits your individual style and needs. We believe that music has the power to transcend boundaries and connect people, and we're committed to creating a community of music lovers who share our passion for excellence. Thank you for choosing our store, and we look forward to helping you unlock your musical potential.
                    </p>
                </div>
                <div>
                    <img className="section-img" alt="img" src={"https://images.pexels.com/photos/3423991/pexels-photo-3423991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}></img>
                </div>
            </section>
            
        </>
    );
};

/* Exportacion */

export default AboutUs


