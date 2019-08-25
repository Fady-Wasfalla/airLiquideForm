import React, { Component } from "react";
import { Form , Col , Row , Card, Button , FormControl , InputGroup} from "react-bootstrap";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker"
import "react-datepicker/dist/react-datepicker.css";



class logisticsValidationForm extends Component {
    
    state = {
        //Customer's type dropdown list ... you have to change both value and label with the same name
        CustomerTypeOptions : [
            { value: 'Customer Type 1', label: 'Customer Type 1' },
            { value: 'Customer Type 2', label: 'Customer Type 2' },
            { value: 'Customer Type 3', label: 'Customer Type 3' },
          ],
        customerType : "",

        //Buissness type dropdown list ... you have to change both value and label with the same name
         BuissnesTypeOptions : [
            { value: 'Buissnes Type 1', label: 'Buissnes Type 1' },
            { value: 'Buissnes Type 2', label: 'Buissnes Type 2' },
            { value: 'Buissnes Type 3', label: 'Buissnes Type 3' },
          ],
        businessType : "",

        startDeliveryDate: new Date(),
        forecastDeliveryEnd: new Date(),

        //Product type dropdown list ... you have to change both value and label with the same name
        ProductTypeOptions : [
            { value: 'Product 1', label: 'Product 1' },
            { value: 'Product 2', label: 'Product 2' },
            { value: 'Product 3', label: 'Product 3' },
          ],
        product : "",
        
        purity:0,
        
        CustomerConsumtionTypeOptions : [
            { value: 'Regular', label: 'Regular' },
            { value: 'Patch', label: 'Patch' },
          ],
        customerConsumption:"",
        CustomerConsumtionregularShow:"none" ,
        CustomerConsumtionPatchShow:"none",
        regularMonths:0,
        patchDay:0,
        patchAvgHrs:0,
        productAvailability:false,
        availableDelivery:"",
        availableDeliveryShow:"none",
        startDeliveryTime: '00:00',
        endDeliveryTime: '00:00',
        seasonalConsumption:0,
        seasonPeriod:0,
        customerTank:0,
        customerDeadLevel:0,
        usableCapacityAboveDeadLevel:0,
        peakConsumption:0,
        frequencyOfPeakConsumption:"",
        weightScale:0,
        weightScale:0,
        lvfComment:"",

        fieldset:"",
      }

      CustomerTypeHandleChange = (customerType) => {
        this.setState({ customerType:customerType.value });
      };

      BuissnesTypeHandleChange = (businessType) => {
        this.setState({ businessType:businessType.value });
      };

      startDeliveryDateHandleChange(date) {
        this.setState({startDeliveryDate: date})
      }

      forecastDeliveryEndHandleChange(date) {
        this.setState({forecastDeliveryEnd: date})
      }

      ProductHandleChange = (product) => {
        this.setState({ product:product.value });
      };
      
      CustomerConsumtionHandleChange  = (customerConsumption) => {
        this.setState({ customerConsumption:customerConsumption.value });

        if (customerConsumption.value === 'Regular') {
          this.setState({CustomerConsumtionregularShow:""})
          this.setState({CustomerConsumtionPatchShow:"none"})
        }
        else{
          this.setState({CustomerConsumtionregularShow:"none"})
          this.setState({CustomerConsumtionPatchShow:""})
        }
      };


      availableDeliveryHandleChange = (availableDelivery) => {
        this.setState({ availableDelivery:availableDelivery.value });
        if (availableDelivery.value === 'Other') {
          this.setState({availableDeliveryShow:""})
        }
        else{
          this.setState({availableDeliveryShow:"none"})
        }
      };

      startDeliveryTimeHandleChange = startDeliveryTime => this.setState({ startDeliveryTime })
      
      endDeliveryTimeHandleChange = endDeliveryTime => this.setState({ endDeliveryTime })

      
      sendData =()=>{
        let sentData = Object.assign({},this.state)
        delete sentData.CustomerTypeOptions
        delete sentData.BuissnesTypeOptions
        delete sentData.ProductTypeOptions
        delete sentData.CustomerConsumtionTypeOptions
        delete sentData.CustomerConsumtionregularShow
        delete sentData.CustomerConsumtionPatchShow
        delete sentData.availableDeliveryShow
        delete sentData.fieldset
        this.props.ParentCallBack(sentData)
      }

      submitData=()=>{
        this.sendData()
        if (this.state.fieldset===""){
            this.setState({fieldset:"disabled"})
        }
        else{
            this.setState({fieldset:""})
        }
    }
      
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >Logistics Validation Form</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <fieldset disabled={this.state.fieldset}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"20px" , textDecoration:"underline" }}>Origin of the Request</Form.Label>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row >
                            <Form.Group as={Col} controlId=">CustomerType" >
                            <Form.Label>Customer's Type</Form.Label>
                            <Select
                            value={this.state.customerType.value}
                            onChange={this.CustomerTypeHandleChange}
                            options={this.state.CustomerTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="BuissnesType">
                            <Form.Label>Buissnes Type</Form.Label>
                            <Select
                            value={this.state.businessType.value}
                            onChange={this.BuissnesTypeHandleChange}
                            options={this.state.BuissnesTypeOptions}
                            />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="startDeliveryDate">
                                <Form.Label>Start Delivery Date</Form.Label>
                                <br/>
                                <DatePicker
                                    selected={this.state.startDeliveryDate}
                                    onChange={this.startDeliveryDateHandleChange.bind(this)}
                                    />
                            </Form.Group>
                            <Form.Group as={Col} controlId="forecastDeliveryEnd">
                                <Form.Label>Forecast Delivery End</Form.Label>
                                <br/>
                                <DatePicker
                                    selected={this.state.forecastDeliveryEnd}
                                    onChange={this.forecastDeliveryEndHandleChange.bind(this)}
                                    />
                            </Form.Group>
                        </Form.Row>

                        <Row><br/></Row>
                        
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"20px" , textDecoration:"underline" }}>
                                    Customer Consumption</Form.Label>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row >
                            <Form.Group as={Col} controlId="ProductType" >
                            <Form.Label>Product</Form.Label>
                            <Select
                            value={this.state.product.value}
                            onChange={this.ProductHandleChange}
                            options={this.state.ProductTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="purity" >
                            <Form.Label>purity</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({purity:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Col md={4}>
                            <Form.Group as={Col} controlId="CustomerConsumtionType" >
                                <Form.Label>Customer Consumption Type</Form.Label>
                                <Select
                                value={this.state.customerConsumption.value}
                                onChange={this.CustomerConsumtionHandleChange}
                                options={this.state.CustomerConsumtionTypeOptions}
                                />
                            <Form.Check type="checkbox" label="Product Availablity" onChange={(e)=>{this.setState({productAvailability:e.target.checked})}}/>
                            </Form.Group>
                          </Col>


                            <Form.Group as={Col} controlId="regularMonths"
                             style={{display:this.state.CustomerConsumtionregularShow}} >
                            <Form.Label>Customer Consumption Rate Per Months</Form.Label>
                            <InputGroup >
                            <InputGroup.Append>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({regularMonths:e.target.value})}} />
                                <InputGroup.Text id="basic-addon2">/ Months</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="patchDay"
                            style={{display:this.state.CustomerConsumtionPatchShow}} >
                            <Form.Label>Customer Consumption Days</Form.Label>
                            <InputGroup >
                            <InputGroup.Append>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({patchDay:e.target.value})}} />
                            <InputGroup.Text id="basic-addon2">Days</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="patchAvgHrs"
                            style={{display:this.state.CustomerConsumtionPatchShow}} >
                            <Form.Label>Customer Consumption Rate Per Hr</Form.Label>
                            <InputGroup>
                            <InputGroup.Append>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({patchAvgHrs:e.target.value})}} />
                            <InputGroup.Text id="basic-addon2">Avg./Hr</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        

                        <Form.Row>
                        <Form.Group as={Col} controlId="seasonalConsumption" >
                            <Form.Label>Seasonal Consumption</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({seasonalConsumption:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="seasonPeriod" >
                            <Form.Label>Season Period</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({seasonPeriod:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="customerTank" >
                            <Form.Label>Customer Tank</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({customerTank:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId="customerDeadLevel" >
                            <Form.Label>Customer Dead Level</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({customerDeadLevel:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="usableCapacityAboveDeadLevel" >
                            <Form.Label>Usable Capacity Above Dead Level</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({usableCapacityAboveDeadLevel:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col} controlId="peakConsumption" >
                            <Form.Label>Peak Consumption</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({peakConsumption:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="frequencyOfPeakConsumption">
                              <Form.Label>Frequency Of Peak Consumption</Form.Label>
                              <Form.Control as="textarea" rows="1" placeHolder="times/period" />
                              </Form.Group>
                        </Form.Row>

                        <Form.Row >
                         <Col md={6}>
                            <Form.Group as={Col} controlId="availableDelivery" >
                            <Form.Label>Deilvery Type</Form.Label>
                            <Select
                            value={this.state.availableDelivery.value}
                            onChange={this.availableDeliveryHandleChange}
                            options={[{value:'24 Hours',label:'24 Hours'},{value:'Other',label:'Other'}]}
                            />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="startDeliveryTime"
                             style={{display:this.state.availableDeliveryShow}}>
                                <Form.Label>Start Delivery Time</Form.Label>
                                <br/>
                                <TimePicker
                                    onChange={this.startDeliveryTimeHandleChange}
                                    value={this.state.startDeliveryTime}
                                    />
                            </Form.Group>

                            <Form.Group as={Col} controlId="endDeliveryTime"
                             style={{display:this.state.availableDeliveryShow}}>
                                <Form.Label>End Delivery Time</Form.Label>
                                <br/>
                                <TimePicker
                                    onChange={this.endDeliveryTimeHandleChange}
                                    value={this.state.endDeliveryTime}
                                    />
                            </Form.Group>
                        </Form.Row>

                        
                        <Form.Row>
                        <Form.Group as={Col} controlId="weightScale" >
                            <Form.Label>Weight Scale</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({weightScale:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="weightScale" >
                            <Form.Label>Tank Guage</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({weightScale:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="lvfComment">
                            <Form.Label>Lvf Comment</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({lvfComment:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                       

                    </Form>
                </fieldset>
                </Col>
                <Card.Footer > 
                <Row style={{height: .018*window.innerHeight + 'px'}}>
                            <Col md={{offset:11}} >
                            <Form.Check id="submitLVF"
                            custom={true}
                            inline={true}
                            label="Submit"
                            onChange={this.submitData}/>
                            </Col> 
                </Row>
                </Card.Footer>
                </Card>
            </React.Fragment>
        )
      }

}


export default logisticsValidationForm;
