import React from 'react';
import { connect } from "react-redux";

const SurveyFormReview = ({ onCancel, formValues }) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                <div>
                    <label htmlFor="">Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label htmlFor="">Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label htmlFor="">Email Body</label>
                    <div>{formValues.email}</div>
                </div>
                <div>
                    <label htmlFor="">Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
            </div>
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        formValues: state.form.surveyForm.values
    };
};

export default connect(mapStateToProps)(SurveyFormReview);