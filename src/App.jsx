import { TextField, Button, Stack } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [interest, setInterest] = useState(0)
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [amountValid, setamountValid] = useState(true)
  const [rateValid, setrateValid] = useState(true)
  const [yearValid, setyearValid] = useState(true)

  const calcInterest = () => {
    if (amount && rate && year) {
      const simple_interest = (amount * rate * year) / 100
      setInterest(simple_interest)
    }else{
      alert("Please fill the form correctly")
    }
  }

  const handleReset = () => {
    setAmount(0)
    setInterest(0)
    setRate(0)
    setYear(0)
    setamountValid(true)
    setrateValid(true)
    setyearValid(true)
  }

  const handleValidation = (e) => {
    const { value, name } = e
    const regex = /^[0-9]*.?[0-9]+$/
    if (!!value.match(regex)) {

      if (name == "amount") {
        setAmount(value)
        setamountValid(true)
      } else if (name == "rate") {
        setRate(value)
        setrateValid(true)
      } else {
        setYear(value)
        setyearValid(true)
      }
    } else {
      if (name == "amount") {
        setAmount(value)
        setamountValid(false)
      } else if (name == "rate") {
        setRate(value)
        setrateValid(false)
      } else {
        setYear(value)
        setyearValid(false)
      }
    }
  }

  return (
    <div style={{ width: '100', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: "600px" }} className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div className="d-flex justify-content-center align-items-center bg-warning p-5 rounded shadow flex-column text-light">
          <h1>₹ {interest}</h1>
          <h6>Total simple interest</h6>
        </div>

        <form className="mt-3">
          <div className="mb-3">
            <TextField value={amount || ""} className='w-100' id="outlined-basic-principle" label="₹ Principle amount" variant="outlined" name="amount" onChange={e => handleValidation(e.target)} />
            {!amountValid && <div className="text-danger"><h6>*Invalid amount</h6></div>}
          </div>
          <div className="mb-3">
            <TextField value={rate || ""} className='w-100' id="outlined-basic-interest" label="Rate of interest (p.a) %" variant="outlined" name='rate' onChange={e => handleValidation(e.target)} />
            {!rateValid && <div className="text-danger"><h6>*Invalid rate</h6></div>}
          </div>
          <div className="mb-3">
            <TextField value={year || ""} className='w-100' id="outlined-basic-year" label="Time period (year)" variant="outlined" name='year' onChange={e => handleValidation(e.target)} />
            {!yearValid && <div className="text-danger"><h6>*Invalid number of year</h6></div>}
          </div>
          <Stack direction="row" spacing={2}>
            <Button disabled={!amountValid || !rateValid || !yearValid} onClick={calcInterest} style={{ width: "50%", height: "60px" }} variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{ width: "50%", height: "60px" }} variant="outlined">RESET</Button>
          </Stack>

        </form>
      </div>
    </div>
  )
}

export default App
