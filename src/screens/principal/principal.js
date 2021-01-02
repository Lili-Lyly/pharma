import './principal.css'
import Navbar from "../../components/navbar/navbar";
import Search from "../../components/search/search";
import Nouv from "../../components/nouv/nouv";
import Slider from "../../components/slider/slider";

const Principal = () => {
    return (
        <>
            <div className={['principal-all']}>
                <Navbar/>
                <Search/>
                <Slider/>
                <Nouv/>
            </div>
        </>
    )
}
export default Principal;
