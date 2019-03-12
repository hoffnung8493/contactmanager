import React, { Component } from "react";

class AddContact extends Component {
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      phone: this.phoneInput.current.value,
      email: this.emailInput.current.value
    };
    console.log(contact);
  };
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }
  static defaultProps = {
    name: "tobi",
    email: "asdf@asdfasdf.com",
    phone: "00-00-00"
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                autoComplete="off"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                autoComplete="off"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                autoComplete="off"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input type="submit" className="btn btn-light btn-block" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
