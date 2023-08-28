import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwiterIcon } from "../icons/tt-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="">
                <TwiterIcon/>
            </a>
            <a href="https://www.instagram.com/guii_149/">
                <InstaIcon/>
            </a>
            <a href="linkedin.com/in/guilherme-diogo-a531351b7">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/guiguiDPS">
                <GitIcon/>
            </a>
        </div>
    )
}