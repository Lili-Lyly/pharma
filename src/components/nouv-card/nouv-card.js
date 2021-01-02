import './nouv-card.css'
import im1 from '../../assets/images/liquidguard-lingettes-de-désinfection-permanente.jpg'

const NouvCard = () => {
    return (
        <div className={'nouv-card-container'}>
            <div className={'nouv-card-img-container'}>
                <img src={im1} className={'nouv-card-img'}/>
            </div>
            <div className={'nouv-card-description-container'}>
                <span className={'nouv-card-description'}>
                exemple text  sur ce medicament ...
            </span>
            </div>
            <div className={'nouv-card-price-container'}>
                <span className={'nouv-card-price'}>200$</span>
            </div>
            <div className={'nou-card-actions'}>

            </div>
        </div>
    )
}


export default NouvCard
