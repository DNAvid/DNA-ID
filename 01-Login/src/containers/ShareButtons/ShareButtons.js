var Radium = require('radium');
import React from 'react'
var Radium = require('radium');
import styles from './styles.module.js'

import {
        ShareButtons,
        ShareCounts,
        generateShareIcon
} from 'react-share';

const {
        FacebookShareButton,
        GooglePlusShareButton,
        LinkedinShareButton,
        TwitterShareButton,
        PinterestShareButton,
        VKShareButton 
} = ShareButtons;

const {
        FacebookShareCount,
        GooglePlusShareCount,
        LinkedinShareCount,
        PinterestShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const shareUrl = 'https://dnavid.com';
const shareTitle = 'DNAvID: It\'s my genome';

class SocialShareButtons extends React.Component {
        render() {
                const shareUrl = 'https://dnavid.com';
                const title = 'DNAvID: it\'s my genome';

                return (
                        <div style={styles.Demo__container}>
                                <div style={styles.Demo__someNetwork}>
                                        <FacebookShareButton
                                                url={shareUrl}
                                                title={title}
                                                style={styles.Demo__someNetwork__shareButton}>
                                                <FacebookIcon
                                                        size={32}
                                                        round />
                                        </FacebookShareButton>

                                        <FacebookShareCount
                                                url={shareUrl}
                                                style={styles.Demo__someNetwork__shareCount}>
                                                {count => count}
                                        </FacebookShareCount>
                                </div>

                                <div style={styles.Demo__someNetwork}>
                                        <TwitterShareButton
                                                url={shareUrl}
                                                title={title}
                                                style={styles.Demo__someNetwork__shareButton}>
                                                <TwitterIcon
                                                        size={32}
                                                        round />
                                        </TwitterShareButton>

                                        <div style={styles.Demo__someNetwork__shareCount}>
                                                &nbsp;
                                        </div>
                                </div>
                                <div style={styles.Demo__someNetwork}>
                                        <GooglePlusShareButton
                                                url={shareUrl}
                                                style={styles.Demo__someNetwork__shareButton}>
                                                <GooglePlusIcon
                                                        size={32}
                                                        round />
                                        </GooglePlusShareButton>

                                        <GooglePlusShareCount
                                                url={shareUrl}
                                                style={styles.Demo__someNetwork__shareCount}>
                                                {count => count}
                                        </GooglePlusShareCount>
                                </div>
                                <div style={styles.Demo__someNetwork}>
                                        <LinkedinShareButton
                                                url={shareUrl}
                                                title={title}
                                                style={styles.Demo__someNetwork__shareButton}>
                                                <LinkedinIcon
                                                        size={32}
                                                        round />
                                        </LinkedinShareButton>

                                        <LinkedinShareCount
                                                url={shareUrl}
                                                style={styles.Demo__someNetwork__shareCount}>
                                                {count => count}
                                        </LinkedinShareCount>
                                </div>
                        </div>
                )
        }
};

export default Radium(SocialShareButtons);
