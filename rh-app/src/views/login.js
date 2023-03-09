import React from "react"
import Card from '../components/card'
import FormGroup from "../components/form-group"

class Login extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-docs-section">
                            <Card title="Login">
                               <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label = "Email: *" htmlfor>

                                            </FormGroup>
                     
                                        </fieldset>

                                    </div>
                                </div>
                               </div>

                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Login 