import React from "react";
import styled from "styled-components";
import { colors } from "@atlaskit/theme";
import { borderRadius, grid } from "../constants";

const getBackgroundColor = (isDragging, isGroupedOver, authorColors) => {
  if (isDragging) {
    return authorColors.soft;
  }

  if (isGroupedOver) {
    return colors.N30;
  }

  return colors.N0;
};

const getBorderColor = (isDragging, authorColors) =>
  isDragging ? authorColors.hard : "transparent";

const Container = styled.a`
  border-top-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left: 1px solid green;
  /* border-radius: ${borderRadius}px; */

  background-color: ${(props) =>
    getBackgroundColor(props.isDragging, props.isGroupedOver, props.colors)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N70}` : "none"};
  padding: ${grid}px;
  min-height: 40px;
  margin-bottom: ${grid}px;
  user-select: none;
  text-decoration: none;
  /* anchor overrides */
  color: ${colors.N900};

  &:hover,
  &:active {
    color: ${colors.N900};
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.colors.hard};
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${grid}px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Content = styled.div`
  /* flex child */
  flex-grow: 1;
  /*
    Needed to wrap text in ie11
    https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox
  */
  flex-basis: 100%;
  /* flex parent */
  display: flex;
  flex-direction: column;
`;

const BlockQuote = styled.div`
  color: rgb(165, 157, 157);
  font-size: 12px;
  margin-bottom: 5px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: rgb(145, 143, 143);
`;

const Author = styled.small`
  flex-grow: 0;
  margin: 0;
  background-color: ${(props) => props.colors.soft};
  border-radius: ${borderRadius}px;
  font-weight: normal;
  padding: ${grid / 2}px;
`;
const OrderNo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  color: rgb(177, 169, 169);
`;
const OrderTag = styled.div`
  display: flex;
`;
const OrderId = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
const Num = styled.div``;
const Res = styled.div`
  margin-left: 10px;
  border: 1px solid rgb(94, 94, 231);
  padding: 2px;
  border-radius: 3px;
  color: rgb(95, 95, 202);
  background-color: #ece7e7;
`;
const AssignBy = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid blue;
  border-radius: 10px;
  background-color: lightgray;
  margin-left: 10px;
`;

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent
export default class QuoteItem extends React.PureComponent {
  render() {
    const { quote, isDragging, isGroupedOver, provided } = this.props;

    return (
      <Container
        href={quote.author.url}
        isDragging={isDragging}
        isGroupedOver={isGroupedOver}
        colors={quote.author.colors}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {/* <Avatar src={quote.author.avatarUrl} alt={quote.author.name} /> */}
        <OrderNo>
          <OrderTag>
            <Num>{quote.id}</Num>
            <Res>{quote.author.tag}</Res>
          </OrderTag>
          <OrderId>Order: {quote.orderNo}</OrderId>
        </OrderNo>
        <Content>
          <BlockQuote>{quote.content}</BlockQuote>
          <Footer>
            <Author colors={quote.author.colors}>{quote.author.date} </Author>
            AssignedBy
            <AssignBy />
          </Footer>
        </Content>
      </Container>
    );
  }
}
