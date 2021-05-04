import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

const Footer = () => {
    return (
        <div className="main-footer" style={{backgroundColor:'#1B1B1B', height:'20rem', overflow:'hidden'}}>
            <div className="container">
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <h4 id="footer-brand"><strong>FLUX</strong></h4>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4 style={{color:'white'}}>Products</h4>
                        <ul className='list-unstyled' style={{color:'white'}}>
                            <li>Web Development</li>
                            <li>Portfolio Design</li>
                            <li>Search Engine Optimization</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4 style={{color:'white'}}>Social Media</h4>
                        <ul className='list-unstyled' style={{color:'white', display: "flex", justifyContent:"left"}}>
                            <li id="insta-icon" className="social"><InstagramIcon/></li>
                            <li className="social"><FacebookIcon/></li>
                            <li className="social"><LinkedInIcon/></li>
                            <li className="social"><TwitterIcon/></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4 style={{color:'white'}}>Contact</h4>
                        <ul className='list-unstyled' style={{color:'white'}}>
                        <li className="social" style={{marginLeft:'0rem'}}><MailIcon/>fluxwebofficial@gmail.com</li>
                        <li className="social" style={{marginLeft:'0rem'}}><PhoneIcon/>965 xxx xxxx</li>
                        </ul>
                    </div>
                </div>
                <div id className='footer-bottom' style={{color:'white', textAlign: "center"}}>
                    <p className='text-xs-center' >
                        &copy;{new Date().getFullYear()} FLUX Corporation - All Rights Reserved
                    </p>
                </div>

            </div>
        </div>
        
    )
}

export default Footer
