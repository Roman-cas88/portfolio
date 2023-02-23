import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const Calculator = () => {
    const [value, setValue] = useState("0")

    const clickFunction = (e) => {
        if (value === ".") {
            setValue("0.")
        } 
        else 
        {setValue(value+e.target.value)}
    }
    const equalFunction = () => {
        try {
            setValue(eval(value))
        } catch(error) {
            setValue("Error")
            }
        
    }
    const clearFunction = () => {
        try {
            if (value==="Error") {
                setValue("0")
            }
            else {setValue(value.slice(0, -1))}
        } catch (error) {
            setValue("0")
        }
    }
    const convertFunction = () => {
        if (!isNaN(value)) {
            if (value < 0) {
                setValue(Math.abs(value))
            }
            else if (value > 0) {
                setValue(-Math.abs(value))
            }
            else return value
        }
        else return value
    }
    const percentFunction = () => {
        try {
            setValue(eval(value) / 100)
        } catch(error) {
            setValue("Error")
            }
    }

    useEffect(() => {
      if (value.length > 1 && value.charAt(0) === "0" && value.charAt(1) !== ".") {
        setValue(value.slice(1))
      }
      else if (value === "") {setValue("0")}    
    }, [value])
    
    const CustomBotton = (props) => {
        return <Button value={props.name} variant={props.variant} onClick={props.function} className='w-100'>{props.name}</Button>
    }
  return (
    <Container style={{backgroundColor:"rgba(255,230,156,0.5)", maxWidth:"250px"}} className='border border-4 border-primary rounded'>
        <Row className='mx-1 my-3 '>
            <input 
                style={{backgroundColor:"rgba(207,244,252,0.5)"}} 
                type="text" 
                className='form-control form-control-lg text-info border-primary' 
                value={value} 
                onChange={(e)=>setValue(e.target.value)}
            />
        </Row>
        <Row className='mb-2'>
            <Col className='px-1' xs={6} sm={6} md={6} lg={6}>
                <CustomBotton name="C/CE" variant={"danger"} function={clearFunction}/>
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="%" function={percentFunction}/>
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="/" function={(e) => clickFunction(e)} />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="7" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="8" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="9" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="*" function={(e) => clickFunction(e)} />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="4" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="5" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="6" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="-" function={(e) => clickFunction(e)} />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="1" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="2" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="3" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="+" function={(e) => clickFunction(e)} />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="+/-" function={convertFunction}/>
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="0" function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="." function={(e) => clickFunction(e)} />
            </Col>
            <Col className='px-1' xs={3} sm={3} md={3} lg={3}>
                <CustomBotton name="=" variant={"success"} function={equalFunction} />
            </Col>
        </Row>
    </Container>
    )
}
