import React, { useEffect, useState } from 'react'
import ReactDOM from 'react'
import axios from 'axios'
import { PayPalButton } from "react-paypal-button-v2";


const test = () => {

  const [showBtn, setShowBtn] = useState(false)
  const COORDS = {
    sandbox_account: 'sb-zjqdi1906130@business.example.com',
    client_id:
      'AfbBLsFyu7VN-Qzq9qhZSpAZe6PyKUAa8fm2ywohgKv8G0V6UzNRFtuATnXFf7SVR2EK1UXBwAhBq7KV',
    secret:
      'EDAQkDf0VE7rlkDlD-V3lFOAiyD9tdRyVcOoBtgDffDgiQvGy1bBjos_ZVJukSV6jUY6jlqieccPfxY1',
    api_url: 'https://api.sandbox.paypal.com',
    access_token:
      'https://uri.paypal.com/services/invoicing https://uri.paypal.com/services/disputes/read-buyer https://uri.paypal.com/services/payments/realtimepayment https://uri.paypal.com/services/disputes/update-seller https://uri.paypal.com/services/payments/payment/authcapture openid https://uri.paypal.com/services/disputes/read-seller https://uri.paypal.com/services/payments/refund https://api.paypal.com/v1/vault/credit-card https://api.paypal.com/v1/payments/.* https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.* https://uri.paypal.com/services/subscriptions https://uri.paypal.com/services/applications/webhooks'
  }
  const handleTransaction = async () => {
    console.log('paypel')
    let res = await axios.get(
      'https://api.sandbox.paypal.com/v1/invoicing/invoices?page=3&page_size=4&total_count_required=true'
    )
    console.log(res)
  }
  return(
      <div>
          <PayPalButton
          amount={200}
          currency={'USD'}
          onSuccess={(details,data)=>onSuccess(details, data)}
          onAuthorize={(details,data)=>{
              console.log('were in')
          }}
          options={
              {clientId:COORDS.client_id}
          }/>
      </div>
  )
 
}

export default test

// "scope": "https://uri.paypal.com/services/invoicing https://uri.paypal.com/services/disputes/read-buyer https://uri.paypal.com/services/payments/realtimepayment https://uri.paypal.com/services/disputes/update-seller https://uri.paypal.com/services/payments/payment/authcapture openid https://uri.paypal.com/services/disputes/read-seller https://uri.paypal.com/services/payments/refund https://api.paypal.com/v1/vault/credit-card https://api.paypal.com/v1/payments/.* https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.* https://uri.paypal.com/services/subscriptions https://uri.paypal.com/services/applications/webhooks",
// "access_token": "A21AAGJs4gjugiXodzWxlX2niwvozZ01sPf_W89UZXz_KGJlSji4WayXYHUCMw8RA_0JGhQHWmt5qLdhIzoZng4ubkN9ZovJg",
// "token_type": "Bearer",
// "app_id": "APP-80W284485P519543T",
// "expires_in": 32400,
// "nonce": "2020-05-25T20:48:55ZJrEtRxY4UHnk86OLon24Ob15O1Mexly-JPbXDVFz588"

// QWZiQkxzRnl1N1ZOLVF6cTlxaFpTcEFaZTZQeUtVQWE4Zm0yeXdvaGdLdjhHMFY2VXpOUkZ0dUFUblhGZjdTVlIyRUsxVVhCd0FoQnE3S1Y6RURBUWtEZjBWRTdybGtEbEQtVjNsRk9BaXlEOXRkUnlWY09vQnRnRGZmRGdpUXZHeTFiQmpvc19aVkp1a1NWNmpVWTZqbHFpZWNjUGZ4WTE
