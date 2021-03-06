import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { lewi } from '../../../lib/data/team'
import { Code } from '../../../components/text/code'

// prettier-ignore
export default withDoc({
  title: 'Endpoints',
  date: '9 Feburary 2018',
  authors: [lewi],
  editUrl: 'pages/docs/testnet/endpoints.js',
})(markdown(components)`

We have built a Testnet to provide a healthy network 
topology and ensure successful operations. The network's 
nodes are open to API calls and requests, but at present 
we do not provide peering (TCP & UDP) to the nodes of the 
test network.

Access to the Testnet is provided through the following endpoints:

## Nodes HTTPS API

This is a High Availability Proxy to provide load balancing 
to the nodes that comprise the Testnet. This is accessible over 
HTTPS on port 443.

${<Code>https://nodes.testnet.iota.org:443</Code>}

Check out the **Node** documentation: [here](https://iota.readme.io/reference#)

*note: IRI documentation will be transitioned to this platform in the coming days.*

## Realtime Message Stream - ØMQ

This provides access to the Zero Message Queue of the IRI 
node. This provides the ability to subscribe to the Node in various ways. 

${<Code>https://zmq.testnet.iota.org:443</Code>}


## Pow Box - Proof of Work service

This endpoint provides access to a means of delegating Proof of Work 
to a third-party. This is useful for small devices or simulations. 

${<Code>https://powbox.testnet.iota.org</Code>}

Check out the **PowBox** documentation: [here](https://powbox.testnet.iota.org)

`)
