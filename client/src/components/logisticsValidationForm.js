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
            { value: 'New Customer', label: 'New Customer' },
            { value: 'Existing Customer', label: 'Existing Customer' },
          ],
        customerType : "",

        //Buissness type dropdown list ... you have to change both value and label with the same name
         BuissnesTypeOptions : [
            { value: 'HC', label: 'HC' },
            { value: 'IM', label: 'IM' },
            { value: 'O&G', label: 'O&G' },
          ],
        businessType : "",

        startDeliveryDate:"",
        forecastDeliveryEnd:"",

        //Product type dropdown list ... you have to change both value and label with the same name
        ProductTypeOptions : [
            { value: 'Lox', label: 'Lox' },
            { value: 'Lin', label: 'Lin' },
            { value: 'Lar', label: 'Lar' },
            { value: 'LCo2', label: 'LCo2' },
          ],
        product : "",
        
        purity:0,
        
        CustomerConsumtionTypeOptions : [
            { value: 'Regular', label: 'Regular' },
            { value: 'Spot', label: 'Spot' },
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
        weightScale:false,
        tankGuage:false,
        flowMeter:false,
        lvfComment:"",

        customerhastank:false,

        fieldset:"",
        done:"✘",
        dodo:true,
      }

      CustomerTypeHandleChange = (customerType) => {
        this.setState({ customerType:customerType.value });
      };

      BuissnesTypeHandleChange = (businessType) => {
        this.setState({ businessType:businessType.value });
      };

      startDeliveryDateHandleChange(date) {
        let x = date
        let hoursDiff = x.getHours() - x.getTimezoneOffset() / 60;
        let minutesDiff = (x.getHours() - x.getTimezoneOffset()) % 60;
        x.setHours(hoursDiff);
        x.setMinutes(minutesDiff);
        this.setState({startDeliveryDate: x})
      }

      forecastDeliveryEndHandleChange(date) {
        let x = date
        let hoursDiff = x.getHours() - x.getTimezoneOffset() / 60;
        let minutesDiff = (x.getHours() - x.getTimezoneOffset()) % 60;
        x.setHours(hoursDiff);
        x.setMinutes(minutesDiff);
        this.setState({forecastDeliveryEnd: x})
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

      submitData=(event)=>{
        this.setState({dodo:!this.state.dodo})
        event.preventDefault();
        this.sendData()
        if (this.state.fieldset===""){
            this.setState({fieldset:"disabled",
                           done:"✔" })
        }
        else{
            this.setState({fieldset:"",
                           done:"✘" })
        }
      }
      submissionColor=(e)=>{
          if (e==="✔"){
              return "green"
          }else{
              return "red"
          }
      }

      validateItem=(e)=>{
        if (e===""){
          return true
        }
        return false
      }
      
      
      render() {
        return (
            <React.Fragment>
                <Card border="secondary" >
                <Form onSubmit={this.submitData}>
                <Form>
                <Card.Header as="h5" className="bg-dark text-white" >Customer Consumption Details</Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <fieldset disabled={this.state.fieldset}>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"20px" , textDecoration:"underline" }}>Origin of the Request</Form.Label>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row >
                            <Form.Group as={Col} controlId=">CustomerType" >
                            <Form.Label>Customer's Type <span style={{color:"red"}}>✶</span>
                            </Form.Label>
                            <Select
                            value={this.state.customerType.value}
                            onChange={this.CustomerTypeHandleChange}
                            options={this.state.CustomerTypeOptions}
                            />
                              <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                required={this.validateItem(this.state.customerType)}/>
                            
                            </Form.Group>

                            <Form.Group as={Col} controlId="BuissnesType">
                            <Form.Label>Buissnes Type <span style={{color:"red"}}>✶</span></Form.Label>
                            <Select
                            value={this.state.businessType.value}
                            onChange={(e)=>{this.setState({ businessType: e.value})}}
                            options={ [
                                        { value: 'Lox', label: 'Lox' },
                                        { value: 'Lin', label: 'Lin' },
                                        { value: 'Lar', label: 'Lar' },
                                        { value: 'LCo2', label: 'LCo2' },
                                    ]}
                            />
                             <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                required={this.validateItem(this.state.businessType)}/>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="startDeliveryDate">
                                <Form.Label>Start Delivery Date <span style={{color:"red"}}>✶</span></Form.Label>
                                <br/>
                                <DatePicker
                                    selected={this.state.startDeliveryDate}
                                    onChange={this.startDeliveryDateHandleChange.bind(this)}
                                    />
                                <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                   required={this.validateItem(this.state.startDeliveryDate)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="forecastDeliveryEnd">
                                <Form.Label>Forecast Delivery End <span style={{color:"red"}}>✶</span></Form.Label>
                                <br/>
                                <DatePicker
                                    selected={this.state.forecastDeliveryEnd}
                                    onChange={this.forecastDeliveryEndHandleChange.bind(this)}
                                    />
                                <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                    required={this.validateItem(this.state.forecastDeliveryEnd)}/>
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
                            <Form.Label>Product <span style={{color:"red"}}>✶</span></Form.Label>
                            <Select
                            value={this.state.product.value}
                            onChange={this.ProductHandleChange}
                            options={this.state.ProductTypeOptions}
                            />
                            <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                    required={this.validateItem(this.state.product)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="purity" >
                            <Form.Label>Purity <span style={{color:"red"}}>✶</span></Form.Label>
                            <FormControl type={"number"} step={0.1}  onChange={(e)=>{this.setState({purity:e.target.value})
                         }} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Col md={4}>
                            <Form.Group as={Col} controlId="CustomerConsumtionType" >
                                <Form.Label>Customer Consumption Type <span style={{color:"red"}}>✶</span></Form.Label>
                                <Select
                                value={this.state.customerConsumption.value}
                                onChange={this.CustomerConsumtionHandleChange}
                                options={this.state.CustomerConsumtionTypeOptions}
                                />
                                <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                    required={this.validateItem(this.state.customerConsumption)}/>
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
                            <Form.Group as={Col} controlId="peakConsumption" >
                            <Form.Label>Peak Consumption</Form.Label>
                            <FormControl type={"number"} step={0.1} onChange={(e)=>{this.setState({peakConsumption:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="frequencyOfPeakConsumption">
                              <Form.Label>Frequency Of Peak Consumption</Form.Label>
                              <Form.Control as="textarea"  rows="1" placeholder="times/period" />
                              </Form.Group>
                        </Form.Row>
                        
                        <br/>
                        <Form.Row>
                            <Form.Group as={Col} controlId="customerTank" >
                            <Form.Check id="Customerhastank"
                            custom={true}
                            inline={true}
                            label="Customer Tank"
                            onChange={(e)=>{this.setState({customerhastank:e.target.checked})}}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="customerTank" >
                            <Form.Label>Tank Capacity (Liter/Ton) <span style={{color:"red"}}>✶</span></Form.Label>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.customerhastank} required={this.state.customerhastank}
                             onChange={(e)=>{this.setState({customerTank:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="customerDeadLevel" >
                            <Form.Label>Tank Dead Level <span style={{color:"red"}}>✶</span></Form.Label>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.customerhastank} required={this.state.customerhastank}
                            onChange={(e)=>{this.setState({customerDeadLevel:e.target.value})}} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="usableCapacityAboveDeadLevel" >
                            <Form.Label>Usable Capacity Above Dead Level <span style={{color:"red"}}>✶</span></Form.Label>
                            <FormControl type={"number"} step={0.1} disabled={!this.state.customerhastank} required={this.state.customerhastank}
                            onChange={(e)=>{this.setState({usableCapacityAboveDeadLevel:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                        
                        <br/>
                        <Form.Row >
                            <Col md={6}>
                              <Form.Group as={Col} controlId="availableDelivery" >
                              <Form.Label>Deilvery Window <span style={{color:"red"}}>✶</span></Form.Label>
                              <Select
                              value={this.state.availableDelivery.value}
                              onChange={this.availableDeliveryHandleChange}
                              options={[{value:'24 Hours',label:'24 Hours'},{value:'Other',label:'Other'}]}
                              />
                              <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                    required={this.validateItem(this.state.availableDelivery)}/>
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

                        <br/>
                        <Form.Row>
                          <Form.Group as={Col} md={{span:2}} >
                            <Form.Label>Recieved via : <span style={{color:"red"}}>✶</span></Form.Label>
                            <input tabIndex={-1} autoComplete="off" style={{ opacity: 0, height: 0 }}
                                    required={!(this.state.weightScale||this.state.tankGuage||this.state.flowMeter)}/>
                          </Form.Group>
                          <Form.Group as={Col}  >
                           <Form.Check id="WeightScale"
                            custom={true}
                            inline={true}
                            label="Weight Scale"
                            onChange={(e)=>{this.setState({weightScale:e.target.checked})}}/>
                          </Form.Group>
                          <Form.Group as={Col}  >
                           <Form.Check id="TankGuage"
                            custom={true}
                            inline={true}
                            label="Tank Guage"
                            onChange={(e)=>{this.setState({tankGuage:e.target.checked})}}/>
                          </Form.Group>
                          <Form.Group as={Col}  >
                           <Form.Check id="flowMeter"
                            custom={true}
                            inline={true}
                            label="Flow Meter"
                            onChange={(e)=>{this.setState({flowMeter:e.target.checked})}}/>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="lvfComment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e)=>{this.setState({lvfComment:e.target.value})}} />
                            </Form.Group>
                        </Form.Row>

                       

                </fieldset>
                </Col>
                <Card.Footer > 
                            <Col md={{offset:5}} >
                            <Button type="submit" variant="outline" style={{color:this.submissionColor(this.state.done)}}>Check if done {this.state.done}</Button>
                            </Col> 
                            
                </Card.Footer>
                </Form>
                </Form>
                </Card>
            </React.Fragment>
        )
      }

}


export default logisticsValidationForm;
