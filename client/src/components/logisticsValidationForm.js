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
        CustomerTypeSelectedOption : "",

        //Buissness type dropdown list ... you have to change both value and label with the same name
         BuissnesTypeOptions : [
            { value: 'Buissnes Type 1', label: 'Buissnes Type 1' },
            { value: 'Buissnes Type 2', label: 'Buissnes Type 2' },
            { value: 'Buissnes Type 3', label: 'Buissnes Type 3' },
          ],
        BuissnesTypeSelectedOption : "",

        StartDeliveryDate: new Date(),
        ForecastDeliveryEnd: new Date(),

        //Product type dropdown list ... you have to change both value and label with the same name
        ProductTypeOptions : [
            { value: 'Product 1', label: 'Product 1' },
            { value: 'Product 2', label: 'Product 2' },
            { value: 'Product 3', label: 'Product 3' },
          ],
        ProductSelectedOption : "",
        
        Purity:0,
        
        CustomerConsumtionTypeOptions : [
            { value: 'Regular', label: 'Regular' },
            { value: 'Patch', label: 'Patch' },
          ],
        CustomerConsumtionTypeSelectedOption:"",
        CustomerConsumtionRegularShow:"none" ,
        CustomerConsumtionPatchShow:"none",
        CustomerConsumptionRatePerMonths:0,
        CustomerConsumptionDays:0,
        CustomerConsumptionRatePerHr:0,
        ProductAvailablity:false,
        DeilveryType:"",
        DeilveryTypeShow:"none",
        StartDeliveryTime: '00:00',
        EndDeliveryTime: '00:00',
        SeasonalConsumption:0,
        SeasonPeriod:0,
        CustomerTank:0,
        CustomerDeadLevel:0,
        UsableCapacityAboveDeadLevel:0,
        PeakConsumption:0,
        FrequencyOfPeakConsumption:"",
        WeightScale:0,
        TankGuage:0,
        LvfComment:"",

      }

      CustomerTypeHandleChange = CustomerTypeSelectedOption => {
        this.setState({ CustomerTypeSelectedOption });
        console.log(CustomerTypeSelectedOption)
      };

      BuissnesTypeHandleChange = BuissnesTypeSelectedOption => {
        this.setState({ BuissnesTypeSelectedOption });
        console.log(BuissnesTypeSelectedOption)
      };

      StartDeliveryDateHandleChange(date) {
        console.log(date)
        this.setState({StartDeliveryDate: date})
      }

      ForecastDeliveryEndHandleChange(date) {
        console.log(date)
        this.setState({ForecastDeliveryEnd: date})
      }

      ProductHandleChange = ProductSelectedOption => {
        this.setState({ ProductSelectedOption });
        console.log(ProductSelectedOption)
      };
      
      CustomerConsumtionHandleChange  = CustomerConsumtionTypeSelectedOption => {
        this.setState({ CustomerConsumtionTypeSelectedOption });
        console.log(CustomerConsumtionTypeSelectedOption)

        if (CustomerConsumtionTypeSelectedOption.value === 'Regular') {
          this.setState({CustomerConsumtionRegularShow:""})
          console.log("regular none")
          this.setState({CustomerConsumtionPatchShow:"none"})
        }
        else{
          this.setState({CustomerConsumtionRegularShow:"none"})
          console.log("patch none")
          this.setState({CustomerConsumtionPatchShow:""})
        }
      };


      DeilveryTypeHandleChange = DeilveryType => {
        this.setState({ DeilveryType });
        console.log(DeilveryType)
        if (DeilveryType.value === 'Other') {
          this.setState({DeilveryTypeShow:""})
        }
        else{
          this.setState({DeilveryTypeShow:"none"})
        }
      };

      StartDeliveryTimeHandleChange = StartDeliveryTime => this.setState({ StartDeliveryTime })
      
      EndDeliveryTimeHandleChange = EndDeliveryTime => this.setState({ EndDeliveryTime })


      
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-dark text-white" >Logistics Validation Form</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
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
                            value={this.state.CustomerTypeSelectedOption}
                            onChange={this.CustomerTypeHandleChange}
                            options={this.state.CustomerTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="BuissnesType">
                            <Form.Label>Buissnes Type</Form.Label>
                            <Select
                            value={this.state.BuissnesTypeSelectedOption}
                            onChange={this.BuissnesTypeHandleChange}
                            options={this.state.BuissnesTypeOptions}
                            />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="StartDeliveryDate">
                                <Form.Label>Start Delivery Date</Form.Label>
                                <br/>
                                <DatePicker
                                    selected={this.state.StartDeliveryDate}
                                    onChange={this.StartDeliveryDateHandleChange.bind(this)}
                                    />
                            </Form.Group>
                            <Form.Group as={Col} controlId="ForecastDeliveryEnd">
                                <Form.Label>Forecast Delivery End</Form.Label>
                                <br/>
                                <DatePicker
                                    selected={this.state.ForecastDeliveryEnd}
                                    onChange={this.ForecastDeliveryEndHandleChange.bind(this)}
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
                            value={this.state.ProductSelectedOption}
                            onChange={this.ProductHandleChange}
                            options={this.state.ProductTypeOptions}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="Purity" >
                            <Form.Label>Purity</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({Purity:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Col md={4}>
                            <Form.Group as={Col} controlId="CustomerConsumtionType" >
                                <Form.Label>Customer Consumption Type</Form.Label>
                                <Select
                                value={this.state.CustomerConsumtionTypeSelectedOption}
                                onChange={this.CustomerConsumtionHandleChange}
                                options={this.state.CustomerConsumtionTypeOptions}
                                />
                            <Form.Check type="checkbox" label="Product Availablity" onChange={(e)=>{this.setState({ProductAvailablity:e.target.checked})}}/>
                            </Form.Group>
                          </Col>


                            <Form.Group as={Col} controlId="CustomerConsumptionRatePerMonths"
                             style={{display:this.state.CustomerConsumtionRegularShow}} >
                            <Form.Label>Customer Consumption Rate Per Months</Form.Label>
                            <InputGroup >
                            <InputGroup.Append>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({CustomerConsumptionRatePerMonths:e.target.value})}} />
                                <InputGroup.Text id="basic-addon2">/ Months</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="CustomerConsumptionDays"
                            style={{display:this.state.CustomerConsumtionPatchShow}} >
                            <Form.Label>Customer Consumption Days</Form.Label>
                            <InputGroup >
                            <InputGroup.Append>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({CustomerConsumptionDays:e.target.value})}} />
                            <InputGroup.Text id="basic-addon2">Days</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="CustomerConsumptionRatePerHr"
                            style={{display:this.state.CustomerConsumtionPatchShow}} >
                            <Form.Label>Customer Consumption Rate Per Hr</Form.Label>
                            <InputGroup>
                            <InputGroup.Append>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({CustomerConsumptionRatePerHr:e.target.value})}} />
                            <InputGroup.Text id="basic-addon2">Avg./Hr</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        

                        <Form.Row>
                        <Form.Group as={Col} controlId="SeasonalConsumption" >
                            <Form.Label>Seasonal Consumption</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({SeasonalConsumption:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="SeasonPeriod" >
                            <Form.Label>Season Period</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({SeasonPeriod:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="CustomerTank" >
                            <Form.Label>Customer Tank</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({CustomerTank:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId="CustomerDeadLevel" >
                            <Form.Label>Customer Dead Level</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({CustomerDeadLevel:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="UsableCapacityAboveDeadLevel" >
                            <Form.Label>Usable Capacity Above Dead Level</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({UsableCapacityAboveDeadLevel:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col} controlId="PeakConsumption" >
                            <Form.Label>Peak Consumption</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({PeakConsumption:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="FrequencyOfPeakConsumption">
                              <Form.Label>Frequency Of Peak Consumption</Form.Label>
                              <Form.Control as="textarea" rows="1" placeHolder="times/period" />
                              </Form.Group>
                        </Form.Row>

                        <Form.Row >
                         <Col md={6}>
                            <Form.Group as={Col} controlId="DeilveryType" >
                            <Form.Label>Deilvery Type</Form.Label>
                            <Select
                            value={this.state.DeilveryType}
                            onChange={this.DeilveryTypeHandleChange}
                            options={[{value:'24 Hours',label:'24 Hours'},{value:'Other',label:'Other'}]}
                            />
                            </Form.Group>
                            </Col>

                            <Form.Group as={Col} controlId="StartDeliveryTime"
                             style={{display:this.state.DeilveryTypeShow}}>
                                <Form.Label>Start Delivery Time</Form.Label>
                                <br/>
                                <TimePicker
                                    onChange={this.StartDeliveryTimeHandleChange}
                                    value={this.state.StartDeliveryTime}
                                    />
                            </Form.Group>

                            <Form.Group as={Col} controlId="EndDeliveryTime"
                             style={{display:this.state.DeilveryTypeShow}}>
                                <Form.Label>End Delivery Time</Form.Label>
                                <br/>
                                <TimePicker
                                    onChange={this.EndDeliveryTimeHandleChange}
                                    value={this.state.EndDeliveryTime}
                                    />
                            </Form.Group>
                        </Form.Row>

                        
                        <Form.Row>
                        <Form.Group as={Col} controlId="WeightScale" >
                            <Form.Label>Weight Scale</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({WeightScale:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="TankGuage" >
                            <Form.Label>Tank Guage</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({TankGuage:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="LvfComment">
                            <Form.Label>Lvf Comment</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({LvfComment:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>


                    </Form>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default logisticsValidationForm;
