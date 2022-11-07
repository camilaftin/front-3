import './style.scss'
import youtubeImage from './../../assets/images/youtube.jpg'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'


export function QuintaAula(){


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

            {/* <QuintaAulaItem title='Primeiro Componente'/> */}

            <h1 className='main-title'>Componentes identificados</h1>

            <ul className = 'components-finded'>

                {
                    componentsFinded.map(
                        component => {
                            return (
                                <QuintaAulaItem item={component}/>
                            )
                        }

                    )
                }

              
            </ul>
        </div>
        
        
    )

}