import { Component } from 'react';

export default class Check extends Component {
  state = {
    value: '',
  };

  handleCheck = e => {
    this.setState({
      value: e.target.value,
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.show(this.state);
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          бургер
          <input
            type="radio"
            name="radio"
            value="burher"
            onChange={this.handleCheck}
            checked={this.state.value === 'burher'}
          />
        </label>
        <label>
          шаурма
          <input
            type="radio"
            name="radio"
            value="kebab"
            onChange={this.handleCheck}
            checked={this.state.value === 'kebab'}
          />
        </label>
        <label>
          піца
          <input
            type="radio"
            name="radio"
            value="pizza"
            onChange={this.handleCheck}
            checked={this.state.value === 'pizza'}
          />
        </label>
        <button type="submit">xxx</button>
      </form>
    );
  }
}
