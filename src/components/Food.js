import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Grid
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;

@inject('foodsStore')
class Food extends Component {
  deleteFood = () => {
    this.props.foodsStore.deleteFood(this.props.id);
  };

  handleStatusChange = e => {
    this.props.foodsStore.updateFoodStatus(this.props.id, e.target.value);
  };

  render() {
    const { title, description } = this.props;

    return (
      <CardContainer>
        <Card>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            {description}
          </CardContent>
          <CardActions style={{ padding: '14px' }} disableSpacing>
            <Grid
              justify="space-between" // Add it here :)
              container
            >
              <Grid item>
                <IconButton onClick={this.deleteFood}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </CardContainer>
    );
  }
}

export default Food;
