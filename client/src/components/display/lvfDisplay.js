import React, { Component } from "react";
import { Form , Col , Row , Card, Button , Collapse} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";



class lvfDisplay extends Component {
    
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
            { value: 'regular', label: 'regular' },
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
        lvfComment:"",
        open:false,


      }

      CustomerTypeHandleChange = customerType => {
        this.setState({ customerType });
      };

      BuissnesTypeHandleChange = businessType => {
        this.setState({ businessType });
      };

      startDeliveryDateHandleChange(date) {
        this.setState({startDeliveryDate: date})
      }

      forecastDeliveryEndHandleChange(date) {
        this.setState({forecastDeliveryEnd: date})
      }

      ProductHandleChange = product => {
        this.setState({ product });
      };
      
      CustomerConsumtionHandleChange  = customerConsumption => {
        this.setState({ customerConsumption });

        if (customerConsumption.value === 'regular') {
          this.setState({CustomerConsumtionregularShow:""})
          this.setState({CustomerConsumtionPatchShow:"none"})
        }
        else{
          this.setState({CustomerConsumtionregularShow:"none"})
          this.setState({CustomerConsumtionPatchShow:""})
        }
      };


      availableDeliveryHandleChange = availableDelivery => {
        this.setState({ availableDelivery });
        if (availableDelivery.value === 'Other') {
          this.setState({availableDeliveryShow:""})
        }
        else{
          this.setState({availableDeliveryShow:"none"})
        }
      };

      startDeliveryTimeHandleChange = startDeliveryTime => this.setState({ startDeliveryTime })
      
      endDeliveryTimeHandleChange = endDeliveryTime => this.setState({ endDeliveryTime })


      

      render() {
        let lvf = this.props.LVF        
        return (
          
            <React.Fragment>
                <Card border="secondary" >
                <Card.Header as="h5" className="bg-secondary text-white" >
                <Row style={{height: .04*window.innerHeight + 'px'}}>
                <Col>Logistics Validation Form</Col>
                <Button variant="outline-light" size="sm"
                 onClick={(e)=>{this.setState({open:!this.state.open} )}}>☰</Button>
                 </Row>
                 </Card.Header>
                <Row><br/></Row>
                <Col md={12}>
                <Collapse in={this.state.open}>                
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label style={{ color:"black" , fontSize:"20px" , textDecoration:"underline" }}>Origin of the Request</Form.Label>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row >
                            <Form.Group as={Col} controlId=">CustomerType" >
                            <Form.Label style={{fontWeight:"bold"}} >Customer's Type : </Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.customerType}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} controlId="BuissnesType">
                            <Form.Label style={{fontWeight:"bold"}}>Buissnes Type :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.businessType}</Form.Label>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="startDeliveryDate">
                                <Form.Label style={{fontWeight:"bold"}}>Start Delivery Date</Form.Label>
                                 <span>{'      '}</span>
                            <Form.Label>{lvf.startDeliveryDate}</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="forecastDeliveryEnd">
                                <Form.Label style={{fontWeight:"bold"}} >Forecast Delivery End</Form.Label>
                                 <span>{'      '}</span>
                            <Form.Label>{lvf.forecastDeliveryEnd}</Form.Label>
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
                            <Form.Label style={{fontWeight:"bold"}} >Product :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{lvf.product}</Form.Label>

                            </Form.Group>

                            <Form.Group as={Col} controlId="purity" >
                            <Form.Label style={{fontWeight:"bold"}} >Purity :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.purity}</Form.Label>
                            </Form.Group>

                            
                            <Form.Group as={Col}/>

                        </Form.Row>

                        <Form.Row>
                          
                            <Form.Group as={Col} controlId="CustomerConsumtionType" >
                                <Form.Label style={{fontWeight:"bold"}} >Customer Consumption Type :</Form.Label>
                                 <span>{'      '}</span>
                            <Form.Label>{lvf.customerConsumption}</Form.Label>
                            </Form.Group>
                          


                            <Form.Group as={Col} controlId="regularMonths">
                            <Form.Label  style={{fontWeight:"bold"}}  >Customer Consumption Rate Per Months :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.regularMonths}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} controlId="patchDay">
                            <Form.Label style={{fontWeight:"bold"}} >Customer Consumption Days :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.patchDay}</Form.Label>

                            </Form.Group>

                        </Form.Row>

                        <Form.Row>                        
                            <Form.Group as={Col} controlId="patchAvgHrs">
                            <Form.Label style={{fontWeight:"bold"}} >Customer Consumption Rate Per Hr :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.patchAvgHrs}</Form.Label>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId="seasonalConsumption" >
                            <Form.Label style={{fontWeight:"bold"}}>Seasonal Consumption :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.seasonalConsumption}</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="seasonPeriod" >
                            <Form.Label style={{fontWeight:"bold"}}>Season Period :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.seasonPeriod}</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="customerTank" >
                            <Form.Label style={{fontWeight:"bold"}}>Customer Tank :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.customerTank}</Form.Label>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId="customerDeadLevel" >
                            <Form.Label style={{fontWeight:"bold"}}>Customer Dead Level :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.customerDeadLevel}</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="usableCapacityAboveDeadLevel" >
                            <Form.Label style={{fontWeight:"bold"}}>Usable Capacity Above Dead Level :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.usableCapacityAboveDeadLevel}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col}  />
                            
                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col} controlId="peakConsumption" >
                            <Form.Label style={{fontWeight:"bold"}} >Peak Consumption :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.peakConsumption}</Form.Label>

                            </Form.Group>
                            <Form.Group as={Col} controlId="frequencyOfPeakConsumption">
                              <Form.Label style={{fontWeight:"bold"}} >Frequency Of Peak Consumption :</Form.Label>
                               <span>{'      '}</span>
                            <Form.Label>{lvf.frequencyOfPeakConsumption}</Form.Label>
                              </Form.Group>

                            <Form.Group as={Col}  />
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="customerTank" >
                            <Form.Check id="Customerhastank"
                            custom={true}
                            inline={true}
                            label="Customer Tank"
                            checked={lvf.customerhastank }/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="customerTank" >
                            <Form.Label style={{fontWeight:"bold"}}>Tank Capacity (Liter/Ton) :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{lvf.customerTank}</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="customerDeadLevel" >
                            <Form.Label style={{fontWeight:"bold"}}>Tank Dead Level :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{lvf.customerDeadLevel}</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="usableCapacityAboveDeadLevel" >
                            <Form.Label style={{fontWeight:"bold"}}>Usable Capacity Above Dead Level :</Form.Label>
                            <span>{'      '}</span>
                            <Form.Label>{lvf.usableCapacityAboveDeadLevel}</Form.Label>
                            </Form.Group>
                        </Form.Row>


                        <Form.Row >
                         
                            <Form.Group as={Col} controlId="availableDelivery" >
                            <Form.Label style={{fontWeight:"bold"}}>Deilvery Type :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.availableDelivery}</Form.Label>
                            </Form.Group>
                        

                            <Form.Group as={Col} controlId="startDeliveryTime">
                                <Form.Label style={{fontWeight:"bold"}}>Start Delivery Time :</Form.Label>
                                 <span>{'      '}</span>
                            <Form.Label>{lvf.startDeliveryTime}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} controlId="endDeliveryTime">
                                <Form.Label style={{fontWeight:"bold"}}>End Delivery Time :</Form.Label>
                                 <span>{'      '}</span>
                            <Form.Label>{lvf.endDeliveryTime}</Form.Label>

                            </Form.Group>
                        </Form.Row>

                        
                        <Form.Row>
                            <Form.Group as={Col} controlId="customerTank" >
                            <Form.Label style={{fontWeight:"bold"}}>Recieved via :</Form.Label>
                                 <span>{'      '}</span>
                            <Form.Check id="weightScale"
                            custom={true}
                            inline={true}
                            label="Weight Scale"
                            checked={lvf.weightScale }/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="customerTank" >
                            <Form.Check id="tankGuage"
                            custom={true}
                            inline={true}
                            label="Customer Tank"
                            checked={lvf.tankGuage }/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="flowMeter" >
                            <Form.Check id="flowMeter"
                            custom={true}
                            inline={true}
                            label="Customer Tank"
                            checked={lvf.flowMeter }/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="lvfComment">
                            <Form.Label style={{fontWeight:"bold"}}>Lvf Comment :</Form.Label>
                             <span>{'      '}</span>
                            <Form.Label>{lvf.lvfComment}</Form.Label>
                            </Form.Group>
                        </Form.Row>

                       

                    </Form>
                  </Collapse>
                </Col>
                </Card>
            </React.Fragment>
        )
      }

}


export default lvfDisplay;
