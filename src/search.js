import React from "react";
import "./styles.css";
import styled from "styled-components";
const StyledInput = styled.div`
  i {
    position: absolute;
    left: 79%;
    top: 38px;
    padding: 9px 8px;
    fill: black;
    transition: 0.3s;
  }
`;
const Input = styled.input`
  height: 20px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #ebe5e5;
  border-radius: 2px;
  margin-left: 594px;
  margin-top: 27px;
  font-family: sans-serif;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
`;
const Table = styled.table``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Td = styled.td``;

const Search = () => {
    return (
        <Table>
            <Tbody>
                <Tr>
                    <Td>
                        <StyledInput>
                            <Input type="text" placeholder="Search" />
                            <i className="fa fa-search"></i>
                        </StyledInput>
                    </Td>
                    <Td>
                        <div style={{ marginTop: 23, height: 8 }} className="js2">
                            <i className="fa fa-cog"></i>
                            Configurations
                        </div>
                    </Td>
                    <Td>
                        <p style={{ marginTop: 23 }}>

                            (0-30)
                        </p>
                    </Td>
                    <Td>
                        <div style={{ marginTop: 23, height: 8 }} className="js2">
                            <i className="fa fa-angle-left"></i>
                        </div>
                    </Td>
                    <Td>
                        <div style={{ marginTop: 23, height: 8 }} className="js2">
                            <i className="fa fa-angle-right"></i>
                        </div>
                    </Td>
                </Tr>
            </Tbody>
        </Table >
    );
};

export default Search;
