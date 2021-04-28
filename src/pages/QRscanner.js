import React, { useState } from 'react'
import { Fab, TextareaAutosize } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import QrScan from 'react-qr-reader'

function QRscanner() {
  const [qrscan, setQrscan] = useState()
  const [list, setList] = useState([])

  const handleScan = (data) => {
    if (data) {
      setQrscan(data)
      console.table(list)
      if (!list.includes(qrscan) && qrscan !== undefined) {
        setList([...list, qrscan])
      }
    }
  }
  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div>
      <Link to='/'>
        <Fab style={{ marginRight: 10, color: 'orenge' }}>
          <ArrowBack />
        </Fab>
      </Link>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>

      <TextareaAutosize
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
        rowsMax={4}
        defaultValue={qrscan}
        value={qrscan}
      />
    </div>
  )
}

export default QRscanner
