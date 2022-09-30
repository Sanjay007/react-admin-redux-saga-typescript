import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Form, Button, ProgressBar, InputGroup, Tab, Nav, FloatingLabel } from 'react-bootstrap';
import { Wizard, Steps, Step } from 'react-albus';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput, VerticalForm } from '../../../components';
import MaskedInput from 'react-text-mask';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FeatherIcons from 'feather-icons-react';
import { useForm } from "react-hook-form";
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';

interface TabContentType {
    id: number;
    title: string;
    icon?: string;
    text: string;
    text2: any;
}

interface UserData {
    Name: string;
    email: string;
    icon?: string;
    text: string;
    text2: any;
}




const CreateParty = () => {
    const [dateRange, setDateRange] = useState<any>([new Date(), new Date().setDate(new Date().getDate() + 7)]);
    const [startDate, endDate] = dateRange;

    const saveEntity = (ev: any) => {

        console.log(ev);
    }



const form3=()=>{


    return(<ValidatedForm defaultValues={{"name":""}} onSubmit={saveEntity}>
        <Row>
                    <Col md={12} className="mb-3">
                    <ValidatedField
                label="Party Name *"
                id="party-openingBalance"
                name="partyName"
                data-cy="openingBalance"
                type="text"
              />
                    </Col>
                    </Row>

    </ValidatedForm>);
}

    const form2 = () => {

        const { t } = useTranslation();
        const { register, handleSubmit } = useForm();
        return (<VerticalForm<UserData>
            onSubmit={saveEntity}
            defaultValues={{}}
            formClass="authentication-form">
            <Row>


                <Col md={6} className="mb-3">
                    <FormInput
                        label={t('Name')}
                        type="text"
                        name="name"
                        startIcon={<FeatherIcons icon={'user'} className="icon-dual" />}
                        placeholder={t('Your full name')}

                    />
                </Col>

                <Col md={6} className="mb-3">
                    <FormInput
                        label={t('Email Address')}
                        type="email"
                        name="email"
                        startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                        placeholder={t('hello@coderthemes.com')}
                        containerClass={'mb-3'}
                    />
                </Col>
            </Row>


            <FormInput
                label={t('Email Address')}
                type="email"
                name="email"
                startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                placeholder={t('hello@coderthemes.com')}
                containerClass={'mb-3'}
            />
            <FormInput
                label={t('Password')}
                type="password"
                name="password"
                startIcon={<FeatherIcons icon={'lock'} className="icon-dual" />}
                placeholder={t('Enter your Password')}
                containerClass={'mb-3'}
            />
            <FormInput
                label={t('I accept Terms and Conditions')}
                type="checkbox"
                name="checkboxsignup"
                containerClass={'mb-3'}
                defaultChecked
            />

            <div className="mb-3 text-center d-grid">
                <Button type="submit" >
                    {t('Sign Up')}
                </Button>
            </div>
        </VerticalForm>);
    }
    const schema = yup.object({
        partyName: yup.string().required(),
        partyEmail: yup.string().required(),
        phoneNumber: yup.number().positive().integer().required(),
      }).required();
   
    const partyForm = () => {
        const [formSubmitted, setFormSubmitted] = useState(false);
       
        const { register, handleSubmit, formState:{ errors },formState } = useForm({ mode: "onChange",
            resolver: yupResolver(schema)
          });
          const savePartyD = (ev: any) => {
            console.log(ev, "llll");
            if (Object.keys(errors).length === 0) {
                console.log("No properties")
                setFormSubmitted(true);
              }else{
                setFormSubmitted(false);
              }
           
        }
        // const { register, handleSubmit, formState: { errors },formState } = useForm({ mode: "onChange"});
        console.log(formSubmitted, errors,formState);
        return (
            <Form noValidate validated={formSubmitted} onSubmit={handleSubmit(savePartyD)} >
                <Row>
                    <Col md={12} className="mb-3">
                        <Form.Label htmlFor="partyName" visuallyHidden>
                            partyName
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>Party Name</InputGroup.Text>
                            <Form.Control
                                {...register("partyName", { required: true })}
                                type="text"
                                name="partyName"
                                id="partyName"
                                isInvalid={errors.partyName} 
                             
                                placeholder="partyName" />
                        </InputGroup>
                    </Col>


                </Row>




                <Row>
                    <Col md={6} className="mb-3">
                        <Form.Label htmlFor="phoneNumber" visuallyHidden>
                            ContactNumber
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>Contact Number</InputGroup.Text>
                            {/* <MaskedInput
                             {...register("phoneNumber")}
                            id="phoneNumber"
                             name="phoneNumber"
                                mask={[
                                    '(',
                                    /[1-9]/,
                                    /[1-9]/,
                                    ')',
                                    ' ',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                ]}
                                placeholder="(___) ___-____"
                                className="form-control"
                                type="number"
                            /> */}
                            <Form.Control
                                {...register("phoneNumber", { required: true })}
                                type="phone"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="phoneNumber"
                                isInvalid={errors.phoneNumber ? true : false}
                            />
                        </InputGroup>
                    </Col>

                    <Col md={6} className="mb-3">
                        <Form.Label htmlFor="partyEmail" visuallyHidden>
                            Party Email
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>Email *</InputGroup.Text>
                            <Form.Control
                                {...register("partyEmail", { required: true })}
                                type="email"
                                name="partyEmail"
                                id="partyEmail"
                                isInvalid={errors.partyEmail} 
                             
                                placeholder="partyEmail" />
                        </InputGroup>
                    </Col>

                </Row>

                <Row>


                    <Col md={6} className="mb-3">
                        <Form.Label htmlFor="gstin" visuallyHidden>
                            Party GST
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>GST *</InputGroup.Text>
                            <Form.Control  type="text"
                                {...register("gstin",{ required: true })}
                                name="gstin"
                                id="gstin"
                                
                                placeholder="Party GST" />
                        </InputGroup>
                    </Col>

                    <Col md={6} className="mb-3">
                        <InputGroup>
                            <InputGroup.Text>GST Type*</InputGroup.Text>
                            <Form.Select  {...register("gstType",{ required: true })} aria-label="Floating label select gstType">
                                <option>Select GST Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>

                </Row>

                <Row>




                    <Col md={6} className="mb-3">
                        <InputGroup>
                            <InputGroup.Text>State*</InputGroup.Text>
                            <Form.Select aria-label="Floating label select state"  {...register("state",{ required: true })}>
                                <option>Select State</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>


                    <Col md={6} className="mb-3">
                        <InputGroup>
                            <InputGroup.Text>State*</InputGroup.Text>
                            <Form.Select aria-label="Floating label select state">
                                <option>Select GST Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </InputGroup>


                    </Col>

                    <Col md={6} className="mb-3">
                        <InputGroup>
                            <InputGroup.Text>Ship To Party</InputGroup.Text>
                            <Form.Select aria-label="Floating label select state"  {...register("shipTo",{ required: true })}>
                                <option>Select State</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>


                    <Col md={6} className="mb-3">
                        <Button type="submit">Save & Next</Button>
                    </Col>
                </Row>
            </Form>

        );

    }


    /*
     * handle date change
     */
    const onDateChange = (date: Date) => {
        if (date) {
            setDateRange(date);
        }
    };


    const NavPills = () => {
        return (
            <Card>
                <Card.Body>
                    <h5 className="header-title mb-4 mt-0">Nav Pills</h5>

                    <Tab.Container defaultActiveKey="Profile">
                        <Nav as="ul" justify variant="pills" className="p-1">
                            {(tabContents || []).map((tab, index) => {
                                return (
                                    <Nav.Item as="li" key={index}>
                                        <Nav.Link className="cursor-pointer" eventKey={tab.title}>
                                            <span className="d-block d-sm-none">
                                                <i className={tab.icon}></i>
                                            </span>
                                            <span className="d-none d-sm-block">{tab.title}</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                );
                            })}
                        </Nav>
                        <Tab.Content className="text-muted">
                            {(tabContents || []).map((tab, index) => {
                                return (
                                    <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index}>
                                        {tab.text2}
                                    </Tab.Pane>
                                );
                            })}
                        </Tab.Content>
                    </Tab.Container>
                </Card.Body>
            </Card>
        );
    };

const formvalid=()=>{
    const [validated, setValidated] = useState<boolean>(false);
    const { register, handleSubmit, formState:{ errors },formState } = useForm({ mode: "onChange"
         
          });
    const handleSubmit2 = (event: any) => {
        console.log(event)
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }
// console.log(event.target);
        setValidated(true);
    };
    return (<Form noValidate validated={validated} onSubmit={handleSubmit(handleSubmit2)}>
        <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control    {...register("firstName", { required: true })} required type="text" placeholder="First name" defaultValue="Mark" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Check
                id="validation-check"
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
            />
        </Form.Group>
        <Button type="submit">Submit form</Button>
    </Form>);
}


    const WizardWithFormValidation = () => {
        /*
         * form validation schema
         */
        const validationSchema = yupResolver(
            yup.object().shape({
                email: yup.string().required('Please enter Email address'),
                password: yup.string().required('Please enter Password'),
                checkbox: yup.bool().oneOf([true]),
            })
        );
        const validationSchema2 = yupResolver(
            yup.object().shape({
                firstname: yup.string().required('Please enter First Name'),
                lastname: yup.string().required('Please enter Last Name'),
                checkbox: yup.bool().oneOf([true]),
            })
        );

        return (
            <Card>
                <Card.Body>
                    <h4 className="header-title mb-3">Wizard with Validation</h4>

                    <Wizard
                        render={({ step, steps }) => (
                            <React.Fragment>
                                <ProgressBar
                                    animated
                                    striped
                                    variant="success"
                                    now={((steps.indexOf(step) + 1) / steps.length) * 100}
                                    className="mb-3 progress-sm"
                                />

                                <Steps>
                                    <Step
                                        id="login"
                                        render={({ next }) => (
                                            <VerticalForm onSubmit={(event, values) => { saveEntity(event); next() }} >
                                                <FormInput
                                                    label="Party Name"
                                                    type="text"
                                                    name="partyName"
                                                    containerClass={'mb-3'}
                                                />
                                                <FormInput
                                                    label="Contact"
                                                    type="number"
                                                    name="contact"
                                                    containerClass={'mb-3'}
                                                />

                                                <FormInput
                                                    label="Email"
                                                    type="email"
                                                    name="email"
                                                    containerClass={'mb-3'}
                                                />

                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button variant="secondary" disabled>
                                                            Previous
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item float-end">
                                                        <Button variant="secondary" type="submit">
                                                            Next
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </VerticalForm>
                                        )}
                                    />
                                    <Step
                                        id="gandalf"
                                        render={({ next, previous }) => (
                                            <VerticalForm onSubmit={(event, values) => { console.log(values); saveEntity(event); next() }} resolver={validationSchema2}>

                                                {/* <Row className="align-items-center">
                                               <Col md={'auto'} className="mb-6">
                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Username
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control id="inlineFormInputGroup" name="paryName" placeholder='party name' />
                        </InputGroup>
                    </Col>
                                                
                                                </Row> */}
                                                {/* 
                                                <Form.Group>
                            <Form.Control
                                
                                type="email"
                                name="email"
                                id="exampleEmail4"
                                bsPrefix="form-control-plaintext"
                                placeholder="email@example.com"
                            />

<Form.Control
                                
                                type="email"
                                name="email"
                                id="exampleEmail4"
                                bsPrefix="form-control-plaintext"
                                placeholder="email@example.com"
                            />

                        </Form.Group> */}


                                                <Row>
                                                    {/* <Col md={4} className="mb-3">
                        <Form.Group>
                            <Form.Control
                                readOnly
                                type="email"
                                name="email"
                                id="exampleEmail4"
                                bsPrefix="form-control-plaintext"
                                placeholder="email@example.com"
                            />
                        </Form.Group>
                    </Col> */}

                                                    <Col md={'auto'} className="mb-3">
                                                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                            UserName
                                                        </Form.Label>
                                                        <InputGroup>
                                                            <InputGroup.Text>UserName</InputGroup.Text>
                                                            <Form.Control type="password"
                                                                name="password"
                                                                id="examplePassword5"
                                                                placeholder="Username" />
                                                        </InputGroup>
                                                    </Col>



                                                </Row>

                                                <Row>
                                                    <Col className="mb-3">
                                                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                            UserName
                                                        </Form.Label>
                                                        <InputGroup>
                                                            <InputGroup.Text>User Name *</InputGroup.Text>
                                                            <Form.Control type="password"
                                                                name="tesss"
                                                                id="examplePassword5"

                                                                placeholder="Username" />
                                                        </InputGroup>
                                                    </Col>


                                                </Row>





                                                <FormInput
                                                    label="Last Name"
                                                    type="text"
                                                    name="lastname"
                                                    containerClass={'mb-3'}
                                                />

                                                <FormInput
                                                    label="Agree to terms and conditions"
                                                    type="checkbox"
                                                    name="checkbox"
                                                    containerClass={'mb-3'}
                                                />

                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} variant="secondary">
                                                            Previous
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item float-end">
                                                        <Button variant="secondary" type="submit">
                                                            Next
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </VerticalForm>
                                        )}
                                    />
                                    <Step
                                        id="dumbledore"
                                        render={({ previous }) => (
                                            <Row>
                                                <Col sm={12}>
                                                    <div className="text-center">
                                                        <h2 className="mt-0">
                                                            <i className="mdi mdi-check-all"></i>
                                                        </h2>
                                                        <h3 className="mt-0">Thank you !</h3>

                                                        <p className="w-75 mb-2 mx-auto">
                                                            Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                            dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                            mattis dictum aliquet.
                                                        </p>

                                                        <div className="mb-3">
                                                            <Form.Check type="checkbox" id="check3">
                                                                <Form.Check.Input type="checkbox" />{' '}
                                                                <Form.Check.Label>
                                                                    I agree with the Terms and Conditions
                                                                </Form.Check.Label>
                                                            </Form.Check>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col sm={12}>
                                                    <ul className="list-inline wizard mb-0">
                                                        <li className="previous list-inline-item">
                                                            <Button onClick={previous} variant="secondary">
                                                                Previous
                                                            </Button>
                                                        </li>

                                                        <li className="next list-inline-item float-end">
                                                            <Button variant="secondary">Submit</Button>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        )}
                                    />
                                </Steps>
                            </React.Fragment>
                        )}
                    />
                </Card.Body>
            </Card>
        );
    };

    const tabContents: TabContentType[] = [
        {
            id: 1,
            title: 'Party Info',
            icon: 'uil-home-alt',
            text: `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor.Aenean massa.Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Nulla consequat massa quis enim.`,
            text2: partyForm(),
        },
        {
            id: 2,
            title: 'Profile',
            icon: 'uil-user',
            text: `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                    tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim.`,
            text2: form3(),
        },
        {
            id: 3,
            title: 'Messages',
            icon: 'uil-envelope',
            text: `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor.Aenean massa.Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Nulla consequat massa quis enim.`,
            text2: form2(),
        },
    ];
    const [formData, updateFormData] = React.useState({});

    return (
        <>
            <Row>
                {NavPills()}            </Row>
        </>
    );
};

export default CreateParty;


const saveData = (event: any) => {

    console.log(event);
}

function t(arg0: string) {
    throw new Error('Function not implemented.');
}

