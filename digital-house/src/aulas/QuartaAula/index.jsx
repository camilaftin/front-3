import './style.scss'
import youtubeImage from './../../assets/images/youtube.jpg'

export function QuartaAula() {

    const componentsFinded = [

        { 
            title: 'Video Component', 
            image: youtubeImage, 
            text:'Lorem ipsum'
        },
        { 
            title: 'Input Component', 
            image: youtubeImage, 
            text:'Lorem ipsum'
        }

    ]


    return (
        <div className='quarta-aula-component'>
            <h1 className='main-title'>Componentes identificados</h1>

            <ul className = 'components-finded'>

                {
                    componentsFinded.map(
                        component => {
                            return (
                                <li>
                                <img src={component.image} alt=""/>
                                <h1>{component.title}</h1>
                                <p>{component.text}</p>
                            </li>

                            )
                        }

                    )
                }

              
            </ul>
        </div>
        
        
    )

}