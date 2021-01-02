import './principal.css'
import Navbar from "../../components/navbar/navbar";
import Search from "../../components/search/search";
import Slider from "../../components/slider/slider";
import Nouv from "../../components/nouv/nouv";

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
