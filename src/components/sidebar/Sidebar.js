import React, {useContext} from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import prodContext from '../../context/notes/prodContext';
function Sidebar(props) {

    let context = useContext(prodContext);
    const {setcat} = context;
    let navigate = useNavigate()
    const {toggleSiebar} = props;

    const hanldeHome = () => {
        navigate('/')
        toggleSiebar()

    }

    const handleSetCat = (_cat) => {
        setcat(_cat);
        toggleSiebar();
    }
    return (
        <div className='sidebar-container'>
            <div className="sidebar">
            <div className="sidebar-heading">
                <div className="sidebar-heading-icon">
                    <AiOutlineUser size="40" color="grey"/>
                </div>
                <div className="sidebar-heading-content">
                    Hello, User
                </div>
            </div>



            <div className="sidebar-option" onClick={hanldeHome}>
                <div className='sidebar-option-heading'>
                    Home
                </div>

            </div>


            <div className="sidebar-option">
                <div className='sidebar-option-heading' onClick={()=> handleSetCat("Best Sellers")}>
                    Trending
                </div>
                <div className="sidebar-option-items" onClick={()=> handleSetCat("Best Sellers")} >
                    Best Sellers
                </div>
            </div>


            
            <div className="sidebar-option">
                <div className='sidebar-option-heading'>
                    Shop By Department
                </div>
                <div className="sidebar-option-items" onClick={()=> handleSetCat("Electronics")} >
                    TV, Appliances, Electronics 
                </div>
                <div className="sidebar-option-items" onClick={()=> handleSetCat("Fashion")}>
                    Fashion
                </div>
                <div className="sidebar-option-items" onClick={()=> handleSetCat("Books")}>
                   Books
                </div>
            </div>


            
    

            
            <div className="sidebar-option">
                <div className='sidebar-option-heading'>
                    Help &amp; Settings
                </div>
                <div className="sidebar-option-items">
                    Your Account
                </div>
                <div className="sidebar-option-items">
                    Customer Service
                </div>
                <div className="sidebar-option-items">
                  Sign In
                </div>
            </div>
            </div>
            <div className='sidebar-cross' onClick={toggleSiebar}>
                <AiOutlineClose size="35"/>
            </div>
        </div>
    )
}

export default Sidebar;
