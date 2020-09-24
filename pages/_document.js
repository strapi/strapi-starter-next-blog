import Document, {
    Html,
    Head,
    Main,
    NextScript
  } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps (ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return initialProps
    }
  
    render () {
      return (
        <Html>
          <Head>
            <meta charSet='utf-8' />
            <meta name='format-detection' content='telephone=no' />
            <style>-ms-overflow-style: none;</style>
            {/* <link
              href='https://fonts.googleapis.com/icon?family=Material+Icons'
              rel='stylesheet'
            /> */}
          </Head>
          <body>
            <Main />
            <NextScript />
            <script dangerouslySetInnerHTML={{ __html: `
            var haptikInitSettings = {
                'primary-color': '#21abf3',
                'secondary-color': '#f4f7f9',
                'widget-positioning': 'bottom-right',
                'bot-prompt': {
                    'timeout': 90,
                    'message': 'Hey! Can I help you?',
                    'option': 'Yes'
                },
                'font-sizes': {
                    'primary': 15,
                    'secondary': 18
                },
                'typography': 'Ubuntu',
                'header-text': 'LPL',
                'composer-placeholder': 'Type your message...',
                'header-icon': 'https://d2qhgd0topi90o.cloudfront.net/website/images/Logopush.png',
                'business-id': 474,
                'client-id': 'df992840a222bd7031df992697b7db470f0b451a',
                'api-key': 'drlalpathlabs:e25ac9e7ad5c888faf9ba3c241a2bf39e00e9455',
                'base-url': 'https://drlalpathlabs.haptikapi.com',
                'session-timeout': 3600,
                'mode': 'ssm',
                'hide-haptik-branding': true,
            };
            ` }}></script>
            <script type="text/javascript" charset="UTF-8"
        src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"></script>
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument
  