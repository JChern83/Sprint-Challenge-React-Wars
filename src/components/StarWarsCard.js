import React from "react"
import styled from "styled-components"
import {Badge} from "reactstrap"

const Row = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: white;
    text-shadow: 1px 2px black;
    padding: 10px 0px;
`


const Card =styled.div`
    display: flex;
    background-color: rgba(38, 7, 7, .5); 
    flex-direction: column;
    width: 25%;
    border: 1px dotted black;
    color: white;
    text-shadow: 2px 2px black;
    margin: 25px 0 px;
`

const starWarsCard = props => {
    return (
        <Row>
            <Card>
                <Badge color = "info"><h1>{props.data.name}</h1></Badge>
                <h3>Birth Year: {props.data.birth_year}</h3>
                <h3>Eye Color: {props.data.eye_color}</h3>
                <h3>Height: {props.data.height}</h3>
                <h3>Mas: {props.data.mass}</h3>

            </Card> 
        </Row> 

    )
}

export default starWarsCard; 