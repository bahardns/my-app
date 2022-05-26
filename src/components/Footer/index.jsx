import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import  styles  from "./styles.module.scss";
class Footer extends Component {

    render() {
        return (
            <>
              <div className={styles.container}>
              {/* <span> our social media adress</span> */}
              <div className={styles.icon}>
                  <SocialIcon url="https://tr-tr.facebook.com/" network="facebook" className={styles.social}/>
                  <SocialIcon  url="https://twitter.com/?lang=tr" network="twitter" className={styles.social}/>
                  <SocialIcon url="https://www.instagram.com/?hl=tr" network="instagram" className={styles.social}/>
                  <SocialIcon url="https://tr.linkedin.com/" network="linkedin" className={styles.social}/>
                  <SocialIcon url="https://tr.linkedin.com/" network="github" className={styles.social}/>
                </div>
                </div>
            <div className={styles.copyright}>
                <p>© 2022 Copyright Bahar Daniş</p>
                </div>
            </>
        );
    }
}

export default Footer;