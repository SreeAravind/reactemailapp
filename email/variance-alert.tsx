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

export default function alert() {
  return (
    <Html>
      
      <Body style={body}>
        <Container>
            <Section>
                <Img src="https://mcusercontent.com/2278a54be3e5992bf9d26985d/images/f5d85677-fe85-b064-8bff-862868f61c53.png" style={logo}></Img>
            </Section>
        <Heading style={para} >Your Day Cloud Resources Utilization Alerts!</Heading>
        <Text style={para1}>Your Consumption Since Last Day</Text>
        
        <Text style={para2}>Advanced Threat Protection<Link>5.785688670196716</Link></Text>
        <Text style={para3}>For any queries, write to us at<Link href="cloudcadi-support@amadisglobal.com">cloudcadi-support@amadisglobal.com</Link></Text>
        <Container style={container}>
          <section style={imgContainer}>
           <Button href="https://cloudcadi-support@amadisglobal.com/" > <Img src="https://amadisglobal.com/wp-content/uploads/2022/09/white2.png" style={img}></Img></Button>
           </section>
           <Text style={para4}><Link href="https://cloudcadi-support@amadisglobal.com/">Amadis - Navigate Cloud Native Innovation With Us.</Link></Text>
           <Text style={para5}>Embrace the cloud with our tailored cloud optimization solutions to hit your business goals at the right pace. Optimize your cloud than ever before.</Text>
           <Text style={para6}><Link href="https://cloudcadi-support@amadisglobal.com/">amadisglobal.com</Link></Text>
        </Container>
        <Text >Want to change how you receive these emails?</Text>
        <Text >You can [*|UPDATE_PROFILE|*]<Link> update your preferences</Link>or [*|UNSUB|*]<Link> unsubscribe from this list.</Link></Text>


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
  const imgContainer = {
    
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
    fontSize: '18px',

    

  }
  const para2={
    margin: '25px 0px 0px 0px',
    fontSize: '16px',
    color: '#004dcf'
  }
  
  const para3={
    margin: '50px 0px 0px 0px',
    fontSize: '14px',


  }
  const img={
    width:200,
  height: 110,
  margin: '0px 0px 0px -287px'
  }
  const para4={
    margin: '-121px 0px 0px 164px',

  }
  const para5={
    margin: '0px 0px 0px 176px',

  }
  const para6={
    margin: '0px 0px 0px 90px',
  }
  const para={
    color: '#004dcf',
    fontSize: '24px'

  }
  
  const container={
      padding: '24px',
      border: 'solid 1px #dedede',
      borderRadius: '5px',
      textAlign: 'center',
    

  }