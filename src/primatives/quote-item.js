import React from "react";
import styled from "styled-components";
import { colors } from "@atlaskit/theme";

const getBackgroundColor = (isDragging, isGroupedOver, authorColors) => {
  if (isDragging) {
    return authorColors.soft;
  }

  if (isGroupedOver) {
    return colors.N30;
  }

  return colors.N0;
};

const Container = styled.a`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-left: 3px solid lightgreen;
  background-color: ${(props) =>
    getBackgroundColor(props.isDragging, props.isGroupedOver, props.colors)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N70}` : "none"};
  padding: 8px;
  min-height: 40px;
  margin-bottom: 8px;
  user-select: none;
  text-decoration: none;
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

const Content = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
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
  font-size: 11px;
  color: rgb(165, 157, 157);
  font-weight: 600;
`;

const Date = styled.small`
  flex-grow: 0;
  margin: 0;
  font-weight: bold;
  color: #7e7472;
  padding: 4px;
`;
const OrderNo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  color: rgb(177, 169, 169);
`;
const OrderTag = styled.div`
  display: flex;
`;
const OrderId = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #000;
  margin-top: 5px;
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
const Due = styled.span`
  font-size: 12px;
  font-weight: normal;
`;
const DueDate = styled.div``;
const Assign = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
`;
const AssignBy = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid blue;
  border-radius: 10px;
  background-color: lightgray;
  margin-left: 10px;
`;
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
        <OrderNo>
          <OrderTag>
            <Num>{quote.id}</Num>
            <Res>{quote.author.tag}</Res>
          </OrderTag>
          <OrderId>Order No: {quote.orderNo}</OrderId>
        </OrderNo>
        <Content>
          <BlockQuote>{quote.content}</BlockQuote>
          <Footer>
            <DueDate>
              <Due>DUE:</Due>
              <Date>{quote.date} </Date>
            </DueDate>
            <Assign>
              ASSIGNED TO
              <AssignBy />
            </Assign>
          </Footer>
        </Content>
      </Container>
    );
  }
}
