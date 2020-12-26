import './search.css'
import srh from '../../assets/images/noun_Search_860389.svg'
import logo from '../../assets/images/logo-1502891216.jpg'

const Search = () => {
    return (
        <div className={'search-container'}>
            <div className={'search-part1'}>
                <img className={'search-logo'} src={logo}/>
            </div>
            <div className={'search-part2'}>
                <input type={'search'} placeholder={'Rechercher'} className={'search-input'}/>
                <div className={'search-icon-container'}>
                    <img src={srh} className={'search-img'}/>
                </div>
            </div>
            <div className={'search-part3'}></div>
        </div>
    )
}
export default Search;
