import React, { Component } from 'react';
import BtnList from './BtnList';
import Statistics from './Statistics';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedback: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        total: this.countTotalFeedback(),
      };
    });
  };

  onNeutralBtnClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onBadBtnClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };

  render() {
    const { good, neutral, bad, total, feedback } = this.state;
    return (
      <div className={s.container}>
        <h2 className={s.title}>Please leave feedback</h2>
        <BtnList
          onGoodBtnClick={this.onGoodBtnClick}
          onNeutralBtnClick={this.onNeutralBtnClick}
          onBadBtnClick={this.onBadBtnClick}
        />
        <h2 className={s.title}>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          feedback={feedback}
        />
      </div>
    );
  }
}

export default App;
