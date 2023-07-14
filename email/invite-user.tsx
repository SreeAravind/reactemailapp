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

export default function user() {
  return (
    <Html>
      
      <Body style={body}>
        <Container>
            <Section>
            <Img src="https://mcusercontent.com/2278a54be3e5992bf9d26985d/images/f5d85677-fe85-b064-8bff-862868f61c53.png" style={logo}></Img>
            </Section>
        <Heading style={para}>Optimization is a Collaborative Effort!</Heading>
        <Text style={para1}>Inviting your teammate to use CloudCADI is now simple. Just click the button</Text>
        <Text style={para2}>below and follow the steps.</Text>
        <Text style={para3}>Spend Right on Cloud with Cloud CADI</Text>
        <Container style={buttonContainer}>
        <Button pY={11} pX={23} style={button}>
        Invite Teammate
          </Button>
        </Container>
        <Text style={para4}>For any queries, write to us at<Link href="cloudcadi-support@amadisglobal.com">cloudcadi-support@amadisglobal.com</Link></Text>
        <Text style={para5}>Want to change how you receive these emails?</Text>
        <Text style={para6}>You can<Link> update your preferences</Link>or<Link> unsubscribe from this list.</Link></Text>


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
  margin: '0px 0px 0px 170px',
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
  const para1={
    margin: '50px 0px 0px -3px',
    fontSize: '17px',

    

  }
  const para2={
    margin: '0px 0px 0px 180px',
    fontSize: '16px',


  }
  const para3={
    margin: '46px 0px 0px 147px',
    fontSize: '16px',


  }
  const para4={
    margin: '20px 0px 0px 70px',

  }
  const para5={
    margin: '0px 0px 0px 130px',

  }
  const para6={
    margin: '0px 0px 0px 90px',
  }
  const para={
    color: '#004dcf'
  }