import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from "../../../../actions/authActions";
import TextFieldGroup from "../../components/TextFieldGroup";
import {withTranslation} from "react-i18next";
import {toast, ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
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
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/admin/dashboard');
        }

        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
            toast.error(nextProps.errors.error)

        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors} = this.state;
        const {t} = this.props;
        return (
            <>
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">{t('Log In')}</h1>
                            <p className="lead text-center">
                                {t('Sign in to your account')}
                            </p>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder={t('Enter Email')}
                                    name="email"
                                    type="email"
                                    required="required"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    placeholder={t("Enter Password")}
                                    name="password"
                                    type="password"
                                    required="required"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                Sign Up
                                <span>{t("Don't have an account?")}
                                    {" "}
                                    <Link to="/admin/register" className="">{t('Sign Up')}</Link>
                            </span>
                                <button type="submit" className="btn btn-info btn-block mt-4">{t('Submit')}</button>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default withTranslation()(connect(mapStateToProps, {loginUser})(Login))
