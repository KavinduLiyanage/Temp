/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import RangeSlider from '../../findSpaces/components/rangeSlider';

const WishlistFilter = () => {
    return (
        <div className="wishlist-filter">
            <RangeSlider />
            <div>
                <Formik
                    initialValues={{
                        toggle: false,
                        checked: [],
                    }}
                    onSubmit={async values => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <div id="checkbox-group">Condition</div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label>
                                <Field type="checkbox" name="checked" value="One" />
                                One
                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="Two" />
                                Two
                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="Three" />
                                Three
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default WishlistFilter;
