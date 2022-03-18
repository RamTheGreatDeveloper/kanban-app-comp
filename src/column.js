import React, { Component } from "react";
import styled from "styled-components";
import { grid, borderRadius } from "./constants";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "./primatives/quote-list";
import Title from "./primatives/title";

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  font-size: 12px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export default class Column extends Component {
  render() {
    const title = this.props.title;
    const quotes = this.props.quotes;
    const index = this.props.index;
    return (
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
          <Container ref={provided.innerRef} {...provided.draggableProps}>
            <Header isDragging={snapshot.isDragging}>
              <Title
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                {title} ({this.props.quotes.length})
              </Title>
            </Header>
            <QuoteList
              listId={title}
              listType="QUOTE"
              // style={{
              //   backgroundColor: snapshot.isDragging ? #000 : null,
              // }}
              quotes={quotes}
              isCombineEnabled={Boolean(this.props.isCombineEnabled)}
            />
          </Container>
        )}
      </Draggable>
    );
  }
}
