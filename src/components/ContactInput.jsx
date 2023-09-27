import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
    }
  }

  onNameChange(e) {
    this.setState(() => {
      return {
        name: e.target.value
      }
    })
  }

  onTagChange(e) {
    this.setState(() => {
      return {
        tag: e.target.value
      }
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addContact(this.state);
  }

  render () {
    return (
      <form className="contact-input" onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" placeholder='Nama' onChange={(e) => this.onNameChange(e)} />
        <input type="text" placeholder='Tag' onChange={(e) => this.onTagChange(e)} />
        <button type='submit'>Tambah</button>
      </form>
    )
  }
}

export default ContactInput;