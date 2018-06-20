
import { MDCRipple } from '@material/ripple'
import { AccountSettings } from 'components/AccountSettings'
import { Back } from 'components/Back'
import * as React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Redirect } from 'react-router-dom'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import * as twitchPanelBlack from './assets/img/twitchPanelBlack.png'
import * as twitchPanelWhite from './assets/img/twitchPanelWhite.png'
import './assets/index.css'
import { activateBox, arrow, marginTopSmall } from './components/styles/ActivateStyles'
import { h2, h4, label, nextButton, wrapper } from './components/styles/common'

type ActivateProps = { routerProps: any }
type ActivateState = {
  user?: any,
  redirect: boolean,
}

class Activate extends React.Component<ActivateProps, ActivateState> {
  constructor(props) {
    super(props)

    if (props.routerProps.location) {
      const setupState = props.routerProps.location.state

      this.state = {
        user: setupState.user,
        redirect: false,
      }
    } else {
      this.state = { redirect: true }
    }

    this.next = this.next.bind(this)
  }

  public componentDidMount() {
    if (document.querySelector('button')) {
      MDCRipple.attachTo(document.querySelector('button'))
    }
  }

  public next() {
    this.props.routerProps.history.push('/connect')
  }

  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    const twitchLink = `https://twitch.tv/${this.state.user.display_name}`
    const donateLink = `http://cryptopotam.us/donate/${this.state.user._id}`

    return (
      <div style={wrapper}>
        <Back history={this.props.routerProps.history} />
        <div style={{ position: 'absolute', top: '50px', right: '0px', float: 'right' }}>
          <AccountSettings routerProps={this.props.routerProps} />
        </div>
        <div style={{ clear: 'both' }}>
          <h2 style={h2}>Create a new Twitch panel </h2>
        </div>
        <div>
          <label style={label}>Step 1 - Go to your Twitch channel (open a new tab)</label>
          <div style={ activateBox }>
            <span> {twitchLink} </span>
            <a style={{ float: 'right' }} href={twitchLink} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <g fill="none" fillRule="evenodd">
                  <path d="M-3-3h24v24H-3z" />
                  <path fill="#B0BEC5"
                    fillRule="nonzero"
                    d="M16 16H2V2h7V0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2
                      2h14c1.1 0 2-.9 2-2V9h-2v7zM11 0v2h3.59l-9.83 9.83 1.41 1.41L16 3.41V7h2V0h-7z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div style={marginTopSmall}>
          <label style={label}>Step 2 - Create a new Twitch ‘text or image’ panel </label>
          <br />
          <span style={h4}> Channel </span> <span style={arrow}>  >  </span>
          <span style={h4}> Edit Panels </span><span style={arrow}> >  </span>
          <span style={h4}>  + </span> <span style={arrow}>  >  </span>
          <span style={h4}> Add Text or Image Panel </span>
        </div>
        <div style={{ ...marginTopSmall, position: 'relative' }}>
          <label style={label}>Step 3 - Choose one of the images below and add it to your new Panel
          <Tooltip title="https://help.twitch.tv/customer/portal/articles/2416760-how-to-edit-info-panels"
              position="top" trigger="mouseenter"
              interactive="true" style={{ position: 'absolute', top: '3px', marginLeft: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0
                  18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2
                  .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
              </svg>
            </Tooltip>

          </label>
          <div style={{ marginTop: '30px' }}>
            <img src={twitchPanelBlack} style={{ marginRight: '60px' }} />
            <img src={twitchPanelWhite} />
          </div>
        </div>
        <div style={marginTopSmall}>
          <label style={label}>
            Step 4 - Paste this link (this is your unique donation page URL) into the “Image Links to…” section
          </label>
          <div style={ activateBox} >
            <span> {donateLink} </span>
            <span style={{ clear: 'both', float: 'right', cursor: 'pointer' }}>
              <CopyToClipboard text={donateLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22">
                  <g fill="none" fillRule="evenodd">
                    <path d="M-2-1h24v24H-2z" />
                    <path fill="#B0BEC5"
                      fillRule="nonzero"
                      d="M14 0H2C.9 0 0 .9 0 2v14h2V2h12V0zm3 4H6c-1.1 0-2
                        .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H6V6h11v14z" />
                  </g>
                </svg>
              </CopyToClipboard>
            </span>
          </div>
        </div>
        <div style={marginTopSmall}>
          <label style={label}>
            Step 5 - When you’ve finished creating your panel, come back to this page and click ‘NEXT’ …
          </label>
        </div>
        <div style={marginTopSmall}>
          <button className="mdc-button mdc-button--raised" style={nextButton} onClick={this.next}>
            NEXT
          </button>
        </div>
      </div>
    )
  }
}

export default Activate
