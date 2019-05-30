import { React, Fragment, Component } from 'react'
import {
  Dialog,
  Button,
  Fab,
  Add,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText
} from 'material-ui'

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () =>
    this.setState({
      open: !this.state.open
    })

  render() {
    const { open } = this.state

    return (
      <Fragment>
        <Fab size="small" color="secondary" onClick={this.handleToggle}>
          <Add />
        </Fab>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a New Exerciseű
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}
