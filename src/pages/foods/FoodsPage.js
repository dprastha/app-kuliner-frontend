import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Fab, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';
import Food from '../../components/Food';

const FoodsWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const FoodsHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #757c87;
`;

const Title = styled.h1`
  width: 100%;
  color: #edf4ff;
`;

const CreateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FoodsContainer = styled.div`
  padding-top: 20px;
`;

const EmptyFoodsPlaceholder = styled.p`
  color: #edf4ff;
  text-align: center;
  font-size: 22px;
`;

const SignOutIconContainer = styled.div`
  margin-left: 10px;
  
  .signOutIcon {
    fill: #edf4ff;
  }
`;

@inject('foodsStore', 'routerStore', 'userStore')
@observer
class FoodsPage extends Component {
  componentDidMount() {
    this.props.foodsStore.fetchFoods();
  }

  handleSignOut = () => {
    const { userStore, foodsStore } = this.props;
    userStore.signout();
    foodsStore.resetFoods();
    window.location.hash = '/signin';
  };

  renderFoods = () => {
    const { foodsStore } = this.props;

    if (!foodsStore.foods.length) {
      return <EmptyFoodsPlaceholder>No foods available. Create one?</EmptyFoodsPlaceholder>;
    }

    return foodsStore.foods.map(food => (
      <Food
        key={food.id}
        id={food.id}
        title={food.name}
        description={food.description}
        status={food.status}
      />
    ));
  };

  render() {
    return (
      <FoodsWrapper>
        <FoodsHeader>
          <Title>Food list.</Title>

          <CreateButtonContainer>
            <Fab
              variant="extended"
              onClick={() => { window.location.hash = '/foods/create'; }}
            >
              <AddIcon />
              Create Food
            </Fab>

            <SignOutIconContainer>
              <IconButton onClick={this.handleSignOut}>
                <SignOutIcon className="signOutIcon" />
              </IconButton>
            </SignOutIconContainer>
          </CreateButtonContainer>
        </FoodsHeader>

        <FoodsContainer>
          {this.renderFoods()}
        </FoodsContainer>
      </FoodsWrapper>
    );
  }
}

export default FoodsPage;
