import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  /**
   * state 오브젝트 안에 있는 count를 증가한 후 , state 업데이트
   * 리액트에 state가 업데이트 되었음을 알리기 위해 setState() 호출
   */
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
  };
  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
  };
  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
