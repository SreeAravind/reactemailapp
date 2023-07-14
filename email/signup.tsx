import {
    Body,
    Button,
    Container,
    Heading,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from '@react-email/components';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
      
      <Body style={body}>
        <Container>
            <Section>
            <Img src="https://mcusercontent.com/2278a54be3e5992bf9d26985d/images/f5d85677-fe85-b064-8bff-862868f61c53.png" style={logo}></Img>
            </Section>
        <Heading style={head1}> Welcome you! Activate Your Account Now</Heading>
        <Text>Thank you for signing up! We are excited to have you as a new member of our platform. Your journey with us begins now, and we can't wait to support you in reaching your goals.</Text>
        <Heading style={head2}>To activate your account and get started, please follow these simple steps:</Heading>
        <Text>Visit our website at <Link href="https://cloudcadi-support@amadisglobal.com/">amadisglobal.com</Link></Text>
        <Text>Click on the "Sign Up" or "Create an Account" button.</Text>
        <Container style={buttonContainer}>
        <Button pY={11} pX={23} style={button}>
            Sign Up
          </Button>
          <Text style={para1}>or</Text>
          <Text style={para}><Link>Create an Account </Link></Text>
        </Container>
        <Text>Fill in your details, including your username and the email address you used for signing up.</Text>
        <Text>Click on the "Activate Account" button to complete the process</Text>
        <Section style={buttonContainer}>
        <Button pY={11} pX={23} style={button1}>
        Activate Account
          </Button>
        </Section>
        <Text>By activating your account, you will gain access to a wide range of features and benefits</Text>

        <Text>For any queries, write to us at<Link href="cloudcadi-support@amadisglobal.com">cloudcadi-support@amadisglobal.com</Link></Text>
        <Text>You can<Link> update your preferences</Link>or<Link> unsubscribe from this list.</Link></Text>


        </Container>
      </Body>
    </Html>
  );
}
const body = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  const logo = {
    width:200,
    height: 60,
    margin: '0px 0px 0px 135px',
};
const buttonContainer = {
    padding: '27px 0 27px',
    margin:''
  };
  
  const button = {
    backgroundColor: '#5e6ad2',
    borderRadius: '3px',
    fontWeight: '600',
    color: '#fff',
    fontSize: '15px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    margin: '0px 0px 0px 210px',

  };
  const button1={
    backgroundColor: '#5e6ad2',
    borderRadius: '3px',
    fontWeight: '600',
    color: '#fff',
    fontSize: '15px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    margin: '0px 0px 0px 193px',


  }
  const para={
    margin: '0px 0px 0px 204px',
}
const para1={
    margin: '0px 0px 0px 247px',
    fontSize: '18px'


}
  const head1={
    color: '#004dcf',
    fontSize: '24px'


  }
  const head2={
    color: '#3c4149',
    fontSize: '20px'


  }