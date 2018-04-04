import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';
import Footer from '../components/Footer';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome To BitLine 💸</h1>
      <Prices bpi={props.bpi}/>
      <Footer />
    </div>
  </Layout>
  );

  Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
  
    return {
      bpi: data.bpi
    };
  }

  export default Index;