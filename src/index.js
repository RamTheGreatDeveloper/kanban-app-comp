import React, { Component } from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ListGroup from "./listGroup";
import Column from "./column";
import { reorderQuoteMap } from "./reorder";
import { DragDropContext } from "react-beautiful-dnd";
import { authorQuoteMap } from "./data";
import Search from "./search";
const NavBar = styled.div`
  background-color: #f8f8f8;
  display: flex;
  padding: 20px 30px;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
`;
const Container = styled.div`
  display: inline-flex;
`;
class Board extends Component {
  static defaultProps = {
    isCombineEnabled: false,
  };
  state = {
    columns: this.props.initial,
    ordered: Object.keys(this.props.initial),
  };
  onDragEnd = (result) => {
    // dropped nowhere
    if (!result.destination) {
      return;
    }
    const source = result.source;
    const destination = result.destination;
    // did not move anywhere
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    });
    this.setState({ columns: data.quoteMap });
  };

  render() {
    const columns = this.state.columns;
    const ordered = this.state.ordered;
     return (
      <React.Fragment>
        <NavBar>
          <ListGroup></ListGroup>
          <Search></Search>
        </NavBar>
        <DragDropContext onDragEnd={this.onDragEnd}> <Container>
        {ordered.map((key, index) => (
          <Column key={key} index={index} title={key} quotes={columns[key]} isCombineEnabled={this.props.isCombineEnabled} />
        ))}
      </Container></DragDropContext>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Board initial={authorQuoteMap} />, rootElement);
