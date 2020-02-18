import React, { Component } from 'react';
import { connect } from 'react-redux'



class SecondaryEmotionSelector extends Component {

    state = {
        primarySelection: {
            emotionId: '',

        }
    }

    handleChangeFor = (propertyName, event) => {
        console.log(event.target.value)
        this.setState({
            emotionId: {
                ...this.state.primarySelection,
                [propertyName]: event.target.value
            }
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        let field = this.state.feels;

        if (field === "") {
            alert("Please pick an emotion to move ahead")
        } else {
            this.props.history.push('/SecondaryEmotion')
            this.props.dispatch({
                type: 'STORE_PRIMARY_ID',
                payload: this.state.primarySelection


            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label> Add Book </label>
                <input value={this.state.newBook.description} onChange={(event) => this.handleChangeFor('description', event)} />
                <br />
                <label> img url </label>
                <input value={this.state.newBook.image_url} onChange={(event) => this.handleChangeFor('image_url', event)} />
                <input type="submit" onClick={this.handleClick} />
            </form>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(SecondaryEmotionSelector)