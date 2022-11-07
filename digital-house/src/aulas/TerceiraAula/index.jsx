import './style.scss'
import batataJpg from './../../assets/images/batata.jpg'

export function TerceiraAula(){

    

    const components = [
        { name: 'Component Card', description: 'teste', image:'https://pm1.narvii.com/6960/72324b671534c3c543a16183d813d162b7633cf0r1-469-314v2_128.jpg'}
    ]

    

    return (
        <div>
            <img src={ batataJpg }/>
            <h1>Listas de componentes encontradso em um sistema</h1>
            <ul>
                <li>
                    <img src={ components[0].image }/>
                    <h1>{ components[0].name }</h1>
                    <p>{ components[0].description }</p>
                </li>
            </ul>

        </div>
        
    )
}