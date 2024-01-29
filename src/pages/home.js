import CafeLogoHome from '../components/assets/CafeLogoHome.jpg'
function Home() {
    return (
    <div className="containerHome">
        <h1 >Cafe Buenos Aires</h1>
        <h1> Hola! Bienvenido a nuestra tienda en linea, ¿Que quieres pedir hoy? </h1>
        <img src={CafeLogoHome} alt='cafebuenos' className='logoHome' />
    </div>
     
    )

}
export default Home;