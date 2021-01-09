import './list-nouv-card.css'
import NouvCard from "../nouv-card/nouv-card";
import {useEffect, useState} from "react";
import API from "../../services/api";

const ListNouvCard = () => {
    const [cards, setCards] = useState();
    useEffect(() => {
        API.get('/item/first').then((res) => {
            setCards(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className={'list-nouv-card'}>
            {cards && cards.map((card) =>
                <NouvCard
                    title={card.title}
                    price={card.price}
                    image={card.img}
                />
            )}
        </div>
    )
}

export default ListNouvCard;
