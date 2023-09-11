import './Styles/Home.css'
import Topics from '../functions/topics'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Home = ()=>{

    const [selectTropic, setSelectTropic] = useState(null);

   
    return(<>
        <header className="" style={{backgroundImage: 'url(./img/headerimage.jpg)', height: '100vh',width: '100vw', backgroundSize: 'cover'}}>
            <div className='Opacar' style={{backgroundColor: 'rgba(52, 224, 105, 0.5)'}}>
             <h1 className='Title'>Calculo II</h1>
             <section className='downHome'>
                <a href="#MenuTemas"><p className='SubTitleHome'>Ver temas</p>
                <figure><img className='downArrowHome' src="/img/downArrow.svg" alt="" /></figure></a>
             </section>
            </div>
        </header>
        <section className='MenuTemas' id='MenuTemas'>
            <h1 className='TitleMenu'>Temas: </h1>
            <article className='MenuDiv'>
                <ul className='ListMenu'>
                    {
                        Topics.slice(0,6).map((topic, index)=>{
                            return <li 
                                    key={index}
                                    onMouseEnter={()=>{setSelectTropic(index)}}
                                    onMouseLeave={()=>{setSelectTropic(null)}}
                                    className ={selectTropic == index ? "isGrow": ""}
                                    ><Link className='tems' to={`/tema/${index}`}><span >{topic}</span></Link></li>
                        })
                    }
                </ul>
                <ul className='ListMenu'>
                    {
                        Topics.slice(6).map((topic, index)=>{
                            return <li key={index} 
                            onMouseEnter={()=>{setSelectTropic(index +6)}}
                            onMouseLeave={()=>{setSelectTropic(null)}}
                            className ={selectTropic == index +6 ? "isGrow": ""}>
                            <Link className='tems' to={`/tema/${index + 6}`}><span >{topic}</span></Link></li>
                        })
                    }
                </ul>
            </article>
        </section>
        </>
        )
}
 
export default Home
