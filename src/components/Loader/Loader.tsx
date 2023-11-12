import React from 'react';
import './Loader.scss'
import {Container} from "react-bootstrap";

interface LoaderProps {}

export default function Loader(props: LoaderProps) {
    return (
        <Container className={`Loader justify-content-center align-items-center`}>
            <span className="loading"></span>
        </Container>
    );
}