import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";

import Button from "../../components/CustomButton/CustomButton.jsx";


class Ticket extends Component {
  render() {
    return (
      <div className="content">
        <div class="row col-md-12">
          <Button bsStyle="info" pullLeft fill type="submit">
            New Ticket
        </Button>
        </div>
        <br />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Ticket List"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Ticket;
