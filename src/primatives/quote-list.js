import React from "react";
import styled from "styled-components";
import { colors } from "@atlaskit/theme";
import { Droppable, Draggable } from "react-beautiful-dnd";
import QuoteItem from "./quote-item";

const getBackgroundColor = (isDraggingOver, isDraggingFrom) => {
  if (isDraggingOver) {
    return colors.R50;
  }
  if (isDraggingFrom) {
    return colors.T50;
  }
  return colors.N30;
};

const Wrapper = styled.div`
  background-color: ${(props) =>
    getBackgroundColor(props.isDraggingOver, props.isDraggingFrom)};
  display: flex;flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : "inherit")};
  padding: 8px;border: 8px;padding-bottom: 0;transition: background-color 0.2s ease, opacity 0.1s ease;user-select: none;width: 350px;`;

const DropZone = styled.div`min-height: 600px;padding-bottom: 8px;`;

const ScrollContainer = styled.div`&::-webkit-scrollbar {width: 8px;}&::-webkit-scrollbar-thumb {border-radius: 30px;border: 1px solid #f8f8f8;background-color: #ccc;}&::-webkit-scrollbar-thumb:hover {background-color: rgb(184, 184, 184);}
  overflow-x: auto;overflow-y: auto;max-height: 600px;
`;
const Container = styled.div``;

class InnerQuoteList extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.quotes !== this.props.quotes;
  }

  render() {
    return this.props.quotes.map((quote, index) => (
      <Draggable
        key={quote.id}
        draggableId={quote.id}
        index={index}
        shouldRespectForceTouch={false}
      >
        {(dragProvided, dragSnapshot) => (
          <QuoteItem
            key={quote.id}
            quote={quote}
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
            provided={dragProvided}
          />
        )}
      </Draggable>
    ));
  }
}

class InnerList extends React.Component {
  render() {
    const { quotes, dropProvided } = this.props;

    return (
      <Container>
        <DropZone ref={dropProvided.innerRef}>
          <InnerQuoteList quotes={quotes} />
          {dropProvided.placeholder}
        </DropZone>
      </Container>
    );
  }
}

export default class QuoteList extends React.Component {
  static defaultProps = {
    listId: "LIST",
  };
  render() {
    const {ignoreContainerClipping,scrollContainerStyle,isDropDisabled,isCombineEnabled,listId,listType,style,quotes,title,} = this.props;

    return (
      <Droppable
        droppableId={listId}
        type={listType}
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
        isCombineEnabled={isCombineEnabled}
      >
        {(dropProvided, dropSnapshot) => (
          <Wrapper
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
            {...dropProvided.droppableProps}
          >
            {this.props.quotes.length === 0 ? (
              <InnerList
                quotes={quotes}
                title={title}
                dropProvided={dropProvided}
              />
            ) : (
              <ScrollContainer style={scrollContainerStyle}>
                <InnerList
                  quotes={quotes}
                  title={title}
                  dropProvided={dropProvided}
                />
              </ScrollContainer>
            )}
          </Wrapper>
        )}
      </Droppable>
    );
  }
}
