import React, { Component } from 'react';
import {getList} from './get_env_data'
import { BasicTable } from './BasicTable';
import './App.css'

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campName: '',
            startDate: '',
            endDate: '',
            showAverage: false,
            showTotal: false,
            showI1 : true,
            showI2 : true,
            showTR : true,
            showENV1 : true,
            showENV2 : true,
            showENV3 : true,
            resp_data : [],
            formSubmitted: false,
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const params = {
            campName: this.state.campName,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            showAverage: this.state.showAverage,
            showTotal: this.state.showTotal,
            showI1: this.state.showI1,
            showI2: this.state.showI2,
            showTR: this.state.showTR,
            showENV1: this.state.showENV1,
            showENV2: this.state.showENV2,
            showENV3: this.state.showENV3,
        };
        getList(params)
        .then((resp_data) => {
            this.setState(
                { 
                    resp_data,
                    formSubmitted: true,

                    // campName: '',
                    // startDate: '',
                    // endDate: '',
                    // showAverage: false,
                    // showI1: true,
                    // showI2: true,
                    // showTR: true,
                    // showENV1: true,
                    // showENV2: true,
                    // showENV3: true,

                });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        return (
            <div>
                <h1>ENV-WISE DATA</h1>
                <form onSubmit={this.handleSubmit} className='search-form'>
                    <label htmlFor="campName">Campaign Name:</label>
                    <input
                        type="text"
                        id="campName"
                        name="campName"
                        value={this.state.campName}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
                        required
                    />
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
                        required
                    />
                    <label htmlFor="showAverage">Average:</label>
                    <input
                        type="checkbox"
                        id="showAverage"
                        name="showAverage"
                        checked={this.state.showAverage}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="showTotal">Total:</label>
                    <input
                        type="checkbox"
                        id="showTotal"
                        name="showTotal"
                        checked={this.state.showTotal}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="showI1">I1:</label>
                    <input
                        type="checkbox"
                        id="showI1"
                        name="showI1"
                        checked={this.state.showI1}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="showI2">I2:</label>
                    <input
                        type="checkbox"
                        id="showI2"
                        name="showI2"
                        checked={this.state.showI2}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="showTR">TR:</label>
                    <input
                        type="checkbox"
                        id="showTR"
                        name="showTR"
                        checked={this.state.showTR}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="showENV1">ENV1:</label>
                    <input
                        type="checkbox"
                        id="showENV1"
                        name="showENV1"
                        checked={this.state.showENV1}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="showENV2">ENV2:</label>
                    <input
                        type="checkbox"
                        id="showENV2"
                        name="showENV2"
                        checked={this.state.showENV2}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="showENV3">ENV3:</label>
                    <input
                        type="checkbox"
                        id="showENV3"
                        name="showENV3"
                        checked={this.state.showENV3}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Search</button>
                </form>
                <div className='table-container'>
                    {this.state.formSubmitted && <BasicTable resp_data={this.state.resp_data} />}
                </div>
                
            </div>
        );
    }
}

export default FormComponent;
