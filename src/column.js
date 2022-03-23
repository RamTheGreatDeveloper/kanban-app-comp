import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "@atlaskit/theme";
import QuoteList from "./primatives/quote-list";
const Title =  styled.h4`padding: 8px;transition: background-color ease 0.2s;flex-grow: 1;user-select: none;position: relative;&:focus {outline: 2px solid ${colors.P100};outline-offset: 2px;}`;
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
        <QuoteList listId={title} listType="QUOTE" quotes={quotes} isCombineEnabled={Boolean(this.props.isCombineEnabled)} />
      </Container>
    );
  }
}
