import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import FormField from 'grommet/components/FormField'
import Form from 'grommet/components/Form'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'

export default class InputAPIModal extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
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
        <Paragraph>
          Can't find your key? Go
          <a href='http://kb.mailchimp.com/integrations/api-integrations/about-api-keys'>
            here.
          </a>
        </Paragraph>
        <Form>
          <FormField>
            <TextInput id='item1'
              name='api-key'
              placeHolder='12345678901234567890123456789012-xx1'
              value={this.state.value}
              onDOMChange={(e) => this.setState({ value: e.target.value })} />
          </FormField>
          <Footer pad={{'vertical': 'medium'}}>
            <Button label='Go'
              type='button'
              onClick={() => console.log(this.state.value)} />
          </Footer>
        </Form>
      </Box>
    )
  }
}
