import './Styles/PageTopic.css'
import {Link} from 'react-router-dom'
import Topics from '../functions/topics'

const Page = ()=>{
    return (
        <main className='bodyPage'>
            <header style={{display: "flex",justifyContent: "space-evenly" ,alignItems: "center"}}>
                <div className='BackTo'><Link to="/" className='Text'>Temas</Link></div>
                <div className='TitlePage'><h1>{Topics[1]}</h1></div>
            </header>
            <section className='content'>
                <article className='contentOfPage'>
                <h2>Teoría</h2>
                <p className='ParagraphPage'>El reto principal en la aplicación de la regla de sustitución es
                pensar en una sustitución apropiada. Intente elegir u como
                alguna función en el integrado cuya diferencia también se
                presente. Si no es posible, escoja u como alguna parte
                complicada del integrando. Encontrar la sustitución correcta
                conlleva algo de arte. No es raro que la conjetura sea errónea; si
                su primera suposición no funciona, intente con otra.</p>
                <h2>Teorema</h2>
                <p className='ParagraphPage'>Si u = g(x) es una función diferenciable cuyo rango es un
                intervalo l, y fes continua sobre l, entonces:</p>
                <img src="/img/TeoremaSustitucion.PNG" alt="imagen" />
                <h2>Ejemplo</h2>
                </article>
            </section>
        </main>
    )
}

export default Page