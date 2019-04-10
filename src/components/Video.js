import React, { Component } from "react";

class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {embed: this.props.embed ? this.props.embed : 'n1hHr62viSU'}
    }

    componentDidMount() {
        const source = `https://img.youtube.com/vi/${this.state.embed}/sddefault.jpg`;
        const image = new global.Image();
        image.srcset = source;
        image.alt = 'Bergen STEM Youtube'
        image.classList.add('lazy');
        image.addEventListener('load', () => {
            this.refs.videoWrap.appendChild(image);
        });
    }

    loadVideo() {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${this.state.embed}?rel=0&showinfo=0&autoplay=1`);    
        this.refs.videoWrap.innerHTML = '';
        this.refs.videoWrap.appendChild(iframe);
    }

    render() {
        return (
            <div>
                <div className="video__wrapper" onClick={this.loadVideo.bind(this)} ref="videoWrap" embed="n1hHr62viSU">
                    <div className="play__button">
                    </div>
                </div>
            </div>
        );
    }
}


export default Video;