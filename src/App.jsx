
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
            finalQuery:'',
            ShortName: '',
            LongName: '',
            LastModifiedUserId: 0,
            LastModifiedTimestamp: '',
            TargetObjectType: '',
            AvailableAboveStoreFlag: '',
            ParentFeatureID: '',
            ParentFeatureTargetObjectType: '',
            parentType:'',
            EnableOrgChangeEvent: '',
            Sequence: null,
            Released: 0,
            ClientTypeId: 0,
            IsAsyncReport: 0,
            IsPayroll: 0,
            IsSystemFeature: '',
            Url: '',
            ShowInFeatureToolbar: null,
            FeatureTypeCode: 'HTML',
            ClientId: 0,
            parentFeatureQuery:''
        }

    }
    setShortName(value) {
        this.setState({ ShortName: value });
    }
    setLongName(value) {
        this.setState({ LongName: value });
    }
    setLastModifiedUserId(value) {
        this.setState({ LastModifiedUserId: value });
    }
    setLastModifiedTimestamp(value) {
        this.setState({ LastModifiedTimestamp: value });
    }
    setTargetObjectType(value) {
        this.setState({ TargetObjectType: value });
    }
    setAvailableAboveStoreFlag(value) {
        this.setState({ AvailableAboveStoreFlag: value });
    }
    setParentFeatureID(value) {
        this.setState({ ParentFeatureID: value });
    }
    setParentFeatureTargetObjectType(value) {
        let declareFeatureId = `Declare @ParentFeatureId int;`;
        let query = `${declareFeatureId}
Select @ParentFeatureId = FeatureId 
From Feature with (nolock) 
Where TargetObjectType = '${value}';

`       
        this.setState({ parentType: value, ParentFeatureTargetObjectType: query });
    }
    setEnableOrgChangeEvent(value) {
        this.setState({ EnableOrgChangeEvent: value });
    }
    setSequence(value) {
        this.setState({ Sequence: value });
    }
    setReleased(value) {
        this.setState({ Released: value });
    }
    setClientTypeId(value) {
        this.setState({ ClientTypeId: value });
    }
    setIsAsyncReport(value) {
        this.setState({ IsAsyncReport: value });
    }
    setIsPayroll(value) {
        this.setState({ IsPayroll: value });
    }
    setIsSystemFeature(value) {
        this.setState({ IsSystemFeature: value });
    }
    setUrl(value) {
        this.setState({ Url: value });
    }
    setShowInFeatureToolbar(value) {
        this.setState({ ShowInFeatureToolbar: value });
    }
    setFeatureTypeCode(value) {
        this.setState({ FeatureTypeCode: value });
    }
    setClientId(value) {
        this.setState({ ClientId: value });
    }

    onCopy() {
        this.setState({copied: true});
    }
    render() {
        return (
            <div className="App">
                <div className="title">Generate Feature Script</div>
                <div className="flex-container">
                    <div className="flex-item">
                        <p>
                            <label for="ShortName">ShortName: </label>
                            <input type="text" id="ShortName" onChange={event => { this.setShortName(event.target.value) }} />
                        </p>


                        <p>
                            <label for="LongName">LongName: </label>
                            <input type="text" id="LongName" onChange={event => { this.setLongName(event.target.value) }} />
                        </p>


                        <p>
                            <label for="LastModifiedUserId">LastModifiedUserId: </label>
                            <input type="text" id="LastModifiedUserId" onChange={event => { this.setLastModifiedUserId(event.target.value) }} />
                        </p>


                        <p>
                            <label for="LastModifiedTimestamp">LastModifiedTimestamp: </label>
                            <input type="text" id="LastModifiedTimestamp" onChange={event => { this.setLastModifiedTimestamp(event.target.value) }} />
                        </p>


                        <p>
                            <label for="TargetObjectType">TargetObjectType: </label>
                            <input type="text" id="TargetObjectType" onChange={event => { this.setTargetObjectType(event.target.value) }} />
                        </p>


                        <p>
                            <label for="AvailableAboveStoreFlag">AvailableAboveStoreFlag: </label>
                            <input type="text" id="AvailableAboveStoreFlag" onChange={event => { this.setAvailableAboveStoreFlag(event.target.value) }} />
                        </p>


                        <p>
                            <label for="ParentFeatureID">ParentFeature Target Object Type: </label>
                            <input type="text" id="ParentFeatureID" onChange={event => { this.setParentFeatureTargetObjectType(event.target.value) }} />
                        </p>


                        <p>
                            <label for="EnableOrgChangeEvent">EnableOrgChangeEvent: </label>
                            <input type="text" id="EnableOrgChangeEvent" onChange={event => { this.setEnableOrgChangeEvent(event.target.value) }} />
                        </p>


                        <p>
                            <label for="Sequence">Sequence: </label>
                            <input type="text" id="Sequence" onChange={event => { this.setSequence(event.target.value) }} />
                        </p>


                        <p>
                            <label for="Released">Released: </label>
                            <input type="text" id="Released" onChange={event => { this.setReleased(event.target.value) }} />
                        </p>


                        <p>
                            <label for="ClientTypeId">ClientTypeId: </label>
                            <input type="text" id="ClientTypeId" onChange={event => { this.setClientTypeId(event.target.value) }} />
                        </p>


                        <p>
                            <label for="IsAsyncReport">IsAsyncReport: </label>
                            <input type="text" id="IsAsyncReport" onChange={event => { this.setIsAsyncReport(event.target.value) }} />
                        </p>


                        <p>
                            <label for="IsPayroll">IsPayroll: </label>
                            <input type="text" id="IsPayroll" onChange={event => { this.setIsPayroll(event.target.value) }} />
                        </p>


                        <p>
                            <label for="IsSystemFeature">IsSystemFeature: </label>
                            <input type="text" id="IsSystemFeature" onChange={event => { this.setIsSystemFeature(event.target.value) }} />
                        </p>


                        <p>
                            <label for="Url">Url: </label>
                            <input type="text" id="Url" onChange={event => { this.setUrl(event.target.value) }} />
                        </p>


                        <p>
                            <label for="ShowInFeatureToolbar">ShowInFeatureToolbar: </label>
                            <input type="text" id="ShowInFeatureToolbar" onChange={event => { this.setShowInFeatureToolbar(event.target.value) }} />
                        </p>


                        <p>
                            <label for="FeatureTypeCode">FeatureTypeCode: </label>
                            <input type="text" id="FeatureTypeCode" onChange={event => { this.setFeatureTypeCode(event.target.value) }} />
                        </p>


                        <p>
                            <label for="ClientId">ClientId: </label>
                            <input type="text" id="ClientId" onChange={event => { this.setClientId(event.target.value) }} />
                        </p>



                    </div>
                    <div className="flex-item">
                        <div>
                            <div className="copy">
                                <CopyToClipboard text={this.state.finalQuery} onCopy={this.onCopy}>
                                    <button className="btn btn-primary">Copy to Clipboard</button>
                                </CopyToClipboard>
                            </div>
                            <pre className="query">
                                {this.state.parentType.length> 0 ? this.state.ParentFeatureTargetObjectType: ''}

                                {`INSERT INTO Feature
(ShortName, LongName, LastModifiedUserId, LastModifiedTimestamp,
TargetObjectType, AvailableAboveStoreFlag, ParentFeatureID, EnableOrgChangeEvent,
Sequence, Released, ClientTypeId, IsAsyncReport, IsPayroll, 
IsSystemFeature, Url, ShowInFeatureToolbar, FeatureTypeCode,
ClientId)
VALUES
 (
'${this.state.ShortName}', '${this.state.LongName}', ${this.state.LastModifiedUserId}, '${this.state.LastModifiedTimestamp}',
'${this.state.TargetObjectType}', '${this.state.AvailableAboveStoreFlag}', '${this.state.parentType.length> 0  ? '@ParentFeatureId' : null}', '${this.state.EnableOrgChangeEvent}',
${this.state.Sequence}, '${this.state.Released}', '${this.state.ClientTypeId}', '${this.state.IsAsyncReport}','${this.state.IsPayroll}', 
${this.state.IsSystemFeature}, '${this.state.Url}', ${this.state.ShowInFeatureToolbar},'${this.state.FeatureTypeCode}',
'${this.state.ClientId}'
)
 
                                `}
                            </pre>
                            
                        </div>
                    </div>
                    {/*<Row className="show-grid">
                        <Col xs={2}>ShortName</Col>
                        <Col xs={10}><input onChange={event => { this.setShortName(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>LongName</Col>
                        <Col xs={10}><input onChange={event => { this.setLongName(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>LastModifiedUserId</Col>
                        <Col xs={10}><input onChange={event => { this.setLastModifiedUserId(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>LastModifiedTimestamp</Col>
                        <Col xs={10}><input onChange={event => { this.setLastModifiedTimestamp(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>TargetObjectType</Col>
                        <Col xs={10}><input onChange={event => { this.setTargetObjectType(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>AvailableAboveStoreFlag</Col>
                        <Col xs={10}><input onChange={event => { this.setAvailableAboveStoreFlag(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>ParentFeature Target Object Type</Col>
                        <Col xs={10}><input onChange={event => { this.setParentFeatureTargetObjectType(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>ParentFeatureID</Col>
                        <Col xs={10}><input onChange={event => { this.setParentFeatureID(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>EnableOrgChangeEvent</Col>
                        <Col xs={10}><input onChange={event => { this.setEnableOrgChangeEvent(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>Sequence</Col>
                        <Col xs={10}><input onChange={event => { this.setSequence(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>Released</Col>
                        <Col xs={10}><input onChange={event => { this.setReleased(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>ClientTypeId</Col>
                        <Col xs={10}><input onChange={event => { this.setClientTypeId(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>IsAsyncReport</Col>
                        <Col xs={10}><input onChange={event => { this.setIsAsyncReport(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>IsPayroll</Col>
                        <Col xs={10}><input onChange={event => { this.setIsPayroll(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>IsSystemFeature</Col>
                        <Col xs={10}><input onChange={event => { this.setIsSystemFeature(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>Url</Col>
                        <Col xs={10}><input onChange={event => { this.setUrl(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>ShowInFeatureToolbar</Col>
                        <Col xs={10}><input onChange={event => { this.setShowInFeatureToolbar(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>FeatureTypeCode</Col>
                        <Col xs={10}><input value={this.state.FeatureTypeCode} onChange={event => { this.setFeatureTypeCode(event.target.value) }} /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>ClientId</Col>
                        <Col xs={10}><input value={this.state.ClientId} onChange={event => { this.setClientId(event.target.value) }} /></Col>
                    </Row>
*/}


                </div>


                <div></div>
            </div>

        )

    }

}
export default App;