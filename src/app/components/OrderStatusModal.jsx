import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  Row, Col, Button,
  Modal, ModalHeader, ModalBody
} from 'reactstrap'
import { omit } from 'lodash'

import { getAllSwapsArray, getCurrentSwundleWalletId } from 'Selectors'

import SwapStatusCard from 'Components/SwapStatusCard'
import WalletLabel from 'Components/WalletLabel'

const statusRenderData = {
  pending: {
    labelClass: 'text-primary',
  },
  failed: {
    labelClass: 'text-warning',
  },
  complete: {
    labelClass: 'text-success'
  },
  unknown: {
    labelClass: 'text-muted',
  }
}

export default compose(
  setDisplayName('OrderStatusModal'),
  connect(createStructuredSelector({
    swaps: getAllSwapsArray,
    swundleWalletId: getCurrentSwundleWalletId,
  }))
)(({ swaps, toggle, swundleWalletId, ...props }) => (
  <Modal size='md' toggle={toggle} {...omit(props, 'dispatch')}>
    <ModalHeader className='text-primary' toggle={toggle}>
      Order Status
    </ModalHeader>
    <ModalBody>
      {swundleWalletId && (
        <div className='mx-auto text-center'>
          <WalletLabel.Connected id={swundleWalletId}/>
        </div>
      )}
      <div className='mx-auto my-3'>
        <Row className='gutter-2'>
          {swaps.map((swap) => {
            const { id, status: { code, label } } = swap
            const { labelClass } = statusRenderData[code] || statusRenderData.unknown
            const statusText = (<span className={labelClass}>{label || code}</span>)
            return (
              <Col xs='12' key={id}>
                <SwapStatusCard swap={swap} statusText={statusText} showWalletLabels={!swundleWalletId}/>
              </Col>
            )
          })}
        </Row>
      </div>
      <div className='text-center'>
        <Button color='link' onClick={toggle}>hide</Button>
      </div>
    </ModalBody>
  </Modal>
))