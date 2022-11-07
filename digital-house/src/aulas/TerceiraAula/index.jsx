import './style.scss'
import batataJpg from './../../assets/images/batata.jpg'

export function TerceiraAula(){

    

    const components = [
        { name: 'Component Card', description: 'teste', image:'https://pm1.narvii.com/6960/72324b671534c3c543a16183d813d162b7633cf0r1-469-314v2_128.jpg'},
        { name: 'Component Card 1', description: 'teste', image:'https://pm1.narvii.com/6960/72324b671534c3c543a16183d813d162b7633cf0r1-469-314v2_128.jpg'},
        { name: 'Component Card 2', description: 'teste', image:'https://pm1.narvii.com/6960/72324b671534c3c543a16183d813d162b7633cf0r1-469-314v2_128.jpg'}

    ]

    

    return (
        <div>
            
            <h1>Listas de componentes encontradso em um sistema</h1>
            <ul>
                {
                    components.map(component => (
                        <li>                   
                            <img src={ component.image }/>
                            <h1>{ component.name }</h1>
                            <p>{ component.description }</p>
                        </li>
                    ))
                }
              
            </ul>

        </div>   
        
    )
}