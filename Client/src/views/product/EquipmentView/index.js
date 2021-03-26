import { useState } from 'react';
import { React, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import axios from 'axios';

class EquipmentView extends Component {
  state = {
    equipment: [],
  };

  constructor() {
    super();
    this.id = window.location.pathname.split('/')[3];
  }

  getEquipments = () => {
    axios.get(`/api/v1/sport/eqtype/${this.id}`).then((res) => {
      this.setState({ equipment: res.data.docs.equipments });
    });
  };

  componentDidMount = () => {
    this.getEquipments();
  };

  render() {
    console.log(this.state.equipment);
    if (this.state.equipment.length != 0) {
      console.log(this.state.equipment);
      return (
        <div>
          {this.state.equipment.map((eq) => {
            return <div>{eq.id}</div>;
          })}
        </div>
      );
    }
    return null;
  }
}

export default EquipmentView;
