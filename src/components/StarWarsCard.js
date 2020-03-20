import React from "react"
import styled from "styled-components"
import {Badge} from "reactstrap"


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