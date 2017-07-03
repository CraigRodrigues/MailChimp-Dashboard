import React, { Component } from 'react'
import axios from 'axios'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import FormField from 'grommet/components/FormField'
import Form from 'grommet/components/Form'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'

const API_KEY_URL = 'http://kb.mailchimp.com/integrations/api-integrations/about-api-keys#Find-or-Generate-Your-API-Key'

export default class InputAPIModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      error: ''
    }

    this.validateAPIKey = this.validateAPIKey.bind(this)
  }

  validateAPIKey (key) {
    // Your API key may be invalid.
    if (key.length < 25) {
      // Throw error
      this.setState({error: 'Invalid Key!'})
      return
    }

    axios.post('/api/account', { apiKey: this.state.value })
      .then(response => {
        if (response.data === 'Invalid Key') {
          this.setState({error: 'Invalid Key!'})
        } else {
          // Restart the entire app with JWT being send and used as key
          // Only set local storage if key is valid
          localStorage.setItem('api_token', response.headers.token)
          this.setState({value: '', error: ''})
          this.props.close('refresh')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <Box responsive
        direction='column'
        align='center'
        alignContent='center'
        textAlign='center'
        full={false}
        pad='medium'>
        <Heading uppercase
          tag='h3'
          strong={false}
          truncate={false}
          align='center'
          margin='small'>
          Enter Your MailChimp API Key
        </Heading>
        <Paragraph margin='none'>
          Can't find your key? Go
          <a href={API_KEY_URL}>
            {' '}here.
          </a>
        </Paragraph>
        <Form onSubmit={(e) => e.preventDefault() }>
          <FormField error={this.state.error}>
            <TextInput id='item1'
              name='api-key'
              placeHolder='12345678901234567890123456789012-xx1'
              value={this.state.value}
              onDOMChange={(e) => this.setState({ value: e.target.value })} />
          </FormField>
          <Footer pad={{'vertical': 'medium'}}>
            <Button label='Go'
              type='button'
              onClick={() => this.validateAPIKey(this.state.value)} />
          </Footer>
        </Form>
      </Box>
    )
  }
}
