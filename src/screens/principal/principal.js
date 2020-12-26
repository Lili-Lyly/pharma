import './principal.css'
import Navbar from "../../components/navbar/navbar";
import Search from "../../components/search/search";

const Principal = () => {
    return (
        <div className={'principal-all'}>
            <Navbar></Navbar>
            <Search></Search>
        </div>
    )
}
export default Principal;
