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
                <li>
                    <img src={youtubeImage} alt=""/>
                    <h1>Video</h1>
                    <p>Lorem ipsum</p>
                </li>
            </ul>
        </div>
        
        
    )

}