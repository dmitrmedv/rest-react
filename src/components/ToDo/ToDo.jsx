import { Component } from 'react';
import { Form } from './ToDo.styled';

export default class ToDo extends Component {
  state = {
    adress: '',
    name: '',
    discription: '',
  };

  handleInputChange = ({ target }) => {
    const { value } = target;
    this.setState({
      [target.name]: value,
    });
  };

  btn = evt => {
    evt.preventDefault();
    this.setState({
      adress: '',
      name: '',
      discription: '',
    });
    return this.props.addTodo(this.state);
  };

  render() {
    const { name, adress, discription } = this.state;
    return (
      <Form onSubmit={this.btn}>
        <label>
          ПІБ:
          <input
            autoComplete="off"
            type="text"
            value={name}
            name="name"
            onChange={this.handleInputChange}
          />
        </label>
        {/* <label>
          Адреса:
          <input
            autoComplete="off"
            name="adress"
            type="text"
            value={adress}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Питання:
          <input
            autoComplete="off"
            name="discription"
            type="text"
            value={discription}
            onChange={this.handleInputChange}
          />
        </label> */}
        <button type="submit">відправити</button>
      </Form>
    );
  }
}
