import React from 'react'
import {
  Container, Row, Col, Button, Alert, Modal,
  Card, CardHeader, ListGroup, ListGroupItem,
  Navbar
} from 'reactstrap'
import accounting from 'accounting'
import { RIENumber } from 'riek'

import display from 'Utilities/display'

import Layout from 'Components/Layout'
import Slider from 'Components/Slider'
import AssetList from 'Components/AssetList'
import SignTxModal from 'Components/SignTxModal'
import Units from 'Components/Units'
import WalletSummary from 'Components/WalletSummary'
import Overlay from 'Components/Overlay'
import ArrowIcon from 'Components/ArrowIcon'
import ListGroupButton from 'Components/ListGroupButton'
import CoinIcon from 'Components/CoinIcon'

import styles from './style'

const ModifyView = (props) => {
  const { portfolio, handleCancel, handleSave, disableSave } = props

  const renderAssetRows = (assetHoldings) => assetHoldings.map((a) => {
    const { walletId, symbol, name, change24, price, units, fiat, weight, swapEnabled, priceDecrease } = a
    const disabled = !swapEnabled
    const changeIconDirection = priceDecrease ? 'down' : 'up'
    const changeColor = priceDecrease ? 'danger' : 'success'
    const fiatPrice = display.fiat(price)
    const percentChange24 = display.percentage(change24, true)
    const originalFiat = display.fiat(fiat.original)
    const originalWeight = display.percentage(a.weight.original)
    const originalUnits = (<Units value={units.original} symbol={symbol} precision={6}/>)
    const adjustedFiat = accounting.toFixed(fiat.adjusted, 2)
    const adjustedWeight = accounting.toFixed(weight.adjusted, 2)
    const adjustedUnits = (<Units value={units.adjusted} symbol={symbol} precision={6}/>)

    let fiatInput
    let weightInput

    return (
      <ListGroupItem key={symbol}>
        {disabled && (
          <Overlay className='justify-content-end'>
            <Alert color='info' className='m-1'>
              Swapping {name} is currently unavailable
            </Alert>
          </Overlay>
        )}
        <Row className='gutter-x-3 align-items-center'>
          <Col xs lg='4' xl='5' className='order-1'>
            <Row className='gutter-3 align-items-center'>
              <Col xs='3' md='2' lg='auto' className='text-center text-md-right'>
                <CoinIcon symbol={symbol} />
              </Col>
              <Col xs='auto'><h5 className='m-0'>{name}</h5></Col>
            </Row>
            <Row className='gutter-x-3 my-3 align-items-center'>
              <Col xs='3' md='2' lg='auto'>
                <ArrowIcon dir={changeIconDirection} size='md' color={changeColor} className='mx-auto mr-md-0' />
              </Col>
              <Col xs='4' md='3' lg>
                <div className='text-grey'>24h change</div>
                <div className={`text-medium text-${changeColor}`}>{percentChange24}</div>
              </Col>
              <Col>
                <div className='text-grey'>current price</div>
                <div className='text-medium text-white'>{fiatPrice}</div>
              </Col>
            </Row>
          </Col>
          <Col xs='12' lg style={{ lineHeight: 1 }} className='order-3 order-lg-2'>
            <Row className='gutter-3'>
              <Col xs='12' md='2' lg='auto'>
                <Row className='gutter-3 flex-md-column'>
                  <Col xs='3' md='12'>&nbsp;</Col>
                  <Col xs='4' md='12' className='text-grey text-md-right'>Before</Col>
                  <Col xs='5' md='12' className='text-grey text-md-right'>After</Col>
                </Row>
              </Col>
              <Col xs='12' md='3' lg>
                <Row className='gutter-3 flex-md-column'>
                  <Col xs='3' md='12' className='text-grey text-right text-md-left'>Value</Col>
                  <Col xs='4' md='12'>{originalFiat}</Col>
                  <Col xs='5' md='12'>
                    {disabled ? (
                      display.fiat(adjustedFiat)
                    ) : (
                      <span className='text-primary'>
                        <RIENumber
                          value={adjustedFiat}
                          format={display.fiat}
                          change={(change) => props.handleFiatChange(walletId, symbol, change[symbol])}
                          propName={symbol}
                          className='cursor-pointer'
                          classEditing={styles.editableEditing}
                          ref={(input) => { fiatInput = input }}
                        />
                        <i onClick={() => fiatInput.startEditing()} className='fa fa-pencil margin-left-5 cursor-pointer' aria-hidden='true' />
                      </span>
                    )}
                  </Col>
                </Row>
              </Col>
              <Col xs='12' md='3' lg>
                <Row className="gutter-3 flex-md-column">
                  <Col xs='3' md='12' className='text-grey text-right text-md-left'>Weight</Col>
                  <Col xs='4' md='12'>{originalWeight}</Col>
                  <Col xs='5' md='12'>
                    {disabled ? (
                      display.percentage(adjustedWeight)
                    ) : (
                      <span className='text-primary'>
                        <RIENumber
                          value={adjustedWeight}
                          format={display.percentage}
                          change={(change) => props.handleWeightChange(walletId, symbol, change[symbol])}
                          propName={symbol}
                          className='cursor-pointer'
                          classEditing={styles.editableEditing}
                          ref={(input) => { weightInput = input }}
                          disabled={disabled}
                        />
                        <i onClick={() => weightInput.startEditing()} className='fa fa-pencil margin-left-5 cursor-pointer' aria-hidden='true' />
                      </span>
                    )}
                  </Col>
                </Row>
              </Col>
              <Col xs='12' md>
                <Row className="gutter-3 flex-md-column">
                  <Col xs='3' md='12' className='text-grey text-right text-md-left'>Units</Col>
                  <Col xs='4' md='12'>{originalUnits}</Col>
                  <Col xs='5' md='12'>{adjustedUnits}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs='auto' className='align-self-start order-2 order-lg-3'>
            <Button color='danger' size='sm' disabled={disabled} className='flat' onClick={() => props.handleRemove(walletId, symbol)}>
              <i className='fa fa-times'/> remove
            </Button>
          </Col>
        </Row>
        
        <div className='pt-3'>
          <Slider
            asset={a}
            walletId={walletId}
            disabled={disabled}
            {...props.sliderProps}
          />
        </div>
      </ListGroupItem>
    )
  })

  const renderHoldings = (wallets) => wallets
    .map(({ id, label, assetHoldings }) => (
      <Col xs='12' key={id}>
        <Card>
          <CardHeader>
            <Row className='gutter-3 align-items-center'>
              <Col>
                <h4 className='m-0 lh-0'>{label}</h4>
              </Col>
              <Col xs='auto'>
                <Button color='success' size='sm' className='flat' onClick={() => props.showAssetList(id)}>
                  <i className='fa fa-plus'/> add asset
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <ListGroup>
            {renderAssetRows(assetHoldings.filter(({ shown }) => shown))}
            <ListGroupButton action onClick={() => props.showAssetList(id)} className='text-center text-success'>
              <i className='fa fa-plus fa-2x align-middle' />
              <span className='pl-2 h5'>add asset</span>
            </ListGroupButton>
          </ListGroup>
        </Card>
      </Col>
    ))

  const secondNavbar = (
    <Navbar color='ultra-dark' dark fixed='top'>
      <Container className='d-block'>
        <Row className='gutter-x-3 align-items-center text-center'>
          {portfolio.id !== 'default' && (
            <Col xs='6' md='2'>
              <h4 className='m-0 font-weight-light'>{portfolio.label}</h4>
              <small className='text-muted'>current portfolio</small>
            </Col>
          )}
          <Col xs='6' md>
            <h4 className='m-0 font-weight-light'>{display.fiat(portfolio.totalFiat)}</h4>
            <small className='text-muted'>total balance</small>
          </Col>
          <Col xs='6' md='4'>
            <h4 className='text-primary m-0'>{display.fiat(props.allowance.fiat)} / {display.percentage(props.allowance.weight)}</h4>
            <small className='text-muted'>available to swap</small>
          </Col>
          <Col xs='6' md='2'>
            <Button color='faast' outline onClick={handleCancel} className='w-100'>cancel</Button>
          </Col>
          <Col xs='6' md='2'>
            <Button color='faast' onClick={handleSave} className='w-100' disabled={Boolean(disableSave)}>save</Button>
          </Col>
          {typeof disableSave === 'string' && (
            <Col xs='12'>
              <Alert color='danger' className='m-0 w-100 text-center'>
                {disableSave}
              </Alert>
            </Col>
          )}
        </Row>
      </Container>
    </Navbar>
  )

  return (
    <Layout tag='div' afterNav={secondNavbar}>
      <Container className='p-0 p-md-3'>
        <Row className='gutter-x-0 gutter-y-3'>
          {renderHoldings(portfolio.nestedWallets)}
        </Row>
      </Container>
      <Modal size='lg' center isOpen={props.isAssetListOpen} toggle={props.toggleAssetList} className='m-0 mx-md-auto' contentClassName='p-0'>
        <AssetList {...props.assetListProps} />
      </Modal>
      <SignTxModal showModal={props.showSignTxModal} toggleModal={props.handleToggleSignTxModal} />
    </Layout>
  )
}

export default ModifyView
