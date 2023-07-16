import { createPortal } from "react-dom";
import { Component } from 'react';

import { Backdrop, ModalField } from "./Modal.styled";

const ModalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.keyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDown);
    }

    keyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose(); 
        }
    };

    onClose = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageURL } = this.props.image;

        return createPortal(
            <Backdrop onClick={this.onClose}>
                <ModalField>
                    <img src={largeImageURL} alt='img' />
                </ModalField>
            </Backdrop>,
            ModalRoot
        );
    }
}


