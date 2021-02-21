import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { registerUser} from "../../../../actions/authActions";
import TextFieldGroup from "../../components/TextFieldGroup";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import {ToastContainer} from "react-toastify";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/admin/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        };

        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;
        const { t } = this.props;

        return (
            <>
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">{t('Sign Up')}</h1>
                            <p className="lead text-center">
                                {t('Create your account')}
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder={t('Name')}
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    errors={errors.name}
                                />
                                <TextFieldGroup
                                    placeholder={t('Email')}
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    errors={errors.email}
                                    info="help"
                                />
                                <TextFieldGroup
                                    placeholder={t('Password')}
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    errors={errors.password}
                                />
                                <TextFieldGroup
                                    placeholder={t('Confirm Password')}
                                    name="password_confirmation"
                                    type="password"
                                    value={this.state.password_confirmation}
                                    onChange={this.onChange}
                                    errors={errors.password_confirmation}
                                />
                                <span>{t("Already have account?")}
                                    {" "}
                                    <Link to="/admin/login" className="">{t('Log In')}</Link>
                                </span>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default withTranslation()(connect(mapStateToProps, { registerUser })(withRouter(Register)));
