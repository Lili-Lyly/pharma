import './principal.css'
import Navbar from "../../components/navbar/navbar";
import Search from "../../components/search/search";
import Slider from "../../components/slider/slider";
import Nouv from "../../components/nouv/nouv";
import NouvCard from "../../components/nouv-card/nouv-card";

const Principal = () => {
    return (
        <>
            <div className={['principal-all']}>
                <Navbar/>
                <Search/>
                <Slider/>
                <Nouv/>
                <NouvCard></NouvCard>
            </div>
        </>
    )
}
export default Principal;
