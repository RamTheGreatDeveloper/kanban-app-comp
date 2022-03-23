import React, { Component } from "react";
import styled from "styled-components";
import QuoteList from "./primatives/quote-list";
import Title from "./primatives/title";

const Container = styled.div`margin: 8px;display: flex;flex-direction: column;background-color: #ebecf0;`;
const Header = styled.div`display: flex;align-items: center;justify-content: center;border-top-left-radius: 2px;border-top-right-radius: 2px;font-size: 12px;transition: background-color 0.2s ease;&:hover {background-color: #f8f8f8;}`;
export default class Column extends Component {
  render() {
    const title = this.props.title;
    const quotes = this.props.quotes;
    return (
      <Container>
        <Header>
          <Title>
            {title} ({this.props.quotes.length})
          </Title>
        </Header>
        <QuoteList
          listId={title}
          listType="QUOTE"
          quotes={quotes}
          isCombineEnabled={Boolean(this.props.isCombineEnabled)}
        />
      </Container>
    );
  }
}
