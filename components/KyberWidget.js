import React from 'react'

const KyberWidget = () => (
  <>
    <a href='https://widget.kyber.network/v0.8.0/?type=swap&mode=popup&lang=sv&pinnedTokens=ETH_DAI&defaultPair=ETH_DAI&callback=https%3A%2F%2Fkryptovalutakurser.nu&paramForwarding=true&network=ropsten&commissionId=0x53ceBB188A0AC7b70097C39d996D49614C7CE833&commissionFee=25&theme=theme-ocean'
      className='kyber-widget-button theme-ocean theme-supported' name='KyberWidget - Powered by KyberNetwork' title='Pay with tokens'
      target='_blank'>
      Swap tokens
    </a>
    <script async src='https://widget.kyber.network/v0.8.0/widget.js'></script>
  </>
)

export default KyberWidget