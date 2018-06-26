/* eslint-disable */
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";

import Button from "../../components/CustomButton/CustomButton.jsx";

import agent from '../../agent';
import { connect } from 'react-redux';

import {
  TICKET_PAGE_UNLOADED,
  GET_TICKET,
  SEARCH_TICKET
} from '../../constants/actionTypes';

const mapStateToProps = state => ({ ...state, tickets: state.ticket.tickets });
const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: GET_TICKET, payload }),
  onSearchTicket: value =>
    dispatch({ type: SEARCH_TICKET }),
  onUnload: () =>
    dispatch({ type: TICKET_PAGE_UNLOADED })
});

class Ticket extends Component {

  componentWillMount() {
    this.props.onLoad(Promise.all([agent.Ticket.getTicket()]))
  }
  componentWillUnmount() {
    this.props.onUnload();
  }
  render() {
    if (!this.props.tickets) {
      return null;
    }
    console.log(this.props.tickets)
    let arrayTicket = []
    this.props.tickets[0].forEach((ticket, idx) => {
      let arr = []
      arr[0] = ticket.ID
      arr[1] = ticket.TICKET_ID
      arrayTicket[idx] = arr
    });
    console.log(arrayTicket)
    return (
      <div className="content">
        <div className="col-md-12" style={{marginBottom: 15 + 'px'}}>
          <Button bsStyle="info" fill type="submit">
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
                    {arrayTicket.map((prop, key) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
