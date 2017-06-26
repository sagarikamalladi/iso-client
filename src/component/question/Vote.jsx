import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import uid from 'uid2';

const Arrow = ({direction, ...props}) => (
  <svg viewBox="0 0 28 12" {...props}>
    <polyline
      points={
        direction === 'up' ?
          "0.595,11.211 14.04,1.245 27.485,11.211" :
          "27.485,0.803 14.04,10.769 0.595,0.803"
      }
    />
  </svg>
);

Arrow.defaultProps = {
  direction: 'up'
};

class NumberColumn extends Component {
  _getNumbers() {
    let numbers = [];
    let i = 0;

    while (i < 10) {
      numbers.push(<div key={uid(5)}>{i}</div>);
      i++
    }

    return numbers
  }

  render() {
    const {current} = this.props;

    return (
      <div className="vote__column">
        <Motion
          style={{y: spring(current * 10)}}
        >
          {({y}) =>
            <div
              style={{
                transform: `translateY(${-y}%)`
              }}
            >
              {this._getNumbers()}
            </div>
          }
        </Motion>
      </div>
    )
  }
}


class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.votes
    }
  }

  componentDidMount() {
    this.setState({count: this.props.votes})
  }

  _getCount() {
    const counts = this.state.count.toString().split('');

    return counts.map(_count => {
      if (_count === '-') {
        return <span key={uid(3)} className="vote__column">-</span>
      } else {
        return <NumberColumn key={uid(3)} current={parseFloat(_count)}/>
      }
    })
  }

  render() {
    const {count} = this.state;

    return (
      <div className="vote">
        <Arrow
          key={uid(2)}
          direction="up"
          className="vote__arrow vote__arrow--up"
          onClick={() => this.setState({count: count + 1})}
        />
        <div className="vote__columns">
          {this._getCount()}
        </div>
        <Arrow
          key={uid(2)}
          direction="down"
          className="vote__arrow vote__arrow--down"
          onClick={() => this.setState({count: count - 1})}
        />
      </div>
    )
  }
}

export default Vote;